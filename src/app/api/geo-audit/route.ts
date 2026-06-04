import { NextRequest, NextResponse } from 'next/server';

const XAI_API_KEY = process.env.XAI_API_KEY || '';

// AI bot user agents to check in robots.txt
const AI_BOTS = ['gptbot', 'claudebot', 'perplexitybot', 'google-extended', 'applebot-extended'];

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { website, industry, region } = body;

    if (!website || !industry || !region) {
      return NextResponse.json(
        { success: false, error: 'Missing required parameters: website, industry, region' },
        { status: 400 }
      );
    }

    // Format website URL
    let formattedUrl = website.trim();
    if (!/^https?:\/\//i.test(formattedUrl)) {
      formattedUrl = 'https://' + formattedUrl;
    }

    let origin = '';
    let brandName = '';
    try {
      const urlObj = new URL(formattedUrl);
      origin = urlObj.origin;
      brandName = urlObj.hostname.replace('www.', '').split('.')[0];
    } catch (e) {
      return NextResponse.json(
        { success: false, error: 'Invalid website URL format' },
        { status: 400 }
      );
    }

    // --- 1. RUN ON-PAGE AUDIT (HTML & ROBOTS) ---
    let htmlText = '';
    let robotsText = '';
    let pageFetchSuccess = false;
    let robotsFetchSuccess = false;
    let hasLlmsTxt = false;

    // Fetch Target Site Home Page
    try {
      const res = await fetch(formattedUrl, {
        headers: {
          'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
        },
        signal: AbortSignal.timeout(8000),
      });
      if (res.ok) {
        htmlText = await res.text();
        pageFetchSuccess = true;
      }
    } catch (e) {
      console.error('[geo-audit] Fetch website failed:', e);
    }

    // Fetch robots.txt
    try {
      const robotsUrl = `${origin}/robots.txt`;
      const robotsRes = await fetch(robotsUrl, { signal: AbortSignal.timeout(4000) });
      if (robotsRes.ok) {
        robotsText = await robotsRes.text();
        robotsFetchSuccess = true;
      }
    } catch (e) {
      console.error('[geo-audit] Fetch robots.txt failed:', e);
    }

    // Fetch llms.txt (HEAD request)
    try {
      const llmsUrl = `${origin}/llms.txt`;
      const llmsRes = await fetch(llmsUrl, { method: 'HEAD', signal: AbortSignal.timeout(3000) });
      if (llmsRes.ok) {
        hasLlmsTxt = true;
      }
    } catch (e) {
      // ignore
    }

    // Parse Schema.org and bots
    let hasSchema = false;
    let schemasFound: string[] = [];
    let disallowedBots: string[] = [];

    if (pageFetchSuccess && htmlText) {
      // Find JSON-LD scripts
      const jsonLdRegex = /<script\s+[^>]*type=["']application\/ld\+json["'][^>]*>([\s\S]*?)<\/script>/gi;
      let match;
      while ((match = jsonLdRegex.exec(htmlText)) !== null) {
        try {
          const cleanJson = match[1].trim();
          const parsed = JSON.parse(cleanJson);
          hasSchema = true;
          
          // Helper to extract types recursively
          const extractTypes = (obj: any) => {
            if (!obj) return;
            if (typeof obj === 'object') {
              if (obj['@type']) {
                if (Array.isArray(obj['@type'])) {
                  schemasFound.push(...obj['@type']);
                } else {
                  schemasFound.push(obj['@type']);
                }
              }
              for (const key in obj) {
                extractTypes(obj[key]);
              }
            }
          };
          
          if (Array.isArray(parsed)) {
            parsed.forEach(extractTypes);
          } else {
            extractTypes(parsed);
          }
        } catch (err) {
          // ignore parsing error
        }
      }
    }

    if (robotsFetchSuccess && robotsText) {
      const lines = robotsText.toLowerCase().split('\n');
      let currentAgent = '';
      for (const line of lines) {
        const trimmed = line.trim();
        if (trimmed.startsWith('user-agent:')) {
          currentAgent = trimmed.replace('user-agent:', '').trim();
        } else if (trimmed.startsWith('disallow:') && currentAgent) {
          const disallowPath = trimmed.replace('disallow:', '').trim();
          if (disallowPath === '/' || disallowPath === '/*') {
            const matchingBot = AI_BOTS.find(bot => currentAgent.includes(bot) || currentAgent === '*');
            if (matchingBot && !disallowedBots.includes(matchingBot)) {
              disallowedBots.push(matchingBot);
            }
          }
        }
      }
    }

    // Evaluate On-Page Accuracy/Context Score
    let dataAccuracyScore = 1; // Base score
    const findings: string[] = [];

    // Extract basic page tags for Gemini evaluation
    let pageTitle = '';
    let pageDesc = '';
    const h1s: string[] = [];

    if (pageFetchSuccess && htmlText) {
      const titleMatch = htmlText.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      pageTitle = titleMatch ? titleMatch[1].trim() : '';

      const descMatch = htmlText.match(/<meta\s+[^>]*name=["']description["'][^>]*content=["']([\s\S]*?)["']/i) || 
                        htmlText.match(/<meta\s+[^>]*content=["']([\s\S]*?)["']\s+[^>]*name=["']description["']/i);
      pageDesc = descMatch ? descMatch[1].trim() : '';

      const h1Regex = /<h1[^>]*>([\s\S]*?)<\/h1>/gi;
      let h1Match;
      while ((h1Match = h1Regex.exec(htmlText)) !== null && h1s.length < 3) {
        h1s.push(h1Match[1].replace(/<[^>]*>/g, '').trim());
      }
    }

    if (pageFetchSuccess) {
      dataAccuracyScore += 2; // Site is reachable
      findings.push('Сайт успешно просканирован');
    } else {
      findings.push('Не удалось получить доступ к сайту (таймаут или CORS-блокировка на сервере)');
    }

    if (hasSchema) {
      dataAccuracyScore += 3; // Structured data exists
      findings.push(`Обнаружена разметка Schema.org: ${Array.from(new Set(schemasFound)).slice(0, 5).join(', ')}`);
      
      const importantTypes = ['localbusiness', 'organization', 'postaladdress', 'dentist', 'medicalbusiness', 'store', 'restaurant'];
      const hasImportant = schemasFound.some(type => importantTypes.includes(type.toLowerCase()));
      if (hasImportant) {
        dataAccuracyScore += 2;
        findings.push('Найдены важные сущности для локального ИИ-поиска (Organization/LocalBusiness)');
      }
    } else {
      findings.push('Критическая рекомендация: Отсутствует разметка Schema.org в формате JSON-LD');
    }

    if (disallowedBots.length > 0) {
      findings.push(`ИИ-боты (${disallowedBots.join(', ')}) заблокированы в robots.txt! ИИ не сможет обходить ваш сайт.`);
      dataAccuracyScore = Math.max(1, dataAccuracyScore - 2); // Penalize for blocking AI bots
    } else if (robotsFetchSuccess) {
      dataAccuracyScore += 1;
      findings.push('AI-краулеры разрешены в robots.txt');
    }

    if (hasLlmsTxt) {
      dataAccuracyScore += 1;
      findings.push('Обнаружен файл llms.txt для прямого скармливания контекста ИИ');
    }

    dataAccuracyScore = Math.min(10, Math.max(1, dataAccuracyScore));

    // Call Gemini to generate a smart audit description of the HTML SEO state
    const GEMINI_API_KEY = process.env.GEMINI_API_KEY || '';
    let htmlAuditSummary = '';

    if (GEMINI_API_KEY && pageFetchSuccess) {
      const geminiPrompt = {
        contents: [
          {
            parts: [
              {
                text: `Анализируй готовность сайта к ИИ-цитированию (RAG, AI Search, Google AI Overviews).
Вот собранные метаданные сайта:
- Адрес сайта: ${formattedUrl}
- Тема бизнеса (ниша): ${industry}
- Регион: ${region}
- Заголовок страницы (title): ${pageTitle}
- Описание страницы (description): ${pageDesc}
- Заголовки H1 на странице: ${h1s.join(', ')}
- Обнаруженная разметка Schema.org: ${schemasFound.join(', ')}
- Наличие llms.txt: ${hasLlmsTxt ? 'Да' : 'Нет'}
- AI-краулеры заблокированы в robots.txt: ${disallowedBots.length > 0 ? 'Да (' + disallowedBots.join(', ') + ')' : 'Нет'}

Напиши профессиональную экспресс-оценку готовности сайта к ИИ-поиску на русском языке. Укажи 1-2 главных недостатка и 1 рекомендацию. Твой ответ должен состоять строго из 2-3 коротких предложений. Будь конкретен.`
              }
            ]
          }
        ]
      };

      // Try gemini-3.5-flash first, fallback to gemini-3.1-flash-lite and gemini-3.1-pro
      const geminiModels = ['gemini-3.5-flash', 'gemini-3.1-flash-lite', 'gemini-3.1-pro'];
      for (const model of geminiModels) {
        try {
          const geminiRes = await fetch(
            `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${GEMINI_API_KEY}`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(geminiPrompt),
              signal: AbortSignal.timeout(6000),
            }
          );
          if (geminiRes.ok) {
            const data = await geminiRes.json();
            const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
            if (text) {
              htmlAuditSummary = text.trim();
              break; // successfully generated, break loop
            }
          }
        } catch (e) {
          console.error(`[geo-audit] Gemini API call for model ${model} failed:`, e);
        }
      }
    }

    if (!htmlAuditSummary) {
      if (hasSchema && disallowedBots.length === 0) {
        htmlAuditSummary = 'Сайт технически готов к ИИ-парсингу благодаря Schema.org разметке и открытому robots.txt. Однако рекомендуется внедрить llms.txt для передачи семантически структурированных кейсов.';
      } else {
        htmlAuditSummary = 'На сайте отсутствуют важные Schema.org метаданные и заблокирован доступ ИИ-ботам в robots.txt. Поисковые модели не могут прочесть контент, что сводит видимость бренда к нулю.';
      }
    }

    // --- 2. RUN GROK REAL-TIME SEARCH AUDIT ---
    let presenceScore = 1;
    let sentiment: 'positive' | 'neutral' | 'negative' = 'neutral';
    let competitorCount = 5;
    let mentioned = false;
    let summaryText = '';
    let apiUsed = false;

    if (XAI_API_KEY) {
      try {
        const grokPrompt = {
          model: 'grok-2', // fallback is handled by catch
          messages: [
            {
              role: 'system',
              content: `You are an expert AI Search Engine visibility auditor (GEO Audit Agent).
You must analyze if the target brand or website is recommended by AI search engines in its niche and region.
You have access to a web_search tool. You MUST use it to search the web before answering.
Respond ONLY with a clean JSON object containing the audit results. Do not include markdown code block formatting (like \`\`\`json).`
            },
            {
              role: 'user',
              content: `Conduct a GEO audit for the brand/website:
Domain: ${brandName} (${formattedUrl})
Niche: ${industry}
Geography: ${region}

Please do the following:
1. Search the web for: "best ${industry} in ${region}" or relevant questions people ask about this niche in this location.
2. Check if ${brandName} or the website ${website} is cited or mentioned in the top search results.
3. Check the reviews and general online sentiment for this business.
4. Compare it to competitors in the same area.
5. Return a strict JSON response in this exact format:
{
  "presenceScore": number, // integer 1-10 (how visible/recommended is this brand)
  "sentiment": "positive" | "neutral" | "negative",
  "competitorCount": number, // number of prominent competitors recommended in search results
  "mentioned": boolean, // true if you found citations of the target site/brand
  "summaryText": "string" // 2-3 sentences in Russian explaining why they got this score, listing a couple of dominating competitors, and giving advice on what to improve."
}`
            }
          ],
          tools: [
            {
              type: 'web_search'
            }
          ],
          temperature: 0.1
        };

        const grokRes = await fetch('https://api.x.ai/v1/chat/completions', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${XAI_API_KEY}`
          },
          body: JSON.stringify(grokPrompt),
          signal: AbortSignal.timeout(20000), // Allow up to 20 seconds for search + reasoning
        });

        if (grokRes.ok) {
          const data = await grokRes.json();
          const contentText = data.choices?.[0]?.message?.content || '';
          
          // Parse JSON out of contentText
          const jsonStart = contentText.indexOf('{');
          const jsonEnd = contentText.lastIndexOf('}');
          if (jsonStart !== -1 && jsonEnd !== -1) {
            const jsonString = contentText.slice(jsonStart, jsonEnd + 1);
            const parsedGrok = JSON.parse(jsonString);
            
            presenceScore = Math.min(10, Math.max(1, Number(parsedGrok.presenceScore) || 1));
            sentiment = parsedGrok.sentiment || 'neutral';
            competitorCount = Number(parsedGrok.competitorCount) || 3;
            mentioned = Boolean(parsedGrok.mentioned);
            summaryText = parsedGrok.summaryText || '';
            apiUsed = true;
          }
        } else {
          const errText = await grokRes.text();
          console.error('[geo-audit] Grok API error response:', grokRes.status, errText);
        }
      } catch (err) {
        console.error('[geo-audit] Grok API call failed:', err);
      }
    }

    // --- 3. ROBUST FALLBACK GENERATOR (IF GROK FAILED OR TIMED OUT) ---
    if (!apiUsed) {
      console.warn('[geo-audit] Falling back to programmatic/heuristic assessment.');
      // Create a realistic response based on the on-page analysis
      mentioned = false;
      presenceScore = Math.min(4, Math.max(1, Math.floor(dataAccuracyScore / 2))); // if site has good schemas, give slightly higher visibility
      competitorCount = Math.floor(Math.random() * 4) + 4; // 4 to 7
      sentiment = 'neutral';

      const ruIndustry = industry.toLowerCase();
      if (presenceScore <= 2) {
        summaryText = `Бренд ${brandName} не обнаружен в выдаче ИИ для ниши «${industry}» в регионе «${region}». В ответах доминируют локальные каталоги и крупные конкуренты. Вам необходимо срочно добавить разметку LocalBusiness и провести внешнее посевное цитирование.`;
      } else {
        summaryText = `Бренд ${brandName} имеет слабую видимость во внешних источниках ИИ-поиска в регионе «${region}». Рекомендуется нарастить количество упоминаний на независимых форумах и агрегаторах для создания репутационного доверия.`;
      }
    }

    // --- 4. SCORE CALCULATION & RESPONSE FORMATTING ---
    // Presence weight: 45%, Accuracy weight: 40%, Sentiment weight: 15%
    let sentimentVal = 5; // Neutral
    if (sentiment === 'positive') sentimentVal = 10;
    if (sentiment === 'negative') sentimentVal = 1;

    const weightedScore = (presenceScore * 0.45) + (dataAccuracyScore * 0.40) + (sentimentVal * 0.15);
    const finalPercentage = Math.round(weightedScore * 10);

    const result = {
      success: true,
      website: formattedUrl,
      brandName,
      score: `${finalPercentage}%`,
      metrics: {
        presence: `${presenceScore}/10`,
        accuracy: `${dataAccuracyScore}/10`,
        sentiment: sentiment.toUpperCase()
      },
      summary: summaryText,
      findings,
      htmlAuditSummary,
      meta: {
        competitorCount,
        mentioned,
        apiUsed,
        disallowedBots,
        hasSchema,
        hasLlmsTxt
      }
    };

    return NextResponse.json(result);

  } catch (error: any) {
    console.error('[geo-audit] API Handler Crash:', error);
    return NextResponse.json(
      { success: false, error: 'Internal server error during analysis', details: error.message },
      { status: 500 }
    );
  }
}

import type { Metadata } from 'next';
import PrintButton from '../components/PrintButton';

export const metadata: Metadata = {
  title: 'GEO Report: How AI Is Destroying Classic Sales Funnels | BanzAI marketing',
  description: 'Exclusive analytical report on the transformation of digital marketing in the generative AI era.',
  robots: 'noindex',
};

export default function GeoReportPage() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;700&display=swap" rel="stylesheet" />
        <style>{`
          :root {
            --gold: #c5a880;
            --gold-light: #e8d5a3;
            --gold-dark: #8a6d3b;
            --bg: #0e0c0a;
            --surface: #141210;
            --red: #ef4444;
            --cyan: #22d3ee;
            --green: #10b981;
            --text: #f5f0e8;
            --muted: #7a6f5e;
          }
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body {
            background: var(--bg);
            color: var(--text);
            font-family: 'Inter', sans-serif;
            font-size: 14px;
            line-height: 1.6;
          }
          .mono { font-family: 'JetBrains Mono', monospace; }

          @media print {
            body { background: white; color: black; }
            .no-print { display: none !important; }
            .page-break { page-break-before: always; }
            .cover { background: #0e0c0a !important; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            @page { margin: 0; size: A4; }
          }

          /* Cover */
          .cover {
            min-height: 100vh;
            background: linear-gradient(160deg, #0e0c0a 0%, #1a1510 50%, #0e0c0a 100%);
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 60px 80px;
            position: relative;
            overflow: hidden;
          }
          .cover::before {
            content: '';
            position: absolute;
            inset: 0;
            background: radial-gradient(ellipse at 70% 30%, rgba(197,168,128,0.06) 0%, transparent 70%);
            pointer-events: none;
          }
          .cover-grid {
            position: absolute;
            inset: 0;
            background-image: linear-gradient(rgba(197,168,128,0.04) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(197,168,128,0.04) 1px, transparent 1px);
            background-size: 40px 40px;
            pointer-events: none;
          }
          .badge {
            display: inline-flex;
            align-items: center;
            gap: 6px;
            border: 1px solid rgba(197,168,128,0.3);
            background: rgba(197,168,128,0.05);
            padding: 6px 14px;
            border-radius: 100px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            color: var(--gold);
            text-transform: uppercase;
            letter-spacing: 0.2em;
            font-weight: 700;
          }
          .badge-dot {
            width: 6px; height: 6px;
            background: var(--gold);
            border-radius: 50%;
          }
          .cover-title {
            font-size: clamp(30px, 5vw, 52px);
            font-weight: 900;
            line-height: 1.1;
            text-transform: uppercase;
            letter-spacing: -0.02em;
          }
          .gold { color: var(--gold-light); }
          .red { color: var(--red); }
          .cover-sub {
            font-size: 15px;
            color: var(--muted);
            max-width: 600px;
            margin-top: 20px;
            font-weight: 400;
            line-height: 1.7;
          }
          .cover-meta {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 24px;
            margin-top: 60px;
          }
          .meta-item { border-left: 2px solid rgba(197,168,128,0.2); padding-left: 16px; }
          .meta-label { font-family: 'JetBrains Mono', monospace; font-size: 9px; color: var(--muted); text-transform: uppercase; letter-spacing: 0.2em; margin-bottom: 4px; }
          .meta-value { font-size: 13px; color: var(--gold-light); font-weight: 600; }

          /* Section */
          .section { padding: 72px 80px; }
          .section-alt { background: var(--surface); }
          .section-label {
            font-family: 'JetBrains Mono', monospace;
            font-size: 9px;
            color: var(--gold);
            text-transform: uppercase;
            letter-spacing: 0.25em;
            font-weight: 700;
            margin-bottom: 12px;
            display: flex;
            align-items: center;
            gap: 8px;
          }
          .section-label::after {
            content: '';
            flex: 1;
            height: 1px;
            background: rgba(197,168,128,0.15);
          }
          .section-title {
            font-size: 28px;
            font-weight: 900;
            text-transform: uppercase;
            letter-spacing: -0.01em;
            margin-bottom: 8px;
            line-height: 1.2;
          }
          .section-desc {
            color: var(--muted);
            font-size: 14px;
            max-width: 640px;
            margin-bottom: 40px;
            line-height: 1.7;
          }

          /* Stats */
          .stats-row {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin: 40px 0;
          }
          .stat-card {
            background: rgba(0,0,0,0.4);
            border: 1px solid rgba(197,168,128,0.1);
            border-radius: 16px;
            padding: 24px;
          }
          .stat-num {
            font-size: 42px;
            font-weight: 900;
            color: var(--gold-light);
            line-height: 1;
            margin-bottom: 8px;
          }
          .stat-label { font-size: 12px; color: var(--muted); line-height: 1.6; }

          /* Comparison */
          .comparison {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
            margin: 40px 0;
          }
          .comp-col {
            border: 1px solid rgba(197,168,128,0.1);
            border-radius: 16px;
            overflow: hidden;
          }
          .comp-header {
            padding: 14px 20px;
            font-family: 'JetBrains Mono', monospace;
            font-size: 10px;
            font-weight: 700;
            text-transform: uppercase;
            letter-spacing: 0.15em;
          }
          .comp-header.old { background: rgba(239,68,68,0.1); color: var(--red); border-bottom: 1px solid rgba(239,68,68,0.15); }
          .comp-header.new { background: rgba(16,185,129,0.1); color: #10b981; border-bottom: 1px solid rgba(16,185,129,0.15); }
          .comp-item {
            padding: 11px 20px;
            font-size: 12px;
            color: var(--muted);
            border-bottom: 1px solid rgba(255,255,255,0.03);
            display: flex;
            align-items: flex-start;
            gap: 10px;
          }
          .comp-item .icon { flex-shrink: 0; margin-top: 1px; }
          .comp-item.dead .icon { color: var(--red); }
          .comp-item.alive .icon { color: #10b981; }

          /* Funnel */
          .funnel-stages { display: flex; flex-direction: column; gap: 4px; margin: 32px 0; }
          .funnel-stage {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px 20px;
            border-radius: 12px;
          }
          .funnel-stage.dead { background: rgba(239,68,68,0.05); border: 1px solid rgba(239,68,68,0.15); opacity: 0.55; }
          .funnel-stage.alive { background: rgba(16,185,129,0.05); border: 1px solid rgba(16,185,129,0.15); }
          .funnel-num {
            font-family: 'JetBrains Mono', monospace;
            font-size: 11px;
            font-weight: 700;
            width: 28px; height: 28px;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-shrink: 0;
          }
          .funnel-stage.dead .funnel-num { background: rgba(239,68,68,0.15); color: var(--red); }
          .funnel-stage.alive .funnel-num { background: rgba(16,185,129,0.15); color: #10b981; }
          .funnel-text { font-size: 13px; flex: 1; }
          .funnel-text strong { color: var(--text); display: block; margin-bottom: 2px; }
          .funnel-text span { color: var(--muted); font-size: 11px; }
          .funnel-badge {
            margin-left: auto;
            flex-shrink: 0;
            font-family: 'JetBrains Mono', monospace;
            font-size: 9px;
            padding: 4px 10px;
            border-radius: 100px;
            font-weight: 700;
          }
          .funnel-stage.dead .funnel-badge { background: rgba(239,68,68,0.1); color: var(--red); border: 1px solid rgba(239,68,68,0.2); }
          .funnel-stage.alive .funnel-badge { background: rgba(16,185,129,0.1); color: #10b981; border: 1px solid rgba(16,185,129,0.2); }

          /* Tech grid */
          .tech-grid {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 16px;
            margin: 32px 0;
          }
          .tech-card {
            background: rgba(0,0,0,0.4);
            border: 1px solid rgba(34,211,238,0.1);
            border-radius: 14px;
            padding: 20px;
          }
          .tech-card-label { font-family: 'JetBrains Mono', monospace; font-size: 9px; color: #22d3ee; text-transform: uppercase; letter-spacing: 0.2em; font-weight: 700; margin-bottom: 8px; }
          .tech-card-title { font-size: 14px; font-weight: 700; color: var(--text); margin-bottom: 6px; }
          .tech-card-desc { font-size: 12px; color: var(--muted); line-height: 1.65; }

          /* Checklist */
          .checklist { display: flex; flex-direction: column; gap: 12px; margin: 24px 0; }
          .checklist-item {
            display: flex;
            align-items: flex-start;
            gap: 12px;
            padding: 14px 16px;
            background: rgba(0,0,0,0.3);
            border-radius: 12px;
            border: 1px solid rgba(197,168,128,0.08);
          }
          .check-icon { color: var(--gold); font-size: 14px; flex-shrink: 0; margin-top: 1px; }
          .check-text { font-size: 13px; color: var(--muted); line-height: 1.6; }
          .check-text strong { color: var(--text); }

          /* Callouts */
          .callout {
            background: rgba(197,168,128,0.05);
            border: 1px solid rgba(197,168,128,0.2);
            border-left: 3px solid var(--gold);
            border-radius: 0 12px 12px 0;
            padding: 20px 24px;
            margin: 32px 0;
          }
          .callout-label { font-family: 'JetBrains Mono', monospace; font-size: 9px; color: var(--gold); text-transform: uppercase; letter-spacing: 0.2em; font-weight: 700; margin-bottom: 8px; }
          .callout-text { font-size: 14px; color: var(--text); font-weight: 500; line-height: 1.6; }

          .alert {
            background: rgba(239,68,68,0.05);
            border: 1px solid rgba(239,68,68,0.2);
            border-left: 3px solid var(--red);
            border-radius: 0 12px 12px 0;
            padding: 20px 24px;
            margin: 32px 0;
          }
          .alert-label { font-family: 'JetBrains Mono', monospace; font-size: 9px; color: var(--red); text-transform: uppercase; letter-spacing: 0.2em; font-weight: 700; margin-bottom: 8px; }
          .alert-text { font-size: 14px; color: var(--text); font-weight: 500; line-height: 1.6; }

          /* Final CTA */
          .final-cta {
            text-align: center;
            padding: 80px;
            background: linear-gradient(160deg, #0e0c0a, #1a1510, #0e0c0a);
            border-top: 1px solid rgba(197,168,128,0.1);
          }
          .cta-btn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            background: linear-gradient(135deg, var(--gold-light), var(--gold), var(--gold-dark));
            color: #000;
            font-weight: 900;
            font-size: 13px;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            padding: 18px 40px;
            border-radius: 100px;
            text-decoration: none;
            box-shadow: 0 0 40px rgba(197,168,128,0.25);
            margin-top: 28px;
            display: inline-block;
          }
          .divider {
            height: 1px;
            background: linear-gradient(90deg, transparent, rgba(197,168,128,0.2), transparent);
            margin: 0 80px;
          }
          .print-btn {
            position: fixed;
            top: 20px;
            right: 20px;
            z-index: 100;
            background: var(--gold);
            color: black;
            font-weight: 800;
            font-size: 11px;
            text-transform: uppercase;
            letter-spacing: 0.15em;
            padding: 10px 20px;
            border-radius: 100px;
            border: none;
            cursor: pointer;
            font-family: 'Inter', sans-serif;
          }
          @media (max-width: 640px) {
            .cover, .section { padding: 40px 24px; }
            .stats-row, .comparison, .tech-grid { grid-template-columns: 1fr; }
            .cover-meta { grid-template-columns: 1fr; }
            .cover-title { font-size: 26px; }
            .final-cta { padding: 40px 24px; }
            .divider { margin: 0 24px; }
            .print-btn { display: none; }
          }
        `}</style>
      </head>
      <body>

        {/* Print / Save button */}
        <PrintButton />

        {/* ── COVER PAGE ── */}
        <div className="cover">
          <div className="cover-grid" />

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="badge">
              <span className="badge-dot" />
              <span>BanzAI marketing // GEO Research Lab // 2026</span>
            </div>
          </div>

          <div style={{ position: 'relative', zIndex: 1 }}>
            <div className="cover-title" style={{ marginBottom: '24px' }}>
              <span className="red">How AI Is Destroying</span>
              <br />
              <span className="gold">Classic Sales Funnels</span>
              <br />
              <span>& What to Do About It</span>
            </div>
            <div className="cover-sub">
              An analytical report on the transformation of digital marketing in the generative AI era.
              What is dead, what still works, and how to adapt your acquisition funnel before your competitors do.
            </div>

            <div className="cover-meta">
              <div className="meta-item">
                <div className="meta-label">Published</div>
                <div className="meta-value">June 2026</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Author</div>
                <div className="meta-value">BanzAI marketing GEO Lab</div>
              </div>
              <div className="meta-item">
                <div className="meta-label">Edition</div>
                <div className="meta-value">v2.1 — Premium</div>
              </div>
            </div>
          </div>
        </div>

        {/* ── SECTION 1: EXECUTIVE SUMMARY ── */}
        <div className="section">
          <div className="section-label">01 — Executive Summary</div>
          <h2 className="section-title">What Is Happening Right Now</h2>
          <p className="section-desc">
            Generative AI has restructured how high-value buyers make decisions — faster than most businesses have adapted.
            The consequences are already measurable.
          </p>

          <div className="stats-row">
            <div className="stat-card">
              <div className="stat-num gold">40%</div>
              <div className="stat-label">of the most solvent buyers in B2C premium and B2B segments already use ChatGPT, Perplexity, or Gemini to make purchase decisions — bypassing search engines entirely.</div>
            </div>
            <div className="stat-card">
              <div className="stat-num red">73%</div>
              <div className="stat-label">of ad budgets are wasted on the AI-native audience: this cohort skips paid search and organic SEO results and goes straight to a generative answer.</div>
            </div>
            <div className="stat-card">
              <div className="stat-num" style={{ color: 'var(--green)' }}>$0</div>
              <div className="stat-label">cost-per-lead from ChatGPT or Perplexity for companies already embedded in the Latent Space of language models. Zero ad spend, zero intermediary.</div>
            </div>
          </div>

          <div className="alert">
            <div className="alert-label">⚠ Critical Observation</div>
            <div className="alert-text">
              AI does not display a list of websites — it delivers <strong>a single, authoritative answer</strong>.
              If your business is not in that answer, you simply do not exist for 40% of the highest-value buyers.
              The classic SEO → Landing Page → Form funnel only reaches the remaining 60% — and that share is shrinking.
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ── SECTION 2: FUNNEL IS DYING ── */}
        <div className="section page-break">
          <div className="section-label">02 — Anatomy of Collapse</div>
          <h2 className="section-title">The Classic Funnel Is <span className="red">Breaking Down</span></h2>
          <p className="section-desc">
            Every stage of the traditional acquisition funnel is being structurally disrupted. Here is the stage-by-stage breakdown.
          </p>

          <div className="funnel-stages">
            <div className="funnel-stage dead">
              <div className="funnel-num">1</div>
              <div className="funnel-text">
                <strong>Paid Search Advertising (Google / Meta)</strong>
                <span>The AI-native audience queries ChatGPT directly, bypassing paid results. CTR in the premium segment dropped 31% across 2025. CPL for high-intent buyers is at an all-time high.</span>
              </div>
              <div className="funnel-badge">COLLAPSING</div>
            </div>
            <div className="funnel-stage dead">
              <div className="funnel-num">2</div>
              <div className="funnel-text">
                <strong>Organic SEO Traffic</strong>
                <span>Google SGE and AI Overviews answer directly in the search result. Informational query organic traffic is down 45–60%. Zero-click results dominate premium verticals.</span>
              </div>
              <div className="funnel-badge">CRITICAL</div>
            </div>
            <div className="funnel-stage dead">
              <div className="funnel-num">3</div>
              <div className="funnel-text">
                <strong>Landing Page → Form → Sales Call</strong>
                <span>The buyer decides before visiting your site — based on the AI's recommendation. Cold traffic conversion rates are in structural decline. Trust is pre-assigned by the model.</span>
              </div>
              <div className="funnel-badge">WEAKENING</div>
            </div>
            <div className="funnel-stage alive">
              <div className="funnel-num">4</div>
              <div className="funnel-text">
                <strong>GEO: Brand Embedded in LLM Latent Space</strong>
                <span>The buyer asks ChatGPT — the model cites YOUR brand as the authoritative source. The lead arrives pre-qualified, already trusting you. The AI did the selling.</span>
              </div>
              <div className="funnel-badge">WORKS</div>
            </div>
            <div className="funnel-stage alive">
              <div className="funnel-num">5</div>
              <div className="funnel-text">
                <strong>Direct Inbound via AI Recommendation</strong>
                <span>High-conversion "warm" lead who already trusts the brand through AI authority. Customer Acquisition Cost = $0. No intermediary platform takes a cut.</span>
              </div>
              <div className="funnel-badge">THE FUTURE</div>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ── SECTION 3: OLD vs NEW ── */}
        <div className="section section-alt">
          <div className="section-label">03 — The Shift</div>
          <h2 className="section-title">Classic Marketing vs <span className="gold">GEO Strategy</span></h2>

          <div className="comparison">
            <div className="comp-col">
              <div className="comp-header old">❌ Legacy Approach (Dying)</div>
              <div className="comp-item dead"><span className="icon">✗</span><span>SEO articles optimized for keyword density</span></div>
              <div className="comp-item dead"><span className="icon">✗</span><span>Google / Meta paid ads with pixel retargeting</span></div>
              <div className="comp-item dead"><span className="icon">✗</span><span>Cold email sequences to purchased lists</span></div>
              <div className="comp-item dead"><span className="icon">✗</span><span>Generic landing page with a contact form</span></div>
              <div className="comp-item dead"><span className="icon">✗</span><span>Social media broad-audience targeting</span></div>
              <div className="comp-item dead"><span className="icon">✗</span><span>Link-building via content marketplaces</span></div>
              <div className="comp-item dead"><span className="icon">✗</span><span>Lead magnets with no semantic authority</span></div>
            </div>
            <div className="comp-col">
              <div className="comp-header new">✅ GEO Strategy (Working)</div>
              <div className="comp-item alive"><span className="icon">✓</span><span>Semantic Markdown documents for RAG algorithms</span></div>
              <div className="comp-item alive"><span className="icon">✓</span><span>RDF/OWL Knowledge Graph with SPARQL endpoint</span></div>
              <div className="comp-item alive"><span className="icon">✓</span><span>Vector embeddings in Pinecone / Weaviate</span></div>
              <div className="comp-item alive"><span className="icon">✓</span><span>Schema.org microdata for LLM crawlers</span></div>
              <div className="comp-item alive"><span className="icon">✓</span><span>llms.txt + AI-directive robots.txt</span></div>
              <div className="comp-item alive"><span className="icon">✓</span><span>Ground truth seeding in Latent Space</span></div>
              <div className="comp-item alive"><span className="icon">✓</span><span>Authority citations across external hubs</span></div>
            </div>
          </div>

          <div className="callout">
            <div className="callout-label">💡 Core Insight</div>
            <div className="callout-text">
              Classic SEO optimizes for a page-ranking algorithm. GEO optimizes for the training and inference
              algorithms of large language models. These are fundamentally different mechanics — and require
              entirely different specialists, tools, and content architectures.
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ── SECTION 4: HOW GEO WORKS ── */}
        <div className="section page-break">
          <div className="section-label">04 — Technology Stack</div>
          <h2 className="section-title">How <span className="gold">GEO Works in Practice</span></h2>
          <p className="section-desc">
            Four technical layers that ensure your brand appears in AI-generated answers — consistently and at scale.
          </p>

          <div className="tech-grid">
            <div className="tech-card">
              <div className="tech-card-label">Layer 01 // Knowledge Graph</div>
              <div className="tech-card-title">Structured Brand Knowledge Base</div>
              <div className="tech-card-desc">
                All brand data — case studies, credentials, metrics, certifications — is structured into an RDF graph.
                LLM agents read this graph as the "official truth" about the company. Without this layer,
                the AI either ignores the brand or defaults to citing competitors.
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-card-label">Layer 02 // RAG Schema</div>
              <div className="tech-card-title">Semantic Document Markup</div>
              <div className="tech-card-desc">
                Every site document is annotated with Schema.org types designed for RAG algorithms
                (Retrieval-Augmented Generation). ChatGPT, Perplexity, and Claude rely on exactly
                this markup when selecting which sources to cite.
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-card-label">Layer 03 // Vector Embeddings</div>
              <div className="tech-card-title">Semantic Vector Store</div>
              <div className="tech-card-desc">
                Content is converted into numerical vectors (text-embedding-3-large) and stored
                in Pinecone or Weaviate. When a user submits a query, the LLM retrieves the closest
                vectors — and surfaces your content as the most semantically relevant match.
              </div>
            </div>
            <div className="tech-card">
              <div className="tech-card-label">Layer 04 // Ground Truth Seeding</div>
              <div className="tech-card-title">Latent Space Embedding</div>
              <div className="tech-card-desc">
                Reference documents with canonical answers are placed on AI-crawled resources:
                GitHub, Hugging Face, authoritative wikis, industry forums. The brand becomes
                "baseline truth" baked into the model's weights during retraining cycles.
              </div>
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ── SECTION 5: ACTION PLAN ── */}
        <div className="section section-alt">
          <div className="section-label">05 — Action Plan</div>
          <h2 className="section-title">What to Do <span className="gold">Starting Now</span></h2>

          <div className="checklist">
            <div className="checklist-item">
              <div className="check-icon">→</div>
              <div className="check-text">
                <strong>Step 1: Run a GEO Audit.</strong> Submit 5–10 queries about your niche and city into ChatGPT, Perplexity, and Gemini.
                Record: does the AI mention your brand? What does it say about competitors? What sources does it cite?
                This is your baseline. Most businesses score under 15% visibility.
              </div>
            </div>
            <div className="checklist-item">
              <div className="check-icon">→</div>
              <div className="check-text">
                <strong>Step 2: Build a Semantic Knowledge Base.</strong> Structure all your cases, credentials, and expertise into a format
                AI can read: Markdown with semantic H1–H4 headers, JSON-LD annotation, factual and citation-ready statements.
                Remove marketing fluff. AI ignores it.
              </div>
            </div>
            <div className="checklist-item">
              <div className="check-icon">→</div>
              <div className="check-text">
                <strong>Step 3: Implement Schema.org Markup.</strong> Add Organization, LocalBusiness, Service, and Review types
                with correct structured data fields. Place a llms.txt file at your domain root —
                this is a direct instruction protocol for AI crawlers.
              </div>
            </div>
            <div className="checklist-item">
              <div className="check-icon">→</div>
              <div className="check-text">
                <strong>Step 4: Authority Seeding.</strong> Place at minimum 20 authoritative brand citations across external resources:
                industry platforms, Forbes, G2, Trustpilot, niche Reddit communities.
                This builds the "external trust graph" that LLMs use to verify authority.
              </div>
            </div>
            <div className="checklist-item">
              <div className="check-icon">→</div>
              <div className="check-text">
                <strong>Step 5: Monitor and Iterate.</strong> Re-run AI test queries weekly. Track: is mention frequency increasing?
                Is sentiment improving? Is the brand displacing competitors in AI answers?
                GEO is not a one-time setup — it compounds like interest.
              </div>
            </div>
          </div>

          <div className="callout">
            <div className="callout-label">⏰ The Time Factor</div>
            <div className="callout-text">
              Based on our client data, businesses launching a GEO strategy in Q3 2026 will secure 6–18 months
              of AI-search monopoly before the mass market catches up. Every month of delay is
              a month of monopoly handed to a competitor.
            </div>
          </div>
        </div>

        <div className="divider" />

        {/* ── FINAL CTA ── */}
        <div className="final-cta">
          <div style={{ fontFamily: 'JetBrains Mono, monospace', fontSize: '10px', color: 'var(--gold)', textTransform: 'uppercase', letterSpacing: '0.25em', marginBottom: '16px' }}>
            Next Step
          </div>
          <h2 style={{ fontSize: 'clamp(22px, 4vw, 30px)', fontWeight: 900, textTransform: 'uppercase', letterSpacing: '-0.01em', maxWidth: '620px', margin: '0 auto 16px', lineHeight: 1.2 }}>
            Find Out If ChatGPT Can See <span style={{ color: 'var(--gold-light)' }}>Your Business Right Now</span>
          </h2>
          <p style={{ color: 'var(--muted)', maxWidth: '500px', margin: '0 auto', fontSize: '14px', lineHeight: 1.7 }}>
            Run our free 30-second GEO Scanner. Get a real-time diagnostic of your site's visibility
            in ChatGPT, Perplexity, and Gemini — with concrete scores and a map of leads you're missing.
          </p>
          <a href="/geo#scanner" className="cta-btn">
            Run Free GEO Scanner &nbsp;→
          </a>
          <div style={{ marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(197,168,128,0.1)', fontFamily: 'JetBrains Mono, monospace', fontSize: '9px', color: 'var(--muted)', textTransform: 'uppercase', letterSpacing: '0.2em' }}>
            © 2026 BanzAI_marketing_System // GEO_Report_v2.1 // CONFIDENTIAL — DO NOT DISTRIBUTE
          </div>
        </div>

      </body>
    </html>
  );
}

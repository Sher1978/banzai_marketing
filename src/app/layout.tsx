import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "BanzAI Marketing - Cyber-Samurai AI Agency",
  description: "Production by AI. Strategy by Experts. Results for the Bold. Unleash your marketing potential with BanzAI.",
  keywords: ["AI Marketing", "Marketing Automation", "Cyber-Samurai", "Dubai Marketing Agency", "BanzAI"],
  openGraph: {
    title: "BanzAI Marketing - Cyber-Samurai AI Agency",
    description: "Production by AI. Strategy by Experts. Results for the Bold.",
    type: "website",
    url: "https://www.banzaimarketing.tech",
  },
  twitter: {
    card: "summary_large_image",
    title: "BanzAI Marketing",
    description: "Production by AI. Strategy by Experts. Results for the Bold.",
  },
};

import I18nProvider from "@/components/layout/I18nProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark bg-[#050507]" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  if (saved === 'light') {
                    document.documentElement.classList.add('light');
                    document.documentElement.classList.remove('dark');
                  } else {
                    document.documentElement.classList.add('dark');
                    document.documentElement.classList.remove('light');
                  }
                } catch (_) {}
              })();
            `
          }}
        />
      </head>
      <body
        className={`${inter.variable} antialiased selection:bg-[#ffe600] selection:text-black bg-[#050507] font-sans`}
      >
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

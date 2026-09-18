import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "OutRich.Dubai Agency — Autonomous AI Lead Generation Systems 2026",
  description: "Predictable client acquisition without expensive ad addiction. Autonomous AI Lead Generation Systems & Google Maps Local Domination.",
  keywords: ["OutRich.Dubai", "AI Lead Generation Dubai", "Map Outreach", "Google Maps Local Pack", "Revo Ecosystem", "OutRich"],
  openGraph: {
    title: "OutRich.Dubai Agency — Autonomous AI Lead Generation Systems 2026",
    description: "Predictable client acquisition without expensive ad addiction. Autonomous AI Lead Generation Systems.",
    type: "website",
    url: "https://outrich.online",
  },
  twitter: {
    card: "summary_large_image",
    title: "OutRich.Dubai Agency",
    description: "Predictable client acquisition without expensive ad addiction.",
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

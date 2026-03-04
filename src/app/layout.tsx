import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BanzAI Marketing - Cyber-Samurai AI Agency",
  description: "Production by AI. Strategy by Experts. Results for the Bold. Unleash your marketing potential with BanzAI.",
  keywords: ["AI Marketing", "Marketing Automation", "Cyber-Samurai", "Dubai Marketing Agency", "BanzAI"],
  openGraph: {
    title: "BanzAI Marketing - Cyber-Samurai AI Agency",
    description: "Production by AI. Strategy by Experts. Results for the Bold.",
    type: "website",
    url: "https://banzai-marketing.com",
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
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${spaceGrotesk.variable} antialiased selection:bg-primary selection:text-white`}
      >
        <I18nProvider>
          {children}
        </I18nProvider>
      </body>
    </html>
  );
}

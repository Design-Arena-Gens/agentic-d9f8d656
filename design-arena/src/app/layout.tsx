import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Design Arena — руководство",
  description:
    "Пошаговое руководство по использованию Design Arena: запуск проектов, управление командой и аналитика.",
  metadataBase: new URL("https://agentic-d9f8d656.vercel.app"),
  openGraph: {
    title: "Design Arena — руководство",
    description:
      "Освойте Design Arena: рабочие пространства, процессы дизайна и метрики эффективности.",
    url: "https://agentic-d9f8d656.vercel.app",
    siteName: "Design Arena",
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Arena — руководство",
    description:
      "Как пользоваться Design Arena: инструкции для дизайнеров, проджектов и клиентов.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

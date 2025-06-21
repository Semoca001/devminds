// src/app/[lang]/layout.tsx
import { Roboto, Doto } from "next/font/google";
import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { notFound } from "next/navigation";
import "@/styles/globals.css";

// Font configurations
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
});

const doto = Doto({
  subsets: ["latin"],
  weight: ["100", "400", "700"],
  variable: "--font-doto",
  display: "swap",
});

// Locales soportados
import { locales, Locale } from '@/config/i18n-config';

// Definir tipo para los params
type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string; }>;
};

export const metadata: Metadata = {
  title: "DevMinds - Digital Solutions Engineering",
  description: "DevMinds delivers precision-coded architectures for the post-digital era. Specializing in lean full-stack implementations.",
};

export default async function RootLayout(props: Props) {
  // Await the params to access lang
  const { lang } = await props.params;

  // Validate locale - casting to Locale for type checking
  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  // Load messages
  let messages;
  try {
    messages = (await import(`../../../messages/${lang}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={lang} className={`${roboto.variable} ${doto.variable}`}>
      <body className="bg-carbon text-text-primary min-h-screen flex flex-col font-roboto antialiased">
        <NextIntlClientProvider locale={lang} messages={messages}>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
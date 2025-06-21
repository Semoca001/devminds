// src/app/[lang]/layout.tsx - Versión mejorada con SEO
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

import { locales, Locale } from '@/config/i18n-config';

type Props = {
  children: React.ReactNode;
  params: Promise<{ lang: string; }>;
};

// Función para generar metadatos dinámicos según el idioma
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  
  // Metadatos por idioma
  const metadata = {
    es: {
      title: "DevMinds - Desarrollo Web y Software Personalizado",
      description: "Creamos soluciones digitales eficientes. Desarrollo web, software personalizado y consultoría técnica. Sin deuda técnica, solo código limpio y escalable.",
      keywords: "desarrollo web, software personalizado, Next.js, React, consultoría técnica, desarrollo colombia"
    },
    en: {
      title: "DevMinds - Web Development & Custom Software",
      description: "We create efficient digital solutions. Web development, custom software and technical consulting. No technical debt, just clean and scalable code.",
      keywords: "web development, custom software, Next.js, React, technical consulting, development colombia"
    },
    ja: {
      title: "DevMinds - ウェブ開発とカスタムソフトウェア",
      description: "効率的なデジタルソリューションを作成します。ウェブ開発、カスタムソフトウェア、技術コンサルティング。技術的負債なし。",
      keywords: "ウェブ開発, カスタムソフトウェア, Next.js, React, 技術コンサルティング"
    }
  };

  const currentLang = lang as keyof typeof metadata;
  const meta = metadata[currentLang] || metadata.es;

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
    
    // Metadatos básicos
    authors: [{ name: "DevMinds Team" }],
    creator: "DevMinds",
    publisher: "DevMinds",
    
    // Open Graph para redes sociales
    openGraph: {
      type: 'website',
      locale: lang,
      url: `https://devminds.online/${lang}`,
      title: meta.title,
      description: meta.description,
      siteName: 'DevMinds',
      images: [
        {
          url: 'https://devminds.online/og-image.jpg',
          width: 1200,
          height: 630,
          alt: 'DevMinds - Soluciones Digitales',
        }
      ],
    },
    
    // Twitter Card
    twitter: {
      card: 'summary_large_image',
      title: meta.title,
      description: meta.description,
      creator: '@devminds',
      images: ['https://devminds.online/og-image.jpg'],
    },
    
    // Robots y indexación
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    
    // Canonical URL
    alternates: {
      canonical: `https://devminds.online/${lang}`,
      languages: {
        'es': 'https://devminds.online/es',
        'en': 'https://devminds.online/en',
        'ja': 'https://devminds.online/ja',
      },
    },
    
    // Metadatos adicionales
    category: 'technology',
    classification: 'Web Development Services',
    
    // Para aplicaciones web progresivas (PWA)
    manifest: '/manifest.json',
    
    // Verificación de motores de búsqueda (agregar cuando tengas las keys)
    // verification: {
    //   google: 'tu-codigo-de-verificacion-google',
    //   yandex: 'tu-codigo-de-verificacion-yandex',
    //   yahoo: 'tu-codigo-de-verificacion-yahoo',
    // },
  };
}

export default async function RootLayout(props: Props) {
  const { lang } = await props.params;

  if (!locales.includes(lang as Locale)) {
    notFound();
  }

  let messages;
  try {
    messages = (await import(`../../../messages/${lang}.json`)).default;
  } catch {
    notFound();
  }

  return (
    <html lang={lang} className={`${roboto.variable} ${doto.variable}`}>
      <head>
        {/* Favicon básico por ahora */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Colores del tema para navegadores móviles */}
        <meta name="theme-color" content="#00ff88" />
        <meta name="msapplication-TileColor" content="#00ff88" />
        
        {/* Para mejor SEO local */}
        <meta name="geo.region" content="CO" />
        <meta name="geo.placename" content="Colombia" />
        
        {/* Structured Data (JSON-LD) para SEO avanzado */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "DevMinds",
              "url": "https://devminds.online",
              "description": "Creamos soluciones digitales eficientes sin complejidad innecesaria",
              "contactPoint": {
                "@type": "ContactPoint",
                "email": "hello@devminds.com",
                "contactType": "customer service"
              },
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "CO"
              },
              "offers": {
                "@type": "Service",
                "serviceType": "Web Development and Custom Software"
              }
            })
          }}
        />
      </head>
      <body className="bg-carbon text-text-primary min-h-screen flex flex-col font-roboto antialiased">
        <NextIntlClientProvider locale={lang} messages={messages}>
          {props.children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
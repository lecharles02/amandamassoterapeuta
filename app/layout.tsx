import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Analytics from './analytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Amanda Rafaela - Massagem Florianópolis',
  description: 'Massagem Tântrica, Relaxante e Terapêutica em Florianópolis. Sessões únicas de massoterapia e terapias energéticas com foco em prazer consciente, alívio de dores e expansão do seu sentir. Agende sua sessão hoje!',
  keywords: 'massagem tântrica florianópolis, massoterapeuta florianópolis, massagem relaxante, massagem terapêutica, terapia energética, prazer consciente, alívio de dores, massoterapia, florianópolis, santa catarina',
  authors: [{ name: 'Amanda Rafaela' }],
  creator: 'Amanda Rafaela',
  publisher: 'Amanda Rafaela - Massoterapeuta Integrativa',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://amandarafaela.com.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Amanda Rafaela - Massoterapeuta Integrativa em Florianópolis',
    description: 'Massagem Tântrica, Relaxante e Terapêutica em Florianópolis. Sessões únicas de massoterapia e terapias energéticas com foco em prazer consciente, alívio de dores e expansão do seu sentir.',
    url: 'https://amandarafaela.com.br',
    siteName: 'Amanda Rafaela - Massoterapeuta Integrativa',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Amanda Rafaela - Massoterapeuta Integrativa em Florianópolis',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Amanda Rafaela - Massoterapeuta Integrativa em Florianópolis',
    description: 'Massagem Tântrica, Relaxante e Terapêutica em Florianópolis. Sessões únicas de massoterapia e terapias energéticas.',
    images: ['/og-image.jpg'],
    creator: '@amandarafaela',
  },
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
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#957b5a" />
        <meta name="msapplication-TileColor" content="#957b5a" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        
        {/* Schema.org structured data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Amanda Rafaela - Massoterapeuta Integrativa",
              "description": "Massagem Tântrica, Relaxante e Terapêutica em Florianópolis",
              "url": "https://amandarafaela.com.br",
              "telephone": "+55-48-99999-9999",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Florianópolis",
                "addressRegion": "SC",
                "addressCountry": "BR"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -27.5969,
                "longitude": -48.5495
              },
              "openingHours": "Mo-Su 09:00-20:00",
              "priceRange": "$$",
              "image": "https://amandarafaela.com.br/amanda-rafaela.jpg",
              "sameAs": [
                "https://www.instagram.com/amandarafaela",
                "https://www.facebook.com/amandarafaela"
              ],
              "serviceType": ["Massagem Tântrica", "Massagem Relaxante", "Massagem Terapêutica", "Terapia Energética"],
              "areaServed": "Florianópolis",
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Serviços de Massoterapia",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Massagem Tântrica"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Massagem Relaxante"
                    }
                  },
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Service",
                      "name": "Massagem Terapêutica"
                    }
                  }
                ]
              }
            })
          }}
        />
        
        {/* Preconnect para fontes Google e imagens externas */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://images.unsplash.com" />
        {/* Carregar fonte Inter com display=swap para não bloquear renderização */}
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" rel="stylesheet" />
        {/* DNS prefetch para performance */}
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
      </head>
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  )
} 
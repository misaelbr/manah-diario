import './globals.css'

import type { Metadata } from 'next'
import { Playpen_Sans } from 'next/font/google'
import localFont from 'next/font/local'
import Script from 'next/script'

import StructuredData from '@/components/structured-data'
import { ThemeProvider } from '@/components/theme-provider'

const playpenSans = Playpen_Sans({
  subsets: ['latin'],
  variable: '--font-playpen-sans',
})

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Manah Diário | Caixinha de Promessas',
  description:
    'Uma caixinha de promessas virtual com versículos da Bíblia para o seu dia a dia. Tire um card e receba uma palavra de conforto e esperança.',
  keywords: [
    'bíblia',
    'promessas',
    'versículos',
    'caixinha de promessas',
    'manah',
    'devocional',
    'cristão',
  ],
  authors: [{ name: 'Manah Diário' }],
  creator: 'Manah Diário',
  publisher: 'Manah Diário',
  applicationName: 'Manah Diário',
  category: 'Religion',
  metadataBase: new URL('https://manah.misael.dev.br'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: '/',
    title: 'Manah Diário | Caixinha de Promessas',
    description:
      'Uma caixinha de promessas virtual com versículos da Bíblia para o seu dia a dia. Tire um card e receba uma palavra de conforto e esperança.',
    siteName: 'Manah Diário',
    images: [
      {
        url: '/card.png',
        width: 1200,
        height: 630,
        alt: 'Manah Diário - Caixinha de Promessas',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Manah Diário | Caixinha de Promessas',
    description:
      'Uma caixinha de promessas virtual com versículos da Bíblia para o seu dia a dia.',
    images: ['/card.png'],
    creator: '@manahdiario',
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
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
      { url: '/favicon.ico', sizes: 'any' },
    ],
    apple: [
      { url: '/apple-icon-57x57.png', sizes: '57x57', type: 'image/png' },
      { url: '/apple-icon-60x60.png', sizes: '60x60', type: 'image/png' },
      { url: '/apple-icon-72x72.png', sizes: '72x72', type: 'image/png' },
      { url: '/apple-icon-76x76.png', sizes: '76x76', type: 'image/png' },
      { url: '/apple-icon-114x114.png', sizes: '114x114', type: 'image/png' },
      { url: '/apple-icon-120x120.png', sizes: '120x120', type: 'image/png' },
      { url: '/apple-icon-144x144.png', sizes: '144x144', type: 'image/png' },
      { url: '/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-icon-180x180.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      {
        rel: 'apple-touch-icon-precomposed',
        url: '/apple-icon-precomposed.png',
      },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <head>
        <StructuredData />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-icon-180x180.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/manifest.json" />
        <meta name="msapplication-TileColor" content="#a855f7" />
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png" />
        <meta name="theme-color" content="#a855f7" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playpenSans.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-K6BZ49FF4C"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-K6BZ49FF4C');
          `}
        </Script>
      </body>
    </html>
  )
}

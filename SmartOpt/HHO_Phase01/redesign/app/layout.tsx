import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Source_Sans_3, JetBrains_Mono } from 'next/font/google'
import './globals.css'

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  variable: '--font-serif',
  display: 'swap',
})

const sourceSans = Source_Sans_3({ 
  subsets: ["latin"],
  variable: '--font-sans',
  display: 'swap',
})

const jetbrains = JetBrains_Mono({ 
  subsets: ["latin"],
  variable: '--font-mono',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'HHO x Green Cards — Fase 01 | MIAAD UACJ',
  description: 'Optimizacion Multiobjetivo de la Asignacion de Green Cards mediante Harris Hawks Optimization',
}

export const viewport: Viewport = {
  themeColor: '#0a0e1a',
  userScalable: false,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.MathJax = {
                tex: { inlineMath: [['$','$'], ['\\\\(','\\\\)']], displayMath: [['$$','$$']] },
                svg: { fontCache: 'global' },
                startup: { typeset: true }
              };
            `,
          }}
        />
        <script
          src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"
          async
        />
      </head>
      <body className={`${playfair.variable} ${sourceSans.variable} ${jetbrains.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

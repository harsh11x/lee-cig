import type { Metadata } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ["latin"],
  weight: ['300', '400', '600', '700']
})

const lato = Lato({ 
  subsets: ["latin"],
  weight: ['400', '700']
})

export const metadata: Metadata = {
  title: 'LEE - Luxury Tobacco & Fine Cigars',
  description: 'Crafted for Those Who Demand Excellence. Premium tobacco brand positioned at the pinnacle of luxury.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background scroll-smooth">
      <head>
        <style>{`
          :root {
            --font-display: ${cormorant.style.fontFamily};
            --font-body: ${lato.style.fontFamily};
          }
        `}</style>
      </head>
      <body className="font-body antialiased bg-background text-cream">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

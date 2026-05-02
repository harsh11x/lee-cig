import type { Metadata } from 'next'
import { Montserrat, Playfair_Display } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const montserrat = Montserrat({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
})

const playfair = Playfair_Display({ 
  subsets: ["latin"],
  weight: ['400', '600', '700', '900']
})

export const metadata: Metadata = {
  title: 'LEEU - A Better Tomorrow',
  description: 'Building a Smokeless World and creating A Better Tomorrow.',
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
            --font-display: ${playfair.style.fontFamily};
            --font-body: ${montserrat.style.fontFamily};
          }
        `}</style>
      </head>
      <body className="font-body antialiased bg-background text-foreground">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}

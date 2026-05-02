import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  weight: ['300', '400', '500', '600', '700']
})

export const metadata: Metadata = {
  title: 'LEE - A Better Tomorrow',
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
            --font-display: ${inter.style.fontFamily};
            --font-body: ${inter.style.fontFamily};
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

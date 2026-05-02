'use client'

import { useEffect, useRef } from 'react'

export default function SignatureBanner() {
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const banner = bannerRef.current
    if (!banner) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = banner.getBoundingClientRect()
      const x = e.clientX - rect.left
      const percentage = (x / rect.width) * 100

      const shimmer = banner.querySelector('.shimmer') as HTMLElement
      if (shimmer) {
        shimmer.style.left = `${percentage}%`
      }
    }

    banner.addEventListener('mousemove', handleMouseMove)
    return () => banner.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <section
      ref={bannerRef}
      className="relative bg-gradient-to-r from-dark-warm via-mahogany to-dark-warm py-24 overflow-hidden"
    >
      {/* Watermark tobacco leaf background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <path
            d="M500,100 Q600,200 650,400 Q700,600 500,900 Q300,600 350,400 Q400,200 500,100"
            fill="currentColor"
            className="text-gold"
          />
        </svg>
      </div>

      {/* Shimmer effect */}
      <div className="shimmer absolute inset-y-0 left-0 w-1 bg-gradient-to-r from-transparent via-gold/60 to-transparent -translate-x-1/2 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <p className="font-serif text-5xl md:text-6xl lg:text-7xl italic font-light text-cream leading-tight">
          Every Draw.
          <br />
          Every Moment.
          <br />
          <span className="text-gold">LEE.</span>
        </p>
      </div>
    </section>
  )
}

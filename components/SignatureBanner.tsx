'use client'

import { useEffect, useRef } from 'react'

export default function SignatureBanner() {
  const bannerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Effect removed per user request
  }, [])

  return (
    <section
      ref={bannerRef}
      className="relative bg-gradient-to-r from-secondary via-primary to-background py-24 overflow-hidden"
    >
      {/* Watermark tobacco leaf background */}
      <div className="absolute inset-0 opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1000 1000">
          <path
            d="M500,100 Q600,200 650,400 Q700,600 500,900 Q300,600 350,400 Q400,200 500,100"
            fill="currentColor"
            className="text-primary"
          />
        </svg>
      </div>

      {/* Shimmer effect */}


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <p className="font-serif text-5xl md:text-6xl lg:text-7xl italic font-light text-foreground leading-tight">
          Every Draw.
          <br />
          Every Moment.
          <br />
          <span className="text-primary">LEE.</span>
        </p>
      </div>
    </section>
  )
}

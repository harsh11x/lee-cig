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
      className="relative bg-black py-24 overflow-hidden"
    >
      {/* Background with luxury black */}
      <div className="absolute inset-0 bg-black" />

      {/* Shimmer effect */}


      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl sm:text-5xl md:text-7xl font-serif text-white italic leading-tight mb-4 sm:mb-8">
          Every Draw.<br />
          Every Moment.
        </h2>
        <p className="text-3xl sm:text-4xl md:text-6xl font-serif text-white/40 italic">
          LEEU.
        </p>
      </div>
    </section>
  )
}

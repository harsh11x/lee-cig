'use client'

import { useEffect, useRef, useState } from 'react'

export default function CraftsmanshipSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section
      id="craftsmanship"
      ref={sectionRef}
      className="w-full py-20 bg-background px-6"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Pull Quote */}
          <div
            className={`transition-all duration-700 transform ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 -translate-x-12'
            }`}
          >
            <blockquote className="text-4xl lg:text-5xl font-serif font-light italic text-gold leading-tight">
              "From leaf to light, every detail is a decision."
            </blockquote>
            <p className="text-cream/60 font-sans text-sm uppercase tracking-widest mt-6">
              The LEE Craftsmanship Philosophy
            </p>
          </div>

          {/* Divider */}
          <div className="hidden lg:block absolute left-1/2 h-80 w-px bg-gradient-to-b from-transparent via-gold/40 to-transparent transform -translate-x-1/2" />

          {/* Right Column - Body Text */}
          <div
            className={`transition-all duration-700 transform delay-100 ${
              isVisible
                ? 'opacity-100 translate-x-0'
                : 'opacity-0 translate-x-12'
            }`}
          >
            <div className="space-y-5 text-cream/75 font-sans leading-relaxed">
              <p className="text-lg">
                LEE&apos;s commitment to excellence begins in the fields. We partner with the finest tobacco farmers across premium growing regions, selecting only leaves that meet our exacting standards.
              </p>

              <p>
                Our master blenders—with over 150 years of combined expertise—craft each blend through meticulous hand-selection and precise aging. Every blend tells a story of patience, skill, and uncompromising quality.
              </p>

              <p>
                From fermentation to rolling to packaging, every step is performed with artisanal care. We refuse shortcuts. We embrace tradition. We honor the craft.
              </p>
            </div>

            {/* Decorative Element */}
            <div className="mt-8 pt-6 border-t border-gold/20">
              <p className="text-gold font-serif text-base font-semibold tracking-wide">
                Craftsmanship Since 1978
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

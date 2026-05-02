'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      image: '/images/hero-1.jpg',
      headline: 'A Better Tomorrow Through Nature',
      subheadline: 'We are restoring greener landscapes through regenerative farming, biodiversity projects, and cleaner operations.',
    },
    {
      id: 2,
      image: '/images/hero-2.jpg',
      headline: 'Innovation With Living Impact',
      subheadline: 'From low-impact materials to circular packaging, each improvement is designed to support people and planet.',
    },
    {
      id: 3,
      image: '/images/hero-3.jpg',
      headline: 'Communities Growing Together',
      subheadline: 'Our long-term partnerships with growers and local communities are building resilient livelihoods and healthier ecosystems.',
    }
  ]

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [slides.length])

  const goToSlide = (index: number) => setCurrentSlide(index)
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length)

  return (
    <div className="relative h-screen w-full overflow-hidden bg-charcoal">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {/* Background Image */}
          <Image
            src={slide.image}
            alt={slide.headline}
            fill
            className="object-cover"
            priority={index === 0}
          />

          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Content card - bottom left like BAT */}
          <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
            <div className="max-w-2xl">
              <h1 className="font-serif text-5xl md:text-6xl font-light text-cream mb-4 leading-tight">
                {slide.headline}
              </h1>
              <p className="font-sans text-lg text-cream/90 mb-6 leading-relaxed max-w-md">
                {slide.subheadline}
              </p>
              <button className="bg-gold text-charcoal px-8 py-3 font-sans font-bold hover:bg-amber transition-colors">
                Explore Our Impact →
              </button>
            </div>
          </div>

          {/* Latest News Card - right side */}
          {index === currentSlide && (
            <div className="absolute right-8 bottom-12 w-80 bg-card/95 backdrop-blur-sm rounded shadow-2xl p-6 animate-fade-in">
              <div className="text-xs text-gold font-semibold uppercase tracking-wider mb-2">Featured Story</div>
              <div className="h-40 bg-gradient-to-br from-mahogany to-dark-warm rounded mb-4"></div>
              <div className="text-xs text-muted-foreground mb-2">May 2, 2026</div>
              <h3 className="font-serif text-lg font-bold text-cream mb-3 line-clamp-2">
                Reforestation Partnerships Reaching New Regions
              </h3>
              <a href="#" className="text-gold text-sm hover:underline flex items-center gap-2">
                Read more → 
              </a>
            </div>
          )}
        </div>
      ))}

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gold/20">
        <div
          className="h-full bg-gold transition-all duration-300"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-8 left-12 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-gold w-8' : 'bg-cream/40 hover:bg-cream/60'
            }`}
          ></button>
        ))}
      </div>

      {/* Arrow buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-cream hover:text-gold transition-colors z-10"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-cream hover:text-gold transition-colors z-10"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  )
}

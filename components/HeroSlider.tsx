'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function HeroSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      id: 1,
      video: 'https://www.pexels.com/download/video/36590293/',
      headline: 'A Better Tomorrow',
      subheadline: 'We are committed to Building a Smokeless World and creating A Better Tomorrow.',
    },
    {
      id: 2,
      video: 'https://www.pexels.com/download/video/33857214/',
      headline: 'Night Life Glamour',
      subheadline: 'Experience the premium city nights with our luxury selection.',
    },
    {
      id: 3,
      video: 'https://www.pexels.com/download/video/36244253/',
      headline: 'Premium Experience',
      subheadline: 'Our commitment to excellence drives every aspect of our craftsmanship.',
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
    <div className="relative h-screen w-full overflow-hidden bg-background">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10'
          }`}
        >
          {/* Background Video */}
          <video
            src={slide.video}
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full"
          />

          {/* Overlay for text readability */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* Content card - bottom left like BAT */}
          <div className="absolute bottom-0 left-0 right-0 p-12 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
            <div className="max-w-2xl">
              <h1 className="font-serif text-5xl md:text-6xl font-light text-white mb-4 leading-tight">
                {slide.headline}
              </h1>
              <p className="font-sans text-lg text-white/90 mb-6 leading-relaxed max-w-md">
                {slide.subheadline}
              </p>
              <button className="bg-primary text-primary-foreground px-8 py-3 font-sans font-bold hover:bg-secondary transition-colors">
                Discover More →
              </button>
            </div>
          </div>

          {/* Latest News Card - right side */}
          {index === currentSlide && (
            <div className="absolute right-8 bottom-12 w-80 bg-card/95 backdrop-blur-sm rounded shadow-2xl p-6 animate-fade-in">
              <div className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">Featured Story</div>
              <div className="h-40 bg-gradient-to-br from-secondary to-background rounded mb-4"></div>
              <div className="text-xs text-muted-foreground mb-2">May 2, 2026</div>
              <h3 className="font-serif text-lg font-bold text-card-foreground mb-3 line-clamp-2">
                World Earth Day 2026: Supporting the Transition to a Lower-Carbon Future
              </h3>
              <a href="#" className="text-primary text-sm hover:underline flex items-center gap-2">
                Read more → 
              </a>
            </div>
          )}
        </div>
      ))}

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/20">
        <div
          className="h-full bg-primary transition-all duration-300"
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
              index === currentSlide ? 'bg-primary w-8' : 'bg-white/40 hover:bg-white/60'
            }`}
          ></button>
        ))}
      </div>

      {/* Arrow buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-6 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
      >
        <ChevronLeft size={40} />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-6 top-1/2 -translate-y-1/2 text-white hover:text-primary transition-colors z-10"
      >
        <ChevronRight size={40} />
      </button>
    </div>
  )
}

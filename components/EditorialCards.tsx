'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function EditorialCards() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )
    const element = document.getElementById('editorial-cards')
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const cards = [
    {
      id: 1,
      category: 'Heritage',
      headline: 'The Story Behind Every Blend',
      image: '/images/editorial-1.jpg',
      link: 'Read more →'
    },
    {
      id: 2,
      category: 'Innovation',
      headline: 'Craftsmanship Meets Modern Excellence',
      image: '/images/editorial-2.jpg',
      link: 'Read more →'
    },
    {
      id: 3,
      category: 'Sustainability',
      headline: 'Responsible Tobacco for Tomorrow',
      image: '/images/editorial-3.jpg',
      link: 'Read more →'
    }
  ]

  return (
    <section id="editorial-cards" className="bg-background py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Three column grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`group cursor-pointer transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Image area */}
              <div className="relative h-60 rounded overflow-hidden mb-6">
                <Image
                  src={card.image}
                  alt={card.headline}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>
                <div className="absolute top-6 left-6 inline-block">
                  <span className="text-xs font-semibold text-gold uppercase tracking-widest bg-dark-warm/80 px-3 py-2 rounded">
                    {card.category}
                  </span>
                </div>
              </div>
              
              {/* Content */}
              <h3 className="font-serif text-2xl font-bold text-cream mb-4 group-hover:text-gold transition-colors">
                {card.headline}
              </h3>
              <a href="#" className="text-gold text-sm font-sans hover:underline">
                {card.link}
              </a>
            </div>
          ))}
        </div>

        {/* Wide People card - fourth card spanning full width */}
        <div className={`group cursor-pointer transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ transitionDelay: '300ms' }}>
          <div className="relative h-80 rounded overflow-hidden mb-6">
            <Image
              src="/images/editorial-4.jpg"
              alt="The People Behind the Craft"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"></div>
            <div className="absolute top-8 left-8">
              <span className="text-xs font-semibold text-gold uppercase tracking-widest bg-dark-warm/80 px-4 py-3 rounded">
                Community
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black to-transparent">
              <h3 className="font-serif text-3xl font-bold text-cream mb-3 group-hover:text-gold transition-colors">
                The People Behind the Craft
              </h3>
              <p className="text-cream/80 text-lg mb-4 max-w-2xl">
                Meet the artisans, farmers, and tobacco masters who dedicate their lives to LEE's uncompromising quality.
              </p>
              <a href="#" className="text-gold text-sm font-sans hover:underline">
                Read more →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

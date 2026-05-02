'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

export default function StoriesAndPress() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => entry.isIntersecting && setIsVisible(true),
      { threshold: 0.1 }
    )
    const element = document.getElementById('stories-press')
    if (element) observer.observe(element)
    return () => observer.disconnect()
  }, [])

  const stories = [
    {
      id: 1,
      date: 'May 2026',
      title: 'Inside Regenerative Farms: A New Approach',
      excerpt: 'See how farming partners are improving soil health, water retention, and biodiversity year after year.',
      category: 'Heritage',
      image: '/images/press-2.jpg'
    },
    {
      id: 2,
      date: 'April 2026',
      title: 'Cleaner Innovation: A Practical Master Class',
      excerpt: 'Our teams share how material choices and product design are reducing environmental impact across markets.',
      category: 'Craftsmanship',
      image: '/images/craftsmanship.jpg'
    }
  ]

  const pressReleases = [
    {
      id: 1,
      date: 'May 1, 2026',
      title: 'BAT Expands Nature-Positive Projects in 15 Markets',
      excerpt: 'New programs focus on ecosystem restoration, responsible sourcing, and measurable community outcomes.',
      image: '/images/press-1.jpg'
    },
    {
      id: 2,
      date: 'April 15, 2026',
      title: 'BAT Recognized for Environmental Progress',
      excerpt: 'Independent review highlights year-on-year improvements in sustainability performance and transparency.',
      image: '/images/press-2.jpg'
    },
    {
      id: 3,
      date: 'April 1, 2026',
      title: 'New Sustainability Report Highlights Environmental Progress',
      excerpt: 'LEE commits to carbon-neutral operations by 2030, announces major investment in sustainable farming.',
      image: '/images/press-3.jpg'
    }
  ]

  return (
    <section id="stories-press" className="bg-background py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-serif font-light text-cream mb-16">
          Stories &amp; Press
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left side - Stories (wider) */}
          <div className="lg:col-span-2">
            <h3 className="text-xl font-serif font-bold text-cream mb-8">Latest Stories &amp; Features</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {stories.map((story, index) => (
                <div
                  key={story.id}
                  className={`group cursor-pointer transition-all duration-700 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`}
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  {/* Image */}
                  <div className="relative h-48 rounded overflow-hidden mb-4 border border-gold/10 group-hover:border-gold/40 transition-colors">
                    <Image
                      src={story.image}
                      alt={story.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors duration-300"></div>
                    <div className="absolute top-4 left-4">
                      <span className="text-xs font-semibold text-gold uppercase tracking-widest bg-dark-warm/70 px-3 py-2 rounded">
                        {story.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="text-xs text-muted-foreground font-sans uppercase tracking-wider mb-2">
                    {story.date}
                  </div>
                  <h4 className="text-lg font-serif font-bold text-cream mb-2 group-hover:text-gold transition-colors">
                    {story.title}
                  </h4>
                  <p className="text-cream/70 text-sm font-sans line-clamp-2 mb-3">
                    {story.excerpt}
                  </p>
                  <a href="#" className="text-gold text-sm font-sans hover:underline">
                    Read more →
                  </a>
                </div>
              ))}
            </div>

            <button className="text-gold font-sans text-sm font-semibold hover:underline">
              View all stories →
            </button>
          </div>

          {/* Divider */}
          <div className="hidden lg:block w-px bg-gradient-to-b from-gold/20 via-gold/10 to-transparent"></div>

          {/* Right side - Press Releases (narrower) */}
          <div>
            <h3 className="text-xl font-serif font-bold text-cream mb-8">Press Releases</h3>
            
            <div className="space-y-8">
              {pressReleases.map((release, index) => (
                <div
                  key={release.id}
                  className={`group transition-all duration-700 pb-8 border-b border-gold/10 last:border-b-0 ${
                    isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                  }`}
                  style={{ transitionDelay: `${(2 + index) * 100}ms` }}
                >
                  <div className="text-xs text-muted-foreground font-sans uppercase tracking-wider mb-2">
                    {release.date}
                  </div>
                  <h4 className="text-base font-serif font-bold text-cream mb-2 group-hover:text-gold transition-colors">
                    {release.title}
                  </h4>
                  <p className="text-cream/70 text-xs font-sans leading-relaxed line-clamp-2">
                    {release.excerpt}
                  </p>
                </div>
              ))}
            </div>

            <button className="text-gold font-sans text-sm font-semibold hover:underline mt-8">
              View all press →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

'use client'

import Image from 'next/image'

const focusAreas = [
  {
    id: 'science',
    title: 'Science',
    headline: 'Forward Thinking for a Smokeless World',
    image: '/images/science.png',
    linkText: 'Read more >'
  },
  {
    id: 'innovation',
    title: 'Innovation',
    headline: 'New Categories fuelling faster transformation',
    image: '/images/innovation.png',
    linkText: 'Read more >'
  },
  {
    id: 'sustainability',
    title: 'Sustainability',
    headline: 'Advancing Sustainability for A Better Tomorrow™',
    image: '/images/sustainability.png',
    linkText: 'Read more >'
  }
]

export default function ProductShowcase() {
  return (
    <section className="w-full bg-background pt-12 pb-24 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {focusAreas.map((area) => (
            <div key={area.id} className="group relative flex flex-col cursor-pointer overflow-hidden rounded-sm shadow-sm hover:shadow-xl transition-all duration-300">
              {/* Image Container */}
              <div className="relative h-[400px] w-full overflow-hidden">
                <Image
                  src={area.image}
                  alt={area.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                />
                
                {/* Overlay Gradient (Darker at bottom) */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
                
                {/* Top Label */}
                <div className="absolute top-0 left-0 bg-white/20 backdrop-blur-md px-4 py-2">
                  <span className="text-white text-xs font-bold uppercase tracking-wider">{area.title}</span>
                </div>
                
                {/* Content at Bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="font-sans text-2xl font-bold mb-4 leading-tight group-hover:text-secondary transition-colors">
                    {area.headline}
                  </h3>
                  <div className="text-sm font-semibold flex items-center gap-2 text-white/90 group-hover:text-white transition-colors">
                    {area.linkText}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

interface Product {
  id: number
  name: string
  tagline: string
  description: string
  image: string
}

const products: Product[] = [
  { id: 1, name: 'LEEU Blue', tagline: 'The signature blend', description: 'Our most iconic expression—smooth, balanced, and unmistakably LEEU.', image: '/images/product-gold.jpg' },
  { id: 2, name: 'LEEU Classic', tagline: 'Heritage refinement', description: 'A tribute to our roots. Timeless, reliable, always dependable.', image: '/images/product-classic.jpg' },
  { id: 3, name: 'LEEU Black', tagline: 'Bold sophistication', description: 'For those who prefer intensity. Rich, full-bodied, uncompromising.', image: '/images/product-black.jpg' },
  { id: 4, name: 'LEEU Reserve', tagline: 'The discerning choice', description: 'Our finest selection—a collector\'s edition for the connoisseur.', image: '/images/product-reserve.jpg' },
  { id: 5, name: 'LEEU Menthol', tagline: 'Crisp & clean', description: 'Refreshing sophistication. The cool counterpoint to our classic collection.', image: '/images/product-menthol.jpg' },
  { id: 6, name: 'LEEU No.1', tagline: 'The original', description: 'Where it all began. The blend that started a legacy of excellence.', image: '/images/product-no1.jpg' },
]

export default function ProductShowcase() {
  return (
    <section
      id="products"
      className="w-full py-20 bg-background px-6"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-light text-foreground mb-2">
            Our Signature Range
          </h2>
          <p className="text-foreground/70 text-lg font-sans max-w-2xl">
            Six meticulously crafted expressions, each telling a story of premium tobacco heritage and uncompromising quality.
          </p>
        </div>

        {/* Product Grid - 3x2 responsive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              data-index={index}
              data-product-card
              className={`group cursor-pointer transition-all duration-700 opacity-100 translate-y-0`}
            >
              {/* Card Background */}
              <div className="relative h-72 bg-black border border-white/10 rounded overflow-hidden group-hover:border-white/40 transition-all duration-300">
                {/* Product Image */}
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Glow on hover */}
                <div className="absolute inset-0 shadow-xl shadow-primary/10 group-hover:shadow-primary/30 rounded transition-all duration-300 pointer-events-none"></div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-8 bg-gradient-to-t from-black/60 to-transparent">
                  {/* Top - Product Name */}
                  <div>
                    <h3 className="font-serif text-3xl font-bold text-primary mb-1 group-hover:text-secondary transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-foreground/70 text-sm font-sans italic">
                      {product.tagline}
                    </p>
                  </div>

                  {/* Bottom - Description & CTA */}
                  <div>
                    <p className="text-foreground/80 text-sm font-sans leading-relaxed mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                      {product.description}
                    </p>
                    <button className="px-6 py-2 border border-primary text-primary text-sm font-sans font-semibold hover:bg-primary hover:text-background transition-all duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                      Discover
                    </button>
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

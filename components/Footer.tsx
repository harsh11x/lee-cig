'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="w-full bg-background border-t border-white/10 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Column */}
          <div>
            <h3 className="text-3xl font-serif font-black text-white mb-6 tracking-widest">
              LEE
            </h3>
            <ul className="space-y-2">
              <li><Link href="/about" className="text-white/70 hover:text-white font-sans text-sm transition-colors">About</Link></li>
              <li><Link href="/heritage" className="text-white/70 hover:text-white font-sans text-sm transition-colors">Heritage</Link></li>
              <li><Link href="/leadership" className="text-white/70 hover:text-white font-sans text-sm transition-colors">Leadership</Link></li>
            </ul>
          </div>

          {/* Our Brands Column */}
          <div>
            <h4 className="text-white font-sans font-bold mb-6 uppercase text-xs tracking-widest">
              Our Brands
            </h4>
            <ul className="space-y-2">
              {['LEE Blue', 'LEE Classic', 'LEE Black', 'LEE Reserve', 'LEE Menthol', 'LEE No.1'].map((brand) => (
                <li key={brand}>
                  <Link href={`/brands/${brand.toLowerCase().replace(' ', '-')}`} className="text-white/70 hover:text-white font-sans text-sm transition-colors">
                    {brand}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Sustainability Column */}
          <div>
            <h4 className="text-white font-sans font-bold mb-6 uppercase text-xs tracking-widest">
              Sustainability
            </h4>
            <ul className="space-y-2">
              <li><Link href="/sustainability/environment" className="text-white/70 hover:text-white font-sans text-sm transition-colors">Environment</Link></li>
              <li><Link href="/sustainability/community" className="text-white/70 hover:text-white font-sans text-sm transition-colors">Community</Link></li>
              <li><Link href="/sustainability/reports" className="text-white/70 hover:text-white font-sans text-sm transition-colors">Reports</Link></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-white font-sans font-bold mb-6 uppercase text-xs tracking-widest">
              Connect
            </h4>
            <ul className="space-y-2">
              <li><Link href="/contact" className="text-white/70 hover:text-white font-sans text-sm transition-colors">Contact</Link></li>
              <li><Link href="/careers" className="text-white/70 hover:text-white font-sans text-sm transition-colors">Careers</Link></li>
              <li><Link href="/media" className="text-white/70 hover:text-white font-sans text-sm transition-colors">Media</Link></li>
              <li className="flex gap-3 pt-2">
                <Link href="https://instagram.com" target="_blank" className="text-white/70 hover:text-white transition-colors text-sm">Instagram</Link>
                <Link href="https://linkedin.com" target="_blank" className="text-white/70 hover:text-white transition-colors text-sm">LinkedIn</Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-white/10 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-xs text-white/60 font-sans">
            <div>
              <p className="leading-relaxed">
                <span className="text-white font-semibold">STATUTORY WARNING:</span> Tobacco is injurious to health.
              </p>
            </div>
            <div className="text-center">
              <p className="text-white/60">© 2026 LEE. All rights reserved.</p>
            </div>
            <div className="text-right space-y-1">
              <Link href="/privacy" className="block hover:text-white transition-colors">Privacy Policy</Link>
              <Link href="/cookies" className="block hover:text-white transition-colors">Cookie Settings</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

export default function Footer() {
  return (
    <footer className="w-full bg-primary text-primary-foreground">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Company Column */}
          <div>
            <h3 className="text-3xl font-sans font-black text-primary-foreground mb-6 tracking-widest">
              LEE
            </h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary font-sans text-sm transition-colors">About</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary font-sans text-sm transition-colors">Heritage</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary font-sans text-sm transition-colors">Leadership</a></li>
            </ul>
          </div>

          {/* Our Brands Column */}
          <div>
            <h4 className="text-primary-foreground font-sans font-bold mb-6 uppercase text-xs tracking-widest">
              Our Brands
            </h4>
            <ul className="space-y-2">
              {['Vuse', 'Velo', 'glo™', 'Pall Mall', 'Lucky Strike', 'Dunhill'].map((brand) => (
                <li key={brand}>
                  <a href="#" className="text-primary-foreground/70 hover:text-secondary font-sans text-sm transition-colors">
                    {brand}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Sustainability Column */}
          <div>
            <h4 className="text-primary-foreground font-sans font-bold mb-6 uppercase text-xs tracking-widest">
              Sustainability
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary font-sans text-sm transition-colors">Environment</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary font-sans text-sm transition-colors">Community</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary font-sans text-sm transition-colors">Reports</a></li>
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-primary-foreground font-sans font-bold mb-6 uppercase text-xs tracking-widest">
              Connect
            </h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary font-sans text-sm transition-colors">Contact</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary font-sans text-sm transition-colors">Careers</a></li>
              <li><a href="#" className="text-primary-foreground/70 hover:text-secondary font-sans text-sm transition-colors">Media</a></li>
              <li className="flex gap-3 pt-2">
                <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">Instagram</a>
                <a href="#" className="text-primary-foreground/70 hover:text-secondary transition-colors text-sm">LinkedIn</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-xs text-primary-foreground/60 font-sans">
            <div>
              <p className="leading-relaxed">
                <span className="text-primary-foreground font-semibold">STATUTORY WARNING:</span> Tobacco is injurious to health.
              </p>
            </div>
            <div className="text-center">
              <p className="text-primary-foreground/60">© 2026 LEE. All rights reserved.</p>
            </div>
            <div className="text-right space-y-1">
              <a href="#" className="block hover:text-secondary transition-colors">Privacy Policy</a>
              <a href="#" className="block hover:text-secondary transition-colors">Cookie Settings</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

'use client'

import { useState } from 'react'
import { Menu, X, Search } from 'lucide-react'

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  const menuItems = [
    {
      label: 'Our Story',
      items: ['Heritage', 'Our Mission', 'Leadership']
    },
    {
      label: 'Our Brands',
      items: ['LEE Gold', 'LEE Classic', 'LEE Black', 'LEE Reserve', 'LEE Menthol', 'LEE No.1']
    },
    {
      label: 'Craftsmanship',
      items: ['Sourcing', 'Blending Process', 'Quality Standards']
    },
    {
      label: 'Sustainability',
      items: ['Environment', 'Community', 'Reports']
    },
    {
      label: 'Investors',
      items: ['Financial Reports', 'News', 'Events']
    },
    {
      label: 'Contact',
      items: []
    }
  ]

  return (
    <nav className="sticky top-8 z-40 bg-background/95 backdrop-blur-sm border-b border-primary/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="font-serif text-3xl font-bold text-primary tracking-widest">
          LEE
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex gap-8 items-center flex-1 justify-center">
          {menuItems.map((item) => (
            <div
              key={item.label}
              className="relative group"
            >
              <button className="text-foreground text-sm font-sans hover:text-primary transition-colors py-2">
                {item.label}
              </button>
              {item.items.length > 0 && (
                <div className="absolute left-0 mt-0 w-56 bg-card shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-4">
                  {item.items.map((subitem) => (
                    <a
                      key={subitem}
                      href="#"
                      className="block px-6 py-2 text-foreground text-sm hover:text-primary hover:bg-secondary/30 transition-colors"
                    >
                      {subitem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Search & Mobile Menu */}
        <div className="flex items-center gap-4">
          <button className="text-foreground hover:text-primary transition-colors hidden sm:block">
            <Search size={20} />
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden text-foreground hover:text-primary transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-primary/10">
          {menuItems.map((item) => (
            <div key={item.label}>
              <button
                onClick={() => setActiveDropdown(activeDropdown === item.label ? null : item.label)}
                className="w-full text-left px-6 py-3 text-foreground hover:text-primary font-sans text-sm border-b border-primary/10 hover:bg-secondary/20 transition-colors"
              >
                {item.label}
              </button>
              {activeDropdown === item.label && item.items.length > 0 && (
                <div className="bg-secondary/20">
                  {item.items.map((subitem) => (
                    <a
                      key={subitem}
                      href="#"
                      className="block px-8 py-2 text-foreground text-xs hover:text-primary"
                    >
                      {subitem}
                    </a>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}

'use client'

import { useState, useEffect } from 'react'
import UtilityBar from '@/components/UtilityBar'
import Navigation from '@/components/Navigation'
import AgeGate from '@/components/AgeGate'
import HeroSlider from '@/components/HeroSlider'
import StatsTicker from '@/components/StatsTicker'
import ProductShowcase from '@/components/ProductShowcase'
import CraftsmanshipSection from '@/components/CraftsmanshipSection'
import StoriesAndPress from '@/components/StoriesAndPress'
import SignatureBanner from '@/components/SignatureBanner'
import Footer from '@/components/Footer'

export default function Home() {
  const [ageVerified, setAgeVerified] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const verified = localStorage.getItem('lee_age_verified') === 'true'
    setAgeVerified(verified)
  }, [])

  if (!mounted) return null

  if (!ageVerified) {
    return <AgeGate onVerify={() => {
      setAgeVerified(true)
      localStorage.setItem('lee_age_verified', 'true')
    }} />
  }

  return (
    <>
      <UtilityBar />
      <Navigation />
      <main className="w-full bg-background">
        <HeroSlider />
        <StatsTicker />
        <ProductShowcase />
        <CraftsmanshipSection />
        <StoriesAndPress />
        <SignatureBanner />
      </main>
      <Footer />
    </>
  )
}

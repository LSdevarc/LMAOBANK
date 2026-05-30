'use client'

import HeroSection from '@/components/HeroSection'
import HowItWorks from '@/components/HowItWorks'
import DiamondHands from '@/components/DiamondHands'
import Features from '@/components/Features'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-dark via-dark to-dark">
      <HeroSection />
      <HowItWorks />
      <DiamondHands />
      <Features />
      <Footer />
    </main>
  )
}

'use client'

import HeroSection from '@/components/hero'
import HowItWorks from '@/components/howitworks'
import DiamondHands from '@/components/diamondhands'
import Features from '@/components/features'
import Footer from '@/components/footer'

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

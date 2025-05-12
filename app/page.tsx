"use client"
import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import GameShowcase from "@/components/game-showcase"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      <HeroSection />
      <GameShowcase />
      <ContactSection />
      <Footer />
    </main>
  )
}

"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, TrendingUp } from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { Footer } from "@/components/footer"

export default function Component() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (mobileMenuOpen) {
        setMobileMenuOpen(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [mobileMenuOpen])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
    setMobileMenuOpen(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f0b90b] via-[#f8d12f] to-[#f0b90b]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="sticky top-0 z-50 border-b-4 border-black p-4 sm:p-6 bg-white/40 backdrop-blur-md rounded-t-[22px]">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-black flex-shrink-0">
                <Image
                  src="/images/fys-logo.png"
                  alt="FourYourSafety FYS Logo"
                  width={40}
                  height={40}
                  className="object-contain p-1"
                />
              </div>
              <h1 className="text-xl sm:text-2xl font-black text-black">FourYourSafety</h1>
            </div>

            <nav className="hidden md:flex items-center gap-2 lg:gap-4">
              <button
                onClick={() => scrollToSection("features")}
                className="px-3 lg:px-4 py-2 text-sm lg:text-base font-bold border-2 border-black bg-white hover:bg-[#f0b90b] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("roadmap")}
                className="px-3 lg:px-4 py-2 text-sm lg:text-base font-bold border-2 border-black bg-white hover:bg-[#f0b90b] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px]"
              >
                Roadmap
              </button>
              <a
                href="https://letsbonk.com/token/FYSXh9VgWxZWAYXr1qgALBagNyMWZKMjXnqZHPaupump"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 lg:px-4 py-2 text-sm lg:text-base font-bold border-2 border-black bg-green-400 hover:bg-green-500 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] flex items-center gap-2"
              >
                <TrendingUp className="w-4 h-4" />
                Trade $FYS
              </a>
            </nav>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 border-2 border-black bg-white hover:bg-[#f0b90b] transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {mobileMenuOpen && (
            <nav className="md:hidden mt-4 pt-4 border-t-2 border-black flex flex-col gap-2">
              <button
                onClick={() => scrollToSection("features")}
                className="w-full px-4 py-2 text-sm font-bold border-2 border-black bg-white hover:bg-[#f0b90b] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-left"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("roadmap")}
                className="w-full px-4 py-2 text-sm font-bold border-2 border-black bg-white hover:bg-[#f0b90b] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-left"
              >
                Roadmap
              </button>
              <a
                href="https://letsbonk.com/token/FYSXh9VgWxZWAYXr1qgALBagNyMWZKMjXnqZHPaupump"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full px-4 py-2 text-sm font-bold border-2 border-black bg-green-400 hover:bg-green-500 transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] text-left flex items-center gap-2"
              >
                <TrendingUp className="w-4 h-4" />
                Trade $FYS
              </a>
            </nav>
          )}
        </header>

        <main className="py-8 sm:py-12 space-y-12 sm:space-y-16">
          <HeroSection />

          <section id="features" className="scroll-mt-20">
            <div className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 text-center">Key Features</h2>
              <div className="grid gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Identity Verification",
                    description: "Advanced KYC processes to ensure genuine users and reduce bot activity.",
                    icon: "🔐",
                  },
                  {
                    title: "Real-time Monitoring",
                    description: "Continuous scanning of social platforms for suspicious accounts and patterns.",
                    icon: "👁️",
                  },
                  {
                    title: "Community Reporting",
                    description: "Empower users to flag and report suspicious activities for review.",
                    icon: "🚩",
                  },
                  {
                    title: "AI-Powered Detection",
                    description: "Machine learning algorithms to identify and prevent fraudulent behavior.",
                    icon: "🤖",
                  },
                  {
                    title: "Secure Wallet Integration",
                    description: "Safe connection with popular crypto wallets for seamless transactions.",
                    icon: "💰",
                  },
                  {
                    title: "Educational Resources",
                    description: "Learn about common scams and how to protect yourself in the crypto space.",
                    icon: "📚",
                  },
                ].map((feature, index) => (
                  <div
                    key={index}
                    className="border-4 border-black p-4 sm:p-6 bg-[#f0b90b] hover:bg-[#f8d12f] transition-all shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1"
                  >
                    <div className="text-4xl sm:text-5xl mb-3 sm:mb-4">{feature.icon}</div>
                    <h3 className="text-xl sm:text-2xl font-black mb-2">{feature.title}</h3>
                    <p className="text-sm sm:text-base font-bold">{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <RoadmapSection />

          <section className="bg-white border-4 border-black p-6 sm:p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 sm:mb-8 text-center">Join the Movement</h2>
            <div className="max-w-2xl mx-auto text-center space-y-4 sm:space-y-6">
              <p className="text-base sm:text-lg md:text-xl font-bold">
                Be part of the solution to make social media and crypto spaces safer for everyone.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="https://letsbonk.com/token/FYSXh9VgWxZWAYXr1qgALBagNyMWZKMjXnqZHPaupump"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-black border-4 border-black bg-green-400 hover:bg-green-500 transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1 flex items-center justify-center gap-2"
                >
                  <TrendingUp className="w-5 h-5" />
                  Trade $FYS
                </a>
                <button className="px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-black border-4 border-black bg-white hover:bg-[#f0b90b] transition-all shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:-translate-y-1">
                  Learn More
                </button>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </div>
  )
}

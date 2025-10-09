import { Button } from "@/components/ui/button"
import { Menu, Globe } from "lucide-react"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 p-2 sm:p-4">
      {/* Centered Glassmorphic container */}
      <div className="w-full max-w-7xl mx-auto backdrop-blur-xl bg-white/30 border-4 border-black rounded-3xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b-4 border-black p-4 sm:p-6 bg-white/40 backdrop-blur-md rounded-t-[22px]">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-black flex-shrink-0">
                <Image
                  src="/images/fys-logo.png"
                  alt="FourYourSafety FYS Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight">
                FOUR<span className="text-bonk-orange">YOUR</span>SAFETY
              </h1>
            </div>

            {/* Mobile menu */}
            <div className="flex md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="outline" size="icon" className="rounded-xl border-2 border-black bg-transparent">
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="border-l-4 border-black p-0">
                  <div className="h-full bg-white/40 backdrop-blur-md flex flex-col">
                    <div className="p-6 border-b-4 border-black">
                      <div className="flex items-center gap-2">
                        <div className="w-10 h-10 rounded-full border-2 border-black overflow-hidden bg-black flex-shrink-0">
                          <Image
                            src="/images/fys-logo.png"
                            alt="FourYourSafety FYS Logo"
                            width={40}
                            height={40}
                            className="w-full h-full object-contain p-1"
                          />
                        </div>
                        <h2 className="text-2xl font-black">
                          FOUR<span className="text-bonk-orange">YOUR</span>SAFETY
                        </h2>
                      </div>
                    </div>
                    <div className="flex-1 p-6">
                      <nav className="space-y-4">
                        <a
                          href="https://docs.fouryoursafety.fun/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-lg font-bold p-3 hover:bg-black/10 rounded-xl"
                        >
                          Documentation
                        </a>
                        <Link href="/support" className="block text-lg font-bold p-3 hover:bg-black/10 rounded-xl">
                          Support
                        </Link>
                      </nav>
                    </div>
                    <div className="p-6 border-t-4 border-black">
                      <Button
                        asChild
                        className="w-full bg-bonk-orange hover:bg-bonk-orange/80 text-white rounded-xl border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                      >
                        <a href="https://github.com/fouryoursafety" target="_blank" rel="noopener noreferrer">
                          <Globe className="mr-2 h-4 w-4" />
                          Add to Browser
                        </a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-4">
              <nav className="flex items-center gap-6">
                <a
                  href="https://docs.fouryoursafety.fun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold hover:text-bonk-orange transition-colors"
                >
                  Documentation
                </a>
                <Link href="/support" className="text-lg font-bold hover:text-bonk-orange transition-colors">
                  Support
                </Link>
              </nav>
              <div className="flex items-center gap-3">
                <Button
                  asChild
                  className="bg-bonk-orange hover:bg-bonk-orange/80 text-white rounded-xl border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]"
                >
                  <a href="https://github.com/fouryoursafety" target="_blank" rel="noopener noreferrer">
                    <Globe className="mr-2 h-4 w-4" />
                    Add to Browser
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="p-4 sm:p-6 md:p-8">
          <HeroSection />
        </main>

        <Footer />
      </div>
    </div>
  )
}

import { Button } from "@/components/ui/button"
import { Menu, Globe, TrendingUp, Terminal } from "lucide-react"
import HeroSection from "@/components/hero-section"
import Footer from "@/components/footer"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cyber-darker relative overflow-hidden">
      {/* Matrix background effect */}
      <div className="fixed inset-0 matrix-bg opacity-30 pointer-events-none" />

      {/* Scan lines effect */}
      <div className="fixed inset-0 scan-lines pointer-events-none" />

      {/* Main container */}
      <div className="relative z-10 w-full max-w-7xl mx-auto">
        {/* Header */}
        <header className="sticky top-0 z-50 border-b-2 border-cyber-red bg-cyber-darker/95 backdrop-blur-md p-4 sm:p-6 terminal-border">
          <div className="flex justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded border-2 border-cyber-red overflow-hidden bg-cyber-dark flex-shrink-0 terminal-glow">
                <Image
                  src="/images/bonkgate-logo.png"
                  alt="BonkGate Detective Logo"
                  width={40}
                  height={40}
                  className="w-full h-full object-cover filter brightness-0 invert"
                />
              </div>
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight font-mono terminal-glow">
                <span className="text-terminal-green">[</span>
                BONK<span className="text-cyber-red">GATE</span>
                <span className="text-terminal-green">]</span>
              </h1>
            </div>

            {/* Mobile menu */}
            <div className="flex md:hidden">
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-2 border-cyber-red bg-cyber-dark text-cyber-red hover:bg-cyber-red hover:text-cyber-dark terminal-glow"
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="border-l-2 border-cyber-red bg-cyber-darker p-0">
                  <div className="h-full bg-cyber-darker flex flex-col">
                    <div className="p-6 border-b-2 border-cyber-red">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-8 h-8 text-cyber-red terminal-glow" />
                        <h2 className="text-2xl font-black font-mono terminal-glow">
                          <span className="text-terminal-green">[</span>
                          BONK<span className="text-cyber-red">GATE</span>
                          <span className="text-terminal-green">]</span>
                        </h2>
                      </div>
                    </div>
                    <div className="flex-1 p-6">
                      <nav className="space-y-4 font-mono">
                        <a
                          href="https://docs.bonkgate.fun/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-lg font-bold p-3 hover:bg-cyber-red/20 border border-transparent hover:border-cyber-red text-terminal-green hover:text-cyber-red transition-all"
                        >
                          &gt; DOCUMENTATION
                        </a>
                        <Link
                          href="/support"
                          className="block text-lg font-bold p-3 hover:bg-cyber-red/20 border border-transparent hover:border-cyber-red text-terminal-green hover:text-cyber-red transition-all"
                        >
                          &gt; SUPPORT
                        </Link>
                        <a
                          href="https://letsbonk.fun/token/3gy2xMouoB4awZKZeB8Cgwa3Gco2jh5BPmyDBKdWbonk"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="block text-lg font-bold p-3 hover:bg-cyber-red/20 border border-transparent hover:border-cyber-red text-terminal-green hover:text-cyber-red transition-all"
                        >
                          &gt; TRADE $GATE
                        </a>
                      </nav>
                    </div>
                    <div className="p-6 border-t-2 border-cyber-red">
                      <Button
                        asChild
                        className="w-full bg-cyber-red hover:bg-cyber-red/80 text-cyber-dark font-bold font-mono border-2 border-cyber-red terminal-glow"
                      >
                        <a
                          href="https://github.com/BonkGate-Labs/BonkGate-Extension"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Globe className="mr-2 h-4 w-4" />
                          [INSTALL_EXTENSION]
                        </a>
                      </Button>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>

            {/* Desktop navigation */}
            <div className="hidden md:flex items-center gap-4">
              <nav className="flex items-center gap-6 font-mono">
                <a
                  href="https://docs.bonkgate.fun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg font-bold hover:text-cyber-red transition-colors terminal-glow"
                >
                  &gt; DOCS
                </a>
                <Link
                  href="/support"
                  className="text-lg font-bold hover:text-cyber-red transition-colors terminal-glow"
                >
                  &gt; SUPPORT
                </Link>
              </nav>
              <div className="flex items-center gap-3">
                <Button
                  asChild
                  className="bg-terminal-green hover:bg-terminal-green/80 text-cyber-dark font-bold font-mono border-2 border-terminal-green terminal-glow"
                >
                  <a
                    href="https://letsbonk.fun/token/3gy2xMouoB4awZKZeB8Cgwa3Gco2jh5BPmyDBKdWbonk"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <TrendingUp className="mr-2 h-4 w-4" />
                    [TRADE_$GATE]
                  </a>
                </Button>
                <Button
                  asChild
                  className="bg-cyber-red hover:bg-cyber-red/80 text-cyber-dark font-bold font-mono border-2 border-cyber-red terminal-glow"
                >
                  <a
                    href="https://github.com/BonkGate-Labs/BonkGate-Extension"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Globe className="mr-2 h-4 w-4" />
                    [INSTALL_EXTENSION]
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

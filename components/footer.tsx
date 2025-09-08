import { Button } from "@/components/ui/button"
import { Github, Twitter, FileText, Globe, Terminal } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t-2 border-cyber-red bg-cyber-darker p-6 sm:p-8 font-mono">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 border-2 border-cyber-red overflow-hidden bg-cyber-dark flex-shrink-0 terminal-glow">
                <Image
                  src="/images/bonkgate-logo.png"
                  alt="BonkGate Detective Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-cover filter brightness-0 invert"
                />
              </div>
              <h3 className="text-2xl font-black terminal-glow">
                <span className="text-terminal-green">[</span>
                BONK<span className="text-cyber-red">GATE</span>
                <span className="text-terminal-green">]</span>
              </h3>
            </div>
            <p className="text-terminal-green terminal-glow">
              {">"} The ultimate crypto-Twitter intelligence browser extension.
            </p>
            <div className="flex items-center gap-2 text-sm text-terminal-green">
              <Terminal className="h-4 w-4 terminal-glow" />
              <span>SYSTEM_STATUS: ONLINE</span>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cyber-red terminal-glow">[RESOURCES]</h4>
            <div className="space-y-2">
              <a
                href="https://docs.bonkgate.fun/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-cyber-red font-medium text-terminal-green terminal-glow transition-colors"
              >
                {">"} DOCUMENTATION
              </a>
              <Link
                href="/support"
                className="block hover:text-cyber-red font-medium text-terminal-green terminal-glow transition-colors"
              >
                {">"} SUPPORT
              </Link>
              <span className="block text-gray-500 font-medium">{">"} API_ACCESS [COMING_SOON]</span>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold text-cyber-red terminal-glow">[COMMUNITY]</h4>
            <div className="flex flex-col items-start space-y-4">
              <div className="flex gap-2">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="border-2 border-cyber-red bg-cyber-dark text-cyber-red hover:bg-cyber-red hover:text-cyber-dark terminal-glow"
                >
                  <a href="https://x.com/bonkgate" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="border-2 border-cyber-red bg-cyber-dark text-cyber-red hover:bg-cyber-red hover:text-cyber-dark terminal-glow"
                >
                  <a
                    href="https://github.com/BonkGate-Labs/BonkGate-Extension"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="border-2 border-cyber-red bg-cyber-dark text-cyber-red hover:bg-cyber-red hover:text-cyber-dark terminal-glow"
                >
                  <a href="https://docs.bonkgate.fun/" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-5 w-5" />
                  </a>
                </Button>
              </div>
              <Button
                asChild
                className="bg-cyber-red hover:bg-cyber-red/80 text-cyber-dark font-bold px-4 py-2 border-2 border-cyber-red terminal-glow"
              >
                <a href="https://github.com/BonkGate-Labs/BonkGate-Extension" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  [INSTALL_EXTENSION]
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-cyber-red mt-8 pt-8 text-center">
          <p className="text-terminal-green font-medium terminal-glow">
            {">"} © 2025 BONKGATE_SYSTEMS • ALL_RIGHTS_RESERVED
          </p>
        </div>
      </div>
    </footer>
  )
}

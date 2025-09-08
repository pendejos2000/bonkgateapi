"use client"

import { Button } from "@/components/ui/button"
import { Github, Twitter, FileText, Download, Terminal } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-cyber-darker border-t-2 border-cyber-red py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 bg-cyber-red rounded border border-cyber-red flex items-center justify-center">
                <Terminal className="w-6 h-6 text-black" />
              </div>
              <div className="text-2xl font-bold">
                <span className="text-cyber-green">[BONK</span>
                <span className="text-cyber-red">GATE]</span>
              </div>
            </div>
            <p className="text-cyber-green/70 font-mono text-sm leading-relaxed">
              {
                "> The ultimate crypto-Twitter intelligence\n  browser extension for traders and\n  researchers in the digital asset space."
              }
            </p>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-xl font-bold text-cyber-red mb-6 terminal-glow">{"[RESOURCES]"}</h3>
            <div className="space-y-4">
              <a
                href="https://docs.bonkgate.fun/"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-cyber-green hover:text-cyber-red transition-colors font-mono"
              >
                {"> Documentation"}
              </a>
              <a href="/support" className="block text-cyber-green hover:text-cyber-red transition-colors font-mono">
                {"> Support"}
              </a>
              <span className="block text-cyber-green/40 font-mono">{"> API Access [COMING_SOON]"}</span>
            </div>
          </div>

          {/* Community */}
          <div>
            <h3 className="text-xl font-bold text-cyber-red mb-6 terminal-glow">{"[COMMUNITY]"}</h3>
            <div className="flex space-x-4 mb-6">
              <Button
                asChild
                size="icon"
                variant="outline"
                className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black bg-transparent"
              >
                <a href="https://x.com/bonkgate" target="_blank" rel="noopener noreferrer">
                  <Twitter className="w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                size="icon"
                variant="outline"
                className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black bg-transparent"
              >
                <a href="https://github.com/BonkGate-Labs/BonkGate-Extension" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                asChild
                size="icon"
                variant="outline"
                className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black bg-transparent"
              >
                <a href="https://docs.bonkgate.fun/" target="_blank" rel="noopener noreferrer">
                  <FileText className="w-5 h-5" />
                </a>
              </Button>
            </div>
            <Button
              asChild
              className="bg-cyber-red hover:bg-red-600 text-black font-bold border-2 border-cyber-red shadow-[0_0_10px_rgba(255,0,64,0.5)]"
            >
              <a href="https://github.com/BonkGate-Labs/BonkGate-Extension" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4 mr-2" />
                {"[ADD_TO_BROWSER]"}
              </a>
            </Button>
          </div>
        </div>

        <div className="border-t border-cyber-red/30 mt-12 pt-8 text-center">
          <p className="text-cyber-green/60 font-mono text-sm">{"© 2025 [BONKGATE] - All systems operational"}</p>
        </div>
      </div>
    </footer>
  )
}

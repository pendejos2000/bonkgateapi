import { Button } from "@/components/ui/button"
import { Github, Twitter, FileText, Globe, Shield } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t-4 border-black bg-white/40 backdrop-blur-md p-6 sm:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full border-2 border-black overflow-hidden bg-black flex-shrink-0">
                <Image
                  src="/images/fys-logo.png"
                  alt="FourYourSafety Logo"
                  width={48}
                  height={48}
                  className="w-full h-full object-contain p-1"
                />
              </div>
              <h3 className="text-2xl font-black">
                FOUR<span className="text-bonk-orange">YOUR</span>SAFETY
              </h3>
            </div>
            <p className="text-gray-700">The ultimate crypto-Twitter intelligence browser extension.</p>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Shield className="h-4 w-4 opacity-0" />
              <span>{""}</span>
            </div>
          </div>

          {/* Resources */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Resources</h4>
            <div className="space-y-2">
              <a
                href="https://docs.bonkgate.fun/"
                target="_blank"
                rel="noopener noreferrer"
                className="block hover:text-bonk-orange font-medium"
              >
                Documentation
              </a>
              <Link href="/support" className="block hover:text-bonk-orange font-medium">
                Support
              </Link>
              <span className="block text-gray-500 font-medium">API Access</span>
            </div>
          </div>

          {/* Community */}
          <div className="space-y-4">
            <h4 className="text-lg font-bold">Community</h4>
            <div className="flex flex-col items-start space-y-4">
              <div className="flex gap-2">
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-xl border-2 border-black bg-transparent"
                >
                  <a href="https://x.com/bonkgate" target="_blank" rel="noopener noreferrer">
                    <Twitter className="h-5 w-5" />
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="icon"
                  className="rounded-xl border-2 border-black bg-transparent"
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
                  className="rounded-xl border-2 border-black bg-transparent"
                >
                  <a href="https://docs.bonkgate.fun/" target="_blank" rel="noopener noreferrer">
                    <FileText className="h-5 w-5" />
                  </a>
                </Button>
              </div>
              <Button
                asChild
                className="bg-bonk-orange hover:bg-bonk-orange/80 text-white rounded-xl border-2 border-black font-bold px-4 py-2"
              >
                <a href="https://github.com/BonkGate-Labs/BonkGate-Extension" target="_blank" rel="noopener noreferrer">
                  <Globe className="mr-2 h-4 w-4" />
                  Add to Browser
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-black mt-8 pt-8 text-center">
          <p className="text-gray-700 font-medium">© 2025 FourYourSafety </p>
        </div>
      </div>
    </footer>
  )
}

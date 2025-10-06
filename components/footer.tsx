import Image from "next/image"
import Link from "next/link"
import { Twitter, Github, MessageCircle } from "lucide-react"

const Footer = () => {
  return (
    <footer id="footer" className="bg-gray-900 text-white border-t-4 border-black">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand section */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <Image
                src="/images/fys-hand-logo.jpg"
                alt="FourYourSafety Logo"
                width={48}
                height={48}
                className="rounded-full border-2 border-[#F0B90B]"
              />
              <span className="text-xl font-bold text-[#F0B90B]">FYS</span>
            </div>
            <p className="text-gray-400 text-sm">
              Comprehensive social media intelligence and content creation platform for the modern digital age.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#F0B90B]">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#features" className="hover:text-white transition-colors">
                  Features
                </a>
              </li>
              <li>
                <a href="#roadmap" className="hover:text-white transition-colors">
                  Roadmap
                </a>
              </li>
              <li>
                <a href="#studio" className="hover:text-white transition-colors">
                  Studio
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-white transition-colors">
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#F0B90B]">Resources</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="https://docs.fouryoursafety.fun/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  Documentation
                </a>
              </li>
              <li>
                <Link href="/support" className="hover:text-white transition-colors">
                  Support
                </Link>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/fouryoursafety"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="font-bold text-lg mb-4 text-[#F0B90B]">Connect</h3>
            <div className="flex gap-4 mb-4">
              <a
                href="https://twitter.com/fouryoursafety"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#F0B90B] transition-colors border-2 border-black"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://github.com/fouryoursafety"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#F0B90B] transition-colors border-2 border-black"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/fouryoursafety"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 p-2 rounded-lg hover:bg-[#F0B90B] transition-colors border-2 border-black"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
            <p className="text-gray-400 text-sm">
              Join our community and stay updated with the latest features and updates.
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} FourYourSafety. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#terms" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#cookies" className="hover:text-white transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

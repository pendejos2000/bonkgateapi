"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Globe, Eye, Users, Trash2, Edit, UserCheck, ArrowRight, X, Play, Expand, FileText } from "lucide-react"
import Image from "next/image"
import { useState, useRef } from "react"
import RoadmapSection from "./roadmap-section"

export default function HeroSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const openVideoModal = () => {
    setIsVideoOpen(true)
  }

  const closeVideoModal = () => {
    setIsVideoOpen(false)
  }

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen()
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        /* Safari */
        ;(videoRef.current as any).webkitRequestFullscreen()
      } else if ((videoRef.current as any).msRequestFullscreen) {
        /* IE11 */
        ;(videoRef.current as any).msRequestFullscreen()
      }
    }
  }

  return (
    <div className="space-y-12">
      {/* Video Pop-up */}
      {isVideoOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-full max-w-md animate-slide-in-up">
          <Card className="border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <div className="flex items-center justify-between p-3 border-b-4 border-black bg-white/80 backdrop-blur-sm">
              <h3 className="font-bold text-lg">FourYourSafety Demo</h3>
              <div className="flex items-center gap-1">
                <Button
                  onClick={handleFullscreen}
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-8 w-8"
                  aria-label="Enter fullscreen"
                >
                  <Expand className="h-5 w-5" />
                </Button>
                <Button
                  onClick={closeVideoModal}
                  variant="ghost"
                  size="icon"
                  className="rounded-full h-8 w-8"
                  aria-label="Close video"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="bg-black">
              <video ref={videoRef} className="w-full h-auto" controls autoPlay onEnded={closeVideoModal}>
                <source
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/cursorful-video-1752355234862-8dH7YbbgQn528p6WPH6j0lgbNOuMrJ.mp4"
                  type="video/mp4"
                />
                Your browser does not support the video tag.
              </video>
            </div>
          </Card>
        </div>
      )}

      {/* Hero */}
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <div className="flex justify-center mb-6">
            <div className="w-28 h-28 rounded-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] overflow-hidden bg-white">
              <Image
                src="/images/bonkgate-logo.png"
                alt="FourYourSafety Detective Logo"
                width={112}
                height={112}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight">
            FOUR<span className="text-bonk-orange">YOUR</span>SAFETY
          </h1>
          <p className="text-xl sm:text-2xl md:text-3xl font-bold max-w-4xl mx-auto">
            The Ultimate Crypto-Twitter Intelligence Browser Extension
          </p>
          <p className="text-lg sm:text-xl text-gray-700 max-w-3xl mx-auto">
            Track deleted tweets, monitor token addresses, analyze follower changes, and uncover hidden crypto Twitter
            activities with real-time intelligence
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-bonk-orange hover:bg-bonk-orange/80 text-white rounded-xl border-4 border-black font-bold text-xl px-8 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-transform"
          >
            <a href="https://github.com/BonkGate-Labs/BonkGate-Extension" target="_blank" rel="noopener noreferrer">
              <Globe className="mr-2 h-6 w-6" />
              Add to Browser <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="rounded-xl border-4 border-black font-bold text-xl px-8 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-transform bg-transparent"
          >
            <a href="https://docs.bonkgate.fun/" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-6 w-6" />
              Installation Guide
            </a>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-transform">
          <div className="bg-red-500 p-6 text-white">
            <Trash2 className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold">Deleted Tweets</h3>
          </div>
          <div className="p-6 bg-white">
            <p className="text-lg">
              Track and archive deleted tweets from crypto influencers. Never miss important information that gets
              removed.
            </p>
          </div>
        </Card>

        <Card className="border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-transform">
          <div className="bg-bonk-orange p-6 text-white">
            <Eye className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold">CA Tracking </h3>
          </div>
          <div className="p-6 bg-white">
            <p className="text-lg">
              Monitor deleted token addresses and contract changes. Stay ahead of rug pulls and suspicious activities.
            </p>
          </div>
        </Card>

        <Card className="border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-transform">
          <div className="bg-blue-500 p-6 text-white">
            <Users className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold">First Followers</h3>
          </div>
          <div className="p-6 bg-white">
            <p className="text-lg">
              Identify the first followers of new accounts. Discover potential insider connections and early supporters.
            </p>
          </div>
        </Card>

        <Card className="border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-transform">
          <div className="bg-purple-500 p-6 text-white">
            <Edit className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold">Profile Changes</h3>
          </div>
          <div className="p-6 bg-white">
            <p className="text-lg">
              Track bio and username changes over time. Monitor rebranding attempts and identity shifts.
            </p>
          </div>
        </Card>

        <Card className="border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-transform">
          <div className="bg-green-500 p-6 text-white">
            <UserCheck className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold">Key Followers</h3>
          </div>
          <div className="p-6 bg-white">
            <p className="text-lg">
              Analyze follower networks and identify key influencers. Understand connection patterns in crypto Twitter.
            </p>
          </div>
        </Card>

        <Card className="border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-4px] transition-transform relative">
          <div className="bg-gradient-to-br from-yellow-500 to-amber-500 p-6 text-white opacity-60">
            <Globe className="h-12 w-12 mb-4" />
            <h3 className="text-2xl font-bold">Real-time Alerts</h3>
          </div>
          <div className="p-6 bg-white opacity-60">
            <p className="text-lg">
              Get instant notifications for suspicious activities, deleted content, and profile changes.
            </p>
          </div>
          <div className="absolute inset-0 bg-black/20 backdrop-blur-[1px] flex items-center justify-center">
            <div className="bg-white/90 border-4 border-black rounded-xl px-6 py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
              <span className="text-xl font-black text-gray-800">COMING SOON</span>
            </div>
          </div>
        </Card>
      </div>

      {/* How It Works */}
      <Card
        id="how-it-works"
        className="border-4 border-black rounded-xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gradient-to-r from-bonk-orange/10 to-purple-100"
      >
        <h2 className="text-3xl sm:text-5xl font-black text-center mb-8">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-bonk-orange text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-black mx-auto mb-4 border-4 border-black">
              1
            </div>
            <h3 className="text-xl font-bold mb-2">Install Extension</h3>
            <p className="text-gray-700">Add FourYourSafety to your browser with one click</p>
          </div>
          <div className="text-center">
            <div className="bg-bonk-orange text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-black mx-auto mb-4 border-4 border-black">
              2
            </div>
            <h3 className="text-xl font-bold mb-2">Browse Twitter</h3>
            <p className="text-gray-700">
              Use Twitter normally while FourYourSafety tracks everything in the background
            </p>
          </div>
          <div className="text-center">
            <div className="bg-bonk-orange text-white rounded-full w-16 h-16 flex items-center justify-center text-2xl font-black mx-auto mb-4 border-4 border-black">
              3
            </div>
            <h3 className="text-xl font-bold mb-2">Get Intelligence</h3>
            <p className="text-gray-700">Access detailed analytics and alerts about crypto Twitter activities</p>
          </div>
        </div>
      </Card>

      <RoadmapSection />

      {/* Utility Section */}
      <div className="bg-gradient-to-br from-bonk-orange via-orange-400 to-red-500 text-white border-4 border-black rounded-xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl font-black mb-4 text-white drop-shadow-lg">For HODL'ers </h2>
          <p className="text-2xl sm:text-3xl text-white/90 font-bold drop-shadow-md">
            We award those who stick around.{" "}
          </p>
        </div>

        <div className="text-center mb-12">
          <p className="text-xl sm:text-2xl text-white drop-shadow-md">
            <span className="text-white font-black bg-black/20 px-3 py-1 rounded-lg border-2 border-white/30">
              $FYS
            </span>{" "}
            holders get free access to the extension without any monthly subscription fees.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm border-4 border-white/30 rounded-xl p-8 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-[-4px] transition-transform">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/50 shadow-lg">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white drop-shadow-md">Community Governed</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed drop-shadow-sm">
              Access requirements are determined by community governance, ensuring fair access and collective
              decision-making.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border-4 border-white/30 rounded-xl p-8 shadow-[4px_4px_0px_0px_rgba(255,255,255,0.2)] hover:translate-y-[-4px] transition-transform">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/50 shadow-lg">
                <Globe className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white drop-shadow-md">No Subscriptions</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed drop-shadow-sm">
              Simply hold the required amount of tokens to access all premium features without recurring fees or hidden
              costs. Your tokens are your access pass!
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Card
        id="pricing"
        className="border-4 border-black rounded-xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gradient-to-r from-blue-50 to-purple-50"
      >
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-8">Trusted by Crypto Traders</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-bonk-orange">&lt; 2s </div>
            <div className="text-lg font-bold">Loading Time</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-bonk-orange">1M+</div>
            <div className="text-lg font-bold">Tweets Tracked</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-bonk-orange">4K+</div>
            <div className="text-lg font-bold">Deleted Tweets Recovered</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-bonk-orange">99.9%</div>
            <div className="text-lg font-bold">Uptime</div>
          </div>
        </div>
      </Card>

      {/* Use Cases */}
      <div id="support" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-4 border-black rounded-xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gradient-to-br from-green-50 to-blue-50">
          <h3 className="text-2xl font-black mb-4">For Traders</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-bonk-orange rounded-full"></div>
              Track influencer sentiment changes
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-bonk-orange rounded-full"></div>
              Monitor token promotion deletions
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-bonk-orange rounded-full"></div>
              Identify pump and dump schemes
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-bonk-orange rounded-full"></div>
              Analyze follower manipulation
            </li>
          </ul>
        </Card>

        <Card className="border-4 border-black rounded-xl p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gradient-to-br from-purple-50 to-pink-50">
          <h3 className="text-2xl font-black mb-4">For Researchers</h3>
          <ul className="space-y-3 text-lg">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-bonk-orange rounded-full"></div>
              Archive deleted crypto content
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-bonk-orange rounded-full"></div>
              Study influence networks
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-bonk-orange rounded-full"></div>
              Track narrative evolution
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-bonk-orange rounded-full"></div>
              Analyze behavioral patterns
            </li>
          </ul>
        </Card>
      </div>

      {/* CTA Section */}
      <Card className="border-4 border-black rounded-xl p-8 sm:p-12 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-gradient-to-br from-bonk-orange to-red-500 text-white text-center">
        <h2 className="text-3xl sm:text-5xl font-black mb-4">Ready to Uncover the Truth?</h2>
        <p className="text-xl sm:text-2xl mb-8 opacity-90">
          Join our community of traders using FourYourSafety for crypto Twitter intelligence
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-bonk-orange hover:bg-gray-100 rounded-xl border-4 border-black font-bold text-xl px-8 py-6 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
          >
            <a href="https://github.com/BonkGate-Labs/BonkGate-Extension" target="_blank" rel="noopener noreferrer">
              <Globe className="mr-2 h-6 w-6" />
              Add to Browser
            </a>
          </Button>
          <Button
            onClick={openVideoModal}
            variant="outline"
            size="lg"
            className="border-4 border-white text-white hover:bg-white/10 rounded-xl font-bold text-xl px-8 py-6 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.3)] bg-transparent"
          >
            <Play className="mr-2 h-6 w-6" />
            Watch Demo
          </Button>
        </div>
        <p className="text-sm mt-4 opacity-75">No signup required • Works instantly • Privacy focused</p>
      </Card>
    </div>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import {
  Globe,
  Eye,
  Users,
  Trash2,
  Edit,
  UserCheck,
  ArrowRight,
  X,
  Play,
  Expand,
  FileText,
  Zap,
  Shield,
} from "lucide-react"
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
        ;(videoRef.current as any).webkitRequestFullscreen()
      } else if ((videoRef.current as any).msRequestFullscreen) {
        ;(videoRef.current as any).msRequestFullscreen()
      }
    }
  }

  return (
    <div className="space-y-12 font-mono">
      {/* Video Pop-up */}
      {isVideoOpen && (
        <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 w-full max-w-md">
          <Card className="border-2 border-cyber-red bg-cyber-dark terminal-glow overflow-hidden">
            <div className="flex items-center justify-between p-3 border-b-2 border-cyber-red bg-cyber-dark">
              <h3 className="font-bold text-lg text-cyber-red terminal-glow">[DEMO_VIDEO]</h3>
              <div className="flex items-center gap-1">
                <Button
                  onClick={handleFullscreen}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-cyber-green hover:text-cyber-red hover:bg-cyber-red/20"
                >
                  <Expand className="h-5 w-5" />
                </Button>
                <Button
                  onClick={closeVideoModal}
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-cyber-red hover:bg-cyber-red/20"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="bg-cyber-dark">
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
      <div className="text-center space-y-8 relative">
        <div className="space-y-6">
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="w-32 h-32 border-2 border-cyber-red bg-cyber-dark terminal-glow overflow-hidden">
                <Image
                  src="/images/bonkgate-logo.png"
                  alt="BonkGate Detective Logo"
                  width={128}
                  height={128}
                  className="w-full h-full object-cover filter brightness-0 invert"
                />
              </div>
              <div className="absolute -top-2 -right-2 w-4 h-4 bg-cyber-red animate-terminal-blink"></div>
            </div>
          </div>

          <div className="space-y-4">
            <div className="text-cyber-green text-lg font-bold terminal-glow">
              {">"} INITIALIZING CRYPTO_INTELLIGENCE_SYSTEM...
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-8xl font-black tracking-tight terminal-glow">
              <span className="text-cyber-green">[</span>
              BONK<span className="text-cyber-red">GATE</span>
              <span className="text-cyber-green">]</span>
            </h1>
            <div className="text-cyber-red text-xl font-bold terminal-glow">
              CRYPTO-TWITTER_INTELLIGENCE_PROTOCOL_v2.1
            </div>
          </div>

          <div className="max-w-4xl mx-auto space-y-4">
            <p className="text-lg sm:text-xl text-cyber-green terminal-glow">
              {">"} MISSION: Track deleted tweets, monitor token addresses, analyze follower changes
            </p>
            <p className="text-lg sm:text-xl text-cyber-green terminal-glow">
              {">"} OBJECTIVE: Uncover hidden crypto Twitter activities with real-time intelligence
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="bg-cyber-red hover:bg-cyber-red/80 text-cyber-dark font-bold text-xl px-8 py-6 border-2 border-cyber-red terminal-glow font-mono"
          >
            <a href="https://github.com/BonkGate-Labs/BonkGate-Extension" target="_blank" rel="noopener noreferrer">
              <Globe className="mr-2 h-6 w-6" />
              [INSTALL_EXTENSION] <ArrowRight className="ml-2 h-6 w-6" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-2 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-cyber-dark font-bold text-xl px-8 py-6 terminal-glow font-mono bg-transparent"
          >
            <a href="https://docs.bonkgate.fun/" target="_blank" rel="noopener noreferrer">
              <FileText className="mr-2 h-6 w-6" />
              [READ_DOCS]
            </a>
          </Button>
        </div>
      </div>

      {/* Features Grid */}
      <div id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card className="border-2 border-cyber-red bg-cyber-dark terminal-glow overflow-hidden hover:bg-cyber-red/10 transition-all group">
          <div className="bg-gradient-to-br from-red-600 to-red-800 p-6 text-white">
            <Trash2 className="h-12 w-12 mb-4 terminal-glow" />
            <h3 className="text-2xl font-bold font-mono">[DELETED_TWEETS]</h3>
          </div>
          <div className="p-6 bg-cyber-dark">
            <p className="text-cyber-green font-mono">
              {">"} Track and archive deleted tweets from crypto influencers. Never miss important information that gets
              removed.
            </p>
          </div>
        </Card>

        <Card className="border-2 border-cyber-red bg-cyber-dark terminal-glow overflow-hidden hover:bg-cyber-red/10 transition-all group">
          <div className="bg-gradient-to-br from-orange-600 to-red-600 p-6 text-white">
            <Eye className="h-12 w-12 mb-4 terminal-glow" />
            <h3 className="text-2xl font-bold font-mono">[CA_TRACKING]</h3>
          </div>
          <div className="p-6 bg-cyber-dark">
            <p className="text-cyber-green font-mono">
              {">"} Monitor deleted token addresses and contract changes. Stay ahead of rug pulls and suspicious
              activities.
            </p>
          </div>
        </Card>

        <Card className="border-2 border-cyber-red bg-cyber-dark terminal-glow overflow-hidden hover:bg-cyber-red/10 transition-all group">
          <div className="bg-gradient-to-br from-blue-600 to-purple-600 p-6 text-white">
            <Users className="h-12 w-12 mb-4 terminal-glow" />
            <h3 className="text-2xl font-bold font-mono">[FIRST_FOLLOWERS]</h3>
          </div>
          <div className="p-6 bg-cyber-dark">
            <p className="text-cyber-green font-mono">
              {">"} Identify the first followers of new accounts. Discover potential insider connections and early
              supporters.
            </p>
          </div>
        </Card>

        <Card className="border-2 border-cyber-red bg-cyber-dark terminal-glow overflow-hidden hover:bg-cyber-red/10 transition-all group">
          <div className="bg-gradient-to-br from-purple-600 to-pink-600 p-6 text-white">
            <Edit className="h-12 w-12 mb-4 terminal-glow" />
            <h3 className="text-2xl font-bold font-mono">[PROFILE_CHANGES]</h3>
          </div>
          <div className="p-6 bg-cyber-dark">
            <p className="text-cyber-green font-mono">
              {">"} Track bio and username changes over time. Monitor rebranding attempts and identity shifts.
            </p>
          </div>
        </Card>

        <Card className="border-2 border-cyber-red bg-cyber-dark terminal-glow overflow-hidden hover:bg-cyber-red/10 transition-all group">
          <div className="bg-gradient-to-br from-green-600 to-emerald-600 p-6 text-white">
            <UserCheck className="h-12 w-12 mb-4 terminal-glow" />
            <h3 className="text-2xl font-bold font-mono">[KEY_FOLLOWERS]</h3>
          </div>
          <div className="p-6 bg-cyber-dark">
            <p className="text-cyber-green font-mono">
              {">"} Analyze follower networks and identify key influencers. Understand connection patterns in crypto
              Twitter.
            </p>
          </div>
        </Card>

        <Card className="border-2 border-cyber-red bg-cyber-dark terminal-glow overflow-hidden relative">
          <div className="bg-gradient-to-br from-yellow-600 to-amber-600 p-6 text-white opacity-60">
            <Zap className="h-12 w-12 mb-4 terminal-glow" />
            <h3 className="text-2xl font-bold font-mono">[REAL_TIME_ALERTS]</h3>
          </div>
          <div className="p-6 bg-cyber-dark opacity-60">
            <p className="text-cyber-green font-mono">
              {">"} Get instant notifications for suspicious activities, deleted content, and profile changes.
            </p>
          </div>
          <div className="absolute inset-0 bg-cyber-dark/80 flex items-center justify-center">
            <div className="bg-cyber-red/20 border-2 border-cyber-red px-6 py-3 terminal-glow">
              <span className="text-xl font-black text-cyber-red font-mono animate-terminal-blink">[COMING_SOON]</span>
            </div>
          </div>
        </Card>
      </div>

      {/* How It Works */}
      <Card id="how-it-works" className="border-2 border-cyber-red p-8 sm:p-12 terminal-glow bg-cyber-dark">
        <h2 className="text-3xl sm:text-5xl font-black text-center mb-8 text-cyber-red terminal-glow font-mono">
          [SYSTEM_PROTOCOL]
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="bg-cyber-red text-cyber-dark w-16 h-16 flex items-center justify-center text-2xl font-black mx-auto mb-4 border-2 border-cyber-red terminal-glow font-mono">
              01
            </div>
            <h3 className="text-xl font-bold mb-2 text-cyber-green font-mono">[INSTALL_EXTENSION]</h3>
            <p className="text-cyber-green font-mono">{">"} Add BonkGate to your browser with one click</p>
          </div>
          <div className="text-center">
            <div className="bg-cyber-red text-cyber-dark w-16 h-16 flex items-center justify-center text-2xl font-black mx-auto mb-4 border-2 border-cyber-red terminal-glow font-mono">
              02
            </div>
            <h3 className="text-xl font-bold mb-2 text-cyber-green font-mono">[BROWSE_TWITTER]</h3>
            <p className="text-cyber-green font-mono">
              {">"} Use Twitter normally while BonkGate tracks everything in the background
            </p>
          </div>
          <div className="text-center">
            <div className="bg-cyber-red text-cyber-dark w-16 h-16 flex items-center justify-center text-2xl font-black mx-auto mb-4 border-2 border-cyber-red terminal-glow font-mono">
              03
            </div>
            <h3 className="text-xl font-bold mb-2 text-cyber-green font-mono">[GET_INTELLIGENCE]</h3>
            <p className="text-cyber-green font-mono">
              {">"} Access detailed analytics and alerts about crypto Twitter activities
            </p>
          </div>
        </div>
      </Card>

      <RoadmapSection />

      {/* Utility Section */}
      <div className="bg-gradient-to-br from-cyber-red via-red-600 to-red-800 text-white border-2 border-cyber-red p-8 sm:p-12 terminal-glow">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-6xl font-black mb-4 text-white terminal-glow font-mono">[FOR_HODLERS]</h2>
          <p className="text-2xl sm:text-3xl text-white/90 font-bold terminal-glow font-mono">
            {">"} WE_REWARD_THOSE_WHO_STICK_AROUND
          </p>
        </div>

        <div className="text-center mb-12">
          <p className="text-xl sm:text-2xl text-white terminal-glow font-mono">
            <span className="text-white font-black bg-black/20 px-3 py-1 border-2 border-white/30 font-mono">
              $GATE
            </span>{" "}
            HOLDERS GET FREE ACCESS WITHOUT MONTHLY SUBSCRIPTION FEES
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-8 terminal-glow hover:bg-white/20 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 flex items-center justify-center border-2 border-white/50 terminal-glow">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white terminal-glow font-mono">[COMMUNITY_GOVERNED]</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed terminal-glow font-mono">
              {">"} Access requirements are determined by community governance, ensuring fair access and collective
              decision-making.
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border-2 border-white/30 p-8 terminal-glow hover:bg-white/20 transition-all">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-white/20 flex items-center justify-center border-2 border-white/50 terminal-glow">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white terminal-glow font-mono">[NO_SUBSCRIPTIONS]</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed terminal-glow font-mono">
              {">"} Simply hold the required amount of tokens to access all premium features without recurring fees or
              hidden costs.
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <Card id="pricing" className="border-2 border-cyber-red p-8 terminal-glow bg-cyber-dark">
        <h2 className="text-3xl sm:text-4xl font-black text-center mb-8 text-cyber-red font-mono terminal-glow">
          [SYSTEM_STATISTICS]
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-cyber-red terminal-glow font-mono">&lt; 2s</div>
            <div className="text-lg font-bold text-cyber-green font-mono">LOADING_TIME</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-cyber-red terminal-glow font-mono">1M+</div>
            <div className="text-lg font-bold text-cyber-green font-mono">TWEETS_TRACKED</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-cyber-red terminal-glow font-mono">4K+</div>
            <div className="text-lg font-bold text-cyber-green font-mono">DELETED_RECOVERED</div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-cyber-red terminal-glow font-mono">99.9%</div>
            <div className="text-lg font-bold text-cyber-green font-mono">UPTIME</div>
          </div>
        </div>
      </Card>

      {/* Use Cases */}
      <div id="support" className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-2 border-cyber-red p-8 terminal-glow bg-cyber-dark">
          <h3 className="text-2xl font-black mb-4 text-cyber-red font-mono">[FOR_TRADERS]</h3>
          <ul className="space-y-3 text-lg font-mono">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyber-red animate-terminal-blink"></div>
              <span className="text-cyber-green">Track influencer sentiment changes</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyber-red animate-terminal-blink"></div>
              <span className="text-cyber-green">Monitor token promotion deletions</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyber-red animate-terminal-blink"></div>
              <span className="text-cyber-green">Identify pump and dump schemes</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyber-red animate-terminal-blink"></div>
              <span className="text-cyber-green">Analyze follower manipulation</span>
            </li>
          </ul>
        </Card>

        <Card className="border-2 border-cyber-red p-8 terminal-glow bg-cyber-dark">
          <h3 className="text-2xl font-black mb-4 text-cyber-red font-mono">[FOR_RESEARCHERS]</h3>
          <ul className="space-y-3 text-lg font-mono">
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyber-red animate-terminal-blink"></div>
              <span className="text-cyber-green">Archive deleted crypto content</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyber-red animate-terminal-blink"></div>
              <span className="text-cyber-green">Study influence networks</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyber-red animate-terminal-blink"></div>
              <span className="text-cyber-green">Track narrative evolution</span>
            </li>
            <li className="flex items-center gap-3">
              <div className="w-2 h-2 bg-cyber-red animate-terminal-blink"></div>
              <span className="text-cyber-green">Analyze behavioral patterns</span>
            </li>
          </ul>
        </Card>
      </div>

      {/* CTA Section */}
      <Card className="border-2 border-cyber-red p-8 sm:p-12 terminal-glow bg-gradient-to-br from-cyber-red to-red-800 text-white text-center">
        <h2 className="text-3xl sm:text-5xl font-black mb-4 font-mono terminal-glow">[READY_TO_UNCOVER_THE_TRUTH?]</h2>
        <p className="text-xl sm:text-2xl mb-8 opacity-90 font-mono">
          {">"} JOIN OUR COMMUNITY OF TRADERS USING BONKGATE FOR CRYPTO TWITTER INTELLIGENCE
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            asChild
            size="lg"
            className="bg-white text-cyber-red hover:bg-gray-100 font-bold text-xl px-8 py-6 border-2 border-white terminal-glow font-mono"
          >
            <a href="https://github.com/BonkGate-Labs/BonkGate-Extension" target="_blank" rel="noopener noreferrer">
              <Globe className="mr-2 h-6 w-6" />
              [INSTALL_EXTENSION]
            </a>
          </Button>
          <Button
            onClick={openVideoModal}
            variant="outline"
            size="lg"
            className="border-2 border-white text-white hover:bg-white/10 font-bold text-xl px-8 py-6 terminal-glow font-mono bg-transparent"
          >
            <Play className="mr-2 h-6 w-6" />
            [WATCH_DEMO]
          </Button>
        </div>
        <p className="text-sm mt-4 opacity-75 font-mono">
          {">"} NO_SIGNUP_REQUIRED • WORKS_INSTANTLY • PRIVACY_FOCUSED
        </p>
      </Card>
    </div>
  )
}

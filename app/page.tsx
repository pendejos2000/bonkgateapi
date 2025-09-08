"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import {
  Menu,
  Play,
  Expand,
  TrendingUp,
  Terminal,
  Code,
  Shield,
  Zap,
  Users,
  Bell,
  Download,
  BarChart3,
  Clock,
  Target,
  Trash2,
  UserCheck,
  Activity,
} from "lucide-react"
import { HeroSection } from "@/components/hero-section"
import { RoadmapSection } from "@/components/roadmap-section"
import { Footer } from "@/components/footer"

export default function HomePage() {
  const [isVideoOpen, setIsVideoOpen] = useState(false)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [terminalText, setTerminalText] = useState("")

  const fullText = "INITIALIZING BONKGATE SYSTEMS..."

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTerminalText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  const toggleFullscreen = () => {
    const videoElement = document.querySelector("video")
    if (!videoElement) return

    if (!document.fullscreenElement) {
      videoElement.requestFullscreen()
      setIsFullscreen(true)
    } else {
      document.exitFullscreen()
      setIsFullscreen(false)
    }
  }

  const features = [
    {
      icon: Trash2,
      title: "[DELETED_TWEETS]",
      description:
        "> Track and archive deleted tweets from crypto influencers\n> Never miss important information that gets removed",
      color: "border-red-500",
      bgColor: "bg-red-500/10",
    },
    {
      icon: Code,
      title: "[CA_TRACKING]",
      description:
        "> Monitor deleted token addresses and contract changes\n> Stay ahead of rug pulls and suspicious activities",
      color: "border-cyber-red",
      bgColor: "bg-cyber-red/10",
    },
    {
      icon: UserCheck,
      title: "[FIRST_FOLLOWERS]",
      description:
        "> Identify the first followers of new accounts\n> Discover potential insider connections and early supporters",
      color: "border-blue-500",
      bgColor: "bg-blue-500/10",
    },
    {
      icon: Users,
      title: "[PROFILE_CHANGES]",
      description: "> Track bio and username changes over time\n> Monitor rebranding attempts and identity shifts",
      color: "border-purple-500",
      bgColor: "bg-purple-500/10",
    },
    {
      icon: Activity,
      title: "[KEY_FOLLOWERS]",
      description:
        "> Analyze follower networks and identify key influencers\n> Understand connection patterns in crypto Twitter",
      color: "border-green-500",
      bgColor: "bg-green-500/10",
    },
    {
      icon: Bell,
      title: "[REAL_TIME_ALERTS]",
      description:
        "> Get instant notifications for suspicious activities\n> Monitor deleted content and profile changes",
      color: "border-yellow-500",
      bgColor: "bg-yellow-500/10",
      comingSoon: true,
    },
  ]

  const stats = [
    { label: "LOADING_TIME", value: "< 2s", icon: Clock },
    { label: "TWEETS_TRACKED", value: "1M+", icon: BarChart3 },
    { label: "DELETED_RECOVERED", value: "4K+", icon: Trash2 },
    { label: "UPTIME", value: "99.9%", icon: Target },
  ]

  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-green relative overflow-hidden">
      {/* Matrix background effect */}
      <div className="fixed inset-0 matrix-bg opacity-50 pointer-events-none" />
      <div className="scan-lines fixed inset-0 pointer-events-none" />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-cyber-darker/95 backdrop-blur-sm border-b border-cyber-red">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-cyber-red rounded border border-cyber-red flex items-center justify-center">
                <Terminal className="w-6 h-6 text-black" />
              </div>
              <div className="text-xl font-bold">
                <span className="text-cyber-green">[BONK</span>
                <span className="text-cyber-red">GATE]</span>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="https://docs.bonkgate.fun/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyber-green hover:text-cyber-red transition-colors"
              >
                {"> DOCUMENTATION"}
              </a>
              <a href="/support" className="text-cyber-green hover:text-cyber-red transition-colors">
                {"> SUPPORT"}
              </a>
            </div>

            {/* Desktop Buttons */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                asChild
                className="bg-green-600 hover:bg-green-700 text-black font-bold border-2 border-cyber-green shadow-[0_0_10px_rgba(0,255,65,0.5)]"
              >
                <a
                  href="https://letsbonk.fun/token/3gy2xMouoB4awZKZeB8Cgwa3Gco2jh5BPmyDBKdWbonk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <TrendingUp className="w-4 h-4 mr-2" />
                  {"[TRADE_$GATE]"}
                </a>
              </Button>
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

            {/* Mobile Menu Button */}
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden text-cyber-green">
                  <Menu className="w-6 h-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-cyber-darker border-cyber-red">
                <div className="flex flex-col space-y-6 mt-8">
                  <a
                    href="https://docs.bonkgate.fun/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyber-green hover:text-cyber-red transition-colors text-lg"
                  >
                    {"> DOCUMENTATION"}
                  </a>
                  <a href="/support" className="text-cyber-green hover:text-cyber-red transition-colors text-lg">
                    {"> SUPPORT"}
                  </a>
                  <Button
                    asChild
                    className="bg-green-600 hover:bg-green-700 text-black font-bold border-2 border-cyber-green"
                  >
                    <a
                      href="https://letsbonk.fun/token/3gy2xMouoB4awZKZeB8Cgwa3Gco2jh5BPmyDBKdWbonk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <TrendingUp className="w-4 h-4 mr-2" />
                      {"[TRADE_$GATE]"}
                    </a>
                  </Button>
                  <Button
                    asChild
                    className="bg-cyber-red hover:bg-red-600 text-black font-bold border-2 border-cyber-red"
                  >
                    <a
                      href="https://github.com/BonkGate-Labs/BonkGate-Extension"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {"[ADD_TO_BROWSER]"}
                    </a>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </nav>

      {/* Terminal Loading */}
      <div className="pt-20 pb-8">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="text-cyber-green font-mono text-lg">
              {terminalText}
              <span className="terminal-cursor"></span>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <HeroSection />

      {/* Features Section */}
      <section id="features" className="py-20 relative">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 terminal-glow">{"[SYSTEM_FEATURES]"}</h2>
            <p className="text-xl text-cyber-green/80 max-w-3xl mx-auto font-mono">
              {"> Advanced crypto-Twitter intelligence modules"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className={`bg-cyber-gray/50 border-2 ${feature.color} relative overflow-hidden group hover:shadow-[0_0_20px_rgba(255,0,64,0.3)] transition-all duration-300`}
              >
                {feature.comingSoon && (
                  <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-10">
                    <Badge className="bg-cyber-red text-black font-bold text-lg px-4 py-2">{"[COMING_SOON]"}</Badge>
                  </div>
                )}
                <CardContent className="p-6">
                  <div
                    className={`w-12 h-12 ${feature.bgColor} border ${feature.color} flex items-center justify-center mb-4`}
                  >
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-cyber-green terminal-glow">{feature.title}</h3>
                  <pre className="text-sm text-cyber-green/80 whitespace-pre-wrap font-mono">{feature.description}</pre>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-cyber-darker/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 terminal-glow">{"[EXECUTION_PROTOCOL]"}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "INSTALL_EXTENSION",
                description: "> Add BonkGate to your browser with one click\n> No configuration required",
              },
              {
                step: "02",
                title: "BROWSE_TWITTER",
                description: "> Use Twitter normally while BonkGate tracks everything\n> Background monitoring active",
              },
              {
                step: "03",
                title: "GET_INTELLIGENCE",
                description: "> Access detailed analytics and alerts\n> Real-time crypto Twitter activities",
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="bg-cyber-gray/30 border-2 border-cyber-red hover:shadow-[0_0_20px_rgba(255,0,64,0.3)] transition-all duration-300"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-bold text-cyber-red mb-4 terminal-glow">{item.step}</div>
                  <h3 className="text-xl font-bold mb-4 text-cyber-green">{"[" + item.title + "]"}</h3>
                  <pre className="text-cyber-green/80 font-mono text-sm whitespace-pre-wrap">{item.description}</pre>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Roadmap */}
      <RoadmapSection />

      {/* Stats Section */}
      <section className="py-20 bg-cyber-darker/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 terminal-glow">{"[SYSTEM_METRICS]"}</h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card
                key={index}
                className="bg-cyber-gray/30 border-2 border-cyber-green hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <stat.icon className="w-8 h-8 text-cyber-green mx-auto mb-4" />
                  <div className="text-3xl font-bold text-cyber-red mb-2 terminal-glow">{stat.value}</div>
                  <div className="text-sm text-cyber-green/80 font-mono">{"[" + stat.label + "]"}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* For HODLers */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-8 terminal-glow">{"[FOR_HODLERS]"}</h2>
            <p className="text-xl mb-8 text-cyber-green/80 font-mono">{"> We reward those who stick around"}</p>
            <p className="text-lg mb-12 text-cyber-green font-mono">
              {"> $GATE holders get free access to the extension without any monthly subscription fees"}
            </p>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-cyber-gray/30 border-2 border-cyber-green hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Shield className="w-12 h-12 text-cyber-green mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4 text-cyber-green">{"[COMMUNITY_GOVERNED]"}</h3>
                  <p className="text-cyber-green/80 font-mono">
                    {"> Token holders vote on features\n> Decentralized decision making"}
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-cyber-gray/30 border-2 border-cyber-red hover:shadow-[0_0_20px_rgba(255,0,64,0.3)] transition-all duration-300">
                <CardContent className="p-8 text-center">
                  <Zap className="w-12 h-12 text-cyber-red mx-auto mb-4" />
                  <h3 className="text-xl font-bold mb-4 text-cyber-red">{"[NO_SUBSCRIPTIONS]"}</h3>
                  <p className="text-cyber-green/80 font-mono">
                    {"> Hold $GATE tokens for access\n> No recurring payments required"}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-20 bg-cyber-darker/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 terminal-glow">{"[USE_CASES]"}</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <Card className="bg-cyber-gray/30 border-2 border-cyber-red hover:shadow-[0_0_20px_rgba(255,0,64,0.3)] transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-cyber-red terminal-glow">{"[FOR_TRADERS]"}</h3>
                <ul className="space-y-3 text-cyber-green/80 font-mono">
                  <li>{"> Track influencer sentiment changes"}</li>
                  <li>{"> Monitor token promotion deletions"}</li>
                  <li>{"> Identify pump and dump schemes"}</li>
                  <li>{"> Analyze follower manipulation"}</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-cyber-gray/30 border-2 border-cyber-green hover:shadow-[0_0_20px_rgba(0,255,65,0.3)] transition-all duration-300">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6 text-cyber-green terminal-glow">{"[FOR_RESEARCHERS]"}</h3>
                <ul className="space-y-3 text-cyber-green/80 font-mono">
                  <li>{"> Archive deleted crypto content"}</li>
                  <li>{"> Study influence networks"}</li>
                  <li>{"> Track narrative evolution"}</li>
                  <li>{"> Analyze behavioral patterns"}</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-6xl font-bold mb-8 terminal-glow">{"[READY_TO_UNCOVER_THE_TRUTH?]"}</h2>
            <p className="text-xl mb-12 text-cyber-green/80 font-mono">
              {"> Join our community of traders using BonkGate for crypto Twitter intelligence"}
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-cyber-red hover:bg-red-600 text-black font-bold text-lg px-8 py-4 border-2 border-cyber-red shadow-[0_0_20px_rgba(255,0,64,0.5)] hover:shadow-[0_0_30px_rgba(255,0,64,0.8)] transition-all duration-300"
              >
                <a href="https://github.com/BonkGate-Labs/BonkGate-Extension" target="_blank" rel="noopener noreferrer">
                  <Download className="w-5 h-5 mr-2" />
                  {"[ADD_TO_BROWSER]"}
                </a>
              </Button>

              <Dialog open={isVideoOpen} onOpenChange={setIsVideoOpen}>
                <DialogTrigger asChild>
                  <Button
                    size="lg"
                    variant="outline"
                    className="bg-transparent border-2 border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black font-bold text-lg px-8 py-4 shadow-[0_0_20px_rgba(0,255,65,0.3)] hover:shadow-[0_0_30px_rgba(0,255,65,0.6)] transition-all duration-300"
                  >
                    <Play className="w-5 h-5 mr-2" />
                    {"[WATCH_DEMO]"}
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl bg-cyber-darker border-2 border-cyber-red">
                  <div className="relative">
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-bold text-cyber-green">{"[DEMO_VIDEO]"}</h3>
                      <Button
                        onClick={toggleFullscreen}
                        size="sm"
                        variant="outline"
                        className="border-cyber-green text-cyber-green hover:bg-cyber-green hover:text-black bg-transparent"
                      >
                        <Expand className="w-4 h-4" />
                      </Button>
                    </div>
                    <video
                      controls
                      className="w-full aspect-video bg-black border border-cyber-red"
                      poster="/placeholder.svg?height=400&width=800&text=Demo+Video"
                    >
                      <source src="/videos/demo-video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}

"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Shield, Users, Database, Search, Sparkles, TrendingUp } from "lucide-react"
import RoadmapSection from "./roadmap-section"

export default function HeroSection() {
  return (
    <div className="space-y-16">
      {/* Hero Section */}
      <div className="text-center space-y-8">
        <div className="space-y-4">
          <div className="flex justify-center mb-6">
            <div className="w-28 h-28 rounded-full border-4 border-black shadow-[8px_8px_0px_0px_rgba(240,185,11,1)] overflow-hidden bg-black">
              <Image
                src="/images/fys-logo.png"
                alt="FourYourSafety FYS Logo"
                width={112}
                height={112}
                className="w-full h-full object-contain p-2"
              />
            </div>
          </div>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight">
            DETECT. ANALYZE. <span className="text-bonk-orange">PROTECT.</span>
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl font-bold text-gray-700 max-w-3xl mx-auto">
            Your personal X detective. Uncover hidden connections, analyze followers, and stay safe from scams.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 bg-bonk-orange hover:bg-bonk-orange/80 text-white rounded-xl border-4 border-black font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <a href="https://github.com/BonkGate-Labs/BonkGate-Extension" target="_blank" rel="noopener noreferrer">
              Add to Browser
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-white hover:bg-gray-50 rounded-xl border-4 border-black font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <a href="https://docs.bonkgate.fun/" target="_blank" rel="noopener noreferrer">
              Learn More
            </a>
          </Button>
        </div>
      </div>

      {/* Features Section */}
      <div className="space-y-8">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          POWERFUL <span className="text-bonk-orange">FEATURES</span>
        </h3>

        <Tabs defaultValue="analytics" className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 gap-2 bg-transparent h-auto p-0">
            <TabsTrigger
              value="analytics"
              className="data-[state=active]:bg-bonk-orange data-[state=active]:text-white rounded-xl border-4 border-black font-black py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] data-[state=active]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <Search className="w-4 h-4 mr-2" />
              Analytics
            </TabsTrigger>
            <TabsTrigger
              value="protection"
              className="data-[state=active]:bg-bonk-orange data-[state=active]:text-white rounded-xl border-4 border-black font-black py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] data-[state=active]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <Shield className="w-4 h-4 mr-2" />
              Protection
            </TabsTrigger>
            <TabsTrigger
              value="network"
              className="data-[state=active]:bg-bonk-orange data-[state=active]:text-white rounded-xl border-4 border-black font-black py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] data-[state=active]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <Users className="w-4 h-4 mr-2" />
              Network
            </TabsTrigger>
            <TabsTrigger
              value="history"
              className="data-[state=active]:bg-bonk-orange data-[state=active]:text-white rounded-xl border-4 border-black font-black py-3 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] data-[state=active]:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              <Database className="w-4 h-4 mr-2" />
              History
            </TabsTrigger>
          </TabsList>

          <TabsContent value="analytics" className="mt-6">
            <Card className="border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl font-black">Deep Profile Analytics</CardTitle>
                <CardDescription className="text-base font-bold">
                  Get comprehensive insights into any X account
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="p-4 rounded-xl border-2 border-black bg-purple-100">
                    <h4 className="font-black mb-2">Follower Analysis</h4>
                    <p className="text-sm font-medium">
                      Score and analyze follower authenticity and engagement patterns
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border-2 border-black bg-blue-100">
                    <h4 className="font-black mb-2">Network Mapping</h4>
                    <p className="text-sm font-medium">Visualize connections and identify suspicious patterns</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="protection" className="mt-6">
            <Card className="border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl font-black">Scam Detection</CardTitle>
                <CardDescription className="text-base font-bold">Stay protected from malicious actors</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="p-4 rounded-xl border-2 border-black bg-red-100">
                    <h4 className="font-black mb-2">Real-time Alerts</h4>
                    <p className="text-sm font-medium">Get instant notifications about suspicious accounts</p>
                  </div>
                  <div className="p-4 rounded-xl border-2 border-black bg-orange-100">
                    <h4 className="font-black mb-2">Pattern Recognition</h4>
                    <p className="text-sm font-medium">AI-powered detection of common scam behaviors</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="network" className="mt-6">
            <Card className="border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl font-black">Network Intelligence</CardTitle>
                <CardDescription className="text-base font-bold">Understand follower relationships</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="p-4 rounded-xl border-2 border-black bg-green-100">
                    <h4 className="font-black mb-2">First Follower Detection</h4>
                    <p className="text-sm font-medium">Discover the first follower of any account</p>
                  </div>
                  <div className="p-4 rounded-xl border-2 border-black bg-teal-100">
                    <h4 className="font-black mb-2">Mutual Connections</h4>
                    <p className="text-sm font-medium">Identify shared followers and common networks</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="history" className="mt-6">
            <Card className="border-4 border-black rounded-2xl shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] bg-white/80 backdrop-blur">
              <CardHeader>
                <CardTitle className="text-2xl font-black">Historical Data</CardTitle>
                <CardDescription className="text-base font-bold">Track account changes over time</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="p-4 rounded-xl border-2 border-black bg-yellow-100">
                    <h4 className="font-black mb-2">Username History</h4>
                    <p className="text-sm font-medium">View all previous usernames and profile changes</p>
                  </div>
                  <div className="p-4 rounded-xl border-2 border-black bg-pink-100">
                    <h4 className="font-black mb-2">Deleted Content</h4>
                    <p className="text-sm font-medium">Access archived tweets and profile information</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>

      {/* How It Works */}
      <div className="space-y-8">
        <h3 className="text-3xl sm:text-4xl md:text-5xl font-black text-center">
          HOW IT <span className="text-bonk-orange">WORKS</span>
        </h3>

        <div className="grid gap-6 md:grid-cols-3">
          <Card className="border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-gradient-to-br from-purple-100 to-blue-100">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-bonk-orange border-2 border-black flex items-center justify-center font-black text-white text-xl mb-4">
                1
              </div>
              <CardTitle className="text-xl font-black">Install Extension</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">
                Add BonkGate to your browser with one click. Compatible with Chrome and Firefox.
              </p>
            </CardContent>
          </Card>

          <Card className="border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-gradient-to-br from-blue-100 to-purple-100">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-bonk-orange border-2 border-black flex items-center justify-center font-black text-white text-xl mb-4">
                2
              </div>
              <CardTitle className="text-xl font-black">Browse X Normally</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">Use X as you always do. BonkGate works seamlessly in the background.</p>
            </CardContent>
          </Card>

          <Card className="border-4 border-black rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] bg-gradient-to-br from-purple-100 to-pink-100">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-bonk-orange border-2 border-black flex items-center justify-center font-black text-white text-xl mb-4">
                3
              </div>
              <CardTitle className="text-xl font-black">Get Insights</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium">
                Click any profile to see detailed analytics, scam scores, and network connections.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Roadmap */}
      <RoadmapSection />

      {/* CTA Section */}
      <div className="text-center space-y-6 p-8 rounded-3xl border-4 border-black bg-gradient-to-br from-bonk-orange/20 to-purple-200 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
        <div className="space-y-4">
          <div className="flex justify-center">
            <Sparkles className="w-16 h-16 text-bonk-orange" />
          </div>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-black">
            READY TO <span className="text-bonk-orange">BONKGATE?</span>
          </h3>
          <p className="text-lg sm:text-xl font-bold text-gray-700 max-w-2xl mx-auto">
            Join thousands of users protecting themselves on X. Install BonkGate now and take control of your safety.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button
            asChild
            size="lg"
            className="text-lg px-8 py-6 bg-bonk-orange hover:bg-bonk-orange/80 text-white rounded-xl border-4 border-black font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <a href="https://github.com/BonkGate-Labs/BonkGate-Extension" target="_blank" rel="noopener noreferrer">
              Install Now
            </a>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="text-lg px-8 py-6 bg-green-500 hover:bg-green-600 text-white rounded-xl border-4 border-black font-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all"
          >
            <a
              href="https://letsbonk.fun/token/3gy2xMouoB4awZKZeB8Cgwa3Gco2jh5BPmyDBKdWbonk"
              target="_blank"
              rel="noopener noreferrer"
            >
              <TrendingUp className="mr-2 h-5 w-5" />
              Trade $GATE
            </a>
          </Button>
        </div>
      </div>
    </div>
  )
}

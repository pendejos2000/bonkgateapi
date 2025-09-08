"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Circle } from "lucide-react"

export function RoadmapSection() {
  const [activePhase, setActivePhase] = useState(0)

  const phases = [
    {
      title: "PHASE_01",
      subtitle: "FOUNDATION_&_LAUNCH",
      status: "CURRENT",
      items: [
        { text: "Core Extension Launch", completed: true },
        { text: "Deleted Content Tracking", completed: true },
        { text: "$GATE Token Integration", completed: true },
      ],
    },
    {
      title: "PHASE_02",
      subtitle: "EXPANSION_&_ECOSYSTEM_GROWTH",
      status: "UPCOMING",
      items: [
        { text: "Free access to $GATE Holders", completed: false },
        { text: "API Access", completed: false },
        { text: "Community Governance", completed: false },
        { text: "Private Community", completed: false },
      ],
    },
  ]

  return (
    <section id="roadmap" className="py-20 bg-cyber-darker/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 terminal-glow">{"[DEVELOPMENT_ROADMAP]"}</h2>
          <p className="text-xl text-cyber-green/80 font-mono">{"> System deployment timeline and feature rollout"}</p>
        </div>

        {/* Phase Selector */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-cyber-gray/30 border-2 border-cyber-red rounded-none p-1">
            {phases.map((phase, index) => (
              <button
                key={index}
                onClick={() => setActivePhase(index)}
                className={`px-6 py-3 font-bold transition-all duration-300 ${
                  activePhase === index
                    ? "bg-cyber-red text-black shadow-[0_0_10px_rgba(255,0,64,0.5)]"
                    : "text-cyber-green hover:text-cyber-red"
                }`}
              >
                {"[" + phase.title + "]"}
              </button>
            ))}
          </div>
        </div>

        {/* Connection Line */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center space-x-4">
            <div
              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                activePhase === 0
                  ? "border-cyber-red bg-cyber-red animate-pulse-red"
                  : "border-cyber-green bg-cyber-green"
              }`}
            >
              <span className="text-black font-bold text-sm">1</span>
            </div>
            <div className="w-24 h-0.5 bg-cyber-green"></div>
            <div
              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                activePhase === 1
                  ? "border-cyber-red bg-cyber-red animate-pulse-red"
                  : "border-cyber-green bg-cyber-green/30"
              }`}
            >
              <span className="text-black font-bold text-sm">2</span>
            </div>
          </div>
        </div>

        {/* Active Phase Content */}
        <div className="max-w-4xl mx-auto">
          <Card className="bg-cyber-gray/30 border-2 border-cyber-red hover:shadow-[0_0_20px_rgba(255,0,64,0.3)] transition-all duration-300">
            <CardContent className="p-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-cyber-red mb-2 terminal-glow">
                  {"[" + phases[activePhase].title + "]"}
                </h3>
                <p className="text-xl text-cyber-green/80 mb-4 font-mono">{"> " + phases[activePhase].subtitle}</p>
                <Badge
                  className={`font-bold text-lg px-4 py-2 ${
                    phases[activePhase].status === "CURRENT" ? "bg-cyber-red text-black" : "bg-cyber-green text-black"
                  }`}
                >
                  {"[" + phases[activePhase].status + "]"}
                </Badge>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {phases[activePhase].items.map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 p-4 bg-cyber-darker/50 border border-cyber-green/30"
                  >
                    {item.completed ? (
                      <CheckCircle className="w-6 h-6 text-cyber-green flex-shrink-0" />
                    ) : (
                      <Circle className="w-6 h-6 text-cyber-green/50 flex-shrink-0" />
                    )}
                    <span className={`font-mono ${item.completed ? "text-cyber-green" : "text-cyber-green/70"}`}>
                      {"> " + item.text}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

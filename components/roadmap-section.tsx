"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock } from "lucide-react"

export default function RoadmapSection() {
  return (
    <div id="roadmap" className="space-y-8 font-mono">
      <h2 className="text-3xl sm:text-5xl font-black text-center text-cyber-red terminal-glow">
        [DEVELOPMENT_ROADMAP]
      </h2>

      {/* Blobs and Connecting Line */}
      <div className="flex justify-center items-center gap-2 sm:gap-4">
        {/* Pulsating Blob 1 */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-20 h-20 sm:w-24 sm:h-24 border-2 border-cyber-red bg-cyber-red/20 animate-pulse" />
          <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-cyber-red via-red-600 to-red-800 flex items-center justify-center text-white font-black text-4xl sm:text-5xl border-2 border-cyber-red terminal-glow">
            01
          </div>
        </div>

        {/* Connecting Line */}
        <div className="w-16 sm:w-24 h-1 bg-cyber-red/50 relative">
          <div className="absolute inset-0 bg-cyber-red animate-pulse"></div>
        </div>

        {/* Static Blob 2 */}
        <div className="relative flex items-center justify-center">
          <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-gray-600 to-gray-800 flex items-center justify-center text-white font-black text-4xl sm:text-5xl border-2 border-gray-600">
            02
          </div>
        </div>
      </div>

      {/* Card Folder Tabs */}
      <Tabs defaultValue="phase1" className="w-full">
        <TabsList className="grid w-full grid-cols-2 p-0 bg-transparent h-auto gap-2">
          <TabsTrigger
            value="phase1"
            className="flex-1 data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-red data-[state=active]:border-cyber-red border-2 border-gray-600 p-3 font-bold text-lg relative data-[state=inactive]:bg-cyber-dark data-[state=inactive]:text-cyber-green font-mono terminal-glow"
          >
            <div className="absolute top-1.5 right-1.5 bg-cyber-green text-cyber-dark text-[10px] font-bold px-1.5 py-0.5 border border-cyber-green font-mono">
              ACTIVE
            </div>
            [PHASE_01]
          </TabsTrigger>
          <TabsTrigger
            value="phase2"
            className="flex-1 data-[state=active]:bg-cyber-dark data-[state=active]:text-cyber-red data-[state=active]:border-cyber-red border-2 border-gray-600 p-3 font-bold text-lg relative data-[state=inactive]:bg-cyber-dark data-[state=inactive]:text-cyber-green font-mono terminal-glow"
          >
            [PHASE_02]
          </TabsTrigger>
        </TabsList>
        <div className="border-2 border-cyber-red bg-cyber-dark terminal-glow">
          <TabsContent value="phase1" className="p-6 mt-0">
            <h3 className="text-xl font-bold mb-2 text-cyber-red font-mono terminal-glow">[FOUNDATION_&_LAUNCH]</h3>
            <p className="text-cyber-green mb-4 text-sm font-mono">
              {">"} This phase focuses on building the core infrastructure and launching the essential features of
              BonkGate.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-cyber-green flex-shrink-0 mt-0.5 terminal-glow" />
                <div>
                  <h4 className="font-bold text-base text-cyber-red font-mono">[CORE_EXTENSION_LAUNCH]</h4>
                  <p className="text-xs text-cyber-green font-mono">{">"} Initial release on the Chrome Web Store.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-cyber-green flex-shrink-0 mt-0.5 terminal-glow" />
                <div>
                  <h4 className="font-bold text-base text-cyber-red font-mono">[DELETED_CONTENT_TRACKING]</h4>
                  <p className="text-xs text-cyber-green font-mono">{">"} Real-time monitoring of tweets and CAs.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-cyber-green flex-shrink-0 mt-0.5 terminal-glow" />
                <div>
                  <h4 className="font-bold text-base text-cyber-red font-mono">[$GATE_TOKEN_INTEGRATION]</h4>
                  <p className="text-xs text-cyber-green font-mono">
                    {">"} Utility token for subscription-free access.
                  </p>
                </div>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="phase2" className="p-6 mt-0">
            <h3 className="text-xl font-bold mb-2 text-cyber-red font-mono terminal-glow">
              [EXPANSION_&_ECOSYSTEM_GROWTH]
            </h3>
            <p className="text-cyber-green mb-4 text-sm font-mono">
              {">"} This phase will expand capabilities, introduce governance, and build a robust ecosystem.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-400 font-mono">[FREE_ACCESS_TO_$GATE_HOLDERS]</h4>
                  <p className="text-xs text-gray-500 font-mono">
                    {">"} Token holders get premium access without subscriptions.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-400 font-mono">[API_ACCESS]</h4>
                  <p className="text-xs text-gray-500 font-mono">
                    {">"} Public API for developers and third-party integrations.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-400 font-mono">[COMMUNITY_GOVERNANCE]</h4>
                  <p className="text-xs text-gray-500 font-mono">
                    {">"} DAO voting system for feature development decisions.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-400 font-mono">[PRIVATE_COMMUNITY]</h4>
                  <p className="text-xs text-gray-500 font-mono">
                    {">"} Exclusive access to private channels and discussions.
                  </p>
                </div>
              </li>
            </ul>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

"use client"

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, Clock } from "lucide-react"

export default function RoadmapSection() {
  return (
    <div id="roadmap" className="space-y-8">
      <h2 className="text-3xl sm:text-5xl font-black text-center">Roadmap</h2>

      {/* Blobs and Connecting Line */}
      <div className="flex justify-center items-center gap-2 sm:gap-4">
        {/* Pulsating Blob 1 */}
        <div className="relative flex items-center justify-center">
          <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-bonk-orange animate-pulse-wave" />
          <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-bonk-orange via-yellow-300 to-yellow-400 flex items-center justify-center text-white font-black text-4xl sm:text-5xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            1
          </div>
        </div>

        {/* Connecting Line */}
        <div className="w-16 sm:w-24 h-1 bg-black/20 rounded-full" />

        {/* Static Blob 2 */}
        <div className="relative flex items-center justify-center">
          <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-gray-400 to-gray-600 flex items-center justify-center text-white font-black text-4xl sm:text-5xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
            2
          </div>
        </div>
      </div>

      {/* Card Folder Tabs */}
      <Tabs defaultValue="phase1" className="w-full">
        <TabsList className="grid w-full grid-cols-2 p-0 bg-transparent h-auto gap-2">
          <TabsTrigger
            value="phase1"
            className="flex-1 data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:border-b-white -mb-[4px] z-10 border-4 border-black rounded-t-xl p-3 font-bold text-lg relative data-[state=inactive]:bg-gray-200 data-[state=inactive]:text-gray-500"
          >
            <div className="absolute top-1.5 right-1.5 bg-green-500 text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] border border-black">
              CURRENT
            </div>
            Phase 1
          </TabsTrigger>
          <TabsTrigger
            value="phase2"
            className="flex-1 data-[state=active]:bg-white data-[state=active]:shadow-none data-[state=active]:border-b-white -mb-[4px] z-10 border-4 border-black rounded-t-xl p-3 font-bold text-lg relative data-[state=inactive]:bg-gray-200 data-[state=inactive]:text-gray-500"
          >
            Phase 2
          </TabsTrigger>
        </TabsList>
        <div className="border-4 border-black rounded-xl rounded-t-none bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
          <TabsContent value="phase1" className="p-6 mt-0">
            <h3 className="text-xl font-bold mb-2">Foundation & Launch</h3>
            <p className="text-gray-600 mb-4 text-sm">
              This phase focuses on building the core infrastructure and launching the essential features of FourYourSafety.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-base">Core Extension Launch</h4>
                  <p className="text-xs text-gray-500">Initial release on the Chrome Web Store.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-base">Deleted Content Tracking</h4>
                  <p className="text-xs text-gray-500">Real-time monitoring of tweets and CAs.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-base">$FYS Token Integration</h4>
                  <p className="text-xs text-gray-500">Utility token for subscription-free access.</p>
                </div>
              </li>
            </ul>
          </TabsContent>
          <TabsContent value="phase2" className="p-6 mt-0">
            <h3 className="text-xl font-bold mb-2">Expansion & Ecosystem Growth</h3>
            <p className="text-gray-600 mb-4 text-sm">
              This phase will expand capabilities, introduce governance, and build a robust ecosystem.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-600">Free access to $FYS Holders</h4>
                  <p className="text-xs text-gray-500">Token holders get premium access without subscriptions.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-600">API Access</h4>
                  <p className="text-xs text-gray-500">Public API for developers and third-party integrations.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-600">Community Governance</h4>
                  <p className="text-xs text-gray-500">DAO voting system for feature development decisions.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-gray-600">Private Community</h4>
                  <p className="text-xs text-gray-500">Exclusive access to private channels and discussions.</p>
                </div>
              </li>
            </ul>
          </TabsContent>
        </div>
      </Tabs>
    </div>
  )
}

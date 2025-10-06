import type React from "react"
import { SectionTitle } from "./section-title"

const RoadmapSection: React.FC = () => {
  return (
    <div className="relative py-20">
      <SectionTitle title="Our Roadmap" />
      <div className="flex justify-center items-center">
        <div className="relative z-10 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-gradient-to-br from-yellow-300 via-yellow-200 to-yellow-100 flex items-center justify-center text-white font-black text-4xl sm:text-5xl border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          1
        </div>
        <div className="absolute w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-yellow-300 animate-pulse-wave" />
        {/* rest of code here */}
      </div>
    </div>
  )
}

export default RoadmapSection

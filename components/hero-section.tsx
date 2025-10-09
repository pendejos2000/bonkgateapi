import Download from "./Download" // Assuming Download is a component or SVG icon

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="hero-content">
        {/* Hero section content here */}
        <a
          href="https://github.com/fouryoursafety"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-[#F0B90B] text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] flex items-center gap-2"
        >
          <Download className="w-5 h-5" />
          Add to Browser
        </a>
        {/* Additional hero section content here */}
      </div>
      <div className="cta-section">
        {/* CTA section content here */}
        <a
          href="https://github.com/fouryoursafety"
          target="_blank"
          rel="noopener noreferrer"
          className="px-8 py-4 bg-[#F0B90B] text-black font-bold rounded-lg hover:bg-yellow-400 transition-colors border-3 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] flex items-center gap-2"
        >
          <Download className="w-5 h-5" />
          Add to Browser
        </a>
        {/* Additional CTA section content here */}
      </div>
    </div>
  )
}

export default HeroSection

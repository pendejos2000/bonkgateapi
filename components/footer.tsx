import { Github } from "icons"
import "./footer.css"

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <p>&copy; 2023 Four Your Safety. All rights reserved.</p>
        </div>
        <div className="flex space-x-4">
          <a
            href="https://github.com/fouryoursafety"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-white/10 hover:bg-white/20 rounded-lg transition-colors border-2 border-white/20"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
          {/* rest of code here */}
        </div>
      </div>
    </footer>
  )
}

export default Footer

import type React from "react"
import { Link } from "react-router-dom"

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h3 className="text-lg font-bold">Four Your Safety</h3>
          <p className="text-sm">All rights reserved.</p>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-sm hover:text-bonk-orange transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-sm hover:text-bonk-orange transition-colors">
                About
              </Link>
            </li>
            <li>
              <a
                href="https://docs.fouryoursafety.fun/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm hover:text-bonk-orange transition-colors"
              >
                Documentation
              </a>
            </li>
            <li>
              <Link to="/contact" className="text-sm hover:text-bonk-orange transition-colors">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer

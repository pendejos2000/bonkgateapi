import type React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faChartLine, faShieldAlt, faMoneyBillWave } from "@fortawesome/free-solid-svg-icons"

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50" />
      <Container className="relative z-10 h-full flex items-center justify-center">
        <Row>
          <Col md={6} className="text-center">
            <h1 className="text-4xl font-bold text-white mb-4">Welcome to Crypto Haven</h1>
            <p className="text-lg text-white mb-8">Your one-stop platform for all your crypto needs.</p>
            <button className="bg-blue-500 text-white py-3 px-6 rounded-full hover:bg-blue-600">Get Started</button>
          </Col>
          <Col md={6} className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-amber-50 opacity-50" />
            {/* Placeholder for hero image */}
            <img src="/hero-image.png" alt="Hero" className="w-full h-full object-cover" />
          </Col>
        </Row>
      </Container>
      {/* For HODL'ers section */}
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-12">
        <Container>
          <Row>
            <Col md={4} className="text-center">
              <FontAwesomeIcon icon={faChartLine} className="text-4xl mb-4 text-white" />
              <h2 className="text-2xl font-bold text-white mb-4">Grow Your Wealth</h2>
              <p className="text-lg text-white">Invest in cryptocurrencies and watch your wealth grow.</p>
            </Col>
            <Col md={4} className="text-center">
              <FontAwesomeIcon icon={faShieldAlt} className="text-4xl mb-4 text-white" />
              <h2 className="text-2xl font-bold text-white mb-4">Secure Your Assets</h2>
              <p className="text-lg text-white">Enjoy peace of mind with our top-notch security features.</p>
            </Col>
            <Col md={4} className="text-center">
              <FontAwesomeIcon icon={faMoneyBillWave} className="text-4xl mb-4 text-white" />
              <h2 className="text-2xl font-bold text-white mb-4">Manage Your Finances</h2>
              <p className="text-lg text-white">Easily manage your crypto portfolio and transactions.</p>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  )
}

export default HeroSection

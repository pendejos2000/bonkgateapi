import type React from "react"
import { Container, Row, Col } from "react-bootstrap"
import { RoadmapPhase } from "./roadmap-phase"

const RoadmapSection: React.FC = () => {
  return (
    <div className="relative h-screen overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-yellow-50 via-amber-50 to-orange-50" />
      <Container className="relative z-10">
        <Row>
          <Col md={4}>
            <RoadmapPhase
              title="Phase 1"
              description="Initial development and planning"
              className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-amber-50 opacity-50"
            />
          </Col>
          <Col md={4}>
            <RoadmapPhase
              title="Phase 2"
              description="Implementation and testing"
              className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-amber-50 opacity-50"
            />
          </Col>
          <Col md={4}>
            <RoadmapPhase
              title="Phase 3"
              description="Launch and maintenance"
              className="absolute inset-0 bg-gradient-to-br from-yellow-50 to-amber-50 opacity-50"
            />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default RoadmapSection

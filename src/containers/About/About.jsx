import React from "react"
import { Row, Col } from "react-flexbox-grid"

import { AboutContainer, RedTitle, Description } from "./About.styles"

export const About = () => {
  return (
    <Row>
      <AboutContainer>
        <Col xs={12}>
          <RedTitle> Hey!</RedTitle>
        </Col>
        <Col xs={12}>
          <Description>
            I am an artist and developer from Mexico City. I studied Electronic
            Production and Music Therapy at Berklee College of Music. Projects
            that attempt to bend and break the mold drive and motivate me.
            Experimentation is my true calling. I am enthusiastic about learning
            new tools and ideas to synthesize an end product or digital
            experience.
          </Description>
          <Description> Let's make something together! </Description>
        </Col>
      </AboutContainer>
    </Row>
  )
}

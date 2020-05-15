import React from "react"
import { Row, Col } from "react-flexbox-grid"

import { AboutContainer, RedTitle, Description } from "./About.styles"

const Bio = `
  I'm a developer from 🇲🇽 MX City. I'm all about building digital tools, multimedia art and experiences. 
  When I'm not working with the awesome product team @ SalesLoft, I'm probably making sounds with 
  synths and guitars, tinkering with some new tech (serverless recently 🖤) or cooking something from scratch. 
`

export const About = () => {
  return (
    <Row>
      <AboutContainer>
        <Col xs={12}>
          <RedTitle> Hey!</RedTitle>
        </Col>
        <Col xs={12}>
          <Description>
            {Bio}
          </Description>
          <Description> Check out my work! </Description>
        </Col>
      </AboutContainer>
    </Row>
  )
}

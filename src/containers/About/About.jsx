import React from "react"
import { Row, Col } from "react-flexbox-grid"

import {
  AboutContainer,
  RedTitle,
  Description,
  StyledLink,
} from "./About.styles"

const Bio = `
  I'm a developer from 🇲🇽 MX City. I'm all about solving problems with the most simple yet elegant solution. 
  When I'm not working with the awesome product team @ SalesLoft, I'm probably making sounds with 
  synths and guitars, cooking something from scratch or tinkering with some new tech (Serverless & WebGL recently 🖤). 
`

export const About = () => {
  return (
    <AboutContainer>
      <Col xs={12}>
        <RedTitle> Hey! </RedTitle>
      </Col>
      <Col xs={12}>
        <Description>{Bio}</Description>
        <Description>
          <StyledLink to="work"> Check out my work! </StyledLink>
        </Description>
      </Col>
    </AboutContainer>
  )
}

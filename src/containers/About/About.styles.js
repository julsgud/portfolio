import { Col } from "react-flexbox-grid"
import styled, { keyframes } from "styled-components"
import { fadeInDown } from "react-animations"
import { Link } from "react-router-dom"

import { media } from "../../styles"

const ani = keyframes`${fadeInDown}`

export const AboutContainer = styled(Col)`
  ${media.medium`
		margin-top: 72px;
	`};
`

export const RedTitle = styled.div`
  color: rgba(188, 85, 86, 1);
  font-weight: 700;
  font-size: 1.5em;
  margin-bottom: 1em;
  animation: 1.5s ${ani};
`

export const Description = styled.p`
  font-weight: 300;
  font-size: 1em;
  letter-spacing: 0.2px;
  text-align: left;
`

export const StyledLink = styled(Link)`
  color: #333;
`

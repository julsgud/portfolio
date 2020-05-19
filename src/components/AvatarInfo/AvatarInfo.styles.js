import { Link } from "react-router-dom"
import styled, { keyframes } from "styled-components"
import { Col } from "react-flexbox-grid"
import { fadeInLeft } from "react-animations"

import { media } from "../../styles"

const ani = keyframes`${fadeInLeft}`

export const AvatarNavContainer = styled(Col)`
  margin-top: 72px;
  animation: 1.5s ${ani};
`

export const Img = styled.img`
  border-radius: 5%;

  ${media.medium`
		max-width: 256px;
		max-height: 256px;
	`}
`

export const Name = styled.div`
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 2px;
  margin-top: 16px;
  margin-bottom: 12px;
`

export const Title = styled.div`
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 1px;
`

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #333;
`


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

export const LinkContactRow = styled.a`
  display: flex;
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  font-size: 1em;
  margin: 1em 1em 1em 0;
  padding: 0;
  color: rgba(29, 29, 29, 0.95);
  text-decoration: none;
  cursor: pointer;
  cursor: hand;

  &:hover {
    color: #bc5556;
  }
`

export const Icon = styled(Col)`
  font-size: 1.2em;
  font-weight: 300;
  padding: 0;
  color: rgba(29, 29, 29, 1);
  
  &:hover {
    color: #bc5556;
  }
  
  transition: all 0.3s ease-in-out;
`


import { NavLink } from "react-router-dom"
import styled, { css, keyframes } from "styled-components"
import { Row, Col } from "react-flexbox-grid"
import { fadeInLeft } from "react-animations"

import { media } from "../../styles"

const ani = keyframes`${fadeInLeft}`

export const orangeCss = css`
  color: #bc5556;
`

const AvatarNavContainer = styled(Col)`
  margin-top: 72px;
  animation: 1.5s ${ani};
`

const Img = styled.img`
  border-radius: 5%;

  ${media.medium`
		max-width: 256px;
		max-height: 256px;
	`}
`

const Name = styled.div`
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 2px;
  margin-top: 16px;
  margin-bottom: 12px;
`

const Title = styled.div`
  font-weight: 300;
  font-size: 16px;
  letter-spacing: 1px;
`

const NavBar = styled(Row)`
  width: 128px;
  margin: 16px auto 12px;
  font-size: 14px;
`

const PillLink = styled(NavLink)`
  font-weight: 400;
  color: rgba(29, 29, 29, 1);
  text-decoration: none;

  &:hover {
    ${orangeCss}
  }

  &:active {
    text-decoration: underline;
    color: rgba(251, 74, 35, 1);
  }
`

const Divider = styled.div`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 1em;
`

export {
  AvatarNavContainer,
  Img,
  Name,
  Title,
  NavBar,
  PillLink,
  Divider,
}

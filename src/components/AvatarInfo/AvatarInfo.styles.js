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
	margin-top: 1.5em;

	${media.medium`
		margin-top: 3em;
		margin-left: -2em;
	`}

	animation: 1.5s ${ani};
`

const Img = styled.img`
  border-radius: 5%;
  width: 90%;
  height: 90%;

  ${media.medium`
		max-width: 280px;
		max-height: 280px;
	`}
`

const Name = styled.div`
  font-weight: 400;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  margin-top: 0.5em;
  margin-bottom: 0.4em;

  ${media.medium`
		font-size: 1.2em;
		letter-spacing: .4vw;
	`}

  ${media.large`
		font-size: 1.5em;
		letter-spacing: .1em;
	`}
`

const Title = styled.div`
  font-weight: 300;
  font-size: 1.06em;
  letter-spacing: 0.1em;
  margin-bottom: 0.2em;
  margin-top: 0.2em;

  ${media.medium`
		font-size: .8em;
		letter-spacing: .25vw;
	`}

  ${media.large`
		font-size: 1em;
		letter-spacing: .1em;
	`}
`

const BlueTitle = styled(Title)`
  color: rgba(255, 190, 124, 1);
  margin-right: 1.3em;
`

const NavBar = styled(Row)`
  margin: auto;
  margin-top: 1.25em;

  ${media.medium`
		font-size: .85em;
		max-width: 24vw;
	`}

  ${media.large`
		max-width: 200px;
	`}
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
  BlueTitle,
  NavBar,
  PillLink,
  Divider,
}

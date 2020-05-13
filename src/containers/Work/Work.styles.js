import styled, { keyframes } from "styled-components"
import { Row, Col } from "react-flexbox-grid"
import { fadeIn } from "react-animations"
import { media } from "../../styles"

const ani = keyframes`${fadeIn}`

const WorkContainer = styled(Col)`
  margin: 0 1.75em 2em 1.75em;

  ${media.medium`
		margin-top: 3em;
		margin-left: -2em;
		marging-bottom: 0;
	`};

  animation: 1.5s ${ani};
`

const Arrow = styled.a`
  color: rgba(29, 29, 29, 0.85d);
  font-size: 3em;
  cursor: pointer;
  cursor: hand;
  margin-top: 0;
  padding-top: 0;

  ${media.medium`

	`};
`

export { WorkContainer, Arrow }

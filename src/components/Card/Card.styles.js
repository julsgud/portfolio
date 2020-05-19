import styled from "styled-components"
import { Row, Col } from "react-flexbox-grid"
import { media } from "../../styles"

let width

if (window.innerWidth < 668) {
  width = window.innerWidth - 16 * 4
} else if (window.innerWidth < 900) {
  width = window.innerWidth * 0.5
} else {
  width = 450
}

const Container = styled(Col)`
  text-align: left;
  margin: 0 1.75em 2em 1.75em;

  ${media.medium`
		margin-bottom: 1em;
	`};
`

const Img = styled.img`
  width: ${width + "px"};
`

const CardTextContainer = styled(Col)`
  padding: 0;
`

const Title = styled.div`
  font-weight: 600;
  font-size: 24px;
  letter-spacing: 1px;
  text-decoration: none;
  color: rgba(29, 29, 29, 1);
`

const Subtitle = styled.div`
  font-weight: 300;
  font-size: 16px;
  margin-bottom: 24px;
`

const HardRow = styled(Row)`
  margin-left: 0;
`

const Text = styled.div`
  text-align: left;
  font-weight: 300;
  font-size: 0.8em;
  margin: 0;

  ${media.medium`
		font-size: .9em;
	`};

  ${media.large`
		font-size: 1em;
	`};
`

export { Container, Img, CardTextContainer, Title, Subtitle, HardRow, Text }

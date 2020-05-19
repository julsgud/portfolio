import styled, { keyframes } from "styled-components"
import { Col } from "react-flexbox-grid"
import { fadeIn } from "react-animations"

const ani = keyframes`${fadeIn}`

export const WorkContainer = styled(Col)`
  margin-top: 72px;
  animation: 1.5s ${ani};
`

export const Arrow = styled.a`
  color: rgba(29, 29, 29, 0.85d);
  font-size: 3em;
  cursor: pointer;
  margin: 0 12px 0;
  padding-top: 0;
`

export const Icon = styled.i`
  &:hover {
    transform: scale(1.2);
  }
  
  transition: all 0.3s ease-in-out;
`
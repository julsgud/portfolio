import React from "react"
import styled from "styled-components"

import { media } from "../../styles"

const A = styled.a`
  font-weight: 300;
  font-size: 1em;
  color: rgba(29, 29, 29, 1);
  margin: 0;
  margin-left: 8px;
  text-decoration: underline;
  cursor: pointer;
  cursor: hand;
  position: relative;

  ${media.medium`
		font-size: .9em;
	`};

  ${media.large`
		font-size: 1.12em;
	`};
`

export const TextLink = (props) => {
  let { text, link } = props
  return (
    <A target="_blank" href={link}>
      {text}
    </A>
  )
}

import React from "react"
import styled from "styled-components"

const A = styled.a`
  font-weight: 300;
  font-size: 16px;
  color: rgba(29, 29, 29, 1);
  margin: 0 0 0 8px;
  text-decoration: underline;
  cursor: pointer;
  position: relative;
`

export const TextLink = (props) => {
  let { text, link } = props
  return (
    <A target="_blank" href={link}>
      {text}
    </A>
  )
}

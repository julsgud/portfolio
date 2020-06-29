import React, { useCallback, useState } from "react"
import { animated, useTransition } from "react-spring"
import styled from "styled-components"

import { TextLink } from "../TextLink/TextLink"

import { Container, Img, Title, Subtitle, HardRow, Text } from "./Card.styles"

let width

if (window.innerWidth < 668) {
  width = window.innerWidth - 16 * 4
} else if (window.innerWidth < 900) {
  width = window.innerWidth * 0.5
} else {
  width = 450
}

export const CardContainer = ({ children }) => {
  return <Container>{children}</Container>
}

export const CardMedia = ({ src, type, link, height }) => {
  if (type !== "image") {
    const fullSrc =
      "https://www.youtube.com/embed/" +
      src +
      (type === "video" ? "?showinfo=0" : "")
    console.log(fullSrc)
    return (
      <div className="container">
        <iframe
          className="player"
          type="text/html"
          width={width}
          height="200"
          src={fullSrc}
          frameBorder="0"
          allowFullScreen
        />
      </div>
    )
  }

  if (Array.isArray(src)) {
    return <Carousel src={src} link={link} height={height} />
  }

  return (
    <a target="_blank" href={link}>
      <Img src={src}></Img>
    </a>
  )
}

const CarouselContainer = styled.div`
  position: relative;
  cursor: pointer;
  width: ${width}px;
  height: ${p => p.height}px;
`

const CarouselImageContainer = styled(animated.div)`
  position: absolute;
  width: ${width}px;
  height: 243px;
`

export const Carousel = ({ src, height }) => {
  const [index, set] = useState(0)
  const images = src.map((s, i) => ({ style }) => (
    <CarouselImageContainer style={{ ...style }}>
      <Img src={s} />
    </CarouselImageContainer>
  ))
  const imagesWithTransitions = useTransition(index, (p) => p, {
    from: { opacity: 0, transform: "translate3d(100%,0,0)" },
    enter: { opacity: 1, transform: "translate3d(0%,0,0)" },
    leave: { opacity: 0, transform: "translate3d(-10%,0,0)" },
  })
  const next = useCallback(
    () => set((state) => (state + 1) % images.length),
    []
  )

  return (
    <CarouselContainer onClick={next} height={height}>
      {imagesWithTransitions.map(({ item, props, key }) => {
        const Page = images[item]
        return <Page key={key} style={props} />
      })}
    </CarouselContainer>
  )
}

export const CardTitle = ({ linkTo, text }) => (
  <Title href={linkTo}> {text} </Title>
)

export const CardSubtitle = (props) => {
  if (props.collab) {
    return (
      <HardRow>
        <Subtitle> {props.text} </Subtitle>
        <TextLink link={props.collabLink} text={props.collab} />
      </HardRow>
    )
  }

  return null
}

export const CardPrimaryText = (props) => {
  return (
    <Text style={{ marginBottom: ".75em" }}>
      {" "}
      <b>Tools:</b> {props.text}{" "}
    </Text>
  )
}
export const CardSecondaryText = (props) => {
  return (
    <Text>
      {" "}
      <b>Twist:</b> {props.text}{" "}
    </Text>
  )
}

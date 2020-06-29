import React from "react"

import {
  CardContainer,
  CardMedia,
  CardTitle,
  CardSubtitle,
  CardPrimaryText,
  CardSecondaryText,
} from "../Card/Card"

import { CardTextContainer } from "../Card/Card.styles"

export const Project = ({
  titleLink,
  title,
  mediaType,
  mediaSrc,
  mediaHeight,
  link,
  description,
  collab,
  collabLink,
  tools,
  technicalTwist,
}) => {
  return (
    <CardContainer>
      <CardTitle linkTo={titleLink} text={title} />
      <CardMedia type={mediaType} src={mediaSrc} link={link} height={mediaHeight}/>
      <CardTextContainer>
        <CardSubtitle
          text={description}
          collab={collab}
          collabLink={collabLink}
        />
        <CardPrimaryText text={tools} />
        <CardSecondaryText text={technicalTwist} />
      </CardTextContainer>
    </CardContainer>
  )
}

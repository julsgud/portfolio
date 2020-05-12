import React from "react"

import {
  CardContainer,
  CardMedia,
  CardTextContainer,
  CardTitle,
  CardSubtitle,
  CardPrimaryText,
  CardSecondaryText,
} from "../Card/Card"

export const Project = ({
  titleLink,
  title,
  mediaType,
  mediaSrc,
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
      <CardMedia type={mediaType} src={mediaSrc} link={link} />
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

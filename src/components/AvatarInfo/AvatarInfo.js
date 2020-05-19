import React from "react"
import { Row } from "react-flexbox-grid"

import { AvatarNavContainer, Img, Name, Title, StyledLink, Icon, LinkContactRow } from "./AvatarInfo.styles"

export const AvatarInfo = () => {
  return (
    <Row center="xs">
      <AvatarNavContainer xs={12}>
        <StyledLink to="/">
          <Row center="xs">
            <Img src="https://res.cloudinary.com/julsgc/image/upload/v1589414607/ICCD_B-21_lw6mqt.jpg"></Img>
          </Row>
          <Row center="xs">
            <Name> Julio Gudiño </Name>
          </Row>
          <Row center="xs">
            <Title> Software Engineer </Title>
          </Row>
        </StyledLink>

        <Row center="xs">
          <LinkContactRow href="https://github.com/julsgud" target="_blank">
            <Icon xs={1}>
              <i className="fa fa-github" aria-hidden="true"></i>
            </Icon>
          </LinkContactRow>
          <LinkContactRow
            href="https://www.instagram.com/julsgud/"
            target="_blank"
          >
            <Icon xs={1}>
              <i className="fa fa-instagram" aria-hidden="true"></i>
            </Icon>
          </LinkContactRow>
          <LinkContactRow
            href="https://www.linkedin.com/in/julio-gudino-463794137/"
            target="_blank"
          >
            <Icon xs={1}>
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </Icon>
          </LinkContactRow>
        </Row>
      </AvatarNavContainer>
    </Row>
  )
}

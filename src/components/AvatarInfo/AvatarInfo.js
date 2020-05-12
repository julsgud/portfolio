import React from "react"
import { Row } from "react-flexbox-grid"

import {
  AvatarNavContainer,
  Img,
  Name,
  Title,
  BlueTitle,
  NavBar,
  PillLink,
  Divider,
} from "./AvatarInfo.styles"

const activeLinkStyle = {
  textDecoration: "underline",
  color: "#7adcdc",
}

export const AvatarInfo = () => {
  return (
    <Row center="xs">
      <AvatarNavContainer xs={8}>
        <Row center="xs">
          <Img src="https://res.cloudinary.com/julsgc/image/upload/v1507140229/juls.jpg"></Img>
        </Row>
        <Row center="xs">
          <Name> Julio Gudiño </Name>
        </Row>
        <Row center="xs">
          <Title> Digital Production </Title>
        </Row>
        <Row center="xs">
          <BlueTitle> & </BlueTitle> <Title> Web Development </Title>
        </Row>
        <NavBar between="xs" center="xs">
          <PillLink to="/" exact activeStyle={activeLinkStyle}>
            About
          </PillLink>
          <Divider> | </Divider>
          <PillLink to="/work" activeStyle={activeLinkStyle}>
            Work
          </PillLink>
          <Divider> | </Divider>
          <PillLink to="/contact" activeStyle={activeLinkStyle}>
            Contact
          </PillLink>
        </NavBar>
      </AvatarNavContainer>
    </Row>
  )
}

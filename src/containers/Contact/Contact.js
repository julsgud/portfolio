import React from "react"
import {Row} from "react-flexbox-grid"
import {
  ContactContainer,
  Title,
  Subtitle,
  Icon,
  Info,
  LinkContactRow,
  ContactRow,
} from "./Contact.styles"

export const Contact = () => {
  return (
    <ContactContainer xs={12}>
      <Title> Let's connect... </Title>
      <ContactRow>
        <Icon xs={1}>
          <i className="fa fa-phone" aria-hidden="true"></i>
        </Icon>
        <Info xs={11}>
          <Subtitle>+52155-1291-3782 </Subtitle>
        </Info>
      </ContactRow>
      <ContactRow start="xs">
        <Icon xs={1} style={{ fontSize: "1em" }}>
          <i className="fa fa-envelope" aria-hidden="true"></i>
        </Icon>
        <Info xs={11}>
          <Subtitle>julsgud@gmail.com </Subtitle>
        </Info>
      </ContactRow>
    </ContactContainer>
  )
}

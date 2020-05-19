import React from "react"
import { Route } from "react-router-dom"
import { Col } from "react-flexbox-grid"

import { About } from "../About/About"
import { Work } from "../Work/Work"

import { AvatarInfo } from "../../components/AvatarInfo/AvatarInfo"

import { ColContainer, RowContainer, HR } from "./App.styles"

export class App extends React.Component {
  componentDidMount() {
    window.onresize = () => {
      this.forceUpdate()
    }
  }

  render() {
    // mobile
    if (window.innerWidth < 668) {
      return (
        <ColContainer>
          <AvatarInfo />
          <HR />
          <Route exact path="/" component={About} />
          <Route exact path="/work" component={Work} />
        </ColContainer>
      )
      // desktop
    } else {
      return (
        <RowContainer between="xs">
          <Col xs={4}>
            <AvatarInfo />
          </Col>
          <Col xs={7}>
            <Route exact path="/" component={About} />
            <Route exact path="/work" component={Work} />
          </Col>
        </RowContainer>
      )
    }
  }
}

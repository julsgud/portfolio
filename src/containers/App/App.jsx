import React from "react"
import { Route } from "react-router-dom"
import { Col } from "react-flexbox-grid"

import { About } from "../About/About"
import { Work } from "../Work/Work"
import { Contact } from "../Contact/Contact"

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
          <Route
            exact
            path="/work"
            render={() => <Work lang={this.state.lang} />}
          />
          <Route
            exact
            path="/contact"
            render={({ history }) => (
              <Contact lang={this.state.lang} history={history} />
            )}
          />
          <Route
            exact
            path="/contact/success"
            lang={this.state.lang}
            render={() => <Success />}
          />
        </ColContainer>
      )
      // desktop
    } else {
      return (
        <RowContainer>
          <Col xs={5}>
            <AvatarInfo />
          </Col>
          <Col xs={7}>
            <Route exact path="/" component={About} />
            <Route
              exact
              path="/work"
              render={() => <Work lang={this.state.lang} />}
            />
            <Route
              exact
              path="/contact"
              render={({ history }) => (
                <Contact lang={this.state.lang} history={history} />
              )}
            />
          </Col>
        </RowContainer>
      )
    }
  }
}

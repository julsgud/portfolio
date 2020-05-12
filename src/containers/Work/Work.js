import React, { useRef } from "react"
import { Row } from "react-flexbox-grid"
import { ViewPager, Frame, Track, View } from "react-view-pager"

import { Project } from "../../components/Project/Project"
import { WorkContainer, Arrow } from "./Work.styles"
import json from "./projects.json"

export const Work = () => {
  const track = useRef(null)
  const projects = json.projects.map((p, i) => (
    <View key={i}>
      <Project {...p} />
    </View>
  ))

  return (
    <Row center="xs">
      <WorkContainer xs={12}>
        <ViewPager>
          <Frame>
            <Track ref={track} viewsToShow={1} infinite>
              {projects}
            </Track>
          </Frame>
          <nav className="pager-controls">
            <Arrow onClick={() => track.prev()}>
              <i className="fa fa-long-arrow-left" aria-hidden="true" />
            </Arrow>
            <Arrow onClick={() => track.next()}>
              <i className="fa fa-long-arrow-right" aria-hidden="true" />
            </Arrow>
          </nav>
        </ViewPager>
      </WorkContainer>
    </Row>
  )
}

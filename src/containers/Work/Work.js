import React, { useState, useCallback } from "react"
import styled from "styled-components"
import { useTransition, animated } from "react-spring"

import { Project } from "../../components/Project/Project"
import { WorkContainer } from "./Work.styles"
import json from "./projects.json"


export const Work = () => {
  const projects = json.projects.map((p) => <Project {...p} />)

  return <WorkContainer>{projects}</WorkContainer>
}

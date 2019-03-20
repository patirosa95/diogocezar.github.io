import React, { Component } from 'react'

import { Page, Wrapper } from '../../components/Containers'

import { TeachingTalksAnimated } from '../../styles/animations'

import SpreadTheWorld from './SpreadTheWorld'
import GitHub from './GitHub'
import Teacher from './Teacher'
import MainLectures from './MainLectures'

import MainEventsParticipations from './MainEventsParticipations'
import MainPappers from './MainPappers'
import Monographies from './Monographies'

class About extends Component {
  render() {
    return (
      <TeachingTalksAnimated>
        <Page color="orange">
          <Wrapper>
            <SpreadTheWorld />
            <GitHub />
            <Teacher />
            <MainLectures />
          </Wrapper>
        </Page>
        <Page color="purple">
          <Wrapper>
            <MainEventsParticipations />
            <MainPappers />
            <Monographies />
          </Wrapper>
        </Page>
      </TeachingTalksAnimated>
    )
  }
}

export default About

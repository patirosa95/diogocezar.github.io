import React, { Component } from 'react'

import { Page, Wrapper } from '../../components/Containers'

import { EducationalAnimated } from '../../styles/animations'

import SpreadTheWorld from './SpreadTheWorld'
import GitHub from './GitHub'
import Teacher from './Teacher'
import MainLectures from './MainLectures'

import MainEventsParticipations from './MainEventsParticipations'
import MainPappers from './MainPappers'
import Monographies from './Monographies'

class Educational extends Component {
  render() {
    return (
      <EducationalAnimated>
        <Page color="orange">
          <Wrapper>
            <SpreadTheWorld />
            <GitHub />
            <Teacher />
            <MainLectures />
          </Wrapper>
        </Page>
        <Page color="purple" decoration={true} decorationColor="purple">
          <Wrapper>
            <MainEventsParticipations />
            <MainPappers />
            <Monographies />
          </Wrapper>
        </Page>
      </EducationalAnimated>
    )
  }
}

export default Educational

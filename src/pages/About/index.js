import React, { Component } from 'react'

import { Page, Wrapper } from '../../components/Containers'

import AboutMe from './AboutMe'
import Interests from './Interests'

class About extends Component {
  render() {
    return (
      <Page color="orange">
        <Wrapper>
          <AboutMe />
          <Interests />
        </Wrapper>
      </Page>
    )
  }
}

export default About

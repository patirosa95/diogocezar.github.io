import React, { Component } from 'react'

import { Page, Wrapper } from '../../components/Containers'

import AboutMe from './AboutMe'

class About extends Component {
  render() {
    return (
      <Page color="orange">
        <Wrapper>
          <AboutMe />
        </Wrapper>
      </Page>
    )
  }
}

export default About

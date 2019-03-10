import React, { Component, Fragment } from 'react'

import { Page, Wrapper } from '../../components/Containers'

import AboutMe from './AboutMe'
import Interests from './Interests'
import EducationBackground from './EducationBackground'
import MainProfessionalBackground from './MainProfessionalBackground'
import Hobbies from './Hobbies'
import Skills from './Skills'
import Awards from './Awards'

class About extends Component {
  render() {
    return (
      <Fragment>
        <Page color="orange">
          <Wrapper>
            <AboutMe />
            <Interests />
            <EducationBackground />
            <MainProfessionalBackground />
          </Wrapper>
        </Page>
        <Page color="purple">
          <Wrapper>
            <Hobbies />
            <Skills />
            <Awards />
          </Wrapper>
        </Page>
      </Fragment>
    )
  }
}

export default About

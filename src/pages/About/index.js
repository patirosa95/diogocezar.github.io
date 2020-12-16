import React, { Component } from 'react'

import { Page, Wrapper } from '../../components/Containers'
import { AboutAnimated } from '../../styles/animations'

import AboutMe from './AboutMe'
import Interests from './Interests'
import EducationBackground from './EducationBackground'
import MainProfessionalBackground from './MainProfessionalBackground'
import Hobbies from './Hobbies'
import Skills from './Skills'
import Awards from './Awards'
import { ButtonBack } from '../../objects/Button'
import FooterMain from '../Main/Footer'

class About extends Component {
  render() {
    return (
      <AboutAnimated>
        <Page color="orange">
          <Wrapper>
            <AboutMe />
            <Interests />
            <EducationBackground />
            <MainProfessionalBackground />
          </Wrapper>
        </Page>
        <Page color="purple" decoration={true} decorationColor="purple">
          <Wrapper>
            <Hobbies />
            <Skills />
            <Awards />
          </Wrapper>
        </Page>
        <FooterMain />
        <ButtonBack color="orange"/>
      </AboutAnimated>
    )
  }
}

export default About

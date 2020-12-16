import React, { Component } from 'react'

import { Page, Wrapper } from '../../components/Containers'

import { KeepInTouchAnimated } from '../../styles/animations'

import Main from './Main'
import SocialNetworks from './SocialNetworks'
import ContactForm from './ContactForm'

import { ButtonBack } from '../../objects/Button'

import FooterMain from '../Main/Footer'

class KeepInTouch extends Component {
  render() {
    return (
      <KeepInTouchAnimated>
        <Page color="purple">
          <Wrapper>
            <Main />
            <SocialNetworks />
            <ContactForm />
          </Wrapper>
        </Page>
        <FooterMain />
        <ButtonBack color="orange"/>
      </KeepInTouchAnimated>
    )
  }
}

export default KeepInTouch

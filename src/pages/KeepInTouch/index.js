import React, { Component } from 'react'

import { Page, Wrapper } from '../../components/Containers'

import { KeepInTouchAnimated } from '../../styles/animations'

import Main from './Main'
import SocialNetworks from './SocialNetworks'
import ContactForm from './ContactForm'

import { ButtonBack } from '../../objects/Button'

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
        <ButtonBack />
      </KeepInTouchAnimated>
    )
  }
}

export default KeepInTouch

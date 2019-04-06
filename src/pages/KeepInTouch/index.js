import React, { Component } from 'react'

import { Page, Wrapper } from '../../components/Containers'

import { KeepInTouchAnimated } from '../../styles/animations'

import Main from './Main'
import SocialNetworks from './SocialNetworks'
import ContactForm from './ContactForm'

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
      </KeepInTouchAnimated>
    )
  }
}

export default KeepInTouch

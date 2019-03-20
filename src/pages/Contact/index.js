import React, { Component } from 'react'

import { Page, Wrapper } from '../../components/Containers'

import { ContactAnimated } from '../../styles/animations'

import ChatWithYou from './ChatWithYou'
import SocialNetworks from './SocialNetWorks'
import ContactForm from './ContactForm'

class Contact extends Component {
  render() {
    return (
      <ContactAnimated>
        <Page>
          <Wrapper>
            <ChatWithYou />
            <SocialNetworks />
            <ContactForm />
          </Wrapper>
        </Page>
      </ContactAnimated>
    )
  }
}

export default Contact

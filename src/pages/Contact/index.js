import React, { Component } from 'react'

import { Page, Wrapper } from '../../components/Containers'

import ChatWithYou from './ChatWithYou'
import SocialNetworks from './SocialNetWorks'
import ContactForm from './ContactForm'

class Contact extends Component {
  render() {
    return (
      <Page>
        <Wrapper>
          <ChatWithYou />
          <SocialNetworks />
          <ContactForm />
        </Wrapper>
      </Page>
    )
  }
}

export default Contact

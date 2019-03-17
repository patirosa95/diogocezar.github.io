import React, { Component } from 'react'

import { Page, Wrapper } from '../../components/Containers'

import ChatWithYou from './ChatWithYou'
import SocialNetworks from './SocialNetWorks'

class Contact extends Component {
  render() {
    return (
      <Page>
        <Wrapper>
          <ChatWithYou />
          <SocialNetworks />
        </Wrapper>
      </Page>
    )
  }
}

export default Contact

import React, { Component } from 'react'

import { Page, Wrapper } from '../../components/Containers'

import { NotFoundAnimated } from '../../styles/animations'

import Message from './Message'

class Main extends Component {
  render() {
    return (
      <NotFoundAnimated>
        <Page>
          <Wrapper>
            <Message />
          </Wrapper>
        </Page>
      </NotFoundAnimated>
    )
  }
}

export default Main

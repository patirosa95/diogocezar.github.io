import React, { Component } from 'react'

import { Page, Wrapper } from '../../components/Containers'

import Introduction from './Introduction'
import Content from './Content'
import Conclusion from './Conclusion'
import FooterMain from './Footer'

class Main extends Component {
  render() {
    return (
      <Page>
        <Wrapper>
          <Introduction />
          <Content />
          <Conclusion />
        </Wrapper>
        <FooterMain />
      </Page>
    )
  }
}

export default Main

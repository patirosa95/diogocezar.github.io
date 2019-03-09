import React, { Component } from 'react'

import Page from '../../components/Page'
import Wrapper from '../../components/Wrapper'

import Introduction from './Introduction'
import Content from './Content'
import Conclusion from './Conclusion'

import Footer from '../../components/Footer'

class Main extends Component {
  render() {
    return (
      <Page>
        <Wrapper>
          <Introduction />
          <Content />
          <Conclusion />
        </Wrapper>
        <Footer />
      </Page>
    )
  }
}

export default Main

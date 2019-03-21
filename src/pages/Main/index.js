import React, { Component } from 'react'

import { Page, Wrapper } from '../../components/Containers'

import { MainAnimated } from '../../styles/animations'

import Introduction from './Introduction'
import Content from './Content'
import Conclusion from './Conclusion'
import FooterMain from './Footer'

class Main extends Component {
  render() {
    return (
      <MainAnimated>
        <Page color="purple" paddingBottom="0">
          <Wrapper>
            <Introduction />
            <Content />
            <Conclusion />
          </Wrapper>
          <FooterMain />
        </Page>
      </MainAnimated>
    )
  }
}

export default Main

import React, { Component } from 'react'

import Page from '../../components/Page'
import Wrapper from '../../components/Wrapper'

import Introduction from './Introduction'
import Content from './Content'
import Conclusion from './Conclusion'

import Footer, { ColumnFooter, TitleFooter, ContentFooter } from '../../components/Footer'

class Main extends Component {
  render() {
    return (
      <Page>
        <Wrapper>
          <Introduction />
          <Content />
          <Conclusion />
        </Wrapper>
        <Footer>
          <ColumnFooter>
            <TitleFooter align="left">SOURCE CODE</TitleFooter>
            <ContentFooter align="left">
              This website is open source and you can download <a href="#">right here.</a>
            </ContentFooter>
          </ColumnFooter>
          <ColumnFooter>
            <TitleFooter>CONTACT</TitleFooter>
            <ContentFooter>
              You can contact me through{' '}
              <a href="mailto:diogo@diogocezar.dev">diogo@diogocezar.dev</a>
              <br />
              +55 (43) 933 000 663
            </ContentFooter>
          </ColumnFooter>
          <ColumnFooter>
            <TitleFooter align="right">SOCIAL NETWORKS</TitleFooter>
            <ContentFooter align="right">
              You can contact me through{' '}
              <a href="mailto:diogo@diogocezar.dev">diogo@diogocezar.dev</a>
              <br />
              +55 (43) 933 000 663
            </ContentFooter>
          </ColumnFooter>
        </Footer>
      </Page>
    )
  }
}

export default Main

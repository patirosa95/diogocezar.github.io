import React from 'react'
import Footer, { ColumnFooter, TitleFooter, ContentFooter } from '../../../components/Footer'

const FooterMain = () => (
  <Footer>
    <ColumnFooter>
      <TitleFooter align="left">SOURCE CODE</TitleFooter>
      <ContentFooter align="left">
        This website is open source and you can download{' '}
        <a
          href="http://www.github.com/diogocezar/diogocezar.github.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          right here.
        </a>
      </ContentFooter>
    </ColumnFooter>
    <ColumnFooter>
      <TitleFooter>CONTACT</TitleFooter>
      <ContentFooter>
        You can contact me through <a href="mailto:diogo@diogocezar.dev">diogo@diogocezar.dev</a>
        <br />
        +55 (43) 933 000 663
      </ContentFooter>
    </ColumnFooter>
    <ColumnFooter>
      <TitleFooter align="right">SOCIAL NETWORKS</TitleFooter>
      <ContentFooter align="right">
        You can contact me through <a href="mailto:diogo@diogocezar.dev">diogo@diogocezar.dev</a>
        <br />
        +55 (43) 933 000 663
      </ContentFooter>
    </ColumnFooter>
  </Footer>
)

export default FooterMain
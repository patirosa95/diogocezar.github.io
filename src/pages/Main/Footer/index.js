import React from 'react'
import InlineSVG from 'svg-inline-react'
import Footer, { ColumnFooter, TitleFooter, ContentFooter } from '../../../components/Footer'
import { ListContainer, ListItemFooter } from '../../../components/ListContainer'
import Link from '../../../objects/Link'
import { iconFooterGithub, iconFooterTwitter, iconFooterInstagram, iconFooterFacebook, iconFooterLinkedIn } from './Icons'

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
        <ListContainer>
          <ListItemFooter>
            <Link href="http://www.diogocezar.dev">
              <InlineSVG src={iconFooterGithub} />
            </Link>
          </ListItemFooter>
          <ListItemFooter>
            <Link href="http://www.diogocezar.dev">
              <InlineSVG src={iconFooterTwitter} />
            </Link>
          </ListItemFooter>
          <ListItemFooter>
            <Link href="http://www.diogocezar.dev">
              <InlineSVG src={iconFooterInstagram} />
            </Link>
          </ListItemFooter>
          <ListItemFooter>
            <Link href="http://www.diogocezar.dev">
              <InlineSVG src={iconFooterFacebook} />
            </Link>
          </ListItemFooter>
          <ListItemFooter>
            <Link href="http://www.diogocezar.dev">
              <InlineSVG src={iconFooterLinkedIn} />
            </Link>
          </ListItemFooter>
        </ListContainer>
      </ContentFooter>
    </ColumnFooter>
  </Footer>
)

export default FooterMain

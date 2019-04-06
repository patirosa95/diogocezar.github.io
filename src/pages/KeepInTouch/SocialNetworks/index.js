import React from 'react'

import { Section } from '../../../components/Containers'
import { FullContent } from '../../../components/AlignContent'
import { Row, Col4, WrapperCol } from '../../../components/Grid'

import Button from '../../../objects/Button'
import Separator from '../../../objects/Separator'
import { TitleItemColumn } from '../../../objects/Titles'
import { ImageItemColumn } from '../../../objects/Images'
import Paragraph from '../../../objects/Paragraph'
import Link from '../../../objects/Link'

const SocialNetworks = () => (
  <Section>
    <Separator number="02" title="Social Networks" />
    <FullContent>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/github.svg" />
            <TitleItemColumn>GitHub</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Github is the place where i publish my projects and studies as developer.
            </Paragraph>
            <Link href="https://github.com/diogocezar/" buttonCenter={true} target="_blank">
              <Button type="orange" right="0px">
                Add Me
              </Button>
            </Link>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/twitter.svg" />
            <TitleItemColumn>Twitter</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Where i publish toughts and hightlights links of development world.
            </Paragraph>
            <Link href="https://twitter.com/diogocezar" buttonCenter={true} target="_blank">
              <Button type="orange" right="0px">
                Add Me
              </Button>
            </Link>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/instagram.svg" />
            <TitleItemColumn>Instagram</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Where i publish some pictures of my daily routine.
            </Paragraph>
            <Link href="https://www.instagram.com/diogoctb/" buttonCenter={true} target="_blank">
              <Button type="orange" right="0px">
                Add Me
              </Button>
            </Link>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/facebook.svg" />
            <TitleItemColumn>Facebook</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Well, everybody knows what is Facebook.
            </Paragraph>
            <Link href="https://www.facebook.com/diogocezar" buttonCenter={true} target="_blank">
              <Button type="orange" right="0px">
                Add Me
              </Button>
            </Link>
          </WrapperCol>
        </Col4>
      </Row>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/linkedin.svg" />
            <TitleItemColumn>LinkedIn</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              You can found here some professional description of mine.
            </Paragraph>
            <Link
              href="https://www.linkedin.com/in/diogocezar/"
              buttonCenter={true}
              target="_blank"
            >
              <Button type="orange" right="0px">
                Add Me
              </Button>
            </Link>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/skype.svg" />
            <TitleItemColumn>Skype</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              You can call me at Skype too.
            </Paragraph>
            <Link href="skype:diogoctb?call" buttonCenter={true}>
              <Button type="orange" right="0px">
                Add Me
              </Button>
            </Link>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/flickr.svg" />
            <TitleItemColumn>Flickr</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Where you can find some public photos.
            </Paragraph>
            <Link
              href="https://www.flickr.com/photos/diogocezar"
              buttonCenter={true}
              target="_blank"
            >
              <Button type="orange" right="0px">
                Add Me
              </Button>
            </Link>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/youtube.svg" />
            <TitleItemColumn>Youtube</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Where i found some time, i publish on an educational channel on YouTube.
            </Paragraph>
            <Link
              href="https://youtube.com/professordiogocezar"
              buttonCenter={true}
              target="_blank"
            >
              <Button type="orange" right="0px">
                Add Me
              </Button>
            </Link>
          </WrapperCol>
        </Col4>
      </Row>
    </FullContent>
  </Section>
)

export default SocialNetworks

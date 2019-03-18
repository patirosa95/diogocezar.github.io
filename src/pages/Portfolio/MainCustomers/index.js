import React from 'react'

import { Section } from '../../../components/Containers'
import { FullContent } from '../../../components/AlignContent'
import { Row, Col4, WrapperCol } from '../../../components/Grid'

import Button from '../../../objects/Button'
import Separator from '../../../objects/Separator'
import { TitleItemColumn } from '../../../objects/Titles'
import { ImageItemColumn } from '../../../objects/Images'
import Paragraph from '../../../objects/Paragraph'

const MainCustomers = () => (
  <Section>
    <Separator number="02" title="Social Networks" />
    <FullContent>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/twitter.png" />
            <TitleItemColumn>Twitter</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website where people could choose if Eto’o soccer player
              would go to play one game on Botafogo or Comercial club.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/twitter.svg" />
            <TitleItemColumn>Twitter</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website that people could
            </Paragraph>
            <Button type="orange" right="0px">
              Add Me
            </Button>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/instagram.svg" />
            <TitleItemColumn>Instagram</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website that people could
            </Paragraph>
            <Button type="orange" right="0px">
              Add Me
            </Button>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/facebook.svg" />
            <TitleItemColumn>Facebook</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website that people could
            </Paragraph>
            <Button type="orange" right="0px">
              Add Me
            </Button>
          </WrapperCol>
        </Col4>
      </Row>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/linkedin.svg" />
            <TitleItemColumn>LinkedIn</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website that people could
            </Paragraph>
            <Button type="orange" right="0px">
              Add Me
            </Button>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/skype.svg" />
            <TitleItemColumn>Skype</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website that people could
            </Paragraph>
            <Button type="orange" right="0px">
              Add Me
            </Button>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/flickr.svg" />
            <TitleItemColumn>Flickr</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website that people could
            </Paragraph>
            <Button type="orange" right="0px">
              Add Me
            </Button>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/social-networks/youtube.svg" />
            <TitleItemColumn>Youtube</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website that people could
            </Paragraph>
            <Button type="orange" right="0px">
              Add Me
            </Button>
          </WrapperCol>
        </Col4>
      </Row>
    </FullContent>
  </Section>
)

export default MainCustomers

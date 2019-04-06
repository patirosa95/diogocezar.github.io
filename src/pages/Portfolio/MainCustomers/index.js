import React from 'react'

import { Section } from '../../../components/Containers'
import { FullContent } from '../../../components/AlignContent'
import { Row, Col4, WrapperCol } from '../../../components/Grid'

import Separator from '../../../objects/Separator'
import { TitleItemColumn } from '../../../objects/Titles'
import { ImageItemColumn } from '../../../objects/Images'
import Paragraph from '../../../objects/Paragraph'

const MainCustomers = () => (
  <Section>
    <Separator number="02" title="Main Customers" />
    <FullContent>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/twitter.svg" />
            <TitleItemColumn>Twitter</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Front-end development of a website where people could choose if Eto’o soccer player
              would go to play one game on Botafogo or Comercial club.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/brahma.svg" />
            <TitleItemColumn>Brahma</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Front-end development of Brahma Valley 2015 edition. Brahma Valley is a music festival
              with 3 simultaneous stage, with the biggest Sertanejo musicians of Brazil.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/visa.svg" />
            <TitleItemColumn>Visa</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed a web game system, where pair of peoples could disput witch one was ables to
              use Visa credit card to shop some product in less time.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/sonho-de-valsa.svg" />
            <TitleItemColumn>Sonho de Valsa</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Created a Front-End of a portal of romantic reciples. The intent was that the couple
              could cook together.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/volkswagen.svg" />
            <TitleItemColumn>Volkswagen</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Created Front-End layout for Wolkswagen accessories. That includes checkout system,
              internal pages and reponsive layout.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/skol.svg" />
            <TitleItemColumn>Skol</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed a Front-End hotsite for an app that could map urban places where you could
              workout.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/gillette.svg" />
            <TitleItemColumn>Gillette</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              For Gillette i developed a simple introduction website for allow WiFi connections.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/lacta.svg" />
            <TitleItemColumn>Lacta</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed an animated hotsite for an promotional action of Lacta company.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/subway.svg" />
            <TitleItemColumn>Subway</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed an entire front-end system where the people could creat their own advertise
              vídeos of Subway.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/main-customers/recco.svg" />
            <TitleItemColumn>Recco</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              For Recco, we create two products: Anna Hickiman HotSite and a Blog for feminine
              fashion.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
    </FullContent>
  </Section>
)

export default MainCustomers

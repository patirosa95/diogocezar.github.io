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
    <Separator number="03" title="Musical" />
    <FullContent>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/michel-telo.jpg" />
            <TitleItemColumn>Michel Teló</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed main website of Michel Teló, international artist.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/fernando-e-sorocaba.jpg" />
            <TitleItemColumn>Fernando & Sorocaba</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed a system that could place your personal photo with some hashtag in oficial
              website of the duo.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/jads-e-jadson.jpg" />
            <TitleItemColumn>Jads & Jadson</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Created all main website of the duo.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/thaeme-e-thiago.jpg" />
            <TitleItemColumn>Thaeme & Thiago</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Create hotsite with social media integrations of the duo.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/inimigos-da-hp.jpg" />
            <TitleItemColumn>Inimigos da HP</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Created an survey system used before the main website of the group.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/marcos-e-belutti.jpg" />
            <TitleItemColumn>Marcos & Belutti</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Created some promotional hotsite for the duo.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/henrique-e-diego.jpg" />
            <TitleItemColumn>Henrique & Diego</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Created some hotsites for the Duo. Including promotional actions with raffle systems.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/joao-gustavo-e-murilo.jpg" />
            <TitleItemColumn>João Gustavo & Murilo</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed intire main website with promotional actions.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
    </FullContent>
  </Section>
)

export default MainCustomers

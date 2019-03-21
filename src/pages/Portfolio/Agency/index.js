import React from 'react'

import { Section } from '../../../components/Containers'
import { FullContent } from '../../../components/AlignContent'
import { Row, Col4, WrapperCol } from '../../../components/Grid'

import Separator from '../../../objects/Separator'
import { TitleItemColumn } from '../../../objects/Titles'
import { ImageItemColumn } from '../../../objects/Images'
import Paragraph from '../../../objects/Paragraph'

const Agency = () => (
  <Section>
    <Separator number="04" title="Agency" />
    <FullContent>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/esss.svg" />
            <TitleItemColumn>ESSS</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website where people could choose if Eto’o soccer player
              would go to play one game on Botafogo or Comercial club.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/products-of-tomorrow.jpg" />
            <TitleItemColumn>Products of Tomorrow</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website where people could choose if Eto’o soccer player
              would go to play one game on Botafogo or Comercial club.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/hardera.svg" />
            <TitleItemColumn>Hardera</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website where people could choose if Eto’o soccer player
              would go to play one game on Botafogo or Comercial club.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/kokar.svg" />
            <TitleItemColumn>Kokar</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website where people could choose if Eto’o soccer player
              would go to play one game on Botafogo or Comercial club.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
      <Row>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/angie.svg" />
            <TitleItemColumn>Angie</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website where people could choose if Eto’o soccer player
              would go to play one game on Botafogo or Comercial club.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/boyband.svg" />
            <TitleItemColumn>Boyband</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website where people could choose if Eto’o soccer player
              would go to play one game on Botafogo or Comercial club.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
    </FullContent>
  </Section>
)

export default Agency

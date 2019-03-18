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
            <ImageItemColumn src="/assets/images/musical/michel-telo.jpg" />
            <TitleItemColumn>Michel Teló</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website where people could choose if Eto’o soccer player
              would go to play one game on Botafogo or Comercial club.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/fernando-e-sorocaba.jpg" />
            <TitleItemColumn>Fernando & Sorocaba</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website where people could choose if Eto’o soccer player
              would go to play one game on Botafogo or Comercial club.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/jads-e-jadson.jpg" />
            <TitleItemColumn>Jads & Jadson</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website where people could choose if Eto’o soccer player
              would go to play one game on Botafogo or Comercial club.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/thaeme-e-thiago.jpg" />
            <TitleItemColumn>Thaeme & Thiago</TitleItemColumn>
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
            <ImageItemColumn src="/assets/images/musical/inimigos-da-hp.jpg" />
            <TitleItemColumn>Inimigos da HP</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website where people could choose if Eto’o soccer player
              would go to play one game on Botafogo or Comercial club.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/marcos-e-belutti.jpg" />
            <TitleItemColumn>Marcos & Belutti</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website where people could choose if Eto’o soccer player
              would go to play one game on Botafogo or Comercial club.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/henrique-e-diego.jpg" />
            <TitleItemColumn>Henrique & Diego</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed front-end of a website where people could choose if Eto’o soccer player
              would go to play one game on Botafogo or Comercial club.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/musical/joao-gustavo-e-murilo.jpg" />
            <TitleItemColumn>João Gustavo & Murilo</TitleItemColumn>
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

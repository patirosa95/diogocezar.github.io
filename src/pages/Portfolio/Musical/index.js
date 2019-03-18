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
            <ImageItemColumn src="/assets/images/musical/michel-telo.png" />
            <TitleItemColumn>Michel Teló</TitleItemColumn>
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

export default MainCustomers

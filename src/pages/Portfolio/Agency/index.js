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
              Created all Front-End and have been part of Back-End of entire website.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/products-of-tomorrow.jpg" />
            <TitleItemColumn>Products of Tomorrow</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Promotional action of Africa Agency where i could manage website with some advanced
              features.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/hardera.svg" />
            <TitleItemColumn>Hardera</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed all website for this wood company.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/kokar.svg" />
            <TitleItemColumn>Kokar</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed all solution for this paint company.
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
              Developed all website for childs dental products.
            </Paragraph>
          </WrapperCol>
        </Col4>
        <Col4>
          <WrapperCol>
            <ImageItemColumn src="/assets/images/agency/boyband.svg" />
            <TitleItemColumn>Boyband</TitleItemColumn>
            <Paragraph size="medium" bottom="1rem" padding="0 10%">
              Developed all website for this Agency.
            </Paragraph>
          </WrapperCol>
        </Col4>
      </Row>
    </FullContent>
  </Section>
)

export default Agency

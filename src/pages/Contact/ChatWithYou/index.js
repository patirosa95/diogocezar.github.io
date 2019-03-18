import React from 'react'

import { Section } from '../../../components/Containers'
import { LeftContent, RightContent } from '../../../components/AlignContent'

import Separator from '../../../objects/Separator'
import Image from '../../../objects/Images'
import { Title } from '../../../objects/Titles'
import { QuotedParagraph } from '../../../objects/Quotes'

const ChatWithYou = () => (
  <Section>
    <Separator number="01" title="Contact" />
    <LeftContent>
      <Image />
    </LeftContent>
    <RightContent>
      <Title type="internal">Will Be a Pleasure To Chat With You</Title>
      <QuotedParagraph first="Let's keep in contact" hasQuotedMarks={false}>
        Will be a pleasure change experiences with you. I will be really glad if I could help you in
        any aspect. So, if you want to ask me something, or want to talk about technology, or maybe…
        hire my services, be comfortable to find me through{' '}
        <a href="mailto:diogo@diogocezar.dev">diogo@diogocezar.dev</a> or in the follow ways.
      </QuotedParagraph>
    </RightContent>
  </Section>
)

export default ChatWithYou

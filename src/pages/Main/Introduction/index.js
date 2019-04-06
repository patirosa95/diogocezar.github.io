import React from 'react'

import { Link as LinkRoute } from 'react-router-dom'
import { Section } from '../../../components/Containers'
import { LeftContent, RightContent } from '../../../components/AlignContent'

import Separator from '../../../objects/Separator'
import Image from '../../../objects/Images'
import { Title, SubTitle } from '../../../objects/Titles'
import { QuotedParagraph } from '../../../objects/Quotes'
import Button from '../../../objects/Button'

import Link from '../../../objects/Link'

const Introductions = () => (
  <Section>
    <Separator number="01" title="Introduction" />
    <LeftContent>
      <Image />
    </LeftContent>
    <RightContent>
      <Title type="main">Diogo Cezar is a Sênior FullStack Web Developer</Title>
      <SubTitle color="purple-dark">Worked with Brazilian Big Players</SubTitle>
      <QuotedParagraph first="Biography">
        I’m just a guy that knows that knows nothing. And it’s exactly what makes me moving on. As
        teacher, talker, developer and technology enthusiastic, i am always searching for new
        challenges.
      </QuotedParagraph>
      <LinkRoute to="/about">
        <Button type="purple">Read More</Button>
      </LinkRoute>
      <Link href="/assets/docs/diogocezar.pdf" target="_blank" download="diogocezar.pdf">
        <Button type="purple">Download Resume</Button>
      </Link>
    </RightContent>
  </Section>
)

export default Introductions

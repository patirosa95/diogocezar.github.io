import React from 'react'

import { Section } from '../../../components/Containers'
import { LeftContent, RightContent } from '../../../components/AlignContent'

import ContentIndex from '../../../objects/ContentIndex'
import Image from '../../../objects/Image'
import { TitleMain, SubTitleMain } from '../../../objects/Titles'
import { QuotedParagraph } from '../../../objects/Quotes'
import Button from '../../../objects/Button'

const Introductions = () => (
  <Section>
    <ContentIndex number="01" title="Introduction" />
    <LeftContent>
      <Image />
    </LeftContent>
    <RightContent>
      <TitleMain type="main">Diogo Cezar is a Sênior FullStack Web Developer</TitleMain>
      <SubTitleMain type="main">Worked with Brazilian Big Players</SubTitleMain>
      <QuotedParagraph first="Biography">
        I’m just a guy that knows that knows nothing. And it’s exactly what makes me moving on. As
        teacher, talker, developer and technology enthusiastic, I am always searching for new
        challenges.
      </QuotedParagraph>
      <Button>Read More</Button>
      <Button>Download Resume</Button>
    </RightContent>
  </Section>
)

export default Introductions

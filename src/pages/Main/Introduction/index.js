import React from 'react'

import Section from '../../../components/Section'
import ContentIndex from '../../../objects/ContentIndex'
import LeftContent from '../../../components/LeftContent'
import RightContent from '../../../components/RightContent'

import CircleImage from '../../../objects/CircleImage'
import Title from '../../../objects/Title'
import SubTitle from '../../../objects/SubTitle'
import QuotedParagraph from '../../../objects/QuotedParagraph'
import Button from '../../../objects/Button'

const Introductions = () => (
  <Section>
    <ContentIndex number="01" title="Introduction" />
    <LeftContent>
      <CircleImage />
    </LeftContent>
    <RightContent>
      <Title type="main">Diogo Cezar is a Sênior FullStack Web Developer</Title>
      <SubTitle type="main">Worked with Brazilian Big Players</SubTitle>
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

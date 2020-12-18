import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Wrapper from '../../components/Wrapper'
import Section from '../../components/Section'
import LeftContent from '../../components/LeftContent'
import RightContent from '../../components/RightContent'

import Title from '../../objects/Title'
import SubTitle from '../../objects/SubTitle'
import CircleImage from '../../objects/CircleImage'
import QuotedParagraph from '../../objects/QuotedParagraph'
import Button from '../../objects/Button'

class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Section number="01" title="Introduction">
          {/* <ContentIndex number="01" title="Introduction" /> */}
          <LeftContent>
            <CircleImage />
          </LeftContent>
          <RightContent>
            <Title type="main">Patrícia Rosa</Title>
            <SubTitle type="main">Web and RPA developer, technology lover</SubTitle>
            <QuotedParagraph first="Biography">
              .” For me, learnin is constant, and knowledge is infinite. Always looking for self-knowledge and my best version.
            </QuotedParagraph>
            <Button>Read More</Button>
            <Button>Download Resume</Button>
          </RightContent>
        </Section>
        <Section number="02" title="Content">
          {/* <ContentIndex number="02" title="Content" /> */}
        </Section>
        <Section  number="03" title="Conclusion">
          {/* <ContentIndex number="03" title="Conclusion" /> */}
        </Section>
      </Wrapper>
    )
  }
}

export default withRouter(Main)

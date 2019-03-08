import React, { Component } from 'react'
import { withRouter, Link } from 'react-router-dom'

import Wrapper from '../../components/Wrapper'
import Section from '../../components/Section'
import LeftContent from '../../components/LeftContent'
import RightContent from '../../components/RightContent'
import List from '../../components/List'
import ListItem from '../../components/ListItem'

import ContentIndex from '../../objects/ContentIndex'
import Title from '../../objects/Title'
import SubTitle from '../../objects/SubTitle'
import CircleImage from '../../objects/CircleImage'
import QuotedParagraph from '../../objects/QuotedParagraph'
import Button from '../../objects/Button'
import ListTitle from '../../objects/ListTitle'
import ListSubTitle from '../../objects/ListSubTitle'
import QuotedMain from '../../objects/QuotedMain'

class Main extends Component {
  render() {
    return (
      <Wrapper>
        <Section>
          <ContentIndex number="01" title="Introduction" />
          <LeftContent>
            <CircleImage />
          </LeftContent>
          <RightContent>
            <Title type="main">Diogo Cezar is a Sênior FullStack Web Developer</Title>
            <SubTitle type="main">Worked with Brazilian Big Players</SubTitle>
            <QuotedParagraph first="Biography">
              I’m just a guy that knows that knows nothing. And it’s exactly what makes me moving
              on. As teacher, talker, developer and technology enthusiastic, I am always searching
              for new challenges.
            </QuotedParagraph>
            <Button>Read More</Button>
            <Button>Download Resume</Button>
          </RightContent>
        </Section>
        <Section>
          <ContentIndex number="02" title="Content" />
          <RightContent>
            <List>
              <ListItem>
                <Link to="/about">
                  <ListTitle>ABOUT ME</ListTitle>
                  <ListSubTitle>
                    Detailed page about me, interests, education, professional, hobbies, skills and
                    awards.
                  </ListSubTitle>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/portfolio">
                  <ListTitle>PORTFÓLIO</ListTitle>
                  <ListSubTitle>List of my main jobs.</ListSubTitle>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/teaching-talks">
                  <ListTitle>TEACHING/TALKS</ListTitle>
                  <ListSubTitle>Where i spread the word of development.</ListSubTitle>
                </Link>
              </ListItem>
              <ListItem>
                <Link to="/contact">
                  <ListTitle>CONTACT</ListTitle>
                  <ListSubTitle>Let’s keep in touch thought social media networks.</ListSubTitle>
                </Link>
              </ListItem>
            </List>
          </RightContent>
        </Section>
        <Section>
          <ContentIndex number="03" title="Conclusion" />
          <RightContent>
            <QuotedMain author="Steve Jobs">
              Your work is going to fill a large part of your life, and the only way to be truly
              satisfied is to do what you believe is great work. And the only way to do great work
              is to love what you do. If you haven’t found it yet, keep looking. Don’t settle. As
              with all matters of the heart, you’ll know when you find it.
            </QuotedMain>
          </RightContent>
        </Section>
      </Wrapper>
    )
  }
}

export default withRouter(Main)

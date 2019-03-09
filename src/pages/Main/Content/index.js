import React from 'react'
import { Link } from 'react-router-dom'

import { Section } from '../../../components/Containers'
import { RightContent } from '../../../components/AlignContent'
import { ListContainer, ListItem } from '../../../components/ListContainer'

import Separator from '../../../objects/Separator'
import { ListTitle, ListSubTitle } from '../../../objects/ListContent'

const Content = () => (
  <Section>
    <Separator number="02" title="Content" />
    <RightContent>
      <ListContainer>
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
      </ListContainer>
    </RightContent>
  </Section>
)

export default Content

import React from 'react'
import { Link } from 'react-router-dom'

import { Section } from '../../../components/Containers'
import { RightContent } from '../../../components/AlignContent'
import { ListContainer, ListItem } from '../../../components/ListContainer'

import Separator from '../../../objects/Separator'
import { ListTitle, ListContent } from '../../../objects/ListContent'

const Content = () => (
  <Section>
    <Separator number="02" title="Content" />
    <RightContent>
      <ListContainer>
        <ListItem hoverColor="purple-dark">
          <Link to="/about">
            <ListTitle>ABOUT ME</ListTitle>
            <ListContent menuMain={true}>
              Detailed page about me, interests, education, professional, hobbies, skills and
              awards.
            </ListContent>
          </Link>
        </ListItem>
        <ListItem hoverColor="purple-dark">
          <Link to="/portfolio">
            <ListTitle>PORTFÓLIO</ListTitle>
            <ListContent menuMain={true}>List of my main jobs.</ListContent>
          </Link>
        </ListItem>
        <ListItem hoverColor="purple-dark">
          <Link to="/teaching-talks">
            <ListTitle>TEACHING/TALKS</ListTitle>
            <ListContent menuMain={true}>Where i spread the word of development.</ListContent>
          </Link>
        </ListItem>
        <ListItem hoverColor="purple-dark">
          <Link to="/contact">
            <ListTitle>CONTACT</ListTitle>
            <ListContent menuMain={true}>
              Let’s keep in touch thought social media networks.
            </ListContent>
          </Link>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
)

export default Content

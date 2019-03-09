import React from 'react'
import { Link } from 'react-router-dom'

import Section from '../../../components/Section'
import ContentIndex from '../../../objects/ContentIndex'
import RightContent from '../../../components/RightContent'
import List from '../../../components/List'
import ListItem from '../../../components/ListItem'

import ListTitle from '../../../objects/ListTitle'
import ListSubTitle from '../../../objects/ListSubTitle'

const Content = () => (
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
)

export default Content

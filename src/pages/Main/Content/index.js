import React from 'react'
import { Link } from 'react-router-dom'

import { Section } from '../../../components/Containers'
import { RightContent } from '../../../components/AlignContent'
import { ListContainer, ListItem } from '../../../components/ListContainer'

import Separator from '../../../objects/Separator'
import { ListContentMain, ListMenu } from '../../../objects/ListContent'

const Content = () => (
  <Section>
    <Separator number="02" title="Content" />
    <RightContent>
      <ListContainer>
        <ListItem hoverColor="purple-dark">
          <Link to="/about">
            <ListMenu>ABOUT ME</ListMenu>
          </Link>
          <ListContentMain menuMain={true}>
            Detailed page about me, interests, education, professional, hobbies, skills and awards.
          </ListContentMain>
        </ListItem>
        {/* <ListItem hoverColor="purple-dark">
          <Link to="/blog/1">
            <ListMenu>BLOG</ListMenu>
          </Link>
          <ListContentMain menuMain={true}>
            Just old thinks.
          </ListContentMain>
        </ListItem> */}
        <ListItem hoverColor="purple-dark">
          <Link to="/portfolio">
            <ListMenu>PORTFÓLIO</ListMenu>
            <ListContentMain menuMain={true}>List of my main jobs.</ListContentMain>
          </Link>
        </ListItem>
        <ListItem hoverColor="purple-dark">
          <Link to="/educational">
            <ListMenu>EDUCATIONAL</ListMenu>
            <ListContentMain menuMain={true}>Where i spread the word of development.</ListContentMain>
          </Link>
        </ListItem>
        <ListItem hoverColor="purple-dark">
          <Link to="/keep-in-touch">
            <ListMenu>KEEP IN TOUCH</ListMenu>
            <ListContentMain menuMain={true}>
              Let’s keep in touch thought social media networks.
            </ListContentMain>
          </Link>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
)

export default Content

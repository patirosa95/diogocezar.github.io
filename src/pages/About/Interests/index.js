import React from 'react'

import { Section } from '../../../components/Containers'
import { RightContent } from '../../../components/AlignContent'
import { ListContainer, ListItem } from '../../../components/ListContainer'

import Separator from '../../../objects/Separator'
import { ListTitle, ListSubTitle } from '../../../objects/ListContent'

const Interests = () => (
  <Section>
    <Separator number="02" title="Interests" type="orange" />
    <RightContent>
      <ListContainer>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">WEB DEVELOPMENT</ListTitle>
          <ListSubTitle>All related to development for web.</ListSubTitle>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">EVOLUTIONARY COMPUTING</ListTitle>
          <ListSubTitle>
            {' '}
            It amounts to building, applying and studying algorithms based on principles of natural
            selection.
          </ListSubTitle>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">ARTIFICIAL INTELIGENCE</ListTitle>
          <ListSubTitle>Tradicional AI techniques.</ListSubTitle>
        </ListItem>
        <ListItem type="orange" link={false}>
          <ListTitle type="orange">MOBILE</ListTitle>
          <ListSubTitle>Pwas, responsive and hybrid mobile applications.</ListSubTitle>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
)
export default Interests

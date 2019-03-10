import React from 'react'

import { Section } from '../../../components/Containers'
import { RightContent } from '../../../components/AlignContent'
import { ListContainer, ListItem } from '../../../components/ListContainer'

import Separator from '../../../objects/Separator'
import { ListTitle, ListContent } from '../../../objects/ListContent'

const Hobbies = () => (
  <Section>
    <Separator number="05" title="Hobbies" />
    <RightContent>
      <ListContainer>
        <ListItem color="purple" link={false}>
          <ListTitle>MUSIC</ListTitle>
          <ListContent>Im a guitar/bass player.</ListContent>
        </ListItem>
        <ListItem color="purple" link={false}>
          <ListTitle>GAMMING</ListTitle>
          <ListContent>Ok, but I like the hard ones, like DarkSouls or Bloodborne.</ListContent>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
)
export default Hobbies

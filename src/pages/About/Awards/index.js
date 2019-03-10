import React from 'react'

import { Section } from '../../../components/Containers'
import { RightContent } from '../../../components/AlignContent'
import { ListContainer, ListItem } from '../../../components/ListContainer'

import Separator from '../../../objects/Separator'
import { ListTitle, ListContent } from '../../../objects/ListContent'

const Awards = () => (
  <Section>
    <Separator number="07" title="Awards" />
    <RightContent>
      <ListContainer>
        <ListItem color="purple" link={false}>
          <ListTitle>UTFPR - 2007</ListTitle>
          <ListContent>Award of the best undergraduate student.</ListContent>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
)
export default Awards

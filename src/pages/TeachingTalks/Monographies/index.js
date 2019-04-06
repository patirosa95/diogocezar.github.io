import React from 'react'

import { Section } from '../../../components/Containers'
import { RightContent, LeftContentList, RightContentList } from '../../../components/AlignContent'

import { ListContainer, ListItem } from '../../../components/ListContainer'
import { ListTitle, ListSubTitle, ListContent } from '../../../objects/ListContent'

import Separator from '../../../objects/Separator'
import Button from '../../../objects/Button'

const Monographies = () => (
  <Section>
    <Separator number="07" title="Monographies" />
    <RightContent>
      <ListContainer>
        <ListItem link={false}>
          <LeftContentList>
            <ListTitle>MASTER DEGREE</ListTitle>
            <ListSubTitle type="white">UFPR - CURITIBA</ListSubTitle>
            <ListContent>
              Guidance Strategy for Systems of Hypermedia by Collaborative Navigation.
            </ListContent>
          </LeftContentList>
          <RightContentList>
            <Button type="orange">Download</Button>
          </RightContentList>
        </ListItem>
        <ListItem link={false}>
          <LeftContentList>
            <ListTitle>GRADUATION</ListTitle>
            <ListSubTitle type="white">UTFPR - CORNÉLIO PROCÓPIO</ListSubTitle>
            <ListContent>
              Guidance Strategy for Systems of Hypermedia by Collaborative Navigation.
            </ListContent>
          </LeftContentList>
          <RightContentList>
            <Button type="orange">Download</Button>
          </RightContentList>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
)
export default Monographies

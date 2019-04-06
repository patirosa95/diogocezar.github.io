import React from 'react'

import { Section } from '../../../components/Containers'
import { RightContent, LeftContentList, RightContentList } from '../../../components/AlignContent'

import { ListContainer, ListItem } from '../../../components/ListContainer'
import { ListTitle, ListSubTitle, ListContent } from '../../../objects/ListContent'

import Separator from '../../../objects/Separator'
import Button from '../../../objects/Button'
import Link from '../../../objects/Link'

const MainLectures = () => (
  <Section>
    <Separator number="04" title="Main Lectures" type="orange" />
    <RightContent>
      <ListContainer>
        <ListItem type="orange" link={false}>
          <LeftContentList>
            <ListTitle type="orange">SECOMP - 2018</ListTitle>
            <ListSubTitle type="orange">UTFPR - CORNÉLIO PROCÓPIO - PR</ListSubTitle>
            <ListContent>Minicourse of ReactJS - 4 hours.</ListContent>
          </LeftContentList>
          <RightContentList>
            <Link href="http://bit.ly/2CTQQ52" target="_blank">
              <Button>Download</Button>
            </Link>
          </RightContentList>
        </ListItem>
        <ListItem type="orange" link={false}>
          <LeftContentList>
            <ListTitle type="orange">UTFWARE - 2017</ListTitle>
            <ListSubTitle type="orange">UTFPR - CORNÉLIO PROCÓPIO - PR</ListSubTitle>
            <ListContent>Git and GitHub - 4 hours.</ListContent>
          </LeftContentList>
          <RightContentList>
            <Link href="http://bit.ly/2BL72VD" target="_blank">
              <Button>Download</Button>
            </Link>
          </RightContentList>
        </ListItem>
        <ListItem type="orange" link={false}>
          <LeftContentList>
            <ListTitle type="orange">UTFWARE - 2017</ListTitle>
            <ListSubTitle type="orange">UTFPR - CORNÉLIO PROCÓPIO - PR</ListSubTitle>
            <ListContent>Sass - 4 hours.</ListContent>
          </LeftContentList>
          <RightContentList>
            <Link href="http://bit.ly/2LrSYQm" target="_blank">
              <Button>Download</Button>
            </Link>
          </RightContentList>
        </ListItem>
        <ListItem type="orange" link={false}>
          <LeftContentList>
            <ListTitle type="orange">UTFWARE - 2017</ListTitle>
            <ListSubTitle type="orange">UTFPR - CORNÉLIO PROCÓPIO - PR</ListSubTitle>
            <ListContent>Why JavaScript - 40 min.</ListContent>
          </LeftContentList>
          <RightContentList>
            <Link href="http://bit.ly/2BKKPab" target="_blank">
              <Button>Download</Button>
            </Link>
          </RightContentList>
        </ListItem>
        <ListItem type="orange" link={false}>
          <LeftContentList>
            <ListTitle type="orange">CHARNEIRA - 2011</ListTitle>
            <ListSubTitle type="orange">PUCPR - CURITIBA - PR</ListSubTitle>
            <ListContent>
              Multidisciplinary integration between design and web programming. 10 hours.
            </ListContent>
          </LeftContentList>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
)
export default MainLectures

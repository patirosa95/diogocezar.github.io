import React from 'react'

import { Section } from '../../../components/Containers'
import { RightContent, LeftContentList, RightContentList } from '../../../components/AlignContent'

import { ListContainer, ListItem } from '../../../components/ListContainer'
import { ListTitle, ListContent } from '../../../objects/ListContent'

import Separator from '../../../objects/Separator'
import Button from '../../../objects/Button'

const MainLectures = () => (
  <Section>
    <Separator number="05" title="Online Demonstrations" type="orange" />
    <RightContent>
      <ListContainer>
        <ListItem type="orange" link={false}>
          <LeftContentList>
            <ListTitle type="orange">ETOO</ListTitle>
            <ListContent>https://projects.diogocezar.com/portfolio/etoo</ListContent>
          </LeftContentList>
          <RightContentList>
            <Button>View Demo</Button>
          </RightContentList>
        </ListItem>
        <ListItem type="orange" link={false}>
          <LeftContentList>
            <ListTitle type="orange">BRAHMA VALLEY</ListTitle>
            <ListContent>https://projects.diogocezar.com/portfolio/brahma-valley</ListContent>
          </LeftContentList>
          <RightContentList>
            <Button>View Demo</Button>
          </RightContentList>
        </ListItem>
        <ListItem type="orange" link={false}>
          <LeftContentList>
            <ListTitle type="orange">LACTA</ListTitle>
            <ListContent>https://projects.diogocezar.com/portfolio/lacta</ListContent>
          </LeftContentList>
          <RightContentList>
            <Button>View Demo</Button>
          </RightContentList>
        </ListItem>
        <ListItem type="orange" link={false}>
          <LeftContentList>
            <ListTitle type="orange">SONHO DE VALSA</ListTitle>
            <ListContent>https://projects.diogocezar.com/portfolio/sdv</ListContent>
          </LeftContentList>
          <RightContentList>
            <Button>View Demo</Button>
          </RightContentList>
        </ListItem>
        <ListItem type="orange" link={false}>
          <LeftContentList>
            <ListTitle type="orange">VOLKSWAGEN</ListTitle>
            <ListContent>https://projects.diogocezar.com/portfolio/volks</ListContent>
          </LeftContentList>
          <RightContentList>
            <Button>View Demo</Button>
          </RightContentList>
        </ListItem>
        <ListItem type="orange" link={false}>
          <LeftContentList>
            <ListTitle type="orange">BOYBAND</ListTitle>
            <ListContent>http://boyband.com.br</ListContent>
          </LeftContentList>
          <RightContentList>
            <Button>View Demo</Button>
          </RightContentList>
        </ListItem>
        <ListItem type="orange" link={false}>
          <LeftContentList>
            <ListTitle type="orange">KOKAR</ListTitle>
            <ListContent>http://www.kokar.com.br</ListContent>
          </LeftContentList>
          <RightContentList>
            <Button>View Demo</Button>
          </RightContentList>
        </ListItem>
        <ListItem type="orange" link={false}>
          <LeftContentList>
            <ListTitle type="orange">ESSS</ListTitle>
            <ListContent>https://www.esss.co</ListContent>
          </LeftContentList>
          <RightContentList>
            <Button>View Demo</Button>
          </RightContentList>
        </ListItem>
      </ListContainer>
    </RightContent>
  </Section>
)
export default MainLectures

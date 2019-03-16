import React from 'react'

import { Section } from '../../../components/Containers'
import { RightContent } from '../../../components/AlignContent'
import ListProfessionalBackground from '../../../components/ListProfessionalBackground'

import Separator from '../../../objects/Separator'
import Button from '../../../objects/Button'

const MainProfessionalBackground = () => (
  <Section>
    <Separator number="04" title="Main Professional Background" type="orange" />
    <RightContent>
      <ListProfessionalBackground />
      <Button>Download Complete Resume</Button>
    </RightContent>
  </Section>
)
export default MainProfessionalBackground

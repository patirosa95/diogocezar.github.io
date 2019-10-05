import React, { Component } from 'react'

import { Page, Wrapper } from '../../components/Containers'

import { PortifolioAnimated } from '../../styles/animations'

import ProudToBeenPart from './ProudToBeenPart'
import MainCustomers from './MainCustomers'
import Musical from './Musical'
import Agency from './Agency'
import Demos from './Demos'

import { ButtonBack } from '../../objects/Button'

class Contact extends Component {
  render() {
    return (
      <PortifolioAnimated>
        <Page color="purple-dark">
          <Wrapper>
            <ProudToBeenPart />
            <MainCustomers />
            <Musical />
            <Agency />
          </Wrapper>
        </Page>
        <Page color="orange" decoration={true} decorationColor="orange">
          <Wrapper>
            <Demos />
          </Wrapper>
        </Page>
        <ButtonBack color="orange"/>
      </PortifolioAnimated>
    )
  }
}

export default Contact

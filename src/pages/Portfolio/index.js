import React, { Component } from 'react'

import { Page, Wrapper } from '../../components/Containers'

import ProudToBeenPart from './ProudToBeenPart'
import MainCustomers from './MainCustomers'
import Musical from './Musical'
import Agency from './Agency'

class Contact extends Component {
  render() {
    return (
      <Page color="purple-dark">
        <Wrapper>
          <ProudToBeenPart />
          <MainCustomers />
          <Musical />
          <Agency />
        </Wrapper>
      </Page>
    )
  }
}

export default Contact

import React, { Component } from 'react'

import { Page, Wrapper } from '../../components/Containers'

import ProudToBeenPart from './ProudToBeenPart'
import MainCustomers from './MainCustomers'

class Contact extends Component {
  render() {
    return (
      <Page color="purple-dark">
        <Wrapper>
          <ProudToBeenPart />
          <MainCustomers />
        </Wrapper>
      </Page>
    )
  }
}

export default Contact

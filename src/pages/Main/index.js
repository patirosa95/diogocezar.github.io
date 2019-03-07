import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'

import Weapper from '../../components/Wrapper'
import Button from '../../objects/Button'

class Main extends Component {
  render() {
    return (
      <Weapper>
        <h1>Main</h1>
        <Button>Test Button</Button>
      </Weapper>
    )
  }
}

export default withRouter(Main)

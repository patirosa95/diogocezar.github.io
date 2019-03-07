import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Button from '../../objects/Button'

class Portifolio extends Component {
  render() {
    return (
      <Fragment>
        <h1>Portifolio</h1>
        <Button>Test Button</Button>
      </Fragment>
    )
  }
}

export default withRouter(Portifolio)

import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import Button from '../../objects/Button'

class TeachingTalks extends Component {
  render() {
    return (
      <Fragment>
        <h1>TeachingTalks</h1>
        <Button>Test Button</Button>
      </Fragment>
    )
  }
}

export default withRouter(TeachingTalks)

import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import StyledAnimationContainer from './styles'

class AnimationContainer extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      // if (this.props.location.pathname === '/') {
      //   window.scrollTo(0, 0)
      // } else {
      setTimeout(() => {
        window.scrollTo(0, 0)
      }, 500)
      // }
    }
  }

  render() {
    return <StyledAnimationContainer>{this.props.children}</StyledAnimationContainer>
  }
}

export default withRouter(AnimationContainer)

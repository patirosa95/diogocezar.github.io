import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import StyledPageContainer from './styles'

class PageContainer extends Component {
  componentDidUpdate(prevProps) {
    if (this.props.location.pathname !== prevProps.location.pathname) {
      if (this.props.location.pathname === '/') {
        window.scrollTo(0, 0)
      } else {
        setTimeout(() => {
          window.scrollTo(0, 0)
        }, 500)
      }
    }
  }

  render() {
    return <StyledPageContainer>{this.props.children}</StyledPageContainer>
  }
}

export default withRouter(PageContainer)

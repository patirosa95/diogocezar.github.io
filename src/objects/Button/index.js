import React, { Component } from 'react'
import { Link as LinkRoute } from 'react-router-dom'
import debounce from 'lodash/debounce'
import {
  StyledButton,
  StyledButtonList,
  StyledButtonBack,
  StyledButtonBackContainer,
} from './styles'

const Button = props => <StyledButton {...props}>{props.children}</StyledButton>

const ButtonList = props => <StyledButtonList {...props}>{props.children}</StyledButtonList>

class ButtonBack extends Component {
  state = {
    display: false,
  }

  componentDidMount() {
    window.addEventListener('scroll', debounce(this.handleScroll, 100))
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', debounce(this.handleScroll, 100))
  }

  handleScroll = () => {
    this.setState({
      display: window.scrollY > 500,
    })
  }

  render() {
    return (
      <StyledButtonBackContainer className={`display-${this.state.display}`}>
        <LinkRoute to="/">
          <StyledButtonBack>
            Back to Home
          </StyledButtonBack>
        </LinkRoute>
      </StyledButtonBackContainer>
    )
  }
}

export default Button
export { ButtonList, ButtonBack }

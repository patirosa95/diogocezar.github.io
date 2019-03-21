import React from 'react'
import StyledButton from './styles'

const Button = props => (
  <StyledButton {...props}>
    {props.children}
    <span class="button__container">
      <span class="circle top-left" />
      <span class="circle top-left" />
      <span class="circle top-left" />
      <span class="button__bg" />
      <span class="circle bottom-right" />
      <span class="circle bottom-right" />
      <span class="circle bottom-right" />
    </span>
  </StyledButton>
)

export default Button

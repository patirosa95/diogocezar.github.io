import React from 'react'
import { StyledButton, StyledButtonList } from './styles'

const Button = props => <StyledButton {...props}>{props.children}</StyledButton>

const ButtonList = props => <StyledButtonList {...props}>{props.children}</StyledButtonList>

export default Button
export { ButtonList }

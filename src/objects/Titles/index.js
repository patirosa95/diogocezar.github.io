import React from 'react'
import { StyledTitle, StyledSubTitle } from './styles'

const Title = props => <StyledTitle {...props}>{props.children}</StyledTitle>
const SubTitle = props => <StyledSubTitle {...props}>{props.children}</StyledSubTitle>

export { Title, SubTitle }

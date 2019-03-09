import React from 'react'
import { StyledTitleMain, StyledSubTitleMain } from './styles'

const TitleMain = props => <StyledTitleMain {...props}>{props.children}</StyledTitleMain>
const SubTitleMain = props => <StyledSubTitleMain {...props}>{props.children}</StyledSubTitleMain>

export { TitleMain, SubTitleMain }

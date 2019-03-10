import React from 'react'
import { StyledListTitle, StyledListSubTitle, StyledListContent } from './styles'

const ListTitle = ({ children, ...props }) => (
  <StyledListTitle {...props}>{children}</StyledListTitle>
)
const ListSubTitle = ({ children, ...props }) => (
  <StyledListSubTitle {...props}>{children}</StyledListSubTitle>
)
const ListContent = ({ children, ...props }) => (
  <StyledListContent {...props}>{children}</StyledListContent>
)

export { ListTitle, ListSubTitle, ListContent }

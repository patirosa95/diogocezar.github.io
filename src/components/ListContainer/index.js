import React from 'react'
import { StyledListContainer, StyledListItem } from './styles'

const ListContainer = ({ children, ...props }) => (
  <StyledListContainer {...props}>{children}</StyledListContainer>
)
const ListItem = ({ children, ...props }) => <StyledListItem {...props}>{children}</StyledListItem>

export { ListContainer, ListItem }

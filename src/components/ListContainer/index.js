import React from 'react'
import { StyledListContainer, StyledListItem, StyledListItemFooter } from './styles'

const ListContainer = ({ children, ...props }) => (
  <StyledListContainer {...props}>{children}</StyledListContainer>
)
const ListItem = ({ children, ...props }) => <StyledListItem {...props}>{children}</StyledListItem>
const ListItemFooter = ({ children, ...props }) => <StyledListItemFooter {...props}>{children}</StyledListItemFooter>

export { ListContainer, ListItem, ListItemFooter }

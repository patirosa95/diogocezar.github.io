import React from 'react'
import { StyledListContainer, StyledListItem } from './styles'

const ListContainer = ({ children }) => <StyledListContainer>{children}</StyledListContainer>
const ListItem = ({ children }) => <StyledListItem>{children}</StyledListItem>

export { ListContainer, ListItem }

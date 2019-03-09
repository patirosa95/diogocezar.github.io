import React from 'react'
import { StyledListTitle, StyledListSubTitle } from './styles'

const ListTitle = ({ children }) => <StyledListTitle>{children}</StyledListTitle>
const ListSubTitle = ({ children }) => <StyledListSubTitle>{children}</StyledListSubTitle>

export { ListTitle, ListSubTitle }

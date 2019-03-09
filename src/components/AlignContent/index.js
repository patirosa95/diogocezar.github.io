import React from 'react'
import { StyledLeftContent, StyledRightContent } from './styles'

const LeftContent = ({ children }) => <StyledLeftContent>{children}</StyledLeftContent>
const RightContent = ({ children }) => <StyledRightContent>{children}</StyledRightContent>

export { LeftContent, RightContent }

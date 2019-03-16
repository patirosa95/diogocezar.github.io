import React from 'react'
import {
  StyledLeftContent,
  StyledRightContent,
  StyledLeftContentList,
  StyledRightContentList,
} from './styles'

const LeftContent = ({ children }) => <StyledLeftContent>{children}</StyledLeftContent>
const RightContent = ({ children }) => <StyledRightContent>{children}</StyledRightContent>
const LeftContentList = ({ children }) => <StyledLeftContentList>{children}</StyledLeftContentList>
const RightContentList = ({ children }) => (
  <StyledRightContentList>{children}</StyledRightContentList>
)

export {
  LeftContent, RightContent, LeftContentList, RightContentList,
}

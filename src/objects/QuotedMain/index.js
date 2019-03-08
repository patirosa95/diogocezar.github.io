import React from 'react'
import StyledQuotedMain from './styles'

const QuotedMain = ({ author, children }) => (
  <StyledQuotedMain>
    <p>“{children}”</p>
    <span>{author}</span>
  </StyledQuotedMain>
)

export default QuotedMain

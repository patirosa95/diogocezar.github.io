import React from 'react'
import StyledQuotedParagraph from './styles'

const QuotedParagraph = ({ first, children }) => (
  <StyledQuotedParagraph>
    <span>{first} — </span>“{children}”
  </StyledQuotedParagraph>
)

export default QuotedParagraph

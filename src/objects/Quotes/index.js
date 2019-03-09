import React from 'react'
import { StyledQuotedMain, StyledQuotedParagraph } from './styles'

const QuotedMain = ({ author, children }) => (
  <StyledQuotedMain>
    <p>“{children}”</p>
    <span>{author}</span>
  </StyledQuotedMain>
)

const QuotedParagraph = ({ first, children }) => (
  <StyledQuotedParagraph>
    <span>{first} — </span>“{children}”
  </StyledQuotedParagraph>
)

export { QuotedMain, QuotedParagraph }

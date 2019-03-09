import React from 'react'
import StyledSeparator from './styles'

const Separator = ({ number, title, type }) => (
  <StyledSeparator type={type}>
    <h2>
      <span>{number}</span>
      {title}
    </h2>
  </StyledSeparator>
)

export default Separator

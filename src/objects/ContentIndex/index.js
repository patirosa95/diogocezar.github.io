import React from 'react'
import StyledContent from './styles'

const ContentIndex = ({ number, title }) => (
  <StyledContent>
    <h2>
      <span>{number}</span>
      {title}
    </h2>
  </StyledContent>
)

export default ContentIndex

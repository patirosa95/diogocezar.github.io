import styled from 'styled-components'

const StyledLink = styled.a`
  font-style: italic;
  color: ${({ type }) => {
    switch (type) {
      case 'orange':
        return 'var(--color-orange)'
      case 'white':
        return 'var(--color-white)'
      default:
        return 'var(--color-orange)'
    }
  }}!important;
  &:visited {
    color: ${({ type }) => {
    switch (type) {
      case 'orange':
        return 'var(--color-orange)'
      case 'white':
        return 'var(--color-white)'
      default:
        return 'var(--color-orange)'
    }
  }}!important;
  }
`

export default StyledLink

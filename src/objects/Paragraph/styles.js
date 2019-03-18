import styled from 'styled-components'

const StyledParagraph = styled.p`
  color: ${({ color }) => (color ? `var(--color-${color})` : 'var(--color-white)')}!important;
  font-family: ${({ font }) => (font === 'sans-serif' ? 'AkzidenzGroteskBE' : 'AGaramondPro')}!important;
  font-style: normal;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')}!important;
  font-size: ${({ size }) => {
    switch (size) {
      case 'small':
        return '1rem'
      case 'medium':
        return '1.2rem'
      default:
        return '1.6rem'
    }
  }}!important;
  line-height: ${({ size }) => {
    switch (size) {
      case 'small':
        return '2rem'
      case 'medium':
        return '2rem'
      default:
        return '2.7rem'
    }
  }}!important;
  margin-bottom: ${({ bottom }) => bottom || 'var(--size-s4)'}!important;
  padding: ${({ padding }) => padding || '0.5rem'}!important;
  a {
    color: var(--color-orange) !important;
  }
`

export default StyledParagraph

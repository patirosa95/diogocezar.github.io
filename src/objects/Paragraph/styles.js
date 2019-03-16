import styled from 'styled-components'

const StyledParagraph = styled.p`
  color: var(--color-white);
  font-family: ${({ font }) => (font === 'sans-serif' ? 'AkzidenzGroteskBE' : 'AGaramondPro')}!important;
  font-style: normal;
  font-weight: ${({ bold }) => (bold ? 'bold' : 'normal')}!important;
  font-size: ${({ size }) => (size === 'small' ? '1rem' : '1.6rem')}!important;
  line-height: ${({ size }) => (size === 'small' ? '2rem' : '2.7rem')}!important;
  margin-bottom: var(--size-s4);
`

export default StyledParagraph

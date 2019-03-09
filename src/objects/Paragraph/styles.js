import styled from 'styled-components'

const StyledParagraph = styled.p`
  color: var(--color-white);
  font-family: ${({ hightLight }) => (hightLight ? 'AkzidenzGroteskBE' : 'AGaramondPro')}!important;
  font-style: normal;
  font-weight: ${({ hightLight }) => (hightLight ? 'bold' : 'normal')}!important;
  font-size: 1.6rem;
  line-height: 2.7rem;
  margin-bottom: var(--size-s4);
`

export default StyledParagraph

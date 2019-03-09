import styled from 'styled-components'

const StyledQuotedMain = styled.blockquote`
  p {
    color: var(--color-white);
    font-family: 'AGaramondPro';
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.7rem;
    margin-bottom: 30px;
  }
  span {
    font-family: 'AkzidenzGroteskBE';
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--color-white);
  }
`

const StyledQuotedParagraph = styled.blockquote`
  color: var(--color-white);
  font-family: 'AGaramondPro';
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 2.7rem;
  margin-bottom: 80px;
  span {
    font-family: 'AkzidenzGroteskBE';
    font-weight: bold;
    font-size: 1.5rem;
  }
`

export { StyledQuotedMain, StyledQuotedParagraph }

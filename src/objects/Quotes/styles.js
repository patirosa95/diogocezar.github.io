import styled from 'styled-components'

const StyledQuotedMain = styled.blockquote`
  p {
    color: var(--color-white);
    font-family: 'AGaramondPro';
    font-style: normal;
    font-weight: normal;
    font-size: 1.6rem;
    line-height: 2.7rem;
    margin-bottom: var(--size-s3);
  }
  span {
    font-family: 'AkzidenzGroteskBE';
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--color-white);
    margin-top: var(--size-s3);
    display: inline-block;
  }
`

const StyledQuotedParagraph = styled.blockquote`
  color: var(--color-white);
  font-family: 'AGaramondPro';
  font-style: normal;
  font-weight: normal;
  font-size: 1.6rem;
  line-height: 2.7rem;
  margin-bottom: var(--size-s4);
  span {
    font-family: 'AkzidenzGroteskBE';
    font-weight: bold;
    font-size: 1.5rem;
  }
  a {
    color: var(--color-orange) !important;
    font-style: italic;
  }
`

export { StyledQuotedMain, StyledQuotedParagraph }

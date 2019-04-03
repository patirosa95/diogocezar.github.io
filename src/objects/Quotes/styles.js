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
    padding-right: var(--size-s6);
    @media (max-width: 1520px) {
      padding-right: 0;
      font-size: 1.4rem;
      line-height: 2.3rem;
    }
    @media (max-width: 992px) {
      text-align: center;
    }
    @media (max-width: 700px) {
      font-size: 1.2rem;
      line-height: 2rem;
    }
  }
  span {
    font-family: 'AkzidenzGroteskBE';
    font-weight: bold;
    font-size: 1.5rem;
    color: var(--color-white);
    margin-top: var(--size-s3);
    display: inline-block;
    @media (max-width: 1520px) {
      font-size: 1.4rem;
      width: 100%;
    }
    @media (max-width: 992px) {
      text-align: center;
    }
    @media (max-width: 700px) {
      font-size: 1.2rem;
    }
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
  padding-right: var(--size-s6);
  @media (max-width: 1520px) {
    padding-right: 0;
    font-size: 1.4rem;
    line-height: 2.3rem;
  }
  @media (max-width: 700px) {
    font-size: 1.2rem;
    line-height: 2rem;
  }
  span {
    font-family: 'AkzidenzGroteskBE';
    font-weight: bold;
    font-size: 1.5rem;
    @media (max-width: 1520px) {
      font-size: 1.4rem;
    }
    @media (max-width: 700px) {
      font-size: 1.2rem;
    }
  }
  a {
    color: var(--color-orange) !important;
    font-style: italic;
  }
`

export { StyledQuotedMain, StyledQuotedParagraph }

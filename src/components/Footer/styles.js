import styled from 'styled-components'

const StyledFooter = styled.footer`
  position: relative;
  float: left;
  width: 100%;
  padding-bottom: var(--size-s2);
  background-color: var(--color-purple-dark);
  margin-left: auto;
  margin-right: auto;
  padding-left: var(--size-s6);
  padding-right: var(--size-s6);
  padding-bottom: var(--size-s2);
  padding-top: var(--size-s4);
  display: flex;
  @media (max-width: 1800px) {
    padding-bottom: var(--size-s5);
    padding-top: var(--size-s5);
    padding-left: var(--size-s6);
    padding-right: var(--size-s6);
  }
  @media (max-width: 1180px) {
    padding-left: var(--size-s4);
    padding-right: var(--size-s4);
  }
  @media (max-width: 700px) {
    padding-bottom: var(--size-s3);
    padding-top: var(--size-s1);
    padding-left: var(--size-s1);
    padding-right: var(--size-s1);
  }
`

const StyledColumnFooter = styled.div`
  width: 33.33%;
`

const StyledTitleFooter = styled.h3`
  font-family: 'AkzidenzGroteskBE';
  font-weight: bold;
  font-size: 1.8rem;
  text-transform: uppercase;
  line-height: 2.5rem;
  margin-bottom: 1.5rem;
  text-decoration: none !important;
  text-align: ${({ align }) => align || 'center'};
  color: var(--color-orange) !important;
`

const StyledContentFooter = styled.p`
  color: var(--color-white);
  font-family: 'AGaramondPro';
  font-style: normal;
  font-weight: normal;
  font-size: 1.5rem;
  line-height: 2rem;
  margin-bottom: var(--size-s3);
  text-align: ${({ align }) => align || 'center'};
  padding: ${({ align }) => {
    switch (align) {
      case 'center':
        return '0 25%'
      case 'left':
        return '0 25% 0 0'
      case 'right':
        return '0 0 0 25%'
      default:
        return '0 25%'
    }
  }};
  a {
    color: var(--color-orange) !important;
    text-decoration: none;
  }
`

export {
  StyledFooter, StyledColumnFooter, StyledTitleFooter, StyledContentFooter,
}
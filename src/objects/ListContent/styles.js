import styled from 'styled-components'

const StyledListTitle = styled.h3`
  font-family: 'AkzidenzGroteskBE';
  font-weight: bold;
  font-size: 2.6rem;
  text-transform: uppercase;
  line-height: 3rem;
  margin-bottom: 5px !important;
  text-decoration: none !important;
  color: ${({ type }) => (type === 'orange' ? 'var(--color-purple-dark)' : 'var(--color-orange)')};
  @media (max-width: 1520px) {
    font-size: 2.5rem;
    line-height: 2.9rem;
  }
  @media (max-width: 1180px) {
    font-size: 2.4rem;
    line-height: 2.8rem;
  }
  @media (max-width: 992px) {
    font-size: 2.2rem;
    line-height: 2.6rem;
    text-align: center;
  }
  @media (max-width: 700px) {
    font-size: 2rem;
    line-height: 2.5rem;
  }
`

const StyledListSubTitle = styled.p`
  font-family: 'AkzidenzGroteskBE';
  font-weight: bold;
  font-size: 1.5rem;
  text-transform: uppercase;
  line-height: 2.6rem;
  margin-bottom: 13px !important;
  text-decoration: none !important;
  color: ${({ type }) => {
    switch (type) {
      case 'orange':
        return 'var(--color-orange-dark)'
      case 'white':
        return 'var(--color-white)'
      default:
        return 'var(--color-orange)'
    }
  }};
  @media (max-width: 1520px) {
    font-size: 1.4rem;
    line-height: 2.5rem;
  }
  @media (max-width: 1180px) {
    font-size: 1.3rem;
    line-height: 2.4rem;
  }
  @media (max-width: 992px) {
    font-size: 1.2rem;
    line-height: 2.5rem;
    text-align: center;
  }
  @media (max-width: 700px) {
    font-size: 1rem;
    line-height: 2.3rem;
  }
`

const StyledListContent = styled.p`
  color: var(--color-white);
  font-size: 1.3rem;
  padding-bottom: var(--size-s1);
  margin-bottom: 0px !important;
  line-height: 2.3rem;
  @media (max-width: 1520px) {
    font-size: 1.2rem;
    line-height: 2.2rem;
  }
  @media (max-width: 1180px) {
    font-size: 1.1rem;
    line-height: 2.1rem;
  }
  @media (max-width: 992px) {
    font-size: 1rem;
    line-height: 2rem;
    text-align: center;
    display: ${({ menuMain }) => (menuMain ? 'none' : 'block')};
  }
`

export { StyledListTitle, StyledListSubTitle, StyledListContent }

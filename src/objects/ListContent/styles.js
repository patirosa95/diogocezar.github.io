import styled from 'styled-components'
import { devices } from '../../styles/devices'

const StyledListTitle = styled.h3`
  font-family: 'AkzidenzGroteskBE';
  font-weight: bold;
  font-size: 2.6rem;
  text-transform: uppercase;
  line-height: 3rem;
  margin-bottom: 5px !important;
  text-decoration: none !important;
  color: ${({ type }) => (type === 'orange' ? 'var(--color-purple-dark)' : 'var(--color-orange)')};
  @media ${devices.desktop} {
    font-size: 2.5rem;
    line-height: 2.9rem;
  }
  @media ${devices.laptopLarge} {
    font-size: 2.4rem;
    line-height: 2.8rem;
  }
  @media ${devices.laptop} {
    font-size: 2.2rem;
    line-height: 2.6rem;
    margin-bottom: 10px !important;
    text-align: center;
  }
  @media ${devices.tablet} {
    font-size: 1.5rem;
    line-height: 2rem;
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
  @media ${devices.desktop} {
    font-size: 1.4rem;
    line-height: 2.5rem;
  }
  @media ${devices.laptopLarge} {
    font-size: 1.3rem;
    line-height: 2.4rem;
  }
  @media ${devices.laptop} {
    font-size: 1.2rem;
    line-height: 2.3rem;
    text-align: center;
  }
  @media ${devices.tablet} {
    font-size: 1.1rem;
    line-height: 2.2rem;
  }
`

const StyledListContent = styled.p`
  color: var(--color-white);
  font-size: 1.3rem;
  padding-bottom: var(--size-s1);
  margin-bottom: 0px !important;
  line-height: 2.3rem;
  @media ${devices.desktop} {
    font-size: 1.2rem;
    line-height: 2.2rem;
  }
  @media ${devices.laptopLarge} {
    font-size: 1.1rem;
    line-height: 2.1rem;
  }
  @media ${devices.laptop} {
    font-size: 0.9rem;
    line-height: 1.4rem;
    text-align: center;
    display: ${({ menuMain }) => (menuMain ? 'none' : 'block')};
  }
`

export { StyledListTitle, StyledListSubTitle, StyledListContent }

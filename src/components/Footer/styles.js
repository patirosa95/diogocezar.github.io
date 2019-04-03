import styled from 'styled-components'
import { devices } from '../../styles/devices'

const StyledFooter = styled.footer`
  position: relative;
  float: left;
  width: 100%;
  padding-bottom: var(--size-s2);
  background-color: var(--color-purple-dark);
  margin-left: auto;
  margin-right: auto;
  margin-top: var(--size-s4);
  padding-left: var(--size-s6);
  padding-right: var(--size-s6);
  padding-bottom: var(--size-s4);
  padding-top: var(--size-s5);
  display: flex;
  @media ${devices.laptopLarge} {
    display: block;
  }
  &::before,
  &::after {
    position: absolute;
    content: '';
    pointer-events: none;
    content: '';
    right: 0;
    left: 0;
    z-index: 10;
    display: block;
    height: 90px;
    background-size: 50px 100%;
  }

  &::before {
    top: -90px;
    background-image: -webkit-gradient(
      linear,
      0 0,
      300% 100%,
      color-stop(0.25, transparent),
      color-stop(0.25, var(--color-purple-dark))
    );
    background-image: linear-gradient(315deg, var(--color-purple-dark) 25%, transparent 25%),
      linear-gradient(45deg, var(--color-purple-dark) 25%, transparent 25%);
    background-position: 50%;
  }

  @media ${devices.desktopLarge} {
    padding-bottom: var(--size-s5);
    padding-top: var(--size-s5);
    padding-left: var(--size-s6);
    padding-right: var(--size-s6);
  }
  @media ${devices.laptopLarge} {
    padding-left: var(--size-s4);
    padding-right: var(--size-s4);
  }
  @media ${devices.table} {
    padding-bottom: var(--size-s3);
    padding-top: var(--size-s1);
    padding-left: var(--size-s1);
    padding-right: var(--size-s1);
  }
`

const StyledColumnFooter = styled.div`
  width: 33.33%;
  @media ${devices.laptopLarge} {
    position: relative;
    float: left;
    width: 100% !important;
    margin-bottom: var(--size-s5);
  }
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
  @media ${devices.laptopLarge} {
    text-align: center;
  }
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
  @media ${devices.laptopLarge} {
    padding: 0 5%;
    text-align: center;
  }
  a {
    color: var(--color-orange) !important;
    text-decoration: none;
  }
`

export {
  StyledFooter, StyledColumnFooter, StyledTitleFooter, StyledContentFooter,
}

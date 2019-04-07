import styled from 'styled-components'
import { devices } from '../../styles/devices'

const BaseButton = styled.button`
  padding: 16px 26px;
  border-radius: 35px;
  text-transform: uppercase;
  margin-right: ${({ right }) => right || 'var(--size-s1)'};
  font-family: 'AkzidenzGroteskBE';
  font-weight: bold;
  font-size: 1rem;
  height: 50px;
  cursor: pointer;
  margin-bottom: ${({ marginBottom }) => marginBottom || 'var(--size-s1)'};
  min-width: 180px;
  float: left;
  display: block;
  border: none;
  background: none;
  position: relative;
  z-index: 1;
  -webkit-backface-visibility: hidden;
  -moz-osx-font-smoothing: grayscale;
  background: ${({ type }) => (type === 'orange' ? 'var(--color-orange)' : 'var(--color-white)')};
  color: ${({ type }) => (type === 'orange' ? 'var(--color-white)' : 'var(--color-purple-dark)')};
  overflow: hidden;
  -webkit-transition: color 0.3s;
  transition: color 0.3s;
  @media ${devices.laptopLarge} {
    margin-bottom: 10px !important;
  }
  &::before,
  &::after {
    content: '';
    position: absolute;
    height: 100%;
    width: 100%;
    bottom: 100%;
    left: 0;
    z-index: -1;
    -webkit-transition: -webkit-transform 0.3s;
    transition: transform 0.3s;
    -webkit-transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
    transition-timing-function: cubic-bezier(0.75, 0, 0.125, 1);
  }
  &::before {
    background: ${({ type }) => {
    switch (type) {
      case 'orange':
        return 'var(--color-white)'
      case 'purple':
        return 'var(--color-orange-dark)'
      default:
        return 'var(--color-purple-dark)'
    }
  }};
  }
  &::after {
    background: ${({ type }) => {
    switch (type) {
      case 'orange':
        return 'var(--color-white-pure)'
      case 'purple':
        return 'var(--color-orange)'
      default:
        return 'var(--color-purple)'
    }
  }};
  }
  &:hover {
    color: ${({ type }) => (type === 'orange' ? 'var(--color-purple-dark)' : 'var(--color-white)')};
  }
  &:hover::before,
  &:hover::after {
    -webkit-transform: translate3d(0, 100%, 0);
    transform: translate3d(0, 100%, 0);
  }
  &:hover::after {
    -webkit-transition-delay: 0.175s;
    transition-delay: 0.175s;
  }
`

const StyledButton = styled(BaseButton)`
  margin-top: 40px;
  @media ${devices.laptopLarge} {
    margin-top: 10px;
  }
  @media ${devices.laptop} {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
  }
  @media ${devices.tablet} {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
`

const StyledButtonList = styled(BaseButton)`
  @media ${devices.laptopLarge} {
    margin-top: 10px;
  }
  @media ${devices.laptop} {
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
  }
  @media ${devices.tablet} {
    width: 80%;
    margin-left: 10%;
    margin-right: 10%;
  }
`

const StyledButtonBackContainer = styled.div`
  position: fixed;
  width: 100%;
  background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 10%, rgba(0, 0, 0, 0.3) 80%);
  height: 120px;
  bottom: 0;
  z-index: 9998 !important;
  .display-true {
    transform: translateX(calc(-50%)) translateY(0) !important;
  }
  .display-false {
    transform: translateX(calc(-50%)) translateY(100px) !important;
  }
`

const StyledButtonBack = styled(BaseButton)`
  position: fixed !important;
  bottom: 15px !important;
  left: 50% !important;
  transition: all 0.15s ease-in !important;
  z-index: 9999 !important;
  width: 180px;
  margin: 0 !important;
`

export {
  StyledButton, StyledButtonList, StyledButtonBack, StyledButtonBackContainer,
}

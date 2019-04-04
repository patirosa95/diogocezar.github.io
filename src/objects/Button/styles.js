import styled from 'styled-components'
import { devices } from '../../styles/devices'

const BaseButton = styled.button`
  border: none;
  padding: 16px 26px;
  background-color: ${({ type }) => (type === 'orange' ? 'var(--color-orange)' : 'var(--color-white)')};
  border-radius: 35px;
  color: ${({ type }) => (type === 'orange' ? 'var(--color-white)' : 'var(--color-purple-dark)')};
  text-transform: uppercase;
  margin-right: ${({ right }) => right || 'var(--size-s1)'};
  font-family: 'AkzidenzGroteskBE';
  font-weight: bold;
  font-size: 1rem;
  height: 50px;
  cursor: pointer;
  margin-bottom: ${({ bottom }) => bottom || 'var(--size-s1)'};
  min-width: 180px;
  @media ${devices.laptopLarge} {
    margin-bottom: 10px !important;
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

export { StyledButton, StyledButtonList }

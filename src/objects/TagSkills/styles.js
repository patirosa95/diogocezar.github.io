import styled from 'styled-components'
import { devices } from '../../styles/devices'

const StyledTagSkills = styled.div`
  display: flex;
  width: 100%;
  position: relative;
  float: left;
  flex-wrap: wrap;
  @media ${devices.tablet} {
    justify-content: center;
    align-items: center;
  }
`

const StyledTagSkill = styled.span`
  font-family: 'AkzidenzGroteskBE';
  border-radius: 15px;
  background-color: var(--color-purple-dark);
  padding: 5px 15px;
  font-size: 1.1rem;
  margin: 5px;
  color: var(--color-white);
  @media ${devices.desktop} {
    font-size: 1rem;
  }
  @media ${devices.tablet} {
    font-size: 0.8rem;
  }
`

export { StyledTagSkills, StyledTagSkill }

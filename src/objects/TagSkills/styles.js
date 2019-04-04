import styled from 'styled-components'
import { devices } from '../../styles/devices'

const StyledTagSkills = styled.ul`
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

const StyledTagSkill = styled.li`
  display: inline-block;
  font-family: 'AkzidenzGroteskBE';
  border-radius: 15px;
  background-color: var(--color-purple-dark);
  padding: 5px 15px;
  font-size: 0.8rem;
  letter-spacing: 1px;
  margin: 5px;
  color: var(--color-white);
  padding-top: 8px;
  @media ${devices.desktop} {
    font-size: 0.7rem;
  }
  @media ${devices.tablet} {
    font-size: 0.6rem;
  }
`

export { StyledTagSkills, StyledTagSkill }

import styled, { keyframes } from 'styled-components'

const appear = keyframes`
	from { opacity: 0; }
	to { opacity: 1; }
`
const disappear = keyframes`
	from { opacity: 1; }
	to { opacity: 0; }
`

const time = '0.9s'

const baseAnimation = styled.div`
  position: relative;
  float: left;
  width: 100%;
  height: 100%;
`

const MainAnimated = styled(baseAnimation)`
  &.page-enter {
    animation: ${appear} ${time} ease both;
  }
  &.page-exit {
    animation: ${disappear} ${time} ease both;
  }
`

const AboutAnimated = styled(baseAnimation)`
  &.page-enter {
    animation: ${appear} ${time} ease both;
  }
  &.page-exit {
    animation: ${disappear} ${time} ease both;
  }
`

const ContactAnimated = styled(baseAnimation)`
  &.page-enter {
    animation: ${appear} ${time} ease both;
  }
  &.page-exit {
    animation: ${disappear} ${time} ease both;
  }
`

const PortifolioAnimated = styled(baseAnimation)`
  &.page-enter {
    animation: ${appear} ${time} ease both;
  }
  &.page-exit {
    animation: ${disappear} ${time} ease both;
  }
`

const TeachingTalksAnimated = styled(baseAnimation)`
  &.page-enter {
    animation: ${appear} ${time} ease both;
  }
  &.page-exit {
    animation: ${disappear} ${time} ease both;
  }
`

export {
  MainAnimated, AboutAnimated, ContactAnimated, PortifolioAnimated, TeachingTalksAnimated,
}

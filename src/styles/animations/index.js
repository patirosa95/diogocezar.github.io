import styled, { keyframes } from 'styled-components'

const slideInLeft = keyframes`
  from {
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
`
const slideOutLeft = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(-100%, 0, 0);
    transform: translate3d(-100%, 0, 0);
  }
`

const slideInRight = keyframes`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`

const slideOutRight = keyframes`
  from {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    -webkit-transform: translate3d(100%, 0, 0);
    transform: translate3d(100%, 0, 0);
  }
`

const MainAnimated = styled.div`
  &.page-enter {
    animation: ${slideInLeft} 0.25s forwards;
  }
  &.page-exit {
    animation: ${slideOutLeft} 0.25s forwards;
  }
`

const AboutAnimated = styled.div`
  &.page-enter {
    animation: ${slideInRight} 0.25s forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.25s forwards;
  }
`

const ContactAnimated = styled.div`
  &.page-enter {
    animation: ${slideInRight} 0.25s forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.25s forwards;
  }
`

const PortifolioAnimated = styled.div`
  &.page-enter {
    animation: ${slideInRight} 0.25s forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.25s forwards;
  }
`

const TeachingTalksAnimated = styled.div`
  &.page-enter {
    animation: ${slideInRight} 0.25s forwards;
  }
  &.page-exit {
    animation: ${slideOutRight} 0.25s forwards;
  }
`

export {
  MainAnimated, AboutAnimated, ContactAnimated, PortifolioAnimated, TeachingTalksAnimated,
}

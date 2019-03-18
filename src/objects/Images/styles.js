import styled from 'styled-components'

const StyledImage = styled.img`
  border-radius: 50%;
  height: 250px;
  width: 250px;
  border: 4px solid var(--color-white);
  margin: 0 auto;
  display: block;
  margin-top: -20px;
  margin-bottom: 100px;
`

const StyledImageItemColumn = styled.img`
  height: 125px;
  width: 125px;
  margin: 0 auto;
  display: block;
  margin-bottom: var(--size-s3);
  border-radius: 50%;
`

export { StyledImage, StyledImageItemColumn }

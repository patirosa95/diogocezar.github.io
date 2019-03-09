import React from 'react'
import StyledPage from './styles'

const Page = props => <StyledPage {...props}>{props.children}</StyledPage>

export default Page

import React, { Component } from 'react'

import { Page, Wrapper } from '../../components/Containers'
import { BlogAnimated } from '../../styles/animations'

import Posts from './Posts'
import Details from './Details'

import { ButtonBack } from '../../objects/Button'

class Blog extends Component {
  render() {
    return (
      <BlogAnimated>
        <Page color="purple-dark">
          <Wrapper>
            <Posts></Posts>
          </Wrapper>
        </Page>
        <ButtonBack />
      </BlogAnimated>
    )
  }
}

class BlogDetails extends Component {
  render() {
    return (
      <BlogAnimated>
        <Page color="purple-dark">
          <Wrapper>
            <Details></Details>
          </Wrapper>
        </Page>
        <ButtonBack />
      </BlogAnimated>
    )
  }
}

export { Blog, BlogDetails }

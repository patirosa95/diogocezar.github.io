import React, { Component } from 'react'

import { withRouter, Link } from 'react-router-dom'
import { Section } from '../../../components/Containers'
import { LeftContent, RightContent } from '../../../components/AlignContent'

import Separator from '../../../objects/Separator'
import Image from '../../../objects/Images'
import { Title } from '../../../objects/Titles'
import Paragraph from '../../../objects/Paragraph'
import BlogService from '../../../services/BlogService'
import Button from '../../../objects/Button'

class Details extends Component {
  state = {
    data: null,
    id: null,
    loading: true,
    source: null,
  }

  async componentDidMount() {
    const { id, source } = this.props.match.params
    this.setState({ source })
    this.loadContent(id)
  }

  loadContent = async (id) => {
    const posts = await BlogService.getPost(id)
    const { result: data, total, totalPages } = posts

    this.setState({
      data, total, totalPages, loading: false,
    })
  }

  contentLoading = () => (
    <Title type="internal" color="orange">Aguenta ai ;)</Title>
  )

  renderPost = () => {
    const { data: post } = this.state
    return (
      <>
        <Title type="internal" color="orange" dangerouslySetInnerHTML={{ __html: post.title.rendered }}></Title>
        <Paragraph dangerouslySetInnerHTML={{ __html: post.content.rendered }}></Paragraph>
        <Link to={`/blog/${this.state.source || 1}`}>
          <Button>Voltar</Button>
        </Link>
      </>
    )
  }

  render() {
    return (
      <Section>
        <Separator number="01" title="Veja o Post"/>
        <LeftContent>
          <Image />
        </LeftContent>
        <RightContent>
          {(!this.state.loading && this.renderPost()) || this.contentLoading()}
        </RightContent>
      </Section>
    )
  }
}


export default withRouter(Details)

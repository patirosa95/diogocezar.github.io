import axios from 'axios'
import { ApiBlog } from '../config'

class BlogService {
  async getPosts(page = 1) {
    let { url } = ApiBlog
    url = `${url}posts/?page=${page}`
    try {
      const result = await axios({
        url,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'get',
      })
      const total = parseInt(result.headers['x-wp-total'], 10)
      const totalPages = parseInt(result.headers['x-wp-totalpages'], 10)
      return {
        success: true, result: result.data, total, totalPages,
      }
    } catch (err) {
      return { success: false, error: err.toString() }
    }
  }

  async getPost(slug) {
    if (!slug) throw new Error('You need pass a slug.')
    let { url } = ApiBlog
    url = `${url}posts/?slug=${slug}`
    try {
      const result = await axios({
        url,
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'get',
      })
      const total = parseInt(result.headers['x-wp-total'], 10)
      const totalPages = parseInt(result.headers['x-wp-totalpages'], 10)
      return {
        success: true, result: result.data[0], total, totalPages,
      }
    } catch (err) {
      return { success: false, error: err.toString() }
    }
  }
}

export default new BlogService()

// Write your JS code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}, loaded: false}

  componentDidMount() {
    this.getBlogItem()
  }

  getBlogItem = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    console.log(id)

    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const each = await response.json()

    const camelCase = {
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      content: each.content,
      topic: each.topic,
    }
    this.setState({blogData: camelCase, loaded: true})
  }

  render() {
    const {loaded} = this.state
    const renderBlogItemDetails = () => {
      const {blogData} = this.state
      const {title, imageUrl, avatarUrl, author, content} = blogData

      return (
        <div className="bg">
          <h1>{title}</h1>
          <div className="avatarBox">
            <img className="avatar" src={avatarUrl} alt="avatar" />
            <p className="m">{author}</p>
          </div>
          <img className="topicImg" src={imageUrl} alt={title} />
          <p className="p">{content}</p>
        </div>
      )
    }

    return (
      <div>
        {loaded ? (
          renderBlogItemDetails()
        ) : (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        )}
      </div>
    )
  }
}

export default BlogItemDetails

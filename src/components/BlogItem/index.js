import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blog} = props
  const {id} = blog

  return (
    <Link to={`/blogs/${id}`}>
      <div className="item">
        <img className="image" src={blog.imageUrl} alt="title" />
        <div className="details">
          <p className="p g">{blog.topic}</p>
          <h2 className="p">{blog.title}</h2>
          <div className="avatarBox ">
            <img className="avatar" src={blog.avatarUrl} alt="avatar" />
            <p className="p g">{blog.author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default BlogItem

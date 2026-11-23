import { useParams, Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function PostDetail() {
  const { id } = useParams()
  const { data: post, loading, error } = useFetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  if (loading) return <p>Loading post...</p>
  if (error) return <p>Error: {error}</p>
  if (!post) return <p>Post not found</p>

  return (
    <div>
      <Link to="/posts">← Back to Posts</Link>
      <h1>{post.title}</h1>
      <p><small>Post ID: {post.id} | User ID: {post.userId}</small></p>
      <p>{post.body}</p>
    </div>
  )
}

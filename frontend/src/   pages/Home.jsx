import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function Home() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=3')

  return (
    <div>
      <h1>Welcome to Community Hub</h1>
      <p>Share posts, explore stories, and connect with the community.</p>

      <Link to="/posts">View All Posts</Link>
      <Link to="/create" style={{ marginLeft: '10px' }}>Create Post</Link>

      <h2>Recent Posts</h2>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}

      {!loading && !error && posts && (
        <div>
          {posts.map((post) => (
            <article key={post.id} style={{ border: '1px solid #ddd', padding: '12px', marginBottom: '10px' }}>
              <h3>{post.title}</h3>
              <p>{post.body.slice(0, 100)}...</p>
              <Link to={`/posts/${post.id}`}>Read More</Link>
            </article>
          ))}
        </div>
      )}
    </div>
  )
          }

import { useState } from 'react'
import { Link } from 'react-router-dom'
import useFetch from '../hooks/useFetch'

export default function Posts() {
  const { data: posts, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts')
  const [search, setSearch] = useState('')
  const [liked, setLiked] = useState({})

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const filtered = posts ? posts.filter((p) =>
    p.title.toLowerCase().includes(search.toLowerCase()) ||
    p.body.toLowerCase().includes(search.toLowerCase())
  ) : []

  if (loading) return <p>Loading posts...</p>
  if (error) return <p>Error: {error}</p>

  return (
    <div>
      <h1>All Posts</h1>

      <input
        type="text"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ padding: '8px', width: '100%', marginBottom: '16px' }}
      />

      <p>{filtered.length} posts found</p>

      <div>
        {filtered.map((post) => (
          <article key={post.id} style={{ border: '1px solid #ddd', padding: '12px', marginBottom: '10px' }}>
            <h3>{post.title}</h3>
            <p>{post.body.slice(0, 120)}...</p>
            <Link to={`/posts/${post.id}`}>Read More</Link>
            <button
              onClick={() => toggleLike(post.id)}
              style={{ marginLeft: '10px', background: liked[post.id] ? '#ff6b6b' : '#eee', border: 'none', padding: '6px 12px', cursor: 'pointer' }}
            >
              {liked[post.id] ? '❤️ Liked' : '🤍 Like'}
            </button>
          </article>
        ))}
      </div>
    </div>
  )
                         }

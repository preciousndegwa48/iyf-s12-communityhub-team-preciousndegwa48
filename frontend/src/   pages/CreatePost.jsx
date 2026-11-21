import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function CreatePost() {
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [message, setMessage] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!title.trim() || !body.trim()) {
      setMessage('Please fill in both title and body.')
      return
    }

    setLoading(true)
    setMessage('')

    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, body, userId: 1 }),
      })
      if (!res.ok) throw new Error('Failed to create post')
      await res.json()
      setMessage('Post created successfully! Redirecting...')
      setTitle('')
      setBody('')
      setTimeout(() => navigate('/posts'), 1500)
    } catch (err) {
      setMessage('Error: ' + err.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div>
      <h1>Create New Post</h1>
      <form onSubmit={handleSubmit} style={{ maxWidth: '500px' }}>
        <div style={{ marginBottom: '12px' }}>
          <label>Title:</label><br />
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter post title"
            style={{ padding: '8px', width: '100%' }}
          />
        </div>

        <div style={{ marginBottom: '12px' }}>
          <label>Body:</label><br />
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Write your post..."
            rows="6"
            style={{ padding: '8px', width: '100%' }}
          />
        </div>

        <button type="submit" disabled={loading} style={{ padding: '10px 20px', cursor: 'pointer' }}>
          {loading ? 'Creating...' : 'Create Post'}
        </button>
      </form>

      {message && <p style={{ marginTop: '12px' }}>{message}</p>}
    </div>
  )
        }

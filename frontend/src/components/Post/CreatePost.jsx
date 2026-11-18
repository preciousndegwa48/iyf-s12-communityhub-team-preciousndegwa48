import { useState } from 'react';

function CreatePost({ onAddPost }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [author, setAuthor] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    if (!title.trim() || !content.trim()) return;

    const newPost = {
      id: Date.now(),
      title: title.trim(),
      excerpt: content.trim().slice(0, 100),
      content: content.trim(),
      author: author.trim() || 'Anonymous',
      date: new Date().toDateString(),
      likes: 0,
    };

    onAddPost(newPost);
    setTitle('');
    setContent('');
    setAuthor('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Create a Post</h2>

      <label>
        Title
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Post title"
        />
      </label>

      <label>
        Author
        <input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Your name"
        />
      </label>

      <label>
        Content
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write your post..."
        />
      </label>

      <button type="submit">Post</button>
    </form>
  );
}

export default CreatePost;

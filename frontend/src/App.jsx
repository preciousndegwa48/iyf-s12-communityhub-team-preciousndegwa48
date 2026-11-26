import { useState } from "react";
import Layout from "./components/Layout/Layout.jsx";
import PostList from "./components/Post/PostList.jsx";
import CreatePost from "./components/Post/CreatePost.jsx";
import { sortNewestFirst, searchPosts } from "./utils/posts.js";

const initialPosts = [
  { id: 1, title: "Getting Started with React", excerpt: "Learn the basics of React...", author: "Amina Otieno", date: "2026-01-15", likes: 0 },
  { id: 2, title: "JavaScript Best Practices", excerpt: "Write cleaner code...", author: "Brian Kamau", date: "2026-01-10", likes: 0 },
];

function App() {
  const [posts, setPosts] = useState(initialPosts);
  const [search, setSearch] = useState("");

  const handleLike = (id) => setPosts(posts.map((p) => (p.id === id ? { ...p, likes: p.likes + 1 } : p)));
  const handleDelete = (id) => setPosts(posts.filter((p) => p.id !== id));
  const handleAddPost = (newPost) => setPosts([newPost, ...posts]);

  const visiblePosts = sortNewestFirst(searchPosts(posts, search));
  const totalLikes = posts.reduce((sum, p) => sum + p.likes, 0);

  return (
    <Layout>
      <h2>Welcome to CommunityHub</h2>
      <p>{posts.length} posts | {totalLikes} total likes</p>
      <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search posts..." />
      <CreatePost onAddPost={handleAddPost} />
      <PostList posts={visiblePosts} onLike={handleLike} onDelete={handleDelete} />
    </Layout>
  );
}
export default App;

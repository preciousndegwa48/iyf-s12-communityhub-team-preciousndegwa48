import PostCard from "./PostCard";

function PostList({ posts }) {
  if (!posts || posts.length === 0) {
    return <p>No posts yet. Be the first to post!</p>;
  }

  return (
    <div>
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
}

export default PostList;

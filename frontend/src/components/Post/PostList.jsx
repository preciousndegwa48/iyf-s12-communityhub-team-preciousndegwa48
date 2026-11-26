import Postcard from ".PostCard.jsx;
  function PostList({posts, onLike, onDelete }) {
    if (posts.length === 0) return <p> No posts found</p>;
    return (
      <div className="post-list">
        {post.map((post) => (
        <PostCard key={post.id} post={post} onLike={() => onLike(post.id)} onDelete={() => onDelete(post.id)} />
        ))}
      </div>
      );
  }
export default PostList;
    

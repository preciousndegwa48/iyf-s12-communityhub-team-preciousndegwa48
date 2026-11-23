import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div>
      <h1>About Community Hub</h1>
      <p>
        Community Hub is a space where people share posts, explore stories,
        and connect with each other. It was built by our team as part of
        Week 9 - React Router, Hooks, and Accessibility.
      </p>

      <h2>What you can do here</h2>
      <ul>
        <li>Browse all posts on the Posts page</li>
        <li>Search for posts you are interested in</li>
        <li>Like posts you enjoy</li>
        <li>Read a full post on its detail page</li>
        <li>Create your own post</li>
      </ul>

      <h2>Our Mission</h2>
      <p>
        To make sharing simple, accessible, and welcoming for everyone.
        We care about clean design, keyboard navigation, and readable content.
      </p>

      <Link to="/">Back to Home</Link>
      <Link to="/posts" style={{ marginLeft: '10px' }}>Browse Posts</Link>
    </div>
  )
}

function Sidebar() {
  return (
    <aside className="sidebar">
      <section>
      <h3>Menu</h3>
      <ul>
        <li>Dashboard</li>
        <li> My Posts</li>
        <li>Saved</li>
        <li>Settings</li>
      </ul>
      </section>
      <section>
        <h3>About</h3>
        <p>CommunityHub is a place to share posts, learn React and connect.</p>
        </section>
      <section>
      <h3>Popular Posts</h3>
        <ul>
          <li> Getting Started with React</li>
          <li>Javascript Best Practices</li>
        </ul>
      </section>
      <section>
      <h3>Tags</h3>
        <span>React</span>
        <span>Javascript</span>
        <span>Community</span>
      </section>
  </aside>
  );
}
export default Sidebar;

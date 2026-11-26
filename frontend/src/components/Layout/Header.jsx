function Header({ onLogin }) {
  return (
    <header classname="header">
    <h1>CommunityHub</h1>
      <nav>
        <a href="#">Home</a>
        <a href="#">Posts</a>
        <a href="#">Profile</a>
        <a href="#">About</a>
      </nav>
      <button onClick={onLogin}>Login</button>
    </header>
  );
}
export default Header;

import UserCard from ".UserCard.jsx";
function UserProfile({ user }) {
  if (!user) return <p> Please log in</p>;
  return (
    <div>
    <h3>Profile</h3>
      <UserCard user={user} />
    </div>
    );
}
export default UserProfile;

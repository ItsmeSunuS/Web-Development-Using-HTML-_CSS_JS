import UserInfo from "./UserInfo";

const UserProfile = () => {
  const user = {
    name: "John Doe",
    age: 25,
  };

  return (
    <div style={styles.profile}>
      <h2>User Profile</h2>
      <UserInfo name={user.name} age={user.age} />
    </div>
  );
};

const styles = {
  profile: {
    border: "1px solid #ccc",
    padding: "20px",
    width: "300px",
    borderRadius: "8px",
  },
};

export default UserProfile;

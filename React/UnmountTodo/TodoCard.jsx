const TodoCard = ({ userId, title, completed }) => {
  return (
    <div style={styles.card}>
      <p><strong>User ID:</strong> {userId}</p>
      <p><strong>Title:</strong> {title}</p>
      <p>
        <strong>Status:</strong>{" "}
        {completed ? "Completed Yes" : "Not Completed No"}
      </p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "10px",
    marginBottom: "10px",
    borderRadius: "6px",
  },
};

export default TodoCard;

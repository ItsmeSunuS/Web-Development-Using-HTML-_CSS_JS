const MessageCard = ({ title, message }) => {
  return (
    <div style={styles.card}>
      <h3>{title}</h3>
      <p>{message}</p>
    </div>
  );
};

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "16px",
    marginBottom: "12px",
    borderRadius: "8px",
    width: "300px"
  }
};

export default MessageCard;

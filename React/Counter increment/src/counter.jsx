import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h3>Count: {count}</h3>

      <button
        onClick={() => setCount(count + 1)}
        style={{
          padding: "8px 16px",
          fontSize: "16px",
          cursor: "pointer"
        }}
      >
        Increment
      </button>
    </div>
  );
}

export default Counter;

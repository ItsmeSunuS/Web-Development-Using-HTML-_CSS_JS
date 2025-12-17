import { useState } from "react";

const ComponentA = () => {
  return <h2>Status is TRUE</h2>;
};

const ComponentB = () => {
  return <h2>Status is FALSE</h2>;
};

const StatusToggle = () => {
  const [status, setStatus] = useState(false);

  return (
    <div>
      <button onClick={() => setStatus(!status)}>
        Toggle Status
      </button>

      {status ? <ComponentA /> : <ComponentB />}
    </div>
  );
};

export default StatusToggle;

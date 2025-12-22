// Component6.jsx
import { useContext } from "react";
import PropsContext from "../context/PropsContext";

function Component6() {
  const { e } = useContext(PropsContext);

  return (
    <div>
      <h3>Component 6</h3>
      <h4>This is prop e: {e}</h4>
    </div>
  );
}

export default Component6;

// Component5.jsx
import { useContext } from "react";
import PropsContext from "../context/PropsContext";
import Component6 from "./Component6";

function Component5() {
  const { f } = useContext(PropsContext);

  return (
    <div>
      <h3>Component 5</h3>
      <h4>This is prop f: {f}</h4>

      <Component6 />
    </div>
  );
}

export default Component5;

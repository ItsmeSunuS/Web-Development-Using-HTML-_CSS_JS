import PropsContext from "../context/PropsContext";
import Component2 from "./Component2";

function Component1() {
  const data = {
    a: "Apple",
    b: "Ball",
    c: "Cat",
    d: "Dog",
    e: "Elephant",
    f: "Fish",
  };

  return (
    <PropsContext.Provider value={data}>
      <h3>Component 1</h3>
      <Component2 />
    </PropsContext.Provider>
  );
}

export default Component1;

import React, { useState, useContext } from "react";
import { TodoContext } from "../context/TodoContext"; 


function AddTodo() {
  const { addTodo } = useContext(TodoContext);
  const [input, setInput] = useState("");

  const handleAdd = () => {
  addTodo(input);
  setInput("");
};

  const handleKeyDown = (e) => {
    if (e.key === "Enter") handleAdd();
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Add todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default AddTodo;

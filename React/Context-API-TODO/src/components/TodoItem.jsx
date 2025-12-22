import React, { useContext } from "react";
import { TodoContext } from "../context/TodoContext";


function TodoItem({ id }) {
const { todos, deleteTodo } = useContext(TodoContext);
const todo = todos.find(t => t.id === id);

if (!todo) return null;

return (
  <li>
    {todo.title}
    <button onClick={() => deleteTodo(id)}>Delete</button>
  </li>
);

}
export default TodoItem;

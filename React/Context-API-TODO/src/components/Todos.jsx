import React, { useState } from "react";
import { TodoContext } from "../context/TodoContext"; 
import AddTodo from "./AddTodo";
import TodoList from "./TodoList";


function Todos() {
  const [todos, setTodos] = useState([]);

  // Add a new todo with a unique id
  const addTodo = (title) => {
  if (!title.trim()) return;  // ignore empty strings
  setTodos(prev => [...prev, { id: Date.now(), title: title.trim() }]);
};


  // Delete todo by id
  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
  <AddTodo />
  <TodoList />
</TodoContext.Provider>

  );
}

export default Todos;

import { useEffect, useState } from "react";

const Todos = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  return (
    <>
      <h1>Todos</h1>
      <div className="todo-grid">
        {todos.map((todo) => (
          <div key={todo.id} className="todo-card">
            <h3>{todo.title}</h3>
            <p>
              Status:{" "}
              <span className={todo.completed ? "done" : "pending"}>
                {todo.completed ? "Completed" : "Not Completed"}
              </span>
            </p>
          </div>
        ))}
      </div>
    </>
  );
};

export default Todos;

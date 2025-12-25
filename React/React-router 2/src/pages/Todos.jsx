import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Todos = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then((res) => res.json())
      .then((data) => setTodos(data.slice(0, 10)));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Todos</h2>
      <button className="logout" onClick={handleLogout}>
        Logout
      </button>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li
            key={todo.id}
            onClick={() => navigate(`/todos/${todo.id}`)}
            className="todo-item"
          >
            {todo.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Todos;

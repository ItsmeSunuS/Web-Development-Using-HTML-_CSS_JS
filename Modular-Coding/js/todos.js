import { displayTodos } from './displayTodos.js';

// Protect route
if (localStorage.getItem("loggedIn") !== "true") {
  alert("You must login first!");
  window.location.href = "login.html";
}

fetch("https://jsonplaceholder.typicode.com/todos")
  .then(res => res.json())
  .then(data => {
    displayTodos(data.slice(0, 20));
  });

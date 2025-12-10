export function displayTodos(data) {
  const container = document.getElementById("todos");
  container.innerHTML = "";

  data.forEach(todo => {
    const div = document.createElement("div");
    div.style.border = "1px solid #ccc";
    div.style.margin = "5px";
    div.style.padding = "10px";

    div.innerHTML = `
      <strong>${todo.title}</strong><br>
      Completed: ${todo.completed}
    `;

    container.appendChild(div);
  });
}

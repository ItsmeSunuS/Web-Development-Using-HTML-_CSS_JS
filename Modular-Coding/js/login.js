document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const savedUser = JSON.parse(localStorage.getItem("user"));
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!savedUser) {
    alert("No user found! Signup first.");
    return;
  }

  if (username === savedUser.username && password === savedUser.password) {
    localStorage.setItem("loggedIn", "true");
    window.location.href = "todos.html";
  } else {
    alert("Incorrect username or password");
  }
});

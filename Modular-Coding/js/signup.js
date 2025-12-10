document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault();

  const user = {
    username: document.getElementById("username").value.trim(),
    password: document.getElementById("password").value.trim(),
  };

  localStorage.setItem("user", JSON.stringify(user));
  alert("Signup successful!");
  window.location.href = "login.html";
});

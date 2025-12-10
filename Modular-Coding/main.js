// modular-coding/main.js
import { Navbar } from './Components/navbar.js';
import { Footer } from './Components/footer.js';

document.addEventListener('DOMContentLoaded', () => {
  const app = document.getElementById('app');

  app.appendChild(Navbar());

  const content = document.createElement('main');
  content.innerHTML = `<h1>Welcome to the Modular JavaScript App!</h1>`;
  content.style.padding = '20px';
  app.appendChild(content);

  app.appendChild(Footer());
});

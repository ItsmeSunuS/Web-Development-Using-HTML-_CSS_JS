// modular-coding/components/navbar.js

export function Navbar() {
  const nav = document.createElement('nav');
  nav.style.padding = '10px';
  nav.style.background = '#333';
  nav.style.color = 'white';

  nav.innerHTML = `
    <ul style="display:flex; list-style:none; gap:15px; margin:0; padding:0;">
      <li><a href="#" style="color:white; text-decoration:none;">Home</a></li>
      <li><a href="#" style="color:white; text-decoration:none;">About</a></li>
      <li><a href="#" style="color:white; text-decoration:none;">Contact</a></li>
    </ul>
  `;

  return nav;
}

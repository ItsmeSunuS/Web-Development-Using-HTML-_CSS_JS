// modular-coding/components/footer.js

export function Footer() {
  const footer = document.createElement('footer');
  footer.style.padding = '10px';
  footer.style.background = '#222';
  footer.style.color = 'white';
  footer.style.marginTop = '20px';
  footer.style.textAlign = 'center';

  footer.innerHTML = `
    <p>© ${new Date().getFullYear()} My Modular App</p>
  `;

  return footer;
}

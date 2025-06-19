// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');

themeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  const icon = themeToggle.innerHTML === '🌙' ? '☀️' : '🌙';
  themeToggle.innerHTML = icon;
});

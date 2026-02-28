const root = document.documentElement;
const toggle = document.getElementById('theme-toggle');
const storedTheme = localStorage.getItem('theme');

if (storedTheme) {
  root.setAttribute('data-theme', storedTheme);
}

if (toggle) {
  const setIcon = () => {
    toggle.textContent = root.getAttribute('data-theme') === 'dark' ? '☀️' : '🌙';
  };

  setIcon();
  toggle.addEventListener('click', () => {
    const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    setIcon();
  });
}

const cards = document.querySelectorAll('.card');
if ('IntersectionObserver' in window) {
  const reveal = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    },
    { threshold: 0.12 }
  );

  cards.forEach((card) => reveal.observe(card));
} else {
  cards.forEach((card) => card.classList.add('visible'));
}

const path = window.location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a').forEach((link) => {
  const href = link.getAttribute('href');
  if (href === path) link.classList.add('active');
});

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

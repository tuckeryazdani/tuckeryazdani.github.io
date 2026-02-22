const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const storedTheme = localStorage.getItem('theme');

if (storedTheme) {
  root.setAttribute('data-theme', storedTheme);
  themeToggle.textContent = storedTheme === 'dark' ? '☀️' : '🌙';
}

themeToggle?.addEventListener('click', () => {
  const current = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', current);
  localStorage.setItem('theme', current);
  themeToggle.textContent = current === 'dark' ? '☀️' : '🌙';
});

window.addEventListener('load', () => {
  document.querySelector('.page-loader')?.classList.add('hidden');
});

const sections = [...document.querySelectorAll('main .section')];
const navLinks = [...document.querySelectorAll('.nav-links a')];

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.15 }
);

sections.forEach((section) => observer.observe(section));

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      navLinks.forEach((link) => {
        link.classList.toggle('active', link.getAttribute('href') === `#${entry.target.id}`);
      });
    });
  },
  { threshold: 0.45 }
);

sections.forEach((section) => navObserver.observe(section));

const filterButtons = [...document.querySelectorAll('.filter-btn')];
const cards = [...document.querySelectorAll('.project-card')];

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');

    cards.forEach((card) => {
      const technologies = card.dataset.tech || '';
      const visible = filter === 'all' || technologies.includes(filter);
      card.style.display = visible ? 'block' : 'none';
    });
  });
});

document.getElementById('year').textContent = new Date().getFullYear();

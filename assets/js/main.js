const root = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');
const themeColor = document.querySelector('meta[name="theme-color"]');
const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)');

const readStoredTheme = () => {
  try {
    return localStorage.getItem('theme');
  } catch {
    return null;
  }
};

const applyTheme = (theme, persist = false) => {
  root.setAttribute('data-theme', theme);
  if (themeToggle) {
    const nextTheme = theme === 'dark' ? 'light' : 'dark';
    themeToggle.setAttribute('aria-label', `Switch to ${nextTheme} theme`);
    themeToggle.setAttribute('title', `Switch to ${nextTheme} theme`);
  }
  if (themeColor) themeColor.setAttribute('content', theme === 'dark' ? '#091411' : '#f3f7f6');
  if (persist) {
    try {
      localStorage.setItem('theme', theme);
    } catch {
      // Theme still works when storage is unavailable.
    }
  }
};

applyTheme(readStoredTheme() || (darkModeQuery.matches ? 'dark' : 'light'));

themeToggle?.addEventListener('click', () => {
  applyTheme(root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark', true);
});

darkModeQuery.addEventListener?.('change', (event) => {
  if (!readStoredTheme()) applyTheme(event.matches ? 'dark' : 'light');
});

const navToggle = document.getElementById('nav-toggle');
const navigation = document.getElementById('primary-navigation');

const closeNavigation = () => {
  if (!navToggle || !navigation) return;
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.querySelector('.sr-only').textContent = 'Open navigation';
  navigation.classList.remove('is-open');
};

navToggle?.addEventListener('click', () => {
  if (!navigation) return;
  const willOpen = navToggle.getAttribute('aria-expanded') !== 'true';
  navToggle.setAttribute('aria-expanded', String(willOpen));
  navToggle.querySelector('.sr-only').textContent = willOpen ? 'Close navigation' : 'Open navigation';
  navigation.classList.toggle('is-open', willOpen);
});

navigation?.addEventListener('click', (event) => {
  if (event.target.closest('a')) closeNavigation();
});

document.addEventListener('click', (event) => {
  if (!navigation?.classList.contains('is-open')) return;
  if (!event.target.closest('.header-inner')) closeNavigation();
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && navigation?.classList.contains('is-open')) {
    closeNavigation();
    navToggle?.focus();
  }
});

window.addEventListener('resize', () => {
  if (window.innerWidth > 780) closeNavigation();
});

const currentPage = window.location.pathname.split('/').pop() || 'index.html';
const activePage = ['reddit-street-journal.html', 'twitter.html'].includes(currentPage) ? 'projects.html' : currentPage;
document.querySelectorAll('.nav-links a').forEach((link) => {
  if (link.getAttribute('href') === activePage) {
    link.classList.add('active');
    link.setAttribute('aria-current', 'page');
  }
});

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  root.classList.add('reveal-ready');
  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -8% 0px', threshold: 0.08 }
  );
  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('visible'));
}

const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

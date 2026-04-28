// shared/js/theme.js
// Theme-Toggle mit LocalStorage-Persistenz

let isInitialized = false;

export function initTheme() {
  if (isInitialized) return;
  isInitialized = true;

  const savedTheme = localStorage.getItem('kh-theme') || 'dark';
  applyTheme(savedTheme);

  // Event-Delegation für alle Theme-Toggle-Buttons
  document.body.addEventListener('click', (e) => {
    const btn = e.target.closest('.theme-toggle-btn, .theme-toggle-sidebar');
    if (!btn) return;
    
    const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);
  });
}

export function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('kh-theme', theme);

  // Alle Theme-Buttons aktualisieren
  document.querySelectorAll('.theme-toggle-btn, .theme-toggle-sidebar').forEach(btn => {
    const icon = btn.querySelector('i');
    const label = btn.querySelector('.theme-label, span:not(.status-dot)');
    
    if (icon) {
      icon.className = theme === 'dark' ? 'fas fa-sun' : 'fas fa-moon';
    }
    
    if (label && !label.classList.contains('status-dot')) {
      label.textContent = theme === 'dark' ? 'Light Mode' : 'Dark Mode';
    }
  });
}

export function getCurrentTheme() {
  return document.documentElement.getAttribute('data-theme') || 'dark';
}
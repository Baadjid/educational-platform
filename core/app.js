// core/app.js
// Haupt-App-Initialisierung

import { initSharedFeatures } from '../shared/js/index.js';
import { navbar } from '../components/Navbar.js';
import { sidebarHTML } from '../components/Sidebar.js';
import { i18n } from '../shared/js/i18n.js';
import { de, en, ru, es } from '../components/translation/translations.js';
import { initBackground } from '../shared/js/background.js';

export function initApp() {

  // Komponenten-Übersetzungen global laden (Sidebar, Footer, WimSection)
  i18n.load({ de, en, ru, es });

  // Navbar befüllen
  const navbarEl = document.getElementById('navbar');
  const navLogoArea = document.getElementById('navLogo');
  if (navbarEl && navLogoArea) {
    const currentPath = window.location.hash.slice(1) || '/';
    navbar.update(currentPath, '/');
    navbar.initEvents();
    
  }

  // Sidebar befüllen
  const sidebarEl = document.getElementById('sidebar');
  if (sidebarEl && sidebarEl.children.length === 0) {
    sidebarEl.innerHTML = sidebarHTML();
  }

  // Shared Features initialisieren
  initSharedFeatures();

  // i18n initialisieren — patcht Sidebar-Texte sofort
  i18n.init();

  // 🔥 Background global initialisieren (Cleanup-Funktion speichern)
  const canvasCleanup = initBackground();
  
  // Cleanup beim Seitenwechsel im Router speichern
  window.__canvasCleanup = canvasCleanup;
  
}
initApp();
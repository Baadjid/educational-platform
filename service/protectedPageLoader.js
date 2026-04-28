// service/protectedPageLoader.js
import { db }          from './firebase.js';
import { doc, getDoc } from 'firebase/firestore';
import { authService } from './authService.js';
import { gateOverlay } from './overlay.js';

export async function loadProtectedPage(pageId, containerElement, options = {}) {
  if (!authService.isLoggedIn()) {
    containerElement.innerHTML = '';
    gateOverlay.show(
      options.gateTitle   || 'Zugang gesperrt',
      options.gateMessage || 'Dieser Bereich ist nur für angemeldete Nutzer zugänglich.<br>Bitte melde dich an oder erstelle ein Konto.'
    );
    return false;
  }

  containerElement.innerHTML = '<div class="auth-spinner"></div>';

  try {
    const snap = await getDoc(doc(db, 'protectedPages', pageId));
    if (snap.exists()) {
      const data = snap.data();
      containerElement.innerHTML = `
        <h1>${escapeHtml(data.title ?? '')}</h1>
        <div class="protected-content">${data.content ?? ''}</div>`;
      return true;
    } else {
      containerElement.innerHTML = '<p class="text-muted">❌ Seite nicht gefunden.</p>';
      return false;
    }
  } catch (err) {
    console.error('[protectedPageLoader]', err);
    containerElement.innerHTML = '<p class="text-muted">⚠️ Fehler beim Laden.</p>';
    return false;
  }
}

function escapeHtml(str) {
  return String(str).replace(/[&<>"']/g, c =>
    ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c])
  );
}
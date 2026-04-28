// pages/projekte/lernzettel/faecher/informatik/themen/security/cryptography.js
// Informatik 13.1 — Symmetrische & asymmetrische Verschlüsselung

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderTags, renderInfobox, renderTable,
  renderFormulaBox, renderCompare, renderMerkboxGrid,
  initInteractive,
} from '../../../../js/components/components.js';
import { COLOR, COLOR_RGB, BASE } from '../../informatik.js';

function renderPageNav({ prev, next }) {
  return `<nav class="lz-page-nav">
    ${prev ? `<button class="lz-page-nav-btn lz-page-nav-btn--prev" data-link="${prev.link}"><i class="fas fa-arrow-left"></i><span>${prev.label}</span></button>` : '<div></div>'}
    <button class="lz-page-nav-btn lz-page-nav-btn--up" data-link="${BASE}"><i class="fas fa-th-large"></i><span>Übersicht</span></button>
    ${next ? `<button class="lz-page-nav-btn lz-page-nav-btn--next" data-link="${next.link}"><span>${next.label}</span><i class="fas fa-arrow-right"></i></button>` : '<div></div>'}
  </nav>`;
}

const NAV = {
  prev: { label: '12.3 Formale Sprachen', link: `${BASE}/themen/theoinf/formal-languages` },
  next: { label: '13.2 Hash & PKI', link: `${BASE}/themen/security/hash-pki` },
};

const TABS = [
  { key: 'symmetrisch', label: '🔒 Symmetrische Verschlüsselung (AES)' },
  { key: 'asymmetrisch',label: '🔐 Asymmetrische Verschlüsselung (RSA)' },
  { key: 'hybrid',      label: '🔁 Hybridverfahren & TLS' },
  { key: 'uebungen',    label: '✏ Übungen' },
];

export default class CryptographyPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-informatik-sub';
    if (!document.querySelector('link[href*="sub.css"]')) {
      const l = document.createElement('link'); l.rel = 'stylesheet';
      l.href = 'pages/projekte/lernzettel/styles/sub.css'; document.head.appendChild(l);
    }
    el.style.setProperty('--kap-color', COLOR); el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent', COLOR); el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html(); return el;
  }

  _html() {
    return `
      <section class="lz-sub-hero">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-hero-inner">
          <nav class="lz-sub-breadcrumb">
            <button class="lz-bread-link" data-nav-link="/projekte/lernzettel">Lernzettel</button>
            <i class="fas fa-chevron-right"></i>
            <button class="lz-bread-link" data-nav-link="${BASE}">Informatik</button>
            <i class="fas fa-chevron-right"></i>
            <span>13.1 · Kryptographie</span>
          </nav>
          <h1 class="lz-sub-title">Symmetrische & asymmetrische Verschlüsselung</h1>
          <p class="lz-sub-subtitle">AES, RSA, Hybridverschlüsselung, TLS</p>
          ${renderTags(['AES', 'RSA', 'symmetrisch', 'asymmetrisch', 'TLS', 'Hybrid'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="cryptoTabs" aria-label="Kryptographie">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelSymmetrisch()}
          ${this._panelAsymmetrisch()}
          ${this._panelHybrid()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelSymmetrisch() {
    return `<div class="wim-category active" data-wim-cat="symmetrisch">
      ${renderInfobox({ icon: 'fas fa-key', title: 'Symmetrische Verschlüsselung', type: 'info',
        body: `Gleicher Schlüssel zum Ver- und Entschlüsseln. <strong>Vorteil:</strong> Sehr schnell (GBit/s möglich). <strong>Nachteil:</strong> Schlüsselaustausch über sicheren Kanal nötig.
               Beispiele: AES, 3DES, ChaCha20.` })}
      <h4 class="lz-h4">AES – Advanced Encryption Standard</h4>
      ${renderTable({
        headers: ['Eigenschaft', 'Wert'],
        rows: [
          ['Schlüssellänge', '128, 192 oder 256 Bit'],
          ['Blockgröße', '128 Bit (16 Byte)'],
          ['Runden', '10 (128‑Bit), 12 (192‑Bit), 14 (256‑Bit)'],
          ['Algorithmus', 'Substitutions‑Permutations‑Netzwerk'],
          ['Betriebsmodi', 'ECB (unsicher!), CBC, CTR, GCM (mit Authentifizierung)'],
          ['Status', 'NIST‑Standard seit 2001, kein praktischer Angriff bekannt'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
AES‑Verschlüsselung (vereinfacht):
  - AddRoundKey: XOR mit Rundenschlüssel
  - SubBytes: S‑Box (Byteweise Substitution)
  - ShiftRows: Zeilen rotieren
  - MixColumns: Spalten mischen (nicht in letzter Runde)

Betriebsmodi (wichtig!):
  ECB (Electronic Codebook): Gleiche Klartextblöcke → gleiche Chiffreblöcke → unsicher.
  CBC (Cipher Block Chaining): XOR mit vorherigem Chiffreblock, benötigt IV.
  GCM (Galois/Counter Mode): Zählermodus + Authentifizierung (häufig in TLS).
</pre>
      <h4 class="lz-h4">Schlüsselaustauschproblem</h4>
      <p class="lz-prose">
        Alice und Bob müssen sich auf einen gemeinsamen geheimen Schlüssel einigen, ohne dass Eve mithört.
        Lösung: <strong>Diffie‑Hellman‑Schlüsselaustausch</strong> oder <strong>asymmetrische Kryptographie</strong> (RSA).
      </p>
    </div>`;
  }

  _panelAsymmetrisch() {
    return `<div class="wim-category hidden" data-wim-cat="asymmetrisch">
      <h3 class="lz-h3">Asymmetrische Verschlüsselung (Public‑Key‑Kryptographie)</h3>
      ${renderCompare({
        titleA: '🔑 Symmetrisch',
        titleB: '🔐 Asymmetrisch',
        listA: [
          'Gleicher Schlüssel',
          'Sehr schnell',
          'Problem: Schlüsselaustausch',
          'AES, ChaCha20',
        ],
        listB: [
          'Public Key (verschlüsseln), Private Key (entschlüsseln)',
          'Langsam (~1000× langsamer als AES)',
          'Kein sicherer Kanal nötig',
          'RSA, ECC, Diffie‑Hellman',
        ],
      })}
      <h4 class="lz-h4">RSA – Rivest‑Shamir‑Adleman (1977)</h4>
      ${renderFormulaBox({
        label: 'RSA – vereinfachter Ablauf',
        formula: `1. Wähle zwei große Primzahlen p, q
2. n = p × q  (öffentlicher Modul)
3. φ(n) = (p−1)(q−1)  (Euler'sche Funktion)
4. Wähle e: ggT(e, φ(n)) = 1  → Public Key = (e, n)
5. d = e⁻¹ mod φ(n)  → Private Key = (d, n)
Verschlüsseln: c = mᵉ mod n
Entschlüsseln: m = cᵈ mod n`,
        desc: 'Beispiel mit kleinen Zahlen: p=61, q=53 → n=3233, φ=3120, e=17, d=2753.',
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Sicherheit von RSA basiert auf dem <strong>Faktorisierungsproblem</strong>:
  Es ist einfach, zwei große Primzahlen zu multiplizieren (n = p·q).
  Es ist extrem schwer, aus n die Primfaktoren p und q zu berechnen.
  RSA‑2048 gilt heute als sicher (Faktorisierung würde tausende Jahre dauern).

Einsatz:
  - Verschlüsselung kleiner Daten (z.B. Session‑Keys)
  - Digitale Signaturen (verschlüsseln mit Private Key)
</pre>
    </div>`;
  }

  _panelHybrid() {
    return `<div class="wim-category hidden" data-wim-cat="hybrid">
      <h3 class="lz-h3">Hybridverschlüsselung – Das Beste aus beiden Welten</h3>
      ${renderInfobox({ icon: 'fas fa-exchange-alt', title: 'TLS‑Prinzip (z.B. HTTPS)', type: 'info',
        body: `Problem: RSA ist zu langsam für große Datenmengen. Lösung: Kombination aus asymmetrischer und symmetrischer Verschlüsselung.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Hybridverfahren (TLS‑Handshake vereinfacht):
1. Client erzeugt zufälligen symmetrischen Schlüssel (Session Key).
2. Session Key wird mit dem RSA‑Public‑Key des Servers verschlüsselt.
3. Server entschlüsselt Session Key mit seinem RSA‑Private‑Key.
4. Alle weiteren Daten werden mit AES (symmetrisch) verschlüsselt.

→ RSA für sicheren Schlüsselaustausch
→ AES für schnelle Datenverschlüsselung
</pre>
      <h4 class="lz-h4">TLS 1.3 – aktueller Standard</h4>
      ${renderTable({
        headers: ['Eigenschaft', 'TLS 1.3'],
        rows: [
          ['Handshake‑Dauer', '1‑Round‑Trip (früher 2)'],
          ['Verschlüsselung', 'AES‑GCM, ChaCha20‑Poly1305'],
          ['Schlüsselaustausch', 'ECDHE (Elliptic Curve Diffie‑Hellman)'],
          ['Authentifizierung', 'RSA oder ECDSA'],
          ['Sicherheit', 'Veraltete Algorithmen (RC4, 3DES, MD5) entfernt'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
TLS 1.3 Handshake (vereinfacht):
Client                                    Server
  │── ClientHello (KeyShare, Ciphers) ────▶│
  │◀── ServerHello + Certificate + Finished│
  ├── Finished (verschlüsselt) ────────────▶│
  ├── verschlüsselte Daten (AES) ──────────┤
</pre>
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Erkläre den Unterschied zwischen symmetrischer und asymmetrischer Verschlüsselung.',
          content: `Symmetrisch: gleicher Schlüssel für Ver- und Entschlüsselung → schnell, aber Schlüsselaustausch problematisch. Asymmetrisch: Schlüsselpaar (öffentlich/privat) → kein Schlüsselaustausch nötig, aber langsam.`,
        },
        {
          title: 'A2: Warum verwendet TLS eine Hybridverschlüsselung?',
          content: `Asymmetrische Verfahren (RSA, ECDH) sind zu langsam für große Datenmengen. Daher wird nur der symmetrische Session‑Key asymmetrisch ausgetauscht; die eigentlichen Daten werden mit AES (schnell) verschlüsselt.`,
        },
        {
          title: 'A3: Was ist der ECB‑Modus bei AES und warum ist er unsicher?',
          content: `ECB (Electronic Codebook) verschlüsselt jeden Block unabhängig. Gleiche Klartextblöcke erzeugen gleiche Chiffreblöcke → Muster bleiben sichtbar (z.B. bei Bildern). Moderne Modi wie CBC, CTR oder GCM verwenden einen Initialisierungsvektor (IV).`,
        },
        {
          title: 'A4: Welche Sicherheit bietet RSA‑2048 heute?',
          content: `RSA‑2048 gilt als sicher gegen klassische Computer. Die Faktorisierung von 2048‑Bit‑Zahlen wird auf tausende Jahre mit heutiger Technik geschätzt. Gegen Quantencomputer ist RSA jedoch nicht sicher (Shor‑Algorithmus).`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Kryptographie für die Prüfung', type: 'success',
        body: `• Symmetrisch: AES (schnell, gleicher Schlüssel).<br>
               • Asymmetrisch: RSA (langsam, Schlüsselpaar).<br>
               • Hybrid: RSA/ECDH für Schlüsselaustausch + AES für Daten.<br>
               • TLS: HTTPS, Handshake, Zertifikate.<br>
               • ECB unsicher → GCM, CBC, CTR bevorzugen.` })}
    </div>`;
  }

  init() {
    i18n.init(); initScrollReveal();
    initInteractive(document.querySelector('.page-informatik-sub'));
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => { if (btn.dataset.navLink) window.location.hash = btn.dataset.navLink; });
    });
    initWimTabs(document);
  }
}
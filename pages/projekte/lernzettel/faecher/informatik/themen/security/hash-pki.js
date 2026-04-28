// pages/projekte/lernzettel/faecher/informatik/themen/security/hash-pki.js
// Informatik 13.2 — Hashfunktionen, Signaturen & PKI

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderTags, renderInfobox, renderTable,
  renderMerkboxGrid, renderFormulaBox,
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
  prev: { label: '13.1 Kryptographie', link: `${BASE}/themen/security/cryptography` },
  next: { label: '13.3 Angriffe & Defense', link: `${BASE}/themen/security/attacks-defense` },
};

const TABS = [
  { key: 'hash',     label: '#️⃣ Hashfunktionen' },
  { key: 'signatur', label: '✍️ Digitale Signaturen' },
  { key: 'pki',      label: '🏛 PKI & Zertifikate' },
  { key: 'uebungen', label: '✏ Übungen' },
];

export default class HashPkiPage {
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
            <span>13.2 · Hash & PKI</span>
          </nav>
          <h1 class="lz-sub-title">Hashfunktionen, digitale Signaturen & PKI</h1>
          <p class="lz-sub-subtitle">SHA‑256, HMAC, Zertifikate, Chain of Trust</p>
          ${renderTags(['SHA-256', 'HMAC', 'digitale Signatur', 'PKI', 'X.509', 'CA'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="hashTabs" aria-label="Hash & PKI">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelHash()}
          ${this._panelSignatur()}
          ${this._panelPKI()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelHash() {
    return `<div class="wim-category active" data-wim-cat="hash">
      ${renderInfobox({ icon: 'fas fa-fingerprint', title: 'Kryptographische Hashfunktionen', type: 'info',
        body: `Eine Hashfunktion nimmt beliebige Eingaben und produziert einen <strong>festen Ausgabewert (Digest)</strong>.
               Eigenschaften: <strong>Einwegfunktion</strong> (nicht umkehrbar), <strong>kollisionsresistent</strong> (finde keine zwei verschiedenen Eingaben mit gleichem Hash),
               <strong>Lawineneffekt</strong> (kleine Änderung → komplett anderer Hash).` })}
      ${renderTable({
        headers: ['Algorithmus', 'Ausgabelänge', 'Status', 'Anwendung'],
        rows: [
          ['MD5', '128 Bit', '⚠ Gebrochen (Kollisionen bekannt)', 'Nicht mehr für Sicherheit'],
          ['SHA‑1', '160 Bit', '⚠ Geschwächt (ab 2017 nicht mehr empfohlen)', 'Git verwendet SHA‑1 (noch)'],
          ['SHA‑256', '256 Bit', '✅ Sicher', 'TLS, Bitcoin, Passwort‑Hashing (mit Salt)'],
          ['SHA‑512', '512 Bit', '✅ Sicher', 'Höchste Sicherheit, langsamer'],
          ['SHA‑3 (Keccak)', 'variable', '✅ Sicher', 'Alternative zu SHA‑2'],
          ['bcrypt', '192 Bit + Salt', '✅ Sehr sicher (bewusst langsam)', 'Passwort‑Hashing (gegen Brute‑Force)'],
          ['Argon2', 'variable', '✅ Gewinner PHC 2015', 'Moderner Standard für Passwörter'],
        ],
      })}
      <h4 class="lz-h4">HMAC – Hash‑basierte Nachrichtenauthentisierung</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
HMAC(K, m) = H((K ⊕ opad) || H((K ⊕ ipad) || m))
Kombiniert Hash + geheimen Schlüssel → Integrität + Authentizität.
Wird z.B. in TLS, JWT, AWS‑Signaturen verwendet.
</pre>
    </div>`;
  }

  _panelSignatur() {
    return `<div class="wim-category hidden" data-wim-cat="signatur">
      <h3 class="lz-h3">Digitale Signaturen – Authentizität & Integrität</h3>
      ${renderInfobox({ icon: 'fas fa-file-signature', title: 'Signieren mit Private Key, Verifizieren mit Public Key', type: 'info',
        body: `Eine digitale Signatur beweist, dass eine Nachricht von einer bestimmten Person stammt (Authentizität) und nicht verändert wurde (Integrität).` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Signaturerstellung (Sender):
  - Berechne Hash der Nachricht: h = H(m)
  - Verschlüssle h mit Private Key: sig = encrypt(h, K_pr)

Verifikation (Empfänger):
  - Berechne Hash der erhaltenen Nachricht: h' = H(m')
  - Entschlüssle Signatur mit Public Key: h_sig = decrypt(sig, K_pu)
  - Vergleiche h' == h_sig? → gültige Signatur

Typische Algorithmen: RSA‑PSS, ECDSA (Elliptic Curve), Ed25519.
</pre>
      <h4 class="lz-h4">Anwendung: Code‑Signing, E‑Mails (S/MIME, PGP), Blockchain</h4>
    </div>`;
  }

  _panelPKI() {
    return `<div class="wim-category hidden" data-wim-cat="pki">
      <h3 class="lz-h3">PKI – Public Key Infrastructure</h3>
      ${renderInfobox({ icon: 'fas fa-certificate', title: 'Problem: Wem gehört ein Public Key?', type: 'info',
        body: `PKI löst das Problem der Vertrauenswürdigkeit von Public Keys. Eine <strong>Certificate Authority (CA)</strong> signiert digitale Zertifikate.
               Browser und Betriebssysteme vertrauen einer Liste von Root‑CAs.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
X.509‑Zertifikat (Beispiel) enthält:
  - Domainname (Common Name, Subject Alternative Name): google.com
  - Public Key des Inhabers (z.B. RSA‑2048)
  - Gültigkeitszeitraum (Not Before, Not After)
  - Aussteller (CA): DigiCert Global Root G2
  - Seriennummer, Signaturalgorithmus
  - Signatur der CA (mit deren Private Key)

Vertrauenskette (Chain of Trust):
  Root CA (selbst‑signiert, im Browser/OS gespeichert)
    → Intermediate CA (von Root signiert)
      → End‑Entity‑Zertifikat (von Intermediate signiert)
</pre>
      ${renderTable({
        headers: ['Begriff', 'Bedeutung'],
        rows: [
          ['Root CA', 'Oberste CA, im Truststore des Betriebssystems/Browsers enthalten'],
          ['Intermediate CA', 'Wird von Root CA signiert, signiert End‑Entity‑Zertifikate (sicherer)'],
          ['CSR (Certificate Signing Request)', 'Anfrage einer Organisation an eine CA, ein Zertifikat auszustellen'],
          ['CRL (Certificate Revocation List)', 'Liste widerrufener Zertifikate (ungültig vor Ablauf)'],
          ['OCSP (Online Certificate Status Protocol)', 'Online‑Abfrage, ob Zertifikat gültig ist (Echtzeit)'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Beispiel für HTTPS (TLS):
  1. Browser verbindet zu https://example.com
  2. Server sendet sein Zertifikat (enthält Public Key)
  3. Browser prüft:
     - Zertifikat ist nicht abgelaufen
     - Zertifikat wurde von einer vertrauenswürdigen CA signiert (Chain)
     - Domainname passt
  4. Bei Erfolg: TLS‑Handshake mit dem Public Key (oder ECDH)
</pre>
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Nenne drei Eigenschaften kryptographischer Hashfunktionen.',
          content: `1. Einwegfunktion (nicht umkehrbar). 2. Kollisionsresistent (finde keine zwei Eingaben mit gleichem Hash). 3. Lawineneffekt (kleine Änderung → komplett anderer Hash).`,
        },
        {
          title: 'A2: Warum ist SHA‑1 nicht mehr sicher?',
          content: `Im Jahr 2017 wurde eine praktische Kollisionsattacke (SHAttered) veröffentlicht. Google und CWI erzeugten zwei verschiedene PDF‑Dateien mit gleichem SHA‑1‑Hash. Heute wird SHA‑256 oder SHA‑3 empfohlen.`,
        },
        {
          title: 'A3: Erkläre den Unterschied zwischen einem Hard Link und einem Soft Link? (Falsche Frage – hier: Was ist eine digitale Signatur?)',
          content: `Eine digitale Signatur wird mit dem Private Key des Senders erzeugt und mit dem Public Key verifiziert. Sie gewährleistet Authentizität (der Sender ist wirklich der Sender) und Integrität (Nachricht wurde nicht verändert).`,
        },
        {
          title: 'A4: Wozu dient eine Certificate Authority (CA)?',
          content: `Eine CA signiert digitale Zertifikate und bestätigt damit, dass der Public Key zu einer bestimmten Domain/Organisation gehört. Browser vertrauen Root‑CAs. Ohne CAs wäre Man‑in‑the‑Middle möglich.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Hash & PKI für die Prüfung', type: 'success',
        body: `• Hashfunktionen: SHA‑256 (sicher), MD5/SHA‑1 (gebrochen).<br>
               • HMAC: Hash + geheimer Schlüssel (Integrität + Authentizität).<br>
               • Digitale Signatur: Hash wird mit Private Key verschlüsselt.<br>
               • PKI: Zertifikate, CA, Chain of Trust, X.509.<br>
               • HTTPS prüft Zertifikat auf Gültigkeit und Vertrauen.` })}
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
// pages/projekte/lernzettel/faecher/informatik/themen/security/attacks-defense.js
// Informatik 13.3 — Angriffstechniken & Defense

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderTags, renderInfobox, renderTable,
  renderAccordion, renderMerkboxGrid, renderCompare,
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
  prev: { label: '13.2 Hash & PKI', link: `${BASE}/themen/security/hash-pki` },
  next: { label: '14.1 3D-Modellierung', link: `${BASE}/themen/grafik/3d-modelling` },
};

const TABS = [
  { key: 'injection', label: '💉 Injection (SQL, Command)' },
  { key: 'xss',       label: '🌐 XSS & CSRF' },
  { key: 'buffer',    label: '⚠ Buffer Overflow & Memory' },
  { key: 'defense',   label: '🛡 Defense Strategien' },
  { key: 'uebungen',  label: '✏ Übungen' },
];

export default class AttacksDefensePage {
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
            <span>13.3 · Angriffe & Defense</span>
          </nav>
          <h1 class="lz-sub-title">Angriffstechniken & Defense</h1>
          <p class="lz-sub-subtitle">SQL‑Injection, XSS, CSRF, Buffer Overflow, Schutzmaßnahmen</p>
          ${renderTags(['SQL-Injection', 'XSS', 'CSRF', 'Buffer Overflow', 'OWASP', 'Pentesting'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="attackTabs" aria-label="Angriffe & Defense">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelInjection()}
          ${this._panelXSS()}
          ${this._panelBuffer()}
          ${this._panelDefense()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelInjection() {
    return `<div class="wim-category active" data-wim-cat="injection">
      ${renderInfobox({ icon: 'fas fa-database', title: 'SQL‑Injection', type: 'warning',
        body: `Angreifer fügen SQL‑Code in Eingabefelder ein, um die ursprüngliche Abfrage zu manipulieren.
               Kann zu Datenverlust, Umgehung von Authentifizierung oder vollständiger Kompromittierung führen.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
// Verwundbarer Code (PHP)
$username = $_POST['username'];
$password = $_POST['password'];
$query = "SELECT * FROM users WHERE username='$username' AND password='$password'";
$result = mysqli_query($conn, $query);

// Angriff: username = ' OR '1'='1
// Resultierende Query: SELECT * FROM users WHERE username='' OR '1'='1' AND password='...'
// → Gibt ALLE Benutzer zurück (Login umgangen!)

// Sicher: Prepared Statements (Parameterisierung)
$stmt = $conn->prepare("SELECT * FROM users WHERE username=? AND password=?");
$stmt->bind_param("ss", $username, $password);
$stmt->execute();
</pre>
      <h4 class="lz-h4">Weitere Injection‑Arten</h4>
      ${renderTable({
        headers: ['Art', 'Beschreibung', 'Beispiel'],
        rows: [
          ['Command Injection', 'Einschleusen von Systembefehlen', '`; rm -rf /`'],
          ['LDAP Injection', 'Manipulation von LDAP‑Queries', '`*)(uid=*`'],
          ['NoSQL Injection', 'MongoDB‑Angriffe', '`{"$ne": null}`'],
        ],
      })}
    </div>`;
  }

  _panelXSS() {
    return `<div class="wim-category hidden" data-wim-cat="xss">
      <h3 class="lz-h3">Cross‑Site Scripting (XSS)</h3>
      ${renderInfobox({ icon: 'fas fa-code', title: 'Einschleusen von JavaScript', type: 'warning',
        body: `Angreifer injizieren Client‑seitigen Code (meist JavaScript) in Webseiten.
               Bei Ausführung kann der Angreifer Cookies stehlen, Session‑IDs abfangen oder die Seite manipulieren.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Arten von XSS:
  1. Reflected XSS: Der injizierte Code wird in der HTTP‑Antwort reflektiert (z.B. Suchanfrage).
     Beispiel: https://example.com/search?q=<script>stealCookies()</script>
  2. Stored XSS (Persistent): Code wird in der Datenbank gespeichert und bei jedem Besuch ausgeführt.
     Beispiel: Kommentarfeld mit <script>alert('XSS')</script>
  3. DOM‑based XSS: Manipulation des DOM durch client‑seitigen Code (ohne Serverbeteiligung).

Schutz:
  - HTML‑escapen von Benutzereingaben (& → &amp;, < → &lt;, > → &gt;)
  - Content Security Policy (CSP) Header: script-src 'self'
  - HttpOnly‑Flag für Cookies (verhindert Zugriff durch JavaScript)
</pre>
      <h4 class="lz-h4">CSRF – Cross‑Site Request Forgery</h4>
      <p class="lz-prose">
        Angreifer verleitet einen eingeloggten Benutzer dazu, eine ungewollte Anfrage an eine Webanwendung zu senden (z.B. Überweisung). Schutz: CSRF‑Token (zufälliges, formulargebundenes Token), SameSite‑Cookie‑Attribut.
      </p>
    </div>`;
  }

  _panelBuffer() {
    return `<div class="wim-category hidden" data-wim-cat="buffer">
      <h3 class="lz-h3">Buffer Overflow – Speicherkorruption</h3>
      ${renderInfobox({ icon: 'fas fa-memory', title: 'Klassischer Angriff auf C/C++‑Programme', type: 'warning',
        body: `Wenn mehr Daten in einen Puffer geschrieben werden, als er Platz hat, überschreiben sie benachbarte Speicherbereiche.
               Dadurch kann der Angreifer die Rücksprungadresse manipulieren und eigenen Code ausführen.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
// Verwundbarer Code (C)
void copy(char *input) {
    char buffer[64];
    strcpy(buffer, input);  // Keine Längenprüfung!
}

// Angriff: Eingabe länger als 64 Bytes → Überschreibt Stack.
// Mit präzise konstruierter Eingabe kann die Return‑Adresse überschrieben werden.

Schutzmechanismen:
  - Stack Canaries: Wert zwischen Puffer und Return‑Adresse, der vor Return geprüft wird.
  - ASLR (Address Space Layout Randomization): Zufällige Anordnung von Speicherbereichen.
  - DEP/NX (Data Execution Prevention): Stack nicht ausführbar.
  - Moderne Sprachen (Rust, Go, Java) sind speichersicher (keine direkte Zeigerarithmetik).
</pre>
    </div>`;
  }

  _panelDefense() {
    return `<div class="wim-category hidden" data-wim-cat="defense">
      <h3 class="lz-h3">Defense‑Strategien – Sicherer Code & Architektur</h3>
      ${renderTable({
        headers: ['Strategie', 'Beschreibung', 'Implementierung'],
        rows: [
          ['Input Validation', 'Alle Benutzereingaben prüfen, bevor sie verarbeitet werden', 'Whitelist, Typprüfung, Längenbegrenzung'],
          ['Output Encoding', 'Ausgaben kontextgerecht escapen', 'HTML‑, URL‑, JavaScript‑Encoding'],
          ['Prepared Statements', 'SQL‑Parameter getrennt von Query', 'PDO, parameterisierte Queries (verhindert SQL‑Injection)'],
          ['Least Privilege', 'Minimale Rechte für Prozesse und Benutzer', 'Datenbank‑User nur SELECT, kein DROP'],
          ['Defense in Depth', 'Mehrere unabhängige Sicherheitsschichten', 'Firewall + WAF + IDS + Verschlüsselung'],
          ['Security Headers', 'HTTP‑Header für Browsersicherheit', 'CSP, HSTS, X‑Frame‑Options, X‑Content‑Type‑Options'],
          ['Patch Management', 'Regelmäßige Updates', 'Automatisches Patching, CVE‑Monitoring'],
          ['Security Testing', 'SAST, DAST, Penetrationstests', 'OWASP ZAP, Burp Suite, Code‑Reviews'],
        ],
      })}
      <h4 class="lz-h4">OWASP Top 10 – Die kritischsten Web‑Sicherheitsrisiken</h4>
      <p class="lz-prose">
        OWASP (Open Web Application Security Project) veröffentlicht regelmäßig die Top 10 der häufigsten Schwachstellen.
        Aktuelle Liste (2021): Broken Access Control, Cryptographic Failures, Injection, Insecure Design, Security Misconfiguration, Vulnerable Components, Identification Failures, Software Integrity Failures, Monitoring Failures, SSRF.
      </p>
      ${renderMerkboxGrid([
        { icon: 'fas fa-user-secret', title: 'Pentesting', text: 'Ethisches Hacking: Mit Erlaubnis versuchen, Schwachstellen zu finden. Phasen: Reconnaissance → Scanning → Exploitation → Reporting.' },
        { icon: 'fas fa-eye', title: 'SIEM', text: 'Security Information and Event Management: Zentrale Logsammlung und Analyse auf Anomalien (Splunk, ELK).' },
      ])}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Wie funktioniert eine SQL‑Injection? Gib ein konkretes Beispiel.',
          content: `Angreifer gibt "' OR '1'='1" in ein Login‑Formular ein. Die Query wird zu "SELECT * FROM users WHERE username='' OR '1'='1'". Da "1=1" immer wahr ist, werden alle Benutzer zurückgegeben – der Angreifer wird ohne gültige Anmeldedaten eingeloggt.`,
        },
        {
          title: 'A2: Was ist der Unterschied zwischen reflektiertem und gespeichertem XSS?',
          content: `Reflektiert: Der injizierte Code wird sofort in der Serverantwort zurückgegeben (z.B. Suchanfrage). Der Angriff erfolgt über einen präparierten Link. Gespeichert (persistent): Der Code wird in der Datenbank gespeichert und bei jedem Aufruf der Seite ausgeführt (z.B. in Kommentaren).`,
        },
        {
          title: 'A3: Nenne drei Schutzmechanismen gegen Buffer Overflow.',
          content: `Stack Canaries (Prüfwert vor Return‑Adresse), ASLR (zufällige Adressraumlayout), DEP/NX (Stack nicht ausführbar).`,
        },
        {
          title: 'A4: Warum sind Prepared Statements gegen SQL‑Injection sicher?',
          content: `Bei Prepared Statements werden SQL‑Code und Daten getrennt übermittelt. Die Daten werden immer als Daten behandelt, niemals als SQL‑Code. Auch wenn die Daten SQL‑ähnliche Zeichen enthalten, werden sie escaped oder als Parameter gebunden.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Angriffe & Defense für die Prüfung', type: 'success',
        body: `• SQL‑Injection: Prepared Statements verhindern.<br>
               • XSS: Escaping, CSP, HttpOnly.<br>
               • CSRF: Tokens, SameSite‑Cookies.<br>
               • Buffer Overflow: Canaries, ASLR, DEP.<br>
               • Defense in Depth, OWASP Top 10.` })}
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
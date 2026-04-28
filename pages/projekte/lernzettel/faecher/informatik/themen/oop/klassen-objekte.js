// pages/projekte/lernzettel/faecher/informatik/themen/oop/klassen-objekte.js
// Informatik 5.1 — Klassen, Objekte & Kapselung

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }        from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderTags, renderInfobox, renderTable,
  renderAccordion, renderMerkboxGrid, renderFormulaBox, renderCompare,
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
  prev: { label: '4.6 Design Patterns', link: `${BASE}/themen/programmierung/design-patterns` },
  next: { label: '5.2 Vererbung & Polymorphie', link: `${BASE}/themen/oop/vererbung-polymorphie` },
};

const TABS = [
  { key: 'grundlagen', label: '📦 Grundlagen OOP' },
  { key: 'klasse',     label: '🏗 Klasse & Objekt' },
  { key: 'kapselung',  label: '🔒 Kapselung' },
  { key: 'konstruktor',label: '🏗 Konstruktor & Destruktor' },
  { key: 'uebungen',   label: '✏ Übungen' },
];

export default class KlassenObjektePage {
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
            <span>5.1 · Klassen & Objekte</span>
          </nav>
          <h1 class="lz-sub-title">Klassen, Objekte & Kapselung</h1>
          <p class="lz-sub-subtitle">OOP‑Grundlagen: Klasse, Objekt, Attribut, Methode, Kapselung, Konstruktor</p>
          ${renderTags(['OOP', 'Klasse', 'Objekt', 'Kapselung', 'Konstruktor', 'Destruktor', 'BPE 5'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="klassenTabs" aria-label="Klassen & Objekte">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelGrundlagen()}
          ${this._panelKlasse()}
          ${this._panelKapselung()}
          ${this._panelKonstruktor()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelGrundlagen() {
    return `<div class="wim-category active" data-wim-cat="grundlagen">
      ${renderInfobox({ icon: 'fas fa-shapes', title: 'Was ist objektorientierte Programmierung (OOP)?', type: 'info',
        body: `OOP ist ein Programmierparadigma, das Programme als <strong>Zusammenarbeit von Objekten</strong> modelliert.
               Jedes Objekt repräsentiert einen konkreten Gegenstand oder ein Konzept der realen Welt.
               Die vier Grundpfeiler der OOP sind: <strong>Kapselung, Vererbung, Polymorphie, Abstraktion</strong>.` })}
      <h3 class="lz-h3">Klasse vs. Objekt</h3>
      ${renderCompare({
        titleA: '📐 Klasse (Bauplan)',
        titleB: '🔧 Objekt (Instanz)',
        listA: [
          'Abstrakte Beschreibung',
          'Definiert Attribute (Daten) und Methoden (Funktionen)',
          'Existiert nur im Code (zur Compile‑Zeit)',
          'Wird einmal definiert',
          'Beispiel: `class Auto { ... };`',
        ],
        listB: [
          'Konkrete Ausprägung',
          'Hat konkrete Werte für Attribute',
          'Existiert im Speicher zur Laufzeit',
          'Kann viele Instanzen haben',
          'Beispiel: `auto meinAuto;`',
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Klasse = Bauplan</span>
<span style="color:#60a5fa;">class</span> Auto {
<span style="color:#60a5fa;">public</span>:
    <span style="color:#60a5fa;">string</span> marke;
    <span style="color:#60a5fa;">int</span> baujahr;
    <span style="color:#60a5fa;">void</span> hupen() { cout << <span style="color:#fbbf24;">"Huuup!"</span> << endl; }
};

<span style="color:#94a3b8;">// Objekte = Instanzen der Klasse</span>
Auto auto1;                <span style="color:#94a3b8;">// Objekt auto1</span>
auto1.marke = <span style="color:#fbbf24;">"VW"</span>;
auto1.baujahr = 2020;
auto1.hupen();             <span style="color:#94a3b8;">// Ausgabe: Huuup!</span>

Auto auto2;                <span style="color:#94a3b8;">// Zweites, unabhängiges Objekt</span>
auto2.marke = <span style="color:#fbbf24;">"BMW"</span>;
auto2.baujahr = 2022;
</pre>
    </div>`;
  }

  _panelKlasse() {
    return `<div class="wim-category hidden" data-wim-cat="klasse">
      <h3 class="lz-h3">Aufbau einer Klasse in C++</h3>
      ${renderTable({
        headers: ['Bestandteil', 'Syntax', 'Beschreibung'],
        rows: [
          ['Attribute (Membervariablen)', '<code>typ name;</code>', 'Speichern den Zustand eines Objekts'],
          ['Methoden (Memberfunktionen)', '<code>rückgabe name(parameter) { ... }</code>', 'Definieren das Verhalten'],
          ['Zugriffsspezifizierer', '<code>public:</code>, <code>private:</code>, <code>protected:</code>', 'Steuern Sichtbarkeit von außen'],
          ['Konstruktor', '<code>ClassName(parameter) { ... }</code>', 'Wird bei Objekterzeugung aufgerufen'],
          ['Destruktor', '<code>~ClassName() { ... }</code>', 'Wird bei Objektzerstörung aufgerufen'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">class</span> LED {
<span style="color:#60a5fa;">private</span>:
    <span style="color:#60a5fa;">int</span> pin;
    <span style="color:#60a5fa;">bool</span> istAn;
<span style="color:#60a5fa;">public</span>:
    LED(<span style="color:#60a5fa;">int</span> p) : pin(p), istAn(false) {      <span style="color:#94a3b8;">// Konstruktor mit Initialisierungsliste</span>
        pinMode(pin, OUTPUT);
    }
    <span style="color:#60a5fa;">void</span> an() {
        digitalWrite(pin, HIGH);
        istAn = true;
    }
    <span style="color:#60a5fa;">void</span> aus() {
        digitalWrite(pin, LOW);
        istAn = false;
    }
    <span style="color:#60a5fa;">bool</span> status() { <span style="color:#60a5fa;">return</span> istAn; }
};

<span style="color:#94a3b8;">// Verwendung</span>
LED led13(13);
led13.an();
delay(1000);
led13.aus();
</pre>
    </div>`;
  }

  _panelKapselung() {
    return `<div class="wim-category hidden" data-wim-cat="kapselung">
      <h3 class="lz-h3">Kapselung (Encapsulation)</h3>
      ${renderInfobox({ icon: 'fas fa-lock', title: 'Prinzip: Daten verstecken, Schnittstellen anbieten', type: 'info',
        body: `Kapselung bedeutet, dass <strong>Attribute einer Klasse nach außen verborgen</strong> werden (private/protected).
               Der Zugriff erfolgt nur über öffentliche Methoden (Getter/Setter). Vorteile:
               <strong>Datenintegrität</strong> (Werte können geprüft werden), <strong>Wartbarkeit</strong> (interne Änderungen ohne Einfluss auf Nutzer).` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">class</span> Konto {
<span style="color:#60a5fa;">private</span>:
    <span style="color:#60a5fa;">double</span> kontostand;   <span style="color:#94a3b8;">// direkt nicht von außen zugreifbar</span>
<span style="color:#60a5fa;">public</span>:
    Konto() : kontostand(0.0) {}
    
    <span style="color:#94a3b8;">// Setter mit Prüfung (Datenintegrität)</span>
    <span style="color:#60a5fa;">bool</span> einzahlen(<span style="color:#60a5fa;">double</span> betrag) {
        <span style="color:#60a5fa;">if</span> (betrag <= 0) <span style="color:#60a5fa;">return false</span>;
        kontostand += betrag;
        <span style="color:#60a5fa;">return true</span>;
    }
    <span style="color:#60a5fa;">bool</span> abheben(<span style="color:#60a5fa;">double</span> betrag) {
        <span style="color:#60a5fa;">if</span> (betrag <= 0 || betrag > kontostand) <span style="color:#60a5fa;">return false</span>;
        kontostand -= betrag;
        <span style="color:#60a5fa;">return true</span>;
    }
    <span style="color:#94a3b8;">// Getter (nur lesender Zugriff)</span>
    <span style="color:#60a5fa;">double</span> getKontostand() { <span style="color:#60a5fa;">return</span> kontostand; }
};

<span style="color:#94a3b8;">// Nutzung</span>
Konto meinKonto;
meinKonto.einzahlen(100.0);
meinKonto.abheben(30.0);
cout << meinKonto.getKontostand();   <span style="color:#94a3b8;">// 70.0</span>
<span style="color:#94a3b8;">// meinKonto.kontostand = 10000;  // Fehler! private</span>
</pre>
      ${renderTable({
        headers: ['Zugriffsspezifizierer', 'Zugriff von innerhalb der Klasse', 'Zugriff von abgeleiteten Klassen', 'Zugriff von außen'],
        rows: [
          ['<code>private</code>', 'Ja', 'Nein', 'Nein'],
          ['<code>protected</code>', 'Ja', 'Ja', 'Nein'],
          ['<code>public</code>', 'Ja', 'Ja', 'Ja'],
        ],
      })}
    </div>`;
  }

  _panelKonstruktor() {
    return `<div class="wim-category hidden" data-wim-cat="konstruktor">
      <h3 class="lz-h3">Konstruktoren & Destruktoren</h3>
      ${renderInfobox({ icon: 'fas fa-hammer', title: 'Konstruktor', type: 'info',
        body: `Wird automatisch beim Erstellen eines Objekts aufgerufen. Initialisiert Attribute, allokiert Ressourcen.
               <strong>Name = Klassenname</strong>, kein Rückgabetyp. Kann überladen werden (mehrere Konstruktoren).
               <strong>Default‑Konstruktor:</strong> ohne Parameter. Wenn kein Konstruktor definiert, erzeugt Compiler einen leeren.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">class</span> Sensor {
<span style="color:#60a5fa;">private</span>:
    <span style="color:#60a5fa;">int</span> pin;
    <span style="color:#60a5fa;">float</span> offset;
<span style="color:#60a5fa;">public</span>:
    <span style="color:#94a3b8;">// Standardkonstruktor</span>
    Sensor() : pin(A0), offset(0.0) {}
    
    <span style="color:#94a3b8;">// Konstruktor mit Parametern</span>
    Sensor(<span style="color:#60a5fa;">int</span> p, <span style="color:#60a5fa;">float</span> off) : pin(p), offset(off) {}
    
    <span style="color:#94a3b8;">// Initialisierungsliste ist effizienter als Zuweisung im Rumpf</span>
    <span style="color:#60a5fa;">float</span> lesen() { <span style="color:#60a5fa;">return</span> analogRead(pin) * 5.0 / 1023.0 + offset; }
    
    <span style="color:#94a3b8;">// Destruktor (wird bei Zerstörung aufgerufen)</span>
    ~Sensor() {
        <span style="color:#94a3b8;">// Aufräumarbeiten, z.B. close() Datei, free() Speicher</span>
        Serial.println(<span style="color:#fbbf24;">"Sensor zerstört"</span>);
    }
};

<span style="color:#94a3b8;">// Verschiedene Konstruktoraufrufe</span>
Sensor s1;                  <span style="color:#94a3b8;">// Standardkonstruktor (pin=A0, offset=0)</span>
Sensor s2(A1, 0.5);         <span style="color:#94a3b8;">// Konstruktor mit Parametern</span>
Sensor* s3 = <span style="color:#60a5fa;">new</span> Sensor(A2);   <span style="color:#94a3b8;">// dynamisch – Destruktor muss mit delete aufgerufen werden</span>
<span style="color:#60a5fa;">delete</span> s3;                   <span style="color:#94a3b8;">// ruft Destruktor auf</span>
</pre>
      ${renderInfobox({ icon: 'fas fa-trash-alt', title: 'Destruktor', type: 'info',
        body: `Wird automatisch aufgerufen, wenn ein Objekt den Gültigkeitsbereich verlässt (lokal) oder <code>delete</code> aufgerufen wird (Heap).
               Name: <code>~Klassenname()</code>. Meist virtuell (wichtig bei Vererbung).
               Dient zum Freigeben von Ressourcen (Speicher, Dateien, Sockets).` })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Entwirf eine Klasse `Uhr`, die Stunden, Minuten und Sekunden speichert. Implementiere Methoden `setTime()` und `printTime()`.',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;">
class Uhr {
private:
    int stunden, minuten, sekunden;
public:
    void setTime(int h, int m, int s) {
        if (h >= 0 && h < 24) stunden = h;
        if (m >= 0 && m < 60) minuten = m;
        if (s >= 0 && s < 60) sekunden = s;
    }
    void printTime() {
        cout << stunden << ":" << minuten << ":" << sekunden << endl;
    }
};
</pre>`,
        },
        {
          title: 'A2: Erkläre den Unterschied zwischen einer Klasse und einem Objekt.',
          content: `Eine Klasse ist der <strong>Bauplan / Datentyp</strong>, der Attribute und Methoden definiert.
          Ein Objekt ist eine <strong>konkrete Instanz</strong> dieser Klasse, die im Speicher existiert.
          Man kann von einer Klasse beliebig viele Objekte erzeugen.`,
        },
        {
          title: 'A3: Warum sollte man Attribute privat halten?',
          content: `• <strong>Datenintegrität:</strong> Setter können Werte validieren (z.B. negative Kontostände verhindern).<br>
          • <strong>Wartbarkeit:</strong> Interne Änderungen (z.B. Umstellung von double auf int) brechen nicht den Code der Nutzer.<br>
          • <strong>Kapselung:</strong> Das Objekt kontrolliert seinen Zustand selbst.`,
        },
        {
          title: 'A4: Was ist die Initialisierungsliste im Konstruktor? Wozu dient sie?',
          content: `Die Initialisierungsliste steht nach dem Konstruktor‑Prototyp (<code>: member1(wert1), member2(wert2)</code>).
          Sie initialisiert Membervariablen <strong>vor</strong> dem Betreten des Konstruktorrumpfs.
          Vorteil: Effizienter (direkte Initialisierung statt Standard‑Initialisierung + Zuweisung).
          Notwendig für <code>const</code>‑Member und Referenzen.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Klassen & Objekte für die Prüfung', type: 'success',
        body: `• Klasse = Bauplan, Objekt = Instanz.<br>
               • Attribute → Zustand, Methoden → Verhalten.<br>
               • Kapselung: private Attribute, public Getter/Setter.<br>
               • Konstruktor: Initialisierung, Destruktor: Aufräumen.<br>
               • Zugriffsspezifizierer: private, protected, public.` })}
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
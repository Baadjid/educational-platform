// pages/projekte/lernzettel/faecher/informatik/themen/oop/uml.js
// Informatik 5.3 — UML-Diagramme (Klassen-, Objekt-, Sequenzdiagramm)

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
  prev: { label: '5.2 Vererbung & Polymorphie', link: `${BASE}/themen/oop/vererbung-polymorphie` },
  next: { label: '5.4 SOLID-Prinzipien', link: `${BASE}/themen/oop/solid` },
};

const TABS = [
  { key: 'klassendiagramm', label: '📊 Klassendiagramm' },
  { key: 'objektdiagramm',  label: '🔷 Objektdiagramm' },
  { key: 'sequenzdiagramm', label: '🔄 Sequenzdiagramm' },
  { key: 'beziehungen',     label: '🔗 Beziehungen' },
  { key: 'uebungen',        label: '✏ Übungen' },
];

export default class UmlPage {
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
            <span>5.3 · UML-Diagramme</span>
          </nav>
          <h1 class="lz-sub-title">UML — Klassen-, Objekt-, Sequenzdiagramm</h1>
          <p class="lz-sub-subtitle">Unified Modeling Language – Notation für objektorientierte Analyse & Design</p>
          ${renderTags(['UML', 'Klassendiagramm', 'Objektdiagramm', 'Sequenzdiagramm', 'Assoziation', 'BPE 5'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="umlTabs" aria-label="UML">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelKlassendiagramm()}
          ${this._panelObjektdiagramm()}
          ${this._panelSequenzdiagramm()}
          ${this._panelBeziehungen()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelKlassendiagramm() {
    return `<div class="wim-category active" data-wim-cat="klassendiagramm">
      ${renderInfobox({ icon: 'fas fa-diagram-project', title: 'Klassendiagramm – Struktur des Systems', type: 'info',
        body: `Das Klassendiagramm zeigt die <strong>statische Struktur</strong> eines Systems: Klassen, Attribute, Methoden und Beziehungen.
               Es ist das wichtigste Diagramm in der OOA/OOD (Objektorientierte Analyse/Design). Hilft bei der Kommunikation und Dokumentation.` })}
      <h3 class="lz-h3">Notation einer Klasse</h3>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.8;">
┌─────────────────────────┐
│        Klasse           │  ← Klassenname (fett, zentriert)
├─────────────────────────┤
│ - attribut: Typ         │  ← Attribute (Sichtbarkeit Name: Typ)
│ + methode(param): Rückg.│  ← Methoden
└─────────────────────────┘

Sichtbarkeiten:
  + = public
  - = private
  # = protected
  ~ = package (default)

Beispiel:
┌─────────────────────────┐
│        Auto             │
├─────────────────────────┤
│ - marke: String         │
│ - baujahr: int          │
│ - geschwindigkeit: int  │
├─────────────────────────┤
│ + Auto(marke: String)   │
│ + beschleunigen(wert:int)│
│ + bremsen(wert:int)     │
│ + getGeschw(): int      │
└─────────────────────────┘
</pre>
      <h4 class="lz-h4">Beziehungstypen im Klassendiagramm</h4>
      ${renderTable({
        headers: ['Beziehung', 'Notation', 'Bedeutung'],
        rows: [
          ['Assoziation', '───>', 'Objekt kennt anderes Objekt (z.B. Auto besitzt Motor)'],
          ['Komposition', '◆───>', 'Teil gehört exklusiv zum Ganzen, Lebenszyklus abhängig (Auto → Räder)'],
          ['Aggregation', '◇───>', 'Teil kann auch allein existieren (Auto → Fahrer)'],
          ['Vererbung', '────▷', 'Subklasse erbt von Superklasse (Auto erbt Fahrzeug)'],
          ['Abhängigkeit', '- - - >', 'Nutzt temporär (z.B. Methode nutzt Parameter einer anderen Klasse)'],
        ],
      })}
    </div>`;
  }

  _panelObjektdiagramm() {
    return `<div class="wim-category hidden" data-wim-cat="objektdiagramm">
      <h3 class="lz-h3">Objektdiagramm – Konkrete Instanzen zur Laufzeit</h3>
      ${renderInfobox({ icon: 'fas fa-cube', title: 'Momentaufnahme des Speichers', type: 'info',
        body: `Das Objektdiagramm zeigt <strong>konkrete Objekte</strong> (Instanzen) und deren Beziehungen zu einem bestimmten Zeitpunkt.
               Es ist eine Instanz des Klassendiagramms. Nützlich zur Veranschaulichung von Szenarien.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.8;">
Objektnotation:
┌─────────────────────────┐
│     objektName:Klasse   │  ← Name:Klasse (unterstrichen)
├─────────────────────────┤
│ attribut = wert         │
│ attribut2 = wert2       │
└─────────────────────────┘

Beispiel:
┌──────────────┐    ┌──────────────┐
│ meinAuto:Auto│    │ motor:Motor  │
├──────────────┤    ├──────────────┤
│ marke="VW"   │───▶│ leistung=150 │
│ baujahr=2020 │    │ typ="Benzin" │
└──────────────┘    └──────────────┘
</pre>
      <p class="lz-prose">
        Objektdiagramme werden oft in Prüfungen abgefragt, um zu testen, ob man Beziehungen und Zustände verstanden hat.
      </p>
    </div>`;
  }

  _panelSequenzdiagramm() {
    return `<div class="wim-category hidden" data-wim-cat="sequenzdiagramm">
      <h3 class="lz-h3">Sequenzdiagramm – Zeitlicher Ablauf von Interaktionen</h3>
      ${renderInfobox({ icon: 'fas fa-exchange-alt', title: 'Nachrichten zwischen Objekten', type: 'info',
        body: `Das Sequenzdiagramm zeigt die <strong>zeitliche Reihenfolge</strong> von Nachrichten zwischen Objekten.
               Jedes Objekt hat eine <strong>Lebenslinie</strong> (gestrichelte Linie). Pfeile sind Nachrichten (Methodenaufrufe).
               Aktivierungsbalken zeigen, wann ein Objekt aktiv ist.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.8;">
sd LoginSequence

Benutzer :         LoginController :   UserDB :
─────────          ────────────────    ────────
   │                       │               │
   │  login(user, pwd)     │               │
   │──────────────────────▶│               │
   │                       │  checkUser()  │
   │                       │──────────────▶│
   │                       │               │
   │                       │    valid      │
   │                       │◀──────────────│
   │                       │               │
   │       Erfolg          │               │
   │◀──────────────────────│               │
   │                       │               │

Erklärung:
  - Benutzer (Akteur) ruft login() auf dem LoginController auf.
  - Controller ruft checkUser() in der Datenbank auf.
  - Datenbank antwortet mit "valid".
  - Controller antwortet dem Benutzer mit "Erfolg".
</pre>
      ${renderTable({
        headers: ['Element', 'Notation', 'Bedeutung'],
        rows: [
          ['Lebenslinie', '┌───┐ │ (gestrichelt)', 'Existenz eines Objekts über Zeit'],
          ['Aktivierungsbalken', 'dünnes Rechteck auf Lebenslinie', 'Zeit, in der das Objekt aktiv ist'],
          ['Nachricht (synchron)', '───▶ (gefüllte Pfeilspitze)', 'Aufruf einer Methode, wartet auf Rückkehr'],
          ['Nachricht (asynchron)', '───▷ (offene Pfeilspitze)', 'Absenden einer Nachricht, ohne zu warten'],
          ['Rückkehr', '- - - ▶ (gestrichelt)', 'Rückgabe des Ergebnisses (optional)'],
          ['Selbstaufruf', 'Pfeil auf sich selbst', 'Methode ruft eigene Methode auf'],
          ['Erzeugung', '- - - ▷ <<create>>', 'Erzeugt ein neues Objekt'],
          ['Zerstörung', '✗ am Ende der Lebenslinie', 'Löscht das Objekt'],
        ],
      })}
    </div>`;
  }

  _panelBeziehungen() {
    return `<div class="wim-category hidden" data-wim-cat="beziehungen">
      <h3 class="lz-h3">Beziehungen im Detail – Multiplizitäten & Navigierbarkeit</h3>
      ${renderTable({
        headers: ['Beziehung', 'Symbol', 'Multiplizität', 'Beispiel'],
        rows: [
          ['Assoziation', '────', '1, 0..1, *, 1..*', 'Auto besitzt Motor (1:1)'],
          ['Komposition', '◆────', 'Ganzes (1) – Teile (*)', 'Auto besteht aus Rädern (4)'],
          ['Aggregation', '◇────', 'Ganzes (1) – Teile (*)', 'Auto hat Fahrer (0..1)'],
          ['Vererbung', '────▷', '—', 'Auto ist ein Fahrzeug'],
          ['Abhängigkeit', '- - - >', '—', 'Auto verwendet Werkzeug (temporär)'],
        ],
      })}
      <h4 class="lz-h4">Multiplizitäten (Kardinalitäten)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.8;">
1          = genau ein
0..1       = null oder eins
*          = beliebig viele (0..∞)
1..*       = mindestens eins
2..4       = zwei bis vier
</pre>
      ${renderInfobox({ icon: 'fas fa-arrows-alt', title: 'Navigierbarkeit', type: 'info',
        body: `Ein Pfeil an einem Ende einer Assoziation zeigt die <strong>Navigationsrichtung</strong> an.
               <code>───▶</code> bedeutet: Von Klasse A kann man zu Klasse B gelangen.
               Ohne Pfeil ist die Assoziation bidirektional (selten). Oft verwendet man gerichtete Assoziationen.` })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Zeichne ein Klassendiagramm für die Beziehung: Eine Bibliothek hat viele Bücher. Ein Buch hat genau einen Autor. Ein Autor kann mehrere Bücher schreiben.',
          content: `Klassen: Bibliothek, Buch, Autor.<br>
          Assoziationen:<br>
          Bibliothek "1" ─── "*" Buch (Komposition oder Aggregation? – Bibliothek existiert ohne Buch? Eher Aggregation)<br>
          Buch "*" ─── "1" Autor (Assoziation)<br>
          Attributbeispiele: Buch (Titel, ISBN), Autor (Name, Geburtsjahr).`,
        },
        {
          title: 'A2: Erstelle ein Sequenzdiagramm für den Vorgang "Kunde bestellt Produkt in Online-Shop". Beteiligte: Kunde, BestellController, Bestellung, Lager.',
          content: `1. Kunde → BestellController: bestelle(produktID, menge)<br>
          2. BestellController → Lager: prüfeVerfügbarkeit(produktID, menge)<br>
          3. Lager → BestellController: verfügbar = true<br>
          4. BestellController → Bestellung: neu(produktID, menge)<br>
          5. Bestellung → BestellController: bestellNr<br>
          6. BestellController → Kunde: bestätigung(bestellNr)`,
        },
        {
          title: 'A3: Was ist der Unterschied zwischen Komposition und Aggregation?',
          content: `• <strong>Komposition:</strong> Das Teil gehört exklusiv zum Ganzen. Wenn das Ganze gelöscht wird, werden auch die Teile gelöscht. (Lebenszyklus abhängig). Beispiel: Auto → Räder.<br>
          • <strong>Aggregation:</strong> Das Teil kann auch ohne das Ganze existieren. Beispiel: Auto → Fahrer (Fahrer kann auch zu Fuß gehen).`,
        },
        {
          title: 'A4: Warum wird ein Klassendiagramm oft vor dem Programmieren erstellt?',
          content: `Es hilft, die Systemstruktur zu verstehen, Beziehungen zu klären, Verantwortlichkeiten zu verteilen.
          Fehler im Design werden früh erkannt, noch bevor Code geschrieben wird.
          Dient als Kommunikationsmittel zwischen Entwicklern und Fachexperten (Kunden).`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'UML für die Prüfung', type: 'success',
        body: `• Klassendiagramm: Struktur – Klassen, Attribute, Methoden, Beziehungen (Assoziation, Vererbung, Komposition).<br>
               • Objektdiagramm: Instanzen zur Laufzeit – konkrete Werte.<br>
               • Sequenzdiagramm: Zeitlicher Ablauf – Nachrichten zwischen Objekten.<br>
               • Multiplizitäten: 1, 0..1, *, 1..* – genau verstehen.<br>
               • Sichtbarkeiten: + (public), - (private), # (protected).` })}
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
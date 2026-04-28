// pages/projekte/lernzettel/faecher/informatik/themen/oop/solid.js
// Informatik 5.4 — SOLID-Prinzipien & fortgeschrittene OOP-Konzepte

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
  prev: { label: '5.3 UML-Diagramme', link: `${BASE}/themen/oop/uml` },
  next: { label: '6.1 OSI & TCP/IP', link: `${BASE}/themen/netzwerke/osi-tcpip` },
};

const TABS = [
  { key: 'solid',      label: '🧱 SOLID-Prinzipien' },
  { key: 'weitere',    label: '📚 Weitere Prinzipien' },
  { key: 'antipattern',label: '⚠ Antipattern & Code‑Smells' },
  { key: 'uebungen',   label: '✏ Übungen' },
];

export default class SolidPage {
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
            <span>5.4 · SOLID-Prinzipien</span>
          </nav>
          <h1 class="lz-sub-title">SOLID-Prinzipien & fortgeschrittene OOP-Konzepte</h1>
          <p class="lz-sub-subtitle">Single Responsibility, Open/Closed, Liskov Substitution, Interface Segregation, Dependency Inversion</p>
          ${renderTags(['SOLID', 'SRP', 'OCP', 'LSP', 'ISP', 'DIP', 'Clean Architecture', 'BPE 5'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="solidTabs" aria-label="SOLID">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelSOLID()}
          ${this._panelWeitere()}
          ${this._panelAntipattern()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelSOLID() {
    return `<div class="wim-category active" data-wim-cat="solid">
      ${renderInfobox({ icon: 'fas fa-gem', title: 'SOLID – Fünf Grundprinzipien des objektorientierten Designs', type: 'info',
        body: `SOLID wurde von Robert C. Martin (Uncle Bob) formuliert und ist die Grundlage für wartbare, erweiterbare und testbare Software.
               Jeder Buchstabe steht für ein Prinzip.` })}
      <h3 class="lz-h3">Die fünf SOLID-Prinzipien</h3>
      ${renderAccordion([
        {
          title: 'S – Single Responsibility Principle (SRP)',
          content: `Eine Klasse sollte nur <strong>einen Grund zur Änderung</strong> haben, also genau eine Aufgabe erfüllen.
          <strong>Schlecht:</strong> Eine Klasse "Report" generiert PDF, speichert in DB und sendet E‑Mail.<br>
          <strong>Gut:</strong> Aufteilen in "ReportGenerator", "ReportRepository", "EmailService".`,
        },
        {
          title: 'O – Open/Closed Principle (OCP)',
          content: `Klassen sollten <strong>offen für Erweiterung, aber geschlossen für Modifikation</strong> sein.
          Neue Funktionalität durch Vererbung oder Komposition, nicht durch Ändern bestehenden Codes.
          <strong>Beispiel:</strong> Strategie‑Pattern: "Discount" abstrakte Klasse, konkrete Strategien "PercentageDiscount", "FixedDiscount".`,
        },
        {
          title: 'L – Liskov Substitution Principle (LSP)',
          content: `Objekte einer abgeleiteten Klasse müssen sich <strong>ohne Seiteneffekte durch Objekte der Basisklasse ersetzen</strong> lassen.
          Eine Subklasse darf die Erwartungen der Basisklasse nicht verletzen (z.B. stärkere Vorbedingungen, schwächere Nachbedingungen).
          <strong>Verletzung:</strong> "Rechteck" → "Quadrat" (Setzen der Breite ändert indirekt die Höhe).`,
        },
        {
          title: 'I – Interface Segregation Principle (ISP)',
          content: `Keine "dicken" Schnittstellen. Besser viele <strong>spezifische, schlanke Interfaces</strong> als ein allgemeines.
          Clients sollten nicht von Methoden abhängig sein, die sie nicht nutzen.
          <strong>Beispiel:</strong> Statt "AllInOnePrinter" mit "print()", "scan()", "fax()" lieber "Print", "Scan", "Fax" separieren.`,
        },
        {
          title: 'D – Dependency Inversion Principle (DIP)',
          content: `Abstraktionen sollten nicht von Details abhängen, sondern <strong>Details von Abstraktionen</strong>.
          Hochrangige Module importieren keine niedrigrangigen Module – beide importieren Abstraktionen.
          <strong>Umsetzung:</strong> Abhängigkeiten über Schnittstellen (Dependency Injection).`,
        },
      ])}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Beispiel Dependency Inversion (DIP)</span>
<span style="color:#94a3b8;">// Schlecht: High‑Level‑Klasse abhängig von konkreter Low‑Level‑Klasse</span>
<span style="color:#60a5fa;">class</span> LightBulb { <span style="color:#60a5fa;">public:</span> <span style="color:#60a5fa;">void</span> turnOn() { /* ... */ } };
<span style="color:#60a5fa;">class</span> Switch {
    LightBulb bulb;
<span style="color:#60a5fa;">public</span>:
    <span style="color:#60a5fa;">void</span> operate() { bulb.turnOn(); }   <span style="color:#94a3b8;">// fest gekoppelt</span>
};

<span style="color:#94a3b8;">// Gut: Abstraktion einführen</span>
<span style="color:#60a5fa;">class</span> Switchable {
<span style="color:#60a5fa;">public</span>:
    <span style="color:#60a5fa;">virtual void</span> turnOn() = 0;
    <span style="color:#60a5fa;">virtual</span> ~Switchable() {}
};
<span style="color:#60a5fa;">class</span> LightBulb : <span style="color:#60a5fa;">public</span> Switchable {
    <span style="color:#60a5fa;">void</span> turnOn() override { /* ... */ }
};
<span style="color:#60a5fa;">class</span> Fan : <span style="color:#60a5fa;">public</span> Switchable {
    <span style="color:#60a5fa;">void</span> turnOn() override { /* ... */ }
};
<span style="color:#60a5fa;">class</span> Switch {
    Switchable& device;
<span style="color:#60a5fa;">public</span>:
    Switch(Switchable& d) : device(d) {}
    <span style="color:#60a5fa;">void</span> operate() { device.turnOn(); }
};
</pre>
    </div>`;
  }

  _panelWeitere() {
    return `<div class="wim-category hidden" data-wim-cat="weitere">
      <h3 class="lz-h3">Weitere wichtige Entwurfsprinzipien</h3>
      ${renderTable({
        headers: ['Prinzip', 'Bedeutung'],
        rows: [
          ['DRY (Don’t Repeat Yourself)', 'Vermeide Code‑Duplikate – lagere gemeinsame Logik in Funktionen/Klassen aus.'],
          ['KISS (Keep It Simple, Stupid)', 'Einfache, klare Lösungen bevorzugen, keine unnötige Komplexität.'],
          ['YAGNI (You Aren’t Gonna Need It)', 'Code nur für aktuelle Anforderungen, nicht für "vielleicht später".'],
          ['Composition over Inheritance', 'Bevorzuge Komposition (Objekte zusammenbauen) vor Vererbung (starke Kopplung).'],
          ['Law of Demeter (Prinzip der geringsten Kenntnis)', 'Eine Methode sollte nur mit ihren direkten Freunden sprechen – keine "tiefen" Methodenketten (a.b.c.d()).'],
          ['Separation of Concerns', 'Trennung von Zuständigkeiten (z.B. GUI, Geschäftslogik, Datenbank) – ähnlich MVC.'],
        ],
      })}
      <h4 class="lz-h4">MVC – Model‑View‑Controller</h4>
      ${renderInfobox({ icon: 'fas fa-layer-group', title: 'Architekturmuster für GUI‑Anwendungen', type: 'info',
        body: `<strong>Model:</strong> Daten & Geschäftslogik.<br>
               <strong>View:</strong> Darstellung (Benutzeroberfläche).<br>
               <strong>Controller:</strong> Vermittler zwischen Model und View, verarbeitet Benutzereingaben.<br>
               Trennung erlaubt parallele Entwicklung und einfachere Wartung.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Vereinfachtes MVC‑Beispiel in C++ (Konsole)</span>
<span style="color:#94a3b8;">// Model</span>
<span style="color:#60a5fa;">class</span> CounterModel {
    <span style="color:#60a5fa;">int</span> value = 0;
<span style="color:#60a5fa;">public</span>:
    <span style="color:#60a5fa;">void</span> increment() { value++; }
    <span style="color:#60a5fa;">int</span> getValue() <span style="color:#60a5fa;">const</span> { <span style="color:#60a5fa;">return</span> value; }
};
<span style="color:#94a3b8;">// View</span>
<span style="color:#60a5fa;">class</span> CounterView {
<span style="color:#60a5fa;">public</span>:
    <span style="color:#60a5fa;">void</span> display(<span style="color:#60a5fa;">int</span> value) { cout << <span style="color:#fbbf24;">"Counter: "</span> << value << endl; }
};
<span style="color:#94a3b8;">// Controller</span>
<span style="color:#60a5fa;">class</span> CounterController {
    CounterModel& model;
    CounterView& view;
<span style="color:#60a5fa;">public</span>:
    CounterController(CounterModel& m, CounterView& v) : model(m), view(v) {}
    <span style="color:#60a5fa;">void</span> onIncrement() {
        model.increment();
        view.display(model.getValue());
    }
};
</pre>
    </div>`;
  }

  _panelAntipattern() {
    return `<div class="wim-category hidden" data-wim-cat="antipattern">
      <h3 class="lz-h3">Antipattern – Was man vermeiden sollte</h3>
      ${renderTable({
        headers: ['Antipattern', 'Beschreibung', 'Gegenmaßnahme'],
        rows: [
          ['God Object', 'Eine Klasse macht alles (Datenbank, UI, Berechnung).', 'Aufteilen nach SRP, Verantwortlichkeiten delegieren.'],
          ['Spaghetti Code', 'Unstrukturierter Code mit vielen Sprüngen (goto, tiefe Verschachtelung).', 'Strukturierte Programmierung, Funktionen, Klassen.'],
          ['Golden Hammer', 'Ein bekanntes Pattern wird überall eingesetzt, auch wo es nicht passt.', 'Mehrere Lösungsmuster lernen, kontextabhängig entscheiden.'],
          ['Premature Optimization', 'Optimierung bevor das Programm korrekt funktioniert.', 'Erst korrekt, dann schnell (wenn nötig).'],
          ['Copy‑Paste Programming', 'Code wird kopiert statt ausgelagert (Verletzt DRY).', 'Gemeinsamkeiten in Funktionen/Klassen extrahieren.'],
          ['Lava Flow', 'Toter Code (auskommentiert, nicht mehr verwendet) bleibt im Projekt.', 'Regelmäßiges Refactoring, Versionskontrolle nutzen.'],
        ],
      })}
      ${renderInfobox({ icon: 'fas fa-bug', title: 'Typische Code‑Smells in OOP', type: 'warning',
        body: `• <strong>Long Parameter List:</strong> Zu viele Parameter – Zusammenfassen in Objekt.<br>
               • <strong>Data Clumps:</strong> Gleiche Parameter-/Attributgruppen tauchen mehrfach auf – extrahieren.<br>
               • <strong>Refused Bequest:</strong> Subklasse nutzt Methoden der Basisklasse nicht – Vererbungshierarchie überdenken.<br>
               • <strong>Shotgun Surgery:</strong> Eine kleine Änderung erfordert viele Änderungen in verschiedenen Klassen – Logik zentralisieren.` })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Erkläre das Open/Closed Principle mit einem Beispiel.',
          content: `OCP: Eine Klasse soll erweiterbar sein, ohne ihren Quellcode zu ändern.
          Beispiel: "Shape" mit "area()" – virtuelle Methode. Neue Formen ("Circle", "Rectangle") ableiten, ohne "AreaCalculator" zu ändern.
          Das ist besser als eine "if (type == CIRCLE)"‑Kaskade.`,
        },
        {
          title: 'A2: Warum ist das Liskov‑Substitution‑Prinzip wichtig? Nenne eine typische Verletzung.',
          content: `LSP verhindert unerwartetes Verhalten bei Polymorphie. Wenn eine Subklasse die Erwartungen verletzt,
          kann Code, der mit der Basisklasse arbeitet, überraschend fehlschlagen.
          <strong>Klassisches Beispiel:</strong> "Rechteck" mit "setBreite()", "setHöhe()". "Quadrat" als Subklasse führt dazu,
          dass "setBreite()" auch die Höhe ändert – ein Programm, das mit Rechtecken arbeitet, würde bei Quadraten falsch reagieren.`,
        },
        {
          title: 'A3: Was versteht man unter "Dependency Injection"? Wie hängt es mit DIP zusammen?',
          content: `Dependency Injection ist eine Technik, um Abhängigkeiten von außen zu übergeben (Konstruktor, Setter, Interface).
          Das ermöglicht, dass hochrangige Module von Abstraktionen (Schnittstellen) abhängen, nicht von konkreten Implementierungen.
          Das ist die praktische Umsetzung des Dependency Inversion Principle.`,
        },
        {
          title: 'A4: Nenne drei Vorteile der SOLID-Prinzipien.',
          content: `• <strong>Wartbarkeit:</strong> Änderungen bleiben lokal, unerwartete Seiteneffekte werden reduziert.<br>
          • <strong>Testbarkeit:</strong> Lose Kopplung erlaubt einfacheres Mocking und Unit‑Tests.<br>
          • <strong>Erweiterbarkeit:</strong> Neue Funktionalität kann durch Hinzufügen neuer Klassen (OCP) statt Ändern bestehender realisiert werden.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'SOLID für die Prüfung', type: 'success',
        body: `• SOLID = 5 Prinzipien für objektorientierten Entwurf.<br>
               • Wichtig: SRP (eine Verantwortung), OCP (erweiterbar ohne Änderung), LSP (Substitution), ISP (schlanke Interfaces), DIP (Abhängigkeiten abstrakt).<br>
               • Entwurfsmuster (Factory, Strategy, Observer) setzen oft SOLID um.<br>
               • MVC ist ein Architekturmuster, das Separation of Concerns erreicht.` })}
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
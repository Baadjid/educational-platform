// pages/projekte/lernzettel/faecher/informatik/themen/oop/vererbung-polymorphie.js
// Informatik 5.2 — Vererbung, Polymorphie & Schnittstellen

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
  prev: { label: '5.1 Klassen & Objekte', link: `${BASE}/themen/oop/klassen-objekte` },
  next: { label: '5.3 UML-Diagramme', link: `${BASE}/themen/oop/uml` },
};

const TABS = [
  { key: 'vererbung',  label: '🌳 Vererbung' },
  { key: 'polymorphie',label: '🔄 Polymorphie' },
  { key: 'abstrakt',   label: '📐 Abstrakte Klassen & Schnittstellen' },
  { key: 'uebungen',   label: '✏ Übungen' },
];

export default class VererbungPolymorphiePage {
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
            <span>5.2 · Vererbung & Polymorphie</span>
          </nav>
          <h1 class="lz-sub-title">Vererbung, Polymorphie & Schnittstellen</h1>
          <p class="lz-sub-subtitle">Basisklasse, abgeleitete Klasse, virtuell, Überschreiben, abstrakte Methoden</p>
          ${renderTags(['Vererbung', 'Polymorphie', 'Basisklasse', 'virtuell', 'Überschreiben', 'Schnittstelle', 'BPE 5'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="vererbungTabs" aria-label="Vererbung & Polymorphie">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelVererbung()}
          ${this._panelPolymorphie()}
          ${this._panelAbstrakt()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelVererbung() {
    return `<div class="wim-category active" data-wim-cat="vererbung">
      ${renderInfobox({ icon: 'fas fa-sitemap', title: 'Was ist Vererbung?', type: 'info',
        body: `Vererbung erlaubt es, eine neue Klasse (<strong>abgeleitete Klasse / Subklasse</strong>) auf Basis einer bestehenden Klasse
               (<strong>Basisklasse / Superklasse</strong>) zu definieren. Die Subklasse übernimmt Attribute und Methoden der Basisklasse
               und kann sie erweitern oder überschreiben. Förderung von <strong>Wiederverwendung</strong> und <strong>Spezialisierung</strong>.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">class</span> Fahrzeug {
<span style="color:#60a5fa;">protected</span>:
    <span style="color:#60a5fa;">int</span> geschwindigkeit;
<span style="color:#60a5fa;">public</span>:
    Fahrzeug() : geschwindigkeit(0) {}
    <span style="color:#60a5fa;">void</span> beschleunigen(<span style="color:#60a5fa;">int</span> wert) { geschwindigkeit += wert; }
    <span style="color:#60a5fa;">int</span> getGeschwindigkeit() { <span style="color:#60a5fa;">return</span> geschwindigkeit; }
};

<span style="color:#94a3b8;">// Vererbung: Auto ist ein Fahrzeug</span>
<span style="color:#60a5fa;">class</span> Auto : <span style="color:#60a5fa;">public</span> Fahrzeug {
<span style="color:#60a5fa;">private</span>:
    <span style="color:#60a5fa;">int</span> anzahlTueren;
<span style="color:#60a5fa;">public</span>:
    Auto(<span style="color:#60a5fa;">int</span> tueren) : anzahlTueren(tueren) {}
    <span style="color:#60a5fa;">void</span> hupe() { cout << <span style="color:#fbbf24;">"Hup!"</span> << endl; }
};

<span style="color:#60a5fa;">class</span> Fahrrad : <span style="color:#60a5fa;">public</span> Fahrzeug {
<span style="color:#60a5fa;">public</span>:
    <span style="color:#60a5fa;">void</span> klingel() { cout << <span style="color:#fbbf24;">"Klingeling!"</span> << endl; }
};

<span style="color:#94a3b8;">// Verwendung</span>
Auto meinAuto(4);
meinAuto.beschleunigen(50);   <span style="color:#94a3b8;">// geerbt von Fahrzeug</span>
meinAuto.hupe();                <span style="color:#94a3b8;">// eigene Methode</span>
</pre>
      ${renderTable({
        headers: ['Vererbungsart (C++)', 'Syntax', 'Zugriff auf public/protected der Basisklasse von außen'],
        rows: [
          ['public', '<code>class Sub : public Base</code>', 'public bleibt public, protected bleibt protected'],
          ['protected', '<code>class Sub : protected Base</code>', 'public wird protected, protected bleibt protected'],
          ['private', '<code>class Sub : private Base</code>', 'alles wird private (selten)'],
        ],
      })}
    </div>`;
  }

  _panelPolymorphie() {
    return `<div class="wim-category hidden" data-wim-cat="polymorphie">
      <h3 class="lz-h3">Polymorphie – Virtuelle Funktionen</h3>
      ${renderInfobox({ icon: 'fas fa-mask', title: 'Eine Schnittstelle – viele Implementierungen', type: 'info',
        body: `Polymorphie bedeutet, dass ein Basisklassen‑Zeiger oder ‑Referenz je nach tatsächlichem Objekttyp
               unterschiedliche Methoden aufruft. Dazu müssen Methoden in der Basisklasse als <code>virtual</code>
               deklariert werden. In C++ spricht man von <strong>dynamischem Polymorphismus</strong> (Laufzeitpolymorphie).` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#60a5fa;">class</span> Tier {
<span style="color:#60a5fa;">public</span>:
    <span style="color:#60a5fa;">virtual void</span> lautGeben() { cout << <span style="color:#fbbf24;">"..."</span> << endl; }
    <span style="color:#60a5fa;">virtual</span> ~Tier() {}   <span style="color:#94a3b8;">// Virtueller Destruktor wichtig!</span>
};
<span style="color:#60a5fa;">class</span> Hund : <span style="color:#60a5fa;">public</span> Tier {
<span style="color:#60a5fa;">public</span>:
    <span style="color:#60a5fa;">void</span> lautGeben() override { cout << <span style="color:#fbbf24;">"Wau wau!"</span> << endl; }
};
<span style="color:#60a5fa;">class</span> Katze : <span style="color:#60a5fa;">public</span> Tier {
<span style="color:#60a5fa;">public</span>:
    <span style="color:#60a5fa;">void</span> lautGeben() override { cout << <span style="color:#fbbf24;">"Miau!"</span> << endl; }
};

<span style="color:#94a3b8;">// Polymorphe Verwendung</span>
Tier* tiere[2];
tiere[0] = <span style="color:#60a5fa;">new</span> Hund();
tiere[1] = <span style="color:#60a5fa;">new</span> Katze();
<span style="color:#60a5fa;">for</span> (<span style="color:#60a5fa;">int</span> i = 0; i < 2; i++) {
    tiere[i]->lautGeben();   <span style="color:#94a3b8;">// ruft die richtige Methode auf</span>
}
<span style="color:#60a5fa;">for</span> (<span style="color:#60a5fa;">int</span> i = 0; i < 2; i++) <span style="color:#60a5fa;">delete</span> tiere[i];
</pre>
      ${renderTable({
        headers: ['Konzept', 'C++ Schlüsselwort', 'Bedeutung'],
        rows: [
          ['Virtuelle Funktion', '<code>virtual</code>', 'Macht dynamischen Polymorphismus möglich'],
          ['Überschreiben', '<code>override</code> (C++11)', 'Dokumentiert und prüft, dass eine virtuelle Methode überschrieben wird'],
          ['Endgültig', '<code>final</code>', 'Verhindert weiteres Überschreiben in Subklassen'],
          ['Reine virtuelle Funktion', '<code>= 0</code>', 'Macht Klasse abstrakt (keine Instanzen möglich)'],
        ],
      })}
    </div>`;
  }

  _panelAbstrakt() {
    return `<div class="wim-category hidden" data-wim-cat="abstrakt">
      <h3 class="lz-h3">Abstrakte Klassen & Schnittstellen</h3>
      ${renderInfobox({ icon: 'fas fa-drafting-compass', title: 'Abstrakte Klasse', type: 'info',
        body: `Eine abstrakte Klasse kann nicht instanziiert werden. Sie dient als Basis für andere Klassen.
               Sie enthält mindestens eine <strong>reine virtuelle Funktion</strong> (<code>virtual void f() = 0;</code>).
               Kann auch implementierte Methoden und Attribute enthalten.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1.5rem;border-radius:10px;font-family:monospace;font-size:.85rem;line-height:1.7;">
<span style="color:#94a3b8;">// Abstrakte Klasse (kann nicht instanziiert werden)</span>
<span style="color:#60a5fa;">class</span> Shape {
<span style="color:#60a5fa;">public</span>:
    <span style="color:#60a5fa;">virtual double</span> flaeche() <span style="color:#60a5fa;">const</span> = 0;   <span style="color:#94a3b8;">// rein virtuell</span>
    <span style="color:#60a5fa;">virtual void</span> zeichnen() <span style="color:#60a5fa;">const</span> = 0;
    <span style="color:#60a5fa;">virtual</span> ~Shape() {}   <span style="color:#94a3b8;">// virtueller Destruktor</span>
};

<span style="color:#60a5fa;">class</span> Kreis : <span style="color:#60a5fa;">public</span> Shape {
<span style="color:#60a5fa;">private</span>:
    <span style="color:#60a5fa;">double</span> radius;
<span style="color:#60a5fa;">public</span>:
    Kreis(<span style="color:#60a5fa;">double</span> r) : radius(r) {}
    <span style="color:#60a5fa;">double</span> flaeche() <span style="color:#60a5fa;">const</span> override { <span style="color:#60a5fa;">return</span> 3.14159 * radius * radius; }
    <span style="color:#60a5fa;">void</span> zeichnen() <span style="color:#60a5fa;">const</span> override { cout << <span style="color:#fbbf24;">"Zeichne Kreis"</span> << endl; }
};

<span style="color:#94a3b8;">// Shape s;  // Fehler: abstrakte Klasse kann nicht instanziiert werden</span>
Kreis k(5.0);
Shape* ptr = &k;
cout << ptr->flaeche();   <span style="color:#94a3b8;">// 78.53975</span>
</pre>
      ${renderInfobox({ icon: 'fas fa-plug', title: 'Schnittstellen in C++ (reine virtuelle Klassen)', type: 'info',
        body: `In C++ gibt es kein eigenes <code>interface</code>‑Schlüsselwort (wie in Java oder C#). Eine Schnittstelle
               wird als Klasse mit <strong>nur rein virtuellen Funktionen</strong> und keinem Datenmember realisiert.
               Oft werden auch <code>virtual</code> Destruktor und evtl. statische Konstanten hinzugefügt.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;font-family:monospace;font-size:.85rem;">
<span style="color:#94a3b8;">// Schnittstelle (reine abstrakte Klasse)</span>
<span style="color:#60a5fa;">class</span> ISensor {
<span style="color:#60a5fa;">public</span>:
    <span style="color:#60a5fa;">virtual float</span> read() = 0;
    <span style="color:#60a5fa;">virtual void</span> init() = 0;
    <span style="color:#60a5fa;">virtual</span> ~ISensor() {}
};
<span style="color:#94a3b8;">// Implementierung</span>
<span style="color:#60a5fa;">class</span> DHT22Sensor : <span style="color:#60a5fa;">public</span> ISensor {
    <span style="color:#60a5fa;">float</span> read() override { <span style="color:#94a3b8;">/* DHT22 auslesen */</span> }
    <span style="color:#60a5fa;">void</span> init() override { <span style="color:#94a3b8;">/* GPIO initialisieren */</span> }
};
</pre>
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Erstelle eine Basisklasse `Mitarbeiter` mit Attributen `name`, `gehalt` und einer Methode `arbeite()`. Leite `Entwickler` und `Manager` ab, die `arbeite()` überschreiben.',
          content: `<pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:1rem;border-radius:8px;">
class Mitarbeiter {
protected:
    string name;
    double gehalt;
public:
    Mitarbeiter(string n, double g) : name(n), gehalt(g) {}
    virtual void arbeite() { cout << name << " arbeitet." << endl; }
    virtual ~Mitarbeiter() {}
};
class Entwickler : public Mitarbeiter {
public:
    Entwickler(string n, double g) : Mitarbeiter(n, g) {}
    void arbeite() override { cout << name << " programmiert." << endl; }
};
class Manager : public Mitarbeiter {
public:
    Manager(string n, double g) : Mitarbeiter(n, g) {}
    void arbeite() override { cout << name << " leitet Meetings." << endl; }
};
</pre>`,
        },
        {
          title: 'A2: Warum sollte der Destruktor einer Basisklasse virtuell sein?',
          content: `Wenn man einen Zeiger auf die Basisklasse verwendet, der auf ein abgeleitetes Objekt zeigt,
          und dann <code>delete</code> aufruft, wird ohne virtuellen Destruktor <strong>nur der Destruktor der Basisklasse</strong> aufgerufen.
          Das führt zu Speicherlecks, weil der Destruktor der abgeleiteten Klasse nicht ausgeführt wird.
          <code>virtual ~Base() {}</code> löst das Problem.`,
        },
        {
          title: 'A3: Was ist der Unterschied zwischen Überschreiben (override) und Überladen (overload)?',
          content: `• <strong>Überschreiben (override):</strong> In einer abgeleiteten Klasse wird eine virtuelle Methode der Basisklasse neu definiert. Gleicher Name, gleiche Parameter, gleicher Rückgabetyp (oder Kovarianz). Laufzeitpolymorphie.<br>
          • <strong>Überladen (overload):</strong> Mehrere Funktionen mit gleichem Namen, aber unterschiedlichen Parametern (Anzahl/Typ). Kompiliertzeit.`,
        },
        {
          title: 'A4: Wann verwendet man eine abstrakte Klasse statt einer konkreten?',
          content: `Wenn eine Klasse <strong>unvollständig</strong> ist und nicht sinnvoll instanziiert werden kann.
          Beispiel: <code>Shape</code> – eine konkrete Form ohne Größe/Art ist unsinnig.
          Abstrakte Klassen zwingen abgeleitete Klassen, bestimmte Methoden zu implementieren (ähnlich wie Schnittstellen).`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Vererbung & Polymorphie für die Prüfung', type: 'success',
        body: `• <strong>Vererbung:</strong> Subklasse erbt von Basisklasse (<code>class Sub : public Base</code>).<br>
               • <strong>Polymorphie:</strong> Basiszeiger ruft überschriebene Methode der Subklasse auf (<code>virtual</code> + <code>override</code>).<br>
               • <strong>Abstrakte Klasse:</strong> mindestens eine rein virtuelle Funktion (<code>= 0</code>) – keine Instanzen.<br>
               • <strong>Virtueller Destruktor</strong> in Basisklasse ist Pflicht bei Vererbung.` })}
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
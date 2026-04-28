// pages/projekte/lernzettel/faecher/deutsch/themen/kurzgeschichte/erzaehltechnik.js
// Deutsch 7.3 — Erzähltechnische Mittel analysieren

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS,
  renderSubhead,
  renderTags,
  renderInfobox,
  renderTable,
  renderAccordion,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../deutsch.js';

// Wiederverwendbares Vorher/Nachher-Template
function vn(falsch, richtig) {
  return `
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin:1rem 0;">
      <div style="background:#ffebee; border-left:4px solid #e53935; padding:12px; border-radius:0 8px 8px 0; font-size:0.9rem;">
        <strong style="color:#c62828;">❌ Falsch</strong><br>${falsch}
      </div>
      <div style="background:#e8f5e9; border-left:4px solid #27ae60; padding:12px; border-radius:0 8px 8px 0; font-size:0.9rem;">
        <strong style="color:#2e7d32;">✅ Richtig</strong><br>${richtig}
      </div>
    </div>`;
}

export default class DeutschErzaehltechnikPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-deutsch-sub';
    if (!document.querySelector('link[href*="sub.css"]')) {
      const l = document.createElement('link');
      l.rel = 'stylesheet';
      l.href = 'pages/projekte/lernzettel/styles/sub.css';
      document.head.appendChild(l);
    }
    el.style.setProperty('--kap-color',     COLOR);
    el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent',     COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() {
    return `
      <section class="lz-sub-hero">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-hero-inner">
          <nav class="lz-sub-breadcrumb">
            <button class="lz-bread-link" data-nav-link="/projekte/lernzettel">Lernzettel</button>
            <i class="fas fa-chevron-right"></i>
            <button class="lz-bread-link" data-nav-link="${BASE}">Deutsch</button>
            <i class="fas fa-chevron-right"></i>
            <span>7.3 · Erzähltechnische Mittel</span>
          </nav>
          <h1 class="lz-sub-title">Erzähltechnische<br><em>Mittel analysieren.</em></h1>
          <p class="lz-sub-desc">Perspektive · Erlebte Rede · Zeitgestaltung · Raum · Symbol — mit Vorher/Nachher</p>
          ${renderTags(['Kapitel 7.3', 'Kurzgeschichte', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ GRUNDREGEL ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Goldene Regel')}
          <h2 class="lz-h2 reveal">Beschreiben reicht nicht!</h2>
          ${renderInfobox({
            type:  '',
            icon:  'fas fa-exclamation-triangle',
            title: 'Der häufigste Fehler in der Analyse',
            body:  '<strong>Bloße Beschreibung bringt keine Punkte.</strong> Es reicht nicht zu schreiben: '
                 + '„Erzählt wird aus der Perspektive eines Ich-Erzählers." — das ist nur Feststellung. '
                 + 'Du musst immer auch die <strong>Wirkung, Funktion und den Bezug zum Inhalt</strong> erläutern. '
                 + '<br><br>Schema: <strong>Mittel benennen → Textstelle zitieren → Wirkung deuten → '
                 + 'Bezug zur Gesamtaussage herstellen</strong>',
          })}
        </div>
      </section>

      <!-- ══ ERZÄHLPERSPEKTIVE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Erzählperspektive')}
          <h2 class="lz-h2 reveal">Erzählperspektive analysieren</h2>
          ${renderAccordion([
            {
              title:   '👤 Ich-Erzähler / Personaler Erzähler',
              content: vn(
                '„Erzählt wird aus der Perspektive eines Ich-Erzählers."',
                '„Der Ich-Erzähler berichtet aus zeitlicher Distanz (vgl. Z. 1), wodurch eine reflektierte, nostalgische Atmosphäre entsteht. Die erlebte Rede (Z. 23) verbindet Innen- und Außenperspektive und ermöglicht einen unmittelbaren Zugang zu den Gedanken der Figur. Dies erzeugt eine spannungsreiche Ambivalenz zwischen emotionaler Nähe und kritischer Betrachtung."',
              ),
            },
            {
              title:   '🎥 Neutraler Erzähler',
              content: vn(
                '„Es handelt sich um einen neutralen Erzähler."',
                '„Der neutrale Erzähler beschreibt ausschließlich äußerlich Wahrnehmbares — kein Gedanke, kein Gefühl wird kommentiert (vgl. Z. 34). Diese erzwungene Distanz spiegelt die Kommunikationsunfähigkeit der Figuren wider: Was sie nicht aussprechen, verschweigt auch der Erzähler. Der Leser muss selbst deuten — genauso wie die Figuren füreinander rätselhaft bleiben."',
              ),
            },
            {
              title:   '💭 Erlebte Rede',
              content: vn(
                '„Es gibt erlebte Rede."',
                '„Die erlebte Rede ‚Musste das wirklich sein?´ (Z. 45) gibt die Gedanken der Figur ungefiltert wieder, ohne sie als Gedanken zu markieren. Diese Technik erzeugt fließende Übergänge zwischen Erzähler und Figur und schafft Unmittelbarkeit — der Leser erlebt die Gedanken scheinbar zeitgleich. Die rhetorische Frage verstärkt die innere Aufregung und macht die emotionale Überforderung spürbar, ohne dass ein Erzähler sie benennen müsste."',
              ),
            },
            {
              title:   '🌊 Innerer Monolog',
              content: vn(
                '„Es gibt einen inneren Monolog."',
                '„Der innere Monolog (Z. 78–85) legt die Selbstzweifel der Protagonistin schonungslos offen. Die fragmentierte Syntax ‚Ich kann nicht. Will nicht. Aber vielleicht…´ spiegelt ihre zerrissene Gefühlslage wider. Die Abbrüche und Wiederanläufe machen deutlich, dass sie mit sich selbst ringt. Der Monolog wird nicht kommentiert — der Leser ist unmittelbar konfrontiert mit dem Chaos ihrer Gedanken."',
              ),
            },
          ])}
        </div>
      </section>

      <!-- ══ ZEIT & RAUM ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Zeit & Raum')}
          <h2 class="lz-h2 reveal">Zeit und Raum analysieren</h2>
          ${renderAccordion([
            {
              title:   '⏱️ Zeitgestaltung (Zeitraffung / Zeitdehnung)',
              content: vn(
                '„Es gibt Zeitraffung. Drei Jahre werden übersprungen."',
                '„Die extreme Zeitraffung ‚Drei Jahre später…´ (Z. 34) überspringt einen wesentlichen Lebensabschnitt und signalisiert, dass die zwischenzeitlichen Ereignisse für die Kernaussage irrelevant sind. Diese Auslassung lenkt den Fokus auf die entscheidenden Momente und unterstreicht, dass nicht die Zeit selbst, sondern die Veränderung der Figur im Zentrum steht. Zugleich entsteht ein Gefühl der Unwiderruflichkeit."',
              ),
            },
            {
              title:   '🏠 Raumgestaltung',
              content: vn(
                '„Die Handlung spielt im Badezimmer."',
                '„Die Beschränkung auf das Badezimmer (Z. 5–45) schafft bedrückende Enge, die die innere Eingeschlossenheit der Figur räumlich erfahrbar macht. Der Spiegel als zentrales Element wird zum Symbol des Zwangs zur Selbstreflexion. Die ‚grelle Beleuchtung´ (Z. 9) verweigert jeden Schutz — der Raum wird zur Metapher für die Gefangenschaft im eigenen Kopf."',
              ),
            },
            {
              title:   '🕊️ Symbol',
              content: vn(
                '„Der Spiegel ist ein Symbol."',
                '„Der Spiegel fungiert als vielschichtiges Symbol: Einerseits steht er für Selbstwahrnehmung und Identitätssuche — die Figur sucht im Spiegelbild eine Bestätigung ihrer Existenz. Andererseits wird er zum Instrument der Selbstzerstörung (Z. 34). Der zerbrochene Spiegel am Ende (Z. 89) symbolisiert die Zerstörung eines verzerrten Selbstbildes — Akt der Befreiung oder der Selbstaufgabe? Die Ambivalenz des Symbols spiegelt die Ambivalenz der Handlung."',
              ),
            },
            {
              title:   '🔆 Kontrast (Hell / Dunkel)',
              content: vn(
                '„Es gibt Kontraste zwischen hell und dunkel."',
                '„Der Kontrast zwischen der ‚grellen Beleuchtung´ des Badezimmers (Z. 9) und der ‚beruhigenden Dunkelheit´ des Schlafzimmers (Z. 67) symbolisiert zwei gegensätzliche Bewusstseinszustände: Das Licht zwingt zur schonungslosen Konfrontation mit der Realität, die Dunkelheit ermöglicht Verdrängung und Flucht. Die Figur schwankt zwischen diesen Polen — sie kann in keinem dauerhaft leben."',
              ),
            },
          ])}
        </div>
      </section>

      <!-- ══ ANALYSE-CHECKLISTE ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Checkliste')}
          <h2 class="lz-h2 reveal">Checkliste: Erzähltechnische Analyse</h2>
          ${renderTable({
            headers: ['Aspekt', 'Leitfrage'],
            rows: [
              ['<strong>Erzählperspektive</strong>',   'Wer erzählt? Wie viel weiß der Erzähler? Welche Wirkung hat das?'],
              ['<strong>Zeitgestaltung</strong>',       'Wie wird Zeit eingesetzt? Raffung, Dehnung, Ellipse? Was wird ausgelassen?'],
              ['<strong>Figurenkonstellation</strong>', 'Wie stehen die Figuren zueinander? Macht, Abhängigkeit, Isolation?'],
              ['<strong>Raumgestaltung</strong>',       'Hat der Raum symbolische Bedeutung? Enge, Weite, hell/dunkel?'],
              ['<strong>Symbole & Leitmotive</strong>', 'Welche Gegenstände oder Motive kehren wieder? Was bedeuten sie?'],
              ['<strong>Sprache / Stil</strong>',       'Kurze oder lange Sätze? Parataxe oder Hypotaxe? Was bewirkt das?'],
            ],
          })}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '7.2 Einleitung & Inhaltsangabe', link: `${BASE}/themen/kurzgeschichte/einleitung` },
            next: { label: '7.4 Sprachliche Mittel — Vorher / Nachher', link: `${BASE}/themen/kurzgeschichte/stilmittel-analyse` },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => { window.location.hash = btn.dataset.navLink; });
    });
    document.querySelectorAll('[data-link]').forEach(btn => {
      btn.addEventListener('click', () => { window.location.hash = btn.dataset.link; });
    });
  }
}
// pages/projekte/lernzettel/faecher/deutsch/themen/kurzgeschichte/stilmittel-analyse.js
// Deutsch 7.4 — Sprachliche Mittel analysieren: Vorher / Nachher

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
  renderMerkboxGrid,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../deutsch.js';

// Vorher / Nachher Komponente
function vn(falsch, richtig) {
  return `
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:1rem; margin:1rem 0;">
      <div style="background:#ffebee; border-left:4px solid #e53935; padding:12px; border-radius:0 8px 8px 0; font-size:0.9rem; line-height:1.7;">
        <strong style="color:#c62828;">❌ Nur Benennen</strong><br><em>${falsch}</em>
      </div>
      <div style="background:#e8f5e9; border-left:4px solid #27ae60; padding:12px; border-radius:0 8px 8px 0; font-size:0.9rem; line-height:1.7;">
        <strong style="color:#2e7d32;">✅ Vollständige Analyse</strong><br>${richtig}
      </div>
    </div>`;
}

export default class DeutschStilmittelAnalysePage {
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
            <span>7.4 · Sprachliche Mittel — Vorher / Nachher</span>
          </nav>
          <h1 class="lz-sub-title">Sprachliche Mittel —<br><em>Vorher & Nachher.</em></h1>
          <p class="lz-sub-desc">Metapher · Wiederholung · Syntax · Ironie · Hyperbel — mit vollständigen Beispielanalysen</p>
          ${renderTags(['Kapitel 7.4', 'Stilmittel', 'Abitur 2026'])}
        </div>
      </section>

      <!-- ══ FORMEL ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Analyseschema')}
          <h2 class="lz-h2 reveal">Die Formel für vollständige Analyse</h2>
          ${renderMerkboxGrid([
            {
              icon:  'fas fa-tag',
              title: '1. Mittel benennen',
              text:  'Präziser Fachbegriff (z.B. „anaphorische Wiederholung", nicht nur „Wiederholung").',
            },
            {
              icon:  'fas fa-quote-left',
              title: '2. Textstelle zitieren',
              text:  'Genaues Zitat mit Zeilenangabe in runden Klammern: (Z. 12) oder (vgl. Z. 5–7).',
            },
            {
              icon:  'fas fa-bolt',
              title: '3. Wirkung beschreiben',
              text:  'Welche Emotion / welchen Eindruck erzeugt das Mittel? Was bewirkt es beim Leser?',
            },
            {
              icon:  'fas fa-arrow-right',
              title: '4. Funktion deuten',
              text:  'Warum wählt der Autor dieses Mittel? Wie unterstützt es die Gesamtaussage des Textes?',
            },
          ])}
          ${renderInfobox({
            type:  'tip',
            icon:  'fas fa-graduation-cap',
            title: 'Qualität vor Quantität',
            body:  'Besser <strong>3 Mittel ausführlich und funktional</strong> analysieren als 15 nur aufzählen. '
                 + 'Die <strong>Tiefe der Interpretation</strong> entscheidet über die Note.',
          })}
        </div>
      </section>

      <!-- ══ METAPHER ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Wortfiguren')}
          <h2 class="lz-h2 reveal">Metapher, Vergleich & Personifikation</h2>
          ${renderAccordion([
            {
              title:   '🌊 Metapher',
              content: vn(
                '„Der Autor verwendet die Metapher ‚Fels in der Brandung´."',
                '„Die Metapher ‚Fels in der Brandung´ (Z. 12) charakterisiert die Mutter als unerschütterliche Stütze der Familie. Das Bild des Felsens evoziert Assoziationen von Unerschütterlichkeit, während die ‚Brandung´ für permanente Angriffe und Belastungen steht. Diese Doppeldeutigkeit macht nicht nur ihre Stärke, sondern auch die Härte ihrer Situation sichtbar. Der Autor beabsichtigt damit, beim Leser Respekt für die Figur zu erzeugen und ihre Opferbereitschaft zu verdeutlichen."',
              ),
            },
            {
              title:   '🦁 Vergleich',
              content: vn(
                '„Der Autor nutzt einen Vergleich."',
                '„Der Vergleich ‚wie ein gehetztes Tier´ (Z. 23) reduziert die Protagonistin auf ihre animalische Angst und macht ihre Panik körperlich vorstellbar. Die Assoziation mit einem verfolgten Tier suggeriert Instinkthandeln und den Verlust rationaler Kontrolle. Anders als eine Metapher betont der Vergleich die Ähnlichkeit in einem spezifischen Aspekt — und gerade dadurch wird die Erniedrigung deutlich: Ein Mensch fühlt sich auf die Stufe eines gehetzten Tieres reduziert."',
              ),
            },
            {
              title:   '🌙 Personifikation',
              content: vn(
                '„Die Dunkelheit wird personifiziert."',
                '„Die Personifikation ‚Die Dunkelheit umarmte sie´ (Z. 67) verleiht der Nacht menschliche Fürsorglichkeit und macht sie zur tröstenden Instanz. Diese Verlebendigung des Abstrakten steht in scharfem Kontrast zur Kälte, die die Figur von Menschen erfährt — die Dunkelheit wird zur einzigen verlässlichen ‚Bezugsperson´, was ihre Isolation umso drastischer unterstreicht."',
              ),
            },
          ])}
        </div>
      </section>

      <!-- ══ SYNTAX ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Satzebene')}
          <h2 class="lz-h2 reveal">Parataxe, Hypotaxe & Ellipse</h2>
          ${renderAccordion([
            {
              title:   '⚡ Parataxe (kurze Hauptsätze)',
              content: vn(
                '„Die Sätze sind kurz."',
                '„Die parataktische Reihung ‚Er stand auf. Er ging zur Tür. Er drehte sich um. Er schwieg.´ (Z. 34–35) erzeugt einen monotonen, mechanischen Rhythmus, der die emotionale Taubheit der Figur widerspiegelt. Die gleichförmige Struktur ohne Unterordnung suggeriert Automatisierung — die Handlungen erfolgen ohne innere Beteiligung. Die Lakonie steht in scharfem Kontrast zur emotionalen Brisanz der Situation und macht gerade dadurch die Sprachlosigkeit überdeutlich."',
              ),
            },
            {
              title:   '🔄 Hypotaxe (verschachtelte Sätze)',
              content: vn(
                '„Der Autor verwendet Hypotaxen."',
                '„Die hypotaktische Satzstruktur mit mehrfach untergeordneten Nebensätzen (vgl. Z. 15–19) verdeutlicht die komplexe, grüblerische Gedankenwelt der Figur. Die Verschachtelung bildet das Kreisen ihrer Gedanken ab — sie kommt nicht zum Punkt. Diese syntaktische Überforderung spiegelt die kognitive Überforderung der Protagonistin und erzeugt beim Lesen ein Gefühl von Atemlosigkeit."',
              ),
            },
            {
              title:   '✂️ Ellipse (unvollständige Sätze)',
              content: vn(
                '„Der Text enthält Ellipsen."',
                '„Die elliptischen Sätze ‚Aufwachen. Bitte nicht. Noch nicht.´ (Z. 1) verzichten auf grammatikalische Vollständigkeit und erzeugen einen abgehackten, stockenden Rhythmus. Die fehlenden Satzteile signalisieren, dass nicht einmal Kraft für vollständige Gedanken bleibt — die Reduktion auf das Nötigste spiegelt die Erschöpfung der Figur wider."',
              ),
            },
          ])}
        </div>
      </section>

      <!-- ══ WEITERE MITTEL ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Weitere Mittel')}
          <h2 class="lz-h2 reveal">Anapher, Hyperbel & Ironie</h2>
          ${renderAccordion([
            {
              title:   '🔁 Anapher / Wiederholung',
              content: vn(
                '„Es gibt Wiederholungen im Text."',
                '„Die anaphorische Wiederholung ‚Nichts. Nichts. Nichts.´ (Z. 2) hämmert die Aussage geradezu ein und macht die erdrückende Last der Negativbewertungen spürbar. Die Verkürzung auf das isolierte Wort symbolisiert die vollständige Reduktion der Figur auf ihre vermeintliche Wertlosigkeit. Der hämmernde Rhythmus evoziert die Monotonie und Unausweichlichkeit dieser Zuschreibungen."',
              ),
            },
            {
              title:   '📢 Hyperbel',
              content: vn(
                '„Der Autor verwendet eine Hyperbel."',
                '„Die Hyperbel ‚tausend Augen starrten sie an´ (Z. 56) übertreibt die tatsächliche Situation bewusst ins Grenzenlose. Diese Übertreibung vermittelt das subjektive Erleben der Protagonistin — ihre Panik und ihr Gefühl, von allen beobachtet zu werden, wird körperlich erfahrbar. Der Autor nutzt die Hyperbel, um die Innenperspektive zu verdeutlichen: Nicht die Realität wird beschrieben, sondern die emotionale Wahrnehmung."',
              ),
            },
            {
              title:   '😏 Ironie',
              content: vn(
                '„Der Text ist ironisch."',
                '„Die Ironie liegt darin, dass der Erzähler von einer ‚viel zu hohen und zarten´ Liebe spricht (Z. 2), diese aber sofort als Vorwand dient, Bier trinken zu gehen (Z. 6–7). Diese Diskrepanz zwischen romantischem Anspruch und profaner Realität entlarvt die vermeintliche Liebesbeziehung als Selbsttäuschung. Die Ironie macht deutlich: Was sich als tiefes Gefühl präsentiert, ist letztlich eine Episode ohne Substanz."',
              ),
            },
          ])}
        </div>
      </section>

      <!-- ══ MUSTERANALYSE VOLLSTÄNDIG ══ -->
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          ${renderSubhead('Musteranalyse')}
          <h2 class="lz-h2 reveal">Vollständige Musteranalyse</h2>
          ${renderInfobox({
            type:  '',
            icon:  'fas fa-align-left',
            title: 'Beispieltext: „Deutschland ist ein Fels in der Brandung Europas."',
            body:  '„Der Autor verwendet die <strong>Metapher</strong> ‚Fels in der Brandung´ (Z. 5), um '
                 + 'die Stabilität Deutschlands in Krisenzeiten zu verdeutlichen. Das Bild des Felsens, '
                 + 'der den heranrollenden Wellen standhält, evoziert Assoziationen von Unerschütterlichkeit '
                 + 'und Verlässlichkeit, während die ‚Brandung´ für die turbulenten politischen Verhältnisse '
                 + 'steht. Diese bildhafte Sprache <strong>verleiht der Aussage emotionale Kraft</strong> und '
                 + 'macht sie einprägsam. Der Autor <strong>beabsichtigt damit</strong>, beim Leser Vertrauen '
                 + 'in die deutsche Politik zu wecken. Die Metapher <strong>unterstützt die zentrale These</strong> '
                 + 'des Textes, dass Deutschland eine Führungsrolle in Europa einnehmen sollte."',
          })}
          ${renderTable({
            headers: ['Bloße Beschreibung (❌)', 'Vollständige Analyse (✅)'],
            rows: [
              ['„Der Autor verwendet eine Metapher."',         '+ Zitat + Wirkung + Funktion + Textbezug'],
              ['„Die Sätze sind kurz."',                       '+ Wirkung des Rhythmus + Figurenzustand + Funktion'],
              ['„Es gibt einen Ich-Erzähler."',                '+ Wissen/Grenzen + Wirkung + warum diese Wahl?'],
              ['„Das Wort ‚Nichts´ kommt oft vor."',           '+ anaphorische Struktur + Hämmern-Wirkung + Bedeutung'],
            ],
          })}
        </div>
      </section>

      <!-- ══════════════ PAGE NAVIGATION BOTTOM ══════════════ -->
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: '7.3 Erzähltechnische Mittel analysieren', link: `${BASE}/themen/kurzgeschichte/erzaehltechnik` },
            next: { label: '1.1 Was ist Sprache?', link: `${BASE}/themen/sprache/was-ist-sprache` },
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
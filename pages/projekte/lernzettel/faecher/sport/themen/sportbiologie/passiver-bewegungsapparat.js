// pages/projekte/lernzettel/faecher/sport/themen/sportbiologie/passiver-bewegungsapparat.js
// Sportbiologie 1.2 — Passiver Bewegungsapparat

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead,
  renderTags,
  renderInfobox,
  renderTable,
  renderTabs,
  renderAccordion,
  renderMerkboxGrid,
  renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../sport.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const PASSIVER_TABS = [
  { key: 'knochen',      label: '🦴 Knochen' },
  { key: 'bindegewebe',  label: '🔗 Knorpel · Sehnen · Bänder' },
  { key: 'gelenke',      label: '⚙️ Gelenke' },
];

export default class SportPassiverBewegungsapparatPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-sport-sub';

    if (!document.querySelector('link[href*="sub.css"]')) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = 'pages/projekte/lernzettel/styles/sub.css';
      document.head.appendChild(link);
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
            <button class="lz-bread-link" data-nav-link="${BASE}">Sport</button>
            <i class="fas fa-chevron-right"></i>
            <span>1.2 · Passiver Bewegungsapparat</span>
          </nav>
          <h1 class="lz-sub-title">Passiver Bewegungs-<em>apparat.</em></h1>
          <p class="lz-sub-desc">
            Knochen, Knorpel, Sehnen und Bänder — das stützende und
            verbindende Gerüst des menschlichen Körpers im Überblick.
          </p>
          ${renderTags(['Sportbiologie', '1.2', 'Knochen', 'Gelenke', 'Sehnen'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderSubhead('Komponenten des passiven Bewegungsapparats')}

          <nav class="wim-tabs" id="passiverTabs" aria-label="Passiver Bewegungsapparat">
            ${PASSIVER_TABS.map((t, i) => `
              <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
                ${t.label}
              </button>`).join('')}
          </nav>

          ${this._panelKnochen()}
          ${this._panelBindegewebe()}
          ${this._panelGelenke()}

        </div>
      </section>

      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { link: `${BASE}/themen/sportbiologie/herz-kreislauf`,   label: 'Herz-Kreislauf-System' },
            next: { link: `${BASE}/themen/sportbiologie/aktiver-bewegungsapparat`,     label: 'Aktiver Bewegungsapparat' },
          }, BASE)}
        </div>
      </section>

      ${footerHTML(this.router)}
    `;
  }

  _panelKnochen() {
    return `
      <div class="wim-category" data-wim-cat="knochen">
        <h2 class="lz-h2">Aufbau und Funktion der Knochen</h2>
        <p class="lz-prose">
          Der menschliche Körper besitzt ~206 Knochen. Sie erfüllen mechanische,
          metabolische und hämatopoetische (blutbildende) Aufgaben.
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-shield-halved', title: 'Schutzfunktion',  text: 'Gehirn (Schädel), Rückenmark (Wirbelsäule), Herz/Lunge (Brustkorb).' },
          { icon: 'fas fa-dumbbell',      title: 'Stützfunktion',   text: 'Skelett trägt Körpergewicht, ermöglicht aufrechten Gang.' },
          { icon: 'fas fa-arrows-rotate',  title: 'Bewegungsfunktion', text: 'Knochen als Hebel für Muskeln — passive Komponente der Bewegung.' },
          { icon: 'fas fa-droplet',        title: 'Blutbildung',    text: 'Rotes Knochenmark produziert Erythrozyten, Leukozyten, Thrombozyten.' },
        ])}
        ${renderTable({
          headers: ['Knochentyp', 'Beispiel', 'Charakteristik'],
          rows: [
            ['Röhrenknochen (Ossa longa)', 'Femur, Humerus, Tibia', 'Langer Schaft (Diaphyse) + zwei Enden (Epiphysen); Markkanal'],
            ['Kurze Knochen (Ossa brevia)', 'Handwurzel, Fußwurzel', 'Würfelförmig, viel Spongiosa'],
            ['Platte Knochen (Ossa plana)', 'Schulterblatt, Schädelknochen', 'Zwei Kortikalis-Schichten mit Spongiosa'],
            ['Sesambeine', 'Patella (Kniescheibe)', 'In Sehnen eingelagert, Kraftumlenkung'],
          ],
          highlight: [0],
        })}
        ${renderInfobox({
          icon: 'fas fa-layer-group', title: 'Knochenaufbau (mikroskopisch)',
          body: `<strong>Kortikalis (Kompakta):</strong> Dichte Außenschicht, hohe Druckfestigkeit.<br>
                 <strong>Spongiosa:</strong> Schwammiges Innengefüge aus Knochenbälkchen (Trabekel) — 
                 orientiert sich an Belastungslinien (Wolff'sches Gesetz).<br>
                 <strong>Periost:</strong> Knochenhaut — Ansatzpunkt für Sehnen und Muskeln, Blutversorgung, Knochenregeneration.`,
        })}
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-lightbulb', title: 'Sport & Knochen',
          body: `Mechanische Belastung stimuliert Osteoblasten (Knochenaufbau) und hemmt Osteoklasten (Knochenabbau). 
                 Krafttraining und stoßbelastende Sportarten (Laufen, Springen) erhöhen die Knochendichte — 
                 wichtig zur <strong>Osteoporose-Prävention</strong>.`,
        })}
      </div>
    `;
  }

  _panelBindegewebe() {
    return `
      <div class="wim-category hidden" data-wim-cat="bindegewebe">
        <h2 class="lz-h2">Bindegewebe des Bewegungsapparats</h2>
        
        <h3 class="lz-h3">Knorpel</h3>
        ${renderTable({
          headers: ['Knorpeltyp', 'Vorkommen', 'Eigenschaften'],
          rows: [
            ['Hyaliner Knorpel', 'Gelenkflächen, Rippenknorpel', 'Glatt, stoßdämpfend, avaskular (keine Blutgefäße)'],
            ['Faserknorpel', 'Bandscheiben, Menisken', 'Höchste Zugfestigkeit, druckbeständig'],
            ['Elastischer Knorpel', 'Ohrmuschel, Epiglottis', 'Flexibel, formbeständig'],
          ],
          highlight: [0],
        })}
        ${renderInfobox({
          type: 'warning', icon: 'fas fa-triangle-exclamation', title: 'Knorpel & Regeneration',
          body: `Hyaliner Gelenkknorpel hat <strong>keine Blutgefäße</strong> — Nährstoffversorgung 
                 nur durch Diffusion aus der Gelenkflüssigkeit (Synovia). 
                 Daher schlechte Selbstheilung! Regelmäßige Bewegung pumpt Synovia in den Knorpel 
                 (<em>Wechseldruckprinzip</em>).`,
        })}

        <h3 class="lz-h3" style="margin-top:1.5rem;">Sehnen</h3>
        ${renderInfobox({
          icon: 'fas fa-link', title: 'Sehnen (Tendo)',
          body: `Verbinden <strong>Muskel mit Knochen</strong>. 
                 Hauptbestandteil: parallele Kollagen-Typ-I-Fasern → hohe Zugfestigkeit, kaum Dehnbarkeit.<br>
                 Speichern elastische Energie (Federeffekt), z. B. Achillessehne beim Laufen (~35 % Energierückgewinnung).`,
        })}
        ${renderTable({
          headers: ['Eigenschaft', 'Wert / Beschreibung'],
          rows: [
            ['Zugfestigkeit', '50–100 MPa (vergleichbar mit Weichstahl)'],
            ['Dehnbarkeit', 'Nur 4–8 % vor Ruptur'],
            ['Anpassung', 'Hypertrophie durch Training (dicker, zugfester)'],
            ['Verletzungsrisiko', 'Tendinopathie, Teilriss, Totalruptur'],
          ],
        })}

        <h3 class="lz-h3" style="margin-top:1.5rem;">Bänder</h3>
        ${renderInfobox({
          icon: 'fas fa-anchor', title: 'Bänder (Ligamentum)',
          body: `Verbinden <strong>Knochen mit Knochen</strong> an Gelenken. 
                 Kollagen-Typ-I + elastische Fasern → etwas dehnbarer als Sehnen.<br>
                 Hauptfunktion: Gelenk<strong>stabilisierung</strong> und Begrenzung des Bewegungsumfangs 
                 (Sicherungsbänder).`,
        })}
        ${renderCompare({
          titleA: 'Sehnen', titleB: 'Bänder',
          listA: [
            'Muskel → Knochen',
            'Kraftübertragung',
            'Parallele Kollagenfasern',
            'Kaum dehnbar',
          ],
          listB: [
            'Knochen → Knochen',
            'Gelenkstabilisierung',
            'Gemischte Faserausrichtung',
            'Leicht dehnbar',
          ],
        })}
      </div>
    `;
  }

  _panelGelenke() {
    return `
      <div class="wim-category hidden" data-wim-cat="gelenke">
        <h2 class="lz-h2">Aufbau und Arten der Gelenke</h2>
        ${renderInfobox({
          icon: 'fas fa-circle-nodes', title: 'Aufbau eines echten Gelenks (Diarthrose)',
          body: `<strong>Gelenkkapsel:</strong> Äußere Schicht (Fibrosa) + innere Schicht (Synovialmembran).<br>
                 <strong>Gelenkflüssigkeit (Synovia):</strong> Schmierung, Knorpelernährung, Druckverteilung.<br>
                 <strong>Gelenkknorpel:</strong> Überzieht die Knochenflächen, stoßdämpfend.<br>
                 <strong>Gelenkspalte:</strong> Mit Synovia gefüllt.`,
        })}
        ${renderTable({
          headers: ['Gelenkform', 'Achsen', 'Bewegungen', 'Beispiel'],
          rows: [
            ['Kugelgelenk', '3 (multiaxial)', 'Flex/Ext, Ab/Adduktion, Rotation', 'Schulter, Hüfte'],
            ['Scharniergelenk', '1 (uniaxial)', 'Flexion / Extension', 'Ellenbogen, Knie (vereinfacht)'],
            ['Eigelenk', '2 (biaxial)', 'Flex/Ext, Ab/Adduktion', 'Handgelenk, MCP-Gelenke'],
            ['Sattelgelenk', '2 (biaxial)', 'Flex/Ext, Ab/Adduktion', 'Daumensattelgelenk'],
            ['Drehgelenk (Radgelenk)', '1 (uniaxial)', 'Rotation (Pronation/Supination)', 'Radioulnargelenk, Atlas/Axis'],
            ['Amphiarthrose (straff)', '—', 'Minimalbewegung', 'ISG, Kreuzbein-Steißbein'],
          ],
          highlight: [0],
        })}
        ${renderInfobox({
          type: 'tip', icon: 'fas fa-lightbulb', title: 'Gelenke & Sport',
          body: `Regelmäßige Bewegung erhält Gelenkgesundheit durch <strong>Synoviaproduktion</strong>. 
                 Übergewicht und Fehlbelastungen beschleunigen Knorpelabbau (Arthrose). 
                 Krafttraining der gelenkstabilisierenden Muskulatur reduziert Verletzungsrisiko erheblich 
                 (z. B. Kniestabilisatoren: Quadrizeps & ischiocrurale Muskulatur).`,
        })}
        ${renderAccordion([
          {
            title: 'Kniebandapparat — häufigste Sportverletzungszone',
            content: `<ul style="margin:0;padding-left:1.2rem;line-height:1.9;">
              <li><strong>Vorderes Kreuzband (VKB):</strong> Verhindert Vorwärtsverschiebung des Tibia — häufigste Kniebandruptur im Sport</li>
              <li><strong>Hinteres Kreuzband (HKB):</strong> Verhindert Rückwärtsverschiebung</li>
              <li><strong>Innen-/Außenband:</strong> Seitliche Stabilisierung</li>
              <li><strong>Menisken:</strong> Faserknorpelscheiben, Druckverteilung, Stoßdämpfung</li>
            </ul>`,
          },
          {
            title: 'Schultergelenk — beweglichstes Gelenk',
            content: `Kugelgelenk mit dem größten ROM (Range of Motion) des Körpers. 
                       Geringe knöcherne Führung → hohe Muskeldependenz. 
                       <strong>Rotatorenmanschette</strong> (Supraspinatus, Infraspinatus, Teres minor, Subscapularis) 
                       sichert den Humeruskopf in der Pfanne. Häufige Verletzung: Impingement-Syndrom.`,
          },
        ])}
      </div>
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document.querySelector('.page-sport-sub'));
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => {
        const link = btn.dataset.navLink;
        if (link) window.location.hash = link;
      });
    });
    initWimTabs(document);
  }
}
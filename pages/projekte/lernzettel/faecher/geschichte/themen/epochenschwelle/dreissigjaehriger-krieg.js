// pages/projekte/lernzettel/faecher/geschichte/themen/epochenschwelle/dreissigjaehriger-krieg.js
// 1.4 — Dreißigjähriger Krieg (1618–1648)

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }       from '../../../../../../../components/Footer.js';
import { i18n }             from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }      from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderSubhead, renderTags, renderInfobox, renderTable,
  renderTabs, renderAccordion, renderMerkboxGrid, renderCompare,
  renderVTimeline, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../geschichte.js';

// ─── WIM-Tab-Daten ───────────────────────────────────────────────
const DK_TABS = [
  { key: 'ursachen', label: '⚡ Ursachen' },
  { key: 'phasen',   label: '🗓️ 4 Phasen' },
  { key: 'frieden',  label: '🕊️ Westfälischer Frieden' },
  { key: 'folgen',   label: '📉 Folgen' },
];

export default class GeschichteDreissigjaehrigerKriegPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    [
      ['lernzettel.css', 'pages/projekte/lernzettel/styles/lernzettel.css'],
      ['sub.css',        'pages/projekte/lernzettel/styles/sub.css'],
    ].forEach(([id, href]) => {
      if (!document.querySelector(`link[href*="${id}"]`)) {
        const l = document.createElement('link');
        l.rel = 'stylesheet'; l.href = href;
        document.head.appendChild(l);
      }
    });

    const el = document.createElement('div');
    el.className = 'page page-geschichte page-geschichte-sub';
    el.style.setProperty('--lz-accent',     COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() { return `
    <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
      <div class="lz-sub-hero-orb" aria-hidden="true"></div>
      <div class="lz-sub-hero-inner">
        <nav class="lz-sub-breadcrumb">
          <button class="lz-bread-link" data-link="/projekte/lernzettel">Lernzettel</button>
          <i class="fas fa-chevron-right"></i>
          <button class="lz-bread-link" data-link="${BASE}">Geschichte</button>
          <i class="fas fa-chevron-right"></i>
          <span>1.4 · Dreißigjähriger Krieg</span>
        </nav>
        <h1 class="lz-sub-title">Dreißigjähriger<br><em>Krieg 1618–1648.</em></h1>
        <p class="lz-sub-desc">
          Vier Kriegsphasen, ein verwüstetes Reich und ein Frieden, der Europa
          neu ordnet — Geburtsstunde des modernen Staatensystems.
        </p>
        ${renderTags(['1.4', '1618–1648', 'Frühe Neuzeit', 'Westfälischer Frieden', 'Abitur 2026'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">
        ${renderSubhead('Auf einen Blick')}
        <h2 class="lz-h2 reveal">Charakter des Krieges</h2>
        <p class="lz-prose reveal">
          Der Dreißigjährige Krieg war kein einheitlicher Krieg, sondern eine Abfolge
          sich überlagernder Konflikte mit unterschiedlichen Hauptakteuren.
        </p>
        ${renderMerkboxGrid([
          { icon: 'fas fa-cross', title: 'Religiöser Konflikt', text: 'Spannungen zwischen Lutheranern, Calvinisten und Katholiken seit dem Augsburger Frieden (1555). Calvinisten noch ausgeschlossen — Streit um kirchliche Territorien.' },
          { icon: 'fas fa-crown', title: 'Machtpolitischer Konflikt', text: 'Kaiser Ferdinand II. wollte die kaiserliche Autorität im Reich wiederherstellen. Protestantische Fürsten verteidigten ihre Autonomie (Landeshoheit).' },
          { icon: 'fas fa-globe', title: 'Europäischer Machtkampf', text: 'Schweden (Gustav II. Adolf) und Frankreich (Richelieu) intervenierten nicht aus religiösen, sondern aus machtpolitischen Gründen gegen die Habsburger.' },
          { icon: 'fas fa-skull', title: 'Totale Verwüstung', text: 'Deutschland verlor ca. 25–40 % seiner Bevölkerung durch Kampf, Hunger, Seuchen. Manche Regionen (Mecklenburg, Pommern) verloren 50–70 % der Einwohner.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Vertiefung')}
        <h2 class="lz-h2 reveal">Krieg &amp; Frieden im Detail</h2>

        <nav class="wim-tabs" id="dk-tabs" aria-label="Dreißigjähriger Krieg">
          ${DK_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        ${this._panelUrsachen()}
        ${this._panelPhasen()}
        ${this._panelFrieden()}
        ${this._panelFolgen()}

      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderSubhead('Chronologie')}
        <h2 class="lz-h2 reveal">Wichtige Daten 1618–1648</h2>
        ${renderVTimeline([
          { year: '23.05.1618', title: 'Prager Fenstersturz',                 text: 'Böhmische Stände werfen kaiserliche Statthalter aus dem Fenster — symbolischer Kriegsbeginn.' },
          { year: '08.11.1620', title: 'Schlacht am Weißen Berg',             text: 'Böhmen vernichtend geschlagen. Friedrich V. flieht, verliert Krone und Kurwürde.' },
          { year: '1625',       title: 'Dänemark tritt in den Krieg',          text: 'Christian IV. scheitert. Tillys und Wallensteins Armeen dominieren Norddeutschland.' },
          { year: '06.03.1629', title: 'Restitutionsedikt',                    text: 'Ferdinand II. auf dem Höhepunkt — fordert alle seit 1552 säkularisierten Kirchengüter zurück.' },
          { year: '07.1630',    title: 'Schweden landet in Deutschland',       text: 'Gustav II. Adolf mit 13.000 Mann bei Usedom — Wendepunkt des Krieges.' },
          { year: '20.05.1631', title: 'Magdeburger Bluthochzeit',             text: '~20.000 Tote — größtes Massaker des Krieges schockiert Europa.' },
          { year: '16.11.1632', title: 'Tod Gustav II. Adolfs bei Lützen',    text: 'Schweden siegt, verliert aber seinen König. Krieg geht weiter unter schwedischen Generälen.' },
          { year: '1634',       title: 'Wallensteins Ermordung',               text: 'Ferdinand II. ließ seinen eigenen Generalissimus ermorden — Misstrauen und Machtpolitik.' },
          { year: '30.05.1635', title: 'Prager Friede',                        text: 'Mehrzahl der Reichsstände schließen Frieden mit Kaiser — aber Frankreich und Schweden machen weiter.' },
          { year: '1635',       title: 'Frankreich erklärt Spanien den Krieg', text: 'Kardinal Richelieu tritt offen ein — Krieg wird zum europäischen Mächteringen.' },
          { year: '1643–48',    title: 'Friedensverhandlungen in Osnabrück und Münster', text: 'Erste gesamteuropäische Friedenskonferenz mit ~200 Teilnehmerstaaten.' },
          { year: '24.10.1648', title: 'Westfälischer Frieden',               text: 'Kriegsende. Grundstein des modernen Staatensystems.' },
        ])}
      </div>
    </section>

    <section class="lz-content-section" style="padding-top:0;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: { link: `${BASE}/themen/epochenschwelle/reformation`, label: '1.3 · Reformation' },
          next: { link: `${BASE}/themen/industrialisierung/england`,   label: '2.1 · Industrialisierung England' },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  _panelUrsachen() {
    return `
      <div class="wim-category" data-wim-cat="ursachen">
        <p class="lz-prose">
          Der Krieg hatte keine einzelne Ursache — er entstand aus dem
          Zusammentreffen struktureller Spannungen über Jahrzehnte.
        </p>
        ${renderAccordion([
          {
            title: 'Religiöse Ursachen',
            content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;">
              <li>Augsburger Religionsfrieden (1555) ließ <strong>Calvinisten aus</strong> —
                Pfalzgraf Friedrich IV. trat calvinistisch zum Protestantismus — kein Schutz</li>
              <li><strong>Geistlicher Vorbehalt</strong> umstritten: Protestanten weigerten sich,
                konvertierte Bischöfe zu ihrem Amt zurückkehren zu lassen</li>
              <li><strong>Streit um Klostergüter:</strong> Protestanten hatten seit 1555 kirchliche
                Territorien säkularisiert — Kaiser wollte das rückgängig machen</li>
              <li><strong>Donauwörth (1607):</strong> Kaiser löste evangelischen Stadtrat auf —
                Vertrauensbruch für protestantische Stände</li>
            </ul>`,
          },
          {
            title: 'Politisch-konstitutionelle Ursachen',
            content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;">
              <li><strong>Kaisertum vs. Fürstenautonomie:</strong> Ferdinand II. wollte starke
                kaiserliche Zentralgewalt — Fürsten wollten Landeshoheit erhalten</li>
              <li><strong>Protestantische Union (1608)</strong> vs. <strong>Katholische Liga (1609)</strong>:
                Lagerbindung institutionalisiert sich</li>
              <li><strong>Böhmischer Sonderfall:</strong> Böhmen wählte seinen König — Stände
                gegen habsburgische Erbmonarchie</li>
            </ul>`,
          },
          {
            title: 'Dynastische und machtpolitische Ursachen',
            content: `<ul style="margin:0 0 0 1.2rem;line-height:1.9;">
              <li><strong>Habsburger Dominanz:</strong> Österreichische und spanische Habsburger
                koordinierten ihr Vorgehen — alle anderen Mächte fühlten sich eingekreist</li>
              <li><strong>Frankreich</strong> unter Richelieu sah in der Schwächung der Habsburger
                ein nationales Interesse — intervenierte trotz Katholizismus auf protestantischer Seite</li>
              <li><strong>Schweden</strong> wollte die Ostseeherrschaft (<em>dominium maris Baltici</em>) sichern</li>
              <li><strong>Niederlande</strong> kämpften gleichzeitig gegen Spanien um Unabhängigkeit</li>
            </ul>`,
          },
        ])}
      </div>
    `;
  }

  _panelPhasen() {
    return `
      <div class="wim-category hidden" data-wim-cat="phasen">
        ${renderTable({
          headers: ['Phase', 'Zeitraum', 'Hauptakteure', 'Wendepunkte / Ergebnis'],
          rows: [
            ['Böhmische Phase', '1618–1625', 'Böhmische Protestanten vs. Kaiser Ferdinand II. / Spanien', 'Prager Fenstersturz (1618) → Böhmen verliert, Weiße Berg (1620) → Kurfürst Friedrich V. flieht'],
            ['Dänische Phase', '1625–1629', 'Dänemark (Christian IV.) vs. Kaiser + Liga', 'Dänemark geschlagen (Frieden von Lübeck 1629). Restitutionsedikt (1629) — Kaiser auf dem Höhepunkt'],
            ['Schwedische Phase', '1630–1635', 'Schweden (Gustav II. Adolf) + Frankreich vs. Kaiser + Liga', 'Gustav II. Adolf landet in Deutschland; stirbt bei Lützen (1632). Schweden siegt bei Nördlingen nicht → Prager Friede (1635)'],
            ['Französische Phase', '1635–1648', 'Frankreich (offen) + Schweden vs. Habsburger (Österreich + Spanien)', 'Kriegserschöpfung aller Seiten → Westfälischer Friede 1648'],
          ],
        })}
        ${renderInfobox({
          type: 'warning', icon: 'fas fa-fire-flame-curved', title: 'Magdeburger Bluthochzeit (20. Mai 1631)',
          body: `Tilly ließ Magdeburg, die größte protestantische Stadt Norddeutschlands, stürmen.
                 Ca. <strong>20.000 Einwohner</strong> starben, die Stadt brannte nieder.
                 Das Massaker schockierte Europa und trieb weitere protestantische Stände in die
                 Koalition mit Schweden. Symbol für die Barbarei des Krieges.`,
        })}
        ${renderInfobox({
          type: 'blue', icon: 'fas fa-scroll', title: 'Restitutionsedikt (1629)',
          body: `Kaiser Ferdinand II. auf dem Höhepunkt seiner Macht: Er ordnete die
                 <strong>Rückgabe aller seit 1552 säkularisierten Kirchengüter</strong> an
                 katholische Besitzer an. Betraf ~2 Erzbistümer, 12 Bistümer, zahllose Klöster.
                 Reaktion: Protestantische Fürsten — selbst kaisertreue — gingen in Opposition.
                 Das Edikt wurde durch den Westfälischen Frieden aufgehoben.`,
        })}
      </div>
    `;
  }

  _panelFrieden() {
    return `
      <div class="wim-category hidden" data-wim-cat="frieden">
        ${renderInfobox({
          type: 'success', icon: 'fas fa-handshake', title: 'Westfälischer Frieden (24. Oktober 1648)',
          body: `Zwei Verträge gleichzeitig abgeschlossen:
            <ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;">
              <li><strong>Osnabrück:</strong> Frieden zwischen Kaiser / Reich und Schweden</li>
              <li><strong>Münster:</strong> Frieden zwischen Kaiser / Reich und Frankreich +
                Anerkennung der Unabhängigkeit der Niederlande</li>
            </ul>`,
        })}
        <h3 class="lz-h3" style="margin-top:1.5rem;">Territoriale Regelungen</h3>
        ${renderTable({
          headers: ['Empfänger', 'Territorium', 'Bedeutung'],
          rows: [
            ['Schweden',   'Vorpommern, Wismar, Bistümer Verden und Bremen (als Herzogtümer)', 'Schweden zur Ostsee-Großmacht; Einfluss im Reich'],
            ['Frankreich', 'Elsass (außer Straßburg), Metz, Toul, Verdun', 'Frankreichs Stellung als Westmacht gestärkt; Puffer gegen Habsburger'],
            ['Brandenburg-Preußen', 'Hinterpommern, Bistum Minden, Halberstadt', 'Aufstieg zur norddeutschen Großmacht beginnt'],
            ['Schweiz / Niederlande', 'Volle völkerrechtliche Unabhängigkeit', 'De-facto-Unabhängigkeit formell anerkannt'],
          ],
        })}
        <h3 class="lz-h3" style="margin-top:1.5rem;">Religiöse Regelungen</h3>
        ${renderMerkboxGrid([
          { icon: 'fas fa-calendar', title: 'Normaljahr 1624', text: 'Konfessioneller Besitzstand von 1624 wird zum Maßstab. Keine weiteren Rückgaben oder Enteignungen. Das Restitutionsedikt ist null und nichtig.' },
          { icon: 'fas fa-dove', title: 'Calvinisten anerkannt', text: 'Reformierte (Calvinisten) als dritte Konfession gleichberechtigt neben Lutheranern und Katholiken — Erweiterung gegenüber 1555.' },
          { icon: 'fas fa-scale-balanced', title: 'Itio in partes', text: 'Bei konfessionell strittigen Fragen im Reichstag stimmen Protestanten und Katholiken getrennt ab — Mehrheitsbeschlüsse in Religionsfragen unzulässig.' },
          { icon: 'fas fa-person', title: 'Privatreligion', text: 'Selbst wenn der Landesherr eine andere Konfession hat: Privatgottesdienst für Untertanen der alten Konfession erlaubt. Ansatz von Gewissensfreiheit.' },
        ])}
        ${renderInfobox({
          type: '', icon: 'fas fa-earth-europe', title: 'Völkerrechtliche Bedeutung',
          body: `Der Westfälische Frieden gilt als <strong>Geburtsstunde des modernen Staatensystems</strong>:
            <ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;">
              <li>Souveränität der Territorialstaaten anerkannt</li>
              <li>Einmischung in innere Angelegenheiten anderer Staaten — auch religiös — unzulässig</li>
              <li>Prinzip der <em>Gleichheit souveräner Staaten</em> im Völkerrecht</li>
              <li>Mächtegleichgewicht (<em>balance of power</em>) als Stabilisierungsprinzip</li>
              <li>Erste Friedenskonferenz mit dauerhaften Gesandtschaften — Vorläufer moderner Diplomatie</li>
            </ul>`,
        })}
      </div>
    `;
  }

  _panelFolgen() {
    return `
      <div class="wim-category hidden" data-wim-cat="folgen">
        <p class="lz-prose">
          Die Folgen des Dreißigjährigen Krieges waren katastrophal für Deutschland
          und prägend für die europäische Ordnung.
        </p>
        ${renderCompare({
          titleA: 'Deutschland vor 1618', titleB: 'Deutschland nach 1648',
          listA: [
            '~17–20 Millionen Einwohner im Reich',
            'Religiöse Spannungen, aber Institutionen intakt',
            'Kaiser noch mit gewissem Machtpotenzial',
            'Städte und Landwirtschaft funktionsfähig',
            'Handelsnetz noch europäisch konkurrenzfähig',
          ],
          listB: [
            '~10–13 Millionen Einwohner — ca. 30–40 % Verlust',
            'Konfessionelle Ordnung stabilisiert, aber Narben tief',
            'Kaiser auf Zeremonienfunktion reduziert; Fürsten souverän',
            'Weite Landstriche verwüstet, Jahrzehnte Wiederaufbau nötig',
            'Deutschland wirtschaftlich und politisch zurückgeworfen',
          ],
        })}
        <h3 class="lz-h3" style="margin-top:1.5rem;">Langfristige Folgen</h3>
        ${renderAccordion([
          { title: 'Demografische Folgen', content: `Deutschland erholte sich demographisch erst um 1750. Manche Gebiete (Mecklenburg, Württemberg) erst um 1800. Der Krieg hinterließ tiefe <strong>kulturelle Traumata</strong>: Grimmelshausens <em>Simplicissimus</em> (1668) ist das literarische Zeugnis dieser Verwüstung.` },
          { title: 'Politische Folgen für Deutschland', content: `Der Westfälische Frieden <strong>zementierte die Kleinstaaterei</strong>. Das Reich blieb ein lockerer Verbund von ~300 Territorien bis 1806. Frankreich und Schweden erhielten Garantenstellung für die Reichsverfassung — Einmischungsrecht in deutsche Angelegenheiten.<br><br>Aufstieg <strong>Brandenburgs-Preußens</strong> zur norddeutschen Großmacht beginnt mit den Gebietsgewinnen von 1648.` },
          { title: 'Folgen für das europäische Staatensystem', content: `Das <strong>Westfälische System</strong> prägt die internationale Ordnung bis heute:<ul style="margin:.5rem 0 0 1.2rem;line-height:1.9;"><li>Staatssouveränität als Grundnorm des Völkerrechts</li><li>Religion kein legitimer Kriegsgrund mehr im Staatensystem</li><li>Mächtegleichgewicht als Stabilisierungsstrategie (→ Wiener Kongress 1815)</li><li>Aufstieg Frankreichs zur dominanten Kontinentalmacht (bis Napoleon)</li><li>Beginn des Niedergangs der Habsburger Universalmonarchie</li></ul>` },
        ])}
      </div>
    `;
  }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initWimTabs(document);
  }
}
// pages/projekte/lernzettel/faecher/chemie/themen/1/1-1.js
// Kapitel 1.1 — Die Chemie im Kanon der Naturwissenschaften

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS,
  renderInfobox,
  renderTable,
  renderMerkboxGrid,
  renderCompare,
  renderSubhead,
  renderTags,
  renderAccordion,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../chemie.js';

export default class Chemie_1_1 {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    [
      ['lernzettel.css', 'pages/projekte/lernzettel/styles/lernzettel.css'],
      ['sub.css', 'pages/projekte/lernzettel/styles/sub.css'],
    ].forEach(([id, href]) => {
      if (!document.querySelector(`link[href*="${id}"]`)) {
        const l = document.createElement('link'); l.rel = 'stylesheet'; l.href = href;
        document.head.appendChild(l);
      }
    });
    const el = document.createElement('div');
    el.className = 'page page-chemie page-chemie-sub';
    el.style.setProperty('--lz-accent', COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  _html() { return `
    <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
      <div class="lz-sub-hero-inner">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-breadcrumb">
          <button data-link="${BASE}" class="lz-bread-link">Chemie</button>
          <i class="fas fa-chevron-right"></i><span>Kapitel 1</span>
          <i class="fas fa-chevron-right"></i><span>1.1</span>
        </div>
        <h1 class="lz-sub-title">
          Die Chemie im Kanon<br><em>der Naturwissenschaften</em>
        </h1>
        <p class="lz-sub-desc">
          Einordnung und Gegenstand der Chemie · Verhältnis zu den anderen
          Naturwissenschaften · Die fünf Basiskonzepte des BW-Bildungsplans
        </p>
        ${renderTags(['Kap. 1.1', 'Naturwissenschaften', 'Basiskonzepte', 'LK Chemie BW'])}
      </div>
    </section>

    <section class="lz-content-section">
      <div class="lz-section-wrap">

        <!-- ══════════════════════════════════════════════
             1. GEGENSTAND UND DEFINITION
        ══════════════════════════════════════════════ -->
        ${renderSubhead('Gegenstand und Definition')}
        <h2 class="lz-h2 reveal">Was ist Chemie?</h2>
        <p class="lz-prose reveal">
          Chemie ist die <strong>Naturwissenschaft vom Aufbau, den Eigenschaften und
          der Umwandlung von Stoffen</strong>. Sie beantwortet drei fundamentale Fragen:
          <em>Woraus besteht Materie?</em> — <em>Welche Eigenschaften haben Stoffe?</em> —
          <em>Wie und warum wandeln sie sich um?</em>
        </p>
        <p class="lz-prose reveal">
          Das Charakteristikum chemischen Denkens ist die simultane Betrachtung
          auf <strong>drei Repräsentationsebenen</strong>. Wer nur eine Ebene beherrscht,
          versteht Chemie nicht vollständig (Johnstone-Dreieck, 1982):
        </p>

        ${renderTable({
          headers: ['Ebene', 'Beschreibung', 'Methoden und Werkzeuge', 'Beispiel: Kochsalz (NaCl)'],
          rows: [
            ['Makroskopisch',
             'Die direkt wahrnehmbare Welt der Stoffe — alles, was man sehen, messen, wiegen und riechen kann.',
             'Waage, Thermometer, Titration, Spektrometer, Kalorimeter',
             'Weißes, kristallines Pulver · Schmelzpunkt 801 °C · Dichte 2,16 g/cm³ · gut wasserlöslich · leitet Strom als Lösung'],
            ['Submikroskopisch',
             'Die unsichtbare Welt der Atome, Moleküle und Ionen — erklärt, warum Stoffe die beobachteten Eigenschaften haben.',
             'Kristallstrukturanalyse (Röntgen), Computersimulation, NMR, Elektronenmikroskopie',
             'Na⁺- und Cl⁻-Ionen im kubisch-flächenzentrierten Ionengitter · Coulombsche Anziehung sehr stark → hoher Schmelzpunkt · in Wasser: Hydratation der Ionen → Dissoziation → leitend'],
            ['Symbolisch',
             'Die formale Sprache der Chemie — Formeln, Gleichungen, Strukturzeichnungen, Diagramme, mathematische Ausdrücke.',
             'Lewis-Formeln, IUPAC-Nomenklatur, Reaktionsgleichungen, Energiediagramme, Strukturformeln',
             'NaCl · M = 58,44 g/mol · Na + ½ Cl₂ → NaCl · ΔH°_f = −411 kJ/mol · K_L(25°C) = 37 mol²/L²'],
          ],
          highlight: [1],
        })}

        ${renderInfobox({
          type: 'blue', icon: 'fas fa-lightbulb', title: 'Das Johnstone-Dreieck — warum Chemie schwer ist',
          body: `Der Chemiedidaktiker Alex Johnstone (1982) erkannte: Chemie ist kognitiv anspruchsvoll,
                 weil Lernende ständig zwischen allen drei Ebenen wechseln und sie verknüpfen müssen.
                 Ein gelöster Stoff <em>verschwindet</em> makroskopisch (→ makro) —
                 submikroskopisch verteilen sich Ionen homogen (→ submikro) —
                 symbolisch schreibt man c = n/V mol/L (→ symbolisch).
                 Wer nur die Formel kennt, aber nicht versteht, was submikroskopisch passiert,
                 kann Chemie nicht auf neue Situationen übertragen.`,
        })}

        <!-- ══════════════════════════════════════════════
             2. DIE CHEMIE IM KANON
        ══════════════════════════════════════════════ -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Die Chemie im Kanon der Naturwissenschaften')}
          <h3 class="lz-h3">Einordnung und Beziehungen zu anderen Wissenschaften</h3>
          <p class="lz-prose">
            Die Naturwissenschaften bilden einen <strong>Kanon</strong> — ein
            System aufeinander bezogener Disziplinen, die gemeinsam die Natur
            beschreiben und erklären. Die Chemie nimmt dabei die Stellung einer
            <em>„zentralen Wissenschaft"</em> (<em>central science</em>) ein:
            Sie nimmt physikalische Grundprinzipien auf und liefert die
            molekulare Grundlage für biologische, geowissenschaftliche und
            medizinische Phänomene.
          </p>

          ${renderTable({
            headers: ['Disziplin', 'Kernfrage', 'Gegenstand', 'Beziehung zur Chemie'],
            rows: [
              ['Physik',
               'Wie funktioniert Materie und Energie grundlegend?',
               'Energie, Kräfte, Felder, Elementarteilchen, Raum-Zeit',
               '<strong>Grundlage:</strong> Quantenmechanik erklärt Atombau und Bindungen; Thermodynamik liefert ΔH, ΔG, ΔS; Kernphysik: Radioaktivität; Elektrodynamik: Spektroskopie. → Physikalische Chemie ist die direkte Schnittstelle.'],
              ['<strong>Chemie</strong>',
               'Wie sind Stoffe aufgebaut, und wie wandeln sie sich um?',
               'Stoffe, ihre Struktur, Eigenschaften und Reaktionen',
               '<strong>Zentrale Brückenwissenschaft:</strong> Empfängt physikalische Prinzipien, liefert molekulare Erklärungen für Biologie, Geologie und Medizin. Ohne Chemie sind alle Nachbardisziplinen unvollständig.'],
              ['Biologie',
               'Wie funktioniert das Leben?',
               'Lebewesen, Strukturen, Funktionen, Evolution, Ökologie',
               '<strong>Biochemie als Schnittstelle:</strong> Alle Lebensvorgänge sind letztlich chemische Reaktionen. DNA-Replikation, Enzymkatalyse, ATP-Synthese, Membrantransport, Immunreaktion — alles ist Chemie auf molekularer Ebene.'],
              ['Geowissenschaften',
               'Wie ist die Erde aufgebaut und wie verändert sie sich?',
               'Erdkruste, Mantel, Atmosphäre, Ozean, Klima, Minerale',
               '<strong>Geochemie:</strong> Elementhäufigkeiten in der Erdkruste (Clarke-Werte), Silikatchemie, Kohlenstoff-/Stickstoff-/Schwefelkreislauf, Atmosphärenchemie (O₃-Schicht, CO₂-Treibhauseffekt), Verwitterung, Mineralneubildung.'],
              ['Astronomie / Astrophysik',
               'Wie ist das Universum aufgebaut und entstanden?',
               'Sterne, Galaxien, Planeten, kosmische Strahlung, Urknall',
               '<strong>Astrochemie / Kosmochemie:</strong> Nucleosynthese der Elemente im Urknall und in Sternen; interstellare Moleküle (H₂, CO, Aminosäuren in Meteoriten); Spektralanalyse von Sternatmosphären.'],
              ['Medizin / Pharmazie',
               'Wie erhält man Gesundheit und bekämpft Krankheiten?',
               'Körperfunktionen, Pathologie, Pharmakologie, Diagnostik',
               '<strong>Pharmakochemie / Biochemie:</strong> Arzneistoffsynthese und -wirkung; Enzyme als Targets; Rezeptor-Ligand-Wechselwirkung; klinische Chemie (Blutbild, Enzymaktivitäten); Toxikologie; Bildgebung (Kontrastmittel).'],
            ],
            highlight: [1],
          })}

          ${renderInfobox({
            type: '', icon: 'fas fa-sitemap', title: 'Interdisziplinarität — Grenzwissenschaften',
            body: `An den Grenzen zwischen Chemie und Nachbardisziplinen entstehen eigenständige Forschungsfelder:
                   <strong>Physikalische Chemie</strong> (Quantenmechanik der Bindung, Thermodynamik, Kinetik) ·
                   <strong>Biochemie / Molekularbiologie</strong> ·
                   <strong>Geochemie</strong> ·
                   <strong>Astrochemie</strong> ·
                   <strong>Medizinische Chemie / Pharmakochemie</strong> ·
                   <strong>Umweltchemie</strong> ·
                   <strong>Materialwissenschaft</strong> ·
                   <strong>Lebensmittelchemie</strong> ·
                   <strong>Forensische Chemie</strong>.<br>
                   Diese Interdisziplinarität macht deutlich: Chemie ist nicht isoliert,
                   sondern das Bindemittel des naturwissenschaftlichen Kanons.`,
          })}
        </div>

        <!-- ══════════════════════════════════════════════
             3. TEILGEBIETE — REIN vs. ANGEWANDT
        ══════════════════════════════════════════════ -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Teilgebiete der Chemie')}
          <h3 class="lz-h3">Reine Chemie und Angewandte Chemie</h3>

          ${renderCompare({
            titleA: 'Reine / Grundlagenchemie',
            titleB: 'Angewandte / Technische Chemie',
            listA: [
              'Erkenntnisgewinn als Selbstzweck — ohne primären Anwendungsbezug',
              'Neue Reaktionen, Moleküle und Materialien entdecken und charakterisieren',
              'Mechanismen, Gesetzmäßigkeiten und Strukturen aufklären',
              'Neue Analysemethoden entwickeln (NMR, MS, HPLC)',
              'Zeitrahmen: Jahre bis Jahrzehnte; Ergebnis oft unvorhersehbar',
              'Beispiel: Entdeckung der Benzolstruktur (Kekulé, 1865)',
              'Beispiel: Fullerene C₆₀ (Kroto, Curl, Smalley, Nobel 1996)',
            ],
            listB: [
              'Lösung gesellschaftlicher, medizinischer, industrieller Probleme',
              'Großtechnische Syntheseverfahren entwickeln und optimieren',
              'Haber-Bosch: N₂ + 3H₂ ⇌ 2NH₃ (ca. 150 Mio. t NH₃/Jahr)',
              'Neue Werkstoffe, Arzneimittel, Batterien, Farbstoffe entwickeln',
              'Grüne Chemie: effizientere und nachhaltigere Prozesse (12 Prinzipien)',
              'Beispiel: Penicillin als Massenprodukt (Fleming/Florey/Chain)',
              'Beispiel: Li-Ionen-Akku (Goodenough, Nobel 2019)',
            ],
          })}

          <h3 class="lz-h3" style="margin-top:1.75rem;">Die großen Teilgebiete der Chemie</h3>

          ${renderAccordion([
            {
              title: 'Anorganische Chemie — Elemente ohne C-Gerüst',
              content: `<p class="lz-prose">Untersucht alle Elemente und Verbindungen
                        <strong>ohne Kohlenstoff-Grundgerüst</strong>. Ausnahmen
                        (historisch zur Anorganik gezählt): CO, CO₂, Carbonate (CO₃²⁻),
                        Cyanide (CN⁻), Carbide (CaC₂), elementarer Kohlenstoff
                        (Graphit, Diamant, Fullerene, Graphen).</p>
                        <p class="lz-prose"><strong>Hauptgebiete im LK:</strong>
                        Hauptgruppenelemente (1.–8. HG: Alkalimetalle, Erdalkalimetalle,
                        Borgruppe, Kohlenstoffgruppe, Stickstoffgruppe, Chalkogene,
                        Halogene, Edelgase), Nebengruppenelemente (d-Block: Ti, V, Cr, Mn,
                        Fe, Co, Ni, Cu, Zn und Nachbargruppen), Koordinationschemie /
                        Komplexe (Liganden, Zentralatom, Chelate, Farbigkeit),
                        Salze und Ionenverbindungen, Oxide, Säuren, Basen, Nanotechnologie.</p>`,
            },
            {
              title: 'Organische Chemie — Chemie des Lebens',
              content: `<p class="lz-prose">Chemie der <strong>Kohlenstoffverbindungen</strong>.
                        Über <strong>20 Millionen</strong> bekannte Verbindungen —
                        mehr als alle anderen Elemente zusammen, weil Kohlenstoff
                        (4 Valenzelektronen) stabile C–C-, C=C-, C≡C-Bindungen,
                        Ringe und dreidimensionale Gerüste bildet (<em>Katenierung</em>).</p>
                        <p class="lz-prose"><strong>Hauptgebiete im LK:</strong>
                        Alkane (SP³ — Konformation, Verbrennung), Alkene (SP² — AE-Reaktionen,
                        Markownikow), Alkine (SP — AE-Reaktionen), aromatische
                        Kohlenwasserstoffe (Benzol, SE-Reaktionen), funktionelle Gruppen
                        (Halogenide, Alkohole, Aldehyde, Ketone, Carbonsäuren, Ester,
                        Amine, Amide), Reaktionsmechanismen (S_N1, S_N2, E1, E2),
                        Stereochemie (R/S-Chiralität, E/Z-Isomerie), Naturstoffe.</p>`,
            },
            {
              title: 'Physikalische Chemie — Warum reagieren Stoffe?',
              content: `<p class="lz-prose">Verbindet physikalische Grundprinzipien
                        mit chemischen Fragestellungen. Erklärt das
                        <strong>fundamentale Warum</strong> hinter chemischen Reaktionen.</p>
                        <p class="lz-prose"><strong>Hauptgebiete im LK:</strong>
                        Thermodynamik (innere Energie U, Enthalpie H, Entropie S,
                        freie Enthalpie G = H − TS, Hess'scher Wärmesatz, Kalorimetrie),
                        Kinetik (Reaktionsgeschwindigkeit, Konzentrations-Zeit-Gesetze,
                        Aktivierungsenergie E_A, Arrhenius-Gleichung k = A·e^(−E_A/RT),
                        Reaktionsmechanismen, Katalyse),
                        Elektrochemie (Galvanische Zellen, Nernst-Gleichung,
                        Standardpotentiale, Elektrolyse, Faraday'sche Gesetze),
                        Spektroskopie (IR: Schwingungen; UV/Vis: Elektronenübergänge;
                        NMR: Kernspins; MS: Fragmentierung).</p>`,
            },
            {
              title: 'Analytische Chemie — Identifizierung und Bestimmung',
              content: `<p class="lz-prose">Entwickelt Methoden zur
                        <strong>qualitativen Identifizierung</strong> und
                        <strong>quantitativen Bestimmung</strong> der Zusammensetzung
                        von Stoffen und Gemischen.</p>
                        <p class="lz-prose"><strong>Klassisch:</strong>
                        Qualitative Analyse (Nachweisreaktionen: Flammenfärbung,
                        Iod-Stärke-Test, Tollens-Probe, Silbernitrat-Test,
                        Bariumchlorid-Test), quantitative Analyse
                        (Titration: Säure-Base, Redox, Komplexometrie mit EDTA;
                        Gravimetrie).</p>
                        <p class="lz-prose"><strong>Instrumental:</strong>
                        Chromatografie (DC, Säulenchromatografie, GC-FID, HPLC-UV),
                        Spektroskopie (IR-Absorptionsbanden → funktionelle Gruppen;
                        ¹H-NMR → Protonen, chemische Verschiebung, Kopplungsmuster;
                        MS → Molekülmasse, Fragmentierungsmuster, Isotopenmuster;
                        UV/Vis → konjugierte Systeme, Farbstoffe),
                        elektrochemisch (pH-Glas-Elektrode, ionenselektive Elektroden).</p>`,
            },
            {
              title: 'Biochemie — Chemie des Lebens auf molekularer Ebene',
              content: `<p class="lz-prose"><strong>Biomoleküle:</strong>
                        Proteine (aus 20 Aminosäuren, Peptidbindung, Primär- bis
                        Quartärstruktur, Enzyme als Biokatalysatoren,
                        Schlüssel-Schloss/induced-fit-Modell),
                        Nucleinsäuren (DNA: B-Helix, Watson-Crick-Basenpaare
                        A-T / G-C; RNA: Transkription, Translation),
                        Kohlenhydrate (Monosaccharide: Glukose, Fruktose; Di-: Saccharose,
                        Maltose; Polysaccharide: Stärke, Cellulose, Chitin;
                        glycosidische Bindung α/β),
                        Lipide (Fettsäuren: gesättigt/ungesättigt;
                        Triglyceride; Phospholipide → Biomembran;
                        Steroidhormone; fettlösliche Vitamine).</p>
                        <p class="lz-prose"><strong>Stoffwechsel:</strong>
                        Glykolyse (10 Schritte; Glukose → 2 Pyruvat + 2 ATP + 2 NADH),
                        Citratzyklus, oxidative Phosphorylierung (Atmungskette → 32 ATP/Glukose),
                        Photosynthese (Lichtreaktion: H₂O → O₂ + 2[H]; Dunkelreaktion: Calvin-Zyklus),
                        β-Oxidation der Fettsäuren.</p>`,
            },
          ])}
        </div>

        <!-- ══════════════════════════════════════════════
             4. DIE FÜNF BASISKONZEPTE
        ══════════════════════════════════════════════ -->
        <div class="reveal" style="margin-top:2.5rem;">
          ${renderSubhead('Die fünf Basiskonzepte — BW-Bildungsplan')}
          <h3 class="lz-h3">Das konzeptuelle Gerüst des gesamten Lehrplans</h3>
          <p class="lz-prose">
            Der Bildungsplan BW strukturiert die gesamte Schulchemie von Klasse 8
            bis zum Abitur um <strong>fünf übergreifende Basiskonzepte</strong>.
            Sie sind keine isolierten Wissensblöcke, sondern die
            <em>konzeptuellen Brillen</em>, durch die alle Themen betrachtet werden.
            Im Abitur wird ausdrücklich konzeptübergreifendes Denken geprüft.
          </p>

          ${renderMerkboxGrid([
            {
              icon: 'fas fa-atom',
              title: '① Stoff-Teilchen-Konzept',
              text: `Alle Stoffe bestehen aus diskreten Teilchen (Atome, Moleküle, Ionen).
                     Makroskopische Eigenschaften werden vollständig durch Art, Anordnung
                     und Wechselwirkungen dieser Teilchen bestimmt. Massenerhaltung:
                     Atome werden bei Reaktionen nur neu kombiniert, nicht erzeugt/vernichtet.
                     Grundlage: Aggregatzustände, Löslichkeit, elektrische Leitfähigkeit,
                     osmotischer Druck, Gase (Kinetische Gastheorie: p·V = n·R·T).`,
            },
            {
              icon: 'fas fa-shapes',
              title: '② Struktur-Eigenschafts-Konzept',
              text: `Die räumliche Struktur (VSEPR → Molekülgeometrie), die Polarität der
                     Bindungen (Elektronegativitätsdifferenz) und die daraus resultierenden
                     zwischenmolekularen Wechselwirkungen (London, Dipol-Dipol, H-Brücken)
                     bestimmen direkt makroskopische Eigenschaften:
                     Siedepunkt, Schmelzpunkt, Löslichkeit, Viskosität, Reaktivität.
                     Chiralität: zwei Enantiomere können völlig verschiedene biologische
                     Wirkungen haben (Thalidomid-Tragödie).`,
            },
            {
              icon: 'fas fa-exchange-alt',
              title: '③ Donator-Akzeptor-Konzept',
              text: `Chemische Reaktionen als Übertragungsprozesse: Donator = Geber,
                     Akzeptor = Nehmer.
                     Protonenübertragung (Brønsted-Säure-Base): Säure = Protonendonator,
                     Base = Protonenakzeptor; korrespondierende Paare HA/A⁻.
                     Elektronenübertragung (Redox): Reduktionsmittel = Elektronendonator,
                     Oxidationsmittel = Elektronenakzeptor; Redoxpaare Red/Ox.
                     Lewis-Säure-Base: Elektronenpaarakzeptor/-donor.`,
            },
            {
              icon: 'fas fa-balance-scale',
              title: '④ Gleichgewichts-Konzept',
              text: `Reversible Reaktionen stellen ein dynamisches Gleichgewicht ein:
                     v_Hin = v_Rück → makroskopisch keine Änderung, mikroskopisch
                     laufen beide Richtungen weiter.
                     MWG: K_c = [C]^c·[D]^d / ([A]^a·[B]^b); Feste Stoffe/reines
                     Lösungsmittel werden nicht berücksichtigt.
                     Le-Chatelier-Prinzip: Störung → GG-Verschiebung zur Kompensation.
                     Anwendungen: Puffer (Henderson-Hasselbalch), K_L (Löslichkeitsprodukt),
                     K_s/K_b (Säure-/Base-Konstante), Haber-Bosch-Optimierung.`,
            },
            {
              icon: 'fas fa-fire-alt',
              title: '⑤ Energiekonzept',
              text: `Jede chemische Reaktion ist mit Energieumsatz verbunden.
                     ΔH < 0: exotherm (Wärme frei), ΔH > 0: endotherm (Wärme nötig).
                     Entropie ΔS: Unordnung (ΔS > 0 → mehr Unordnung).
                     Freie Enthalpie: ΔG = ΔH − T·ΔS.
                     ΔG < 0: spontan; ΔG = 0: Gleichgewicht; ΔG > 0: nicht spontan.
                     Aktivierungsenergie E_A: Energieschwelle; Katalysator senkt E_A.
                     Elektrochemie: ΔG = −n·F·E_Zelle.`,
            },
          ])}

          ${renderTable({
            headers: ['Basiskonzept', 'Zentraler Begriff', 'Formelzeichen', 'Wichtige Kapitel'],
            rows: [
              ['① Stoff-Teilchen', 'Mol / Molmasse / Avogadro-Konstante', 'n, M, Nₐ', 'Kap. 1.3, 2, 3, 4'],
              ['② Struktur-Eigenschaft', 'VSEPR / Elektronegativität / Polarität', 'ΔEN, μ', 'Kap. 3, 4, 9'],
              ['③ Donator-Akzeptor', 'pK_s / Standardpotential / Oxidationszahl', 'pKs, E°, OZ', 'Kap. 7'],
              ['④ Gleichgewicht', 'Gleichgewichtskonstante / Le Chatelier', 'K_c, K_p, K_s, K_L', 'Kap. 6, 7'],
              ['⑤ Energie', 'Freie Enthalpie / Aktivierungsenergie', 'ΔG, ΔH, ΔS, E_A', 'Kap. 5'],
            ],
          })}

          ${renderInfobox({
            type: 'success', icon: 'fas fa-graduation-cap', title: 'Konzeptübergreifendes Denken — Beispiel Esterbildung',
            body: `Die Esterbildung (RCOOH + R'OH ⇌ RCOOR' + H₂O) berührt alle fünf Konzepte:<br>
                   <strong>①</strong> Stoff-Teilchen: Carboxyl- und Hydroxylgruppen-Moleküle reagieren auf Teilchenebene.<br>
                   <strong>②</strong> Struktur-Eigenschaft: Ester riechen fruchtig, haben niedrigeren Siedepunkt als
                   die Ausgangsstoffe (keine intermolekularen H-Brücken zwischen gleichartigen Estermolekülen).<br>
                   <strong>③</strong> Donator-Akzeptor: Säurekatalytische Protonierung der Carbonylgruppe
                   (H⁺ als Protonendonator → Aktivierung der Carbonylgruppe).<br>
                   <strong>④</strong> Gleichgewicht: Reversibel; durch Wasserentzug (Molsieb, Wasserabscheider)
                   oder Edukt-Überschuss lässt sich das GG auf die Produktseite verschieben.<br>
                   <strong>⑤</strong> Energie: ΔH ≈ −5 bis −15 kJ/mol (leicht exotherm); geringe
                   Aktivierungsenergie bei säurekatalysierter Reaktion.`,
          })}
        </div>

      </div>
    </section>

    <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({
          prev: null,
          next: { label: '1.2 Denk- und Arbeitsweisen', link: `${BASE}/themen/1/1-2` },
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `; }

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
  }
}
// pages/projekte/lernzettel/faecher/chemie/themen/10/10-4.js
// Kapitel 10.4 — Arzneimittel
// 10.4.1 Entwicklung / 10.4.2 Wirkungsweise / 10.4.3 Arzneistoffsynthese
import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML } from '../../../../../../../components/Footer.js';
import { i18n } from '../../../../../../../shared/js/i18n.js';
import { ensureComponentsCSS, renderInfobox, renderTable, renderMerkboxGrid, renderFormulaBox, renderSubhead, renderTags, renderAccordion, renderCompare, initInteractive } from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';

import { COLOR, COLOR_RGB, BASE } from '../../chemie.js';


const TABS=[{key:'a',icon:'fas fa-pills',label:'10.4.1–2 Entwicklung & Wirkung'},{key:'b',icon:'fas fa-flask',label:'10.4.3 Synthese'}];

function buildWimHTML(fn){const nav=TABS.map((t,i)=>`<button class="wim-tab${i===0?' active':''}" data-wim="${t.key}" role="tab"><i class="${t.icon}"></i><span>${t.label}</span></button>`).join('');const panels=TABS.map((t,i)=>`<div class="wim-category${i===0?' active':' hidden'}" data-wim-cat="${t.key}" role="tabpanel">${fn(t.key)}</div>`).join('');return`<nav class="wim-tabs" role="tablist" id="tabs104">${nav}</nav>${panels}`;}

function initTabs(){const nav=document.getElementById('tabs104');if(!nav)return;const tabs=nav.querySelectorAll('.wim-tab[data-wim]');if(!tabs.length)return;const panels=[];let el=nav.nextElementSibling;while(el){if(el.classList.contains('wim-category'))panels.push(el);el=el.nextElementSibling;}const slider=document.createElement('span');slider.className='wim-tab-slider';nav.appendChild(slider);function setSlider(tab){slider.style.width=`${tab.getBoundingClientRect().width}px`;slider.style.transform=`translateX(${tab.offsetLeft}px)`;}setTimeout(()=>setSlider(nav.querySelector('.wim-tab.active')||tabs[0]),60);window.addEventListener('resize',()=>{const a=nav.querySelector('.wim-tab.active');if(a)setSlider(a);});tabs.forEach((tab,i)=>{tab.addEventListener('click',function(){tabs.forEach(b=>b.classList.remove('active'));this.classList.add('active');setSlider(this);this.scrollIntoView({block:'nearest',inline:'center',behavior:'smooth'});const key=this.dataset.wim;panels.forEach(p=>{p.classList.toggle('active',p.dataset.wimCat===key);p.classList.toggle('hidden',p.dataset.wimCat!==key);});});tab.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();(tabs[i+1]||tabs[0]).click();}if(e.key==='ArrowLeft'){e.preventDefault();(tabs[i-1]||tabs[tabs.length-1]).click();}});});}

export default class Chemie_10_4 {
  constructor(router){this.router=router;}

  render(){ensureComponentsCSS();[['lernzettel.css','pages/projekte/lernzettel/styles/lernzettel.css'],['chemie-sub.css','pages/projekte/lernzettel/faecher/chemie/chemie-sub.css'],['wim.css','shared/styles/components/wim.css']].forEach(([id,href])=>{if(!document.querySelector(`link[href*="${id}"]`)){const l=document.createElement('link');l.rel='stylesheet';l.href=href;document.head.appendChild(l);}});const el=document.createElement('div');el.className='page page-chemie page-chemie-sub';el.style.setProperty('--lz-accent',COLOR);el.style.setProperty('--lz-accent-rgb',COLOR_RGB);el.innerHTML=this._html();return el;}

  _html(){return`
    <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
      <div class="lz-sub-hero-inner"><div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-breadcrumb"><button data-link="${BASE}" class="lz-bread-link">Chemie</button><i class="fas fa-chevron-right"></i><span>Kapitel 10</span><i class="fas fa-chevron-right"></i><span>10.4</span></div>
        <h1 class="lz-sub-title">Arzneimittel<br><em>Entwicklung, Wirkung und Synthese</em></h1>
        <p class="lz-sub-desc">Wirkstoffsuche · Lead-Optimierung · Pharmakokinetik · Rezeptorbindung · Aspirin · Penicillin · Ibuprofen-Synthese</p>

        ${renderTags(['Kap. 10.4','Arzneimittel','Pharmazie','Aspirin','Wirkungsmechanismus','LK Chemie BW'])}
      </div>
    </section>
    <section class="lz-content-section"><div class="lz-section-wrap">${buildWimHTML(k=>k==='a'?this._entwicklung():this._synthese())}</div></section>
    <section class="lz-content-section" style="padding:1.5rem 0 3rem;"><div class="lz-section-wrap">${renderPageNav({prev:{label:'10.3 Tenside & Waschmittel',link:`${BASE}/themen/10/10-3`},next:{label:'10.5 Technische Verfahren',link:`${BASE}/themen/10/10-5`}}, BASE)}</div></section>
    ${footerHTML(this.router)}
  `;}

  _entwicklung(){return`

    ${renderSubhead('10.4.1 — Entwicklung · 10.4.2 — Wirkungsweise')}
    <h2 class="lz-h2">Arzneimittelentwicklung — vom Wirkstoff zum Medikament</h2>
    <p class="lz-prose">Die Entwicklung eines neuen Arzneimittels dauert durchschnittlich 10–15 Jahre und kostet ~1–2 Mrd. €. Von ~10 000 getesteten Substanzen schafft es nur eine auf den Markt.</p>

    ${renderTable({headers:['Phase','Dauer','Ziel','Methoden'],rows:[['Wirkstoffsuche (Drug Discovery)','2–5 Jahre','Identifikation möglicher Wirkstoffe','High-Throughput-Screening (HTS); Naturstoffextraktion; rationales Wirkstoffdesign (Computer-Aided Drug Design, CADD); Combinatorial Chemistry'],['Präklinische Tests','1–3 Jahre','Sicherheit und Wirksamkeit in Zellkultur und Tiermodellen prüfen','In-vitro-Tests; Tierversuche (Mäuse, Ratten, Hunde); Toxizität, Pharmakodynamik/-kinetik bestimmen'],['Klinische Phase I','1–2 Jahre','Erstanwendung am Menschen; Sicherheit; Dosisfindung','20–100 gesunde Probanden; Verträglichkeit; max. tolerierte Dosis (MTD)'],['Klinische Phase II','2–3 Jahre','Wirksamkeit bei Patienten; Dosisoptimierung','100–500 Patienten; doppelblind vs. Placebo'],['Klinische Phase III','3–5 Jahre','Zulassung; Vergleich mit Standardtherapie','1000–5000 Patienten; randomisiert; multizentrisches Design'],['Zulassung (EMA/FDA)','1–2 Jahre','Behördliche Prüfung und Genehmigung','Review aller Daten; Nutzen-Risiko-Abwägung'],['Phase IV (Post-Marketing)','Laufend','Langzeitbeobachtung; Nebenwirkungsmonitoring (Pharmakovigilanz)','Spontanmeldungen; Registries; PASS/PAES-Studien']],highlight:[2,4]})}
    <h3 class="lz-h3" style="margin-top:1.75rem;">Pharmakokinetik — ADME</h3>

    ${renderMerkboxGrid([{icon:'fas fa-pills',title:'A — Absorption',text:`Aufnahme des Wirkstoffs in den Körper. Oral: Magen-Darm → Leber (First-Pass-Effekt) → Blut. Bioverfügbarkeit F = Anteil des Wirkstoffs, der systemisch verfügbar wird. F=1 (100%) bei i.v.-Injektion. Lipophile Substanzen: bessere Resorption durch Membranen. pKa-Abhängigkeit: saure Substanzen: im Magen (sauer) protoniert → schlecht löslich; im Darm (basisch) ionisiert → gut löslich.`},{icon:'fas fa-route',title:'D — Distribution (Verteilung)',text:`Verteilung im Körper über Blut und Lymphe. Verteilungsvolumen V_d: V_d = Dosis / Plasmakonzentration. Hohe V_d: Wirkstoff in Gewebe angereichert (hydrophob). Niedrige V_d: bleibt im Plasma (hydrophil/proteingebunden). Plasma-Proteinbindung (v.a. Albumin) beeinflusst V_d.`},{icon:'fas fa-cogs',title:'M — Metabolismus',text:`Biotransformation: Phase I (CYP450-Reaktionen: Hydroxylierung, Oxidation, Reduktion, Hydrolyse) und Phase II (Konjugation: Glucuronidierung, Sulfatierung, Glutathion-Konjugation) → polarere, ausscheidbare Metaboliten. First-Pass-Effekt: orale Einnahme → Leber metabolisiert vor systemischer Verfügbarkeit. Induktion/Inhibition von CYP3A4 → Arzneimittelwechselwirkungen!`},{icon:'fas fa-toilet',title:'E — Elimination (Ausscheidung)',text:`Niere (renal): polare/ionisierte Substanzen ausgeschieden. Galle (biliär): große/konjugierte Substanzen. Lunge: flüchtige Substanzen (Anästhetika, Alkohol). Halbwertszeit t½ = 0,693 · V_d / CL (CL = Clearance). Steady-State nach ~5 Halbwertszeiten bei regelmäßiger Einnahme.`}])}
    <h3 class="lz-h3" style="margin-top:1.75rem;">Wirkungsmechanismen von Arzneistoffen (10.4.2)</h3>

    ${renderTable({headers:['Mechanismus','Prinzip','Beispiele','Zielstruktur'],rows:[['Rezeptor-Agonisten','Binden an Rezeptor und aktivieren ihn (mimiert natürl. Liganden)','Morphin (μ-Opioid-Rez.), Salbutamol (β₂-Adrenoz., Asthmamittel), Adrenalin','G-Protein-gek. Rez., Ionenkanäle, Kernrezeptoren'],['Rezeptor-Antagonisten','Binden an Rezeptor und blockieren ihn (ohne Aktivierung)','Metoprolol (β₁-Blocker, Herz), Cetirizin (H₁-Antihistaminikum), Tamoxifen (ER)','Gleichzeitig eingenommene Agonisten werden verdrängt'],['Enzyminhibitoren','Hemmen ein Enzym (kompetitiv oder irreversibel)','Aspirin (COX irrev.), Statine (HMG-CoA-Reduktase), Omeprazol (H⁺/K⁺-ATPase), ACE-Hemmer','Metabolische Enzyme, Virusinhibitoren'],['Ionenkanal-Modulatoren','Blockieren oder öffnen Ionenkanäle','Lidocain (Na⁺-Kanal-Blocker, Lokalanästhesie), Nifedipin (Ca²⁺-Kanal-Blocker)','Spannungsabh. Ionenkanäle'],['DNA-Interaktion (Zytostatika)','Binden an DNA und blockieren Replikation/Transkription','Cisplatin (DNA-Quervernetzung), Doxorubicin (Interkalation), 5-Fluoruracil (FU, Thymidylat-Synthase)','Krebstherapie; toxisch für schnell teilende Zellen'],['Zellwandsynthesehemmung','Hemmung der Peptidoglykan-Biosynthese in Bakterien','Penicilline, Cephalosporine, Vancomycin (β-Lactam-Antibiotika)','PBP (Penicillin-bindende Proteine); nur in Bakterien'],['Antisense / Biologicals','RNA-Interferenz; Antikörper; Proteinarzneimittel','Imatinib (Tyrosinkinase-Hemmer, imatinib), Trastuzumab (anti-HER2), Antisense-Oligos','Modernste zielgerichtete Therapie']],highlight:[2,5]})}
  `;}

  _synthese(){return`

    ${renderSubhead('10.4.3 — Arzneistoffsynthese')}
    <h3 class="lz-h3">Aspirin — Acetylsalicylsäure</h3>
    <p class="lz-prose">Aspirin (Acetylsalicylsäure, ASS) ist das meistverkaufte Schmerzmittel der Geschichte. Bayer brachte es 1899 auf den Markt. Chemisch ist es der Acetylester der Salicylsäure.</p>

    ${renderFormulaBox({label:'Aspirin-Synthese (Fischer-Veresterung/Acylierung)',formula:'Salicylsäure + Essigsäureanhydrid →(H⁺-Kat. oder ohne) Acetylsalicylsäure + Essigsäure',desc:'Schule: Essigsäureanhydrid (reaktiver als Essigsäure) + Salicylsäure → ASS + CH₃COOH · Aufreinigung durch Umkristallisation aus Ethanol/Wasser · Reinheitsprüfung: FeCl₃-Test (blau-violett = freie Salicylsäure = Hydrolyseprodukt)'})}

    ${renderTable({headers:['Aspirin (ASS)','Detail'],rows:[['Wirkungsmechanismus','Irreversible Acetylierung der Serin-530-OH-Gruppe von COX-1 und COX-2 → kein Arachidonsäure-zu-PGH₂-Umbau → keine Prostaglandinsynthese → Analgesie, Antipyrese, Antiphlogistik'],['Thrombozytenaggregation','Thrombocyten: kein Zellkern → kein neues COX → Hemmung dauert Thrombozytenlebensdauer (~10 d) → Antiaggregation → „blutverdünnend" → Herzinfarkt-/Schlaganfall-Prophylaxe'],['Dosis','Schmerz: 500–1000 mg · Antipyresis: 500 mg · Herzschutz: 75–100 mg (Low-dose, täglich)'],['Hydrolyse','ASS hydrolysiert zu Salicylsäure + Essigsäure: RCOOCH₃ + H₂O → RCOOH + CH₃OH (analog); saurer pH → schneller; wird bei Laumagerung relevant (Essiggeruch = Qualitätsverlust)'],['Nebenwirkungen','Magenreizung (durch COOH + COX-Hemmung in Magen → weniger Schutzschleim); Reye-Syndrom (Kinder < 12 J: nicht geben!); Blutungsrisiko'],['Reyes Syndrom','Aspirin bei viralen Infektionen bei Kindern → Mitochondrienschäden → Leberversagen → nicht für Kinder!']]})}

    ${renderAccordion([{title:'Ibuprofen-Synthese (Boots-Prozess, 1990, Nobelpreis 1991)',content:`<p class="lz-prose"><strong>Ausgangsstoff:</strong> Isobutylobenzol (Cumol-Derivat)</p>
    <p class="lz-prose"><strong>Schritt 1 (Friedel-Crafts-Acylierung):</strong> 4-Isobutylbenzol + CH₃COCl / AlCl₃ → 4-Isobutylacetophenon<br>
    <strong>Schritt 2 (Hydrogenierung):</strong> 4-IBA + H₂ / Ni → 4-Isobutylphenylethanol (sek. Alkohol)<br>
    <strong>Schritt 3 (CO-Einschub, Carbonylierung):</strong> Alkohol + CO / Pd-Kat. → Ibuprofen<br>
    Boots-Prozess: nur 3 Schritte, 99% Atomeffizienz! (altes Verfahren: 6 Schritte, viel Abfall)<br>
    Nobel-Preis 2001 an Noyori und Knowles: asymmetrische Katalyse → nur S-Ibuprofen (aktiv)</p>`},{title:'Penicillin — Entdeckung und Wirkung',content:`<p class="lz-prose"><strong>Entdeckung (Fleming, 1928):</strong>
    Schimmel Penicillium notatum hemmt Staphylococcenkolonien auf Nährboden.
    1941: Florey und Chain reinigen und klinisch testen → Nobel-Preis 1945.</p>
    <p class="lz-prose"><strong>Struktur:</strong> Thiazolidinring + β-Lactamring (gespannter 4-Ring) + R-Seitenkette.
    β-Lactamring: hochreaktiv (gespannt, 90°-Bindungswinkel) → reagiert mit Serin-OH der Transpeptidase (PBP).</p>
    <p class="lz-prose"><strong>Wirkungsmechanismus:</strong>
    PBP (Penicillin-Binding Protein = Transpeptidase) verbindet Peptidoglykan-Ketten in Bakterien-Zellwand.
    β-Lactam bindet irreversibel an Ser-Active-Site der PBP → kein Quervernetzen des Peptidoglykans →
    Zellwand porös → osmotischer Schock → Lyse.</p>
    <p class="lz-prose"><strong>Resistenz:</strong>
    β-Lactamasen (Enzyme): hydrolysieren β-Lactamring → Penicillin inaktiv.
    Lösung: β-Lactamase-Inhibitoren: Clavulansäure + Amoxicillin (Augmentin).</p>`}])}
    ${renderInfobox({type:'success',icon:'fas fa-graduation-cap',title:'Zusammenfassung — Arzneimittel',body:`<strong>Entwicklung:</strong> Discovery → Präklinik → Phase I/II/III → Zulassung → Phase IV (~10 Jahre, ~1 Mrd. €)<br><strong>ADME:</strong> Absorption, Distribution, Metabolismus (CYP450), Elimination<br><strong>Wirkungsmechanismen:</strong> Agonisten/Antagonisten · Enzyminhibition (ASS: irreversibler COX-Hemmer) · Ionenkanäle · DNA-Interaktion · Antibiotika (Zellwand)<br><strong>Aspirin:</strong> Acetylierung von Salicylsäure mit Essigsäureanhydrid; COX-Hemmung irreversibel; Herzschutz (75 mg)<br><strong>Ibuprofen:</strong> 3-Stufen-Boots-Prozess; S-Form aktiv; reversibler COX-Hemmer<br><strong>Penicillin:</strong> β-Lactamring + PBP → Zellwandsynthesehemmung; Resistenz durch β-Lactamasen`})}
  `;}
  init(){i18n.init();initScrollReveal();initInteractive(document);initTabs();}
}
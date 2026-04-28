// ─────────────────────────────────────────────────────────────
// 5.7  Work & Career Vocabulary
// pages/projekte/lernzettel/faecher/englisch/themen/vocab/work.js
// ─────────────────────────────────────────────────────────────
import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS, renderInfobox, renderTable, renderSubhead,
  renderTags, renderAccordion, renderMerkboxGrid, initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

export default class WorkVocabPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-vocab-work';
    el.style.setProperty('--lz-accent', COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }
  _html() {
    return `
      <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
        <div class="lz-sub-hero-inner">
          <div class="lz-sub-hero-orb" aria-hidden="true"></div>
          <nav class="lz-sub-breadcrumb">
            <button class="lz-bread-link" data-nav-link="${BASE}/themen/vocab">Vocabulary</button>
            <i class="fas fa-chevron-right"></i><span>5.7 Work &amp; Career</span>
          </nav>
          <h1 class="lz-sub-title">Work &amp; Career<br><em>Vocabulary</em></h1>
          <p class="lz-sub-desc">Job Search · Workplace · Skills · Gig Economy · Future of Work · Automation</p>
          ${renderTags(['Career', 'Workplace', 'Gig Economy', 'Automation', 'Remote Work', 'Abitur 2026'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-briefcase', title: 'Gig Economy', text: 'A labour market characterised by short-term contracts and freelance work rather than permanent employment. Companies like Uber, Deliveroo, and Fiverr rely on "gig workers." Flexible but insecure.' },
            { icon: 'fas fa-robot', title: 'Automation', text: 'Replacing human work with machines and AI. Estimates: 47% of US jobs at high risk (Oxford, 2013). Debate: will it create new jobs or cause mass unemployment?' },
            { icon: 'fas fa-house-laptop', title: 'Remote Work', text: 'Working from home or another location outside the office — accelerated by COVID-19. Benefits: flexibility, no commute. Risks: isolation, blurred work-life balance.' },
            { icon: 'fas fa-chart-line', title: 'Skills Gap', text: 'The mismatch between the skills workers have and those employers need. Growing as automation replaces routine tasks. Requires constant reskilling and lifelong learning.' },
          ])}

          ${renderSubhead('Job Search & Application')}
          ${renderTable({
            headers: ['Word / Phrase', 'German', 'Notes / Example'],
            rows: [
              ['curriculum vitae (CV) / résumé','Lebenslauf','A document summarising education, work experience, and skills. CV (British) is longer; résumé (American) is typically 1 page.'],
              ['cover letter','Anschreiben','A letter accompanying a CV — explains why you want the job and why you are the right candidate.'],
              ['job advertisement / job posting','Stellenanzeige','A public announcement of a vacancy, listing requirements and responsibilities.'],
              ['job interview','Vorstellungsgespräch','A meeting where an employer assesses a candidate. Preparation: research the company, practise answers, prepare questions.'],
              ['recruitment','Personalbeschaffung / Einstellung','The process of finding, attracting, and hiring candidates. Often outsourced to recruitment agencies.'],
              ['headhunting','Headhunting','Actively seeking out high-level candidates — often poaching them from competitors.'],
              ['networking','Networking','Building professional relationships that can lead to job opportunities. "It\'s not what you know, it\'s who you know."'],
              ['reference','Referenz / Empfehlung','A person who can vouch for your skills and character. Employers contact references before offering jobs.'],
              ['shortlist','engere Auswahl','The list of candidates selected for interview after initial screening of applications.'],
              ['probationary period','Probezeit','A trial period at the start of employment — usually 3 or 6 months. Either party can terminate more easily.'],
              ['internship','Praktikum','A temporary work experience placement — often unpaid or low-paid. Increasingly required for career entry.'],
              ['apprenticeship','Ausbildung / Berufsausbildung','Paid training programme combining on-the-job learning with classroom study. Important alternative to university.'],
              ['graduate scheme','Graduiertenprogramm','Structured training programme for recent graduates at large companies. Competitive to enter.'],
              ['salary','Gehalt','Fixed regular pay — usually expressed annually. Distinct from wages (hourly) or fees (freelance).'],
              ['wages','Lohn','Hourly pay — common in manual and service jobs. Minimum wage laws set a floor.'],
              ['benefits / perks','Zusatzleistungen / Vergünstigungen','Non-salary compensation: pension, health insurance, gym membership, company car, remote working options.'],
            ],
          })}

          ${renderSubhead('Workplace & Employment')}
          ${renderTable({
            headers: ['Word / Phrase', 'German', 'Notes / Example'],
            rows: [
              ['employer','Arbeitgeber/in','The organisation or person who employs workers and pays their wages.'],
              ['employee','Arbeitnehmer/in','A person who works for an employer in exchange for wages or salary.'],
              ['self-employed','selbstständig','Working for oneself rather than an employer — freelancer, sole trader, or business owner.'],
              ['freelancer','Freiberufler/in','A self-employed person who sells services to multiple clients, rather than being employed by one company.'],
              ['contract of employment','Arbeitsvertrag','A legal agreement between employer and employee — sets out pay, hours, duties, and notice period.'],
              ['permanent contract','unbefristeter Vertrag','Open-ended employment — no fixed end date. Offers job security.'],
              ['fixed-term contract','befristeter Vertrag','Employment for a specific period — e.g. 12 months. Common in public sector and academia.'],
              ['zero-hours contract','Null-Stunden-Vertrag','No guaranteed hours — employer can offer as much or as little work as needed. Flexible but insecure.'],
              ['redundancy','Entlassung / Kündigung (betriebsbedingt)','Being made redundant means your job is eliminated — not a reflection of performance. Entitled to redundancy pay.'],
              ['dismissal','Kündigung (verhaltensbeding)','Being fired — due to misconduct or poor performance. Distinguished from redundancy.'],
              ['trade union','Gewerkschaft','An organisation of workers that campaigns for better pay, conditions, and workers\' rights.'],
              ['collective bargaining','Tarifverhandlung','Negotiation between employers and trade unions over pay and conditions.'],
              ['strike','Streik','Workers refusing to work to pressure employers into concessions. A fundamental workers\' right.'],
              ['overtime','Überstunden','Hours worked beyond the standard contract. May be paid at a premium rate or taken as time off.'],
              ['work-life balance','Work-Life-Balance','The balance between professional responsibilities and personal life. Increasingly valued by younger workers.'],
              ['burnout','Burnout','Chronic workplace stress leading to physical and emotional exhaustion. Recognised by WHO as an occupational phenomenon.'],
              ['glass ceiling','gläserne Decke','An invisible barrier preventing women and minorities from rising to senior positions.'],
              ['gender pay gap','Gender Pay Gap / Lohnlücke','The difference between average male and female earnings. In the UK: ~15%. Partly explained by occupational segregation and unpaid caring responsibilities.'],
              ['workplace discrimination','Diskriminierung am Arbeitsplatz','Treating employees unfairly based on gender, race, age, religion, disability, or sexuality. Illegal in most countries.'],
            ],
          })}

          ${renderSubhead('Future of Work')}
          ${renderTable({
            headers: ['Word / Phrase', 'German', 'Notes / Example'],
            rows: [
              ['automation','Automatisierung','Replacing human tasks with machines. Physical automation (factories) preceded; cognitive automation (AI) now threatens white-collar jobs.'],
              ['artificial intelligence (AI)','Künstliche Intelligenz','Machine systems that can perform tasks requiring human intelligence. Increasingly used in hiring, customer service, law, medicine, finance.'],
              ['algorithm','Algorithmus','A set of rules for solving a problem — used in AI hiring tools, performance monitoring, and job matching platforms. May embed bias.'],
              ['gig economy','Gig-Ökonomie','Short-term, flexible jobs rather than permanent employment. Platforms: Uber, Deliveroo, Fiverr, Upwork. Workers classified as "independent contractors" — no employment rights.'],
              ['platform economy','Plattformwirtschaft','The digital platform ecosystem connecting buyers and sellers of services. Airbnb, Uber, Amazon all operate platform models.'],
              ['remote work / working from home','Homeoffice / Fernarbeit','COVID-19 accelerated mass adoption of remote work. Benefits: flexibility, no commute. Risks: isolation, "always on" culture.'],
              ['hybrid working','hybrides Arbeiten','Combining time in the office with remote work — now the dominant model in many organisations.'],
              ['reskilling','Umschulung','Learning new skills to remain employable as automation changes job requirements.'],
              ['upskilling','Qualifizierung / Weiterbildung','Expanding and improving existing skills — preparing for higher-value tasks.'],
              ['lifelong learning','lebenslanges Lernen','The continuous development of skills throughout a career — essential in a rapidly changing economy.'],
              ['skills gap','Qualifikationslücke','The mismatch between skills workers have and those employers need — growing with automation.'],
              ['digital literacy','digitale Kompetenz','The ability to use digital tools effectively. A basic requirement for most modern jobs.'],
              ['universal basic income (UBI)','bedingungsloses Grundeinkommen','A proposal to give every citizen a regular, unconditional payment. Debated as response to automation-caused job losses.'],
              ['precariat','Prekariat','A social class characterised by precarious employment — short-term, low-pay, insecure. Coined by Guy Standing.'],
              ['job polarisation','Jobbipolarisierung','Middle-skill jobs (administration, manufacturing) being automated; growth at the top (highly paid) and bottom (low-paid, non-automatable) ends.'],
            ],
          })}

          ${renderSubhead('Useful Phrases for Essays & Letters')}
          ${renderTable({
            headers: ['Phrase', 'Use'],
            rows: [
              ['I am writing to apply for the position of…','Opening line of a cover letter'],
              ['I would like to draw your attention to my experience in…','Highlighting a key qualification'],
              ['I am a highly motivated and results-oriented professional.','CV/cover letter self-description (formal)'],
              ['The gig economy offers flexibility but at the cost of security and workers\' rights.','Essay argument on precarious work'],
              ['Automation is not inherently destructive — historically, technology has created as many jobs as it destroys.','Optimistic argument on automation'],
              ['The question is not whether automation will transform the labour market, but who will bear the costs of that transformation.','Nuanced essay framing'],
              ['Without strong unions and regulation, the gig economy exploits workers under the guise of "flexibility."','Critical argument on gig economy'],
              ['Lifelong learning is no longer a choice — it is a necessity in an economy that is constantly evolving.','On education and future of work'],
            ],
          })}

        </div>
      </section>
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'UK', link: `${BASE}/themen/vocab/uk` },
            next: { label: 'Cartoon Analysis', link: `${BASE}/themen/vocab/cartoon` },
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); }
}
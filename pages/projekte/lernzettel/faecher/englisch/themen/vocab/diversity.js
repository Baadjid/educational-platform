// ─────────────────────────────────────────────────────────────
// 5.2  Diversity Vocabulary
// pages/projekte/lernzettel/faecher/englisch/themen/vocab/diversity.js
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

export default class DiversityVocabPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-vocab-diversity';
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
            <i class="fas fa-chevron-right"></i><span>5.2 Diversity</span>
          </nav>
          <h1 class="lz-sub-title">Diversity<br><em>Vocabulary</em></h1>
          <p class="lz-sub-desc">Race · Ethnicity · Identity · Inclusion · Discrimination · Multiculturalism</p>
          ${renderTags(['Diversity', 'Inclusion', 'Racism', 'Identity', 'Multiculturalism', 'Abitur 2026'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-users', title: 'Diversity', text: 'The presence of difference — in race, ethnicity, gender, religion, sexuality, ability, and more. True diversity means representation; inclusion means belonging and equal participation.' },
            { icon: 'fas fa-scale-balanced', title: 'Equality vs Equity', text: 'Equality = same treatment for all. Equity = fair treatment — acknowledging that different people need different support to reach the same outcome. Equity addresses structural disadvantage.' },
            { icon: 'fas fa-circle-nodes', title: 'Multiculturalism', text: 'The coexistence of multiple cultural groups within a society, with recognition and respect for each. Contrasted with assimilation (minority adopts majority culture) and integration.' },
            { icon: 'fas fa-eye-slash', title: 'Systemic Racism', text: 'Racist policies and practices embedded in institutions — education, policing, housing — that produce racially unequal outcomes, even without individual racist intent.' },
          ])}

          ${renderSubhead('Identity & Social Categories')}
          ${renderTable({
            headers: ['Word / Phrase', 'German', 'Notes / Example'],
            rows: [
              ['race','Rasse (soziales Konstrukt)','Race is primarily a social and political construct — not a biological fact. Yet racial identity profoundly shapes social experience.'],
              ['ethnicity','Ethnizität / Zugehörigkeit','Ethnicity refers to shared cultural practices, language, and heritage. One can share an ethnicity without sharing a race.'],
              ['nationality','Nationalität / Staatsangehörigkeit','Legal citizenship of a state — distinct from ethnicity or cultural identity.'],
              ['identity','Identität','A person\'s sense of self — shaped by race, gender, religion, class, culture, sexuality, etc.'],
              ['intersectionality','Intersektionalität','The overlapping of multiple identities (e.g. Black + woman + working class) creating unique forms of discrimination. Coined by Kimberlé Crenshaw (1989).'],
              ['minority','Minderheit','A group smaller in number or power than the dominant group — not always numerical. Women are a "minority" in many power structures despite being 50% of the population.'],
              ['majority','Mehrheit / Mehrheitsgesellschaft','The dominant group in terms of numbers or power within a society.'],
              ['indigenous people','Indigene Bevölkerung','The original inhabitants of a territory — e.g. Native Americans, Aboriginal Australians, Māori.'],
              ['diaspora','Diaspora','A community of people living outside their ancestral homeland — e.g. the African diaspora, Indian diaspora.'],
              ['heritage','Erbe / Herkunft','Cultural traditions, language, and practices passed down from ancestors.'],
              ['mixed race','gemischtrassig / multiethnisch','Having parents of different racial or ethnic backgrounds. Also called biracial or multiracial.'],
              ['gender','Geschlecht (sozial)','Gender is a social construct — distinct from biological sex. Includes man, woman, and non-binary identities.'],
              ['LGBTQ+','LGBTQ+','Lesbian, Gay, Bisexual, Transgender, Queer/Questioning, and others. A collective term for sexual and gender minorities.'],
              ['religion','Religion','Faith and spiritual belief — a major axis of identity and diversity in multicultural societies.'],
              ['socioeconomic status','sozioökonomischer Status','A person\'s position in the social hierarchy based on income, education, and occupation.'],
            ],
          })}

          ${renderSubhead('Discrimination & Racism')}
          ${renderTable({
            headers: ['Word / Phrase', 'German', 'Notes / Example'],
            rows: [
              ['discrimination','Diskriminierung','Treating people unfairly based on characteristics such as race, gender, religion, or sexuality.'],
              ['racism','Rassismus','Prejudice + power — attitudes, behaviour, and systems that disadvantage people based on race.'],
              ['institutional / systemic racism','institutioneller / systemischer Rassismus','Racist outcomes produced by policies and structures within institutions, even without individual racist intent. E.g. racial disparities in criminal sentencing, housing, healthcare.'],
              ['prejudice','Vorurteil','A preconceived, negative attitude towards a group based on limited or distorted information.'],
              ['stereotype','Klischee / Stereotyp','An oversimplified, generalised belief about a group. "All Germans are punctual" — even positive stereotypes are harmful.'],
              ['bias','Voreingenommenheit / Bias','A tendency to favour or disfavour a group, often unconsciously (implicit bias).'],
              ['implicit bias','unbewusste Voreingenommenheit','Unconscious attitudes or stereotypes that affect decisions — e.g. job interviews, police stops, medical treatment.'],
              ['microaggression','Mikroaggression','Everyday, subtle comments or behaviours that communicate hostility or inferiority to a marginalised group — often unintentionally. E.g. "Where are you really from?"'],
              ['white privilege','weißes Privileg','The social advantages that white people benefit from — not having to worry about being stopped by police for your skin colour, etc.'],
              ['hate crime','Hassverbrechen','A crime motivated by prejudice against a person\'s race, religion, sexuality, disability, etc.'],
              ['scapegoating','Sündenbockdenken','Blaming a minority group for social problems — often used to deflect from structural causes.'],
              ['xenophobia','Fremdenfeindlichkeit','Fear or hatred of people from other countries or cultures.'],
              ['Islamophobia','Islamophobie','Prejudice against Muslims or Islam — a specific form of religious discrimination.'],
              ['antisemitism','Antisemitismus','Prejudice or discrimination against Jewish people.'],
              ['apartheid','Apartheid','Legal racial segregation — most famously in South Africa (1948–1994).'],
              ['segregation','Rassentrennung','The enforced separation of racial groups — e.g. Jim Crow laws in the USA.'],
              ['racial profiling','Racial Profiling','Using race as a basis for suspecting individuals of crimes — e.g. stop-and-frisk policies.'],
            ],
          })}

          ${renderSubhead('Inclusion, Equity & Policy')}
          ${renderTable({
            headers: ['Word / Phrase', 'German', 'Notes / Example'],
            rows: [
              ['inclusion','Inklusion / Einbeziehung','Going beyond diversity (representation) to ensure everyone can participate fully and meaningfully.'],
              ['equality','Gleichheit','Same treatment for all — same rules, same resources. Does not account for different starting points.'],
              ['equity','Gerechtigkeit / Fairness','Different support for different needs, in order to achieve equal outcomes. Addresses structural disadvantage.'],
              ['affirmative action','positive Diskriminierung','Policies that give an advantage to historically disadvantaged groups in hiring, admissions, etc. Controversial: remedying past injustice vs. reverse discrimination.'],
              ['multiculturalism','Multikulturalismus','Policy of supporting the coexistence of multiple cultures — valued as enriching vs. criticised for promoting separation.'],
              ['integration','Integration','The process of incorporating minority groups into mainstream society — different from assimilation (no forced giving up of identity).'],
              ['assimilation','Assimilation','Minority group adopts the culture, language, and norms of the majority. Faster integration but loss of cultural identity.'],
              ['cultural relativism','Kulturrelativismus','The view that a culture\'s values should be understood within its own context — not judged by another culture\'s standards.'],
              ['political correctness','politische Korrektheit','Using language that avoids offence to marginalised groups. Supporters: dignity and respect. Critics: censorship, "cancel culture."'],
              ['representation','Repräsentation','Having members of diverse groups visible in media, politics, leadership. "You can\'t be what you can\'t see."'],
              ['diversity quota','Diversitätsquote','A policy requiring a minimum percentage of women or minorities in jobs or positions of leadership.'],
              ['hate speech','Hassrede','Speech that attacks people based on characteristics such as race, religion, or sexuality. Balancing free speech and harm prevention.'],
              ['cancel culture','Cancel Culture','Public ostracism of individuals accused of offensive behaviour. Free speech vs. accountability debate.'],
              ['woke','woke','Originally Black American slang: alert to racial injustice. Now contested — used approvingly (awareness) and pejoratively (excessive political sensitivity).'],
            ],
          })}

          ${renderSubhead('Useful Phrases for Essays')}
          ${renderTable({
            headers: ['Phrase', 'Use'],
            rows: [
              ['Diversity enriches a society culturally, socially, and economically.','Opening argument for diversity'],
              ['Representation matters — people need to see themselves reflected.','On media and political representation'],
              ['Equality of opportunity is not the same as equality of outcome.','Distinguishing formal vs. substantive equality'],
              ['Systemic racism persists even in the absence of conscious prejudice.','On institutional racism'],
              ['Intersectionality reveals that discrimination operates on multiple axes simultaneously.','Academic register — Crenshaw reference'],
              ['The integration debate asks: how much cultural difference can a society accommodate?','Framing the multiculturalism debate'],
              ['Prejudice is not merely personal — it becomes dangerous when backed by institutional power.','Distinction between prejudice and racism (power + prejudice)'],
            ],
          })}

        </div>
      </section>
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Globalization', link: `${BASE}/themen/vocab/globalization` },
            next: { label: 'Ecology', link: `${BASE}/themen/vocab/ecology` },
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); }
}
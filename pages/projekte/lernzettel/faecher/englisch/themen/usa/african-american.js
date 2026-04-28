// pages/projekte/lernzettel/faecher/englisch/themen/usa/african-american.js
// USA – Kapitel 2: African American History

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import {
  ensureComponentsCSS,
  renderInfobox,
  renderTable,
  renderSubhead,
  renderTags,
  renderAccordion,
  renderVTimeline,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

export default class AfricanAmericanPage {
  constructor(router) {
    this.router = router;
  }

  render() {
    ensureComponentsCSS();

    const el = document.createElement('div');
    el.className = 'page page-englisch page-usa-afam';
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
          <div class="lz-sub-breadcrumb">
            <button data-link="${BASE}/themen/usa" class="lz-bread-link">USA</button>
            <i class="fas fa-chevron-right"></i><span>Kapitel 2</span>
            <i class="fas fa-chevron-right"></i><span>African American History</span>
          </div>
          <h1 class="lz-sub-title">
            African American<br><em>History</em>
          </h1>
          <p class="lz-sub-desc">
            From slavery to Black Lives Matter – the struggle for equality
          </p>
          ${renderTags(['USA', 'African American', 'Civil Rights'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          <!-- 2.1 Slaves – Liberated into Misery -->
          ${renderSubhead('2.1 Slaves – Liberated into Misery')}
          <h2 class="lz-h2 reveal">Slavery and Reconstruction</h2>
          <p class="lz-prose reveal">
            Slavery in America lasted from 1619 to 1865. By 1860 nearly 4 million enslaved people lived in the
            United States, primarily in the South. The Civil War (1861‑1865) ended slavery, but freedom did not
            bring equality.
          </p>
          ${renderVTimeline([
            { year: '1863', title: 'Emancipation Proclamation', text: 'Declared slaves in Confederate states free' },
            { year: '1865', title: '13th Amendment', text: 'Abolished slavery' },
            { year: '1868', title: '14th Amendment', text: 'Granted citizenship to all born in the U.S.' },
            { year: '1870', title: '15th Amendment', text: 'Prohibited racial discrimination in voting' },
          ])}
          ${renderInfobox({
            type: 'warning',
            icon: 'fas fa-chain-broken',
            title: 'The Reality of “Freedom”',
            body: 'Liberation from slavery did not bring true freedom. African Americans faced economic exploitation (sharecropping), political disenfranchisement (poll taxes, literacy tests), social segregation (Jim Crow), and constant threat of violence (lynching). Many historians describe this as being “liberated into misery”.'
          })}

          <!-- 2.2 Separate but Equal -->
          ${renderSubhead('2.2 Separate but Equal')}
          <h2 class="lz-h2 reveal">Jim Crow Era (1877‑1965)</h2>
          <p class="lz-prose reveal">
            <strong>Jim Crow laws</strong> enforced racial segregation throughout the South. The Supreme Court
            decision <strong>Plessy v. Ferguson (1896)</strong> established the doctrine of “separate but equal”,
            which legalized segregation for 58 years. In reality, facilities were never equal – Black schools,
            hospitals, and public spaces were systematically underfunded and inferior.
          </p>
          ${renderInfobox({
            type: 'danger',
            icon: 'fas fa-gavel',
            title: 'Plessy v. Ferguson (1896)',
            body: '7‑1 ruling upheld segregation. Justice Harlan’s famous dissent: “Our Constitution is color‑blind.” The decision was overturned by Brown v. Board of Education (1954).'
          })}

          <!-- 2.3 Rosa Parks and the Montgomery Bus Boycott -->
          ${renderSubhead('2.3 Rosa Parks and the Montgomery Bus Boycott')}
          <h2 class="lz-h2 reveal">The Spark of a Movement</h2>
          <div class="lz-quote" style="margin:1rem 0;">
            <p>“The only tired I was, was tired of giving in.” – Rosa Parks</p>
          </div>
          <p class="lz-prose reveal">
            On December 1, 1955, Rosa Parks refused to give up her bus seat to a white passenger. Her arrest
            sparked the <strong>Montgomery Bus Boycott</strong> (381 days), organized by the Montgomery Improvement
            Association led by Dr. Martin Luther King Jr. The boycott ended with the Supreme Court ruling
            <strong>Browder v. Gayle (1956)</strong> that bus segregation was unconstitutional.
          </p>

          <!-- 2.4 Little Rock Nine -->
          ${renderSubhead('2.4 Little Rock Nine')}
          <h2 class="lz-h2 reveal">Crisis at Central High School</h2>
          <p class="lz-prose reveal">
            In September 1957, nine African American students attempted to integrate Little Rock Central High School.
            Governor Orval Faubus deployed the Arkansas National Guard to block them. President Eisenhower
            federalized the Guard and sent the 101st Airborne Division to protect the students. They endured daily
            harassment and violence, but Ernest Green became the first Black graduate in May 1958.
          </p>

          <!-- 2.5 Martin Luther King Jr. -->
          ${renderSubhead('2.5 Martin Luther King Jr.')}
          <h2 class="lz-h2 reveal">Leader of Nonviolent Resistance</h2>
          ${renderAccordion([
            {
              title: '📜 Philosophy and Methods',
              content: `<p class="lz-prose">• Nonviolent direct action – civil disobedience, sit‑ins, marches, boycotts<br>
                        • Christian love (Agape) – love even for enemies<br>
                        • Integration – “beloved community” where all races live together equally<br>
                        • Moral persuasion – appeal to American values and conscience</p>`
            },
            {
              title: '🏛️ Major Campaigns',
              content: `<p class="lz-prose"><strong>Birmingham (1963):</strong> “most segregated city in America” – police used fire hoses and dogs. King arrested, wrote “Letter from Birmingham Jail”.<br>
                        <strong>March on Washington (1963):</strong> 250,000 people, “I Have a Dream” speech.<br>
                        <strong>Selma to Montgomery (1965):</strong> “Bloody Sunday” led to Voting Rights Act.</p>`
            },
            {
              title: '🏆 Legacy',
              content: `<p class="lz-prose">• Civil Rights Act (1964), Voting Rights Act (1965), Fair Housing Act (1968)<br>
                        • Nobel Peace Prize (1964)<br>
                        • Assassinated April 4, 1968 in Memphis<br>
                        • Federal holiday (third Monday in January)</p>`
            },
          ])}
          <div class="lz-quote" style="margin:1rem 0;">
            <p>“I have a dream that one day this nation will rise up and live out the true meaning of its creed.”</p>
          </div>

          <!-- 2.6 Malcolm X -->
          ${renderSubhead('2.6 Malcolm X')}
          <h2 class="lz-h2 reveal">Black Nationalism and Self‑Defense</h2>
          <p class="lz-prose reveal">
            Malcolm X (born Malcolm Little) became a spokesman for the Nation of Islam, advocating Black nationalism,
            self‑defense (“by any means necessary”), and economic independence. After his pilgrimage to Mecca in 1964,
            his views evolved toward a more inclusive human rights framework. He was assassinated on February 21, 1965.
          </p>
          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-book',
            title: 'The Autobiography of Malcolm X',
            body: 'One of the most influential books of the 20th century. It documents his transformation from street hustler to civil rights leader.'
          })}

          <!-- 2.7 Affirmative Action -->
          ${renderSubhead('2.7 Affirmative Action')}
          <h2 class="lz-h2 reveal">Policies to Address Past Discrimination</h2>
          <p class="lz-prose reveal">
            Affirmative action refers to policies that take race, ethnicity, or gender into consideration to increase
            opportunities for underrepresented groups in education, employment, and business.
          </p>
          ${renderAccordion([
            {
              title: '✅ Arguments FOR',
              content: `<p class="lz-prose">• Remedying past discrimination<br>
                        • Diversity benefits – diverse environments improve learning and performance<br>
                        • Level playing field – compensates for ongoing systemic disadvantages<br>
                        • Success stories – expanded the Black middle class</p>`
            },
            {
              title: '❌ Arguments AGAINST',
              content: `<p class="lz-prose">• Reverse discrimination – unfair to individuals (often white or Asian)<br>
                        • Stigmatization – creates perception that beneficiaries are less qualified<br>
                        • Mismatch theory – places students in schools where they struggle<br>
                        • Violates principle of color‑blind justice</p>`
            },
          ])}
          <p class="lz-prose reveal">
            In 2023, the Supreme Court effectively ended race‑conscious admissions in higher education
            (Students for Fair Admissions v. Harvard/UNC).
          </p>

          <!-- 2.8 Situation of African Americans Today -->
          ${renderSubhead('2.8 Situation of African Americans Today')}
          <h2 class="lz-h2 reveal">Progress and Persistent Challenges</h2>
          ${renderTable({
            headers: ['Area', 'Progress', 'Challenges'],
            rows: [
              ['Political', 'Obama elected president (2008, 2012); Kamala Harris as VP', 'Underrepresentation still exists'],
              ['Economic', 'Growing Black middle class', 'Wealth gap – median Black family wealth is 1/10th of white family wealth'],
              ['Criminal Justice', 'Increased awareness', 'Mass incarceration – Black people incarcerated at 5x the rate of whites'],
              ['Health', 'Improved access', 'Lower life expectancy, maternal mortality 3x higher'],
              ['Education', 'More college graduates', 'School segregation persists, achievement gap'],
            ],
          })}

          <!-- 2.9 Black Lives Matter -->
          ${renderSubhead('2.9 Black Lives Matter')}
          <h2 class="lz-h2 reveal">A New Civil Rights Movement</h2>
          <p class="lz-prose reveal">
            Black Lives Matter began as a hashtag in 2013 after the acquittal of George Zimmerman in the killing of
            Trayvon Martin. The movement gained global attention after the murder of George Floyd in May 2020.
            It advocates for police accountability, criminal justice reform, and an end to systemic racism.
          </p>
          ${renderInfobox({
            type: 'warning',
            icon: 'fas fa-fist-raised',
            title: 'Common Misunderstanding',
            body: '“Black Lives Matter” does not mean other lives don’t matter. It means Black lives matter TOO – they have been historically devalued and deserve equal protection and treatment.'
          })}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Foundations', link: `${BASE}/themen/usa/foundations` },
            next: { label: 'Immigration', link: `${BASE}/themen/usa/immigration` },
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
  }
}
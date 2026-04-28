// pages/projekte/lernzettel/faecher/englisch/themen/gb/religion.js
// Great Britain – Kapitel 17 / 2.7: Religion

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
  renderMerkboxGrid,
  renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

export default class ReligionGbPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-gb-religion';
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
            <button data-link="${BASE}/themen/gb" class="lz-bread-link">Great Britain</button>
            <i class="fas fa-chevron-right"></i><span>Kapitel 17</span>
            <i class="fas fa-chevron-right"></i><span>Religion</span>
          </div>
          <h1 class="lz-sub-title">Religion in<br><em>Great Britain</em></h1>
          <p class="lz-sub-desc">Church of England · Free Churches · Secularisation · Religious Diversity · Current Debates</p>
          ${renderTags(['Church of England', 'Free Churches', 'Secularisation', 'Religious Diversity', 'Islam'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-church', title: '46.2% Christian', text: 'Share of UK population identifying as Christian (2021 Census) — down from 59.3% in 2011. The fastest-ever decline in religious identity.' },
            { icon: 'fas fa-times-circle', title: '37.2% No Religion', text: '"Nones" are now the second largest group in the UK — up from 25.1% in 2011. The most secular generation in British history.' },
            { icon: 'fas fa-mosque', title: '6.5% Muslim', text: 'UK\'s second-largest religion. Islam is now bigger than Anglicanism by weekly attendance — more Muslims attend Friday prayers than Anglicans Sunday services.' },
            { icon: 'fas fa-crown', title: 'Established Church', text: 'The Church of England is uniquely the official state church. The monarch is its Supreme Governor; 26 bishops sit in the House of Lords.' },
          ])}

          ${renderSubhead('17.1 The Church of England')}
          <h2 class="lz-h2 reveal">Founded in a Royal Divorce</h2>
          <p class="lz-prose reveal">
            The Church of England was founded not by theological conviction but by royal self-interest.
            In <strong>1534</strong>, Henry VIII broke from Rome because Pope Clement VII refused to
            annul his marriage to Catherine of Aragon. The <strong>Act of Supremacy</strong> made the
            monarch the Supreme Head of the Church — a title now held by King Charles III.
          </p>

          ${renderVTimeline([
            { year: '1534', title: 'Break with Rome', text: 'Act of Supremacy. Henry VIII becomes head of the Church of England. Dissolution of monasteries follows (1536–41).' },
            { year: '1549', title: 'Book of Common Prayer', text: 'First uniform English-language liturgy — shaped the English language itself. Thomas Cranmer\'s masterpiece.' },
            { year: '1559', title: 'Elizabethan Settlement', text: 'Queen Elizabeth I established the "Via Media" (middle way) between Catholicism and Puritanism. Relatively tolerant for its time.' },
            { year: '1689', title: 'Glorious Revolution', text: 'Bill of Rights secured Protestant succession. Catholics and non-Anglicans partially tolerated.' },
            { year: '1829', title: 'Catholic Emancipation', text: 'Catholics could hold public office — 300 years of discrimination ended.' },
            { year: '1994', title: 'Women Priests', text: 'First female priests ordained — after decades of bitter debate.' },
            { year: '2015', title: 'Women Bishops', text: 'First female bishop consecrated. Libby Lane became Bishop of Stockport.' },
          ])}

          ${renderCompare({
            titleA: '⛪ Church of England (Established)',
            titleB: '🏛️ Free Churches (Nonconformists)',
            listA: [
              'State church — established by law',
              'Supreme Governor: the Monarch',
              '26 bishops in House of Lords',
              '"Via Media" — Catholic and Protestant elements',
              'Hierarchical: bishops, priests, deacons',
              'Declining rapidly: 1–2% weekly attendance',
            ],
            listB: [
              'Separate from the state',
              'No role for the Monarch',
              'No seats in Parliament',
              'More purely Protestant',
              'Often congregational structure',
              'Also declining but once very influential',
            ],
          })}

          ${renderAccordion([
            {
              title: '⚖️ The "Via Media" — What Does It Mean?',
              content: `<p class="lz-prose">The Church of England deliberately occupies a <strong>"middle way"</strong> between Roman Catholicism and Reformed Protestantism. This was Elizabeth I's compromise to hold the nation together:<br><br>
                        • <strong>Catholic elements kept:</strong> Bishops, priests, formal liturgy, sacraments, beautiful churches.<br>
                        • <strong>Protestant elements adopted:</strong> English-language services, Scripture as authority, married clergy, rejection of papal authority.<br><br>
                        This makes it theologically ambiguous — Anglo-Catholics and Evangelicals both claim it. This ambiguity has been both a strength (broad tent) and a source of endless internal conflict.</p>`
            },
            {
              title: '📊 Current Status — A Church in Decline',
              content: `<p class="lz-prose">• <strong>Baptised members:</strong> ~25 million (nominal)<br>
                        • <strong>Weekly attendance:</strong> ~690,000 (about 1% of the population)<br>
                        • Church attendance has halved every 20 years since the 1960s.<br>
                        • 30% of Church of England churches have fewer than 10 people at Sunday services.<br>
                        • <strong>Financial crisis:</strong> Many historic churches cannot be maintained. Over 1,000 Anglican churches at risk of closure.<br>
                        • Younger generations almost completely absent.</p>`
            },
            {
              title: '⚖️ Major Internal Controversies',
              content: `<p class="lz-prose">• <strong>Women bishops (resolved 2015):</strong> Decades of debate; some Anglo-Catholics and conservative Evangelicals left or formed alternative structures.<br>
                        • <strong>Same-sex blessings (2023):</strong> Church approved "prayers of love and faith" for same-sex couples — but not full marriage. Deeply divisive; Global South Anglican provinces (Africa, Asia) threatening to break communion.<br>
                        • <strong>Disestablishment:</strong> Should Church and State be separated? Most oppose change but the argument grows as Britain becomes more religiously diverse.<br>
                        • <strong>The "two integrities":</strong> Church officially holds two contradictory positions on women bishops — an unsustainable compromise.</p>`
            },
          ])}

          ${renderSubhead('17.2 The Free Churches (Dissenters)')}
          <h2 class="lz-h2 reveal">England's Nonconformist Tradition</h2>
          <p class="lz-prose reveal">
            <strong>Free Churches</strong> (also called <strong>Nonconformists</strong> or <strong>Dissenters</strong>)
            are Protestant denominations that refused to conform to the Church of England. Until the 19th
            century, they faced serious legal disabilities — banned from Oxford and Cambridge, from holding
            public office, from voting in some cases.
          </p>

          ${renderTable({
            headers: ['Denomination', 'Founder / Origin', 'Key Beliefs', 'Historical Role'],
            rows: [
              ['Methodists', 'John Wesley (18th c.)', 'Personal conversion, social concern, arminianism', 'Backbone of the Labour movement; temperance; trade unions'],
              ['Baptists', 'Anabaptist roots', 'Believers\' baptism (adults only), biblical authority, congregational governance', 'Strong in Wales; anti-slavery; individual conscience'],
              ['Presbyterians', 'John Calvin / John Knox', 'Calvinist theology, governance by elected elders, no bishops', 'Dominant in Scotland; United Reformed Church in England'],
              ['Quakers (Society of Friends)', 'George Fox (1647)', 'Inner light, no clergy, no sacraments, pacifism', 'Anti-slavery (Wilberforce was influenced by them); Cadbury, Rowntree — chocolate empires'],
              ['Congregationalists', 'Robert Browne (16th c.)', 'Each congregation self-governing, no hierarchy', 'Merged with Presbyterians to form United Reformed Church (1972)'],
              ['Salvation Army', 'William Booth (1865)', 'Evangelical Christianity + social welfare', 'Soup kitchens, hostels, disaster relief'],
            ],
          })}

          ${renderInfobox({
            type: 'blue',
            icon: 'fas fa-fist-raised',
            title: 'Nonconformist Social Impact',
            body: 'The Free Churches were historically the backbone of British social reform movements:<br>• <strong>Anti-slavery campaign</strong> — Quakers and Methodists at the forefront<br>• <strong>Trade union movement</strong> — Methodist chapel culture shaped working-class organisation<br>• <strong>Temperance movement</strong> — fighting alcohol destruction in working-class communities<br>• <strong>Education</strong> — Sunday Schools provided literacy to millions before state education<br>• <strong>Labour Party</strong> — "more to Methodism than to Marx" (quote often attributed to Keir Hardie)'
          })}

          ${renderSubhead('17.3 Britain Today — Secularisation and Diversity')}
          <h2 class="lz-h2 reveal">The Fastest-Changing Religious Landscape in British History</h2>

          ${renderTable({
            headers: ['Religion', '2011 Census', '2021 Census', 'Trend'],
            rows: [
              ['Christian', '59.3%', '46.2%', '▼ −13.1pp — fastest decline ever recorded'],
              ['No Religion', '25.1%', '37.2%', '▲ +12.1pp — now 2nd largest group'],
              ['Muslim', '4.8%', '6.5%', '▲ +1.7pp — 3.9 million people'],
              ['Hindu', '1.5%', '1.7%', '▲ Stable growth'],
              ['Sikh', '0.8%', '0.9%', '▲ Stable'],
              ['Jewish', '0.5%', '0.5%', '→ Stable'],
              ['Buddhist', '0.4%', '0.5%', '▲ Slight growth'],
            ],
            highlight: [0, 1],
          })}

          ${renderAccordion([
            {
              title: '📉 Why is Britain Secularising?',
              content: `<p class="lz-prose">• <strong>Education:</strong> Higher education correlates with lower religious belief. Britain now has one of the world's most educated populations.<br>
                        • <strong>Individualisation:</strong> Post-1960s, personal autonomy trumped institutional authority. The Church's authority on morality collapsed.<br>
                        • <strong>Scandals:</strong> Child abuse scandals in Catholic and other churches destroyed credibility.<br>
                        • <strong>Science:</strong> Evolution, cosmology, and neuroscience provide naturalistic explanations for phenomena once attributed to God.<br>
                        • <strong>Generational replacement:</strong> Each generation slightly less religious than the previous one. The youngest generation (Gen Z) is the most secular ever.</p>`
            },
            {
              title: '🌍 Religious Diversity',
              content: `<p class="lz-prose">Immigration has transformed Britain's religious landscape. Cities contain mosques, temples, gurdwaras, and synagogues alongside churches:<br>
                        • <strong>Islam:</strong> 3.9 million; more than 1,700 mosques; Friday prayers often exceed Anglican Sunday attendance.<br>
                        • <strong>Hinduism:</strong> Major temples in Leicester, Harrow, Neasden (the largest outside India).<br>
                        • <strong>Sikhism:</strong> Concentrated in Birmingham, Southall (London), Wolverhampton.<br>
                        • <strong>Faith schools:</strong> 33% of state-funded schools in England are faith schools — mostly Anglican or Catholic, but growing number of Muslim, Jewish, Sikh.</p>`
            },
            {
              title: '⚠️ Islamophobia',
              content: `<p class="lz-prose">Anti-Muslim prejudice is Britain's fastest-growing form of hate crime:<br>
                        • Hate crimes against Muslims increased dramatically post-9/11 and after 7/7 bombings.<br>
                        • Muslim women in hijab most frequently targeted — verbal abuse, physical attacks.<br>
                        • <strong>"Prevent" strategy</strong> — counter-terrorism programme criticised for treating Muslim community as inherently suspect; creating a "chilling effect" on free speech in mosques and schools.<br>
                        • Employment discrimination: Muslim women are the most disadvantaged group in the labour market.<br>
                        • Media stereotyping: negative coverage of Islam disproportionate; most news stories link Islam to extremism.</p>`
            },
            {
              title: '🏛️ The Disestablishment Debate',
              content: `<p class="lz-prose"><strong>Should the Church of England remain the established church?</strong><br><br>
                        <strong>Against disestablishment:</strong> The system works; most people content; tradition and stability valuable; the Church plays charitable/educational role; disruption not worth it.<br><br>
                        <strong>For disestablishment:</strong> 26 unelected bishops in Parliament is undemocratic; the monarch must be Anglican — discriminatory; in a multi-faith society, state endorsement of one religion is wrong; the Church should be free from state interference.<br><br>
                        <strong>Reality:</strong> No mainstream party will touch this. The Queen's death renewed debate briefly, then faded.</p>`
            },
          ])}

        </div>
      </section>

      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Multicultural Society', link: `${BASE}/themen/gb/multicultural` },
            next: { label: 'Social Welfare', link: `${BASE}/themen/gb/social-welfare` },
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
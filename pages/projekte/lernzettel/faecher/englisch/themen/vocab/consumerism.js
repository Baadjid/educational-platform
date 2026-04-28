// ─────────────────────────────────────────────────────────────
// 5.4  Consumerism Vocabulary
// pages/projekte/lernzettel/faecher/englisch/themen/vocab/consumerism.js
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

export default class ConsumerismVocabPage {
  constructor(router) { this.router = router; }
  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-vocab-consumerism';
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
            <i class="fas fa-chevron-right"></i><span>5.4 Consumerism</span>
          </nav>
          <h1 class="lz-sub-title">Consumerism<br><em>Vocabulary</em></h1>
          <p class="lz-sub-desc">Shopping · Advertising · Brands · Materialism · Fast Fashion · Debt</p>
          ${renderTags(['Consumerism', 'Advertising', 'Fast Fashion', 'Materialism', 'Brand', 'Abitur 2026'])}
        </div>
      </section>

      <section class="lz-content-section">
        <div class="lz-section-wrap">

          ${renderMerkboxGrid([
            { icon: 'fas fa-cart-shopping', title: 'Consumerism', text: 'A social and economic ideology that encourages the acquisition of goods and services in ever-greater amounts. Critics argue it fuels inequality, debt, environmental destruction, and unfulfillment.' },
            { icon: 'fas fa-tag', title: 'Brand Identity', text: 'The visible elements of a brand (logo, design, values) that distinguish it in consumers\' minds. Modern brands sell a lifestyle and identity, not just a product.' },
            { icon: 'fas fa-shirt', title: 'Fast Fashion', text: 'Rapid production of large quantities of cheap clothing following the latest trends. Environmental cost: fashion is responsible for 10% of global carbon emissions and massive water pollution.' },
            { icon: 'fas fa-brain', title: 'Planned Obsolescence', text: 'Designing products to become outdated or broken after a short time — forcing consumers to buy replacements. Classic example: Apple slowing down older iPhones.' },
          ])}

          ${renderSubhead('Core Consumerism Vocabulary')}
          ${renderTable({
            headers: ['Word / Phrase', 'German', 'Notes / Example'],
            rows: [
              ['consumerism','Konsumismus','The ideology that personal happiness and social status are achieved through buying and owning goods.'],
              ['materialism','Materialismus','The belief that material possessions are the primary source of happiness and success. Often linked to shallow values.'],
              ['consumption','Konsum / Verbrauch','The use of goods and services. Global consumption has tripled since the 1970s, far outpacing population growth.'],
              ['disposable income','verfügbares Einkommen','Money available for spending after taxes and necessities — drives consumer spending.'],
              ['consumer society','Konsumgesellschaft','A society in which the buying and selling of goods is the dominant cultural activity.'],
              ['brand','Marke','A name, logo, and set of associations that distinguish one company\'s products from competitors\'.',],
              ['brand loyalty','Markentreue','Consumers repeatedly buying the same brand. Built through advertising, quality, and emotional association.'],
              ['brand identity','Markenidentität','The values, personality, and image a brand projects — increasingly brands sell a lifestyle, not just a product.'],
              ['advertising','Werbung','Paid communication designed to persuade consumers to buy products or adopt attitudes.'],
              ['marketing','Marketing','The broader process of identifying, communicating, and delivering value to consumers.'],
              ['target audience','Zielgruppe','The specific group of consumers a product or advertisement is aimed at.'],
              ['impulse buying','Spontankauf','Purchasing without prior planning — triggered by in-store displays, online algorithms, or emotional states.'],
              ['planned obsolescence','geplante Obsoleszenz','Designing products to fail or become outdated quickly — forcing repeat purchases.'],
              ['fast fashion','Fast Fashion','Rapid, cheap clothing production following trends. Exploits low-wage workers and creates massive waste.'],
              ['throwaway culture','Wegwerfkultur','A culture of discarding products quickly rather than repairing or keeping them.'],
              ['overconsumption','Überkonsum','Consuming resources at a rate faster than they can be replenished. Key driver of environmental crisis.'],
              ['debt','Schulden','Many consumers fund consumption through credit — "buy now, pay later" normalises debt.'],
              ['credit card','Kreditkarte','Enables spending beyond current income — makes impulsive and excessive purchasing easier.'],
              ['peer pressure','Gruppenzwang','Social pressure to conform to the consumption patterns of peers — "keeping up with the Joneses."'],
              ['status symbol','Statussymbol','A product owned to signal wealth and social status — luxury cars, designer handbags.'],
              ['conspicuous consumption','demonstrativer Konsum','Buying expensive goods publicly to signal wealth and status. Term coined by Thorstein Veblen (1899).'],
              ['greenwashing','Greenwashing','Marketing a product as environmentally friendly when it isn\'t. Widespread in fashion, energy, and food industries.'],
              ['ethical consumerism','ethischer Konsum','Choosing products based on environmental and social values — fair trade, organic, cruelty-free.'],
              ['fair trade','Fairer Handel','A system ensuring producers in developing countries receive a fair price for their goods.'],
              ['secondhand economy','Secondhand-Markt','Buying and selling used goods — driven by sustainability concerns and cost savings. Growing via Vinted, eBay, etc.'],
              ['circular economy','Kreislaufwirtschaft','Economic model that keeps products in use as long as possible — reduces waste.'],
            ],
          })}

          ${renderSubhead('Advertising Techniques')}
          ${renderTable({
            headers: ['Technique', 'German', 'How it works'],
            rows: [
              ['emotional appeal','emotionaler Appell','Advertising that creates an emotional connection — happiness, nostalgia, fear, belonging — rather than providing facts.'],
              ['celebrity endorsement','Promi-Empfehlung','Using a famous person to promote a product — transfers their status and likability to the brand.'],
              ['influencer marketing','Influencer-Marketing','Paying social media personalities to promote products to their followers — appears more authentic than traditional ads.'],
              ['fear of missing out (FOMO)','Angst, etwas zu verpassen','Creating urgency: "limited edition," "only 3 left." Triggers anxiety about missing an opportunity.'],
              ['social proof','soziale Bestätigung','"9 out of 10 people prefer X." Reviews, ratings, testimonials — we trust what others trust.'],
              ['bandwagon effect','Mitläufereffekt','Everyone else is buying it — don\'t be left behind. Exploits conformity and social pressure.'],
              ['aspirational advertising','Sehnsuchts-Werbung','Showing an idealised lifestyle — suggesting the product can help you achieve it.'],
              ['subliminal advertising','unterschwellige Werbung','Messages below conscious awareness — e.g. brief visual frames. Of dubious effectiveness, but widely feared.'],
              ['product placement','Produktplatzierung','Embedding products naturally in films, TV shows, and social media content.'],
              ['native advertising','Native Advertising','Paid content designed to look like editorial content — blurs the line between journalism and advertising.'],
              ['targeted advertising','zielgruppenspezifische Werbung','Using data (cookies, browsing history, demographics) to show personalised ads. Highly effective.'],
              ['call to action','Handlungsaufforderung','"Buy now," "Sign up today," "Don\'t miss out" — direct instructions prompting immediate response.'],
            ],
          })}

          ${renderSubhead('Fast Fashion & Environment')}
          ${renderTable({
            headers: ['Word / Phrase', 'German', 'Notes'],
            rows: [
              ['fast fashion','Fast Fashion','Rapid production of trendy, cheap clothing. H&M, Zara, Shein produce new collections weekly or daily.'],
              ['textile waste','Textilabfälle','Fashion industry generates 92 million tonnes of waste annually. Many clothes worn fewer than 5 times.'],
              ['sweatshop','Sweatshop / Ausbeutungsbetrieb','A factory with poor conditions, low wages, and long hours — often producing fast fashion in Bangladesh, Cambodia, etc.'],
              ['supply chain transparency','Lieferkettentransparenz','Knowing where and how a product was made — increasingly demanded by ethical consumers and regulators.'],
              ['slow fashion','Slow Fashion','Movement promoting quality over quantity — buying fewer, better-made garments that last longer.'],
              ['upcycling','Upcycling','Turning waste material into something of higher value — transforming old jeans into bags, etc.'],
              ['textile dye pollution','Farbstoffverschmutzung','Textile dyeing is the second-largest polluter of clean water globally. Often discharged untreated.'],
              ['water consumption','Wasserverbrauch','Cotton production: one T-shirt requires 2,700 litres of water. Fashion industry uses 79 billion cubic metres annually.'],
            ],
          })}

          ${renderSubhead('Useful Phrases for Essays')}
          ${renderTable({
            headers: ['Phrase', 'Use'],
            rows: [
              ['In a consumer society, identity is increasingly defined by what we buy, not what we do.','Opening argument on consumerism and identity'],
              ['Advertising does not merely reflect culture — it actively shapes it.','On the power of advertising'],
              ['The hidden cost of cheap goods is paid by exploited workers and a degraded environment.','Ethical argument against fast fashion'],
              ['Planned obsolescence is not an accidental by-product but a deliberate business strategy.','Critical argument about corporate responsibility'],
              ['Ethical consumerism alone cannot substitute for systemic regulatory change.','On the limits of individual consumer choices'],
              ['"Vote with your wallet" — but only those with disposable income can vote.','Critique of ethical consumerism as a solution'],
              ['Materialism and happiness are poorly correlated beyond a basic income threshold.','Psychological argument against consumerism'],
            ],
          })}

        </div>
      </section>
      <section class="lz-content-section" style="padding:1.5rem 0 3rem;">
        <div class="lz-section-wrap">
          ${renderPageNav({
            prev: { label: 'Ecology', link: `${BASE}/themen/vocab/ecology` },
            next: { label: 'USA', link: `${BASE}/themen/vocab/usa` },
          }, BASE)}
        </div>
      </section>
      ${footerHTML(this.router)}
    `;
  }
  init() { i18n.init(); initScrollReveal(); initInteractive(document); }
}
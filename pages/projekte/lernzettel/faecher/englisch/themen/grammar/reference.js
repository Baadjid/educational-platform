// pages/projekte/lernzettel/faecher/englisch/themen/grammar/reference.js
// Englisch — Comprehensive Grammar Reference
// ASSEMBLE: Copy parts 1–6 in order into one file.

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs } from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS,
  renderInfobox,
  renderTable,
  renderSubhead,
  renderTags,
  renderAccordion,
  renderMerkboxGrid,
  renderTabs,
  renderFormulaBox,
  initInteractive,
} from '../../../../js/components/components.js';
import { renderPageNav } from '../../../../js/components/subnav.js';
import { COLOR, COLOR_RGB, BASE } from '../../englisch.js';

export default class GrammarReferencePage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-englisch page-grammar-reference';
    el.style.setProperty('--lz-accent', COLOR);
    el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html();
    return el;
  }

  // ═══════════════════════════════════════════════════════════
  // PART 1 — IRREGULAR & REGULAR VERBS
  // ═══════════════════════════════════════════════════════════

  _irregularVerbs() {
    return `
      <p class="lz-prose">Irregular verbs do not follow the standard -ed pattern for past simple and past
      participle. They must be memorised. Group them by pattern to make this easier.</p>

      ${renderInfobox({ type: 'blue', icon: 'fas fa-layer-group', title: '3 Key Patterns for Memorisation', body:
        '<strong>Same in all 3 forms:</strong> cut–cut–cut · put–put–put · set–set–set · let–let–let · cost–cost–cost · shut–shut–shut<br>' +
        '<strong>Same in past simple + past participle:</strong> bring–brought–brought · buy–bought–bought · catch–caught–caught · feel–felt–felt · find–found–found · keep–kept–kept · leave–left–left · make–made–made · pay–paid–paid · say–said–said · sell–sold–sold · send–sent–sent · sit–sat–sat · sleep–slept–slept · spend–spent–spent · stand–stood–stood · teach–taught–taught · tell–told–told · think–thought–thought · win–won–won<br>' +
        '<strong>Vowel pattern i → a → u:</strong> begin–began–begun · drink–drank–drunk · ring–rang–rung · run–ran–run · sing–sang–sung · sink–sank–sunk · swim–swam–swum'
      })}

      ${renderTable({
        headers: ['Infinitive', 'Past Simple', 'Past Participle', 'German'],
        rows: [
          ['<strong>be</strong>','was / were','been','sein'],
          ['<strong>beat</strong>','beat','beaten','schlagen'],
          ['<strong>become</strong>','became','become','werden'],
          ['<strong>begin</strong>','began','begun','beginnen'],
          ['<strong>bend</strong>','bent','bent','biegen'],
          ['<strong>bite</strong>','bit','bitten','beißen'],
          ['<strong>blow</strong>','blew','blown','blasen'],
          ['<strong>break</strong>','broke','broken','brechen'],
          ['<strong>bring</strong>','brought','brought','bringen'],
          ['<strong>build</strong>','built','built','bauen'],
          ['<strong>burn</strong>','burnt / burned','burnt / burned','brennen'],
          ['<strong>burst</strong>','burst','burst','platzen'],
          ['<strong>buy</strong>','bought','bought','kaufen'],
          ['<strong>catch</strong>','caught','caught','fangen'],
          ['<strong>choose</strong>','chose','chosen','wählen'],
          ['<strong>come</strong>','came','come','kommen'],
          ['<strong>cost</strong>','cost','cost','kosten'],
          ['<strong>cut</strong>','cut','cut','schneiden'],
          ['<strong>deal</strong>','dealt','dealt','umgehen mit'],
          ['<strong>dig</strong>','dug','dug','graben'],
          ['<strong>do</strong>','did','done','tun, machen'],
          ['<strong>draw</strong>','drew','drawn','zeichnen'],
          ['<strong>dream</strong>','dreamt / dreamed','dreamt / dreamed','träumen'],
          ['<strong>drink</strong>','drank','drunk','trinken'],
          ['<strong>drive</strong>','drove','driven','fahren'],
          ['<strong>eat</strong>','ate','eaten','essen'],
          ['<strong>fall</strong>','fell','fallen','fallen'],
          ['<strong>feed</strong>','fed','fed','füttern'],
          ['<strong>feel</strong>','felt','felt','fühlen'],
          ['<strong>fight</strong>','fought','fought','kämpfen'],
          ['<strong>find</strong>','found','found','finden'],
          ['<strong>flee</strong>','fled','fled','fliehen'],
          ['<strong>fly</strong>','flew','flown','fliegen'],
          ['<strong>forget</strong>','forgot','forgotten','vergessen'],
          ['<strong>forgive</strong>','forgave','forgiven','vergeben'],
          ['<strong>freeze</strong>','froze','frozen','frieren, einfrieren'],
          ['<strong>get</strong>','got','got / gotten (US)','bekommen, werden'],
          ['<strong>give</strong>','gave','given','geben'],
          ['<strong>go</strong>','went','gone','gehen'],
          ['<strong>grow</strong>','grew','grown','wachsen'],
          ['<strong>hang</strong>','hung / hanged*','hung / hanged*','hängen (*hanged = erhängen)'],
          ['<strong>have</strong>','had','had','haben'],
          ['<strong>hear</strong>','heard','heard','hören'],
          ['<strong>hide</strong>','hid','hidden','verstecken'],
          ['<strong>hit</strong>','hit','hit','treffen, schlagen'],
          ['<strong>hold</strong>','held','held','halten'],
          ['<strong>hurt</strong>','hurt','hurt','verletzen, wehtun'],
          ['<strong>keep</strong>','kept','kept','behalten'],
          ['<strong>kneel</strong>','knelt / kneeled','knelt / kneeled','knien'],
          ['<strong>know</strong>','knew','known','wissen, kennen'],
          ['<strong>lay</strong>','laid','laid','legen (etw. hinlegen)'],
          ['<strong>lead</strong>','led','led','führen'],
          ['<strong>lean</strong>','leant / leaned','leant / leaned','lehnen'],
          ['<strong>learn</strong>','learnt / learned','learnt / learned','lernen'],
          ['<strong>leave</strong>','left','left','verlassen, weggehen'],
          ['<strong>lend</strong>','lent','lent','leihen (verleihen)'],
          ['<strong>let</strong>','let','let','lassen, erlauben'],
          ['<strong>lie</strong>','lay','lain','liegen (sich befinden)'],
          ['<strong>light</strong>','lit / lighted','lit / lighted','anzünden'],
          ['<strong>lose</strong>','lost','lost','verlieren'],
          ['<strong>make</strong>','made','made','machen, herstellen'],
          ['<strong>mean</strong>','meant','meant','bedeuten'],
          ['<strong>meet</strong>','met','met','treffen, kennenlernen'],
          ['<strong>mistake</strong>','mistook','mistaken','verwechseln'],
          ['<strong>overcome</strong>','overcame','overcome','überwinden'],
          ['<strong>pay</strong>','paid','paid','bezahlen'],
          ['<strong>put</strong>','put','put','legen, stellen, setzen'],
          ['<strong>read</strong>','read /red/','read /red/','lesen'],
          ['<strong>ride</strong>','rode','ridden','reiten, (Rad) fahren'],
          ['<strong>ring</strong>','rang','rung','klingeln, anrufen'],
          ['<strong>rise</strong>','rose','risen','aufgehen, aufsteigen'],
          ['<strong>run</strong>','ran','run','laufen, rennen'],
          ['<strong>say</strong>','said','said','sagen'],
          ['<strong>see</strong>','saw','seen','sehen'],
          ['<strong>seek</strong>','sought','sought','suchen, anstreben'],
          ['<strong>sell</strong>','sold','sold','verkaufen'],
          ['<strong>send</strong>','sent','sent','schicken, senden'],
          ['<strong>set</strong>','set','set','setzen, (Sonne) untergehen'],
          ['<strong>shake</strong>','shook','shaken','schütteln'],
          ['<strong>shine</strong>','shone','shone','scheinen, leuchten'],
          ['<strong>shoot</strong>','shot','shot','schießen'],
          ['<strong>show</strong>','showed','shown / showed','zeigen'],
          ['<strong>shut</strong>','shut','shut','schließen'],
          ['<strong>sing</strong>','sang','sung','singen'],
          ['<strong>sink</strong>','sank','sunk','sinken, versinken'],
          ['<strong>sit</strong>','sat','sat','sitzen'],
          ['<strong>sleep</strong>','slept','slept','schlafen'],
          ['<strong>slide</strong>','slid','slid','gleiten, rutschen'],
          ['<strong>speak</strong>','spoke','spoken','sprechen'],
          ['<strong>spend</strong>','spent','spent','ausgeben; verbringen (Zeit)'],
          ['<strong>spread</strong>','spread','spread','ausbreiten, verteilen'],
          ['<strong>stand</strong>','stood','stood','stehen'],
          ['<strong>steal</strong>','stole','stolen','stehlen'],
          ['<strong>stick</strong>','stuck','stuck','kleben; stecken'],
          ['<strong>strike</strong>','struck','struck / stricken','schlagen; streiken'],
          ['<strong>swear</strong>','swore','sworn','schwören; fluchen'],
          ['<strong>sweep</strong>','swept','swept','fegen, kehren'],
          ['<strong>swim</strong>','swam','swum','schwimmen'],
          ['<strong>swing</strong>','swung','swung','schwingen, schaukeln'],
          ['<strong>take</strong>','took','taken','nehmen'],
          ['<strong>teach</strong>','taught','taught','unterrichten, beibringen'],
          ['<strong>tear</strong>','tore','torn','zerreißen'],
          ['<strong>tell</strong>','told','told','sagen, erzählen'],
          ['<strong>think</strong>','thought','thought','denken, nachdenken'],
          ['<strong>throw</strong>','threw','thrown','werfen'],
          ['<strong>understand</strong>','understood','understood','verstehen'],
          ['<strong>upset</strong>','upset','upset','aufregen, verärgern'],
          ['<strong>wake</strong>','woke','woken','aufwachen, aufwecken'],
          ['<strong>wear</strong>','wore','worn','tragen (Kleidung)'],
          ['<strong>weep</strong>','wept','wept','weinen (formal/literary)'],
          ['<strong>win</strong>','won','won','gewinnen'],
          ['<strong>wind</strong>','wound /waʊnd/','wound /waʊnd/','aufwickeln; sich schlängeln'],
          ['<strong>withdraw</strong>','withdrew','withdrawn','zurückziehen; abheben'],
          ['<strong>write</strong>','wrote','written','schreiben'],
        ],
      })}

      ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'lie vs lay — The Classic Confusion', body:
        '<strong>lie</strong> (liegen) = intransitive (no object): lie – lay – lain → "She was lying on the beach. / Yesterday she lay on the beach."<br>' +
        '<strong>lay</strong> (legen) = transitive (needs object): lay – laid – laid → "Lay the book on the table. / She laid the baby in the cot."<br>' +
        'Memory trick: you lie down yourself, but you lay something else down.'
      })}
    `;
  }

  _regularVerbs() {
    return `
      <p class="lz-prose">Regular verbs form the past simple and past participle by adding <strong>-ed</strong>
      to the base form. Four spelling rules apply.</p>

      ${renderTable({
        headers: ['Rule', 'Condition', 'How to Form', 'Examples'],
        rows: [
          ['1. Standard','Base form ends in a consonant or vowel (not -e or -y)','Add <strong>-ed</strong>','walk→walked · talk→talked · play→played · help→helped · open→opened'],
          ['2. Silent -e','Base form ends in -e','Add <strong>-d</strong> only','like→liked · love→loved · arrive→arrived · hope→hoped · use→used'],
          ['3. Consonant + y','Base form ends in consonant + y','Change <strong>y → ied</strong>','study→studied · try→tried · carry→carried · worry→worried · hurry→hurried'],
          ['3b. Exception: vowel + y','Base form ends in vowel + y','Add <strong>-ed</strong> (keep y)','play→played · enjoy→enjoyed · stay→stayed · delay→delayed'],
          ['4. CVC doubling','One-syllable verb ending in single consonant–vowel–consonant (not w/x/y)','Double final consonant + <strong>-ed</strong>','stop→stopped · plan→planned · drop→dropped · rob→robbed · tip→tipped'],
          ['4b. Exception: w, x, y','One-syllable verb ending in w, x, or y','Add <strong>-ed</strong> only','show→showed · fix→fixed · play→played'],
          ['4c. British English','Two-syllable verbs ending in -l (British) vs (American)','British doubles -l; American does not','travel→travelled (BE) / traveled (AE) · cancel→cancelled (BE) / canceled (AE)'],
        ],
      })}

      ${renderSubhead('Pronunciation of -ed Endings')}
      <p class="lz-prose">The -ed ending has three different pronunciations depending on the final sound of the base verb.</p>

      ${renderTable({
        headers: ['Pronunciation', 'After', 'Examples'],
        rows: [
          ['/t/','Voiceless consonants: /p/ /k/ /f/ /s/ /ʃ/ /tʃ/ /θ/','hoped · worked · laughed · kissed · washed · watched · earthed'],
          ['/d/','Voiced consonants: /b/ /g/ /v/ /z/ /ʒ/ /dʒ/ /m/ /n/ /ŋ/ /l/ /r/ · and all vowel sounds','robbed · dragged · lived · caused · managed · climbed · rained · belonged · called · cared · played'],
          ['/ɪd/','The sounds /t/ and /d/ only','wanted · needed · decided · waited · landed · ended · loaded · voted'],
        ],
      })}

      ${renderInfobox({ type: 'success', icon: 'fas fa-microphone', title: 'Pronunciation Practice', body:
        'Say each group aloud until the pattern feels natural:<br>' +
        '<strong>/t/:</strong> walked, worked, cooked, stopped, laughed, watched, missed<br>' +
        '<strong>/d/:</strong> played, called, lived, studied, used, moved, listened<br>' +
        '<strong>/ɪd/:</strong> wanted, started, needed, visited, decided, waited, painted'
      })}
    `;
  }

  // ═══════════════════════════════════════════════════════════
  // PART 2 — ALL 12 TENSES (detailed)
  // Paste this block directly after _regularVerbs() ends.
  // ═══════════════════════════════════════════════════════════

  _tenses() {
    return `

      ${renderSubhead('Present Simple')}
      <h3 class="lz-h3">Formation</h3>
      ${renderTable({
        headers: ['Form', 'I / You / We / They', 'He / She / It'],
        rows: [
          ['Positive','work / play / go','works / plays / goes'],
          ['Negative','don\'t work / play / go','doesn\'t work / play / go'],
          ['Question','Do I/you/we/they work?','Does he/she/it work?'],
          ['Short answer','Yes, I do. / No, I don\'t.','Yes, she does. / No, she doesn\'t.'],
        ],
      })}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-spell-check', title: 'Third-Person -s Spelling Rules', body:
        'Most verbs: add -s → work→works, eat→eats<br>' +
        'Verbs ending in -s, -sh, -ch, -x, -o: add -es → watch→watches, go→goes, do→does, fix→fixes<br>' +
        'Verbs ending in consonant+y: change y→ies → study→studies, carry→carries<br>' +
        'Exceptions: have→has, be→is'
      })}
      <h3 class="lz-h3">Uses</h3>
      ${renderTable({
        headers: ['Use', 'Example'],
        rows: [
          ['Habits and routines','I drink coffee every morning. She checks her emails at 9.'],
          ['Permanent situations / states','She lives in London. He works for a tech company.'],
          ['General truths and facts','Water boils at 100°C. The sun rises in the east.'],
          ['Timetables and schedules','The train leaves at 9:45. The film starts at 8 PM.'],
          ['Instructions and directions','You take the first left, then you turn right.'],
          ['Sports commentary (live)','Ronaldo passes to Messi — and he scores!'],
          ['In stories (historic present)','Napoleon returns from Elba and marches on Paris.'],
        ],
      })}
      <h4 class="lz-h4">Time Expressions</h4>
      <p class="lz-prose">always · usually · often · sometimes · rarely · never · every day/week/month/year · on Mondays · once a week · twice a month · in the morning · at night</p>

      ${renderSubhead('Present Continuous')}
      <h3 class="lz-h3">Formation</h3>
      ${renderTable({
        headers: ['Form', 'I', 'He / She / It', 'You / We / They'],
        rows: [
          ['Positive','am working','is working','are working'],
          ['Negative','am not / \'m not working','is not / isn\'t working','are not / aren\'t working'],
          ['Question','Am I working?','Is he/she/it working?','Are you/we/they working?'],
        ],
      })}
      <h3 class="lz-h3">Uses</h3>
      ${renderTable({
        headers: ['Use', 'Example'],
        rows: [
          ['Action happening right now','I\'m watching TV at the moment. She\'s not listening.'],
          ['Temporary situation (not permanent)','He\'s staying with us for a few weeks. I\'m working from home this month.'],
          ['Developing or changing situation','The climate is getting warmer. Prices are rising.'],
          ['Future arrangement (time + place set)','We\'re meeting them tomorrow at 5. I\'m flying to Berlin on Friday.'],
          ['Annoying repeated action (with always)','He\'s always leaving his keys everywhere! She\'s constantly interrupting!'],
        ],
      })}
      ${renderInfobox({ type: 'warning', icon: 'fas fa-ban', title: 'Stative Verbs — Rarely Used in Continuous', body:
        '<strong>Senses:</strong> see, hear, smell, taste, feel<br>' +
        '<strong>Emotions:</strong> love, hate, like, want, need, prefer<br>' +
        '<strong>Mental states:</strong> know, understand, believe, remember, forget, mean, think (= believe), suppose<br>' +
        '<strong>Possession:</strong> have (= own), own, belong, contain<br>' +
        '<strong>Appearance:</strong> seem, appear, look (= seem), sound<br>' +
        'Say: "I know the answer" (NOT "I\'m knowing") · "She loves him" (NOT "She\'s loving him")<br>' +
        '<em>Some verbs change meaning:</em> "I think he\'s right" (= believe) vs "I\'m thinking about it" (= active thought) · "She has a car" (= owns) vs "She\'s having lunch" (= eating)'
      })}
      <h4 class="lz-h4">Time Expressions</h4>
      <p class="lz-prose">now · at the moment · currently · right now · at present · today · this week/month/year · Look! · Listen! · still</p>

      ${renderSubhead('Past Simple')}
      <h3 class="lz-h3">Formation</h3>
      ${renderTable({
        headers: ['Form', 'All persons'],
        rows: [
          ['Positive (regular)','I/you/he/she/it/we/they worked / played / studied'],
          ['Positive (irregular)','I/you/he/she/it/we/they went / saw / bought'],
          ['Negative','I/you/he/she/it/we/they didn\'t work / go / see'],
          ['Question','Did I/you/he/she/it/we/they work / go / see?'],
          ['Short answer','Yes, I did. / No, I didn\'t.'],
        ],
      })}
      <h3 class="lz-h3">Uses</h3>
      ${renderTable({
        headers: ['Use', 'Example'],
        rows: [
          ['Completed action at a specific time in the past','I visited Paris last year. She called me yesterday.'],
          ['Series/sequence of past events','She opened the door, walked in, sat down, and started reading.'],
          ['Past habit or repeated action (no longer true)','When I was young, I played football every day.'],
          ['Duration in the past (finished)','He lived in Berlin for five years. They dated for six months.'],
          ['State in the past (finished)','I knew her very well back then. He owned a restaurant.'],
        ],
      })}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-code-compare', title: 'Past Simple vs Present Perfect', body:
        '<strong>Past Simple:</strong> specific time stated or implied → "I went to Paris in 2019." / "Did you see that film?" (last night — implied)<br>' +
        '<strong>Present Perfect:</strong> no specific time; link to present → "I\'ve been to Paris." (at some point in my life)<br>' +
        'Rule: never use Present Perfect with finished time expressions: yesterday, last week, in 2020, two hours ago, when I was young.'
      })}
      <h4 class="lz-h4">Time Expressions</h4>
      <p class="lz-prose">yesterday · last week/month/year/summer · two days ago · in 2020 · in the 1990s · when I was young · at that time · then · once · in the morning (of a past day) · on Monday (past)</p>

      ${renderSubhead('Past Continuous')}
      <h3 class="lz-h3">Formation</h3>
      ${renderTable({
        headers: ['Form', 'I / He / She / It', 'You / We / They'],
        rows: [
          ['Positive','was working','were working'],
          ['Negative','was not / wasn\'t working','were not / weren\'t working'],
          ['Question','Was I/he/she/it working?','Were you/we/they working?'],
        ],
      })}
      <h3 class="lz-h3">Uses</h3>
      ${renderTable({
        headers: ['Use', 'Example'],
        rows: [
          ['Action in progress at a specific past time','At 8 PM yesterday, I was watching TV. What were you doing at midnight?'],
          ['Background action interrupted by a shorter action','I was reading when she called. He was sleeping when the alarm went off.'],
          ['Two simultaneous actions in the past','While I was cooking, he was cleaning. She was singing while she was working.'],
          ['Describing a past scene / setting the atmosphere','The sun was shining, birds were singing, and children were playing in the park.'],
          ['Polite or tentative past requests','I was wondering if you could help me. I was hoping you\'d be here.'],
        ],
      })}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-info-circle', title: 'when vs while', body:
        '<strong>when</strong> + Past Simple (short, sudden action): "I was reading <em>when</em> she arrived."<br>' +
        '<strong>while</strong> + Past Continuous (longer, ongoing action): "She arrived <em>while</em> I was reading."<br>' +
        'Both are correct. The key is: Past Continuous = the background; Past Simple = the interruption.'
      })}
      <h4 class="lz-h4">Time Expressions</h4>
      <p class="lz-prose">while · when · as · at that moment · at 8 o\'clock yesterday · all day / all morning / all evening · the whole time · still</p>

      ${renderSubhead('Present Perfect Simple')}
      <h3 class="lz-h3">Formation</h3>
      ${renderTable({
        headers: ['Form', 'I / You / We / They', 'He / She / It'],
        rows: [
          ['Positive','have + past participle','has + past participle'],
          ['Positive (example)','I have seen / I\'ve seen','She has seen / She\'s seen'],
          ['Negative','I have not / haven\'t seen','She has not / hasn\'t seen'],
          ['Question','Have you/we/they seen?','Has he/she/it seen?'],
          ['Short answer','Yes, I have. / No, I haven\'t.','Yes, she has. / No, she hasn\'t.'],
        ],
      })}
      <h3 class="lz-h3">Uses</h3>
      ${renderTable({
        headers: ['Use', 'Example'],
        rows: [
          ['Life experience (no specific time mentioned)','I have visited London. Have you ever tried sushi? She\'s never met him.'],
          ['Recent action with present result','She has lost her keys. (= she doesn\'t have them now) · I\'ve broken my leg. (= it\'s broken now)'],
          ['Unfinished time period','I haven\'t seen him this week. (= the week isn\'t over) · Have you eaten today?'],
          ['Action that started in the past and is still true','I have lived here for 10 years. (= I still live here) · She has worked there since 2015.'],
          ['Announcing news (especially with just/already)','The president has just resigned. They\'ve already arrived.'],
        ],
      })}
      ${renderInfobox({ type: 'success', icon: 'fas fa-tag', title: 'Key Time Expressions and Their Meaning', body:
        '<strong>ever</strong> — at any time in your life: "Have you ever been to Japan?"<br>' +
        '<strong>never</strong> — at no time in your life: "I\'ve never eaten snails."<br>' +
        '<strong>already</strong> — sooner than expected (positive): "She\'s already finished."<br>' +
        '<strong>yet</strong> — by now (negative/question): "Have you eaten yet?" / "I haven\'t eaten yet."<br>' +
        '<strong>just</strong> — a very short time ago: "He\'s just called."<br>' +
        '<strong>recently / lately</strong> — in the recent past: "I\'ve been very busy lately."<br>' +
        '<strong>since</strong> — from a point in time: "since 2015 / since Tuesday / since I was a child"<br>' +
        '<strong>for</strong> — duration: "for three years / for ages / for a long time"'
      })}

      ${renderSubhead('Present Perfect Continuous')}
      <h3 class="lz-h3">Formation</h3>
      ${renderTable({
        headers: ['Form', 'I / You / We / They', 'He / She / It'],
        rows: [
          ['Positive','have been + -ing','has been + -ing'],
          ['Positive (example)','I\'ve been working','She\'s been working'],
          ['Negative','I haven\'t been working','She hasn\'t been working'],
          ['Question','Have you been working?','Has she been working?'],
        ],
      })}
      <h3 class="lz-h3">Uses</h3>
      ${renderTable({
        headers: ['Use', 'Example'],
        rows: [
          ['Action that started in the past and is still continuing now','I\'ve been studying English for three years. (= I still am) · She\'s been working here since 2018.'],
          ['Recently finished action with a visible present result','I\'m exhausted — I\'ve been running. (= tired because of running) · You look wet — has it been raining?'],
          ['Emphasising duration (how long?)','How long have you been waiting? · I\'ve been trying to reach you all day.'],
        ],
      })}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-balance-scale', title: 'Present Perfect Simple vs Continuous', body:
        '<strong>Simple:</strong> focuses on the result / completion → "I\'ve read 50 pages." (= finished 50 pages)<br>' +
        '<strong>Continuous:</strong> focuses on the activity / duration → "I\'ve been reading for an hour." (= the activity matters)<br>' +
        '<strong>Simple:</strong> how many / how much → "She\'s written three emails."<br>' +
        '<strong>Continuous:</strong> how long → "She\'s been writing emails all morning."<br>' +
        'Stative verbs (know, understand, like, love, etc.) use Simple even for duration: "I\'ve known him for years." (NOT been knowing)'
      })}
      <h4 class="lz-h4">Time Expressions</h4>
      <p class="lz-prose">for · since · how long · all day / all morning / all week · recently · lately · the whole time</p>

      ${renderSubhead('Past Perfect Simple')}
      <h3 class="lz-h3">Formation</h3>
      ${renderTable({
        headers: ['Form', 'All persons'],
        rows: [
          ['Positive','had + past participle → I/she/they had worked / had gone'],
          ['Negative','had not / hadn\'t + past participle → He hadn\'t finished'],
          ['Question','Had + subject + past participle? → Had you eaten?'],
          ['Short answer','Yes, I had. / No, I hadn\'t.'],
        ],
      })}
      <h3 class="lz-h3">Uses</h3>
      ${renderTable({
        headers: ['Use', 'Example'],
        rows: [
          ['Earlier past action before another past action (the "further back" past)','When I arrived, she had already left. (left = earlier; arrived = later past)'],
          ['To make the sequence of past events clear','He ate the sandwich that I had made earlier.'],
          ['In reported speech (backshift from Past Simple)','She said she had seen the film. / He told me he had been to Paris.'],
          ['In third conditional sentences','If I had known, I would have helped.'],
          ['After hardly/scarcely/no sooner (inverted)','Hardly had she sat down when the phone rang. No sooner had we left than it started raining.'],
        ],
      })}
      <h4 class="lz-h4">Time Expressions</h4>
      <p class="lz-prose">before · after · already · just · by the time · when · until · never · once · as soon as (in past narratives)</p>

      ${renderSubhead('Past Perfect Continuous')}
      <h3 class="lz-h3">Formation</h3>
      ${renderTable({
        headers: ['Form', 'All persons'],
        rows: [
          ['Positive','had been + -ing → I/she/they had been working'],
          ['Negative','had not been + -ing → He hadn\'t been sleeping'],
          ['Question','Had + subject + been + -ing? → Had you been waiting long?'],
        ],
      })}
      <h3 class="lz-h3">Uses</h3>
      ${renderTable({
        headers: ['Use', 'Example'],
        rows: [
          ['Duration of an action before a specific past moment','I had been waiting for an hour when she finally arrived. (waiting started before she arrived)'],
          ['Cause of a past state or situation','I was exhausted because I had been working all day. The roads were wet because it had been raining.'],
          ['Recently finished activity before another past event','She had been crying — her eyes were still red when she walked in.'],
        ],
      })}
      <h4 class="lz-h4">Time Expressions</h4>
      <p class="lz-prose">for · since · how long · before · until · when</p>

      ${renderSubhead('Future with Will')}
      <h3 class="lz-h3">Formation</h3>
      ${renderTable({
        headers: ['Form', 'All persons'],
        rows: [
          ['Positive','will + bare infinitive → I/she/they will go / \'ll go'],
          ['Negative','will not / won\'t + bare infinitive → I won\'t go'],
          ['Question','Will + subject + bare infinitive? → Will you help?'],
          ['Short answer','Yes, I will. / No, I won\'t.'],
        ],
      })}
      <h3 class="lz-h3">Uses</h3>
      ${renderTable({
        headers: ['Use', 'Example'],
        rows: [
          ['Predictions based on belief/opinion (not evidence)','I think it will rain tomorrow. She\'ll probably pass — she\'s very clever.'],
          ['Spontaneous decisions made at the moment of speaking','A: The phone is ringing. B: I\'ll get it! / I\'m hungry — I\'ll make a sandwich.'],
          ['Promises','I\'ll call you later, I promise. Don\'t worry — I won\'t tell anyone.'],
          ['Offers to help','I\'ll carry your bag. Shall I open the window?'],
          ['Requests','Will you help me with this? Will you be quiet, please?'],
          ['Threats or warnings','Be careful or you\'ll fall! If you don\'t study, you\'ll fail.'],
          ['Facts about the future','The sun will rise at 6:42 tomorrow.'],
        ],
      })}
      <h4 class="lz-h4">Time Expressions</h4>
      <p class="lz-prose">tomorrow · next week/month/year · in the future · soon · later · probably · I think/believe/hope/expect · I\'m sure · definitely · certainly</p>

      ${renderSubhead('Future with Going To')}
      <h3 class="lz-h3">Formation</h3>
      ${renderTable({
        headers: ['Form', 'I', 'He / She / It', 'You / We / They'],
        rows: [
          ['Positive','am going to work','is going to work','are going to work'],
          ['Negative','\'m not going to work','isn\'t going to work','aren\'t going to work'],
          ['Question','Am I going to work?','Is he going to work?','Are they going to work?'],
        ],
      })}
      <h3 class="lz-h3">Uses</h3>
      ${renderTable({
        headers: ['Use', 'Example'],
        rows: [
          ['Plans and intentions decided before the moment of speaking','I\'m going to study medicine at university. We\'re going to redecorate the bedroom.'],
          ['Predictions based on present evidence (you can see/feel it)','Look at those clouds! It\'s going to rain. He\'s going to drop that! Watch out — you\'re going to fall!'],
        ],
      })}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-code-branch', title: 'will vs going to', body:
        '<strong>Will — spontaneous decision:</strong> (deciding NOW) "I\'ll have the chicken." (in a restaurant, just deciding)<br>' +
        '<strong>Going to — pre-planned intention:</strong> (decided BEFORE) "I\'m going to have chicken for dinner." (already planned)<br><br>' +
        '<strong>Will — opinion/belief:</strong> "I think it will rain."<br>' +
        '<strong>Going to — visible evidence:</strong> "Look at those clouds — it\'s going to rain."'
      })}
      <h4 class="lz-h4">Time Expressions</h4>
      <p class="lz-prose">tomorrow · next week/month · soon · later · in the future · this summer · at the weekend</p>

      ${renderSubhead('Future Continuous')}
      <h3 class="lz-h3">Formation</h3>
      ${renderTable({
        headers: ['Form', 'All persons'],
        rows: [
          ['Positive','will be + -ing → I/she/they will be working / \'ll be working'],
          ['Negative','will not / won\'t be + -ing → I won\'t be working'],
          ['Question','Will + subject + be + -ing? → Will you be working?'],
        ],
      })}
      <h3 class="lz-h3">Uses</h3>
      ${renderTable({
        headers: ['Use', 'Example'],
        rows: [
          ['Action in progress at a specific time in the future','This time tomorrow, I\'ll be lying on a beach. At 9 PM tonight, she\'ll still be studying.'],
          ['Action that will be in progress when another future action happens','When you arrive, I\'ll be cooking dinner.'],
          ['Polite question about someone\'s plans (softer than "will you?")','Will you be using the car tonight? (= I\'d like to use it if you don\'t need it) · Will you be joining us for dinner?'],
          ['Describing a future programme/schedule','The president will be landing in Berlin at 3 PM.'],
        ],
      })}
      <h4 class="lz-h4">Time Expressions</h4>
      <p class="lz-prose">this time tomorrow · at 6 PM tonight · when you arrive · all day tomorrow · next week at this time</p>

      ${renderSubhead('Future Perfect')}
      <h3 class="lz-h3">Formation</h3>
      ${renderTable({
        headers: ['Form', 'All persons'],
        rows: [
          ['Positive','will have + past participle → I/she/they will have worked / \'ll have worked'],
          ['Negative','will not have / won\'t have + past participle → I won\'t have finished'],
          ['Question','Will + subject + have + past participle? → Will you have finished?'],
        ],
      })}
      <h3 class="lz-h3">Uses</h3>
      ${renderTable({
        headers: ['Use', 'Example'],
        rows: [
          ['Action that will be completed before a specific future time','By next June, I will have graduated. By the time you read this, she will have left.'],
          ['Looking back at what will have been achieved','By 2030, we will have been married for 25 years.'],
          ['Making a confident prediction about the present/recent past','Don\'t call now — he\'ll have gone to bed. She will have received the email by now.'],
        ],
      })}
      <h4 class="lz-h4">Time Expressions</h4>
      <p class="lz-prose">by tomorrow · by next week/month/year · by 2030 · by the time · before · when (+ future reference)</p>

      ${renderSubhead('Tense Quick-Reference Summary')}
      ${renderTable({
        headers: ['Tense', 'Key Signal Words', 'Core Use in One Line'],
        rows: [
          ['Present Simple','always, every day, on Mondays, never','Habits, routines, general truths'],
          ['Present Continuous','now, at the moment, currently, Look!','Action happening now; temporary; future arrangement'],
          ['Past Simple','yesterday, last year, in 2020, ago','Completed past action at a known time'],
          ['Past Continuous','while, when, at 8 PM yesterday','Background past action; interrupted action'],
          ['Present Perfect Simple','ever, never, already, yet, just, since, for','Life experience; recent result; unfinished time'],
          ['Present Perfect Continuous','for, since, how long, recently, all day','Duration of ongoing/recent activity'],
          ['Past Perfect Simple','before, after, already, by the time, when','Earlier past action before another past action'],
          ['Past Perfect Continuous','for, since, before','Duration before a past moment'],
          ['Will Future','tomorrow, soon, I think, probably','Prediction (opinion); spontaneous decision; promise'],
          ['Going-to Future','tomorrow, next week, soon (+ plan/evidence)','Pre-planned intention; prediction from evidence'],
          ['Future Continuous','this time tomorrow, at 9 PM tonight','Action in progress at a future point'],
          ['Future Perfect','by tomorrow, by 2030, by the time','Action completed before a future deadline'],
        ],
      })}
    `;
  }

  // ═══════════════════════════════════════════════════════════
  // PART 3 — PASSIVE · CONDITIONALS · MODAL VERBS
  // Paste this block directly after _tenses() ends.
  // ═══════════════════════════════════════════════════════════

  _passive() {
    return `
      <p class="lz-prose">The passive voice is used when we want to focus on the action or the person/thing
      affected, rather than who performs the action. Formation:
      <strong>Subject + correct form of "be" + past participle</strong> (+ by + agent, optional).</p>

      ${renderInfobox({ type: 'blue', icon: 'fas fa-exchange-alt', title: 'Active → Passive', body:
        '<strong>Active:</strong> Shakespeare wrote Hamlet.<br>' +
        '<strong>Passive:</strong> Hamlet was written by Shakespeare.<br><br>' +
        'The object of the active sentence becomes the subject of the passive sentence.<br>' +
        'The agent (the original subject) is placed after "by" — or omitted if unknown/unimportant.'
      })}

      ${renderSubhead('When to Use the Passive')}
      ${renderTable({
        headers: ['Reason', 'Example'],
        rows: [
          ['Unknown agent — we don\'t know who did it','My car was stolen. The window has been broken.'],
          ['Unimportant agent — who did it doesn\'t matter','The bridge was built in 1902. Coffee is grown in Brazil.'],
          ['Obvious agent — it goes without saying','Three men were arrested. (obviously by the police)'],
          ['Focus on the result or action, not the doer','The letter has been signed. The project has been completed.'],
          ['Formal, scientific or official writing','The experiment was conducted under controlled conditions. Results were recorded.'],
          ['To be tactful / avoid blaming','Mistakes were made. The deadline was missed.'],
        ],
      })}

      ${renderSubhead('Passive in All Tenses')}
      ${renderTable({
        headers: ['Tense', 'Active', 'Passive'],
        rows: [
          ['Present Simple','They clean the office daily.','The office <strong>is cleaned</strong> daily.'],
          ['Present Continuous','They are cleaning the office.','The office <strong>is being cleaned</strong>.'],
          ['Past Simple','They cleaned the office.','The office <strong>was cleaned</strong>.'],
          ['Past Continuous','They were cleaning the office.','The office <strong>was being cleaned</strong>.'],
          ['Present Perfect','They have cleaned the office.','The office <strong>has been cleaned</strong>.'],
          ['Past Perfect','They had cleaned the office.','The office <strong>had been cleaned</strong>.'],
          ['Future Simple (will)','They will clean the office.','The office <strong>will be cleaned</strong>.'],
          ['Future (going to)','They are going to clean the office.','The office <strong>is going to be cleaned</strong>.'],
          ['Future Perfect','They will have cleaned the office.','The office <strong>will have been cleaned</strong>.'],
          ['Modal: can','They can clean the office.','The office <strong>can be cleaned</strong>.'],
          ['Modal: must','They must clean the office.','The office <strong>must be cleaned</strong>.'],
          ['Modal: should','They should clean the office.','The office <strong>should be cleaned</strong>.'],
          ['Modal: might','They might clean the office.','The office <strong>might be cleaned</strong>.'],
          ['Modal: have to','They have to clean the office.','The office <strong>has to be cleaned</strong>.'],
        ],
      })}

      ${renderSubhead('Special Passive Structures')}
      ${renderAccordion([
        {
          title: '1. Passive with Two Objects (Ditransitive Verbs)',
          content: `<p class="lz-prose">Some verbs take two objects (indirect + direct): give, send, tell, offer, show, lend, teach, pay, promise.<br>
          Either object can become the subject — the personal passive (using the person) is usually preferred.</p>
          ${renderTable({
            headers: ['Active', 'Personal Passive (preferred)', 'Impersonal Passive'],
            rows: [
              ['Someone gave me a book.','I was given a book. ✅','A book was given to me.'],
              ['They told us the news.','We were told the news. ✅','The news was told to us.'],
              ['She offered him the job.','He was offered the job. ✅','The job was offered to him.'],
              ['They paid him £500.','He was paid £500. ✅','£500 was paid to him.'],
            ],
          })}`,
        },
        {
          title: '2. Passive with Reporting Verbs (say, think, believe, know, consider, expect, report, claim, understand)',
          content: `<p class="lz-prose">These verbs allow two passive patterns — both are correct and common in formal writing.</p>
          ${renderTable({
            headers: ['Active', 'Pattern 1: It + passive + that-clause', 'Pattern 2: Subject + passive + to-infinitive'],
            rows: [
              ['People say that he is rich.','It is said that he is rich.','He is said to be rich.'],
              ['People think she left early.','It is thought that she left early.','She is thought to have left early.'],
              ['People believe they are hiding.','It is believed that they are hiding.','They are believed to be hiding.'],
              ['People expect prices to rise.','It is expected that prices will rise.','Prices are expected to rise.'],
              ['People know he was there.','It is known that he was there.','He is known to have been there.'],
            ],
          })}`,
        },
        {
          title: '3. Get-Passive (Informal)',
          content: `<p class="lz-prose">In informal English, <strong>get</strong> can replace <strong>be</strong> in passive constructions.
          It often implies something happening suddenly, accidentally, or without planning.</p>
          ${renderTable({
            headers: ['Get-Passive', 'Meaning'],
            rows: [
              ['I got fired from my job.','I was fired (unexpectedly).'],
              ['She got hurt in the accident.','She was hurt.'],
              ['We\'re getting married next month.','We are being married.'],
              ['He got arrested.','He was arrested.'],
              ['The window got broken.','The window was broken (somehow).'],
            ],
          })}`,
        },
        {
          title: '4. Have/Get Something Done (Causative)',
          content: `<p class="lz-prose">Used when you arrange for someone else to do something for you.
          Formation: <strong>have/get + object + past participle</strong></p>
          ${renderTable({
            headers: ['Causative', 'Meaning'],
            rows: [
              ['I had my car repaired.','I arranged for someone to repair it (I didn\'t do it myself).'],
              ['She\'s getting her nails done.','She has someone doing her nails professionally.'],
              ['We had the house painted.','We paid/arranged for painters to paint it.'],
              ['He\'s having his eyes tested.','An optician is testing them for him.'],
              ['I need to get my hair cut.','I need to go to a hairdresser.'],
            ],
          })}
          <p class="lz-prose"><strong>Get something done</strong> can also mean something bad happened to you:
          "She got her bag stolen." (= her bag was stolen — unwanted event)</p>`,
        },
      ])}

      ${renderSubhead('Common Passive Mistakes')}
      ${renderInfobox({ type: 'danger', icon: 'fas fa-times-circle', title: 'Errors to Avoid', body:
        '❌ The house is <em>build</em>. → ✅ The house is <strong>built</strong>. (always use past participle)<br>' +
        '❌ English is <em>spoke</em> here. → ✅ English is <strong>spoken</strong> here.<br>' +
        '❌ The work has <em>done</em>. → ✅ The work has <strong>been done</strong>.<br>' +
        '❌ It was <em>happened</em> yesterday. → ✅ It happened yesterday. (intransitive verbs have no passive: happen, arrive, die, sleep)<br>' +
        '❌ She was <em>been</em> given a prize. → ✅ She was given a prize.<br>' +
        '❌ I am <em>interesting</em> in art. → ✅ I am <strong>interested</strong> in art. (use -ed for feelings)'
      })}
    `;
  }

  _conditionals() {
    return `
      <p class="lz-prose">Conditional sentences describe hypothetical situations and their consequences.
      They consist of an <strong>if-clause</strong> (the condition) and a <strong>main clause</strong> (the result).
      The if-clause can come first or second — when it comes first, a comma separates the two clauses.</p>

      ${renderSubhead('Zero Conditional')}
      ${renderFormulaBox({ label: 'Structure', formula: 'If + present simple, present simple', desc: 'Used for general truths, scientific facts, and things that are always true when the condition is met. "When" can replace "if".' })}
      ${renderTable({
        headers: ['Example', 'Note'],
        rows: [
          ['If you heat water to 100°C, it boils.','Scientific fact — always true'],
          ['If I don\'t sleep enough, I feel tired.','Personal general truth'],
          ['Plants die if they don\'t get water.','If-clause second — no comma needed'],
          ['When you press this button, the machine starts.','When = if (zero conditional)'],
          ['If you mix red and blue, you get purple.','Art/science fact'],
        ],
      })}

      ${renderSubhead('First Conditional')}
      ${renderFormulaBox({ label: 'Structure', formula: 'If + present simple, will + bare infinitive', desc: 'Used for real, possible situations in the future. The condition is likely or at least possible.' })}
      ${renderTable({
        headers: ['Example', 'Note'],
        rows: [
          ['If it rains tomorrow, we will stay home.','Real future possibility'],
          ['If you study hard, you\'ll pass the exam.','Will = \'ll in informal speech'],
          ['She won\'t come if you don\'t invite her.','Negative in main clause'],
          ['If I have time, I\'ll help you.','Uncertainty about having time'],
          ['Unless it rains, we\'ll have the party outside.','Unless = if not'],
        ],
      })}
      ${renderAccordion([
        {
          title: 'First Conditional Variations',
          content: `<p class="lz-prose">The main clause doesn't have to use "will" — other modal verbs are common:</p>
          ${renderTable({
            headers: ['Main Clause Modal', 'Example', 'Meaning'],
            rows: [
              ['can','If you need help, you can call me.','Permission / ability'],
              ['may / might','If the traffic is bad, we might be late.','Possibility (less certain than will)'],
              ['should','If you feel ill, you should see a doctor.','Advice'],
              ['must / have to','If you enter the lab, you must wear a mask.','Obligation'],
              ['imperative','If you see her, tell her to call me.','Instruction / request'],
            ],
          })}
          <p class="lz-prose"><strong>Unless</strong> = if not: "I\'ll go unless it rains." = "I\'ll go if it doesn\'t rain."<br>
          <strong>As long as / provided (that) / on condition that</strong> = stricter conditions:<br>
          "You can borrow my car <em>as long as</em> you fill it up." (= only if you fill it up)</p>`,
        },
      ])}

      ${renderSubhead('Second Conditional')}
      ${renderFormulaBox({ label: 'Structure', formula: 'If + past simple, would + bare infinitive', desc: 'Used for hypothetical, imaginary, or unlikely situations in the present or future. The speaker does NOT expect the condition to be true.' })}
      ${renderTable({
        headers: ['Example', 'Reality'],
        rows: [
          ['If I won the lottery, I would buy a house.','I don\'t expect to win.'],
          ['If I were you, I wouldn\'t do that.','I am not you (hypothetical advice).'],
          ['She would be happier if she had more friends.','She doesn\'t have many friends.'],
          ['What would you do if you saw a ghost?','Imaginary / very unlikely situation'],
          ['If he worked harder, he might get a promotion.','He doesn\'t work hard enough.'],
        ],
      })}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-info-circle', title: 'were vs was in Second Conditional', body:
        'In formal/written English, use <strong>were</strong> for ALL persons in the if-clause of the second conditional:<br>' +
        '"If I <strong>were</strong> rich…" · "If she <strong>were</strong> here…" · "If he <strong>were</strong> taller…"<br>' +
        'In informal spoken English, "was" is also common for I/he/she/it.<br>' +
        'The expression <strong>"If I were you"</strong> always uses "were" — never "was".'
      })}
      ${renderAccordion([
        {
          title: 'Second Conditional Variations',
          content: `${renderTable({
            headers: ['Variation', 'Example'],
            rows: [
              ['could instead of would','If I had more time, I could learn Spanish.'],
              ['might instead of would','If she asked nicely, he might agree.'],
              ['could in if-clause (= if were able to)','If you could fly, where would you go?'],
            ],
          })}`,
        },
      ])}

      ${renderSubhead('Third Conditional')}
      ${renderFormulaBox({ label: 'Structure', formula: 'If + past perfect, would have + past participle', desc: 'Used for hypothetical situations in the PAST — things that did NOT happen. Expresses regret, criticism, or imagining a different past.' })}
      ${renderTable({
        headers: ['Example', 'Reality / Implication'],
        rows: [
          ['If I had studied harder, I would have passed.','I didn\'t study hard → I failed.'],
          ['If we had left earlier, we wouldn\'t have missed the train.','We left late → we missed it.'],
          ['She would have come if you had invited her.','You didn\'t invite her → she didn\'t come.'],
          ['If he had been more careful, this wouldn\'t have happened.','He was careless → this happened. (criticism)'],
          ['What would you have done if you had seen him?','Imagining a different past situation'],
        ],
      })}
      ${renderAccordion([
        {
          title: 'Third Conditional Variations',
          content: `${renderTable({
            headers: ['Variation', 'Example'],
            rows: [
              ['could have instead of would have','If I had tried harder, I could have won.'],
              ['might have instead of would have','If she had applied earlier, she might have got the job.'],
              ['should have (giving past advice)','If you had asked me, I would have told you what to do.'],
            ],
          })}`,
        },
        {
          title: 'Formal Inversion in Conditionals',
          content: `<p class="lz-prose">In formal written English, the word "if" can be omitted and the subject and auxiliary verb are inverted. This is common in formal letters, legal documents, and literary writing.</p>
          ${renderTable({
            headers: ['Normal', 'Inverted (Formal)'],
            rows: [
              ['If I were you, …','Were I you, …'],
              ['If she had known, …','Had she known, …'],
              ['If you should need help, …','Should you need help, …'],
              ['If I had been there, …','Had I been there, …'],
            ],
          })}`,
        },
      ])}

      ${renderSubhead('Mixed Conditionals')}
      <p class="lz-prose">Mixed conditionals combine elements of different conditional types when the time of
      the condition and the result are different.</p>
      ${renderTable({
        headers: ['Type', 'If-Clause', 'Main Clause', 'Meaning', 'Example'],
        rows: [
          ['Past → Present','past perfect','would + infinitive','Past condition, present result','If I had studied medicine, I would be a doctor now.'],
          ['Present → Past','past simple','would have + past participle','Present condition, past result','If I were more organised, I wouldn\'t have forgotten your birthday.'],
        ],
      })}
      ${renderTable({
        headers: ['Example', 'Analysis'],
        rows: [
          ['If I had taken that job, I would be living in New York now.','Past decision (didn\'t take job) → present consequence (not in NY)'],
          ['If she were more careful, she wouldn\'t have made that mistake.','Present characteristic (she\'s careless) → past result (made mistake)'],
          ['If I had been born in England, I would speak English natively.','Past circumstance → present ability'],
          ['If he weren\'t so lazy, he would have finished by now.','Present characteristic → past/current result'],
        ],
      })}

      ${renderSubhead('Conditionals Summary Table')}
      ${renderTable({
        headers: ['Type', 'If-Clause', 'Main Clause', 'Time', 'Use'],
        rows: [
          ['Zero','present simple','present simple','Any','General truths, facts, habits'],
          ['First','present simple','will + inf','Future','Real possibility'],
          ['Second','past simple','would + inf','Present/Future','Unreal / hypothetical / advice'],
          ['Third','past perfect','would have + pp','Past','Unreal past / regret / criticism'],
          ['Mixed 1','past perfect','would + inf','Past → Present','Past cause, present effect'],
          ['Mixed 2','past simple','would have + pp','Present → Past','Present cause, past effect'],
        ],
      })}
    `;
  }

  _modals() {
    return `
      <p class="lz-prose">Modal verbs express concepts like possibility, permission, ability, obligation,
      advice, and deduction. They have special grammatical features:</p>
      ${renderTable({
        headers: ['Feature', 'Rule', 'Example'],
        rows: [
          ['Always + bare infinitive','Never use "to" directly after a modal','You must go. (NOT must to go)'],
          ['No -s in 3rd person','He can, she should, it must (never cans/shoulds)','She can swim. (NOT she cans)'],
          ['No auxiliary "do" in questions/negatives','Use the modal directly','Can you help? / You can\'t go. (NOT Do you can?)'],
          ['No infinitive form','You can\'t say "to can", "to must"','Use alternatives: to be able to, to have to, to be allowed to'],
          ['No -ing / past participle forms','Modals don\'t take these endings','Use alternatives for complex tenses'],
        ],
      })}

      ${renderSubhead('Can / Could')}
      ${renderTable({
        headers: ['Use', 'Modal', 'Example'],
        rows: [
          ['Ability (present)','can','I can speak three languages. She can\'t drive.'],
          ['Ability (past — general)','could','When I was young, I could run fast.'],
          ['Ability (past — specific achievement)','was/were able to','I was able to finish the project on time. (NOT could — specific one-off achievement)'],
          ['Permission (informal)','can','Can I use your phone? You can go now.'],
          ['Permission (formal)','could / may','Could I ask you something? May I come in?'],
          ['Request (informal)','can','Can you help me?'],
          ['Request (polite)','could','Could you pass the salt, please?'],
          ['Possibility (theoretical)','can','It can be very hot in August.'],
          ['Possibility (future, less certain)','could','It could rain later. She could be at home.'],
          ['Suggestion','could','We could go to the cinema. You could try calling him.'],
        ],
      })}
      ${renderInfobox({ type: 'warning', icon: 'fas fa-lightbulb', title: 'Could — Specific Past Achievement', body:
        'For a specific single achievement in the past (not general ability), use <strong>was/were able to</strong> or <strong>managed to</strong>, not "could":<br>' +
        '✅ "I <strong>was able to</strong> fix the problem." (I actually fixed it — specific occasion)<br>' +
        '✅ "She <strong>managed to</strong> escape." (she actually escaped)<br>' +
        '❌ "I <strong>could</strong> fix the problem." (sounds like general ability — did I actually fix it?)<br>' +
        'Exception: with verbs of perception (see, hear, smell, feel, taste), "could" IS used for specific occasions:<br>' +
        '✅ "I could see the mountains clearly."'
      })}

      ${renderSubhead('May / Might')}
      ${renderTable({
        headers: ['Use', 'Modal', 'Example'],
        rows: [
          ['Permission (formal/polite)','may','May I come in? May I ask you a question?'],
          ['Possibility (~50% certain)','may','It may rain later. She may be at home.'],
          ['Possibility (~30% certain)','might','I might go to the party — I\'m not sure. He might have missed the bus.'],
          ['Polite suggestion','might','You might want to see a doctor. You might try the new restaurant.'],
          ['Criticism (might have)','might','You might have told me earlier! He might have called!'],
          ['Wishes (formal/literary)','may','May you have a long and happy life. May the best team win.'],
          ['Past possibility (didn\'t happen)','might have','She might have taken a different route. He might not have understood.'],
        ],
      })}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-balance-scale', title: 'May vs Might', body:
        'In modern English, the difference in certainty is small.<br>' +
        '<strong>May</strong> suggests ~50% possibility; <strong>might</strong> suggests slightly less (~30%).<br>' +
        'In practice they are often interchangeable for possibility.<br>' +
        'However: <strong>may NOT might</strong> for formal permission → "May I leave?" (not "Might I leave?")<br>' +
        'And: <strong>might NOT may</strong> for the past → "She might have been there." (not usually "may have")'
      })}

      ${renderSubhead('Must / Have to / Need to')}
      ${renderTable({
        headers: ['Use', 'Modal', 'Example'],
        rows: [
          ['Strong obligation (speaker\'s own decision/feeling)','must','I must call my mother. You must try this cake!'],
          ['External obligation (rules, laws, other people\'s requirements)','have to','I have to wear a uniform at work. Students have to hand in assignments by Friday.'],
          ['Past obligation','had to (both)','I had to work late yesterday. She had to take a taxi.'],
          ['Future obligation','will have to','I\'ll have to speak to him about this.'],
          ['Logical deduction (~90% certain — present)','must','She must be tired — she\'s been working all day. This must be the place.'],
          ['Logical deduction (past)','must have','He must have forgotten. They must have taken a wrong turn.'],
          ['Prohibition (must not)','must not / mustn\'t','You mustn\'t smoke in here. Students must not use phones in exams.'],
          ['No obligation (it\'s optional)','don\'t have to / don\'t need to','You don\'t have to come if you don\'t want to. She doesn\'t have to pay.'],
          ['Weak obligation / mild suggestion','need to','You need to be more careful. I need to think about this.'],
        ],
      })}
      ${renderInfobox({ type: 'danger', icon: 'fas fa-exclamation-circle', title: 'must not vs don\'t have to — Critical Difference', body:
        '<strong>Must not (mustn\'t)</strong> = PROHIBITION — it is forbidden:<br>' +
        '"You <strong>mustn\'t</strong> park here." (It is illegal / not allowed.)<br><br>' +
        '<strong>Don\'t have to / don\'t need to</strong> = NO OBLIGATION — it is not necessary but not forbidden:<br>' +
        '"You <strong>don\'t have to</strong> come." (It\'s optional — you can come if you want.)<br><br>' +
        'These are completely opposite meanings — confusing them is a serious error!'
      })}

      ${renderSubhead('Should / Ought to')}
      ${renderTable({
        headers: ['Use', 'Example'],
        rows: [
          ['Advice / recommendation','You should see a doctor about that. You should eat more vegetables.'],
          ['Expectation (something is likely)','She should be here soon. The parcel should arrive tomorrow.'],
          ['Criticism about the past (should have)','You should have called me. He shouldn\'t have said that.'],
          ['Regret about the past (should have)','I should have studied harder. We shouldn\'t have gone there.'],
          ['Moral obligation / duty','We should help those in need. You ought to apologise.'],
          ['Ought to (= should, slightly more formal)','You ought to see a doctor. They ought to have been told.'],
        ],
      })}

      ${renderSubhead('Will / Would')}
      ${renderTable({
        headers: ['Use', 'Modal', 'Example'],
        rows: [
          ['Future predictions','will','It will rain tomorrow. They\'ll be here at 6.'],
          ['Spontaneous decisions','will','I\'ll help you with that. I\'ll have the chicken.'],
          ['Promises','will','I\'ll call you tonight, I promise.'],
          ['Offers','will / shall','I\'ll carry your bag. Shall I open the window?'],
          ['Requests','will','Will you close the door, please?'],
          ['Refusal / unwillingness','won\'t','The car won\'t start. He won\'t listen to me.'],
          ['Polite requests','would','Would you help me, please? Would you mind waiting?'],
          ['Conditional (2nd/3rd)','would','If I won, I would buy a house. She would have come if you\'d asked.'],
          ['Past habits (similar to used to)','would','When I was young, I would play in the park every day.'],
          ['Preferences','would rather / would prefer','I\'d rather stay home. I\'d prefer to go by train.'],
          ['Imaginary situations','would','It would be nice to live by the sea.'],
        ],
      })}

      ${renderSubhead('Modal Verbs for Deduction and Speculation')}
      ${renderTable({
        headers: ['Certainty', 'Present', 'Past', 'Example (present → past)'],
        rows: [
          ['100% certain (positive)','will','will have','That will be the postman. / That will have been the postman.'],
          ['~90% certain (positive)','must','must have','She must be tired. / She must have been tired.'],
          ['~50% certain','may / might / could','may have / might have / could have','He may be at home. / He may have been at home.'],
          ['~10% certain','might (just)','might have','It might work. / It might have worked.'],
          ['~90% certain (negative)','can\'t / couldn\'t','can\'t have / couldn\'t have','It can\'t be right. / It can\'t have been him — he was abroad.'],
          ['100% certain (negative)','won\'t','won\'t have','She won\'t be at the party. / She won\'t have known.'],
        ],
      })}
      ${renderInfobox({ type: 'success', icon: 'fas fa-brain', title: 'Deduction Examples in Context', body:
        '"There\'s no answer at the door. She <strong>must be</strong> out." (I\'m 90% sure she\'s out)<br>' +
        '"He passed with distinction — he <strong>must have worked</strong> really hard." (past deduction)<br>' +
        '"That <strong>can\'t be</strong> John — John is in Australia." (I\'m 90% sure it\'s NOT John)<br>' +
        '"She <strong>might have taken</strong> a different route." (past possibility, ~50%)<br>' +
        '"The lights are on — they <strong>could be</strong> home." (possibility from evidence)'
      })}

      ${renderSubhead('Modal Verbs — Complete Summary Table')}
      ${renderTable({
        headers: ['Function', 'Modal(s)', 'Example'],
        rows: [
          ['Ability (present)','can','I can swim.'],
          ['Ability (past — general)','could','I could swim when I was five.'],
          ['Ability (past — specific)','was/were able to','I was able to fix it.'],
          ['Permission (informal)','can','Can I go now?'],
          ['Permission (formal)','may / could','May I come in?'],
          ['Request (informal)','can','Can you help?'],
          ['Request (polite)','could / would','Could you speak more slowly?'],
          ['Obligation (internal)','must','I must do this.'],
          ['Obligation (external)','have to / need to','I have to work.'],
          ['Prohibition','must not','You mustn\'t smoke.'],
          ['No obligation','don\'t have to','You don\'t have to come.'],
          ['Advice','should / ought to','You should rest.'],
          ['Possibility (~50%)','may / might / could','It may rain.'],
          ['Deduction (~90%)','must','She must be tired.'],
          ['Negative deduction (~90%)','can\'t','It can\'t be right.'],
          ['Prediction / promise','will','I\'ll call you.'],
          ['Polite request','would','Would you mind?'],
          ['Past habit','would','We would walk to school.'],
          ['Criticism (past)','should have','You should have told me.'],
          ['Regret (past)','should have','I should have listened.'],
          ['Unfulfilled ability (past)','could have','I could have helped.'],
        ],
      })}
    `;
  }

  // ═══════════════════════════════════════════════════════════
  // PART 4 — REPORTED SPEECH · VERB PATTERNS · PHRASAL VERBS
  // Paste this block directly after _modals() ends.
  // ═══════════════════════════════════════════════════════════

  _reportedSpeech() {
    return `
      <p class="lz-prose">Reported speech (indirect speech) is used to report what someone said without
      using their exact words. When the reporting verb is in the past tense, we usually shift the tenses
      back one step (backshift) and change certain pronouns, time expressions, and place references.</p>

      ${renderSubhead('Say vs Tell — The Key Distinction')}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-comment', title: 'say vs tell', body:
        '<strong>say</strong> — no object needed → He said (that) he was tired. / She said goodbye.<br>' +
        '<strong>tell</strong> — always needs a person (object) → He told <em>me</em> (that) he was tired. / She told <em>us</em> a story.<br><br>' +
        '❌ He said me he was tired. → ✅ He told me he was tired.<br>' +
        '❌ She told that she was busy. → ✅ She said (that) she was busy.'
      })}

      ${renderSubhead('Tense Backshift')}
      <p class="lz-prose">When the reporting verb (said, told, asked, etc.) is in the past, the tenses in
      the reported clause usually shift back one step into the past.</p>
      ${renderTable({
        headers: ['Direct Speech', 'Reported Speech', 'Example'],
        rows: [
          ['Present Simple → ','Past Simple','<em>"I work here."</em> → He said he <strong>worked</strong> there.'],
          ['Present Continuous → ','Past Continuous','<em>"I\'m studying."</em> → She said she <strong>was studying</strong>.'],
          ['Past Simple → ','Past Perfect','<em>"I went home."</em> → He said he <strong>had gone</strong> home.'],
          ['Present Perfect → ','Past Perfect','<em>"I\'ve finished."</em> → She said she <strong>had finished</strong>.'],
          ['Past Continuous → ','Past Perfect Continuous','<em>"I was waiting."</em> → He said he <strong>had been waiting</strong>.'],
          ['Past Perfect → ','Past Perfect (no change)','<em>"I had seen it."</em> → She said she <strong>had seen</strong> it.'],
          ['will → ','would','<em>"I\'ll help you."</em> → She said she <strong>would help</strong> me.'],
          ['would → ','would (no change)','<em>"I would go."</em> → He said he <strong>would go</strong>.'],
          ['can → ','could','<em>"I can swim."</em> → He said he <strong>could swim</strong>.'],
          ['could → ','could (no change)','<em>"I could do it."</em> → She said she <strong>could do</strong> it.'],
          ['may → ','might','<em>"I may come."</em> → She said she <strong>might come</strong>.'],
          ['might → ','might (no change)','<em>"I might stay."</em> → He said he <strong>might stay</strong>.'],
          ['must → ','had to','<em>"I must go."</em> → He said he <strong>had to go</strong>.'],
          ['should → ','should (no change)','<em>"I should rest."</em> → She said she <strong>should rest</strong>.'],
        ],
      })}

      ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-circle', title: 'When Backshift is NOT Required', body:
        '<strong>1. Reporting verb in present tense:</strong> "He says he is tired." (no backshift needed)<br>' +
        '<strong>2. The statement is still true now (permanent facts, general truths):</strong> She said Paris <strong>is</strong> beautiful. / He told us water <strong>boils</strong> at 100°C.<br>' +
        '<strong>3. Past Perfect, would, could, should, might, ought to — already past forms:</strong> no further backshift possible.<br>' +
        '<strong>4. Very recent speech:</strong> "He just said he <strong>is</strong> coming." (still true right now — no backshift needed)'
      })}

      ${renderSubhead('Pronoun and Reference Changes')}
      ${renderTable({
        headers: ['Direct Speech', 'Reported Speech', 'Example'],
        rows: [
          ['"I"','he / she / I (depends on speaker)','<em>"I\'m tired."</em> → She said she was tired.'],
          ['"my"','his / her','<em>"My car broke down."</em> → He said his car had broken down.'],
          ['"you" (the listener)','I / me / he / she / they','<em>"You look great."</em> → He told me I looked great.'],
          ['"we"','they','<em>"We are leaving."</em> → They said they were leaving.'],
          ['today','that day','<em>"I\'m busy today."</em> → She said she was busy that day.'],
          ['tomorrow','the next day / the following day','<em>"I\'ll call tomorrow."</em> → He said he\'d call the next day.'],
          ['yesterday','the day before / the previous day','<em>"I saw her yesterday."</em> → She said she had seen her the day before.'],
          ['now','then / at that moment','<em>"I\'m working now."</em> → He said he was working then.'],
          ['today / tonight','that day / that night','<em>"I\'ll finish tonight."</em> → She said she\'d finish that night.'],
          ['this week','that week','<em>"I\'m busy this week."</em> → He said he was busy that week.'],
          ['next week','the following week / the week after','<em>"I\'ll visit next week."</em> → She said she\'d visit the following week.'],
          ['last week','the week before / the previous week','<em>"I went last week."</em> → He said he had gone the week before.'],
          ['... ago','... before','<em>"I saw him two days ago."</em> → She said she had seen him two days before.'],
          ['here','there','<em>"I live here."</em> → He said he lived there.'],
          ['this','that','<em>"I like this."</em> → She said she liked that.'],
          ['these','those','<em>"Take these."</em> → He said to take those.'],
        ],
      })}

      ${renderSubhead('Reporting Statements')}
      ${renderTable({
        headers: ['Direct Speech', 'Reported Speech'],
        rows: [
          ['"I am tired."','She said (that) she was tired.'],
          ['"I will help you tomorrow."','He said he would help me the next day.'],
          ['"I have finished my homework."','She told me she had finished her homework.'],
          ['"I can\'t come to the party."','He said he couldn\'t come to the party.'],
          ['"We\'ve been waiting for hours."','They said they had been waiting for hours.'],
          ['"I didn\'t do it."','She said she hadn\'t done it.'],
        ],
      })}

      ${renderSubhead('Reporting Questions')}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-question-circle', title: 'Key Rule for Reported Questions', body:
        'In reported questions, use <strong>statement word order</strong> (subject before verb) — NOT question word order.<br>' +
        'Do NOT use auxiliary "do/does/did".<br>' +
        'Do NOT use a question mark.<br>' +
        '❌ She asked where did I live. → ✅ She asked where I lived.<br>' +
        '❌ He asked what was I doing. → ✅ He asked what I was doing.<br>' +
        '❌ She asked if was I coming. → ✅ She asked if I was coming.'
      })}

      <h3 class="lz-h3">Yes/No Questions — Use if / whether</h3>
      ${renderTable({
        headers: ['Direct Question', 'Reported Question'],
        rows: [
          ['"Are you coming?"','She asked if/whether I was coming.'],
          ['"Do you like coffee?"','He asked me if/whether I liked coffee.'],
          ['"Have you finished?"','She asked if/whether I had finished.'],
          ['"Will you help me?"','He asked whether I would help him.'],
          ['"Can you drive?"','She asked if/whether I could drive.'],
          ['"Did you see the film?"','He asked if/whether I had seen the film.'],
        ],
      })}

      <h3 class="lz-h3">Wh- Questions — Keep the question word, use statement word order</h3>
      ${renderTable({
        headers: ['Direct Question', 'Reported Question'],
        rows: [
          ['"Where do you live?"','She asked where I lived.'],
          ['"What are you doing?"','He asked what I was doing.'],
          ['"When will you arrive?"','She asked when I would arrive.'],
          ['"Who is that man?"','He asked who that man was.'],
          ['"Why did you leave?"','She asked why I had left.'],
          ['"How long have you been waiting?"','He asked how long I had been waiting.'],
          ['"What time does it start?"','She asked what time it started.'],
          ['"How much does it cost?"','He asked how much it cost.'],
        ],
      })}

      ${renderSubhead('Reporting Commands and Requests')}
      ${renderTable({
        headers: ['Type', 'Structure', 'Direct Speech', 'Reported Speech'],
        rows: [
          ['Command (+)','told + object + to + infinitive','"Close the door."','She told me to close the door.'],
          ['Command (−)','told + object + not to + infinitive','"Don\'t be late."','He told us not to be late.'],
          ['Request (+)','asked + object + to + infinitive','"Please help me."','She asked me to help her.'],
          ['Request (−)','asked + object + not to + infinitive','"Please don\'t tell anyone."','He asked me not to tell anyone.'],
          ['Polite request','asked + object + to + infinitive','"Could you open the window?"','She asked me to open the window.'],
          ['Invitation','invited + object + to + infinitive','"Would you like to join us?"','They invited us to join them.'],
        ],
      })}

      ${renderSubhead('Other Reporting Verbs')}
      <p class="lz-prose">Using a variety of reporting verbs makes your writing more precise and sophisticated.
      Each reporting verb carries its own meaning and follows a specific grammatical pattern.</p>
      ${renderTable({
        headers: ['Verb', 'Pattern', 'Example (Direct → Reported)'],
        rows: [
          ['<strong>advise</strong>','+ sb to do sth','"You should see a doctor." → He advised me to see a doctor.'],
          ['<strong>agree</strong>','to do sth / that','"Yes, I\'ll come." → She agreed to come.'],
          ['<strong>admit</strong>','doing sth / that','"Yes, I took it." → He admitted taking / that he had taken it.'],
          ['<strong>apologise</strong>','for doing sth','"I\'m sorry I was late." → She apologised for being late.'],
          ['<strong>boast</strong>','about doing sth / that','"I\'m the best player." → He boasted about being the best player.'],
          ['<strong>claim</strong>','to do sth / that','"I saw him." → She claimed to have seen him.'],
          ['<strong>complain</strong>','about sth / that','"The service is terrible." → He complained about the service.'],
          ['<strong>decide</strong>','to do sth','"I\'ll go." → She decided to go.'],
          ['<strong>deny</strong>','doing sth','"I didn\'t take the money." → She denied taking the money.'],
          ['<strong>encourage</strong>','sb to do sth','"You should apply!" → They encouraged me to apply.'],
          ['<strong>explain</strong>','that / how / why','"The machine is broken." → She explained that the machine was broken.'],
          ['<strong>insist</strong>','on doing sth / that','"I\'ll pay." → He insisted on paying.'],
          ['<strong>invite</strong>','sb to do sth','"Would you like to come?" → They invited us to come.'],
          ['<strong>offer</strong>','to do sth','"I\'ll help you." → He offered to help me.'],
          ['<strong>order</strong>','sb to do sth','"Stop!" → The officer ordered us to stop.'],
          ['<strong>persuade</strong>','sb to do sth','"Come on, you must try it." → She persuaded him to try it.'],
          ['<strong>promise</strong>','to do sth / that','"I\'ll definitely call." → She promised to call.'],
          ['<strong>recommend</strong>','doing sth / that','"You should try the pasta." → He recommended trying the pasta.'],
          ['<strong>refuse</strong>','to do sth','"I won\'t answer." → She refused to answer.'],
          ['<strong>remind</strong>','sb to do sth','"Don\'t forget to buy milk." → He reminded me to buy milk.'],
          ['<strong>suggest</strong>','doing sth / that','"Let\'s go to the cinema." → She suggested going to the cinema.'],
          ['<strong>threaten</strong>','to do sth','"I\'ll call the police!" → He threatened to call the police.'],
          ['<strong>warn</strong>','sb (not) to do sth','"Don\'t be late or you\'ll lose your job." → She warned me not to be late.'],
        ],
      })}
    `;
  }

  _verbPatterns() {
    return `
      <p class="lz-prose">Different verbs are followed by different grammatical patterns. Getting these right
      is essential for accurate English. The main patterns involve infinitives (with or without "to"),
      gerunds (-ing forms), and combinations.</p>

      ${renderSubhead('Verb + to-Infinitive')}
      <p class="lz-prose">These verbs are always followed by <strong>to + bare infinitive</strong>.</p>
      ${renderTable({
        headers: ['Verb', 'Example', 'Category'],
        rows: [
          ['afford','I can\'t afford to go on holiday.','possibility/ability'],
          ['agree','She agreed to help me.','decision/communication'],
          ['aim','He aims to become a doctor.','intention'],
          ['appear','She appears to be asleep.','perception/judgement'],
          ['arrange','We arranged to meet at 8.','planning'],
          ['attempt','He attempted to climb the wall.','effort'],
          ['choose','She chose to stay.','decision'],
          ['claim','He claims to be an expert.','communication'],
          ['dare (= be brave enough)','She didn\'t dare to speak.','ability/bravery'],
          ['decide','I\'ve decided to leave.','decision'],
          ['demand','She demanded to see the manager.','communication'],
          ['deserve','He deserves to win.','judgement'],
          ['expect','I expect to be there by 6.','expectation'],
          ['fail','She failed to turn up.','result'],
          ['happen','I happened to see him.','chance'],
          ['hope','I hope to hear from you soon.','hope/wish'],
          ['intend','I intend to finish today.','intention'],
          ['learn','She is learning to drive.','learning'],
          ['manage','He managed to escape.','ability — specific success'],
          ['mean (= intend)','I didn\'t mean to hurt you.','intention'],
          ['need','You need to be more careful.','necessity'],
          ['neglect','He neglected to mention it.','omission'],
          ['offer','She offered to drive me home.','offer'],
          ['plan','We\'re planning to visit Rome.','planning'],
          ['prepare','Are you prepared to wait?','readiness'],
          ['pretend','He pretended to be asleep.','pretence'],
          ['promise','I promised to be there.','promise'],
          ['refuse','She refused to cooperate.','refusal'],
          ['seem','It seems to be working.','perception'],
          ['struggle','I\'m struggling to understand.','difficulty'],
          ['tend','She tends to work late.','habit/tendency'],
          ['threaten','He threatened to leave.','threat'],
          ['want','Do you want to come?','desire'],
          ['wish (= want formally)','I wish to complain.','formal desire'],
          ['would like','I\'d like to speak to the manager.','polite desire'],
        ],
      })}

      ${renderSubhead('Verb + -ing (Gerund)')}
      <p class="lz-prose">These verbs are always followed by the <strong>-ing form</strong> (gerund).
      The gerund functions as a noun — it is the <em>thing</em> you are doing or avoiding etc.</p>
      ${renderTable({
        headers: ['Verb', 'Example', 'Category'],
        rows: [
          ['admit','She admitted stealing the money.','confession'],
          ['avoid','He avoids making eye contact.','avoidance'],
          ['can\'t help','I can\'t help laughing.','uncontrollable action'],
          ['can\'t stand','She can\'t stand waiting.','strong dislike'],
          ['carry on','Please carry on working.','continuation'],
          ['consider','I\'m considering changing jobs.','thought/possibility'],
          ['delay','She delayed making a decision.','postponement'],
          ['deny','He denied breaking the window.','denial'],
          ['dislike','I dislike getting up early.','dislike'],
          ['enjoy','Do you enjoy cooking?','enjoyment'],
          ['fancy (informal)','Do you fancy going out?','desire (informal)'],
          ['feel like','I feel like going for a walk.','desire'],
          ['finish','Have you finished eating?','completion'],
          ['give up','She gave up smoking.','cessation'],
          ['imagine','I can\'t imagine living without music.','imagining'],
          ['involve','The job involves travelling abroad.','description'],
          ['keep (on)','He kept (on) interrupting me.','repetition'],
          ['mention','She mentioned feeling unwell.','communication'],
          ['mind','Would you mind waiting?','objection/preference'],
          ['miss','I miss living by the sea.','longing'],
          ['postpone','They postponed launching the product.','postponement'],
          ['practise','She practises playing the violin every day.','practice'],
          ['put off','Don\'t put off making a decision.','postponement'],
          ['recommend','He recommended trying the fish.','recommendation'],
          ['risk','Don\'t risk missing your flight.','risk'],
          ['suggest','She suggested meeting for coffee.','suggestion'],
        ],
      })}

      ${renderSubhead('Verb + Object + to-Infinitive')}
      <p class="lz-prose">These verbs take a <strong>person (object)</strong> followed by <strong>to + infinitive</strong>.</p>
      ${renderTable({
        headers: ['Verb', 'Example'],
        rows: [
          ['advise','He advised me to see a doctor.'],
          ['allow','She allowed us to leave early.'],
          ['ask','I asked him to help me.'],
          ['cause','The storm caused the roof to collapse.'],
          ['encourage','They encouraged her to apply.'],
          ['expect','I expect you to be on time.'],
          ['force','He forced us to sign the document.'],
          ['get','I got her to help me. (= persuade/arrange)'],
          ['help','She helped me to carry the bags. (or: helped me carry)'],
          ['instruct','He instructed us to wait outside.'],
          ['invite','They invited us to join them.'],
          ['order','The judge ordered him to pay a fine.'],
          ['pay','I paid her to do the cleaning.'],
          ['persuade','She persuaded him to change his mind.'],
          ['remind','Please remind me to call her.'],
          ['teach','She taught me to swim.'],
          ['tell','He told me to be quiet.'],
          ['urge','The doctor urged him to rest.'],
          ['want','I want you to be honest.'],
          ['warn','She warned us not to be late.'],
        ],
      })}

      ${renderSubhead('Verb + Bare Infinitive (without "to")')}
      ${renderTable({
        headers: ['Verb', 'Pattern', 'Example'],
        rows: [
          ['Modal verbs (can, could, may, might, must, shall, should, will, would)','modal + bare inf','I can swim. / You should go. / She might come.'],
          ['make (causative — force)','make + object + bare inf','She made me laugh. / They made us wait for hours.'],
          ['let (allow)','let + object + bare inf','Let me help you. / She let her daughter stay up late.'],
          ['help (optional "to")','help + object + bare inf / to-inf','Can you help me (to) find my keys?'],
          ['Verbs of perception (see, watch, hear, feel, notice) — complete action','verb + object + bare inf','I saw him leave the building. (the whole action — start to finish)'],
        ],
      })}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-eye', title: 'Perception Verbs: Bare Infinitive vs -ing', body:
        '<strong>Bare infinitive</strong> — complete action (from start to finish):<br>' +
        '"I saw him <strong>cross</strong> the road." (I saw the whole thing — he crossed completely)<br><br>' +
        '<strong>-ing form</strong> — action in progress (caught in the middle):<br>' +
        '"I saw him <strong>crossing</strong> the road." (I saw him while he was in the middle of crossing)<br><br>' +
        'Same for: hear, watch, feel, notice, observe, catch<br>' +
        '"I heard her <strong>sing</strong> the whole song." vs "I heard her <strong>singing</strong> in the bathroom."'
      })}

      ${renderSubhead('Verbs with DIFFERENT Meanings: to-Infinitive vs -ing')}
      ${renderTable({
        headers: ['Verb', '+ to-Infinitive (meaning)', 'Example', '+ -ing (meaning)', 'Example'],
        rows: [
          ['<strong>remember</strong>','remember that you need to do something (in the future / didn\'t forget)','I remembered to lock the door. (= I didn\'t forget)','have a memory of doing something (in the past)','I remember locking the door. (= I have a memory of it)'],
          ['<strong>forget</strong>','forget that you need to do something (future action not done)','I forgot to call her. (= I didn\'t call her)','fail to remember doing something (past memory)','I\'ll never forget meeting you. (= I\'ll always remember that moment)'],
          ['<strong>try</strong>','make an effort to do something (attempt)','He tried to open the jar but couldn\'t.','experiment or test something as a method','Try adding more salt — see if it helps.'],
          ['<strong>stop</strong>','stop what you\'re doing in order to do something else','She stopped to tie her shoelace. (she stopped walking in order to tie it)','finish / cease an activity','He stopped smoking last year. (he no longer smokes)'],
          ['<strong>go on</strong>','continue to do a different thing','He went on to become a famous director.','continue doing the same thing','She went on talking despite the interruptions.'],
          ['<strong>mean</strong>','involve / entail','Getting fit means exercising regularly.','intend (usually negative context)','I didn\'t mean to upset you.'],
          ['<strong>regret</strong>','be sorry about something you\'re about to say (formal)','I regret to inform you that you have failed.','be sorry about something you did in the past','I regret buying this car. (= I wish I hadn\'t)'],
          ['<strong>like</strong>','think it\'s a good idea (habit/preference when given a choice)','I like to tidy my desk before I leave.','enjoy an activity (generally)','I like swimming. (= I enjoy it)'],
        ],
      })}

      ${renderSubhead('Verbs with SAME Meaning: to-Infinitive or -ing')}
      ${renderTable({
        headers: ['Verb', 'With to-Infinitive', 'With -ing', 'Notes'],
        rows: [
          ['begin','She began to cry.','She began crying.','Both correct; same meaning. Stative verbs prefer to-inf: "It began to snow."'],
          ['start','He started to speak.','He started speaking.','Both correct; same meaning.'],
          ['continue','They continued to argue.','They continued arguing.','Both correct; same meaning.'],
          ['like','I like to swim.','I like swimming.','Both correct. "Would like" = ONLY to-inf: "I\'d like to go."'],
          ['love','She loves to dance.','She loves dancing.','Both correct. "Would love" = ONLY to-inf.'],
          ['hate','He hates to wait.','He hates waiting.','Both correct. "Would hate" = ONLY to-inf.'],
          ['prefer','I prefer to walk.','I prefer walking.','Both correct. "Would prefer" = ONLY to-inf.'],
        ],
      })}

      ${renderSubhead('Preposition + -ing')}
      <p class="lz-prose">After all prepositions, use the <strong>-ing form</strong> (gerund), never the infinitive.</p>
      ${renderTable({
        headers: ['Pattern', 'Example'],
        rows: [
          ['interested in + -ing','I\'m interested in learning Spanish.'],
          ['good / bad at + -ing','She\'s good at solving problems. / He\'s terrible at cooking.'],
          ['afraid / scared of + -ing','They\'re afraid of flying.'],
          ['tired of + -ing','I\'m tired of waiting. / She\'s tired of arguing.'],
          ['fond of + -ing','He\'s fond of hiking.'],
          ['capable of + -ing','I know she\'s capable of doing it.'],
          ['responsible for + -ing','He\'s responsible for checking the accounts.'],
          ['looking forward to + -ing','I\'m looking forward to seeing you.'],
          ['used to + -ing','She\'s used to working long hours. (= accustomed to)'],
          ['think about / of + -ing','I\'m thinking about changing jobs.'],
          ['thank you for + -ing','Thank you for helping me.'],
          ['without + -ing','He left without saying goodbye.'],
          ['instead of + -ing','She worked instead of resting.'],
          ['despite / in spite of + -ing','Despite feeling ill, he came to work.'],
          ['before / after + -ing','Wash your hands before eating. / After finishing, she relaxed.'],
        ],
      })}
      ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: '"used to" vs "be used to" — Critical Difference', body:
        '<strong>used to + bare infinitive</strong> = past habit (no longer true now):<br>' +
        '"I <strong>used to smoke</strong>." (= I smoked in the past; I don\'t now.)<br><br>' +
        '<strong>be/get used to + -ing</strong> = be accustomed to (can be any tense):<br>' +
        '"I\'m <strong>used to getting up</strong> early." (= I\'m accustomed to it — it\'s normal for me.)<br>' +
        '"She\'s getting <strong>used to living</strong> alone." (= she\'s becoming accustomed to it)'
      })}
    `;
  }

  _phrasalVerbs() {
    return `
      <p class="lz-prose">Phrasal verbs consist of a verb combined with one or two particles (adverbs or
      prepositions) that create a new, often idiomatic meaning. They are extremely common in natural English,
      especially in informal speech and writing.</p>

      ${renderSubhead('Types of Phrasal Verbs')}
      ${renderTable({
        headers: ['Type', 'Description', 'Rule', 'Example'],
        rows: [
          ['<strong>Intransitive</strong>','No object needed','Cannot be separated','The plane took off. / He grew up in London.'],
          ['<strong>Transitive Separable</strong>','Takes an object; object can go between verb and particle OR after the particle','If the object is a PRONOUN, it MUST go between verb and particle','Turn off the TV. / Turn the TV off. / Turn it off. ✅ (NOT: Turn off it ❌)'],
          ['<strong>Transitive Inseparable</strong>','Takes an object; object MUST come after the particle — even if it\'s a pronoun','Never split these','Look after the children. / Look after them. ✅ (NOT: Look them after ❌)'],
          ['<strong>Three-part Phrasal Verbs</strong>','Verb + two particles; always inseparable','Cannot be separated','I can\'t put up with this noise. / She\'s looking forward to it.'],
        ],
      })}

      ${renderSubhead('Phrasal Verbs A–C')}
      ${renderTable({
        headers: ['Phrasal Verb', 'Meaning', 'Example', 'Type'],
        rows: [
          ['ask out','invite on a romantic date','He asked her out to dinner.','sep.'],
          ['back down','stop arguing / give up a position','She eventually backed down.','intr.'],
          ['back up','support; move backwards','Can you back up your claim? / Please back up the car.','sep.'],
          ['break down','stop working (machine); lose emotional control; analyse','My car broke down. / She broke down in tears. / Let\'s break down the problem.','intr./sep.'],
          ['break in','interrupt; enter illegally','Sorry to break in, but… / They broke in through the window.','intr.'],
          ['break into','enter by force; start doing suddenly','They broke into the house. / She broke into laughter.','insep.'],
          ['break off','end a relationship or activity suddenly','They broke off their engagement.','sep.'],
          ['break out','start suddenly (war, fire, disease)','A fire broke out in the building.','intr.'],
          ['break up','end a relationship; dissolve (into laughter); (phone) lose signal','They broke up after two years. / We broke up (on the phone).','intr./sep.'],
          ['bring about','cause (a change)','The new law brought about major changes.','sep.'],
          ['bring out','emphasise; publish; release','Hard work brings out the best in her. / They\'re bringing out a new album.','sep.'],
          ['bring up','mention a topic; raise a child','Don\'t bring up the subject again. / He was brought up by his grandparents.','sep.'],
          ['call back','return a phone call','I\'ll call you back later.','sep.'],
          ['call off','cancel','The match was called off due to rain.','sep.'],
          ['call on','visit someone; ask someone to speak','The teacher called on him to answer.','insep.'],
          ['call out','shout; challenge; summon','She called out his name. / Call out the fire brigade.','sep.'],
          ['calm down','become calmer; make calmer','Calm down — it\'s not that serious! / I tried to calm him down.','intr./sep.'],
          ['carry on','continue','Carry on with your work. / Carry on regardless.','intr.'],
          ['carry out','perform; execute (a plan, experiment, order)','They carried out an investigation. / Carry out the plan.','sep.'],
          ['catch on','become popular; understand (informal)','The trend quickly caught on. / I finally caught on.','intr.'],
          ['catch up (with)','reach the same level; learn about missed events','I need to catch up with the news. / She caught up with the class.','intr./insep.'],
          ['check in','register at a hotel or airport','We checked in at 3 PM.','intr.'],
          ['check out','leave a hotel; investigate (informal)','We check out tomorrow. / Check out this new restaurant!','intr./sep.'],
          ['clean up','tidy; remove pollution/crime','Please clean up your room. / The city cleaned up the river.','sep.'],
          ['come across','find or meet by chance; make an impression','I came across an old friend. / She comes across as confident.','insep.'],
          ['come along','progress; accompany','How\'s the project coming along? / Come along with us!','intr.'],
          ['come apart','fall into pieces','The book came apart in my hands.','intr.'],
          ['come down with','become ill with','He came down with flu.','insep.'],
          ['come out','become public; be published; (sun) appear','The truth finally came out. / The book came out last month.','intr.'],
          ['come round / around','regain consciousness; visit; change opinion','She came round after a few minutes. / He came round to my view.','intr.'],
          ['come up','arise; be mentioned; (sun) rise','Something came up at work. / The topic came up in our meeting.','intr.'],
          ['come up with','think of (an idea, solution, excuse)','She came up with a brilliant solution.','insep.'],
          ['cut back (on)','reduce','We need to cut back on spending.','sep./insep.'],
          ['cut down (on)','reduce the amount of','I\'m trying to cut down on sugar.','sep./insep.'],
          ['cut off','disconnect; isolate; interrupt','The phone was cut off. / He was cut off mid-sentence.','sep.'],
          ['cut out','remove by cutting; stop (a bad habit)','Cut out the article. / Cut out the swearing!','sep.'],
        ],
      })}

      ${renderSubhead('Phrasal Verbs D–G')}
      ${renderTable({
        headers: ['Phrasal Verb', 'Meaning', 'Example', 'Type'],
        rows: [
          ['deal with','handle; manage; cope with','I\'ll deal with this problem. / She deals with difficult customers.','insep.'],
          ['drop off','deliver; fall asleep','Drop me off at the station. / He dropped off during the film.','sep./intr.'],
          ['drop out (of)','leave school/a race/a competition','She dropped out of university in her second year.','intr./insep.'],
          ['eat out','have a meal in a restaurant','Let\'s eat out tonight.','intr.'],
          ['end up','finally reach a place or situation','We ended up staying till midnight. / He ended up in hospital.','intr.'],
          ['fall apart','break into pieces; collapse (plan, relationship)','The plan fell apart. / Their marriage fell apart.','intr.'],
          ['fall behind','fail to keep up with','Don\'t fall behind with your work.','intr./insep.'],
          ['fall for','be deceived by; fall in love with','I fell for his trick. / He fell for her immediately.','insep.'],
          ['fall out (with)','have an argument and stop being friends','They fell out over money.','intr./insep.'],
          ['fall through','fail to happen (plans)','Our holiday plans fell through.','intr.'],
          ['figure out','understand; solve','I can\'t figure out how to do this.','sep.'],
          ['fill in / fill out','complete a form or document','Please fill in/out the application form.','sep.'],
          ['fill up','make completely full; fill a car with petrol','Fill up the tank. / The hall filled up quickly.','sep./intr.'],
          ['find out','discover information','I found out the truth. / Find out what time it starts.','sep.'],
          ['fit in (with)','suit; feel comfortable in a group','I never quite fitted in at school.','intr./insep.'],
          ['get across','communicate successfully','She got her point across.','sep.'],
          ['get along / get on (with)','have a good relationship','I get along/on well with my colleagues.','intr./insep.'],
          ['get away (with)','escape; do sth wrong without punishment','She got away with cheating.','intr./insep.'],
          ['get back','return; retrieve','When did you get back from Paris? / Get back what belongs to you.','intr./sep.'],
          ['get by','manage with limited resources','We\'re getting by on one salary.','intr.'],
          ['get down to','start doing sth seriously','Let\'s get down to business.','insep.'],
          ['get off','leave a bus/train/plane; be acquitted','Get off at the next stop. / He got off with a warning.','intr.'],
          ['get on with','make progress; have a good relationship; continue','How are you getting on with the project?','insep.'],
          ['get out of','avoid doing sth; leave a vehicle','I can\'t get out of the meeting. / Get out of the car.','insep.'],
          ['get over','recover from illness, shock, or disappointment','It took her months to get over the breakup.','insep.'],
          ['get rid of','remove; dispose of; end','Get rid of those old clothes. / I need to get rid of this headache.','insep.'],
          ['get through (to)','contact by phone; make someone understand; survive','I couldn\'t get through to him. / How did you get through the exam?','insep.'],
          ['get up','rise from bed; stand up','I get up at 7. / Get up from the floor.','intr.'],
          ['give away','give sth free; reveal a secret unintentionally','They gave away free samples. / Don\'t give the ending away!','sep.'],
          ['give back','return sth to its owner','Give me back my pen!','sep.'],
          ['give in','surrender; submit work','He finally gave in. / Give in your assignments by Friday.','intr./sep.'],
          ['give out','distribute; (machine) stop working','She gave out the worksheets. / The engine gave out.','sep./intr.'],
          ['give up','stop trying; quit a habit','Don\'t give up! / She gave up smoking.','intr./sep.'],
          ['go ahead','proceed; happen as planned','Please go ahead. / The concert went ahead despite the rain.','intr.'],
          ['go along with','agree with; accept','I\'ll go along with your idea.','insep.'],
          ['go away','leave; depart; (problem) disappear','Go away! / The pain went away.','intr.'],
          ['go back (on)','return; break a promise','I\'m going back to London. / She went back on her word.','intr./insep.'],
          ['go for','choose; attack; apply for','I\'ll go for the soup. / Go for it!','insep.'],
          ['go off','explode; ring (alarm); go bad (food); stop liking','The bomb went off. / My alarm goes off at 6. / The milk has gone off.','intr.'],
          ['go on','continue; happen','Go on — I\'m listening. / What\'s going on?','intr.'],
          ['go out','leave; (light/fire) stop burning; date someone','She went out with her friends. / The candle went out.','intr.'],
          ['go over','review; examine','Let\'s go over the main points.','insep.'],
          ['go through','experience; search; spend','She\'s going through a difficult time. / Go through your notes.','insep.'],
          ['grow up','become an adult; behave maturely','Where did you grow up? / Grow up!','intr.'],
        ],
      })}

      ${renderSubhead('Phrasal Verbs H–P')}
      ${renderTable({
        headers: ['Phrasal Verb', 'Meaning', 'Example', 'Type'],
        rows: [
          ['hand in','submit (work, assignment)','Hand in your homework by Monday.','sep.'],
          ['hand out','distribute to a group','She handed out the worksheets.','sep.'],
          ['hang on','wait (informal); hold tightly','Hang on a minute. / Hang on to the rope!','intr./insep.'],
          ['hang up','end a phone call; put on a hanger','She hung up without saying goodbye. / Hang up your coat.','intr./sep.'],
          ['head for','be moving towards','Where are you heading for? / We\'re heading for trouble.','insep.'],
          ['hold back','restrain; not release information','She held back her tears. / I held back from saying anything.','sep./intr.'],
          ['hold on','wait; grasp tightly','Hold on — I\'m not ready. / Hold on to your ticket.','intr./insep.'],
          ['hold up','delay; rob (using threats)','The train was held up for an hour. / They held up the bank.','sep.'],
          ['join in','participate','Everyone joined in the singing.','intr./insep.'],
          ['keep on','continue (often irritatingly)','Keep on trying. / He keeps on interrupting.','intr.'],
          ['keep out (of)','not enter; avoid','Keep out of my room!','intr./insep.'],
          ['keep up (with)','maintain the same speed/level','Can you keep up with the pace?','intr./insep.'],
          ['let down','disappoint; lower','Don\'t let me down. / Let the blinds down.','sep.'],
          ['let in','allow to enter','Let the cat in. / Don\'t let the rain in.','sep.'],
          ['let off','not punish; fire (a gun); release (gas)','He was let off with a warning. / They let off fireworks.','sep.'],
          ['let out','release; make a sound; make clothing larger','She let out a scream. / Let the dog out.','sep.'],
          ['light up','become bright; (face) show happiness','Her face lit up when she heard the news.','intr.'],
          ['look after','take care of','She looks after her elderly mother.','insep.'],
          ['look back (on)','reflect on the past','Looking back, I wish I had studied more.','intr./insep.'],
          ['look down on','consider inferior (= snob)','He looks down on people who haven\'t been to university.','insep.'],
          ['look for','try to find; search for','I\'m looking for my keys.','insep.'],
          ['look forward to','anticipate with pleasure','I\'m really looking forward to the holiday.','insep.'],
          ['look into','investigate','The police are looking into the matter.','insep.'],
          ['look out (for)','be careful; watch for','Look out! / Look out for pickpockets.','intr./insep.'],
          ['look up','search for information; improve','Look it up in the dictionary. / Things are looking up.','sep./intr.'],
          ['look up to','respect and admire','She looks up to her teacher.','insep.'],
          ['make out','see/hear with difficulty; claim; understand','I couldn\'t make out what she was saying. / He made out he was ill.','sep.'],
          ['make up','invent; reconcile after argument; apply cosmetics; constitute','He made up an excuse. / They made up after the argument. / Women make up 60% of the workforce.','sep./intr.'],
          ['make up for','compensate for','I\'ll make up for lost time.','insep.'],
          ['miss out (on)','fail to experience; omit','Don\'t miss out on this opportunity. / I missed out a question.','intr./insep./sep.'],
          ['move in/out','start/stop living somewhere','When do you move in? / She moved out last month.','intr.'],
          ['move on','leave a place or situation; change topic','It\'s time to move on.','intr.'],
          ['pass away','die (euphemism)','Her grandfather passed away last year.','intr.'],
          ['pass out','faint; distribute','She passed out from the heat. / Pass out the drinks.','intr./sep.'],
          ['pay back','return money; take revenge','I\'ll pay you back tomorrow.','sep.'],
          ['pay off','be successful; finish paying','All that hard work paid off. / I\'ve paid off my loan.','intr./sep.'],
          ['pick out','choose; identify from a group','Pick out a tie for me. / Can you pick me out in the photo?','sep.'],
          ['pick up','collect; learn casually; improve; answer (phone)','I\'ll pick you up at 8. / She picked up Spanish quickly. / The economy is picking up.','sep./intr.'],
          ['point out','draw attention to; indicate','She pointed out several mistakes.','sep.'],
          ['pull off','succeed at something difficult','He actually pulled it off!','sep.'],
          ['pull out','withdraw; overtake (driving)','They pulled out of the deal. / The car pulled out in front of me.','intr.'],
          ['pull through','survive illness or crisis','He was very ill, but he pulled through.','intr.'],
          ['put across','communicate effectively','She put her ideas across very clearly.','sep.'],
          ['put away','store in the correct place','Put your toys away.','sep.'],
          ['put back','return to original place; postpone','Put the book back on the shelf. / The meeting was put back to Tuesday.','sep.'],
          ['put down','place on a surface; suppress; write down; insult (sb)','Put down your bags. / He always puts me down in public.','sep.'],
          ['put off','postpone; discourage; distract','We put off the meeting till next week. / Don\'t be put off by the price.','sep.'],
          ['put on','wear; gain weight; pretend; start playing','Put on your coat. / She\'s put on weight. / He put on a brave face.','sep.'],
          ['put out','extinguish; inconvenience; publish','Put out the fire. / Don\'t put yourself out for me.','sep.'],
          ['put through','connect by phone; make sb suffer','Can you put me through to the manager?','sep.'],
          ['put up','accommodate; erect; tolerate (put up with)','Can you put me up for the night? / They put up a tent.','sep.'],
          ['put up with','tolerate; endure','I can\'t put up with this noise anymore.','insep.'],
        ],
      })}

      ${renderSubhead('Phrasal Verbs R–Z')}
      ${renderTable({
        headers: ['Phrasal Verb', 'Meaning', 'Example', 'Type'],
        rows: [
          ['ring back','return a phone call','I\'ll ring you back in an hour.','sep.'],
          ['ring up','phone someone','Ring me up when you arrive.','sep.'],
          ['rule out','exclude a possibility','We can\'t rule out the possibility of rain.','sep.'],
          ['run away','escape; flee','She ran away from home at 16.','intr.'],
          ['run into','meet by chance; collide with','I ran into my old teacher at the shops.','insep.'],
          ['run out of','have no more of','We\'ve run out of milk. / I\'ve run out of ideas.','insep.'],
          ['run over','hit with a vehicle; review quickly','He was nearly run over by a bus. / Let\'s run over the main points.','sep./insep.'],
          ['set off','start a journey; trigger an alarm','We set off early in the morning. / The smoke set off the alarm.','intr./sep.'],
          ['set out','begin a journey; explain/arrange','We set out at dawn. / She set out her ideas clearly.','intr./sep.'],
          ['set up','establish; arrange; prepare','She set up her own company. / Set up a meeting for Tuesday.','sep.'],
          ['settle down','become calm; start living a stable life','Settle down, everyone! / He finally settled down and got married.','intr.'],
          ['show off','boast; display proudly','Stop showing off! / She loves showing off her new car.','intr./sep.'],
          ['show up','arrive; make visible','He didn\'t show up for the meeting. / The stain shows up clearly.','intr./sep.'],
          ['sort out','resolve; organise; punish (informal)','I\'ll sort out the problem. / He sorted out his files.','sep.'],
          ['speak out','express opinions publicly','She spoke out against the decision.','intr.'],
          ['speak up','speak louder; express opinion','Speak up — I can\'t hear you!','intr.'],
          ['split up','separate; end a relationship','They split up after five years.','intr.'],
          ['stand for','represent; tolerate','USA stands for United States of America. / I won\'t stand for this behaviour.','insep.'],
          ['stand out','be very noticeable','She really stands out in a crowd.','intr.'],
          ['stand up for','defend; support','Stand up for what you believe in.','insep.'],
          ['stay in','remain at home','I\'m staying in tonight.','intr.'],
          ['step down','resign from a position','She stepped down as CEO.','intr.'],
          ['stick to','remain faithful to (a plan, promise, diet)','Stick to your budget.','insep.'],
          ['stick up for','defend / support (informal)','Thanks for sticking up for me.','insep.'],
          ['take after','resemble a family member','She takes after her mother.','insep.'],
          ['take back','return; retract a statement','Take this back to the shop. / I take back what I said.','sep.'],
          ['take in','understand/absorb; deceive; provide accommodation','There was too much to take in. / He was taken in by her story.','sep.'],
          ['take off','(plane) leave the ground; remove clothing; succeed suddenly','The plane took off at 9. / Take off your shoes. / The new product really took off.','intr./sep.'],
          ['take on','employ; accept (a challenge); take responsibility','The company took on 50 new staff. / I took on too much work.','sep.'],
          ['take out','remove; invite on a date; extract','Take out the rubbish. / He took her out for dinner.','sep.'],
          ['take over','gain control of; do sb\'s job','A rival company took over the firm. / Can you take over while I\'m away?','sep./intr.'],
          ['take up','begin (hobby/activity); fill (space/time); accept (offer)','She took up yoga. / Moving boxes took up all the space.','sep.'],
          ['think over','consider carefully','Let me think it over.','sep.'],
          ['throw away / throw out','discard; waste','Don\'t throw away that receipt.','sep.'],
          ['try on','test clothing','Can I try on this jacket?','sep.'],
          ['try out','test / experiment with','Try out the new software.','sep.'],
          ['turn down','refuse/reject; reduce volume/heat','She turned down the job offer. / Turn down the music!','sep.'],
          ['turn off','switch off; cause to lose interest','Turn off the lights. / That behaviour really turns me off.','sep.'],
          ['turn on','switch on; attack suddenly; cause excitement','Turn on the kettle. / The crowd turned on him.','sep./insep.'],
          ['turn out','result; be revealed; (crowd) gather; switch off','How did it turn out? / Turn out the light.','intr./sep.'],
          ['turn up','arrive; increase volume/heat; (lost item) be found','He turned up two hours late. / Turn up the volume!','intr./sep.'],
          ['wake up','stop sleeping; make sb alert','Wake up! / I need to wake up to the reality.','intr./sep.'],
          ['wear off','gradually disappear (effects, feelings)','The pain is wearing off. / The novelty wore off.','intr.'],
          ['wear out','exhaust; become damaged through use','The children wore me out. / My shoes have worn out.','sep./intr.'],
          ['wind up','end up (in a place/situation); close a business; annoy (informal)','He wound up in prison. / She wound up the meeting.','intr./sep.'],
          ['work out','exercise; find a solution; calculate; develop well','I work out every morning. / Work out the answer. / Things will work out.','intr./sep.'],
          ['write down','make a written note of','Write down the address.','sep.'],
        ],
      })}
    `;
  }

  // ═══════════════════════════════════════════════════════════
  // PART 5 — NOUNS · ARTICLES · PRONOUNS · RELATIVE CLAUSES · ADJECTIVES
  // Paste this block directly after _phrasalVerbs() ends.
  // ═══════════════════════════════════════════════════════════

  _nouns() {
    return `
      <p class="lz-prose">Nouns name people, places, things, and ideas. Understanding countability,
      plurals, and the possessive is essential for accurate English.</p>

      ${renderSubhead('Countable vs Uncountable Nouns')}
      ${renderTable({
        headers: ['Feature', 'Countable Nouns', 'Uncountable Nouns'],
        rows: [
          ['Definition','Can be counted; have singular and plural forms','Cannot be counted; only one form (no plural)'],
          ['With a/an','✅ a book, an apple','❌ a water, a homework'],
          ['With numbers','✅ three cats, two ideas','❌ three milks, two advices'],
          ['Plural form','✅ books, cars, ideas','❌ informations, advices, furnitures'],
          ['With much/many','many books, many people','much water, much information'],
          ['With few/little','few friends (= not many)','little time (= not much)'],
          ['Verb agreement','plural → plural verb: "The cars are…"','always singular verb: "The water is…"'],
        ],
      })}

      <h3 class="lz-h3">Common Uncountable Nouns (Frequently Confused)</h3>
      ${renderTable({
        headers: ['Category', 'Examples'],
        rows: [
          ['Liquids and gases','water, milk, coffee, tea, oil, juice, beer, wine, air, oxygen'],
          ['Materials and substances','wood, paper, glass, plastic, gold, silver, iron, cotton, silk'],
          ['Food (in general)','bread, rice, pasta, meat, cheese, butter, sugar, salt, flour'],
          ['Abstract concepts','love, happiness, freedom, peace, knowledge, intelligence, beauty, courage, luck'],
          ['Information and ideas','advice, information, news, evidence, feedback, research, data'],
          ['Activities and subjects','homework, work, travel, traffic, music, fun, sport (in general)'],
          ['Weather phenomena','weather, rain, snow, fog, sunshine, thunder, lightning'],
          ['Academic subjects','mathematics, physics, chemistry, history, English, economics'],
          ['Other commonly confused','accommodation, baggage/luggage, equipment, furniture, jewellery, money, permission, progress, rubbish, scenery, software, transport'],
        ],
      })}

      ${renderInfobox({ type: 'danger', icon: 'fas fa-times-circle', title: 'Most Common Uncountable Mistakes', body:
        '❌ I need <em>an advice</em>. → ✅ I need <strong>some advice</strong>. / a piece of advice.<br>' +
        '❌ We had <em>a good weather</em>. → ✅ We had <strong>good weather</strong>.<br>' +
        '❌ Can you give me <em>informations</em>? → ✅ Can you give me some <strong>information</strong>?<br>' +
        '❌ I have many <em>homeworks</em>. → ✅ I have a lot of <strong>homework</strong>.<br>' +
        '❌ The <em>furnitures</em> are expensive. → ✅ The <strong>furniture</strong> is expensive.<br>' +
        '❌ What are the <em>news</em>? → ✅ What is the <strong>news</strong>? / What\'s in the news?<br>' +
        '❌ She gave me <em>a feedback</em>. → ✅ She gave me some <strong>feedback</strong>.'
      })}

      <h3 class="lz-h3">Making Uncountable Nouns Countable</h3>
      <p class="lz-prose">Use a container, unit of measurement, or partitive expression:</p>
      ${renderTable({
        headers: ['Uncountable', 'Countable Expression', 'Other expressions'],
        rows: [
          ['water','a glass of water / two glasses of water','a bottle of water, a drop of water'],
          ['coffee','a cup of coffee / two cups of coffee','a mug of coffee, a shot of espresso'],
          ['bread','a slice of bread / two slices of bread','a loaf of bread, a piece of bread'],
          ['advice','a piece of advice / two pieces of advice',''],
          ['information','a piece of information / two pieces of information',''],
          ['news','a piece of news',''],
          ['paper (material)','a sheet of paper / two sheets of paper','a piece of paper'],
          ['chocolate','a bar of chocolate','a piece of chocolate'],
          ['furniture','a piece of furniture','an item of furniture'],
          ['luggage/baggage','a piece of luggage / two pieces of luggage','a bag, a suitcase'],
          ['work (= task)','a piece of work','a task, an assignment'],
          ['research','a piece of research','a study'],
        ],
      })}

      ${renderSubhead('Quantifiers — Full Reference')}
      ${renderTable({
        headers: ['Quantifier', 'With Countable Plural', 'With Uncountable', 'Notes'],
        rows: [
          ['many','✅ many books, many people','❌','How many books do you have?'],
          ['much','❌','✅ much water, much time','How much water is there? (mainly questions/negatives)'],
          ['a few','✅ a few friends (= some, positive)','❌','I have a few friends. (= not many, but some — positive)'],
          ['few','✅ few friends (= not many, negative)','❌','"Few people understand this." (= not enough — negative connotation)'],
          ['a little','❌','✅ a little time (= some, positive)','I have a little time. (= not much, but some — positive)'],
          ['little','❌','✅ little time (= not much, negative)','"There is little hope." (= not enough — negative connotation)'],
          ['several','✅ several times','❌','Means "more than two but not very many"'],
          ['a number of','✅ a number of problems','❌','Formal equivalent of "some/several"'],
          ['a great deal of','❌','✅ a great deal of money','Formal; formal alternative to "a lot of"'],
          ['some','✅ some books','✅ some water','Positive statements and requests: "Some milk, please."'],
          ['any','✅ any books','✅ any water','Questions, negatives, conditionals: "Do you have any milk?"'],
          ['a lot of / lots of','✅ a lot of books','✅ a lot of water','Informal; both contexts; neutral or positive'],
          ['plenty of','✅ plenty of options','✅ plenty of time','Suggests more than enough'],
          ['enough','✅ enough chairs','✅ enough water','Sufficient quantity'],
          ['no','✅ no problems','✅ no water','Means "zero of" — stronger than "not any"'],
          ['all','✅ all students','✅ all water','Refers to the totality'],
          ['most','✅ most people','✅ most of the water','The majority'],
          ['each / every','✅ each student, every day','❌','Singular verb; "each" focuses on individuals, "every" on the whole group'],
        ],
      })}

      ${renderSubhead('Plural Forms')}
      ${renderTable({
        headers: ['Rule', 'Formation', 'Examples'],
        rows: [
          ['Most nouns','Add -s','book→books · cat→cats · table→tables · day→days'],
          ['Ending in -s, -ss, -sh, -ch, -x, -z','Add -es','bus→buses · dish→dishes · watch→watches · box→boxes · buzz→buzzes'],
          ['Ending in consonant + y','Change y → ies','baby→babies · city→cities · story→stories · carry→carries'],
          ['Ending in vowel + y','Add -s','boy→boys · key→keys · day→days · monkey→monkeys'],
          ['Ending in -f or -fe','Change f/fe → ves','knife→knives · leaf→leaves · wife→wives · half→halves · thief→thieves · shelf→shelves · wolf→wolves'],
          ['Exceptions (-f words)','Add -s','roof→roofs · chief→chiefs · belief→beliefs · cliff→cliffs · proof→proofs'],
          ['Ending in -o (no rule — varies)','Add -s or -es','photo→photos · piano→pianos · radio→radios / potato→potatoes · tomato→tomatoes · hero→heroes'],
        ],
      })}

      <h3 class="lz-h3">Irregular Plurals</h3>
      ${renderTable({
        headers: ['Singular', 'Plural', 'Singular', 'Plural'],
        rows: [
          ['man','men','woman','women'],
          ['child','children','person','people'],
          ['tooth','teeth','foot','feet'],
          ['mouse','mice','goose','geese'],
          ['ox','oxen','louse','lice'],
        ],
      })}

      <h3 class="lz-h3">Same Form Singular and Plural</h3>
      ${renderTable({
        headers: ['Category', 'Examples'],
        rows: [
          ['Animals','sheep, fish, deer, salmon, trout, cod, bison, moose, swine'],
          ['Nationalities ending in -ese or -ss','Chinese, Japanese, Portuguese, Swiss'],
          ['Others','aircraft, spacecraft, series, species, means, crossroads'],
        ],
      })}

      <h3 class="lz-h3">Latin and Greek Plurals</h3>
      ${renderTable({
        headers: ['Singular', 'Plural', 'Field'],
        rows: [
          ['analysis','analyses','science/academic'],
          ['axis','axes','maths/science'],
          ['basis','bases','general'],
          ['crisis','crises','general'],
          ['diagnosis','diagnoses','medicine'],
          ['hypothesis','hypotheses','science'],
          ['oasis','oases','geography'],
          ['parenthesis','parentheses','grammar'],
          ['thesis','theses','academic'],
          ['datum','data','science (note: "data" now often treated as uncountable)'],
          ['medium','media','communication'],
          ['memorandum','memoranda / memorandums','business'],
          ['phenomenon','phenomena','science'],
          ['criterion','criteria','general'],
          ['curriculum','curricula / curriculums','education'],
          ['stimulus','stimuli','science'],
          ['bacterium','bacteria','biology'],
          ['focus','foci / focuses','general'],
          ['index','indices / indexes','maths / books'],
          ['formula','formulae / formulas','science/maths'],
        ],
      })}

      ${renderSubhead('Possessive Nouns (\'s and of)')}
      ${renderTable({
        headers: ['Rule', 'Formation', 'Examples'],
        rows: [
          ['Singular noun','Add \'s','the girl\'s book · Tom\'s car · my sister\'s friend · the dog\'s tail'],
          ['Plural noun ending in -s','Add \' only (apostrophe after s)','the girls\' books · my parents\' house · the students\' work'],
          ['Irregular plural (not ending in -s)','Add \'s','the children\'s toys · the men\'s room · the women\'s team'],
          ['Names ending in -s','Add \'s (preferred) or \' only','James\'s book (preferred) or James\' book · Charles\'s reign'],
          ['Compound nouns','Add \'s to the last word','my mother-in-law\'s advice · the editor-in-chief\'s decision'],
          ['Two owners (joint possession)','Add \'s to the last name only','Tom and Jane\'s house (= they share it)'],
          ['Two owners (separate possession)','Add \'s to both names','Tom\'s and Jane\'s cars (= they each have their own)'],
        ],
      })}

      ${renderInfobox({ type: 'blue', icon: 'fas fa-lightbulb', title: 'Possessive \'s vs of — When to Use Which', body:
        '<strong>Use \'s</strong> for: people, animals, organisations, time expressions, countries<br>' +
        '"John\'s car · the dog\'s lead · the company\'s profits · yesterday\'s news · England\'s history"<br><br>' +
        '<strong>Use of</strong> for: things and objects (especially when the "owner" is a thing)<br>' +
        '"the door of the car (NOT the car\'s door — although this is increasingly accepted) · the top of the building · the end of the road · the capital of France"<br><br>' +
        '<strong>Either is fine</strong> for: organisations and places often go with both:<br>' +
        '"the team\'s performance" = "the performance of the team"'
      })}

      ${renderSubhead('Compound Nouns')}
      ${renderTable({
        headers: ['Type', 'Examples', 'Plural Rule'],
        rows: [
          ['Written as one word','bedroom, notebook, toothbrush, football, blackbird, sunflower','Add -s to the end: bedrooms, notebooks'],
          ['Written as two words','bus stop, post office, credit card, full moon, ice cream','Add -s to the key word: bus stops, post offices'],
          ['Hyphenated','mother-in-law, passer-by, grown-up, runner-up, check-in','Add -s to the main noun: mothers-in-law, passers-by, grown-ups, runners-up'],
        ],
      })}
    `;
  }

  _articles() {
    return `
      <p class="lz-prose">English has three article types: the <strong>indefinite articles a/an</strong>
      (used for non-specific or first mention), the <strong>definite article the</strong>
      (used for specific or known reference), and the <strong>zero article</strong> (no article at all).</p>

      ${renderSubhead('A vs An — The Sound Rule')}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-volume-up', title: 'The Rule is About SOUND, Not Spelling', body:
        'Use <strong>a</strong> before words beginning with a <em>consonant sound</em>:<br>' +
        'a book · a car · a university (/juːnɪˈvɜːsɪti/ — starts with /j/ sound) · a European country · a one-way street (/wʌn/ — starts with /w/)<br><br>' +
        'Use <strong>an</strong> before words beginning with a <em>vowel sound</em>:<br>' +
        'an apple · an egg · an hour (/aʊər/ — silent h) · an honest man · an umbrella · an MP (= em-pee) · an X-ray<br><br>' +
        'Remember: an <strong>honest</strong> person ✅ (silent h) · an <strong>heir</strong> ✅ (silent h) · a <strong>historical</strong> event ✅ (/h/ is pronounced)'
      })}

      ${renderSubhead('When to Use A / An')}
      ${renderTable({
        headers: ['Use', 'Example'],
        rows: [
          ['First mention of a singular countable noun','I saw a dog in the park.'],
          ['When the listener doesn\'t know which specific one you mean','She\'s reading a book. (just some book)'],
          ['Meaning "one of many" — classifying','She\'s a teacher. / He\'s an engineer. / London is a capital city.'],
          ['Meaning "one" (with numbers)','I need a pen. / Could I have a glass of water?'],
          ['Expressing rate or frequency','£50 a day / three times a week / 80 km/h / twice a month'],
          ['In exclamations with "what"','What a beautiful day! / What an interesting idea!'],
        ],
      })}

      ${renderSubhead('When to Use The')}
      ${renderTable({
        headers: ['Use', 'Example'],
        rows: [
          ['Second mention — the listener now knows which one','I saw a dog. The dog was brown.'],
          ['Unique things — there is only one','the sun · the moon · the earth · the sky · the internet · the universe'],
          ['Something obvious from context','Close the door. (= the door of this room) / Pass the salt.'],
          ['When a noun is followed by a defining phrase/clause','The man in the black coat / the book that I lent you'],
          ['Superlatives','the best · the tallest · the most expensive · the worst'],
          ['Musical instruments','She plays the piano. / He studied the violin.'],
          ['With "same"','We go to the same school.'],
          ['Ordinal numbers','the first · the second · the last · the next'],
          ['Decades','the sixties · the 1990s · the 2000s'],
          ['Nationalities used as a group','the British · the French · the Chinese · the Dutch'],
          ['Adjectives used as nouns (groups of people)','the rich · the poor · the elderly · the young · the homeless'],
          ['Newspapers and magazines','the Guardian · the Times · the Economist'],
          ['Landmarks, buildings, monuments','the Eiffel Tower · the White House · the Taj Mahal · the Louvre'],
          ['Hotels, theatres, cinemas','the Hilton · the Odeon · the Globe Theatre'],
        ],
      })}

      <h3 class="lz-h3">The with Geographical Names</h3>
      ${renderTable({
        headers: ['Use "the"', 'Do NOT use "the"'],
        rows: [
          ['Oceans: the Atlantic Ocean, the Pacific','Continents: Europe, Asia, Africa, Australia'],
          ['Seas: the Mediterranean, the North Sea','Individual mountains: Mount Everest, Ben Nevis'],
          ['Rivers: the Thames, the Nile, the Amazon','Individual lakes: Lake Geneva, Lake Victoria'],
          ['Mountain ranges: the Alps, the Himalayas, the Rockies','Most countries: Germany, France, Japan, Brazil'],
          ['Deserts: the Sahara, the Gobi','Cities: London, Paris, New York, Tokyo'],
          ['Island groups: the Canary Islands, the Philippines','Streets and roads: Oxford Street, Fifth Avenue'],
          ['Countries with "Republic/Kingdom/States/Union": the USA, the UK, the Czech Republic, the UAE','Squares and parks: Trafalgar Square, Hyde Park'],
          ['Regions: the Middle East, the Far East, the Midlands','Languages: English, French, Spanish'],
          ['Channels/Straits: the English Channel, the Strait of Gibraltar','Academic subjects: history, mathematics'],
        ],
      })}

      ${renderSubhead('Zero Article (No Article)')}
      ${renderTable({
        headers: ['Use NO article', 'Example'],
        rows: [
          ['Plural nouns used in a general sense','Books are expensive. / Cats are independent animals.'],
          ['Uncountable nouns used in a general sense','Water is essential for life. / I love music. / Freedom matters.'],
          ['Names of people and animals','John is my friend. / Have you met Maria? / My cat\'s name is Felix.'],
          ['Most countries, cities, streets, individual mountains, lakes','Germany is in Europe. / I live in London. / Oxford Street / Lake Geneva'],
          ['Meals (general reference)','I have breakfast at 7. / Let\'s have lunch. / What\'s for dinner?'],
          ['Languages','I speak English and German. / She\'s studying French.'],
          ['Sports and games','I play football. / She loves tennis. / He plays chess.'],
          ['Academic subjects','I study mathematics. / History is my favourite subject.'],
          ['Titles with proper names','President Biden · Queen Elizabeth · Doctor Smith · Professor Jones'],
          ['After possessives','my book (NOT the my book) · her car · their house'],
          ['Transport (by + no article)','by car · by bus · by train · by plane · by bike'],
          ['Places used for primary purpose','go to school (as student) · go to church (to worship) · go to hospital (as patient, BE) · go to bed · go to work · go to prison'],
        ],
      })}

      ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'The vs Zero Article — Place Names', body:
        '"go to <strong>school</strong>" (as a student — primary purpose) vs "go to <strong>the school</strong>" (visiting as a parent/visitor — not the primary use)<br>' +
        '"go to <strong>hospital</strong>" (BE — as a patient) vs "go to <strong>the hospital</strong>" (to visit someone or in American English)<br>' +
        '"go to <strong>church</strong>" (to worship) vs "go to <strong>the church</strong>" (to see the building as a tourist)<br>' +
        '"go to <strong>prison</strong>" (as a prisoner) vs "go to <strong>the prison</strong>" (to visit)'
      })}

      ${renderSubhead('Articles Summary Table')}
      ${renderTable({
        headers: ['Article', 'Core use', 'With countable singular', 'With countable plural', 'With uncountable'],
        rows: [
          ['a / an','Non-specific; first mention; one of many','✅ a book','❌','❌'],
          ['the','Specific; known; unique; second mention; superlatives','✅ the book','✅ the books','✅ the water'],
          ['no article (zero)','General meaning; names; languages; sports; meals','❌','✅ books (general)','✅ water (general)'],
        ],
      })}
    `;
  }

  _pronouns() {
    return `
      <p class="lz-prose">Pronouns replace nouns to avoid repetition. There are several distinct types,
      each with specific forms and uses.</p>

      ${renderSubhead('Personal Pronouns — Full Table')}
      ${renderTable({
        headers: ['Person', 'Subject', 'Object', 'Possessive Adj.', 'Possessive Pron.', 'Reflexive'],
        rows: [
          ['1st singular','I','me','my','mine','myself'],
          ['2nd singular','you','you','your','yours','yourself'],
          ['3rd singular (m)','he','him','his','his','himself'],
          ['3rd singular (f)','she','her','her','hers','herself'],
          ['3rd singular (neutral)','it','it','its','—','itself'],
          ['1st plural','we','us','our','ours','ourselves'],
          ['2nd plural','you','you','your','yours','yourselves'],
          ['3rd plural','they','them','their','theirs','themselves'],
        ],
      })}

      <h3 class="lz-h3">Uses of Each Type</h3>
      ${renderTable({
        headers: ['Type', 'Use', 'Examples'],
        rows: [
          ['Subject pronouns','As the subject (performs the action)','I work here. / She is my teacher. / They arrived late.'],
          ['Object pronouns','As the object (receives the action); after prepositions','Call me. / I saw her. / He spoke to us. / This is for them.'],
          ['Possessive adjectives','Before a noun — show ownership (attribute)','My book is on the table. / Her car is blue. / Their house is big.'],
          ['Possessive pronouns','Stand alone — no noun follows (replace noun + possessive adj)','This book is mine. / The blue car is hers. / The big house is theirs.'],
          ['Reflexive pronouns','Subject = Object; emphasis; "by + reflexive" (= alone)','I hurt myself. / She did it herself. / He lives by himself.'],
        ],
      })}

      ${renderInfobox({ type: 'danger', icon: 'fas fa-times-circle', title: 'Common Personal Pronoun Mistakes', body:
        '❌ This book is <em>my</em>. → ✅ This book is <strong>mine</strong>. (possessive pronoun stands alone)<br>' +
        '❌ <em>Me and John</em> went to the cinema. → ✅ <strong>John and I</strong> went to the cinema. (subject pronoun needed; polite to put yourself last)<br>' +
        '❌ Between you and <em>I</em>. → ✅ Between you and <strong>me</strong>. (after prepositions, use object pronoun)<br>' +
        '❌ <em>Its</em> raining. → ✅ <strong>It\'s</strong> raining. (it\'s = it is; its = possessive)<br>' +
        '❌ The dog wagged <em>it\'s</em> tail. → ✅ The dog wagged <strong>its</strong> tail. (possessive — no apostrophe)'
      })}

      ${renderSubhead('Reflexive Pronouns — Detailed Uses')}
      ${renderTable({
        headers: ['Use', 'Example', 'Notes'],
        rows: [
          ['Subject = Object (the person acts on themselves)','I cut myself while cooking. / She looked at herself in the mirror. / They enjoyed themselves.','Required when subject and object refer to the same person'],
          ['Emphasis (= personally; without help)','I made this cake myself. / The director himself attended the meeting. / Did you really do that yourself?','Can be removed without changing basic meaning; adds emphasis'],
          ['By + reflexive (= alone; without help)','I live by myself. / She went to the cinema by herself. / He fixed it by himself.','= alone, without help from others'],
          ['Fixed expressions','Help yourself! / Behave yourself! / Make yourself at home. / Don\'t kid yourself. / Pull yourself together.','Idiomatic — must be memorised'],
        ],
      })}

      ${renderSubhead('Demonstrative Pronouns')}
      ${renderTable({
        headers: ['', 'Singular', 'Plural'],
        rows: [
          ['Near (here, now)','<strong>this</strong> — This is my book.','<strong>these</strong> — These are my books.'],
          ['Far (there, then)','<strong>that</strong> — That is your book.','<strong>those</strong> — Those are your books.'],
        ],
      })}
      <p class="lz-prose">Used as pronouns (stand alone) or as adjectives (before a noun):
      "This book is interesting." (adjective) · "This is interesting." (pronoun)</p>

      ${renderSubhead('Indefinite Pronouns')}
      ${renderTable({
        headers: ['', 'People', 'Things', 'Places'],
        rows: [
          ['Some- (positive, offers)','someone / somebody','something','somewhere'],
          ['Any- (questions, negatives)','anyone / anybody','anything','anywhere'],
          ['No- (negative meaning)','no one / nobody','nothing','nowhere'],
          ['Every- (total, all)','everyone / everybody','everything','everywhere'],
        ],
      })}
      ${renderTable({
        headers: ['Rule', 'Correct', 'Incorrect'],
        rows: [
          ['-one/-body/-thing pronouns take singular verbs','Everyone <strong>is</strong> ready.','❌ Everyone are ready.'],
          ['But in informal English, plural pronouns refer back to them','Everyone has <strong>their</strong> own opinion. ✅ (informal/gender neutral)','Everyone has <em>his or her</em> own opinion. (formal/old-fashioned)'],
          ['some- in positive statements and offers','I saw <strong>someone</strong>. / Would you like <strong>something</strong>?',''],
          ['any- in questions and negatives','Did you see <strong>anyone</strong>? / I didn\'t eat <strong>anything</strong>.',''],
          ['no- with positive verb (not + any-)','<strong>Nobody</strong> came. = I saw <strong>nobody</strong>.','❌ Nobody didn\'t come.'],
          ['every- emphasises "all"','<strong>Everything</strong> is ready. / I\'ve looked <strong>everywhere</strong>.',''],
        ],
      })}

      ${renderSubhead('Other Pronoun Types')}
      ${renderAccordion([
        {
          title: 'Relative Pronouns',
          content: `<p class="lz-prose">See the full Relative Clauses section for detailed rules and examples.</p>
          ${renderTable({
            headers: ['Pronoun', 'Refers to', 'Subject or Object', 'Can Omit?'],
            rows: [
              ['who','people','subject','No'],
              ['who / whom','people','object','Yes (informal who; formal whom)'],
              ['whose','people & things','possession (genitive)','No'],
              ['which','things & animals','subject or object','Yes (when object)'],
              ['that','people & things (informal)','subject or object','Yes (when object)'],
              ['where','places','—','In some contexts'],
              ['when','times','—','In some contexts'],
            ],
          })}`,
        },
        {
          title: 'Interrogative Pronouns',
          content: `${renderTable({
            headers: ['Pronoun', 'Use', 'Example'],
            rows: [
              ['who','asking about a person (subject)','Who called you?'],
              ['whom','asking about a person (object — formal)','Whom did you invite?'],
              ['whose','asking about possession','Whose bag is this?'],
              ['what','asking about things or information','What did you say? / What is your name?'],
              ['which','asking to choose from a known set','Which do you prefer — tea or coffee?'],
            ],
          })}`,
        },
        {
          title: 'Reciprocal Pronouns',
          content: `<p class="lz-prose">Used when two or more people perform an action on each other.</p>
          ${renderTable({
            headers: ['Pronoun', 'Use', 'Example'],
            rows: [
              ['each other','two people','Tom and Anna love each other.'],
              ['one another','three or more people (also used for two in formal English)','The team members support one another.'],
            ],
          })}`,
        },
      ])}
    `;
  }

  _relativeClauses() {
    return `
      <p class="lz-prose">Relative clauses give additional information about a noun (the antecedent).
      They are introduced by a relative pronoun (who, which, that, whose, where, when, why)
      or can sometimes be omitted entirely.</p>

      ${renderSubhead('Defining vs Non-Defining — The Fundamental Distinction')}
      ${renderTable({
        headers: ['Feature', 'Defining Relative Clause', 'Non-Defining Relative Clause'],
        rows: [
          ['Purpose','Identifies WHICH person/thing (essential info)','Adds EXTRA info about a specific person/thing (non-essential)'],
          ['Commas','No commas','Commas before and after the clause'],
          ['Can use "that"','✅ Yes (informal)','❌ No — must use who/which'],
          ['Can omit pronoun','✅ Yes, if pronoun is the object','❌ No — always include the pronoun'],
          ['Remove the clause…','The sentence loses its meaning / becomes unclear','The sentence still makes perfect sense'],
          ['Example','The woman <em>who lives next door</em> is a doctor. (which woman? — the one next door)','My sister, <em>who lives in Berlin</em>, is a doctor. (I have one sister — Berlin is extra info)'],
        ],
      })}

      ${renderInfobox({ type: 'warning', icon: 'fas fa-lightbulb', title: 'The Classic Test', body:
        '<strong>"My brother who lives in London is a teacher."</strong><br>' +
        '→ Defining: I have more than one brother. This clause tells you WHICH brother (the London one).<br><br>' +
        '<strong>"My brother, who lives in London, is a teacher."</strong><br>' +
        '→ Non-defining: I have only one brother. The London information is just extra detail.<br><br>' +
        'The comma changes the MEANING!'
      })}

      ${renderSubhead('Relative Pronouns — When to Use Which')}
      ${renderTable({
        headers: ['Pronoun', 'Refers to', 'As Subject', 'As Object', 'As Object — Can Omit?'],
        rows: [
          ['<strong>who</strong>','People only','The man <em>who called</em> me','The man <em>who</em> I met','✅ Yes'],
          ['<strong>whom</strong>','People only (formal)','—','The man <em>whom</em> I met (formal)','✅ Yes'],
          ['<strong>which</strong>','Things and animals','The book <em>which costs</em> £20','The book <em>which</em> I bought','✅ Yes'],
          ['<strong>that</strong>','People and things (informal/neutral)','The man <em>that called</em>','The book <em>that</em> I bought','✅ Yes'],
          ['<strong>whose</strong>','Possession (people & things)','The woman <em>whose car</em> was stolen','—','❌ No'],
          ['<strong>where</strong>','Places','The city <em>where</em> I was born','—','Sometimes omissible'],
          ['<strong>when</strong>','Times','The day <em>when</em> we met','—','Sometimes omissible'],
          ['<strong>why</strong>','Reasons','The reason <em>why</em> she left','—','✅ Often omitted'],
        ],
      })}

      ${renderSubhead('Defining Relative Clauses — Detailed Examples')}
      ${renderTable({
        headers: ['Type', 'Example', 'Notes'],
        rows: [
          ['People — subject','The woman <strong>who/that works</strong> in reception is very helpful.','who or that; cannot omit'],
          ['People — object','The man <strong>(who/whom/that) I met</strong> was very interesting.','pronoun can be omitted in informal English'],
          ['Things — subject','The book <strong>which/that costs</strong> £20 is sold out.','which or that; cannot omit'],
          ['Things — object','The book <strong>(which/that) I bought</strong> is fascinating.','pronoun can be omitted'],
          ['Possession — people','The student <strong>whose essay</strong> won the prize is in my class.','whose = of whom; never omit'],
          ['Possession — things','The car <strong>whose engine</strong> failed / <strong>the engine of which</strong> failed.','whose can refer to things; "of which" is more formal'],
          ['Place','The restaurant <strong>where we first met</strong> has closed down.','where = in which'],
          ['Time','I remember the summer <strong>when we went</strong> to Greece.','when = in which / at which'],
          ['Reason','That\'s the reason <strong>why she left</strong> / <strong>she left</strong>.','why often omitted'],
        ],
      })}

      ${renderSubhead('Non-Defining Relative Clauses — Detailed Examples')}
      ${renderTable({
        headers: ['Example', 'Notes'],
        rows: [
          ['My father, <strong>who is 65</strong>, still works full time.','Non-defining: I have one father'],
          ['The Eiffel Tower, <strong>which was built in 1889</strong>, attracts millions of visitors.','Non-defining: unique monument'],
          ['She spoke to the manager, <strong>who immediately apologised</strong>.','Adding info about what happened next'],
          ['Paris, <strong>where I was born</strong>, is a beautiful city.','Non-defining with where'],
          ['Last summer, <strong>when we went to Spain</strong>, was wonderful.','Non-defining with when'],
          ['He passed all his exams, <strong>which surprised everyone</strong>.','which refers to the whole previous clause'],
        ],
      })}

      ${renderSubhead('Prepositions in Relative Clauses')}
      ${renderTable({
        headers: ['Register', 'Structure', 'Examples'],
        rows: [
          ['Informal (everyday English)','Preposition at the END of the clause','The person <em>(who/that)</em> I spoke <strong>to</strong> was helpful. / The house <em>(which/that)</em> she grew up <strong>in</strong>.'],
          ['Formal (written English)','Preposition BEFORE the pronoun','The person <strong>to whom</strong> I spoke was helpful. / The house <strong>in which</strong> she grew up.'],
        ],
      })}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-pen-nib', title: 'Rules for Formal Preposition + Pronoun', body:
        'When the preposition comes BEFORE the relative pronoun:<br>' +
        '• Use <strong>whom</strong> (not who) for people: "the person <em>to whom</em> I spoke"<br>' +
        '• Use <strong>which</strong> (not that) for things: "the problem <em>about which</em> we argued"<br>' +
        '• The relative pronoun CANNOT be omitted.<br><br>' +
        'More examples: "the committee <em>on which</em> she serves" · "the matter <em>with which</em> we are concerned" · "the colleague <em>for whom</em> I worked"'
      })}

      ${renderSubhead('Special Relative Clause Patterns')}
      ${renderAccordion([
        {
          title: 'Which Referring to a Whole Clause',
          content: `<p class="lz-prose">In non-defining clauses, <strong>which</strong> can refer to the entire preceding idea (not just one noun).</p>
          ${renderTable({
            headers: ['Example', 'What "which" refers to'],
            rows: [
              ['He passed the exam, which surprised everyone.','the fact that he passed'],
              ['She arrived two hours late, which annoyed me greatly.','the fact that she arrived late'],
              ['They offered him the job, which was unexpected.','the whole situation'],
              ['He didn\'t show up, which meant we had to cancel.','his not showing up'],
            ],
          })}`,
        },
        {
          title: 'Quantifiers + of which / of whom',
          content: `<p class="lz-prose">Used in non-defining clauses with quantifiers.</p>
          ${renderTable({
            headers: ['Example', 'Note'],
            rows: [
              ['I have three brothers, <strong>all of whom</strong> live abroad.','all three brothers live abroad'],
              ['She wrote twenty novels, <strong>some of which</strong> became bestsellers.','some of the novels'],
              ['They invited fifty guests, <strong>none of whom</strong> I knew.','I knew zero of them'],
              ['He gave several reasons, <strong>two of which</strong> were convincing.','two out of several'],
              ['The company has ten branches, <strong>most of which</strong> are in Europe.','most of the ten branches'],
            ],
          })}`,
        },
        {
          title: 'Reduced Relative Clauses (Participle Clauses)',
          content: `<p class="lz-prose">Relative clauses can be shortened by removing the pronoun + "be" and using a participle.</p>
          ${renderTable({
            headers: ['Full Relative Clause', 'Reduced (Participle Clause)'],
            rows: [
              ['The man <em>who is standing</em> by the window is my boss.','The man <em>standing</em> by the window is my boss.'],
              ['The letter <em>which was written</em> in 1840 is priceless.','The letter <em>written</em> in 1840 is priceless.'],
              ['Anyone <em>who wants</em> to leave may do so now.','Anyone <em>wanting</em> to leave may do so now.'],
              ['The issues <em>that were discussed</em> were complex.','The issues <em>discussed</em> were complex.'],
            ],
          })}`,
        },
      ])}
    `;
  }

  _adjectives() {
    return `
      <p class="lz-prose">Adjectives describe or modify nouns. They can appear before the noun
      (attributive position) or after a linking verb (predicative position), and must be used in
      a specific order when several appear together.</p>

      ${renderSubhead('Position of Adjectives')}
      ${renderTable({
        headers: ['Position', 'Name', 'Examples'],
        rows: [
          ['Before the noun','Attributive','a <strong>beautiful</strong> house · an <strong>expensive</strong> car · three <strong>tall</strong> men'],
          ['After linking verbs (be, seem, look, feel, sound, taste, smell, appear, become, get)','Predicative','She is <strong>beautiful</strong>. / The car seems <strong>expensive</strong>. / The soup tastes <strong>great</strong>.'],
        ],
      })}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-info-circle', title: 'Adjectives Used Only Predicatively (after verbs)', body:
        'Some adjectives can ONLY follow a linking verb — never directly before a noun:<br>' +
        'afraid · alike · alive · alone · ashamed · asleep · awake · aware · content · glad · ill · ready · sorry · sure · well · worth<br><br>' +
        '✅ She is <strong>afraid</strong>. ❌ an <em>afraid</em> girl → ✅ a <strong>frightened</strong> girl<br>' +
        '✅ He is <strong>asleep</strong>. ❌ an <em>asleep</em> child → ✅ a <strong>sleeping</strong> child<br>' +
        '✅ She is <strong>ill</strong>. ❌ an <em>ill</em> woman → ✅ a <strong>sick</strong> woman (or: an <strong>ill</strong> woman — British English)'
      })}

      ${renderSubhead('Order of Multiple Adjectives')}
      <p class="lz-prose">When two or more adjectives appear before a noun, they follow a specific order.
      A helpful memory aid: <strong>O S A S C O M P</strong></p>
      ${renderTable({
        headers: ['Order', 'Category', 'Examples'],
        rows: [
          ['1 — O','Opinion / general judgement','beautiful, nice, ugly, horrible, lovely, clever, boring, expensive'],
          ['2 — S','Size','big, small, large, tiny, enormous, tall, short, long, wide'],
          ['3 — A','Age','old, young, new, ancient, modern, medieval, antique'],
          ['4 — S','Shape','round, square, rectangular, triangular, flat, narrow, oval'],
          ['5 — C','Colour','red, blue, green, black, white, golden, pale, dark'],
          ['6 — O','Origin / nationality','British, American, Chinese, Italian, German, African'],
          ['7 — M','Material','wooden, plastic, metal, cotton, leather, glass, stone, silk'],
          ['8 — P','Purpose / qualifier','sleeping (bag), running (shoes), cooking (pot), writing (desk)'],
        ],
      })}
      ${renderTable({
        headers: ['Correct Order', 'Example'],
        rows: [
          ['Opinion + Size','a lovely big garden'],
          ['Opinion + Size + Age','a beautiful big old house'],
          ['Opinion + Size + Age + Colour','a lovely small old blue vase'],
          ['Size + Colour + Origin','a large black German car'],
          ['Opinion + Size + Colour + Origin + Material','a lovely little round red Italian wooden table'],
          ['Size + Age + Colour + Origin + Material','a big old dark brown leather sofa'],
        ],
      })}

      ${renderSubhead('Comparative and Superlative — Formation')}
      ${renderTable({
        headers: ['Adjective Type', 'Rule', 'Comparative', 'Superlative', 'Examples'],
        rows: [
          ['1 syllable (consonant ending)','+ -er / the -est','taller','the tallest','tall, fast, old, cheap, dark'],
          ['1 syllable ending in -e','+ -r / the -st','nicer','the nicest','nice, large, brave, safe, wise'],
          ['1 syllable CVC (consonant-vowel-consonant)','double consonant + -er / -est','bigger','the biggest','big, hot, sad, thin, flat, wet'],
          ['2 syllables ending in -y','change y → ier / the iest','happier','the happiest','happy, easy, busy, funny, ugly, pretty'],
          ['2+ syllables (others)','more / the most','more careful','the most careful','careful, boring, famous, modern'],
          ['Irregular','must memorise','—','—','see table below'],
        ],
      })}

      <h3 class="lz-h3">Irregular Comparatives and Superlatives</h3>
      ${renderTable({
        headers: ['Adjective/Adverb', 'Comparative', 'Superlative', 'Notes'],
        rows: [
          ['good / well','better','the best',''],
          ['bad / badly / ill','worse','the worst',''],
          ['far','farther / further','the farthest / furthest','farther = physical distance; further = figurative ("no further questions")'],
          ['little (amount)','less','the least','for uncountable nouns: little money → less money'],
          ['much / many','more','the most',''],
          ['old','older / elder','the oldest / eldest','elder/eldest = only for family members: "my elder brother"'],
          ['late','later / latter','the latest / last','later = time; latter = the second of two things mentioned'],
          ['near','nearer','the nearest / next','nearest = closest in distance; next = following in sequence'],
        ],
      })}

      ${renderSubhead('Using Comparatives')}
      ${renderTable({
        headers: ['Pattern', 'Example', 'Notes'],
        rows: [
          ['comparative + than','She is taller <strong>than</strong> her brother. / This is more expensive <strong>than</strong> that.','Always "than" — never "that" or "as"'],
          ['much / far / a lot + comparative','She\'s <strong>much taller</strong> than me. / This is <strong>far more difficult</strong>.','Intensifies the comparison significantly'],
          ['a bit / a little / slightly + comparative','He\'s <strong>a bit older</strong> than she is. / It\'s <strong>slightly warmer</strong> today.','Small difference'],
          ['no + comparative','She\'s <strong>no taller</strong> than her sister. (= exactly the same height)','Means "not at all … -er"'],
          ['double comparative','It\'s getting <strong>hotter and hotter</strong>. / She became <strong>more and more confident</strong>.','Describes a progressive change'],
          ['the + comparative … the + comparative','<strong>The more</strong> you practise, <strong>the better</strong> you\'ll get.','Both parts = comparative; correlates two changes'],
        ],
      })}

      ${renderSubhead('Using Superlatives')}
      ${renderTable({
        headers: ['Pattern', 'Example', 'Notes'],
        rows: [
          ['the + superlative + in + place/group','She\'s <strong>the tallest</strong> in her class. / It\'s <strong>the most expensive</strong> restaurant in the city.','Use "in" for places, institutions, groups'],
          ['the + superlative + of + group/set','He\'s <strong>the best</strong> of all the candidates. / That was <strong>the worst</strong> of the three options.','Use "of" when referring to a set'],
          ['one of the + superlative + plural noun','It\'s <strong>one of the most beautiful</strong> places I\'ve ever visited.','Common pattern — noun must be plural'],
          ['by far + the + superlative','This is <strong>by far the most</strong> interesting book I\'ve read.','Emphasises that nothing else comes close'],
          ['ever + superlative','It was <strong>the most boring</strong> film I\'ve <strong>ever</strong> seen.','Common with present perfect or past simple'],
        ],
      })}

      ${renderSubhead('Equality Comparisons — as … as')}
      ${renderTable({
        headers: ['Structure', 'Meaning', 'Examples'],
        rows: [
          ['as + adjective/adverb + as','equal','She is <strong>as tall as</strong> her brother. / He runs <strong>as fast as</strong> me.'],
          ['not as/so + adjective + as','less than','This book is <strong>not as interesting as</strong> that one. (= less interesting)'],
          ['twice / three times + as + adjective + as','multiplied comparison','He is <strong>twice as old as</strong> his sister. / The room is <strong>three times as big as</strong> mine.'],
          ['half as + adjective + as','half the amount','She earns <strong>half as much as</strong> her colleague.'],
          ['just as … as','exactly equal','She is <strong>just as clever as</strong> him.'],
        ],
      })}

      ${renderSubhead('Adjectives Ending in -ed and -ing')}
      ${renderTable({
        headers: ['-ed (how a person feels)', '-ing (what causes the feeling)', 'Example pair'],
        rows: [
          ['bored','boring','I\'m bored. / The lecture was boring.'],
          ['interested','interesting','She\'s interested in science. / It\'s an interesting subject.'],
          ['excited','exciting','They were excited. / It was an exciting game.'],
          ['tired','tiring','I\'m tired. / The journey was tiring.'],
          ['amazed','amazing','We were amazed. / The view was amazing.'],
          ['confused','confusing','He\'s confused. / The instructions are confusing.'],
          ['frightened / scared','frightening / scary','She was frightened. / It was a frightening experience.'],
          ['shocked','shocking','I was shocked by the news. / The news was shocking.'],
          ['disappointed','disappointing','He felt disappointed. / The result was disappointing.'],
          ['embarrassed','embarrassing','She was embarrassed. / It was an embarrassing moment.'],
          ['exhausted','exhausting','I\'m exhausted. / It was an exhausting day.'],
          ['fascinated','fascinating','He\'s fascinated by history. / History is a fascinating subject.'],
          ['satisfied','satisfying','She\'s satisfied with the result. / It\'s a satisfying outcome.'],
          ['depressed','depressing','He\'s been feeling depressed. / The news was depressing.'],
          ['annoyed','annoying','I\'m annoyed. / His behaviour is annoying.'],
        ],
      })}

      ${renderSubhead('Adjective vs Adverb')}
      <p class="lz-prose">Adjectives modify nouns; adverbs modify verbs, adjectives, and other adverbs.
      Most adverbs are formed by adding -ly to the adjective.</p>
      ${renderTable({
        headers: ['Adjective', 'Adverb', 'Notes'],
        rows: [
          ['quick','quickly','She is a quick worker. / She works quickly.'],
          ['careful','carefully','Be careful! / Drive carefully.'],
          ['beautiful','beautifully','She has a beautiful voice. / She sings beautifully.'],
          ['good','well','He is a good student. / He studies well.'],
          ['fast','fast','He is a fast runner. / He runs fast.'],
          ['hard','hard','She is a hard worker. / She works hard.'],
          ['early','early','It was an early start. / We left early.'],
          ['late','late','I hate being late. / She arrived late.'],
          ['high','high / highly','It\'s a high price. / Prices have risen high. / highly recommended.'],
          ['near','near / nearly','a near miss. / She nearly fell.'],
        ],
      })}
      ${renderInfobox({ type: 'warning', icon: 'fas fa-exclamation-triangle', title: 'good vs well · bad vs badly', body:
        '"She speaks <strong>well</strong>." (adverb — describes how she speaks) ≠ "She speaks <strong>good</strong>." ❌<br>' +
        '"He plays <strong>badly</strong>." (adverb) ≠ "He plays <strong>bad</strong>." ❌<br><br>' +
        'Exception: After <strong>feel, look, seem, taste, smell, sound</strong> (linking verbs) use ADJECTIVE not adverb:<br>' +
        '"I feel <strong>good</strong>." ✅ (NOT "I feel well" — unless talking about health)<br>' +
        '"The food smells <strong>good</strong>." ✅ (NOT "the food smells goodly")<br>' +
        '"She looks <strong>tired</strong>." ✅ / "He seemed <strong>nervous</strong>." ✅'
      })}
    `;
  }

  // ═══════════════════════════════════════════════════════════
  // PART 6 — COLLOCATION · IDIOMS · PUNCTUATION · NUMBERS
  //          ABBREVIATIONS · PREFIXES/SUFFIXES · SAYINGS
  //          USAGE NOTES · _html() · init()
  // Paste this block directly after _adjectives() ends.
  // ═══════════════════════════════════════════════════════════

  _collocation() {
    return `
      <p class="lz-prose">Collocations are word combinations that sound natural to native speakers.
      They cannot always be predicted from the individual words — they must be learned as chunks.
      Using the right collocation makes your English sound fluent; the wrong one sounds unnatural
      even if the meaning is technically clear.</p>

      ${renderSubhead('Make vs Do — The Most Common Confusion')}
      ${renderTable({
        headers: ['make', 'do'],
        rows: [
          ['make a mistake','do homework / do the housework'],
          ['make a decision / make up your mind','do exercise / do sport'],
          ['make progress','do business / do a deal'],
          ['make a phone call','do research / do a study'],
          ['make a suggestion / make a proposal','do someone a favour'],
          ['make an effort','do the shopping / do the washing / do the cooking'],
          ['make a noise','do one\'s best'],
          ['make money / make a profit / make a loss','do damage / do harm'],
          ['make a plan','do well / do badly'],
          ['make an appointment','do a course / do a degree'],
          ['make a complaint','do the ironing / do the washing-up'],
          ['make a speech / make a statement','do an exam / do a test (British English)'],
          ['make a promise / make a deal','do justice to something'],
          ['make a difference','do the right thing'],
          ['make friends','do drugs (informal)'],
          ['make a reservation','do a job / do the job'],
          ['make a list','do time (= serve a prison sentence)'],
          ['make an exception','do your duty'],
        ],
      })}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-lightbulb', title: 'General Rule (not always reliable, but helpful)', body:
        '<strong>make</strong> — often involves creating, producing, or causing something: make a cake, make a film, make a mess, make noise<br>' +
        '<strong>do</strong> — often involves activities, tasks, work, or general actions: do your homework, do the cleaning, do a job<br>' +
        'When in doubt, ask yourself: is it creating something (make) or performing an activity (do)?'
      })}

      ${renderSubhead('Have Collocations')}
      ${renderTable({
        headers: ['have + noun (= experience / consume)', 'Example'],
        rows: [
          ['have breakfast / lunch / dinner / a meal','I usually have breakfast at 7.'],
          ['have a drink / have coffee / have a bite to eat','Let\'s have coffee after the meeting.'],
          ['have a shower / have a bath','I had a shower and went to bed.'],
          ['have a rest / have a break / have a nap','You look tired — have a rest.'],
          ['have a party / have a meeting / have a conference','She\'s having a birthday party.'],
          ['have a chat / have a conversation / have a talk','Can we have a quick chat?'],
          ['have a look (at something)','Have a look at this — what do you think?'],
          ['have an argument / have a fight / have a row','They had an argument over money.'],
          ['have a good / bad / great time','Did you have a good time?'],
          ['have trouble / have difficulty / have a problem (with)','She\'s having difficulty with the new software.'],
          ['have an operation / have treatment','He\'s having an operation next week.'],
          ['have an accident','She had an accident on the motorway.'],
          ['have fun','We had so much fun!'],
          ['have a baby','She\'s having a baby in March.'],
          ['have an idea / have a thought','I\'ve just had a great idea.'],
          ['have doubts / have reservations','I have serious doubts about this plan.'],
        ],
      })}

      ${renderSubhead('Take Collocations')}
      ${renderTable({
        headers: ['take + noun', 'Example'],
        rows: [
          ['take a photo / take a picture','Can you take a photo of us?'],
          ['take a break / take a rest','Let\'s take a break — we\'ve been working for hours.'],
          ['take a shower / take a bath (American English)','I\'ll take a shower before dinner.'],
          ['take a seat / take a place','Please take a seat.'],
          ['take time / take ages','This task will take a lot of time.'],
          ['take place','The ceremony takes place on Friday.'],
          ['take care (of)','Take care of yourself! / She takes care of her mother.'],
          ['take responsibility (for)','He refused to take responsibility.'],
          ['take an exam / take a test','She\'s taking her driving test tomorrow.'],
          ['take a decision (British English) / make a decision','We need to take a decision soon.'],
          ['take action','The government needs to take action.'],
          ['take advantage (of)','Don\'t take advantage of his kindness.'],
          ['take part (in) / take part','Everyone took part in the competition.'],
          ['take turns','We took turns driving.'],
          ['take notes','Always take notes during the lecture.'],
          ['take a risk','I\'m not willing to take that risk.'],
          ['take a step / take steps','We need to take steps to reduce costs.'],
          ['take offence','Please don\'t take offence — I didn\'t mean it.'],
        ],
      })}

      ${renderSubhead('Give Collocations')}
      ${renderTable({
        headers: ['give + noun', 'Example'],
        rows: [
          ['give advice / give guidance','She gave me some very useful advice.'],
          ['give a speech / give a talk / give a presentation','He gave an excellent speech at the conference.'],
          ['give a hand (= help) / give a round of applause','Can you give me a hand with this? / Let\'s give them a hand!'],
          ['give permission / give approval','Her parents gave permission for the trip.'],
          ['give a call / give a ring (British English)','Give me a call when you arrive.'],
          ['give a lift (British) / give a ride (American)','Could you give me a lift to the station?'],
          ['give birth to','She gave birth to twins.'],
          ['give evidence / give testimony','He gave evidence at the trial.'],
          ['give an example','Could you give me an example?'],
          ['give a warning','They gave us plenty of warning.'],
          ['give a description','She gave a detailed description of the suspect.'],
          ['give thought to / give consideration to','Please give this matter some serious thought.'],
          ['give way (to)','Give way at the roundabout. / She gave way to pressure.'],
          ['give up (= stop) — phrasal verb','She gave up smoking.'],
        ],
      })}

      ${renderSubhead('Strong Adjective + Noun Collocations')}
      <p class="lz-prose">These combinations are fixed — using a different adjective with the same meaning
      often sounds unnatural:</p>
      ${renderTable({
        headers: ['Adjective', 'Nouns it collocates with', 'Do NOT use'],
        rows: [
          ['strong','coffee · wind · accent · argument · feeling · evidence · influence · economy','powerful coffee ❌ · heavy wind ❌'],
          ['heavy','rain · traffic · smoker · drinker · industry · burden · fine · snow · casualties','strong rain ❌ · big traffic ❌'],
          ['high','price · speed · standard · quality · temperature · crime · risk · level · hopes','tall price ❌ · big temperature ❌'],
          ['deep','sleep · trouble · water · impression · feeling · regret · depression','strong sleep ❌'],
          ['sharp','pain · rise · fall · turn · criticism · contrast · mind · eye','strong pain ❌'],
          ['close','friend · relationship · connection · call · attention · examination','near friend ❌'],
          ['hard','work · worker · evidence · copy · time · life','difficult work ❌ (as a collocation)'],
          ['light','rain · traffic · sleeper · industry · meal','weak rain ❌'],
          ['great','success · difficulty · pleasure · importance · number · variety · deal','big success ❌ (informal only)'],
          ['long','term · run · shot · face · list · way','far term ❌'],
          ['short','term · supply · notice · cut · list · coming','small term ❌'],
          ['broad','minded · daylight · range · shoulders · accent','wide minded ❌'],
        ],
      })}

      ${renderSubhead('Adverb + Adjective Collocations (Intensifiers)')}
      ${renderTable({
        headers: ['Adverb', 'Common Adjectives', 'Examples'],
        rows: [
          ['absolutely','certain · sure · clear · right · wrong · necessary · essential · vital · fantastic · terrible · awful · brilliant · delicious · exhausted · furious · thrilled','I\'m absolutely certain. / The food was absolutely delicious.'],
          ['highly','likely · unlikely · recommended · qualified · skilled · competitive · controversial · effective · successful · intelligent','It\'s highly unlikely. / She is highly qualified.'],
          ['deeply','concerned · moved · troubled · grateful · disappointed · disturbing · offended · regrettable','We are deeply concerned. / I am deeply grateful.'],
          ['completely','different · wrong · unnecessary · overwhelmed · unaware · exhausted · satisfied · destroyed','That\'s completely wrong. / She was completely unaware.'],
          ['perfectly','normal · clear · happy · reasonable · understandable · capable · legal · acceptable','It\'s perfectly normal. / I\'m perfectly happy with this.'],
          ['utterly','ridiculous · exhausted · confused · devastated · useless · hopeless · lost · speechless','That\'s utterly ridiculous. / I was utterly confused.'],
          ['bitterly','disappointed · cold · complain · regret · oppose','I was bitterly disappointed. / It\'s bitterly cold.'],
          ['strongly','recommend · suggest · believe · oppose · support · disagree · influenced','I strongly recommend it. / She strongly disagrees.'],
          ['seriously','ill · injured · consider · concerned · affect · damage · wrong','He was seriously injured. / We should seriously consider this.'],
          ['widely','known · used · available · accepted · believed · regarded · recognised','It is widely known. / The product is widely available.'],
        ],
      })}

      ${renderSubhead('Verb + Preposition Collocations')}
      ${renderTable({
        headers: ['Verb + Preposition', 'Example', 'Verb + Preposition', 'Example'],
        rows: [
          ['apologise <strong>for</strong>','He apologised for being late.','suffer <strong>from</strong>','She suffers from migraines.'],
          ['apply <strong>for</strong>','She applied for the job.','complain <strong>about</strong>','He complained about the noise.'],
          ['arrive <strong>at</strong> (specific place)','We arrived at the hotel.','warn <strong>about / of</strong>','They warned us about the danger.'],
          ['arrive <strong>in</strong> (city/country)','We arrived in Berlin.','blame <strong>for</strong>','Don\'t blame me for this!'],
          ['believe <strong>in</strong>','I believe in second chances.','agree <strong>with</strong>','I agree with you completely.'],
          ['belong <strong>to</strong>','This bag belongs to me.','disagree <strong>with</strong>','She disagreed with his approach.'],
          ['care <strong>about</strong>','She really cares about the environment.','succeed <strong>in</strong>','He succeeded in passing the exam.'],
          ['consist <strong>of</strong>','The team consists of six people.','insist <strong>on</strong>','He insisted on paying the bill.'],
          ['depend <strong>on</strong>','It depends on the weather.','concentrate <strong>on</strong>','Please concentrate on the task.'],
          ['listen <strong>to</strong>','She listens to podcasts every day.','spend (money) <strong>on</strong>','Don\'t spend too much on it.'],
          ['look <strong>at</strong>','Look at this!','invest <strong>in</strong>','They invested in new technology.'],
          ['look <strong>for</strong>','I\'m looking for my keys.','participate <strong>in</strong>','Everyone participated in the discussion.'],
          ['look <strong>after</strong>','She looks after her grandparents.','result <strong>in</strong>','The accident resulted in three injuries.'],
          ['wait <strong>for</strong>','We\'re waiting for the bus.','lead <strong>to</strong>','Stress can lead to health problems.'],
          ['reply <strong>to</strong>','Did you reply to her email?','contribute <strong>to</strong>','She contributed to the project.'],
          ['respond <strong>to</strong>','He responded to my message.','deal <strong>with</strong>','How do you deal with stress?'],
        ],
      })}

      ${renderSubhead('Adjective + Preposition Collocations')}
      ${renderTable({
        headers: ['Adjective + Preposition', 'Example'],
        rows: [
          ['afraid / scared / frightened <strong>of</strong>','She\'s afraid of flying.'],
          ['angry <strong>about</strong> (a situation) / <strong>with</strong> (a person)','He\'s angry about the decision. / She\'s angry with me.'],
          ['aware / conscious <strong>of</strong>','Are you aware of the risks?'],
          ['capable / incapable <strong>of</strong>','She\'s capable of doing it.'],
          ['certain / sure <strong>of / about</strong>','I\'m not sure about this.'],
          ['clever / good / brilliant / terrible <strong>at</strong>','She\'s good at maths.'],
          ['different <strong>from</strong> (British) / <strong>than</strong> (American)','This is different from what I expected.'],
          ['disappointed <strong>with / in</strong> (person) / <strong>about / by</strong> (thing)','I\'m disappointed with the results.'],
          ['famous <strong>for</strong>','Paris is famous for its food.'],
          ['fond <strong>of</strong>','He\'s very fond of jazz.'],
          ['impressed <strong>by / with</strong>','I was really impressed by her speech.'],
          ['interested <strong>in</strong>','Are you interested in art?'],
          ['involved <strong>in</strong>','She\'s heavily involved in local politics.'],
          ['keen <strong>on</strong>','He\'s very keen on photography.'],
          ['pleased / satisfied / happy <strong>with / about</strong>','We\'re pleased with the outcome.'],
          ['polite / rude <strong>to</strong>','Always be polite to customers.'],
          ['proud <strong>of</strong>','She\'s proud of her achievements.'],
          ['related <strong>to</strong>','Is this problem related to the previous one?'],
          ['responsible <strong>for</strong>','Who is responsible for this mess?'],
          ['similar <strong>to</strong>','Your idea is similar to mine.'],
          ['surprised / shocked / amazed <strong>at / by</strong>','I was surprised at her answer.'],
          ['tired <strong>of</strong> (fed up) / <strong>from</strong> (= exhausted by)','I\'m tired of waiting. / He was tired from the journey.'],
          ['worried / concerned / anxious <strong>about</strong>','I\'m worried about the exam.'],
        ],
      })}
    `;
  }

  _idioms() {
    return `
      <p class="lz-prose">Idioms are expressions whose meaning cannot be deduced from the individual words.
      They are a vital part of natural English and appear frequently in texts, conversations, and
      Abitur reading comprehension tasks. Learn them as fixed phrases.</p>

      ${renderSubhead('Body Idioms')}
      ${renderTable({
        headers: ['Idiom', 'Meaning', 'Example'],
        rows: [
          ['keep an eye on','watch carefully / supervise','Can you keep an eye on my bag while I get a coffee?'],
          ['turn a blind eye (to)','deliberately ignore something wrong','The manager turned a blind eye to the time-keeping problems.'],
          ['give someone a hand','help someone','Could you give me a hand with these boxes?'],
          ['get out of hand','become uncontrollable','The situation got completely out of hand.'],
          ['break a leg','good luck (especially theatrical)','Break a leg in your audition tonight!'],
          ['pull someone\'s leg','joke with someone; tease','Relax — I\'m just pulling your leg!'],
          ['cost an arm and a leg','be extremely expensive','The repairs cost an arm and a leg.'],
          ['have a heart of gold','be very kind and generous','Despite her tough exterior, she has a heart of gold.'],
          ['get cold feet','become nervous and hesitant about something','He got cold feet the night before the wedding.'],
          ['put your foot in it','say something embarrassing or tactless by mistake','I really put my foot in it when I asked if she was pregnant.'],
          ['get off on the right / wrong foot','start well / badly','We got off on the wrong foot, but now we get on well.'],
          ['have two left feet','be a clumsy dancer','He\'s a terrible dancer — he has two left feet.'],
          ['keep your chin up','stay positive despite difficulties','I know it\'s hard, but keep your chin up.'],
          ['bite off more than you can chew','take on more than you can manage','I think I\'ve bitten off more than I can chew with this project.'],
          ['keep your fingers crossed','hope for good luck','Keep your fingers crossed for me — the results are today.'],
          ['be all ears','be listening eagerly and attentively','Go ahead — I\'m all ears.'],
          ['be on the tip of your tongue','almost remember something','His name is on the tip of my tongue — I\'ll remember it in a second.'],
          ['learn something by heart','memorise it completely','You need to learn these irregular verbs by heart.'],
          ['see eye to eye (with)','agree completely with someone','We don\'t always see eye to eye on politics.'],
          ['shoulder the blame / responsibility','accept responsibility','She shouldered the blame for the team\'s failure.'],
        ],
      })}

      ${renderSubhead('Animal Idioms')}
      ${renderTable({
        headers: ['Idiom', 'Meaning', 'Example'],
        rows: [
          ['let the cat out of the bag','accidentally reveal a secret','Who let the cat out of the bag about the surprise party?'],
          ['when pigs fly','never (expressing impossibility)','He\'ll clean his room when pigs fly!'],
          ['raining cats and dogs','raining very heavily','Don\'t go out — it\'s raining cats and dogs.'],
          ['kill two birds with one stone','accomplish two things with one action','I\'ll stop at the supermarket on the way to pick you up — kill two birds with one stone.'],
          ['a fish out of water','someone who feels uncomfortable in their environment','At the formal dinner, I felt like a fish out of water.'],
          ['hold your horses','wait; slow down; be patient','Hold your horses — let\'s think about this carefully first.'],
          ['the elephant in the room','an obvious problem that nobody wants to discuss','Nobody mentioned the budget cuts — it was the elephant in the room.'],
          ['let sleeping dogs lie','don\'t stir up old problems or troubles','Don\'t bring that argument up again — let sleeping dogs lie.'],
          ['straight from the horse\'s mouth','directly from the original source','I heard it straight from the horse\'s mouth — the CEO confirmed it himself.'],
          ['be in the doghouse','be in trouble with someone','He forgot their anniversary, so he\'s in the doghouse.'],
          ['the black sheep','the odd one out in a family/group','He was always the black sheep of the family.'],
          ['take the bull by the horns','deal with a difficult situation directly and boldly','Stop worrying and take the bull by the horns — just call them!'],
          ['wolf in sheep\'s clothing','someone who seems friendly but is actually dangerous/dishonest','Be careful — he\'s a wolf in sheep\'s clothing.'],
          ['a dark horse','someone with surprising or unknown abilities','She was a real dark horse — nobody expected her to win.'],
          ['beat a dead horse','waste time on something that\'s already resolved/hopeless','Arguing about it now is just beating a dead horse.'],
        ],
      })}

      ${renderSubhead('Time and Work Idioms')}
      ${renderTable({
        headers: ['Idiom', 'Meaning', 'Example'],
        rows: [
          ['once in a blue moon','very rarely','I only see my old school friends once in a blue moon.'],
          ['in the nick of time','at the last possible moment; just in time','We caught the train in the nick of time.'],
          ['call it a day','stop working for the day','We\'ve done enough — let\'s call it a day.'],
          ['around the clock','continuously; 24 hours a day','The rescue teams worked around the clock.'],
          ['in the long run','eventually; after a long period','It\'s difficult now, but it will pay off in the long run.'],
          ['at the drop of a hat','immediately; without hesitation','She\'d help anyone at the drop of a hat.'],
          ['from scratch','from the very beginning; with nothing prepared','We had to rebuild the business from scratch.'],
          ['get the ball rolling','start an activity or process','Who wants to get the ball rolling? / Let\'s get the ball rolling.'],
          ['go the extra mile','make a special extra effort beyond what is required','She always goes the extra mile for her students.'],
          ['burn the midnight oil','work late into the night','I\'ve been burning the midnight oil to finish this report.'],
          ['keep someone in the loop','keep someone informed about developments','Please keep me in the loop about any changes.'],
          ['on the back burner','given lower priority; temporarily set aside','We\'ve put that project on the back burner for now.'],
          ['touch base (with)','make brief contact; check in','I\'ll touch base with you later this week.'],
          ['bite the bullet','endure a painful or difficult situation; do something unpleasant','Just bite the bullet and go to the dentist.'],
          ['hit the ground running','start something energetically and without delay','She hit the ground running in her new role.'],
        ],
      })}

      ${renderSubhead('Money and Success Idioms')}
      ${renderTable({
        headers: ['Idiom', 'Meaning', 'Example'],
        rows: [
          ['a piece of cake','something very easy','The first part of the exam was a piece of cake.'],
          ['break the bank','cost too much money','A nice holiday doesn\'t have to break the bank.'],
          ['make ends meet','have just enough money to live','With two children and one salary, it\'s hard to make ends meet.'],
          ['pay through the nose','pay an excessively high price','I paid through the nose for those tickets.'],
          ['tighten your belt','reduce spending because money is short','With prices rising, we all need to tighten our belts.'],
          ['on a shoestring','with very little money','They set up the business on a shoestring.'],
          ['a golden opportunity','a very good chance that shouldn\'t be missed','This job offer is a golden opportunity — don\'t turn it down.'],
          ['hit the jackpot','have great success or good luck; win a lot','She really hit the jackpot with that investment.'],
          ['cut corners','do something badly to save money or time','Don\'t cut corners on safety — it\'s not worth the risk.'],
        ],
      })}

      ${renderSubhead('Communication and Knowledge Idioms')}
      ${renderTable({
        headers: ['Idiom', 'Meaning', 'Example'],
        rows: [
          ['hit the nail on the head','say or do exactly the right thing','You\'ve hit the nail on the head — that\'s exactly the problem.'],
          ['beat around the bush','avoid getting to the main point; talk vaguely','Stop beating around the bush and tell me what happened.'],
          ['the tip of the iceberg','a small visible part of a much bigger problem','These few complaints are just the tip of the iceberg.'],
          ['spill the beans','reveal secret information','Who spilled the beans about the redundancies?'],
          ['read between the lines','understand a hidden or implied meaning','If you read between the lines, it\'s clear she\'s unhappy.'],
          ['get straight to the point','say what you mean without preamble','Let\'s get straight to the point — are you interested or not?'],
          ['in a nutshell','briefly; summarised concisely','In a nutshell, the plan is to expand into new markets.'],
          ['not beat about the bush','speak directly','I won\'t beat about the bush — you didn\'t get the job.'],
          ['put your foot down','insist firmly; refuse to compromise','She finally put her foot down and said no.'],
          ['a blessing in disguise','something that seems bad but turns out to be good','Losing that job was a blessing in disguise — I found a much better one.'],
          ['take something with a pinch of salt','not fully believe something','Take what he says with a pinch of salt — he exaggerates.'],
          ['sit on the fence','avoid committing to either side','Stop sitting on the fence — which option do you prefer?'],
          ['know something inside out','know something extremely thoroughly','She knows the system inside out.'],
        ],
      })}

      ${renderSubhead('Weather and Nature Idioms')}
      ${renderTable({
        headers: ['Idiom', 'Meaning', 'Example'],
        rows: [
          ['under the weather','feeling slightly unwell','I\'m feeling a bit under the weather — I might be getting a cold.'],
          ['every cloud has a silver lining','every bad situation has a positive aspect','I know you\'re disappointed, but every cloud has a silver lining.'],
          ['come rain or shine','whatever the weather; no matter what happens','I\'ll be there, come rain or shine.'],
          ['steal someone\'s thunder','take attention or credit away from someone else','She stole his thunder by announcing her own news at his party.'],
          ['it\'s not rocket science','it\'s not complicated or difficult','Just follow the instructions — it\'s not rocket science!'],
          ['weather the storm','survive a difficult period','The company had a terrible year but managed to weather the storm.'],
          ['on thin ice','in a risky or dangerous situation','With those comments, you\'re on very thin ice.'],
          ['the calm before the storm','a quiet period before something difficult or chaotic','Everything seemed fine — it was the calm before the storm.'],
          ['a drop in the ocean','a very small amount compared to what is needed','Our donation was just a drop in the ocean compared to what\'s required.'],
        ],
      })}

      ${renderSubhead('General Idioms — Frequently Tested')}
      ${renderTable({
        headers: ['Idiom', 'Meaning', 'Example'],
        rows: [
          ['the last straw','the final problem that causes someone to lose patience','That rude comment was the last straw — I\'m leaving.'],
          ['it\'s a double-edged sword','something with both advantages and disadvantages','Social media is a double-edged sword — it connects but also isolates.'],
          ['a catch-22','an impossible situation where each solution creates another problem','It\'s a catch-22: you need experience to get a job, but you need a job to get experience.'],
          ['go back to square one','start again from the beginning after failing','The prototype failed — it\'s back to square one.'],
          ['burn your bridges','do something that destroys a relationship or opportunity permanently','Don\'t burn your bridges by quitting without notice.'],
          ['the ball is in your court','it is your responsibility to take the next action','I\'ve made my offer — the ball is in your court now.'],
          ['a blessing in disguise','something bad that turns out to have good consequences','Her redundancy was a blessing in disguise — she started her own business.'],
          ['play it by ear','proceed without a plan; decide as you go along','We don\'t have a set agenda — we\'ll play it by ear.'],
          ['up in the air','uncertain; not yet decided','The plans are still up in the air.'],
          ['bite the dust','fail; come to an end; die','Another restaurant on the high street has bitten the dust.'],
          ['on the same page','in agreement; having the same understanding','Let\'s make sure we\'re all on the same page before we proceed.'],
          ['think outside the box','think creatively and unconventionally','We need to think outside the box to solve this problem.'],
          ['face the music','accept the negative consequences of your actions','He\'d been avoiding his boss all week, but eventually had to face the music.'],
          ['pass the buck','transfer responsibility to someone else','He always passes the buck when things go wrong.'],
          ['under the thumb (of)','controlled or dominated by someone','He\'s completely under his wife\'s thumb.'],
        ],
      })}
    `;
  }

  _punctuation() {
    return `
      ${renderSubhead('Full Stop / Period (.)')}
      ${renderTable({
        headers: ['Use', 'Example'],
        rows: [
          ['End of a declarative sentence','She lives in London.'],
          ['End of an imperative sentence','Please sit down.'],
          ['After abbreviations (British usage varies)','Dr. · Mr. · etc. · e.g. · approx.'],
          ['Decimal point (English convention — comma in German)','3.5 · 10.99 · 0.75'],
        ],
      })}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-info-circle', title: 'British vs American Abbreviation Punctuation', body:
        'In <strong>British English</strong>, abbreviations that include the first and last letter of a word often have NO period:<br>' +
        'Dr Smith (not Dr. Smith) · Mr Brown · Mrs Jones · St Paul\'s<br>' +
        'In <strong>American English</strong>, periods are more consistently used: Dr. Smith · Mr. Brown · Mrs. Jones'
      })}

      ${renderSubhead('Comma (,)')}
      ${renderTable({
        headers: ['Use', 'Example'],
        rows: [
          ['Separating items in a list (three or more)','I bought apples, oranges, bananas, and grapes.'],
          ['Before a coordinating conjunction joining two main clauses (and, but, or, so, yet, for, nor)','I went to the shop, but it was closed. / She studied hard, and she passed.'],
          ['After an introductory clause or phrase','After dinner, we watched television. / Although it was raining, we went out.'],
          ['Around non-defining relative clauses','My brother, who lives in London, is a teacher.'],
          ['Around non-essential/parenthetical information','The film, directed by Nolan, won three Oscars.'],
          ['In direct speech (before/after a quotation)','She said, "I\'m leaving." / "Come in," he replied.'],
          ['After adverbial conjunctions at start of sentence','However, there is another solution. / Moreover, the cost is high.'],
          ['Separating coordinating adjectives before a noun','It was a long, difficult, exhausting journey.'],
          ['Large numbers (every three digits)','1,000 · 10,000 · 1,000,000'],
        ],
      })}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-circle-question', title: 'The Oxford Comma (Serial Comma)', body:
        'The Oxford comma is the comma placed before the final "and" in a list. It is optional but can prevent ambiguity.<br><br>' +
        '<strong>Without Oxford comma:</strong> "I love my parents, Lady Gaga and Beethoven." → Suggests parents are Lady Gaga and Beethoven.<br>' +
        '<strong>With Oxford comma:</strong> "I love my parents, Lady Gaga, and Beethoven." → Three separate things clearly.<br><br>' +
        'Oxford/formal style: always use it. Journalistic style (AP, most British press): usually omit it.<br>' +
        'In Abitur essays: be consistent, whichever you choose.'
      })}

      ${renderSubhead('Apostrophe (\') — The Most Misused Mark')}
      ${renderTable({
        headers: ['Use', 'Rule', 'Examples'],
        rows: [
          ['Possession — singular','Add \'s','John\'s car · the dog\'s tail · the teacher\'s desk'],
          ['Possession — plural ending in -s','Add \' only (after the s)','the students\' work · my parents\' house · the girls\' team'],
          ['Possession — irregular plural','Add \'s','the children\'s toys · the men\'s room · the women\'s rights'],
          ['Contractions','Mark missing letters','don\'t (do not) · isn\'t · it\'s (it is/has) · I\'m · they\'re · you\'re · we\'ll · she\'d'],
        ],
      })}
      ${renderInfobox({ type: 'danger', icon: 'fas fa-times-circle', title: 'Apostrophe — Critical Errors to Avoid', body:
        '❌ <em>Its\'</em> a beautiful day. → ✅ <strong>It\'s</strong> a beautiful day. (= it is)<br>' +
        '❌ The dog wagged <em>it\'s</em> tail. → ✅ The dog wagged <strong>its</strong> tail. (possessive — NO apostrophe)<br>' +
        '❌ <em>Apple\'s for sale</em>. → ✅ <strong>Apples</strong> for sale. (NEVER apostrophe for plurals!)<br>' +
        '❌ The <em>1990\'s</em> were exciting. → ✅ The <strong>1990s</strong> were exciting. (decades have no apostrophe)<br>' +
        '❌ <em>Your\'e</em> welcome. → ✅ <strong>You\'re</strong> welcome. (= you are)<br>' +
        '❌ <em>Their</em> going tomorrow. → ✅ <strong>They\'re</strong> going tomorrow. (= they are)'
      })}

      ${renderSubhead('Quotation Marks (" " or \' \')')}
      ${renderTable({
        headers: ['Use', 'British', 'American'],
        rows: [
          ['Direct speech','She said, \'I\'m tired.\'','She said, "I\'m tired."'],
          ['Quotation within a quotation','She said, \'He told me "wait here."\'','She said, "He told me \'wait here.\'"'],
          ['Titles of short works (articles, poems, chapters)','\'The Tell-Tale Heart\'','\'The Tell-Tale Heart\' or "The Tell-Tale Heart"'],
          ['Words used in an unusual or ironic way','His \'helpful\' advice made things worse.','His "helpful" advice made things worse.'],
          ['Technical terms on first use','The concept of \'cognitive dissonance\'','The concept of "cognitive dissonance"'],
        ],
      })}

      ${renderSubhead('Colon (:) and Semicolon (;)')}
      ${renderTable({
        headers: ['Mark', 'Use', 'Example'],
        rows: [
          ['Colon :','Introduce a list after a complete sentence','You will need three things: patience, time, and money.'],
          ['Colon :','Introduce an explanation or elaboration','There was one clear reason for the delay: the weather.'],
          ['Colon :','Before a quotation in formal writing','As Orwell wrote: "All animals are equal…"'],
          ['Colon :','Between hours and minutes (time)','The meeting is at 14:30.'],
          ['Semicolon ;','Connect two closely related independent clauses (without conjunction)','I love reading; my brother prefers sport.'],
          ['Semicolon ;','Before conjunctive adverbs (however, therefore, moreover)','She worked hard; however, she didn\'t pass.'],
          ['Semicolon ;','Separate items in a complex list (when items contain commas)','We visited Paris, France; Rome, Italy; and Berlin, Germany.'],
        ],
      })}

      ${renderSubhead('Dash (—/–) and Hyphen (-)')}
      ${renderTable({
        headers: ['Mark', 'Use', 'Example'],
        rows: [
          ['Em dash (—)','Add extra information; create emphasis; replace brackets or commas','My brother — the one who lives in Berlin — is coming.'],
          ['Em dash (—)','Show a sudden break or change in thought','I was just about to leave — then the phone rang.'],
          ['En dash (–)','Ranges: dates, numbers, pages','2010–2024 · pages 45–67 · the London–Paris route'],
          ['Hyphen (-)','Compound adjectives before a noun','a well-known actor · a five-year-old child · an up-to-date report'],
          ['Hyphen (-)','After certain prefixes','ex-husband · anti-war · self-employed · co-operate'],
          ['Hyphen (-)','Compound nouns (some)','mother-in-law · editor-in-chief · passers-by'],
          ['Hyphen (-)','Numbers written out','twenty-one · forty-three · two-thirds'],
        ],
      })}
      ${renderInfobox({ type: 'warning', icon: 'fas fa-info-circle', title: 'Compound Adjective Hyphens', body:
        'Use a hyphen when compound adjectives come <strong>before</strong> the noun:<br>' +
        '"a <strong>well-known</strong> author" · "a <strong>five-year-old</strong> child" · "a <strong>thought-provoking</strong> film"<br><br>' +
        'Do NOT hyphenate when they come <strong>after</strong> the noun (predicative position):<br>' +
        '"The author is <strong>well known</strong>." · "The child is <strong>five years old</strong>." · "The film was <strong>thought provoking</strong>."'
      })}

      ${renderSubhead('Question Mark (?) and Exclamation Mark (!)')}
      ${renderTable({
        headers: ['Mark', 'Use', 'Example'],
        rows: [
          ['?','Direct questions only','Where are you going? / Did you see that?'],
          ['?','Rhetorical questions','Why would anyone do that?'],
          ['?','Never with indirect questions — use a full stop','She asked where I was going. (NOT ??)'],
          ['!','Strong emotion: surprise, anger, excitement, joy','What a beautiful day! / Stop that immediately!'],
          ['!','Commands and strong requests','Come here! / Get out!'],
          ['!','Exclamatory sentences with "what" and "how"','What an amazing performance! / How strange!'],
        ],
      })}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-pen', title: 'Exclamation Marks in Formal Writing', body:
        'Use exclamation marks very sparingly in formal essays and letters.<br>' +
        'In formal writing, expressing emphasis through word choice and sentence structure is far more effective.<br>' +
        'Multiple exclamation marks (!! or !!!) are never appropriate in serious writing.'
      })}
    `;
  }

  _numbers() {
    return `
      ${renderSubhead('Cardinal and Ordinal Numbers')}
      ${renderTable({
        headers: ['Number', 'Cardinal', 'Ordinal', 'Number', 'Cardinal', 'Ordinal'],
        rows: [
          ['1','one','1st — first','11','eleven','11th — eleventh'],
          ['2','two','2nd — second','12','twelve','12th — twelfth'],
          ['3','three','3rd — third','13','thirteen','13th — thirteenth'],
          ['4','four','4th — fourth','20','twenty','20th — twentieth'],
          ['5','five','5th — fifth','21','twenty-one','21st — twenty-first'],
          ['6','six','6th — sixth','30','thirty','30th — thirtieth'],
          ['7','seven','7th — seventh','40','forty (no u!)','40th — fortieth'],
          ['8','eight','8th — eighth','100','one hundred','100th — one hundredth'],
          ['9','nine','9th — ninth','1,000','one thousand','1,000th — one thousandth'],
          ['10','ten','10th — tenth','1,000,000','one million','1,000,000th — one millionth'],
        ],
      })}

      ${renderSubhead('Large Numbers — Speaking and Writing')}
      ${renderTable({
        headers: ['Figure', 'Written in words', 'Notes'],
        rows: [
          ['100','one hundred / a hundred',''],
          ['101','one hundred and one','British English always uses "and" before the last part'],
          ['1,000','one thousand / a thousand',''],
          ['1,500','one thousand five hundred / fifteen hundred',''],
          ['10,000','ten thousand',''],
          ['100,000','one hundred thousand',''],
          ['1,000,000','one million',''],
          ['1,000,000,000','one billion','British: traditionally "one thousand million" — now "billion" is universal'],
          ['1,000,000,000,000','one trillion',''],
        ],
      })}

      ${renderSubhead('Fractions and Decimals')}
      ${renderTable({
        headers: ['Symbol', 'How to say it', 'Notes'],
        rows: [
          ['½','one half / a half',''],
          ['¼','one quarter / a quarter',''],
          ['¾','three quarters',''],
          ['⅓','one third / a third',''],
          ['⅔','two thirds',''],
          ['⅕','one fifth','All denominators use ordinal numbers: 1/7 = one seventh, 3/8 = three eighths'],
          ['0.5','zero point five / nought point five','British: nought; American: zero'],
          ['3.14','three point one four','Each digit after point is read separately'],
          ['6.75%','six point seven five per cent',''],
          ['10.5 million','ten point five million',''],
        ],
      })}

      ${renderSubhead('Dates and Years')}
      ${renderTable({
        headers: ['Format', 'British English', 'American English'],
        rows: [
          ['Written (formal)','15 January 2026 / 15th January 2026','January 15, 2026 / January 15th, 2026'],
          ['Written (numeric)','15/01/2026 (DD/MM/YYYY)','01/15/2026 (MM/DD/YYYY)'],
          ['Spoken','the fifteenth of January, twenty twenty-six','January fifteenth, twenty twenty-six'],
          ['Year: 2000','the year two thousand','the year two thousand'],
          ['Year: 2001–2009','two thousand and one; two thousand and nine','two thousand one; two thousand nine (or "oh one")'],
          ['Year: 2010 onwards','twenty ten; twenty twenty-four','twenty ten; twenty twenty-four'],
          ['Year: 1900–1999','nineteen hundred; nineteen ninety-nine','nineteen hundred; nineteen ninety-nine'],
          ['Decade','the sixties; the 1990s','the sixties; the 1990s'],
          ['Century','the twentieth century; the 21st century','the twentieth century; the 21st century'],
        ],
      })}

      ${renderSubhead('Time')}
      ${renderTable({
        headers: ['Digital', 'British English (12-hour)', 'American English / 24-hour'],
        rows: [
          ['3:00','three o\'clock','3:00 AM · 0300 hours'],
          ['3:05','five past three','three oh five'],
          ['3:15','quarter past three','three fifteen'],
          ['3:30','half past three','three thirty'],
          ['3:45','quarter to four','three forty-five'],
          ['3:55','five to four','three fifty-five'],
          ['12:00','midday / noon','12:00 PM · 1200 hours'],
          ['0:00 / 24:00','midnight','12:00 AM · 0000 / 2400 hours'],
          ['15:00','three o\'clock in the afternoon / 3 PM','fifteen hundred hours'],
        ],
      })}
      ${renderInfobox({ type: 'blue', icon: 'fas fa-clock', title: 'AM / PM', body:
        '<strong>AM</strong> (ante meridiem) = before noon: midnight to 11:59 AM<br>' +
        '<strong>PM</strong> (post meridiem) = after noon: noon to 11:59 PM<br>' +
        '12:00 PM = noon · 12:00 AM = midnight (these are commonly confused!)'
      })}

      ${renderSubhead('Writing Numbers — Style Rules')}
      ${renderTable({
        headers: ['Rule', 'Correct', 'Incorrect'],
        rows: [
          ['Spell out numbers one to nine in running text','I have three cats.','I have 3 cats.'],
          ['Use figures for 10 and above','There are 25 students in the class.','There are twenty-five students in the class.'],
          ['Always spell out numbers at the start of a sentence','Fifteen people came to the meeting.','15 people came to the meeting.'],
          ['Use figures consistently in lists if any are 10+','I need 3 pens, 12 notebooks, and 5 folders.','I need three pens, twelve notebooks, and 5 folders. (mixed)'],
          ['Use figures for measurements, statistics, and data','The temperature reached 38°C. / 45% agreed.','The temperature reached thirty-eight degrees.'],
          ['Numbers in dialogue are usually spelled out','"She said she had been waiting for twenty minutes."','She said she had been waiting for 20 minutes. (in speech)'],
        ],
      })}
    `;
  }

  _abbreviations() {
    return `
      ${renderSubhead('Titles and Forms of Address')}
      ${renderTable({
        headers: ['Abbreviation', 'Full form', 'Use'],
        rows: [
          ['Mr (BE) / Mr. (AE)','Mister','For any man (married or not)'],
          ['Mrs (BE) / Mrs. (AE)','Missus (originally "Mistress")','For a married woman'],
          ['Miss','—','For an unmarried woman (no period)'],
          ['Ms (BE) / Ms. (AE)','—','For any woman (marital status not specified or irrelevant) — increasingly preferred'],
          ['Mx','—','Gender-neutral title (used by non-binary people)'],
          ['Dr (BE) / Dr. (AE)','Doctor','Medical doctor or holder of a doctorate'],
          ['Prof.','Professor','University professor'],
          ['Rev. / Revd','Reverend','Christian minister or clergy'],
          ['HRH','His/Her Royal Highness','British royal family'],
          ['MP','Member of Parliament','British legislature'],
          ['MEP','Member of the European Parliament','EU legislature'],
        ],
      })}

      ${renderSubhead('Common Latin Abbreviations')}
      ${renderTable({
        headers: ['Abbreviation', 'Latin', 'Meaning', 'Use'],
        rows: [
          ['e.g.','exempli gratia','for example','Give examples: "languages, e.g., English, French"'],
          ['i.e.','id est','that is; in other words','Clarify: "the capital, i.e., London"'],
          ['etc.','et cetera','and so on; and the rest','Extend a list: "pens, pencils, rulers, etc."'],
          ['vs. / v.','versus','against','Contrast: "tradition vs. modernity"'],
          ['et al.','et alii','and others','In citations: "Smith et al. (2020)"'],
          ['N.B.','nota bene','note well; pay attention to','Highlight importance: "N.B. This is crucial."'],
          ['cf.','confer','compare','Academic writing: "cf. Jones (2019)"'],
          ['ibid.','ibidem','in the same place','Repeat citation from previous source'],
          ['op. cit.','opere citato','in the work cited','Refer back to previously cited work'],
          ['p. / pp.','pagina / paginae','page / pages','p. 45 · pp. 23–29'],
          ['fl.','floruit','flourished (active during a period)','For historical figures without exact dates'],
          ['c. / ca.','circa','approximately (for dates)','"c. 1450" = around 1450'],
        ],
      })}

      ${renderSubhead('Organisations, Politics and Law')}
      ${renderTable({
        headers: ['Abbreviation', 'Full form'],
        rows: [
          ['UN','United Nations'],
          ['EU','European Union'],
          ['NATO','North Atlantic Treaty Organisation'],
          ['WHO','World Health Organisation'],
          ['IMF','International Monetary Fund'],
          ['WTO','World Trade Organisation'],
          ['UNESCO','United Nations Educational, Scientific and Cultural Organisation'],
          ['UNICEF','United Nations Children\'s Fund'],
          ['NGO','Non-Governmental Organisation'],
          ['UK','United Kingdom of Great Britain and Northern Ireland'],
          ['USA / US','United States of America'],
          ['PM','Prime Minister'],
          ['POTUS','President of the United States'],
          ['GOP','Grand Old Party (US Republican Party)'],
          ['MEP','Member of the European Parliament'],
        ],
      })}

      ${renderSubhead('Business and Finance')}
      ${renderTable({
        headers: ['Abbreviation', 'Full form'],
        rows: [
          ['Ltd.','Limited (company)'],
          ['plc','Public Limited Company (UK)'],
          ['Inc.','Incorporated (US)'],
          ['Corp.','Corporation'],
          ['LLC','Limited Liability Company (US)'],
          ['CEO','Chief Executive Officer'],
          ['CFO','Chief Financial Officer'],
          ['HR','Human Resources'],
          ['PR','Public Relations'],
          ['B2B','Business to Business'],
          ['B2C','Business to Consumer'],
          ['ROI','Return on Investment'],
          ['GDP','Gross Domestic Product'],
          ['GNP','Gross National Product'],
          ['VAT','Value Added Tax'],
        ],
      })}

      ${renderSubhead('Technology')}
      ${renderTable({
        headers: ['Abbreviation', 'Full form'],
        rows: [
          ['AI','Artificial Intelligence'],
          ['IT','Information Technology'],
          ['PC','Personal Computer'],
          ['URL','Uniform Resource Locator'],
          ['FAQ','Frequently Asked Questions'],
          ['Wi-Fi','Wireless Fidelity'],
          ['GPS','Global Positioning System'],
          ['USB','Universal Serial Bus'],
          ['PDF','Portable Document Format'],
          ['HTML','HyperText Markup Language'],
          ['API','Application Programming Interface'],
          ['IoT','Internet of Things'],
          ['VPN','Virtual Private Network'],
          ['OS','Operating System'],
          ['RAM','Random Access Memory'],
        ],
      })}

      ${renderSubhead('Measurements')}
      ${renderTable({
        headers: ['Symbol', 'Unit', 'Symbol', 'Unit'],
        rows: [
          ['mm','millimetre','oz','ounce'],
          ['cm','centimetre','lb','pound (weight)'],
          ['m','metre','st','stone (14 lbs — British body weight)'],
          ['km','kilometre','°C','degrees Celsius'],
          ['g','gram','°F','degrees Fahrenheit'],
          ['kg','kilogram','mph','miles per hour'],
          ['ml','millilitre','kph / km/h','kilometres per hour'],
          ['l / L','litre','sq ft / m²','square feet / metres'],
          ['in','inch','ha','hectare'],
          ['ft','foot / feet','ac','acre'],
          ['yd','yard','cal','calorie'],
          ['mi','mile','W / kW','watt / kilowatt'],
        ],
      })}
    `;
  }

  _prefixesSuffixes() {
    return `
      <p class="lz-prose">Understanding prefixes and suffixes allows you to deduce the meaning of
      unknown words and to expand your vocabulary systematically. They are also essential
      for word formation tasks in exams.</p>

      ${renderSubhead('Common Prefixes')}
      ${renderTable({
        headers: ['Prefix', 'Meaning', 'Examples'],
        rows: [
          ['un-','not; opposite of','unhappy · unable · unfair · unclear · unusual · unaware · unfortunate · undo · unpack'],
          ['in-','not','incorrect · independent · invisible · insecure · incapable · informal'],
          ['im-','not (before b, m, p)','impossible · impatient · immature · immoral · imperfect · impractical'],
          ['il-','not (before l)','illegal · illiterate · illogical · illegible · illicit'],
          ['ir-','not (before r)','irregular · irresponsible · irrelevant · irrational · irreversible'],
          ['dis-','not; opposite; removal','disagree · disappear · dishonest · disapprove · disconnect · dislike · disorder · disobey'],
          ['mis-','wrongly; incorrectly','misunderstand · mislead · misspell · misuse · misbehave · misinterpret · misplace'],
          ['re-','again; back','redo · rewrite · return · rebuild · reconsider · reopen · recycle · reform · renew'],
          ['pre-','before; in advance','preview · prehistoric · predict · prevent · prepare · precaution · prefix · prejudge'],
          ['post-','after','postwar · postpone · postgraduate · post-modern · post-mortem'],
          ['over-','too much; above','overeat · overwork · overcrowded · overlook · overestimate · overwhelm · overthrow'],
          ['under-','too little; below','underestimate · underpaid · undercooked · underdeveloped · undermine · underperform'],
          ['out-','more than; beyond; outside','outrun · outsmart · outnumber · outperform · outgrow · outstanding · outburst'],
          ['sub-','under; below; less than','subway · submarine · subconscious · subtropical · substandard · subdivision · subtitle'],
          ['inter-','between; among','international · interact · interrupt · interfere · intercultural · internet · interview'],
          ['trans-','across; through; beyond','transport · transfer · translate · transplant · transform · transcontinental · transgender'],
          ['anti-','against; opposed to','antibiotic · antisocial · anti-war · anticlimax · antidote · anticlockwise'],
          ['pro-','in favour of; forward','pro-democracy · promote · progress · propose · protest (for sth) · produce'],
          ['multi-','many; more than one','multicultural · multimedia · multilingual · multinational · multiplex · multitask'],
          ['semi-','half; partly','semicircle · semifinal · semi-automatic · semi-detached · semi-conscious'],
          ['ex-','former; out of; away from','ex-husband · ex-president · exclude · export · exceed · expire · exhaust'],
          ['co-','together; jointly','co-operate · co-exist · co-author · co-found · co-pilot · coordinate'],
          ['counter-','against; in opposition to','counteract · counterproductive · counterbalance · counter-argument · counterpart'],
          ['hyper-','over; excessively','hyperactive · hypersensitive · hypermarket · hyperlink · hypercritical'],
          ['micro-','very small','microphone · microscope · microchip · microwave · microbe · micro-manage'],
          ['macro-','very large; on a large scale','macroeconomics · macroscopic · macro photography'],
          ['mono-','one; single','monologue · monotone · monotonous · monarch · monopoly · monolingual'],
          ['bi-','two; twice','bilingual · bicycle · biannual · bilateral · bicentenary · bifocal'],
          ['auto-','self','autobiography · automatic · automobile · autonomous · autocorrect'],
          ['tele-','at a distance','television · telephone · telescope · teleconference · telepathy'],
          ['cyber-','relating to computers/internet','cyberattack · cybercrime · cybersecurity · cyberspace'],
          ['eco-','relating to ecology/environment','eco-friendly · ecosystem · eco-tourism · ecological'],
          ['non-','not; without','non-profit · non-fiction · non-smoking · non-violence · non-essential'],
          ['neo-','new; recent form of','neo-classical · neo-liberal · neo-conservative · neo-Nazi'],
        ],
      })}

      ${renderSubhead('Common Suffixes — Nouns')}
      ${renderTable({
        headers: ['Suffix', 'Meaning', 'Examples'],
        rows: [
          ['-er / -or','person who does; instrument that does','teacher · actor · writer · director · reporter · builder · calculator · projector'],
          ['-ist','person who practises; believer in','scientist · artist · journalist · terrorist · capitalist · optimist · pessimist · feminist'],
          ['-tion / -ation / -sion / -ion','state; action; process; result','information · decision · creation · education · conversation · discussion · conclusion'],
          ['-ment','state; action; condition; result','development · employment · movement · government · improvement · achievement · agreement'],
          ['-ness','state; quality of being','happiness · kindness · darkness · weakness · awareness · loneliness · sadness · fitness'],
          ['-ity / -ty','state; quality; condition','possibility · reality · equality · creativity · opportunity · ability · society · safety'],
          ['-ship','state; position; skill; relationship','friendship · leadership · citizenship · relationship · scholarship · membership · hardship'],
          ['-hood','state; condition; period of life','childhood · neighbourhood · motherhood · brotherhood · likelihood · adulthood'],
          ['-ance / -ence','state; quality; action','performance · difference · independence · confidence · importance · absence · patience'],
          ['-ism','belief; system; movement','capitalism · socialism · racism · feminism · terrorism · realism · optimism'],
          ['-dom','state; condition; realm','freedom · boredom · kingdom · wisdom · officialdom'],
          ['-age','result of; collection of; process','language · damage · marriage · storage · shortage · coverage · passage · village'],
          ['-ry / -ery','place; collection; condition','bakery · library · chemistry · discovery · machinery · pottery · surgery'],
          ['-logy / -ology','study of; branch of knowledge','biology · psychology · technology · archaeology · sociology · ideology'],
          ['-ness vs -ity','Same base — choose one form or the other','weak+ness = weakness · equal+ity = equality (NOT equalness)'],
        ],
      })}

      ${renderSubhead('Common Suffixes — Adjectives')}
      ${renderTable({
        headers: ['Suffix', 'Meaning', 'Examples'],
        rows: [
          ['-ful','full of; having the quality of','beautiful · careful · helpful · useful · powerful · successful · colourful · thoughtful'],
          ['-less','without; lacking','hopeless · careless · homeless · useless · powerless · meaningless · harmless · helpless'],
          ['-able / -ible','capable of; worthy of; can be done','comfortable · possible · readable · understandable · flexible · responsible · accessible'],
          ['-ous / -ious','having the quality of; full of','dangerous · famous · nervous · curious · serious · obvious · generous · jealous'],
          ['-ive','tending to; having the nature of','creative · active · effective · attractive · competitive · sensitive · positive'],
          ['-al','relating to; of the type of','national · personal · natural · musical · historical · cultural · logical · physical'],
          ['-ic','of the type of; having the character of','historic · economic · artistic · scientific · dramatic · classic · organic · realistic'],
          ['-ish','somewhat; rather; approximately; typical of','childish · reddish · selfish · Spanish · stylish · oldish · feverish · greenish'],
          ['-y','having the quality of; covered with','cloudy · windy · rainy · sandy · greedy · noisy · healthy · rocky · woody'],
          ['-en','made of; resembling','wooden · golden · silken · woollen · earthen · frozen · broken · stolen'],
          ['-ary / -ory / -ery','relating to; connected with','elementary · necessary · satisfactory · explanatory · revolutionary · imaginary'],
          ['-ward(s)','in the direction of','forward · backward · inward · outward · upward · downward · eastward'],
          ['-free','without; lacking','tax-free · sugar-free · stress-free · care-free · guilt-free · gluten-free'],
          ['-proof','protected from; resistant to','waterproof · fireproof · bulletproof · soundproof · foolproof · weatherproof'],
          ['-like','similar to; resembling','lifelike · childlike · godlike · dreamlike · businesslike · warlike'],
        ],
      })}

      ${renderSubhead('Common Suffixes — Verbs')}
      ${renderTable({
        headers: ['Suffix', 'Meaning', 'Examples'],
        rows: [
          ['-ize / -ise','to make; to become; to apply','realize · modernize · organize · characterize · globalise · privatise · nationalise · civilise'],
          ['-ify / -fy','to make; to cause to become','simplify · clarify · beautify · classify · justify · magnify · qualify · identify'],
          ['-en','to make; to become','strengthen · widen · shorten · darken · lengthen · deepen · soften · tighten · frighten'],
          ['-ate','to make; to cause; to perform','create · communicate · educate · generate · motivate · regulate · celebrate'],
          ['-ate (from noun)','to do the action of','activate · animate · operate · navigate · irritate · tolerate'],
        ],
      })}

      ${renderSubhead('Common Suffixes — Adverbs')}
      ${renderTable({
        headers: ['Suffix', 'Meaning', 'Formation', 'Examples'],
        rows: [
          ['-ly','in the manner of; to what degree','adjective + -ly','quickly · slowly · beautifully · carefully · honestly · seriously · exactly · clearly'],
          ['-ward(s)','in the direction of','noun + -wards','forwards · backwards · upwards · inwards · outwards · eastwards'],
          ['-wise','in the manner of; with regard to','noun + -wise','likewise · otherwise · clockwise · lengthwise · otherwise'],
        ],
      })}

      ${renderSubhead('Word Formation Patterns — Families')}
      ${renderTable({
        headers: ['Verb', 'Noun (action/result)', 'Noun (person)', 'Adjective', 'Adverb'],
        rows: [
          ['create','creation','creator','creative','creatively'],
          ['educate','education','educator / teacher','educational','educationally'],
          ['decide','decision','—','decisive / decided','decisively'],
          ['develop','development','developer','developed / developing','—'],
          ['discuss','discussion','—','discussable','—'],
          ['employ','employment','employer / employee','employed / employable','—'],
          ['inform','information','informant','informative / informed','informatively'],
          ['organise','organisation','organiser','organisational / organised','—'],
          ['produce','production','producer','productive','productively'],
          ['succeed','success','—','successful','successfully'],
          ['know','knowledge','—','knowledgeable','knowledgeably'],
          ['respond','response / responsibility','respondent','responsible / responsive','responsibly'],
        ],
      })}
    `;
  }

  _sayings() {
    return `
      <p class="lz-prose">English proverbs and sayings express accumulated cultural wisdom in memorable
      form. They frequently appear in reading comprehension texts and can be used effectively
      in essays to illustrate a point concisely.</p>

      ${renderTable({
        headers: ['Proverb / Saying', 'Meaning', 'Context / When to Use'],
        rows: [
          ['Actions speak louder than words.','What you do matters more than what you say.','When criticising empty promises or praising someone who shows commitment through deeds'],
          ['A picture is worth a thousand words.','An image conveys information more effectively than a description.','Media, communication, visual learning'],
          ['Better late than never.','It is better to do something late than not to do it at all.','When someone finally does something overdue; consolation'],
          ['Birds of a feather flock together.','People with similar interests or characters tend to associate with each other.','Social groups, peer influence, community'],
          ['Don\'t count your chickens before they hatch.','Don\'t plan based on something that hasn\'t happened yet.','Caution; warning against overconfidence or premature celebration'],
          ['Don\'t judge a book by its cover.','Don\'t form opinions based on appearances alone.','Prejudice, stereotyping, first impressions'],
          ['Don\'t put all your eggs in one basket.','Don\'t risk everything on a single plan or investment.','Risk management, diversity, strategy'],
          ['Every cloud has a silver lining.','Every bad situation has a positive side.','Optimism, resilience, difficult times'],
          ['Every dog has its day.','Everyone gets a chance to succeed at some point.','Fairness, opportunity, persistence'],
          ['Forewarned is forearmed.','Knowing about a danger in advance helps you prepare for it.','Preparation, information, strategy'],
          ['God helps those who help themselves.','People who take initiative are the ones who succeed.','Self-reliance, effort, responsibility'],
          ['Great minds think alike.','Intelligent people often reach the same conclusions.','Often used humorously when two people have the same idea'],
          ['Honesty is the best policy.','Being truthful is always the best approach.','Ethics, trust, relationships'],
          ['If it ain\'t broke, don\'t fix it.','Don\'t change something that is working perfectly well.','Change management, tradition vs innovation'],
          ['Ignorance is bliss.','Sometimes it is better not to know something.','Knowledge, happiness, information'],
          ['It takes two to tango.','A conflict or cooperation always involves more than one party.','Relationships, conflict, responsibility'],
          ['Knowledge is power.','Being informed and educated gives you advantages.','Education, information, empowerment'],
          ['Look before you leap.','Think carefully before taking action.','Caution, decision-making, risk'],
          ['Necessity is the mother of invention.','Urgent need prompts creative solutions.','Innovation, problem-solving, history of technology'],
          ['No news is good news.','If you haven\'t heard anything negative, the situation is probably fine.','Uncertainty, communication'],
          ['Nothing ventured, nothing gained.','You cannot achieve anything without taking risks.','Entrepreneurship, ambition, risk-taking'],
          ['One man\'s meat is another man\'s poison.','What is beneficial or enjoyable for one person may be harmful to another.','Subjectivity, taste, culture, diversity'],
          ['Practice makes perfect.','You improve at something by doing it repeatedly.','Learning, skills, education'],
          ['Prevention is better than cure.','Stopping a problem before it occurs is better than fixing it afterwards.','Health, policy, planning'],
          ['Rome wasn\'t built in a day.','Important things take time and cannot be rushed.','Patience, long-term projects, progress'],
          ['Still waters run deep.','A quiet or calm person often has great depth of character or thought.','Personality, misjudging people'],
          ['Strike while the iron is hot.','Act at the right moment while conditions are favourable.','Opportunity, timing, decisiveness'],
          ['The early bird catches the worm.','Those who act promptly or rise early have an advantage.','Motivation, opportunity, work ethic'],
          ['The grass is always greener on the other side.','People always think others have a better situation than their own.','Envy, contentment, perspective'],
          ['The pen is mightier than the sword.','Written and intellectual argument is more powerful than physical force.','Media, politics, free speech, communication'],
          ['There\'s no place like home.','Home is the most comfortable and familiar place.','Immigration, belonging, identity'],
          ['Time is money.','Time is a valuable resource that should not be wasted.','Business, productivity, efficiency'],
          ['Two heads are better than one.','Cooperation and collaboration lead to better outcomes.','Teamwork, problem-solving'],
          ['Two wrongs don\'t make a right.','Responding to wrongdoing with further wrongdoing is not justified.','Ethics, justice, conflict'],
          ['Where there\'s a will, there\'s a way.','Determination and motivation enable you to overcome obstacles.','Motivation, achievement, resilience'],
          ['You can\'t have your cake and eat it too.','You cannot have the benefits of two contradictory things at once.','Compromise, trade-offs, politics'],
          ['You can\'t make an omelette without breaking eggs.','You cannot achieve something worthwhile without causing some difficulty.','Progress, change, consequences'],
          ['You reap what you sow.','The consequences you experience are the result of your own actions.','Karma, personal responsibility, cause and effect'],
        ],
      })}
    `;
  }

  _usageNotes() {
    return `
      <p class="lz-prose">These pairs and groups are frequently confused by German speakers writing English.
      Mastering them eliminates some of the most common errors in Abitur written tasks.</p>

      ${renderSubhead('Its vs It\'s / Your vs You\'re / Their vs There vs They\'re')}
      ${renderTable({
        headers: ['Word', 'Meaning', 'Test', 'Example'],
        rows: [
          ['its','possessive adjective (belonging to it)','Can you replace it with "of it"?','The dog wagged <strong>its</strong> tail. / The company lost <strong>its</strong> market share.'],
          ['it\'s','contraction of "it is" or "it has"','Can you expand it to "it is" or "it has"?','<strong>It\'s</strong> raining. / <strong>It\'s</strong> been a long day. (= it has)'],
          ['your','possessive adjective (belonging to you)','Can you replace it with "of you"?','Is this <strong>your</strong> book? / <strong>Your</strong> idea is excellent.'],
          ['you\'re','contraction of "you are"','Can you expand to "you are"?','<strong>You\'re</strong> very kind. / <strong>You\'re</strong> going to be late.'],
          ['their','possessive adjective (belonging to them)','Can you replace it with "of them"?','<strong>Their</strong> house is huge. / They lost <strong>their</strong> way.'],
          ['there','adverb of place; existential (there is/are)','Can you replace it with "in/at that place"?','Put it over <strong>there</strong>. / <strong>There</strong> is a problem.'],
          ['they\'re','contraction of "they are"','Can you expand to "they are"?','<strong>They\'re</strong> coming tomorrow. / <strong>They\'re</strong> very friendly.'],
        ],
      })}

      ${renderSubhead('Commonly Confused Word Pairs')}
      ${renderTable({
        headers: ['Pair', 'Word 1', 'Word 2', 'Examples'],
        rows: [
          ['affect / effect','<strong>affect</strong> (verb) = to influence; to have an impact on','<strong>effect</strong> (noun) = result; consequence (also: "to effect change" = cause — rare verb)','The weather <strong>affects</strong> my mood. / The <strong>effect</strong> was dramatic. / Side <strong>effects</strong>.'],
          ['than / then','<strong>than</strong> (conjunction) = used in comparisons','<strong>then</strong> (adverb) = at that time; afterwards; consequently','She is taller <strong>than</strong> me. / We ate, <strong>then</strong> we left. / If so, <strong>then</strong> I agree.'],
          ['accept / except','<strong>accept</strong> (verb) = to receive willingly; to agree to','<strong>except</strong> (preposition/conjunction) = excluding; but not','I <strong>accept</strong> your offer. / Everyone <strong>except</strong> John came. / <strong>Except</strong> for the rain, it was perfect.'],
          ['advice / advise','<strong>advice</strong> (noun, uncountable) = guidance; recommendation','<strong>advise</strong> (verb) = to give advice to','Let me give you some <strong>advice</strong>. / I <strong>advise</strong> you to see a doctor.'],
          ['practice / practise','<strong>practice</strong> (noun, British) = the act of practising','<strong>practise</strong> (verb, British) = to do repeatedly to improve','I need more <strong>practice</strong>. / She <strong>practises</strong> every day. (US: practice for both)'],
          ['lose / loose','<strong>lose</strong> (verb) = to no longer have; to fail to win','<strong>loose</strong> (adjective) = not tight; free','Don\'t <strong>lose</strong> your keys. / The screw is <strong>loose</strong>.'],
          ['whose / who\'s','<strong>whose</strong> = possessive (of whom; of which)','<strong>who\'s</strong> = contraction of "who is" or "who has"','<strong>Whose</strong> bag is this? / <strong>Who\'s</strong> coming tonight? / <strong>Who\'s</strong> been eating my cake?'],
          ['principal / principle','<strong>principal</strong> (noun/adj) = head (of school); main; chief','<strong>principle</strong> (noun) = fundamental rule; moral belief','The <strong>principal</strong> cause. / The school <strong>principal</strong>. / A matter of <strong>principle</strong>.'],
          ['complement / compliment','<strong>complement</strong> (verb/noun) = to complete; something that goes well with','<strong>compliment</strong> (verb/noun) = to praise; a praising remark','Red wine <strong>complements</strong> red meat. / She <strong>complimented</strong> him on his presentation.'],
          ['disinterested / uninterested','<strong>disinterested</strong> = impartial; having no personal stake','<strong>uninterested</strong> = not interested; bored','A judge should be <strong>disinterested</strong>. / She was completely <strong>uninterested</strong> in sport.'],
          ['further / farther','<strong>further</strong> = more; in addition; figurative or literal distance','<strong>farther</strong> = greater physical distance (mainly American English)','Let\'s discuss this <strong>further</strong>. / "London is <strong>farther</strong> than Oxford." (AE)'],
          ['lie / lay','<strong>lie</strong> (intransitive) = to recline; to be in a horizontal position','<strong>lay</strong> (transitive) = to put/place something flat','She is <strong>lying</strong> on the sofa. / Yesterday she <strong>lay</strong> on the beach. / <strong>Lay</strong> the book on the table.'],
        ],
      })}

      ${renderSubhead('British English vs American English — Key Differences')}
      ${renderTable({
        headers: ['Category', 'British English', 'American English'],
        rows: [
          ['Spelling (colour)','colour · favour · honour · neighbour','color · favor · honor · neighbor'],
          ['Spelling (centre)','centre · theatre · metre','center · theater · meter'],
          ['Spelling (-ise / -ize)','organise · realise · recognise','organize · realize · recognize'],
          ['Spelling (double -l)','travelled · cancelled · marvellous · fulfil','traveled · canceled · marvelous · fulfill'],
          ['Spelling (-ence/-ence)','defence · offence · licence (noun)','defense · offense · license (noun & verb)'],
          ['Spelling (other)','programme · cheque · tyre · moustache · grey','program · check · tire · mustache · gray'],
          ['Vocabulary (home)','flat · lift · ground floor · postcode · dustbin','apartment · elevator · first floor · zip code · trash can'],
          ['Vocabulary (food)','chips · crisps · biscuit · aubergine · courgette','fries · chips · cookie · eggplant · zucchini'],
          ['Vocabulary (transport)','petrol · boot · bonnet · motorway · lorry','gas/gasoline · trunk · hood · freeway · truck'],
          ['Vocabulary (clothing)','trousers · trainers · waistcoat · jumper / pullover','pants · sneakers · vest · sweater'],
          ['Vocabulary (other)','autumn · chemist · solicitor · headmaster · CV','fall · drugstore/pharmacy · lawyer · principal · résumé'],
          ['Grammar (Present Perfect)','"I\'ve just eaten." / "Have you done it yet?"','"I just ate." / "Did you do it yet?" (AE often uses Past Simple)'],
          ['Grammar (collective nouns)','The team are playing well. (plural verb)','The team is playing well. (singular verb)'],
          ['Grammar (have)','Have you got a car? / I haven\'t got any.','Do you have a car? / I don\'t have any.'],
          ['Dates (written)','15 January 2026 → 15/01/2026','January 15, 2026 → 01/15/2026'],
          ['Numbers (billion)','1,000,000,000 = one billion (now universal)','1,000,000,000 = one billion'],
        ],
      })}

      ${renderSubhead('Formal vs Informal Register')}
      <p class="lz-prose">The Abitur tests your ability to write in a consistently formal register.
      These substitutions will raise the level of your written English:</p>
      ${renderTable({
        headers: ['Informal', 'Formal Equivalent', 'Informal', 'Formal Equivalent'],
        rows: [
          ['get','obtain / receive / acquire','a lot of / lots of','a great deal of / numerous / considerable'],
          ['big / huge','substantial / significant / considerable','so','therefore / consequently / thus'],
          ['show','demonstrate / illustrate / reveal','but','however / nevertheless / nonetheless'],
          ['think','consider / believe / argue / contend','also','furthermore / moreover / in addition'],
          ['say','state / assert / maintain / argue / claim','and so','and therefore / and consequently'],
          ['use','utilise / employ','find out','discover / ascertain / determine'],
          ['look into','investigate / examine / explore','go up','increase / rise / grow'],
          ['go down','decrease / decline / fall','start / begin','commence / initiate'],
          ['end','conclude / terminate / cease','about','regarding / concerning / with respect to'],
          ['help','assist / facilitate / support','ask','request / enquire / query'],
          ['need','require / necessitate','now','currently / at present / at this juncture'],
          ['it\'s clear that','it is evident that / it is apparent that','I think','It is argued that / It can be contended that'],
        ],
      })}

      ${renderSubhead('False Friends — German/English Confusions')}
      ${renderTable({
        headers: ['German word', 'Misleading English word', 'Correct English word', 'Explanation'],
        rows: [
          ['aktuell','actual (= real, existing)','current / present','aktuell = current; actual = wirklich, eigentlich'],
          ['bald','bold (= brave, daring)','soon','bald = soon; bold = kühn, mutig'],
          ['bekommen','become (= to turn into)','to get / to receive','bekommen = to get; become = werden'],
          ['Chef','chef (= professional cook)','boss / manager','Chef = boss; chef = Koch/Köchin'],
          ['die','die (= to stop living)','the (definite article)','false cognate — no confusion if you know German'],
          ['eventuell','eventually (= in the end)','possibly / perhaps','eventuell = possibly; eventually = schließlich'],
          ['Handy','handy (= useful, convenient)','mobile phone','Handy is a false anglicism; real English = mobile (BE) / cell phone (AE)'],
          ['Kontrolle','control (= power over)','check / inspection','Kontrolle = inspection; control = Kontrolle UND Macht'],
          ['komisch','comical (= funny)','strange / odd','komisch = strange; comical = lustig'],
          ['nett','net (= after deductions)','nice / kind','nett = nice; net = Netto-'],
          ['ordinär','ordinary (= normal)','vulgar / common','ordinär = vulgar; ordinary = normal, gewöhnlich'],
          ['Provision','provision (= supply of sth)','commission','Provision = commission; provision = Versorgung'],
          ['sensibel','sensible (= reasonable)','sensitive','sensibel = sensitive; sensible = vernünftig'],
          ['spenden','spend (= to use money for)','to donate','spenden = to donate; spend = ausgeben'],
          ['sympathisch','sympathetic (= showing pity)','likeable / pleasant','sympathisch = likeable; sympathetic = mitfühlend'],
        ],
      })}
    `;
  }

  // ═══════════════════════════════════════════════════════════
  // _html() — assembles all sections into the final page
  // ═══════════════════════════════════════════════════════════

   _html() {
  // ── Tab-Definition (nur einmal, vor der Verwendung)
  const MAIN_TABS = [
    { key: 'verbs',     label: '⏱️ Verbs & Tenses' },
    { key: 'grammar',   label: '🏗️ Grammar' },
    { key: 'vocab',     label: '📚 Vocabulary' },
    { key: 'reference', label: '📖 Reference' },
  ];

  // ── Verbs & Tenses — Accordion
  const tensesContent = renderAccordion([
    { title: '📋 Irregular Verbs — Complete List',  content: this._irregularVerbs() },
    { title: '✏️ Regular Verbs — Formation & Pronunciation', content: this._regularVerbs() },
    { title: '⏱️ All 12 Tenses — Formation, Uses & Examples', content: this._tenses() },
    { title: '🔄 Passive Voice — All Tenses + Special Structures', content: this._passive() },
    { title: '🔀 Conditionals — Zero to Mixed + Formal Inversion', content: this._conditionals() },
    { title: '🎛️ Modal Verbs — Complete Reference + Deduction', content: this._modals() },
    { title: '💬 Reported Speech — Backshift, Questions & Verbs', content: this._reportedSpeech() },
    { title: '🔗 Verb Patterns — Infinitive, Gerund & Bare Inf.', content: this._verbPatterns() },
    { title: '↔️ Phrasal Verbs A–Z — 150+ with Type & Example', content: this._phrasalVerbs() },
  ]);

  // ── Grammar — Accordion
  const grammarContent = renderAccordion([
    { title: '📦 Nouns — Countable/Uncountable, Plurals, Possessive', content: this._nouns() },
    { title: '🔤 Articles — a/an · the · Zero Article + Geography', content: this._articles() },
    { title: '👤 Pronouns — Personal, Reflexive, Indefinite, Relative', content: this._pronouns() },
    { title: '🔁 Relative Clauses — Defining vs Non-Defining', content: this._relativeClauses() },
    { title: '🎨 Adjectives — Order, Comparatives, Superlatives, -ed/-ing', content: this._adjectives() },
  ]);

  // ── Vocabulary — Accordion
  const vocabContent = renderAccordion([
    { title: '🤝 Collocation — make/do/have/take/give + Prepositions', content: this._collocation() },
    { title: '🦊 Idioms — 100+ Body, Animal, Time, Money, General', content: this._idioms() },
    { title: '🔧 Prefixes & Suffixes — 35 Prefixes + Word Families', content: this._prefixesSuffixes() },
    { title: '📖 Sayings & Proverbs — 38 with Meaning & Context', content: this._sayings() },
  ]);

  // ── Reference — direct
  const referenceContent = `
    ${this._punctuation()}
    ${this._numbers()}
    ${this._abbreviations()}
    ${this._usageNotes()}
  `;

  // ── HTML-Ausgabe (jetzt mit wim-tabs, kein renderTabs mehr)
  return `
    <!-- ══════════════ HERO ══════════════ -->
    <section class="lz-sub-hero" style="--kap-color:${COLOR};--kap-color-rgb:${COLOR_RGB};">
      <div class="lz-sub-hero-inner">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>

        <nav class="lz-sub-breadcrumb">
          <button class="lz-bread-link" data-nav-link="${BASE}">Englisch</button>
          <i class="fas fa-chevron-right"></i>
          <button class="lz-bread-link" data-nav-link="${BASE}/themen/grammar">Grammar</button>
          <i class="fas fa-chevron-right"></i>
          <span>Reference</span>
        </nav>

        <h1 class="lz-sub-title">Grammar<br><em>Reference</em></h1>
        <p class="lz-sub-desc">
          Verbs · Tenses · Passive · Conditionals · Modals · Reported Speech ·
          Nouns · Articles · Pronouns · Relative Clauses · Adjectives ·
          Collocation · Idioms · Phrasal Verbs · Punctuation · Abitur 2026
        </p>
        ${renderTags(['Grammar', 'Reference', 'Abitur 2026', 'BW', 'Complete Guide'])}
      </div>
    </section>

    <!-- ══════════════ STATS ══════════════ -->
    <section class="lz-content-section" style="padding-bottom:0;">
      <div class="lz-section-wrap">
        ${renderMerkboxGrid([
          { icon: 'fas fa-clock', title: '12 Tenses',
            text: 'Jede Zeitform vollständig: Formation, alle Uses mit Beispielen, Time Expressions, key distinctions wie Present Perfect vs Past Simple.' },
          { icon: 'fas fa-rotate', title: 'Passive + Conditionals',
            text: '14 Passive-Formen inkl. Modals, 4 Special Structures. Alle 6 Conditional Types — Zero, First, Second, Third und beide Mixed Types.' },
          { icon: 'fas fa-list-check', title: '150+ Phrasal Verbs',
            text: 'A–Z komplette Liste mit Bedeutung, Beispielsatz und Typ (intransitive / separable / inseparable).' },
          { icon: 'fas fa-book-open', title: '25 Grammar Topics',
            text: 'Nouns, Articles, Pronouns, Relative Clauses, Adjectives, Modals, Reported Speech, Collocation, Idioms, Prefixes/Suffixes, und mehr.' },
        ])}
      </div>
    </section>

    <!-- ══════════════ WIM-TABS ══════════════ -->
    <section class="lz-content-section">
      <div class="lz-section-wrap">
        <nav class="wim-tabs" id="ref-main-tabs" aria-label="Grammar reference sections">
          ${MAIN_TABS.map((t, i) => `
            <button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">
              ${t.label}
            </button>`).join('')}
        </nav>

        <div class="wim-category" data-wim-cat="verbs">
          ${tensesContent}
        </div>
        <div class="wim-category hidden" data-wim-cat="grammar">
          ${grammarContent}
        </div>
        <div class="wim-category hidden" data-wim-cat="vocab">
          ${vocabContent}
        </div>
        <div class="wim-category hidden" data-wim-cat="reference">
          ${referenceContent}
        </div>
      </div>
    </section>

    <!-- ══════════════ PAGE NAV ══════════════ -->
    <section class="lz-content-section" style="padding-top:0; padding-bottom:3rem;">
      <div class="lz-section-wrap">
        ${renderPageNav({ 
          prev: { link: `${BASE}/themen/skills/writing-strategies`, label: 'Writing Strategies' }, 
          next: { link: `${BASE}/themen/grammar/exercises`, label: 'Grammar Exercises' } 
        }, BASE)}
      </div>
    </section>

    ${footerHTML(this.router)}
  `;
}

  // ═══════════════════════════════════════════════════════════
  // init()
  // ═══════════════════════════════════════════════════════════

  init() {
    i18n.init();
    initScrollReveal();
    initInteractive(document);
    initWimTabs(document);

    // Breadcrumb and internal navigation links
    document.querySelectorAll('[data-link]').forEach(btn =>
      btn.addEventListener('click', () => { window.location.hash = btn.dataset.link; })
    );
    document.querySelectorAll('[data-nav-link]').forEach(btn =>
      btn.addEventListener('click', () => { window.location.hash = btn.dataset.navLink; })
    );
  }
}
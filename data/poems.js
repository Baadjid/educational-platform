// data/poems.js
// Alle Gedichte in einer Datei

export const POEM_CATEGORIES = [
  { id: 'all',      label: 'Alle Gedichte',   icon: 'fa-feather-alt' },
  { id: 'liebe',    label: 'Liebe & Schmerz', icon: 'fa-heart-broken' },
  { id: 'selbst',   label: 'Selbst & Sein',   icon: 'fa-user-circle' },
  { id: 'russisch', label: 'По-русски',        icon: 'fa-language' },
  { id: 'englisch', label: 'English',          icon: 'fa-globe' },
];

export const POEMS = [
  // ══════════════════════════════════════════════════════════════
  //  LIEBE & SCHMERZ
  // ══════════════════════════════════════════════════════════════

  {
    id: 1,
    category: 'liebe',
    title: 'In den Scherben unsrer Liebe',
    date: '2025',
    bgImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(10, 5, 8, 0.65)',
    accentColor: '#c9a87c',
    stanzas: [
      'Einst standen wir Hand in Hand,\ndoch die Welt zerbrach den Bund.\nEin Herz, das schlug für dich, entbrannt,\nliegt nun in Scherben, wund.',
      'Ich hab\' gekämpft, gehofft, geglaubt,\ndoch die Last war viel zu schwer.\nDu sagtest „Bleib!", hast fest vertraut,\ndoch ich kann nicht mehr.',
      'Die Tränen sind zu Dauerregen,\nin jedem Tropfen Schmerz.\nGedanken kreisen, ohne Segen,\nverlor\'n ist unser Herz.',
      'Ich war dein Heimweg, dein Zuhause,\ndie 24 Stufen, die du gehst.\nDoch nun, in einer stillen Pause,\nseh\' ich, dass du mich verlässt.',
      'Wir haben alles auf die Goldwaage gelegt,\nverloren, was uns hielt.\nIn unserm Spiel hat niemand gesiegt,\nnur Tränenfeld bestellt.',
      'Du warst der Grund für alles Gute,\nmein Kompass, meine Sicht.\nDoch nun gehst du, und ich verfluche\ndie Liebe, die zerbricht.',
      'Vielleicht war\'n wir zu naiv,\nvielleicht zu schwach im Sturm.\nDoch jede Hoffnung, die uns rief,\nverstummt im kalten Turm.',
      'Hass mich ruhig, doch ich kann\'s nicht,\nzu schwer sind unsre Lasten.\nKein Wort kann richten, was zerbricht,\nzu lang die Nächte, die wir fassten.',
      'Doch vielleicht, in einer andren Zeit,\nfinden wir zurück.\nVielleicht heilt dann das Herz im Leid,\nund Liebe wird zum Glück.',
      'Bis dahin leb wohl, mein Schatz,\nmein Herz, mein letzter Traum.\nIch geh\' den Weg, den ich jetzt geh\'n muss,\nund lass\' die Liebe ruh\'n im Raum.',
    ]
  },
  {
    id: 2,
    category: 'liebe',
    title: 'Flüchtige Nächte',
    date: '2025',
    bgImage: 'https://images.unsplash.com/photo-1520034475321-cbe63696469a?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(6, 8, 18, 0.66)',
    accentColor: '#7a9eb8',
    stanzas: [
      'Wenn der Sommer sich leise zurückzieht,\nund der Herbst mit kühlem Wind uns verzieht,\nverblasst dein Bild in der Abenddämmerung,\nwie ein Traum, den die Morgensonne verbringt.',
      'Wie ein Narr suche ich nachts nach dir,\ndurch die Sterne, die endlos vor mir,\nfinde dich oft, doch verlierst du dich schnell,\nin der Weite der Sehnsucht, die mich quält.',
      'Die Stadt verschlingt dich, lässt dich entweichen,\nmeine Seele brennt, in Flammen, die schmerzen.\nIn den Straßen, wo einst dein Lächeln strahlte,\nschmerzt mein Herz, weil es dich nicht mehr halte.',
      'In der Dunkelheit frage ich mich immerzu,\nwie Liebe sich fassen lässt, wenn sie entflieht,\nmeine Gedanken gefangen, ein ewiges Spiel,\nwo ich dich fand und verlor, so viel wie nie.',
      'Würde ich einen letzten Tag erhaschen,\nwäre dein Name mein letzter Wunsch, so klar.\nBis der letzte Atemzug verweht im Wind,\nund ich, in deinem Licht, ganz fern und nah.',
    ]
  },
  {
    id: 3,
    category: 'liebe',
    title: 'Verzeihen ist nicht schwer',
    date: '2024',
    bgImage: 'https://images.unsplash.com/photo-1518895312237-a9e23508077d?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(8, 6, 12, 0.64)',
    accentColor: '#e06090',
    stanzas: [
      'In den Armen der Liebe, so zart und rein,\nschleicht sich die Trauer mit leisem Weh ein.\nEin Herz, das liebt, kennt auch den Schmerz,\ndenn in der Wahrheit war die Beziehung nur ein Scherz.',
      'Liebe, ein Tanz auf Rosen und Dornen,\nein Lächeln, das die Seele wärmt.\nDoch manchmal flüstert die Trauer leise,\nund stiller Regen aus Tränen fällt.',
      'Das Herz sehnt sich nach Zweisamkeit,\nin Augenblicken voller Glück und Licht.\nDoch wenn der Schatten der Trauer fällt,\nerinnern wir uns, was Liebe verspricht.',
      'In jedem Abschied, in jedem Verlust,\nliegt eine Hoffnung, die niemals vergeht.\nDenn die Liebe bleibt, trotz allem Leid,\nein ewiges Licht, das in uns lebt.',
    ]
  },
  {
    id: 4,
    category: 'liebe',
    title: 'Erster Kuss',
    date: '2024',
    bgImage: 'https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(8, 10, 6, 0.62)',
    accentColor: '#f0b060',
    stanzas: [
      'An dem Tag, als wir uns geküsst haben,\nschrieb ich einen Brief.\nMeine Gedanken liefen,\num zu ahnen, wie viel Spaß wir haben werden.',
      'Der Gedanke spielt mit mir,\nso wie du mit meinen Nerven.\nMeine Sorgen verschärfen sich,\nseitdem bin ich bei dir.',
      'Meine Ruhe, Schatz und Talent.\nDie Person, die ich liebe,\nfür dich drehe ich die ganze Welt um.',
    ]
  },
  {
    id: 5,
    category: 'liebe',
    title: 'Lieblings-Schmetterling',
    date: '2025',
    bgImage: 'https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(6, 10, 8, 0.65)',
    accentColor: '#7ab87a',
    stanzas: [
      'Es tut mir leid, ich habe dich noch nicht vergessen.\nDeine Worte über Liebe und Begehren bleiben bei mir.\nWir gehören zueinander, auch wenn wir fern sind.',
      'Mit meinen Treffen mit dir hat sich alles verändert.\nTraurigkeit fließt in meiner Seele durch meine Brust.\nSo möchte ich weder essen noch trinken noch leben.',
      'Doch meine Freunde nehmen mir die Möglichkeit zum Sterben weg,\nauch wenn die Ungerechtigkeit das Gefühl der Leere erzeugt,\nund meinen Brustkorb mit Schmerzen niederbrennt.',
      'Wie viele verlorene Tage sind vergangen,\nwir haben geredet, doch es war vergeblich.\nMein Vertrauen in dich verbrennt mich von innen heraus.',
      'Lieblings-Schmetterling wird in meinen Augen zum Verräter,\nder immer schweigt.',
    ]
  },
  {
    id: 6,
    category: 'liebe',
    title: 'Der Teufel',
    date: '2025',
    bgImage: 'https://images.unsplash.com/photo-1534447677768-be436bb09401?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(12, 4, 4, 0.68)',
    accentColor: '#cc4444',
    stanzas: [
      'Der Teufel bot mir einen Deal so fein:\n„Gib mir deine Seele, all dein Leid schließ ich ein.\nDie Erinnerung verpack\' ich, versiegelt und fest,\ndu wirst alles vergessen, kein Traum bringt dir den Rest.',
      'Kummer und Schmerz bleiben für immer fort,\njede Spur von ihr lösch\' ich an jedem Ort."\nIch dachte lange nach, ließ das Herz dann los,\ndoch als ich dein Bild sah, war die Antwort bloß:',
      '„Nein, danke, ich verzichte, lass es sein,\ndenn ohne die Erinnerung wär\' ich nicht mehr mein."',
    ]
  },
  {
    id: 7,
    category: 'liebe',
    title: 'Liebe in Schleife',
    date: '2025',
    bgImage: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(10, 6, 16, 0.65)',
    accentColor: '#a070e0',
    stanzas: [
      'Man träumt von der Freiheit der Liebe,\ndoch sie fesselt dich, hält dich zurück.\nHypnotisiert folgst du ihr weiter —\ndie Schleife dreht sich, Stück für Stück.',
      'Die Sehnsucht kehrt immer wieder,\nwie Musik, die du nicht hören willst.\nUnd doch tanzt du weiter, Runde um Runde,\ngefangen in dem, was dich zugleich beflügelt.',
      'Freiheit — das Wort klebt auf der Zunge.\nDoch Liebe dreht sich, und du drehst dich mit.\nIn der Schleife lebst du, immer wieder,\nbis du nicht mehr weißt, wo sie endet und du beginnst.',
    ]
  },
  {
    id: 8,
    category: 'liebe',
    title: 'Abschied ohne Wiederkehr',
    date: '2025',
    bgImage: 'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(8, 8, 10, 0.67)',
    accentColor: '#9090b0',
    stanzas: [
      'Mit vollem Gewissen und Verstand\nspreche ich das letzte Mal zu dir.\nWir haben unsere Beziehung misshandelt,\nmal so, mal anders — ich kämpfe nicht um dich mehr,\nso wie du um mich nicht.',
      'Lass dich frei, mit allen Sorgen.\nIch werde nicht mehr zu dir kommen,\ndich umarmen, dich trösten.',
      'Die Erinnerungen bleiben schön in mir —\ndoch ich nehme sie nicht fürs Leiden,\nsondern um zu versinken und zu wachsen.',
      'Und wir treffen uns nie wieder.',
    ]
  },
  {
    id: 9,
    category: 'liebe',
    title: 'Zu spät',
    date: '2025',
    bgImage: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(14, 10, 8, 0.63)',
    accentColor: '#c9a87c',
    stanzas: [
      'Wenn ich bereit wäre, dir in diesem Leben eines zu geben,\nhätte ich dir die Fähigkeit gegeben,\ndich aus meiner Sicht zu betrachten.',
      'Erst dann wirst du verstehen,\nwie besonders du für mich bist.',
      'Doch es ist zu spät.',
    ]
  },
  {
    id: 10,
    category: 'liebe',
    title: 'Die Liebe steht über dem Leben',
    date: '2024',
    bgImage: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(6, 8, 14, 0.68)',
    accentColor: '#8080c0',
    stanzas: [
      'Wimmernd schrieb ich diesen Brief.\nDen wirst du nie im Leben lesen können.',
      'Der Brief ist über uns,\nwie wir uns küssen und umarmen,\nmit Leidenschaft unsere Seelen zerreißen.',
      'Das Leben ist nur Leiden.\nSo sorge ich für meinen letzten Atemzug.',
      'Nur die Liebe wird mir fehlen.\nDa versteckt sich Irrtum mit Vernunft.',
    ]
  },
  {
    id: 11,
    category: 'liebe',
    title: 'Wozu denn auch',
    date: '2026',
    bgImage: 'https://images.unsplash.com/photo-1471922694854-ff1b63b20054?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(6, 8, 14, 0.68)',
    accentColor: '#8080c0',
    stanzas: [
      'Du bist für mich — nicht Ewigkeit\nIch bin für dich — kein Grund\nStatt Süße gibt es Ehrlichkeit\nEin Mittel, Trieb und Schund',
      'Ich bin für dich — nicht Sonne\nDu bist für mich — nicht Himmel\nUnd ohne jede Wonne\nVerschlucken Möwen Krümel',
      'Ich bin für dich — kein Ozean\nUnd tobe nicht vor Leidenschaft\nDie Art, wie wir zusammen warn —\nWillst du da frische Farbenkraft',
      'Du bist für mich — kein Wind\nUnd treibst mir keine Wellen zu\nIch trag für dich Verantwortung\nIm Grunde: Kinder, ich und du',
      'Du hast mich für den Herbst\nIch hab dich auf die Zeit\nMehr haben wir uns nie gewünscht —\nWozu denn auch, in Wirklichkeit',
    ]
  },
  {
    id: 21,
    category: 'liebe',
    title: 'Schmerz in uns',
    date: '2025',
    bgImage: 'https://images.unsplash.com/photo-1484503793037-5c9644d6a966?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(8, 6, 12, 0.66)',
    accentColor: '#b06090',
    stanzas: [
      'Ich hab dir genug verzeiht,\ndaher kommt die beste Zeit.\nDen Albträumen zu entfliehen,\ndas ist alles, was mir bleibt.',
      'Deine Stimme liebe ich,\ndie in meinem Kopf zerbricht.\nDein Charakter, deine Augen,\nvergessen werd\' ich dich nicht.',
      'Und jetzt schau mir mal ins Augen,\nsiehst du nicht das stumme Leid?\nViele Tage sind vergangen,\nich trag Schmerz seit langer Zeit.',
      'Bitte Baby, sprich zu mir,\nwerd nicht sauer, werd nicht stumm.\nDerzeit suche ich Trost in dir,\nmeine Tränen fallen kur.',
      'Ich geh schlafen, ruh mich aus,\nalles kommt schon nimmer raus.\nMit dem Irrtum, mit der Angst\nfügst du mir nur Schaden aus.',
      'Ich werde verrückt nach dir,\ndu bist mir gefährlich nah.\nAuch wenn ich es nicht verdiene,\nwerd ich mächtig, das ist wahr.',
      'So versinke ich in Ruhe,\nin der Stille find ich mich.\nMeine Briefe sind erfolglos,\nich bedeute dir ja nichts.',
      'Magst du diese stille Stimme,\ndie in deinem Kopf verblasst?\nDein Charakter, dein Verhalten\nsind für mich nicht mehr die Last.',
      'Bitte, lass mich nun in Ruhe,\nich bin stark und steh allein.\nWas ich suchte, fand ich in mir,\nmein Bewusstsein ist jetzt mein.',
      'Schau mir tief ins Herz hinein,\nsiehst du nicht, ich bin jetzt frei?\nViele Tage sind vergangen,\nund der Schmerz, er zog vorbei.',
      'Leg mich hin, ganz ohne Zweifel,\ndenn dein Spiel ist längst vorbei.\nMit dem Wissen, was geschehen,\nbin ich endlich wieder frei.',
      'Jede Nacht wird jetzt zur Ruhe,\njeder Tag bringt neue Kraft.\nDein Misstrauen, deine Lügen\nhaben das hierher gebracht.',
      'Geh schon schlafen, denk nicht nach,\nalles zeigt sich in der Nacht.\nLass den Tag nun hinter dir,\nin der Stille ruht die Macht.',
    ]
  },

  // ══════════════════════════════════════════════════════════════
  //  SELBST & SEIN
  // ══════════════════════════════════════════════════════════════

  {
    id: 12,
    category: 'selbst',
    title: 'Wer ist ein Mensch',
    date: '2024',
    bgImage: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(8, 10, 14, 0.67)',
    accentColor: '#5c9ead',
    stanzas: [
      'Ich glaube nicht an Taten,\ngeschweige denn an Worte.\nMein Tick ist nicht vorhanden,\nIch fühle mich verloren.',
      'Diesen Weg ist noch zu warnen,\nda mit mir auszukommen.\nOhne, das jemals zu ahnen,\nspüre hier ich mich willkommen.',
    ]
  },
  {
    id: 13,
    category: 'selbst',
    title: 'Zustand',
    date: '2024',
    bgImage: 'https://images.unsplash.com/photo-1508739773434-c26b3d09e071?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(6, 6, 10, 0.68)',
    accentColor: '#888898',
    stanzas: [
      'Vollgesunken in meinem Kopf,\nmit verlorenem Verstand.\nTräume, denke ich, zu weit.\nMein Ungeheuer schweigt.',
      'Diese Sätze kosten nichts,\nkeine Trauer, keinen Schmerz und meine Zeit,\ndoch das hilft mir zu verstehen,\nob ich lebe und auf dieser Welt.',
    ]
  },
  {
    id: 14,
    category: 'selbst',
    title: 'Moder',
    date: '2024',
    bgImage: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(6, 10, 6, 0.66)',
    accentColor: '#7a9e7e',
    stanzas: [
      'Bestimmt tief in meinen Herzen\nfinde ich Trost von allen Seiten.\nDer Egoismus, den der Mensch empfindet,\nspiegelt sich auf seiner Stirn,\nund am Ende wird ihn das ergreifen.',
    ]
  },
  {
    id: 15,
    category: 'selbst',
    title: 'Du bist es nicht wert',
    date: '2024',
    bgImage: 'https://images.unsplash.com/photo-1470252649378-9c29740c9fa8?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(8, 6, 4, 0.65)',
    accentColor: '#c9a87c',
    stanzas: [
      'Obwohl ich eins auf Hundert bin\nund du auf eine ganze Million.',
      'Diskutieren werde ich nicht,\nich bin für dich ein schlichter Junge.\nIch werde gehen,\nohne Brücken anzuzünden.',
      'Ich bleibe entspannt,\ndenn du verdienst mich nicht.',
    ]
  },
  {
    id: 16,
    category: 'selbst',
    title: 'Mensch mit allen Sinnen',
    date: '2025',
    bgImage: 'https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(8, 8, 14, 0.66)',
    accentColor: '#c9a87c',
    stanzas: [
      'Ich bin der Mensch mit allen Sinnen.\nSo finde ich mir einen Weg nach Innen,\naus Liebe werde ich alles tun.',
      'Mein Kopf und Herz in Flammen werfen,\ndoch gib mir eine weitere Chance,\ndas in Leben zu entwerfen.',
    ]
  },
  {
    id: 17,
    category: 'selbst',
    title: 'Letzter Schritt',
    date: '2023',
    bgImage: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(4, 6, 10, 0.70)',
    accentColor: '#8090a0',
    stanzas: [
      'Die süße, frische Luft nachts atme ich ein,\ndie Kante eines Hauses lockt mich an,\nauf dem Sprung ins Neue freue ich mich im Voraus.',
    ]
  },
  {
    id: 23,
    category: 'selbst',
    title: 'Der Tausendste',
    date: '2026',
    bgImage: 'https://images.unsplash.com/photo-1532274402911-5a369e4c4bb5?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(6, 6, 14, 0.68)',
    accentColor: '#c08090',
    stanzas: [
      "Von tausend nur einer steht dir im Blut.\nSuch ihn. Die Stunde ist reif.\nKein Fremder trägt ihn fort. Er ruht\nin dir – und bleibt. Und greift.",
      "Graue Augen – Hafen, Nebel:\nSchiffshorn, Regen, Strandgeröll.\nIn diesen Wassern, die mich riefen,\nfand ich den, der mich hält – hell.",
      "Schwarze Augen – Feuer, Nacht:\nBrand und Kohle, Grund, kein Halt.\nIn dieser Asche stand er wieder –\nstumm, ein Siegel, ohne Spalt.",
      "Neunhundertneunundneunzig weichen,\nwenn Spott sie zerrt, Verachtung schindt.\nDoch einer tritt vor, wo die andern verwehen,\nträgt deinen Namen – löscht Schweigen im Wind.",
      "Blaue Augen – Eislaut, Ferne,\nWalzer, Nebel, Glasgeröll.\nIn diesen Höhen war sein Schweigen\ntiefer noch als ein Eid, der zeugt.",
      "Er hält zu dir, ob du stehst oder fällst.\nDie Welt mag dich hassen – er bleibt, der dich wählt.\nEr steigt in dein Dunkel, wo kein Licht mehr zählt,\ndass du nicht erstickst, wo die Tiefe dich quält.",
      "Braune Augen – Erde, Herbst:\nSteppe, Staub, ein wilder Ritt.\nIn diesen Furten trug er mich –\nmachte meinen Sturz zu seinem Schritt.",
      "Vier Farben, vier Tore, vier Male:\nGrau, Schwarz, Blau, Braun – in jedem Brand\ntrat er mir vor, in jeder Spirale,\nder Einzige, der mich verstand.",
      "Ich kenne sein Mal – in Augen,\ndie sahen, was keiner erträgt,\nstand er, unverrückt, ein Pfahl im Fall,\nder Tausendste:\n\nTreu.\nUnverzagt."
    ]
  },

  // ══════════════════════════════════════════════════════════════
  //  РУССКИЙ
  // ══════════════════════════════════════════════════════════════

  {
    id: 18,
    category: 'russisch',
    title: 'Предательство',
    date: '2018',
    bgImage: 'https://images.unsplash.com/photo-1491002052546-bf38f186af56?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(8, 10, 16, 0.67)',
    accentColor: '#7090c0',
    stanzas: [
      'Жизнь по сути только сахар,\nи иногда она перчит.\nИдя дальше, мы не замечаем,\nкак дорожка из-под соли\nнас всю жизнь слепит.',
      'Когда мы многое теряем,\nдаже веру в нас самих —\nэто кажется границей,\nи нам нечего уже терять.\nНо мы стоим и размышляем:\nкак они могли предать.',
    ]
  },
  {
    id: 22,
    category: 'russisch',
    title: 'В лабиринте дней',
    date: '2025',
    bgImage: 'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(6, 6, 14, 0.68)',
    accentColor: '#8090c0',
    stanzas: [
      'В моей голове туман и тьма,\nИщу себя, схожу с ума,\nВремя бежит, как дождь в ночи,\nКто я есть? Душа молчи...',
      'Дни проходят без следа,\nБоль в груди как всегда,\nСмотрю в зеркало — чужой,\nГде тот я, что был живой?',
      'Просыпаюсь с болью в груди,\nМысли кружат, сердце студит,\nКаждый день как тяжёлый камень,\nПадает вниз, разбивая память.',
      'Где тот парень, что верил в чудо?\nИсчез бесследно, растаял всюду,\nОсталась только пустота,\nИ бесконечная темнота.',
      'Любовь ушла, не оставила следа,\nТолько боль и холодная вода\nСлёз, что льются каждой ночью вновь,\nСмывают прочь мою любовь.',
      'Потерял себя в лабиринте дней,\nСтал рабом собственных теней,\nИщу дорогу к самому себе,\nВ бесконечной внутренней борьбе.',
      'Где мой мир? Где мой покой?\nПотерялся в битве с самим собой,\nКаждый день — это новый бой,\nКто я есть? Кто я такой?',
      'Дым сигарет и слёзы дождя,\nВремя мчится, не ждёт меня,\nМысли путаются, как толпа,\nГде же свет в конце тоннеля?',
      'Лица меняются день за днём,\nНо внутри остаётся огнём,\nИщу себя среди чужих масок,\nВ мире иллюзий и сказок.',
      'Освещаю дорогу без лишних слов,\nСобираю память своих снов.\nВ тишине ищу истинный покой,\nЧтобы стать самим собой.',
      'Система ломает, но я держусь,\nЗа мечты, за надежду борюсь,\nМожет завтра наступит рассвет,\nПринесёт перемен яркий свет.',
      'За фасадом счастливых лиц\nСкрываются тысячи убийц\nСобственных душ и чужих снов,\nМир построен на костях слов.',
      'Туман рассеется, я верю,\nНайду себя за этой дверью,\nВнутренний мир восстанет вновь,\nИ в сердце вспыхнет снова любовь.',
      'Буду ждать того дня,\nКогда найдёт покой меня,\nИ рассветёт в душе заря,\nКак в первый день января...',
    ]
  },

  // ══════════════════════════════════════════════════════════════
  //  ENGLISH
  // ══════════════════════════════════════════════════════════════

  {
    id: 19,
    category: 'englisch',
    title: 'Seasons',
    date: '2024',
    bgImage: 'https://images.unsplash.com/photo-1418985991508-e47386d96a71?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(6, 10, 8, 0.60)',
    accentColor: '#78b878',
    stanzas: [
      'In autumn\'s cool and crisp embrace,\nwe wandered through the leaves with grace.\nFrom dawn till dusk, our love was strong,\nas we walked the paths where we belong.',
      'We whispered softly in the night,\nthrough golden fields in gentle light.',
      'In winter\'s quiet, snowy fall,\nour love was warm, the best of all.\nFrom dawn till fire\'s glowing gleam,\nI felt such joy in every dream.',
      'The nights were long, my heart was light,\nin candle\'s glow, all felt so bright.\nI felt so free, with strength to strive,\nwinter brought joy, I felt so alive.',
      'In spring\'s soft light, the morning\'s hue,\nI dance alone, the night is new.\nFrom dawn till stars begin to shine,\nI find a life that\'s truly mine.',
      'With gentle steps, so soft and clear,\nthrough fields where breezes whisper near.\nNow farewell\'s come, the path is seen,\nin spring, I find my path serene.',
    ]
  },
  {
    id: 20,
    category: 'englisch',
    title: 'Better To Risk',
    date: '2025',
    bgImage: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=900&q=70&fit=crop',
    bgOverlay: 'rgba(8, 6, 12, 0.65)',
    accentColor: '#a070e0',
    stanzas: [
      'Risking is better than regretting,\nFalling is better than forgetting,\nTrying is better than wondering why —\nBetter to crash than never to fly.',
      'Better to break than stay unbroken,\nBetter to hurt than leave love unspoken,\nBetter to bleed than feel nothing at all —\nBetter to jump than fear the fall.',
      'She asked me: "Are you afraid of the end?"\nI said: "Only of roads I didn\'t bend,\nOnly of words I kept inside,\nOnly of moments when I didn\'t decide."',
      'Someday we\'ll find what we\'re looking for,\nor maybe not — maybe something more.\nMaybe the searching was always the key,\nmaybe the risk was meant to set us free.',
      'Love is when broken pieces become whole,\nwhen every scar becomes part of your soul,\nwhen fear of dying fades into light,\nbecause you loved with all your might.',
      'So risk it all, regret it never —\nsome moments burn, but burn forever.',
    ]
  },
];

export function getPoemsByCategory(category) {
  if (category === 'all') return POEMS;
  return POEMS.filter(p => p.category === category);
}

export function getPoemById(id) {
  return POEMS.find(p => p.id === id);
}

export function getCategoriesWithCounts() {
  return POEM_CATEGORIES.map(cat => ({
    ...cat,
    count: cat.id === 'all'
      ? POEMS.length
      : POEMS.filter(p => p.category === cat.id).length
  }));
}
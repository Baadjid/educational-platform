// data/renders-meta.js
// Nur Metadaten der 3D-Renderings – für schnelles Laden der Galerie
// Bilder werden separat geladen (Lazy Loading)

// Metadaten für jeden Render (ohne images-Array)
export const RENDERS_META = [
  { id: 1, title: 'Banana Protocol', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'csgo', resolution: '4K', description: 'CS:GO Sticker-Design in drei Farbvarianten mit stilisierter Komposition.', tags: ['Sticker', 'CS:GO', 'Surface Design'], artStationUrl: null },
  { id: 2, title: 'Hero Girl', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'masks', resolution: '4K', description: 'Anime-inspirierte Maske mit PBR-Lackierung und stilisierten Akzentlinien.', tags: ['Maske', 'Anime', 'Character Design'], artStationUrl: null },
  { id: 3, title: 'Damiur', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'masks', resolution: '4K', description: 'Dramatische Maske mit atmosphärischer Beleuchtung und mattem Metallic-Finish.', tags: ['Maske', 'Sculpting', 'PBR'], artStationUrl: null },
  { id: 4, title: 'Vanir', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'masks', resolution: '4K', description: 'Mystische Maske mit nordischer Ästhetik – vier Perspektiven, ein Charakter.', tags: ['Maske', 'Fantasy', 'Sculpting'], artStationUrl: null },
  { id: 5, title: 'Lesion Trap', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'tactical', resolution: '4K', description: 'Realistische Nachbildung der GU-Mine aus Rainbow Six Siege.', tags: ['R6', 'Game Asset', 'Hard Surface'], artStationUrl: null },
  { id: 6, title: 'Valkyrie Cam', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'tactical', resolution: '4K', description: 'Black Eye Kamera von Valkyrie – Hard Surface Modell mit anisotropem Metall.', tags: ['R6', 'Game Asset', 'Hard Surface'], artStationUrl: null },
  { id: 7, title: 'Christmas Girl', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'characters', resolution: '4K', description: 'Charakterstudie mit festlicher Atmosphäre, volumetrischem Schneefall und weichem Gegenlicht.', tags: ['Character Art', 'Atmosphäre', 'Volumetrik'], artStationUrl: null },
  { id: 8, title: 'Chair Study I', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Moderne Produktvisualisierung mit studioähnlicher Beleuchtung.', tags: ['Interior', 'Möbel', 'Product Viz'], artStationUrl: null },
  { id: 9, title: 'Chair Study II', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Elegante Sitzmöbel mit reflektierendem Boden und warmem Gegenlicht.', tags: ['Interior', 'Möbel', 'Lighting'], artStationUrl: null },
  { id: 10, title: 'Chair Study III', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Minimalistischer Kontext – Fokus auf Materialtreue und Schattenkomposition.', tags: ['Interior', 'Minimal', 'Product Viz'], artStationUrl: null },
  { id: 11, title: 'Chair Study IV', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Polstermöbel mit realistischer Faltenwurf-Simulation und strukturiertem Stoff.', tags: ['Interior', 'Cloth Sim', 'PBR'], artStationUrl: null },
  { id: 12, title: 'Chair Study V', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Designstuhl mit klaren Linien und matter Oberfläche.', tags: ['Interior', 'Möbel', 'Product Viz'], artStationUrl: null },
  { id: 13, title: 'Chair Study VI', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Schalenstuhl mit weicher Kurvenführung und metallischem Gestell.', tags: ['Interior', 'Möbel', 'Lighting'], artStationUrl: null },
  { id: 14, title: 'Chair Study VII', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Freischwinger mit Geflecht-Textur und warmem Studiolight.', tags: ['Interior', 'Möbel', 'PBR'], artStationUrl: null },
  { id: 15, title: 'Chair Study VIII', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Klassischer Holzstuhl mit natürlichen Materialien und weichem Schattenwurf.', tags: ['Interior', 'Möbel', 'Product Viz'], artStationUrl: null },
  { id: 16, title: 'Chair Study IX', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Loungesessel mit weicher Polsterung und organischer Silhouette.', tags: ['Interior', 'Möbel', 'Cloth Sim'], artStationUrl: null },
  { id: 17, title: 'Chair Study X', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Bürostuhl mit ergonomischer Form und reflektivem Kunststoffgehäuse.', tags: ['Interior', 'Möbel', 'PBR'], artStationUrl: null },
  { id: 18, title: 'Chair Study XI', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Schlichter Designstuhl mit Fokus auf Silhouette und Schattenspiel.', tags: ['Interior', 'Minimal', 'Lighting'], artStationUrl: null },
  { id: 19, title: 'Chair Study XII', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Retro-Designstuhl mit warmen Erdtönen und matter Lackierung.', tags: ['Interior', 'Möbel', 'Product Viz'], artStationUrl: null },
  { id: 20, title: 'Chair Study XIII', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Barstool-Variante mit Chromgestell und weichem Sitzpolster.', tags: ['Interior', 'Möbel', 'PBR'], artStationUrl: null },
  { id: 21, title: 'Chair Study XIV', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Wingchair-Studie mit reicher Tuch-Textur und antikem Charakter.', tags: ['Interior', 'Möbel', 'Cloth Sim'], artStationUrl: null },
  { id: 22, title: 'Chair Study XV', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Moderner Konferenzstuhl mit atmungsaktivem Netzrücken.', tags: ['Interior', 'Möbel', 'Product Viz'], artStationUrl: null },
  { id: 23, title: 'Chair Study XVI', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Holzstuhl mit Lederpolster – Handwerk trifft Minimalismus.', tags: ['Interior', 'Möbel', 'PBR'], artStationUrl: null },
  { id: 24, title: 'Chair Study XVII', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Skandinavischer Stuhl mit hellen Holztönen und schlanken Beinen.', tags: ['Interior', 'Minimal', 'Product Viz'], artStationUrl: null },
  { id: 25, title: 'Chair Study XVIII', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Schaukelstuhl mit weichem Sitzpolster und organischer Holzstruktur.', tags: ['Interior', 'Möbel', 'Cloth Sim'], artStationUrl: null },
  { id: 26, title: 'Vase Study I', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Keramikvase mit handwerklicher Glasur und warmem Lichtkonzept.', tags: ['Interior', 'Keramik', 'Product Viz'], artStationUrl: null },
  { id: 27, title: 'Vase Study II', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Organische Vase mit transluzenter Glasur – Spiel mit Licht und Transmission.', tags: ['Interior', 'Glas', 'PBR'], artStationUrl: null },
  { id: 28, title: 'Vase Study III', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Grobtonige Studiokeramik mit strukturierter Oberfläche und Gegenlicht.', tags: ['Interior', 'Keramik', 'Lighting'], artStationUrl: null },
  { id: 29, title: 'Kitchen Scene', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Stimmungsvolle Küchenszene mit PBR-Oberflächen und realistischem Tageslicht.', tags: ['Interior', 'Archviz', 'Lighting'], artStationUrl: null },
  { id: 30, title: 'Trunk', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Vintage-Truhe mit gealtertem Holz, Metallbeschlägen und Studiobeleuchtung.', tags: ['Interior', 'Möbel', 'PBR'], artStationUrl: null },
  { id: 31, title: 'Casino Scene', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'interior', resolution: '4K', description: 'Atmosphärische Casino-Szene mit Neonakzenten, Glaseffekten und dramatischer Beleuchtung.', tags: ['Interior', 'Atmosphäre', 'Neon'], artStationUrl: null },
  { id: 32, title: 'Outdoor Scene I', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'environments', resolution: '4K', description: 'Detailreiche Außenszene mit Vegetation, atmosphärischen Lichtstimmungen und Tiefenunschärfe.', tags: ['Environment', 'Nature', 'Atmosphäre'], artStationUrl: null },
  { id: 33, title: 'Outdoor Scene II', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'environments', resolution: '4K', description: 'Zweite Outdoor-Komposition mit veränderter Tageszeit und Lichtcharakter.', tags: ['Environment', 'Nature', 'Lighting'], artStationUrl: null },
  { id: 34, title: 'Mushroom Forest', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'environments', resolution: '4K', description: 'Fantasievolle Pilzlandschaft mit warmen Lichttönen und weichem Bokeh.', tags: ['Environment', 'Fantasy', 'Particles'], artStationUrl: null },
  { id: 35, title: 'Outdoor Scene IV', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'environments', resolution: '4K', description: 'Weitläufige Landschaft mit klarem Himmel und tiefer Raumwirkung.', tags: ['Environment', 'Landscape', 'Atmosphäre'], artStationUrl: null },
  { id: 36, title: 'Christmas Tree', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'environments', resolution: '4K', description: 'Weihnachtlicher Christbaum mit Lichterketten, Tiefenunschärfe und warmem Bokeh.', tags: ['Environment', 'Saisonal', 'Lighting'], artStationUrl: null },
  { id: 37, title: 'Kuno Koi', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'characters', resolution: '4K', description: 'Stilisierte Charakterstudie mit dekorativem Koi-Motiv und klaren Formen.', tags: ['Character Art', 'Stylized', 'Sculpting'], artStationUrl: null },
  { id: 38, title: 'Halloween Hat', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'fashion', resolution: '4K', description: 'Halloween-Hexenhut mit Stofffaltensimulation, Metallic-Schnalle und atmosphärischer Beleuchtung.', tags: ['Fashion', 'Props', 'Cloth Sim'], artStationUrl: null },
  { id: 39, title: 'Blade Study I', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'blades', resolution: '4K', description: 'Kurzes Klingenmodell mit polierten Anisotropiereflexen und graviertem Detail.', tags: ['Klingen', 'Hard Surface', 'PBR'], artStationUrl: null },
  { id: 40, title: 'Blade Study II', tool: 'Blender 4.0', engine: 'Cycles', date: '2025', category: 'blades', resolution: '4K', description: 'Langklinge mit historischem Vorbild – anisotropes Metall, gemaserter Griff.', tags: ['Klingen', 'Hard Surface', 'Anisotropy'], artStationUrl: null },
  { id: 41, title: 'KS Logo', tool: 'Blender 4.0', engine: 'EEVEE', date: '2025', category: 'intro', resolution: '4K', description: 'Logo-Animation mit 3D-Typografie, Lichtakzenten und dynamischen Kamerafahrten.', tags: ['Motion', 'Logo', 'Branding'], artStationUrl: null },
  { id: 42, title: 'Lava Whisper', tool: 'Blender 4.5', engine: 'Cycles', date: '2026', category: 'csgo', resolution: '4K', description: '„Lava Whisper“ – Ein custom CS:GO Glock‑Skin mit fließenden, glühenden Lava‑Adern.', tags: ['CS:GO', 'Weapon Skin', 'Custom Design','Glock'], artStationUrl: null },
  { id: 43, title: 'Ranking tags', tool: 'Blender 4.5', engine: 'Cycles', date: '2026', category: 'csgo', resolution: '4K', description: 'Eine detailgetreue 3D‑Replikation der CS:GO Rang‑Abzeichen', tags: ['CS:GO', 'UI Design', '3D Modeling'], artStationUrl: null },
];

// Kategorien bleiben gleich
export const RENDER_CATEGORIES = [
  { id: 'all',          label: 'Alle Werke'        },
  { id: 'interior',     label: 'Interior Design'   },
  { id: 'characters',   label: 'Character Art'     },
  { id: 'masks',        label: 'Masks & Sculpts'   },
  { id: 'tactical',     label: 'Tactical Props'    },
  { id: 'environments', label: 'Environments'      },
  { id: 'fashion',      label: 'Fashion & Apparel' },
  { id: 'blades',       label: 'Cold Steel'        },
  { id: 'intro',        label: 'Motion & Intros'   },
  { id: 'csgo',         label: 'CS:GO Integration' },
];

export function getRendersByCategory(category) {
  if (category === 'all') return RENDERS_META;
  return RENDERS_META.filter(r => r.category === category);
}

export function getRenderById(id) {
  return RENDERS_META.find(r => r.id === id);
}
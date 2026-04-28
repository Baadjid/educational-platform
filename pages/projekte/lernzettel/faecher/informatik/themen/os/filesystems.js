// pages/projekte/lernzettel/faecher/informatik/themen/os/filesystems.js
// Informatik 11.3 — Dateisysteme & I/O-Management

import { initScrollReveal } from '../../../../../../../shared/js/index.js';
import { footerHTML }        from '../../../../../../../components/Footer.js';
import { i18n }              from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }       from '../../../../../../../shared/js/wim-tabs.js';
import {
  ensureComponentsCSS, renderTags, renderInfobox, renderTable,
  renderAccordion, renderMerkboxGrid, renderFormulaBox, renderCompare,
  initInteractive,
} from '../../../../js/components/components.js';
import { COLOR, COLOR_RGB, BASE } from '../../informatik.js';

function renderPageNav({ prev, next }) {
  return `<nav class="lz-page-nav">
    ${prev ? `<button class="lz-page-nav-btn lz-page-nav-btn--prev" data-link="${prev.link}"><i class="fas fa-arrow-left"></i><span>${prev.label}</span></button>` : '<div></div>'}
    <button class="lz-page-nav-btn lz-page-nav-btn--up" data-link="${BASE}"><i class="fas fa-th-large"></i><span>Übersicht</span></button>
    ${next ? `<button class="lz-page-nav-btn lz-page-nav-btn--next" data-link="${next.link}"><span>${next.label}</span><i class="fas fa-arrow-right"></i></button>` : '<div></div>'}
  </nav>`;
}

const NAV = {
  prev: { label: '11.2 Speicherverwaltung', link: `${BASE}/themen/os/memory-management` },
  next: { label: '11.4 Virtualisierung', link: `${BASE}/themen/os/virtualization` },
};

const TABS = [
  { key: 'filesystems', label: '📁 Dateisysteme' },
  { key: 'inode',       label: '🗄 Inodes & Verzeichnisse' },
  { key: 'io',          label: '⚙ I/O-Management' },
  { key: 'uebungen',    label: '✏ Übungen' },
];

export default class FilesystemsPage {
  constructor(router) { this.router = router; }

  render() {
    ensureComponentsCSS();
    const el = document.createElement('div');
    el.className = 'page page-informatik-sub';
    if (!document.querySelector('link[href*="sub.css"]')) {
      const l = document.createElement('link'); l.rel = 'stylesheet';
      l.href = 'pages/projekte/lernzettel/styles/sub.css'; document.head.appendChild(l);
    }
    el.style.setProperty('--kap-color', COLOR); el.style.setProperty('--kap-color-rgb', COLOR_RGB);
    el.style.setProperty('--lz-accent', COLOR); el.style.setProperty('--lz-accent-rgb', COLOR_RGB);
    el.innerHTML = this._html(); return el;
  }

  _html() {
    return `
      <section class="lz-sub-hero">
        <div class="lz-sub-hero-orb" aria-hidden="true"></div>
        <div class="lz-sub-hero-inner">
          <nav class="lz-sub-breadcrumb">
            <button class="lz-bread-link" data-nav-link="/projekte/lernzettel">Lernzettel</button>
            <i class="fas fa-chevron-right"></i>
            <button class="lz-bread-link" data-nav-link="${BASE}">Informatik</button>
            <i class="fas fa-chevron-right"></i>
            <span>11.3 · Dateisysteme & I/O</span>
          </nav>
          <h1 class="lz-sub-title">Dateisysteme & I/O-Management</h1>
          <p class="lz-sub-subtitle">Dateisysteme (FAT, NTFS, ext4), Inodes, DMA, Festplatten‑Scheduling</p>
          ${renderTags(['Dateisystem', 'inode', 'ext4', 'NTFS', 'DMA', 'SCAN'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="fsTabs" aria-label="Dateisysteme">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelFilesystems()}
          ${this._panelInode()}
          ${this._panelIO()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelFilesystems() {
    return `<div class="wim-category active" data-wim-cat="filesystems">
      ${renderInfobox({ icon: 'fas fa-folder-open', title: 'Was macht ein Dateisystem?', type: 'info',
        body: `Ein Dateisystem organisiert Daten auf einem Speichermedium in einer hierarchischen Struktur aus
               Verzeichnissen und Dateien. Es verwaltet: Speicherblöcke, Metadaten (inode), Verzeichnisse, Zugriffsrechte.` })}
      ${renderTable({
        headers: ['Dateisystem', 'OS', 'Max. Dateigröße', 'Journaling', 'Besonderheit'],
        rows: [
          ['FAT32', 'Windows (alt)', '4 GB', 'Nein', 'Kompatibel, USB‑Sticks'],
          ['exFAT', 'Windows/macOS', '16 EB', 'Nein', 'USB ohne 4‑GB‑Limit'],
          ['NTFS', 'Windows', '16 EB', 'Ja', 'ACLs, Kompression, Verschlüsselung'],
          ['ext4', 'Linux', '16 TB', 'Ja', 'Standard für Linux'],
          ['XFS', 'Linux', '8 EB', 'Ja', 'Für große Dateien, Server'],
          ['APFS', 'macOS/iOS', '16 EB', 'Nein (Copy‑on‑Write)', 'Snapshots, Verschlüsselung'],
          ['ZFS', 'Linux/BSD', '256 ZB', 'Ja', 'RAID, Checksums, Snapshots'],
        ],
      })}
    </div>`;
  }

  _panelInode() {
    return `<div class="wim-category hidden" data-wim-cat="inode">
      <h3 class="lz-h3">Inodes – Metadaten einer Datei (Unix/ext4)</h3>
      ${renderInfobox({ icon: 'fas fa-info-circle', title: 'Die Inode enthält NICHT den Dateinamen', type: 'info',
        body: `Jede Datei hat eine eindeutige <strong>Inode‑Nummer</strong>. Die Inode speichert Metadaten und Zeiger auf die Datenblöcke.
               Der Dateiname steht im Verzeichnis, das ein Mapping (Name → Inode‑Nummer) enthält.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Inode (ext4, typisch 128‑256 Byte) enthält:
  - Dateityp (regulär, Verzeichnis, Symlink, Gerät)
  - Dateigröße (Bytes)
  - Besitzer (UID, GID)
  - Zugriffsrechte (rwxrwxrwx)
  - Timestamps (atime, mtime, ctime)
  - Anzahl Hard Links
  - Zeiger auf Datenblöcke (12 direkte, 1 einfach indirekt, 1 doppelt indirekt, 1 dreifach indirekt)

Verzeichnis = einfache Datei, die eine Liste von (Name, Inode‑Nummer) Paaren enthält.

Hard Link: Zwei Namen → gleiche Inode‑Nummer → gleiche Daten.
Soft Link (Symlink): Eigene Inode, zeigt auf Pfad (nicht auf Inode).
</pre>
      <h4 class="lz-h4">Datenblockzeiger (ext4)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Blockgröße typisch 4 KB.
  - 12 direkte Zeiger → 12 × 4 KB = 48 KB
  - Einfach indirekt: ein Block mit 1024 Zeigern (4 KB / 4 Byte) → 1024 × 4 KB = 4 MB
  - Doppelt indirekt: 1024 Zeiger auf einfach indirekte Blöcke → 1024 × 4 MB = 4 GB
  - Dreifach indirekt: 1024 Zeiger auf doppelt indirekte Blöcke → 1024 × 4 GB = 4 TB
→ Maximale Dateigröße ext4: 16 TB (praktisch durch 32‑Bit Begrenzung kleiner)
</pre>
    </div>`;
  }

  _panelIO() {
    return `<div class="wim-category hidden" data-wim-cat="io">
      <h3 class="lz-h3">I/O-Management – Ein‑/Ausgabe</h3>
      ${renderTable({
        headers: ['I/O‑Typ', 'Beschreibung', 'Anwendung'],
        rows: [
          ['Programmed I/O (Polling)', 'CPU fragt ständig ab, ob I/O fertig', 'Einfache µC, Debug'],
          ['Interrupt‑driven I/O', 'Gerät unterbricht CPU wenn fertig', 'Standard in Betriebssystemen'],
          ['DMA (Direct Memory Access)', 'Controller schreibt direkt in RAM, CPU frei', 'Massendatentransfer (Festplatten, Grafik)'],
          ['Memory‑Mapped I/O', 'Geräteregister im Adressraum wie RAM', 'x86, ARM (z.B. GPIO‑Register)'],
        ],
      })}
      <h4 class="lz-h4">Festplatten‑Scheduling (Rotierende Magnetspeicher)</h4>
      ${renderTable({
        headers: ['Algorithmus', 'Prinzip', 'Problem'],
        rows: [
          ['FCFS', 'Anfragen in Reihenfolge', 'Viel Kopfbewegung möglich'],
          ['SSTF (Shortest Seek Time First)', 'Nächste Spur zuerst', 'Verhungern weit entfernter Anfragen'],
          ['SCAN (Elevator)', 'Kopf fährt hin und her, bedient alle auf dem Weg', 'Gut, fair'],
          ['C‑SCAN', 'Nur eine Richtung, dann Sprung zum Anfang', 'Gleichmäßigere Wartezeit'],
          ['LOOK / C‑LOOK', 'Nur bis zur letzten Anfrage, nicht bis Ende', 'Effizienter als SCAN'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
DMA (Direct Memory Access):
  - DMA‑Controller übernimmt Datenübertragung zwischen Gerät und RAM.
  - CPU initialisiert Transfer (Startadresse, Länge) und kann andere Aufgaben erledigen.
  - Bei Fertig sendet DMA‑Controller einen Interrupt.
  - Beispiel: Festplattenlesen, Netzwerkkarten, Grafikkarten.
</pre>
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Erkläre den Unterschied zwischen einem Hard Link und einem Soft Link (Symlink).',
          content: `Hard Link: Zwei Verzeichniseinträge zeigen auf die gleiche Inode. Löschen eines Links entfernt nur den Eintrag; die Daten bleiben, bis der letzte Link gelöscht ist. Soft Link: Eigene Inode, speichert Pfad zum Ziel. Wenn das Ziel gelöscht wird, wird der Symlink "dangling". Hard Links funktionieren nicht über Dateisystemgrenzen hinweg.`,
        },
        {
          title: 'A2: Welche Vorteile bietet Journaling bei Dateisystemen (z.B. ext4, NTFS)?',
          content: `Journaling protokolliert Änderungen vor dem eigentlichen Schreiben. Bei Absturz kann das Dateisystem schneller wiederhergestellt werden, weil das Journal replays wird. Ohne Journaling wäre ein langer fsck (Dateisystemcheck) nötig.`,
        },
        {
          title: 'A3: Erkläre das Prinzip von DMA.',
          content: `DMA ermöglicht es Peripheriegeräten, direkt auf den Hauptspeicher zuzugreifen, ohne die CPU zu belasten. Die CPU initiiert den Transfer (Startadresse, Länge) und wird per Interrupt benachrichtigt, wenn der Transfer abgeschlossen ist. Dadurch kann die CPU parallel andere Aufgaben ausführen.`,
        },
        {
          title: 'A4: Anfragen: Spur 50, 100, 20, 150, 30. Kopf bei 50. Berechne die Gesamtbewegung für FCFS, SSTF und SCAN (Richtung aufwärts, Ende 199).',
          content: `FCFS: 50→50(0) →100(50) →20(80) →150(130) →30(120) = 380? Besser: |50-50|=0, |100-50|=50, |20-100|=80, |150-20|=130, |30-150|=120 → Summe 380.<br>
          SSTF: 50→50(0) →100(50) →30(70) →20(10) →150(130) = 260.<br>
          SCAN (aufwärts): 50→100(50) →150(50) →199(49) →30(169) →20(10) = 328.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Dateisysteme & I/O für die Prüfung', type: 'success',
        body: `• Dateisysteme: FAT32, NTFS, ext4 – Eigenschaften.<br>
               • Inode: Metadaten + Blockzeiger, kein Dateiname.<br>
               • Hard Link vs. Soft Link.<br>
               • I/O: Polling, Interrupt, DMA.<br>
               • Festplatten‑Scheduling: FCFS, SSTF, SCAN, C‑SCAN.` })}
    </div>`;
  }

  init() {
    i18n.init(); initScrollReveal();
    initInteractive(document.querySelector('.page-informatik-sub'));
    document.querySelectorAll('[data-nav-link]').forEach(btn => {
      btn.addEventListener('click', () => { if (btn.dataset.navLink) window.location.hash = btn.dataset.navLink; });
    });
    initWimTabs(document);
  }
}
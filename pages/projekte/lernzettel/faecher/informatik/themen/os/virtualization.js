// pages/projekte/lernzettel/faecher/informatik/themen/os/virtualization.js
// Informatik 11.4 — Virtualisierung (KVM, Docker, Kubernetes)

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
  prev: { label: '11.3 Dateisysteme', link: `${BASE}/themen/os/filesystems` },
  next: { label: '12.1 Automatentheorie', link: `${BASE}/themen/theoinf/automaten` },
};

const TABS = [
  { key: 'vms',         label: '💻 Virtuelle Maschinen (KVM)' },
  { key: 'container',   label: '📦 Container (Docker)' },
  { key: 'orchestration', label: '🚢 Orchestrierung (Kubernetes)' },
  { key: 'uebungen',    label: '✏ Übungen' },
];

export default class VirtualizationPage {
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
            <span>11.4 · Virtualisierung</span>
          </nav>
          <h1 class="lz-sub-title">Virtualisierung: KVM, Docker & Kubernetes</h1>
          <p class="lz-sub-subtitle">VMs vs. Container, Hypervisor, Namespaces, cgroups, K8s‑Objekte</p>
          ${renderTags(['Virtualisierung', 'KVM', 'Docker', 'Kubernetes', 'Hypervisor', 'Container'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="virtTabs" aria-label="Virtualisierung">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelVMs()}
          ${this._panelContainer()}
          ${this._panelOrchestration()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelVMs() {
    return `<div class="wim-category active" data-wim-cat="vms">
      ${renderInfobox({ icon: 'fas fa-server', title: 'Virtuelle Maschinen (VMs)', type: 'info',
        body: `Eine VM emuliert einen vollständigen Computer mit eigenem Betriebssystem.
               Der <strong>Hypervisor</strong> verwaltet die VMs und teilt die Hardware.
               Typen: <strong>Typ 1 (Bare Metal)</strong> läuft direkt auf Hardware (KVM, ESXi, Hyper‑V).
               <strong>Typ 2 (Hosted)</strong> läuft auf Host‑OS (VirtualBox, VMware Workstation).` })}
      ${renderTable({
        headers: ['Hypervisor‑Typ', 'Beschreibung', 'Vertreter'],
        rows: [
          ['Typ 1 (Bare Metal)', 'Direkt auf Hardware, kein Host‑OS, bessere Performance', 'KVM, VMware ESXi, Xen, Microsoft Hyper‑V'],
          ['Typ 2 (Hosted)', 'Läuft als Anwendung auf Host‑OS', 'VirtualBox, VMware Workstation, QEMU (User Mode)'],
        ],
      })}
      <h4 class="lz-h4">KVM – Kernel‑based Virtual Machine (Linux)</h4>
      <p class="lz-prose">
        KVM ist eine Open‑Source Virtualisierungslösung, die in den Linux‑Kernel integriert ist.
        Nutzt Hardware‑Virtualisierung (Intel VT‑x / AMD‑V). Jede VM ist ein Linux‑Prozess.
        Wird oft mit <strong>libvirt</strong> und <strong>virt‑manager</strong> verwaltet.
      </p>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
KVM‑Architektur:
┌─────────────────────────────────────┐
│          Gast‑OS (VM)               │
├─────────────────────────────────────┤
│         QEMU (Emulation)            │
├─────────────────────────────────────┤
│     KVM Kernelmodul (kvm.ko)        │
├─────────────────────────────────────┤
│         Linux‑Kernel + Hardware     │
└─────────────────────────────────────┘

Beispielbefehle:
  virsh list --all
  virsh start vm-name
  virt-install --name vm --ram 2048 --disk size=10 --cdrom iso.iso
</pre>
    </div>`;
  }

  _panelContainer() {
    return `<div class="wim-category hidden" data-wim-cat="container">
      <h3 class="lz-h3">Container – Leichtgewichtige Virtualisierung</h3>
      ${renderCompare({
        titleA: '🖥 Virtuelle Maschine (VM)',
        titleB: '📦 Container',
        listA: [
          'Vollständiges Gast‑OS pro VM',
          'Starke Isolation (eigener Kernel)',
          'GB groß, Minuten zum Starten',
          'Hypervisor (KVM, VMware)',
          'Ideal für verschiedene OS',
        ],
        listB: [
          'Teilen sich Host‑Kernel',
          'Prozess‑Isolation (Namespaces, cgroups)',
          'MB groß, Sekunden zum Starten',
          'Container‑Runtime (Docker, containerd)',
          'Ideal für Microservices',
        ],
      })}
      <h4 class="lz-h4">Linux‑Kernel‑Features für Container</h4>
      ${renderTable({
        headers: ['Feature', 'Funktion'],
        rows: [
          ['Namespaces', 'Isolieren Prozessressourcen (PID, Netzwerk, Mount, UTS, IPC, User)'],
          ['cgroups (Control Groups)', 'Begrenzen CPU, RAM, I/O pro Container'],
          ['Union Filesystem (overlay2)', 'Copy‑on‑Write Dateisystem für Images und Container'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
Docker‑Architektur:
  Dockerfile → Image (Schichten) → Container (laufende Instanz)

Docker‑Befehle:
  docker build -t myapp:1.0 .      # Image aus Dockerfile bauen
  docker run -d -p 80:3000 myapp:1.0  # Container starten
  docker ps                         # laufende Container
  docker stop <id>                  # Container stoppen
  docker push myuser/myapp:1.0     # Image in Registry hochladen (Docker Hub)
</pre>
    </div>`;
  }

  _panelOrchestration() {
    return `<div class="wim-category hidden" data-wim-cat="orchestration">
      <h3 class="lz-h3">Kubernetes – Container‑Orchestrierung</h3>
      ${renderInfobox({ icon: 'fas fa-ship', title: 'Automatisierung von Deployment, Skalierung, Selbstheilung', type: 'info',
        body: `Kubernetes (K8s) verwaltet Container‑Cluster. Es stellt sicher, dass die gewünschte Anzahl von Pods läuft,
               führt Rolling Updates durch, skaliert bei Last und startet ausgefallene Container neu.` })}
      ${renderTable({
        headers: ['K8s‑Objekt', 'Beschreibung'],
        rows: [
          ['Pod', 'Kleinste Einheit: 1+ Container mit shared Netzwerk/Speicher'],
          ['Deployment', 'Gewünschter Zustand für Pods (replicas, rolling update)'],
          ['Service', 'Stabiler Endpunkt für Pods (ClusterIP, NodePort, LoadBalancer)'],
          ['Ingress', 'HTTP‑Routing von außen in den Cluster'],
          ['ConfigMap / Secret', 'Konfiguration und Geheimnisse außerhalb von Containern'],
          ['PersistentVolume (PV) / PersistentVolumeClaim (PVC)', 'Persistenter Speicher (Datenbanken, Logs)'],
          ['Namespace', 'Logische Trennung im Cluster (z.B. für verschiedene Umgebungen)'],
          ['Horizontal Pod Autoscaler (HPA)', 'Automatische Skalierung basierend auf CPU/Memory'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
kubectl Befehle:
  kubectl get nodes               # Cluster‑Knoten anzeigen
  kubectl get pods                # Pods im aktuellen Namespace
  kubectl apply -f deployment.yaml # Konfiguration anwenden
  kubectl scale deployment myapp --replicas=5  # Skalieren
  kubectl logs pod-name           # Logs eines Pods anzeigen
</pre>
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Erkläre den Unterschied zwischen Typ‑1 und Typ‑2 Hypervisor.',
          content: `Typ‑1 (Bare Metal): Läuft direkt auf Hardware, kein Host‑OS, bessere Performance (KVM, ESXi). Typ‑2 (Hosted): Läuft als Anwendung auf einem Host‑OS (VirtualBox, VMware Workstation).`,
        },
        {
          title: 'A2: Welche Linux‑Kernel‑Features sind Grundlage für Container?',
          content: `Namespaces (Isolation von Prozessen, Netzwerk, Dateisystem) und cgroups (Begrenzung von Ressourcen wie CPU, RAM).`,
        },
        {
          title: 'A3: Was ist der Unterschied zwischen einem Docker‑Image und einem Container?',
          content: `Ein Image ist eine schreibgeschützte Vorlage (z.B. mit OS und Anwendung). Ein Container ist eine laufende Instanz eines Images mit einer beschreibbaren Schicht.`,
        },
        {
          title: 'A4: Nenne drei Kubernetes‑Objekte und ihre Aufgaben.',
          content: `• <strong>Pod:</strong> Kleinste Einheit, enthält einen oder mehrere Container.<br>
          • <strong>Deployment:</strong> Verwaltet Replikate und Updates von Pods.<br>
          • <strong>Service:</strong> Bietet stabilen Netzwerkendpunkt für Pods (Lastverteilung).`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'Virtualisierung für die Prüfung', type: 'success',
        body: `• VM: Vollständiges Gast‑OS, Hypervisor (Typ 1/2), KVM.<br>
               • Container: Leichtgewicht, teilen Host‑Kernel, Namespaces/cgroups, Docker.<br>
               • Kubernetes: Orchestrierung von Containern (Pods, Deployments, Services).<br>
               • VM vs. Container: Isolation vs. Effizienz.` })}
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
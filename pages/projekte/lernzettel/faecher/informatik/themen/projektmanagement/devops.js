// pages/projekte/lernzettel/faecher/informatik/themen/projektmanagement/devops.js
// Informatik 10.3 — DevOps, CI/CD, Testautomatisierung, Container

import { initScrollReveal }  from '../../../../../../../shared/js/index.js';
import { footerHTML }         from '../../../../../../../components/Footer.js';
import { i18n }               from '../../../../../../../shared/js/i18n.js';
import { initWimTabs }        from '../../../../../../../shared/js/wim-tabs.js';
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
  prev: { label: '10.2 Qualitätssicherung', link: `${BASE}/themen/projektmanagement/qualitaetssicherung` },
  next: { label: '11.1 Prozesse & Scheduling', link: `${BASE}/themen/os/processes` },
};

const TABS = [
  { key: 'devops',     label: '♾ DevOps & CI/CD' },
  { key: 'docker',     label: '🐳 Container (Docker)' },
  { key: 'kubernetes', label: '🚢 Kubernetes & Orchestrierung' },
  { key: 'uebungen',   label: '✏ Übungen' },
];

export default class DevOpsPage {
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
            <span>10.3 · DevOps</span>
          </nav>
          <h1 class="lz-sub-title">DevOps, CI/CD & Container</h1>
          <p class="lz-sub-subtitle">Continuous Integration, Continuous Deployment, Docker, Kubernetes</p>
          ${renderTags(['DevOps', 'CI/CD', 'Docker', 'Kubernetes', 'GitHub Actions', 'Container'])}
        </div>
      </section>
      <section class="lz-content-section">
        <div class="lz-section-wrap">
          <nav class="wim-tabs" id="devopsTabs" aria-label="DevOps">
            ${TABS.map((t, i) => `<button class="wim-tab${i === 0 ? ' active' : ''}" data-wim="${t.key}">${t.label}</button>`).join('')}
          </nav>
          ${this._panelDevOps()}
          ${this._panelDocker()}
          ${this._panelKubernetes()}
          ${this._panelUebungen()}
        </div>
      </section>
      <section class="lz-content-section" style="padding-top:0;">
        <div class="lz-section-wrap">${renderPageNav(NAV)}</div>
      </section>
      ${footerHTML(this.router)}`;
  }

  _panelDevOps() {
    return `<div class="wim-category active" data-wim-cat="devops">
      ${renderInfobox({ icon: 'fas fa-infinity', title: 'Was ist DevOps?', type: 'info',
        body: `DevOps (Development + Operations) ist eine <strong>Kultur und Praxis</strong>, die Entwicklung und Betrieb zusammenbringt.
               Ziel: schnellere, zuverlässigere Software‑Auslieferung durch Automatisierung, Zusammenarbeit und kontinuierliches Feedback.` })}
      <h4 class="lz-h4">DevOps‑Lebenszyklus (Infinite Loop)</h4>
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
PLAN → CODE → BUILD → TEST → RELEASE → DEPLOY → OPERATE → MONITOR
  ↑                                                              │
  └──────────────── Feedback & Verbesserung ─────────────────────┘

Wichtige Metriken (DORA):
  - Deployment Frequency (Ziel: täglich/mehrmals täglich)
  - Lead Time for Changes (Ziel: < 1 Tag)
  - Change Failure Rate (Ziel: < 5%)
  - Mean Time to Restore (Ziel: < 1 Stunde)
</pre>
      <h4 class="lz-h4">CI/CD Pipeline</h4>
      ${renderTable({
        headers: ['Konzept', 'Beschreibung'],
        rows: [
          ['Continuous Integration (CI)', 'Jeder Code‑Push → automatisch bauen + testen'],
          ['Continuous Delivery (CD)', 'CI + Release‑Paket ist jederzeit deploybar'],
          ['Continuous Deployment', 'CI/CD + automatisches Deployment ohne manuellen Schritt'],
          ['Infrastructure as Code (IaC)', 'Server‑Konfiguration als Code (Terraform, Ansible)'],
          ['GitOps', 'Git als "Single Source of Truth" für Infrastruktur'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
GitHub Actions Pipeline (.github/workflows/ci.yml):
name: CI/CD Pipeline
on: [push]

jobs:
  build-test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - name: Install dependencies
        run: npm ci
      - name: Run tests
        run: npm test
      - name: Build Docker Image
        run: docker build -t my-app:${ github.sha } .
      - name: Deploy to Production
        if: github.ref == 'refs/heads/main'
        run: kubectl set image deploy/my-app app=my-app:${ github.sha }
</pre>
    </div>`;
  }

  _panelDocker() {
    return `<div class="wim-category hidden" data-wim-cat="docker">
      <h3 class="lz-h3">Docker – Containerisierung</h3>
      ${renderInfobox({ icon: 'fas fa-cube', title: 'Container vs. VM', type: 'info',
        body: `Container teilen sich den Host‑Kernel, sind leichtgewichtig (MB statt GB), starten in Sekunden.
               VMs haben einen eigenen Gast‑Kernel, sind schwerer, isolieren stärker. Docker ist der De‑facto‑Standard für Container.` })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
# Dockerfile für eine Node.js‑App
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
EXPOSE 3000
CMD ["node", "server.js"]

# Image bauen und starten
docker build -t my-app:1.0 .
docker run -p 3000:3000 my-app:1.0

# docker-compose.yml (mehrere Services)
version: '3'
services:
  app:
    build: .
    ports: ["3000:3000"]
    depends_on: [db]
  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: secret
</pre>
      ${renderTable({
        headers: ['Docker‑Befehl', 'Funktion'],
        rows: [
          ['docker build -t name .', 'Baut Image aus Dockerfile'],
          ['docker run -p 8080:80 name', 'Startet Container, mapped Ports'],
          ['docker ps', 'Listet laufende Container'],
          ['docker stop <id>', 'Stoppt Container'],
          ['docker rm <id>', 'Löscht Container'],
          ['docker rmi <image>', 'Löscht Image'],
          ['docker-compose up -d', 'Startet alle Services aus compose'],
        ],
      })}
    </div>`;
  }

  _panelKubernetes() {
    return `<div class="wim-category hidden" data-wim-cat="kubernetes">
      <h3 class="lz-h3">Kubernetes (K8s) – Container‑Orchestrierung</h3>
      ${renderInfobox({ icon: 'fas fa-ship', title: 'Verwaltung von Container‑Clustern', type: 'info',
        body: `Kubernetes automatisiert: Deployment, Skalierung, Selbstheilung, Load Balancing.
               Ein <strong>Cluster</strong> besteht aus <strong>Nodes</strong> (Server). Die kleinste Einheit ist der <strong>Pod</strong> (1+ Container).` })}
      ${renderTable({
        headers: ['K8s‑Objekt', 'Beschreibung'],
        rows: [
          ['Pod', 'Kleinste Einheit: 1+ Container mit shared Netzwerk/Speicher'],
          ['Deployment', 'Gewünschter Zustand für Pods (replicas, rolling update)'],
          ['Service', 'Stabiler Endpunkt für Pods (ClusterIP, NodePort, LoadBalancer)'],
          ['Ingress', 'HTTP‑Routing von außen in den Cluster'],
          ['ConfigMap / Secret', 'Konfiguration und Geheimnisse außerhalb von Containern'],
          ['PersistentVolume', 'Persistenter Speicher (Datenbank, Logs)'],
          ['Namespace', 'Logische Trennung im Cluster'],
        ],
      })}
      <pre style="background:var(--bg-code,#1e293b);color:#e2e8f0;padding:0.8rem;border-radius:8px;font-family:monospace;">
# deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: my-app
spec:
  replicas: 3
  selector:
    matchLabels:
      app: my-app
  template:
    metadata:
      labels:
        app: my-app
    spec:
      containers:
      - name: app
        image: my-app:1.0
        ports:
        - containerPort: 3000
---
apiVersion: v1
kind: Service
metadata:
  name: my-app-service
spec:
  selector:
    app: my-app
  ports:
    - port: 80
      targetPort: 3000
  type: LoadBalancer

# Anwenden: kubectl apply -f deployment.yaml
</pre>
      ${renderCompare({
        titleA: 'Docker (Single Host)',
        titleB: 'Kubernetes (Cluster)',
        listA: [
          'Container auf einem Host',
          'Manuelles Skalieren',
          'Keine automatische Selbstheilung',
          'Einfach für Entwicklung',
        ],
        listB: [
          'Verteilt auf viele Nodes',
          'Automatische Skalierung (Horizontal Pod Autoscaler)',
          'Startet ausgefallene Pods neu',
          'Für Produktionsumgebungen',
        ],
      })}
    </div>`;
  }

  _panelUebungen() {
    return `<div class="wim-category hidden" data-wim-cat="uebungen">
      <h3 class="lz-h3">Übungsaufgaben</h3>
      ${renderAccordion([
        {
          title: 'A1: Erkläre den Unterschied zwischen Continuous Delivery und Continuous Deployment.',
          content: `Continuous Delivery: Nach erfolgreichem CI ist das Release‑Paket jederzeit deploybar, aber der Deployment‑Schritt ist manuell.
          Continuous Deployment: Jeder erfolgreiche CI‑Durchlauf führt automatisch zu einem Deployment in Produktion.`,
        },
        {
          title: 'A2: Was ist der Vorteil eines Containers gegenüber einer virtuellen Maschine?',
          content: `Container sind leichter (teilen Host‑Kernel), starten in Sekunden, benötigen weniger RAM/CPU. VMs haben einen eigenen Kernel und sind schwerer, aber isolieren stärker.`,
        },
        {
          title: 'A3: Nenne drei Kubernetes‑Objekte und beschreibe ihre Funktion.',
          content: `• <strong>Pod:</strong> Kleinste Einheit, enthält Container.<br>
          • <strong>Deployment:</strong> Verwaltet Replikate und Updates.<br>
          • <strong>Service:</strong> Bietet stabilen Netzwerkendpunkt für Pods.`,
        },
        {
          title: 'A4: Was ist Infrastructure as Code (IaC)? Nenne ein Beispiel.',
          content: `IaC bedeutet, dass Server‑Konfiguration und Infrastruktur als Code (in Dateien) definiert werden.
          Beispiele: Terraform, AWS CloudFormation, Ansible. Vorteile: Versionierbar, reproduzierbar, automatisierbar.`,
        },
      ])}
      ${renderInfobox({ icon: 'fas fa-graduation-cap', title: 'DevOps & CI/CD für die Prüfung', type: 'success',
        body: `• DevOps: Entwicklung + Betrieb, Automatisierung, DORA‑Metriken.<br>
               • CI/CD Pipeline: Build, Test, Deploy – automatisiert.<br>
               • Docker: Container, Images, Dockerfile, docker‑compose.<br>
               • Kubernetes: Pods, Deployments, Services, Skalierung.<br>
               • Infrastructure as Code (Terraform, Ansible).` })}
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
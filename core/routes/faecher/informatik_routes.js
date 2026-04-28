// core/routes/faecher/informatik_routes.js

export const INFORMATIK_TITLE_KEYS = {
  '/projekte/lernzettel/faecher/informatik': 'page.title.lz.informatik',

  // Kapitel 1 – Digitaltechnik & Grundlagen
  '/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/zahlensysteme': 'page.title.lz.informatik.zahlensysteme',
  '/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/schaltnetze': 'page.title.lz.informatik.schaltnetze',
  '/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/flipflops-schaltwerke': 'page.title.lz.informatik.flipflops',
  '/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/zustandsdiagramme': 'page.title.lz.informatik.zustandsdiagramme',
  '/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/vhdl-fpga': 'page.title.lz.informatik.vhdl',

  // Kapitel 2 – Mikrocontroller-Architektur & Assembler
  '/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/architektur': 'page.title.lz.informatik.architektur',
  '/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/speicher-bus': 'page.title.lz.informatik.speicher',
  '/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/interrupts-timer': 'page.title.lz.informatik.interrupts',
  '/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/polling-interrupt': 'page.title.lz.informatik.polling',
  '/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/assembler': 'page.title.lz.informatik.assembler',
  '/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/pipelining-cache': 'page.title.lz.informatik.pipelining',

  // Kapitel 3 – Hardware-Schnittstellen & Peripherie
  '/projekte/lernzettel/faecher/informatik/themen/schnittstellen/gpio': 'page.title.lz.informatik.gpio',
  '/projekte/lernzettel/faecher/informatik/themen/schnittstellen/adc-dac': 'page.title.lz.informatik.adc',
  '/projekte/lernzettel/faecher/informatik/themen/schnittstellen/pwm': 'page.title.lz.informatik.pwm',
  '/projekte/lernzettel/faecher/informatik/themen/schnittstellen/spi-i2c-uart': 'page.title.lz.informatik.spi',
  '/projekte/lernzettel/faecher/informatik/themen/schnittstellen/usb-can': 'page.title.lz.informatik.usb',

  // Kapitel 4 – Programmierung
  '/projekte/lernzettel/faecher/informatik/themen/programmierung/grundlagen': 'page.title.lz.informatik.grundlagen',
  '/projekte/lernzettel/faecher/informatik/themen/programmierung/algorithmen': 'page.title.lz.informatik.algorithmen',
  '/projekte/lernzettel/faecher/informatik/themen/programmierung/struktogramme': 'page.title.lz.informatik.struktogramme',
  '/projekte/lernzettel/faecher/informatik/themen/programmierung/datenstrukturen': 'page.title.lz.informatik.datenstrukturen',
  '/projekte/lernzettel/faecher/informatik/themen/programmierung/dynamische-datenstrukturen': 'page.title.lz.informatik.dynstrukturen',
  '/projekte/lernzettel/faecher/informatik/themen/programmierung/design-patterns': 'page.title.lz.informatik.patterns',

  // Kapitel 5 – Objektorientierter Entwurf
  '/projekte/lernzettel/faecher/informatik/themen/oop/klassen-objekte': 'page.title.lz.informatik.klassen',
  '/projekte/lernzettel/faecher/informatik/themen/oop/vererbung-polymorphie': 'page.title.lz.informatik.vererbung',
  '/projekte/lernzettel/faecher/informatik/themen/oop/uml': 'page.title.lz.informatik.uml',
  '/projekte/lernzettel/faecher/informatik/themen/oop/solid': 'page.title.lz.informatik.solid',

  // Kapitel 6 – Vernetzte Systeme & Sicherheit
  '/projekte/lernzettel/faecher/informatik/themen/netzwerke/osi-tcpip': 'page.title.lz.informatik.osi',
  '/projekte/lernzettel/faecher/informatik/themen/netzwerke/ip-subnetting': 'page.title.lz.informatik.subnetting',
  '/projekte/lernzettel/faecher/informatik/themen/netzwerke/routing': 'page.title.lz.informatik.routing',
  '/projekte/lernzettel/faecher/informatik/themen/netzwerke/protokolle': 'page.title.lz.informatik.protokolle',
  '/projekte/lernzettel/faecher/informatik/themen/netzwerke/sicherheit': 'page.title.lz.informatik.netsicherheit',
  '/projekte/lernzettel/faecher/informatik/themen/netzwerke/advanced-networking': 'page.title.lz.informatik.adv_networking',

  // Kapitel 7 – Internet der Dinge (IoT)
  '/projekte/lernzettel/faecher/informatik/themen/iot/mqtt': 'page.title.lz.informatik.mqtt',
  '/projekte/lernzettel/faecher/informatik/themen/iot/sensoren-aktoren': 'page.title.lz.informatik.sensoren',
  '/projekte/lernzettel/faecher/informatik/themen/iot/advanced-iot': 'page.title.lz.informatik.adv_iot',

  // Kapitel 8 – Datenbanksysteme
  '/projekte/lernzettel/faecher/informatik/themen/datenbanken/er-modell': 'page.title.lz.informatik.ermodell',
  '/projekte/lernzettel/faecher/informatik/themen/datenbanken/sql': 'page.title.lz.informatik.sql',
  '/projekte/lernzettel/faecher/informatik/themen/datenbanken/advanced-db': 'page.title.lz.informatik.adv_db',

  // Kapitel 9 – Künstliche Intelligenz
  '/projekte/lernzettel/faecher/informatik/themen/ki/suchalgorithmen': 'page.title.lz.informatik.suchalg',
  '/projekte/lernzettel/faecher/informatik/themen/ki/ml-knn-kmeans': 'page.title.lz.informatik.knn',
  '/projekte/lernzettel/faecher/informatik/themen/ki/neuronale-netze': 'page.title.lz.informatik.neuronale',
  '/projekte/lernzettel/faecher/informatik/themen/ki/decision-trees': 'page.title.lz.informatik.decision_trees',
  '/projekte/lernzettel/faecher/informatik/themen/ki/deep-learning': 'page.title.lz.informatik.deep_learning',
  '/projekte/lernzettel/faecher/informatik/themen/ki/advanced-ai': 'page.title.lz.informatik.adv_ai',

  // Kapitel 10 – Projektmanagement & Qualitätssicherung
  '/projekte/lernzettel/faecher/informatik/themen/projektmanagement/scrum': 'page.title.lz.informatik.scrum',
  '/projekte/lernzettel/faecher/informatik/themen/projektmanagement/qualitaetssicherung': 'page.title.lz.informatik.qs',
  '/projekte/lernzettel/faecher/informatik/themen/projektmanagement/devops': 'page.title.lz.informatik.devops',

  // Kapitel 11 – Betriebssysteme & Virtualisierung
  '/projekte/lernzettel/faecher/informatik/themen/os/processes': 'page.title.lz.informatik.prozesse',
  '/projekte/lernzettel/faecher/informatik/themen/os/memory-management': 'page.title.lz.informatik.speicherverwaltung',
  '/projekte/lernzettel/faecher/informatik/themen/os/filesystems': 'page.title.lz.informatik.dateisysteme',
  '/projekte/lernzettel/faecher/informatik/themen/os/virtualization': 'page.title.lz.informatik.virtualisierung',

  // Kapitel 12 – Theoretische Informatik
  '/projekte/lernzettel/faecher/informatik/themen/theoinf/automaten': 'page.title.lz.informatik.automaten',
  '/projekte/lernzettel/faecher/informatik/themen/theoinf/complexity': 'page.title.lz.informatik.komplexitaet',
  '/projekte/lernzettel/faecher/informatik/themen/theoinf/formal-languages': 'page.title.lz.informatik.formale_sprachen',

  // Kapitel 13 – IT-Sicherheit & Kryptographie
  '/projekte/lernzettel/faecher/informatik/themen/security/cryptography': 'page.title.lz.informatik.krypto',
  '/projekte/lernzettel/faecher/informatik/themen/security/hash-pki': 'page.title.lz.informatik.hash_pki',
  '/projekte/lernzettel/faecher/informatik/themen/security/attacks-defense': 'page.title.lz.informatik.angriffe',

  // Kapitel 14 – Computergrafik & Bildverarbeitung
  '/projekte/lernzettel/faecher/informatik/themen/grafik/3d-modelling': 'page.title.lz.informatik.grafik_3d',
  '/projekte/lernzettel/faecher/informatik/themen/grafik/image-processing': 'page.title.lz.informatik.bildverarbeitung',
};

export const INFORMATIK_ROUTES = {
  '/projekte/lernzettel/faecher/informatik': () => import('../../../pages/projekte/lernzettel/faecher/informatik/informatik.js'),

  // Kapitel 1 – Digitaltechnik & Grundlagen
  '/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/zahlensysteme': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/zahlensysteme.js'),
  '/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/schaltnetze': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/schaltnetze.js'),
  '/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/flipflops-schaltwerke': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/flipflops-schaltwerke.js'),
  '/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/zustandsdiagramme': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/zustandsdiagramme.js'),
  '/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/vhdl-fpga': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/digitaltechnik/vhdl-fpga.js'),

  // Kapitel 2 – Mikrocontroller-Architektur & Assembler
  '/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/architektur': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/architektur.js'),
  '/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/speicher-bus': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/speicher-bus.js'),
  '/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/interrupts-timer': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/interrupts-timer.js'),
  '/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/polling-interrupt': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/polling-interrupt.js'),
  '/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/assembler': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/assembler.js'),
  '/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/pipelining-cache': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/mikrocontroller/pipelining-cache.js'),

  // Kapitel 3 – Hardware-Schnittstellen & Peripherie
  '/projekte/lernzettel/faecher/informatik/themen/schnittstellen/gpio': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/schnittstellen/gpio.js'),
  '/projekte/lernzettel/faecher/informatik/themen/schnittstellen/adc-dac': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/schnittstellen/adc-dac.js'),
  '/projekte/lernzettel/faecher/informatik/themen/schnittstellen/pwm': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/schnittstellen/pwm.js'),
  '/projekte/lernzettel/faecher/informatik/themen/schnittstellen/spi-i2c-uart': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/schnittstellen/spi-i2c-uart.js'),
  '/projekte/lernzettel/faecher/informatik/themen/schnittstellen/usb-can': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/schnittstellen/usb-can.js'),

  // Kapitel 4 – Programmierung
  '/projekte/lernzettel/faecher/informatik/themen/programmierung/grundlagen': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/programmierung/grundlagen.js'),
  '/projekte/lernzettel/faecher/informatik/themen/programmierung/algorithmen': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/programmierung/algorithmen.js'),
  '/projekte/lernzettel/faecher/informatik/themen/programmierung/struktogramme': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/programmierung/struktogramme.js'),
  '/projekte/lernzettel/faecher/informatik/themen/programmierung/datenstrukturen': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/programmierung/datenstrukturen.js'),
  '/projekte/lernzettel/faecher/informatik/themen/programmierung/dynamische-datenstrukturen': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/programmierung/dynamische-datenstrukturen.js'),
  '/projekte/lernzettel/faecher/informatik/themen/programmierung/design-patterns': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/programmierung/design-patterns.js'),

  // Kapitel 5 – Objektorientierter Entwurf
  '/projekte/lernzettel/faecher/informatik/themen/oop/klassen-objekte': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/oop/klassen-objekte.js'),
  '/projekte/lernzettel/faecher/informatik/themen/oop/vererbung-polymorphie': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/oop/vererbung-polymorphie.js'),
  '/projekte/lernzettel/faecher/informatik/themen/oop/uml': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/oop/uml.js'),
  '/projekte/lernzettel/faecher/informatik/themen/oop/solid': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/oop/solid.js'),

  // Kapitel 6 – Vernetzte Systeme & Sicherheit
  '/projekte/lernzettel/faecher/informatik/themen/netzwerke/osi-tcpip': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/netzwerke/osi-tcpip.js'),
  '/projekte/lernzettel/faecher/informatik/themen/netzwerke/ip-subnetting': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/netzwerke/ip-subnetting.js'),
  '/projekte/lernzettel/faecher/informatik/themen/netzwerke/routing': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/netzwerke/routing.js'),
  '/projekte/lernzettel/faecher/informatik/themen/netzwerke/protokolle': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/netzwerke/protokolle.js'),
  '/projekte/lernzettel/faecher/informatik/themen/netzwerke/sicherheit': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/netzwerke/sicherheit.js'),
  '/projekte/lernzettel/faecher/informatik/themen/netzwerke/advanced-networking': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/netzwerke/advanced-networking.js'),

  // Kapitel 7 – Internet der Dinge (IoT)
  '/projekte/lernzettel/faecher/informatik/themen/iot/mqtt': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/iot/mqtt.js'),
  '/projekte/lernzettel/faecher/informatik/themen/iot/sensoren-aktoren': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/iot/sensoren-aktoren.js'),
  '/projekte/lernzettel/faecher/informatik/themen/iot/advanced-iot': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/iot/advanced-iot.js'),

  // Kapitel 8 – Datenbanksysteme
  '/projekte/lernzettel/faecher/informatik/themen/datenbanken/er-modell': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/datenbanken/er-modell.js'),
  '/projekte/lernzettel/faecher/informatik/themen/datenbanken/sql': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/datenbanken/sql.js'),
  '/projekte/lernzettel/faecher/informatik/themen/datenbanken/advanced-db': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/datenbanken/advanced-db.js'),

  // Kapitel 9 – Künstliche Intelligenz
  '/projekte/lernzettel/faecher/informatik/themen/ki/suchalgorithmen': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/ki/suchalgorithmen.js'),
  '/projekte/lernzettel/faecher/informatik/themen/ki/ml-knn-kmeans': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/ki/ml-knn-kmeans.js'),
  '/projekte/lernzettel/faecher/informatik/themen/ki/neuronale-netze': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/ki/neuronale-netze.js'),
  '/projekte/lernzettel/faecher/informatik/themen/ki/decision-trees': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/ki/decision-trees.js'),
  '/projekte/lernzettel/faecher/informatik/themen/ki/deep-learning': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/ki/deep-learning.js'),
  '/projekte/lernzettel/faecher/informatik/themen/ki/advanced-ai': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/ki/advanced-ai.js'),

  // Kapitel 10 – Projektmanagement & Qualitätssicherung
  '/projekte/lernzettel/faecher/informatik/themen/projektmanagement/scrum': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/projektmanagement/scrum.js'),
  '/projekte/lernzettel/faecher/informatik/themen/projektmanagement/qualitaetssicherung': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/projektmanagement/qualitaetssicherung.js'),
  '/projekte/lernzettel/faecher/informatik/themen/projektmanagement/devops': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/projektmanagement/devops.js'),

  // Kapitel 11 – Betriebssysteme & Virtualisierung
  '/projekte/lernzettel/faecher/informatik/themen/os/processes': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/os/processes.js'),
  '/projekte/lernzettel/faecher/informatik/themen/os/memory-management': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/os/memory-management.js'),
  '/projekte/lernzettel/faecher/informatik/themen/os/filesystems': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/os/filesystems.js'),
  '/projekte/lernzettel/faecher/informatik/themen/os/virtualization': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/os/virtualization.js'),

  // Kapitel 12 – Theoretische Informatik
  '/projekte/lernzettel/faecher/informatik/themen/theoinf/automaten': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/theoinf/automaten.js'),
  '/projekte/lernzettel/faecher/informatik/themen/theoinf/complexity': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/theoinf/complexity.js'),
  '/projekte/lernzettel/faecher/informatik/themen/theoinf/formal-languages': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/theoinf/formal-languages.js'),

  // Kapitel 13 – IT-Sicherheit & Kryptographie
  '/projekte/lernzettel/faecher/informatik/themen/security/cryptography': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/security/cryptography.js'),
  '/projekte/lernzettel/faecher/informatik/themen/security/hash-pki': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/security/hash-pki.js'),
  '/projekte/lernzettel/faecher/informatik/themen/security/attacks-defense': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/security/attacks-defense.js'),

  // Kapitel 14 – Computergrafik & Bildverarbeitung
  '/projekte/lernzettel/faecher/informatik/themen/grafik/3d-modelling': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/grafik/3d-modelling.js'),
  '/projekte/lernzettel/faecher/informatik/themen/grafik/image-processing': () => import('../../../pages/projekte/lernzettel/faecher/informatik/themen/grafik/image-processing.js'),
};

export const INFORMATIK_TITLE_TRANSLATION = {
  'page.title.lz.informatik': 'ITS & ITH — Lernzettel',

  // Kapitel 1
  'page.title.lz.informatik.zahlensysteme': 'Zahlensysteme & Codes (Dual, Hex, BCD, ASCII)',
  'page.title.lz.informatik.schaltnetze': 'Schaltnetze, KV-Diagramme & DNF',
  'page.title.lz.informatik.flipflops': 'FlipFlops & Schaltwerke (RS, D, JK, T)',
  'page.title.lz.informatik.zustandsdiagramme': 'Zustandsdiagramme & synchrone Zähler',
  'page.title.lz.informatik.vhdl': 'VHDL/Verilog & FPGAs',

  // Kapitel 2
  'page.title.lz.informatik.architektur': 'CPU-Aufbau, ALU, Register & Flags',
  'page.title.lz.informatik.speicher': 'Speicher, Bussysteme & Adressierung',
  'page.title.lz.informatik.interrupts': 'Interrupts & Timer',
  'page.title.lz.informatik.polling': 'Polling vs. Interrupt — Vergleich & Prinzipien',
  'page.title.lz.informatik.assembler': 'Assembler-Programmierung & PAP',
  'page.title.lz.informatik.pipelining': 'Pipelining, Caches & Multicore-Architekturen',

  // Kapitel 3
  'page.title.lz.informatik.gpio': 'GPIO — digitale & analoge Ein-/Ausgabe',
  'page.title.lz.informatik.adc': 'ADC & DAC — Analog/Digital-Wandlung',
  'page.title.lz.informatik.pwm': 'PWM — Pulsweitenmodulation',
  'page.title.lz.informatik.spi': 'Serielle Protokolle: SPI, I²C, UART',
  'page.title.lz.informatik.usb': 'USB, CAN-Bus, Ethernet-Controller',

  // Kapitel 4
  'page.title.lz.informatik.grundlagen': 'Grundlagen höherer Programmiersprachen (C/C++)',
  'page.title.lz.informatik.algorithmen': 'Algorithmen, Felder & Sortierverfahren',
  'page.title.lz.informatik.struktogramme': 'Struktogramme & Pseudocode',
  'page.title.lz.informatik.datenstrukturen': 'Datenstrukturen: Listen, Stapel, Bäume',
  'page.title.lz.informatik.dynstrukturen': 'Dynamische Datenstrukturen, Hashing & Graphen',
  'page.title.lz.informatik.patterns': 'Design Patterns & Clean Code',

  // Kapitel 5
  'page.title.lz.informatik.klassen': 'Klassen, Objekte & Kapselung',
  'page.title.lz.informatik.vererbung': 'Vererbung, Polymorphie & Schnittstellen',
  'page.title.lz.informatik.uml': 'UML — Klassen-, Objekt-, Sequenzdiagramm',
  'page.title.lz.informatik.solid': 'SOLID-Prinzipien & fortgeschrittene OOP-Konzepte',

  // Kapitel 6
  'page.title.lz.informatik.osi': 'OSI- & TCP/IP-Referenzmodell',
  'page.title.lz.informatik.subnetting': 'IPv4/IPv6-Adressierung, Subnetting & CIDR',
  'page.title.lz.informatik.routing': 'Routing, Routingtabellen & Gateway',
  'page.title.lz.informatik.protokolle': 'Netzwerkprotokolle (ARP, ICMP, TCP, UDP, DNS, DHCP, TLS)',
  'page.title.lz.informatik.netsicherheit': 'Netzwerkkomponenten, VLAN & Sicherheit (Firewall, DMZ)',
  'page.title.lz.informatik.adv_networking': 'IPv6-Advanced, BGP, MPLS, SDN, Netzwerkautomation',

  // Kapitel 7
  'page.title.lz.informatik.mqtt': 'MQTT — Pub/Sub, QoS, Broker, Retain, LWT',
  'page.title.lz.informatik.sensoren': 'IoT-Sensoren, Aktoren & ESP32-Plattform',
  'page.title.lz.informatik.adv_iot': 'LoRaWAN, NB-IoT, Edge Computing, IoT-Sicherheit',

  // Kapitel 8
  'page.title.lz.informatik.ermodell': 'Entity-Relationship-Modell & Normalisierung (1NF-3NF)',
  'page.title.lz.informatik.sql': 'SQL — Abfragen, JOINs, Aggregatfunktionen, Subqueries',
  'page.title.lz.informatik.adv_db': 'ACID, Transaktionen, NoSQL (MongoDB, Redis)',

  // Kapitel 9
  'page.title.lz.informatik.suchalg': 'Suchalgorithmen: Minimax, Breiten-/Tiefensuche, A*',
  'page.title.lz.informatik.knn': 'Maschinelles Lernen: k-NN & k-Means',
  'page.title.lz.informatik.neuronale': 'Neuronale Netze: Perzeptron, Aktivierungsfunktionen',
  'page.title.lz.informatik.decision_trees': 'Entscheidungsbäume & Random Forest',
  'page.title.lz.informatik.deep_learning': 'Deep Learning (CNNs, RNNs), Backpropagation, Transformers',
  'page.title.lz.informatik.adv_ai': 'Reinforcement Learning, Explainable AI, KI-Ethik',

  // Kapitel 10
  'page.title.lz.informatik.scrum': 'Scrum & agiles Projektmanagement',
  'page.title.lz.informatik.qs': 'Qualitätssicherung, Testen & Verifikation (Unit-Tests)',
  'page.title.lz.informatik.devops': 'DevOps, CI/CD, Testautomatisierung, Containervirtualisierung',

  // Kapitel 11
  'page.title.lz.informatik.prozesse': 'Prozesse, Threads & Scheduling',
  'page.title.lz.informatik.speicherverwaltung': 'Speicherverwaltung (Paging, Segmentation, virtueller Speicher)',
  'page.title.lz.informatik.dateisysteme': 'Dateisysteme & I/O-Management',
  'page.title.lz.informatik.virtualisierung': 'Virtualisierung (KVM, Docker, Kubernetes)',

  // Kapitel 12
  'page.title.lz.informatik.automaten': 'Automatentheorie (DFA, NFA, reguläre Ausdrücke)',
  'page.title.lz.informatik.komplexitaet': 'Berechenbarkeit & Komplexität (P, NP, NP-Vollständigkeit)',
  'page.title.lz.informatik.formale_sprachen': 'Formale Sprachen & Grammatiken (Chomsky-Hierarchie)',

  // Kapitel 13
  'page.title.lz.informatik.krypto': 'Symmetrische & asymmetrische Verschlüsselung (AES, RSA)',
  'page.title.lz.informatik.hash_pki': 'Hashfunktionen, digitale Signaturen & Zertifikate (PKI)',
  'page.title.lz.informatik.angriffe': 'Angriffstechniken (SQL-Injection, XSS, Buffer Overflow) & Defense',

  // Kapitel 14
  'page.title.lz.informatik.grafik_3d': 'Rastergrafik, Vektorgrafik & 3D-Modellierung (OpenGL)',
  'page.title.lz.informatik.bildverarbeitung': 'Bildverarbeitung: Filter, Kantenerkennung (Sobel, Canny)',
};
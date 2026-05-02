// data/poems.js
// Gedichte werden aus Firestore geladen.
// Diese Datei enthält keine Gedicht-Texte mehr → sicher auf GitHub.

import { db } from '../service/firebase.js';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

export const POEM_CATEGORIES = [
  { id: 'all',      label: 'Alle Gedichte',   icon: 'fa-feather-alt' },
  { id: 'liebe',    label: 'Liebe & Schmerz', icon: 'fa-heart-broken' },
  { id: 'selbst',   label: 'Selbst & Sein',   icon: 'fa-user-circle' },
  { id: 'russisch', label: 'По-русски',        icon: 'fa-language' },
  { id: 'englisch', label: 'English',          icon: 'fa-globe' },
];

let _cache = null;

export async function fetchPoems() {
  if (_cache) return _cache;
  try {
    const snap = await getDocs(query(collection(db, 'poems'), orderBy('id')));
    _cache = snap.docs.map(d => d.data());
    return _cache;
  } catch (err) {
    console.error('[poems] Ladefehler:', err);
    return [];
  }
}

export function clearPoemsCache() { _cache = null; }

// Gleiche API wie vorher — jetzt mit poems als erstem Parameter
export function getPoemsByCategory(poems, category) {
  if (category === 'all') return poems;
  return poems.filter(p => p.category === category);
}

export function getPoemById(poems, id) {
  return poems.find(p => p.id === id);
}
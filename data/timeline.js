// data/timeline.js
// Timeline-Daten werden aus Firestore geladen.
// Diese Datei enthält keine Einträge mehr → sicher auf GitHub.

import { db } from '../service/firebase.js';
import { collection, getDocs, query, orderBy } from 'firebase/firestore';

let _cache = null;

export async function fetchTimeline() {
  if (_cache) return _cache;
  try {
    const snap = await getDocs(query(collection(db, 'timeline'), orderBy('start')));
    _cache = snap.docs.map(d => d.data());
    return _cache;
  } catch (err) {
    console.error('[timeline] Ladefehler:', err);
    return [];
  }
}

export function clearTimelineCache() { _cache = null; }

export function getTimelineByType(items, type) {
  if (type === 'all') return items;
  return items.filter(i => i.type === type);
}
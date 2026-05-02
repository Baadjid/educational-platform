// service/auth/authService.js
import { auth } from '../firebase.js';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
  updateProfile,
} from 'firebase/auth';

class AuthService {
  constructor() {
    this.currentUser    = null;
    this.listeners      = [];
    this.googleProvider = new GoogleAuthProvider();
    this._ready = new Promise(resolve => { this._readyResolve = resolve; });
    this._initObserver();
  }

  _initObserver() {
    onAuthStateChanged(auth, (user) => {
      this.currentUser = user;

      // Body-Klasse steuert Sichtbarkeit aller .locked-overlay im DOM.
      // CSS: .user-logged-in .locked-overlay { display: none }
      document.body.classList.toggle('user-logged-in', !!user);

      if (this._readyResolve) {
        this._readyResolve();
        this._readyResolve = null;
      }
      this.listeners.forEach(cb => cb(this.isLoggedIn(), this.currentUser));
    });
  }

  ready()      { return this._ready; }
  isLoggedIn() { return !!this.currentUser; }

  async login(email, password) {
    try {
      const cred = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: cred.user };
    } catch (e) { return { success: false, error: this._friendlyError(e.code) }; }
  }

  async register(email, password, displayName = '') {
    try {
      const cred = await createUserWithEmailAndPassword(auth, email, password);
      if (displayName) await updateProfile(cred.user, { displayName });
      return { success: true, user: cred.user };
    } catch (e) { return { success: false, error: this._friendlyError(e.code) }; }
  }

  async loginWithGoogle() {
    try {
      const result = await signInWithPopup(auth, this.googleProvider);
      return { success: true, user: result.user };
    } catch (e) { return { success: false, error: this._friendlyError(e.code) }; }
  }

  async logout() {
    try {
      await signOut(auth);
      return { success: true };
    } catch (e) { return { success: false, error: this._friendlyError(e.code) }; }
  }

  onAuthStateChange(callback) {
    this.listeners.push(callback);
    callback(this.isLoggedIn(), this.currentUser);
  }

  _friendlyError(code) {
    const map = {
      'auth/user-not-found':       'Kein Konto mit dieser E-Mail gefunden.',
      'auth/wrong-password':       'Falsches Passwort.',
      'auth/invalid-email':        'Ungültige E-Mail-Adresse.',
      'auth/email-already-in-use': 'Diese E-Mail wird bereits verwendet.',
      'auth/weak-password':        'Passwort muss mindestens 6 Zeichen haben.',
      'auth/too-many-requests':    'Zu viele Versuche. Bitte später erneut versuchen.',
      'auth/popup-closed-by-user': 'Google-Fenster wurde geschlossen.',
      'auth/invalid-credential':   'E-Mail oder Passwort ist falsch.',
    };
    return map[code] || 'Ein Fehler ist aufgetreten. Bitte versuche es erneut.';
  }
}

export const authService = new AuthService();
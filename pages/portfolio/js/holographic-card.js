/**
 * HOLOGRAPHIC CARD - 3D Effekt mit Mausverfolgung
 */

import { lerp, clamp, round, adjust } from '../../../shared/js/utils.js';

export function initHolographicCard() {
  console.log('initHolographicCard wird ausgefÃ¼hrt...');
  
  const cardWrapper = document.querySelector('.card-wrapper');
  const card = document.getElementById('card');
  
  if (!cardWrapper || !card) {
    console.warn('Holographic Card Elemente nicht gefunden!');
    return;
  }

  const isTouchOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
  if (isTouchOnly) {
    cardWrapper.style.touchAction = 'auto';
    return; // Kein Effekt auf Mobile, kein Cleanup nötig
  }
  
  console.log('Holographic Card Elemente gefunden');
  
  // Avatar Image Error Handling
  const avatarImg = card.querySelector('.avatar');
  if (avatarImg && avatarImg.tagName === 'IMG') {
    // PrÃ¼fe ob Bild bereits geladen ist
    if (avatarImg.complete && avatarImg.naturalHeight === 0) {
      createPlaceholder(avatarImg);
    } else {
      avatarImg.addEventListener('error', () => createPlaceholder(avatarImg));
    }
  }
  
  function createPlaceholder(img) {
    const placeholder = document.createElement('div');
    placeholder.className = 'avatar-placeholder';
    placeholder.innerHTML = '<span>KH</span>';
    if (img.parentElement) {
      img.parentElement.appendChild(placeholder);
      img.style.display = 'none';
    }
  }
  
  // Current values
  let pointerX = 50;
  let pointerY = 50;
  let pointerFromCenter = 0;
  let pointerFromTop = 0.5;
  let pointerFromLeft = 0.5;
  let rotateX = 0;
  let rotateY = 0;
  let backgroundX = 50;
  let backgroundY = 50;
  
  // Target values
  let targetPointerX = 50;
  let targetPointerY = 50;
  let targetPointerFromCenter = 0;
  let targetPointerFromTop = 0.5;
  let targetPointerFromLeft = 0.5;
  let targetRotateX = 0;
  let targetRotateY = 0;
  let targetBackgroundX = 50;
  let targetBackgroundY = 50;
  
  const smoothFactor = 0.15;
  let isActive = false;
  let animationFrame = null;
  
  // Animation Loop
  function animate() {
    pointerX = lerp(pointerX, targetPointerX, smoothFactor);
    pointerY = lerp(pointerY, targetPointerY, smoothFactor);
    pointerFromCenter = lerp(pointerFromCenter, targetPointerFromCenter, smoothFactor);
    pointerFromTop = lerp(pointerFromTop, targetPointerFromTop, smoothFactor);
    pointerFromLeft = lerp(pointerFromLeft, targetPointerFromLeft, smoothFactor);
    rotateX = lerp(rotateX, targetRotateX, smoothFactor);
    rotateY = lerp(rotateY, targetRotateY, smoothFactor);
    backgroundX = lerp(backgroundX, targetBackgroundX, smoothFactor);
    backgroundY = lerp(backgroundY, targetBackgroundY, smoothFactor);
    
    // Runde auf 2 Dezimalstellen fÃ¼r bessere Performance
    cardWrapper.style.setProperty('--pointer-x', `${Math.round(pointerX * 100) / 100}%`);
    cardWrapper.style.setProperty('--pointer-y', `${Math.round(pointerY * 100) / 100}%`);
    cardWrapper.style.setProperty('--background-x', `${Math.round(backgroundX * 100) / 100}%`);
    cardWrapper.style.setProperty('--background-y', `${Math.round(backgroundY * 100) / 100}%`);
    cardWrapper.style.setProperty('--pointer-from-center', Math.round(pointerFromCenter * 100) / 100);
    cardWrapper.style.setProperty('--pointer-from-top', Math.round(pointerFromTop * 100) / 100);
    cardWrapper.style.setProperty('--pointer-from-left', Math.round(pointerFromLeft * 100) / 100);
    cardWrapper.style.setProperty('--rotate-x', `${Math.round(rotateX * 100) / 100}deg`);
    cardWrapper.style.setProperty('--rotate-y', `${Math.round(rotateY * 100) / 100}deg`);
    // Auch direkt auf #card setzen, damit CSS-Kinder (details) die Variablen erben
    card.style.setProperty('--pointer-from-center', Math.round(pointerFromCenter * 100) / 100);
    card.style.setProperty('--pointer-from-top',    Math.round(pointerFromTop * 100) / 100);
    card.style.setProperty('--pointer-from-left',   Math.round(pointerFromLeft * 100) / 100);
    
    animationFrame = requestAnimationFrame(animate);
  }
  
  // Card Update Funktion
  function updateCard(e) {
    if (!isActive) return;
    
    const bounds = card.getBoundingClientRect();
    let clientX, clientY;
    
    if (e.touches) {
      clientX = e.touches[0].clientX;
      clientY = e.touches[0].clientY;
    } else {
      clientX = e.clientX;
      clientY = e.clientY;
    }
    
    const leftX = clientX - bounds.left;
    const topY = clientY - bounds.top;
    const w = bounds.width;
    const h = bounds.height;
    
    const px = clamp((100 / w) * leftX, 0, 100);
    const py = clamp((100 / h) * topY, 0, 100);
    const cx = px - 50;
    const cy = py - 50;
    
    targetPointerX = px;
    targetPointerY = py;
    targetBackgroundX = adjust(px, 0, 100, 35, 65);
    targetBackgroundY = adjust(py, 0, 100, 35, 65);
    targetPointerFromCenter = clamp(
      Math.sqrt((py - 50) * (py - 50) + (px - 50) * (px - 50)) / 50,
      0,
      1
    );
    targetPointerFromTop = py / 100;
    targetPointerFromLeft = px / 100;
    targetRotateX = round(-(cx / 5));
    targetRotateY = round(cy / 4);
  }
  
  // Event Handlers
  function handleMouseEnter(e) {
    isActive = true;
    card.classList.add('active');
    cardWrapper.classList.add('active');
    updateCard(e);
  }
  
  function handleMouseMove(e) {
    if (isActive) {
      updateCard(e);
    }
  }
  
  function handleMouseLeave() {
    isActive = false;
    card.classList.remove('active');
    cardWrapper.classList.remove('active');
    
    targetPointerX = 50;
    targetPointerY = 50;
    targetPointerFromCenter = 0;
    targetPointerFromTop = 0.5;
    targetPointerFromLeft = 0.5;
    targetRotateX = 0;
    targetRotateY = 0;
    targetBackgroundX = 50;
    targetBackgroundY = 50;
  }
  
  // Event Listener registrieren
  cardWrapper.addEventListener('mouseenter', handleMouseEnter);
  cardWrapper.addEventListener('mousemove', handleMouseMove);
  cardWrapper.addEventListener('mouseleave', handleMouseLeave);
  
  // Touch Support
  cardWrapper.addEventListener('touchstart', handleMouseEnter, { passive: true });
  cardWrapper.addEventListener('touchmove', handleMouseMove, { passive: true });
  cardWrapper.addEventListener('touchend', handleMouseLeave);
  
  // Animation starten
  animate();
  
  console.log('Holographic Card erfolgreich initialisiert');
  
  // Cleanup Funktion fÃ¼r Memory Leaks
  return () => {
    if (animationFrame) {
      cancelAnimationFrame(animationFrame);
    }
    cardWrapper.removeEventListener('mouseenter', handleMouseEnter);
    cardWrapper.removeEventListener('mousemove', handleMouseMove);
    cardWrapper.removeEventListener('mouseleave', handleMouseLeave);
    cardWrapper.removeEventListener('touchstart', handleMouseEnter);
    cardWrapper.removeEventListener('touchmove', handleMouseMove);
    cardWrapper.removeEventListener('touchend', handleMouseLeave);
  };
}
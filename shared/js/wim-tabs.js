// shared/js/wim-tabs.js
// Zentrale Tab-Komponente — Slider + horizontaler Smooth-Scroll

export function initWimTabs(container = document, { onTabChange } = {}) {
  const root = container.querySelectorAll ? container : document;

  root.querySelectorAll('.wim-tabs').forEach(tabsContainer => {
    const tabs = tabsContainer.querySelectorAll('.wim-tab[data-wim]');
    if (!tabs.length) return;

    // ── Slider ────────────────────────────────────────────────────
    let slider = tabsContainer.querySelector('.wim-tab-slider');
    if (!slider) {
      slider = document.createElement('span');
      slider.className = 'wim-tab-slider';
      tabsContainer.appendChild(slider);
    }

    const positionSlider = (tab) => {
      slider.style.transform = `translateX(${tab.offsetLeft}px)`;
      slider.style.width     = `${tab.getBoundingClientRect().width}px`;
    };

    // ── RAF Smooth Scroll (horizontal) ───────────────────────────
    const smoothScroll = (target, toLeft, duration = 400) => {
      const start     = target.scrollLeft;
      const delta     = toLeft - start;
      const startTime = performance.now();
      const ease      = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

      const step = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        target.scrollLeft = start + delta * ease(progress);
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    };

    const centerTab = (tab) => {
      const to = tab.offsetLeft + tab.offsetWidth / 2 - tabsContainer.clientWidth / 2;
      smoothScroll(tabsContainer, to);
    };

    // ── Panel-Umschaltung (wiederverwendbar) ─────────────────────
    const activatePanel = (key) => {
      if (typeof onTabChange === 'function') {
        const tab = tabsContainer.querySelector(`.wim-tab[data-wim="${key}"]`);
        if (tab) onTabChange(key, tab);
        return;
      }
      const scope = tabsContainer.closest('section, .page, body') ?? document;
      scope.querySelectorAll('.wim-category[data-wim-cat]').forEach(panel => {
        const isTarget = panel.dataset.wimCat === key;
        panel.classList.toggle('hidden', !isTarget);
        panel.classList.toggle('active',  isTarget);

        if (isTarget) {
          panel.querySelectorAll('.content-card').forEach((card, i) => {
            card.style.animation = 'none';
            setTimeout(() => {
              card.style.animation      = '';
              card.style.animationDelay = `${i * 0.05 + 0.1}s`;
            }, 10);
          });
        }
      });
    };

    // ── Initialisierung: sofort den aktiven Tab anzeigen ─────────
    const initialActive = tabsContainer.querySelector('.wim-tab.active') || tabs[0];
    if (initialActive) {
      // Sicherstellen dass genau dieser Tab die active-Klasse hat
      tabs.forEach(t => t.classList.remove('active'));
      initialActive.classList.add('active');

      // Panels sofort korrekt ein-/ausblenden
      activatePanel(initialActive.dataset.wim);

      // Slider nach Layout-Berechnung positionieren
      setTimeout(() => positionSlider(initialActive), 50);
    }

    window.addEventListener('resize', () => {
      const active = tabsContainer.querySelector('.wim-tab.active');
      if (active) positionSlider(active);
    });

    // ── Tab-Klicks ────────────────────────────────────────────────
    tabs.forEach((tab, index) => {
      tab.addEventListener('click', function () {
        const key = this.dataset.wim;

        tabs.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        positionSlider(this);
        centerTab(this);

        activatePanel(key);
      });

      // ── Keyboard-Navigation ──────────────────────────────────
      tab.addEventListener('keydown', function (e) {
        if (e.key === 'ArrowRight') {
          e.preventDefault();
          const next = tabs[index + 1] || tabs[0];
          next.focus(); next.click();
        } else if (e.key === 'ArrowLeft') {
          e.preventDefault();
          const prev = tabs[index - 1] || tabs[tabs.length - 1];
          prev.focus(); prev.click();
        }
      });
    });
  });
}
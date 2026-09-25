document.addEventListener('DOMContentLoaded', () => {
  initRtlToggle();
  initThemeToggle();
  initMobileDrawer();
  initJournalFilters();
  initJournalSearch();
  initJournalFaqs();
  initJournalModals();
  initHeroFlipCards();
});

function initRtlToggle() {
  const rtlBtn = document.getElementById('rtlToggleBtn');
  const rtlBtnText = document.getElementById('rtlBtnText');
  const drawerRtlBtn = document.getElementById('drawerRtlBtn');
  const drawerRtlText = document.getElementById('drawerRtlText');
  const htmlRoot = document.documentElement;

  const applyDirection = (dir) => {
    htmlRoot.setAttribute('dir', dir);
    localStorage.setItem('arvora_dir', dir);

    const isRtl = dir === 'rtl';
    if (rtlBtn) {
      if (isRtl) {
        rtlBtn.classList.add('active-rtl');
        if (rtlBtnText) rtlBtnText.textContent = 'LTR';
      } else {
        rtlBtn.classList.remove('active-rtl');
        if (rtlBtnText) rtlBtnText.textContent = 'RTL';
      }
    }

    if (drawerRtlText) {
      drawerRtlText.textContent = isRtl ? 'RTL (Click for LTR)' : 'LTR (Click for RTL)';
    }
  };

  const savedDir = localStorage.getItem('arvora_dir') || 'ltr';
  applyDirection(savedDir);

  const toggleDirection = () => {
    const currentDir = htmlRoot.getAttribute('dir') || 'ltr';
    const newDir = currentDir === 'rtl' ? 'ltr' : 'rtl';
    applyDirection(newDir);
  };

  rtlBtn?.addEventListener('click', toggleDirection);
  drawerRtlBtn?.addEventListener('click', toggleDirection);
}

function initThemeToggle() {
  if (window.ArvoraTheme) return;
  const themeToggleBtn = document.getElementById('themeToggleBtn');
  const drawerThemeBtn = document.getElementById('drawerThemeBtn');
  const htmlRoot = document.documentElement;

  const savedTheme = localStorage.getItem('arvora_theme') || 'dark';
  htmlRoot.setAttribute('data-theme', savedTheme);

  const toggleTheme = () => {
    const currentTheme = htmlRoot.getAttribute('data-theme') || 'dark';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    htmlRoot.setAttribute('data-theme', newTheme);
    localStorage.setItem('arvora_theme', newTheme);
  };

  themeToggleBtn?.addEventListener('click', toggleTheme);
  drawerThemeBtn?.addEventListener('click', toggleTheme);
}

function initMobileDrawer() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerBackdrop = document.getElementById('drawerBackdrop');

  if (!hamburgerBtn || !mobileDrawer) return;

  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    hamburgerBtn.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    hamburgerBtn.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  hamburgerBtn.addEventListener('click', openDrawer);
  drawerCloseBtn?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);

  const drawerLinks = mobileDrawer.querySelectorAll('.drawer-link');
  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

function initJournalFilters() {
  const filterPills = document.querySelectorAll('.journal-filter-pill');
  const cards = document.querySelectorAll('.journal-card');
  if (!filterPills.length) return;

  filterPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      filterPills.forEach((p) => p.classList.remove('active'));
      pill.classList.add('active');

      const filter = pill.getAttribute('data-filter');

      cards.forEach((card) => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 200);
        }
      });
    });
  });
}

function initJournalSearch() {
  const searchInput = document.getElementById('journalSearchInput');
  const cards = document.querySelectorAll('.journal-card');

  if (!searchInput) return;

  searchInput.addEventListener('input', (e) => {
    const term = e.target.value.toLowerCase().trim();

    cards.forEach((card) => {
      const title = card.querySelector('.journal-card-title')?.textContent.toLowerCase() || '';
      const excerpt = card.querySelector('.journal-card-excerpt')?.textContent.toLowerCase() || '';
      const tag = card.querySelector('.journal-card-tag')?.textContent.toLowerCase() || '';

      if (!term || title.includes(term) || excerpt.includes(term) || tag.includes(term)) {
        card.style.display = 'flex';
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
      } else {
        card.style.display = 'none';
      }
    });
  });
}

function initJournalFaqs() {
  const faqTriggers = document.querySelectorAll('.journal-faq-trigger');

  faqTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const card = trigger.closest('.journal-faq-card');
      if (!card) return;

      const isCurrentlyActive = card.classList.contains('active');

document.querySelectorAll('.journal-faq-card.active').forEach((activeCard) => {
        if (activeCard !== card) {
          activeCard.classList.remove('active');
          const t = activeCard.querySelector('.journal-faq-trigger');
          if (t) t.setAttribute('aria-expanded', 'false');
        }
      });

      if (isCurrentlyActive) {
        card.classList.remove('active');
        trigger.setAttribute('aria-expanded', 'false');
      } else {
        card.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initJournalModals() {
  const quoteModal = document.getElementById('quoteModal');
  const loginModal = document.getElementById('loginModal');
  const storyModal = document.getElementById('storyModal');

const quoteTriggers = document.querySelectorAll('.open-quote-modal, .consult-arborist-btn');
  const loginTriggers = document.querySelectorAll('.open-login-modal');
  const storyTriggers = document.querySelectorAll('.open-story-modal');

  const openModal = (modal) => {
    if (!modal) return;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  quoteTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const topic = btn.getAttribute('data-topic');
      const serviceSelect = document.getElementById('serviceSelect');
      const notesField = document.getElementById('userNotes');

      if (topic && notesField) {
        notesField.value = `Interested in journal research & arborist commission: ${topic}.`;
      }
      openModal(quoteModal);
    });
  });

  loginTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(loginModal);
    });
  });

  storyTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal(storyModal);
    });
  });

document.querySelectorAll('.modal-close-btn, #successCloseBtn, #loginSuccessCloseBtn, #storyModalCloseAction').forEach((btn) => {
    btn.addEventListener('click', () => {
      closeModal(quoteModal);
      closeModal(loginModal);
      closeModal(storyModal);
    });
  });

[quoteModal, loginModal, storyModal].forEach((modal) => {
    modal?.addEventListener('click', (e) => {
      if (e.target === modal) {
        closeModal(modal);
      }
    });
  });

const quoteForm = document.getElementById('quoteForm');
  const quoteSuccessState = document.getElementById('quoteSuccessState');
  if (quoteForm && quoteSuccessState) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      quoteForm.style.display = 'none';
      quoteSuccessState.style.display = 'block';
    });
  }

const loginForm = document.getElementById('loginForm');
  const loginSuccessState = document.getElementById('loginSuccessState');
  if (loginForm && loginSuccessState) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      loginForm.style.display = 'none';
      loginSuccessState.style.display = 'block';
    });
  }
}

function initHeroFlipCards() {
  const cards = document.querySelectorAll('.journal-3d-card');
  cards.forEach((card) => {
    // Click or tap toggles flip on touch devices or click
    card.addEventListener('click', (e) => {
      if (e.target.closest('.jcard-study-btn')) return;
      card.classList.toggle('is-flipped');
    });

    // Keyboard accessibility: Enter or Space flips card
    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        if (e.target.closest('.jcard-study-btn')) return;
        e.preventDefault();
        card.classList.toggle('is-flipped');
      }
    });
  });
}


document.addEventListener('DOMContentLoaded', () => {
  initRtlToggle();
  initThemeToggle();
  initMobileDrawer();
  initContactForm();
  initInteractiveMap();
  initContactFaqs();
  initContactModals();
  initHeroTriptych();
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

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

function initContactForm() {
  const form = document.getElementById('contactInquiryForm');
  const successState = document.getElementById('contactSuccessState');
  const resetBtn = document.getElementById('resetContactFormBtn');
  const urgencyPills = document.querySelectorAll('.urgency-pill-btn');
  const urgencyHiddenInput = document.getElementById('urgencyInput');
  const submitBtn = document.getElementById('contactSubmitBtn');
  const clientNamePlaceholder = document.getElementById('successClientName');
  const refCodePlaceholder = document.getElementById('successRefCode');

urgencyPills.forEach((btn) => {
    btn.addEventListener('click', () => {
      urgencyPills.forEach((p) => p.classList.remove('active'));
      btn.classList.add('active');
      const level = btn.getAttribute('data-urgency') || 'Standard Assessment (3-5 Days)';
      if (urgencyHiddenInput) {
        urgencyHiddenInput.value = level;
      }
    });
  });

  if (!form || !successState) return;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const nameInput = document.getElementById('inquiryName');
    const emailInput = document.getElementById('inquiryEmail');
    const nameVal = nameInput ? nameInput.value.trim() : 'Esteemed Client';

if (submitBtn) {
      submitBtn.disabled = true;
      const originalText = submitBtn.innerHTML;
      submitBtn.innerHTML = `
        <span class="btn-spinner" style="display:inline-block;width:14px;height:14px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:spin 0.6s linear infinite;margin-right:8px;"></span>
        <span>Transmitting Inquiry...</span>
      `;

      setTimeout(() => {

        const randomRef = 'ARV-' + new Date().getFullYear() + '-' + Math.floor(1000 + Math.random() * 9000);
        if (clientNamePlaceholder) clientNamePlaceholder.textContent = nameVal;
        if (refCodePlaceholder) refCodePlaceholder.textContent = randomRef;

form.style.display = 'none';
        successState.style.display = 'block';
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;

successState.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }, 700);
    }
  });

resetBtn?.addEventListener('click', () => {
    form.reset();

    urgencyPills.forEach((p, idx) => {
      if (idx === 0) p.classList.add('active');
      else p.classList.remove('active');
    });
    if (urgencyHiddenInput) {
      urgencyHiddenInput.value = 'Standard Assessment (3-5 Days)';
    }

    successState.style.display = 'none';
    form.style.display = 'flex';
    form.scrollIntoView({ behavior: 'smooth', block: 'center' });
  });
}

function initInteractiveMap() {
  const mapIframe = document.getElementById('contactMapIframe');
  const modeButtons = document.querySelectorAll('.map-radius-switch .radius-switch-btn');
  const nightBtn = document.getElementById('mapModeToggle');
  const naturalBtn = document.getElementById('mapNaturalToggle');

  if (!mapIframe) return;

const currentTheme = document.documentElement.getAttribute('data-theme') || 'dark';
  if (currentTheme === 'dark') {
    mapIframe.classList.add('dark-radar');
  }

nightBtn?.addEventListener('click', () => {
    modeButtons.forEach((b) => b.classList.remove('active'));
    nightBtn.classList.add('active');
    mapIframe.classList.remove('natural-view');
    mapIframe.classList.add('dark-radar');
  });

  naturalBtn?.addEventListener('click', () => {
    modeButtons.forEach((b) => b.classList.remove('active'));
    naturalBtn.classList.add('active');
    mapIframe.classList.remove('dark-radar');
    mapIframe.classList.add('natural-view');
  });
}

function initContactFaqs() {
  const faqCards = document.querySelectorAll('.contact-faq-card');

  faqCards.forEach((card) => {
    const trigger = card.querySelector('.contact-faq-trigger');
    if (!trigger) return;

    trigger.addEventListener('click', () => {
      const isOpen = card.classList.contains('active');

faqCards.forEach((c) => {
        c.classList.remove('active');
        const trig = c.querySelector('.contact-faq-trigger');
        if (trig) trig.setAttribute('aria-expanded', 'false');
      });

if (!isOpen) {
        card.classList.add('active');
        trigger.setAttribute('aria-expanded', 'true');
      }
    });
  });
}

function initContactModals() {
  const quoteModal = document.getElementById('quoteModal');
  const loginModal = document.getElementById('loginModal');
  const storyModal = document.getElementById('storyModal');

  const quoteTriggers = document.querySelectorAll('.open-quote-modal');
  const loginTriggers = document.querySelectorAll('.open-login-modal');
  const storyTriggers = document.querySelectorAll('.open-story-modal');

  const openModal = (modal) => {
    if (!modal) return;
    modal.classList.add('open');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeModal = (modal) => {
    if (!modal) return;
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  quoteTriggers.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
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

function initHeroTriptych() {
  const stage = document.getElementById('contactTriptychStage');
  if (!stage) return;

  const panels = stage.querySelectorAll('.contact-triptych-panel');

  panels.forEach((panel) => {
    panel.addEventListener('mouseenter', () => {
      panels.forEach((p) => p.classList.remove('is-active'));
      panel.classList.add('is-active');
    });

    panel.addEventListener('click', (e) => {
      if (e.target.closest('.triptych-cta-btn')) return;
      panels.forEach((p) => p.classList.remove('is-active'));
      panel.classList.add('is-active');
    });

    panel.addEventListener('focus', () => {
      panels.forEach((p) => p.classList.remove('is-active'));
      panel.classList.add('is-active');
    });
  });

  stage.addEventListener('mouseleave', () => {
    // Reset back to emergency panel as default active
    panels.forEach((p) => p.classList.remove('is-active'));
    const defaultActive = stage.querySelector('.panel-emergency') || panels[0];
    defaultActive?.classList.add('is-active');
  });
}


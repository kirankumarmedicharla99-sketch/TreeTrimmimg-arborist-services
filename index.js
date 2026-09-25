document.addEventListener('DOMContentLoaded', () => {
  initRtlToggle();
  initThemeToggle();
  initActiveNavSpy();
  initMobileDrawer();
  initBeforeAfterSlider();
  initProjectTabs();
  initQuoteModal();
  initLoginModal();
  initStoryModal();
  initStatCounters();
  initHeroParallax();
  initHeroTriadShowcase();
});

function initRtlToggle() {
  if (window.ArvoraTheme) return;
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

    window.dispatchEvent(new CustomEvent('arvora_dir_change', { detail: { dir } }));
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

function initActiveNavSpy() {
  const navLinks = document.querySelectorAll('.nav-link');
  if (!navLinks.length) return;

let currentFile = window.location.pathname.split('/').pop().toLowerCase();
  if (!currentFile || currentFile === '') currentFile = 'index.html';

function syncPageActiveNav() {
    navLinks.forEach(link => {
      const href = link.getAttribute('href');
      if (!href) return;

      const linkFile = href.split('#')[0].split('?')[0].split('/').pop().toLowerCase();

const isExactMatch = linkFile && linkFile === currentFile;
      const isServiceDetailMatch = currentFile.includes('service detail') && linkFile === 'service.html';
      const isJournalDetailMatch = currentFile.includes('journal detail') && linkFile === 'journal.html';
      const isHomeMatch = (currentFile === 'index.html' || currentFile === 'home2.html' || currentFile === '') && (linkFile === 'index.html' || linkFile === 'home2.html' || href === '#hero' || href === '#');

      if (isExactMatch || isServiceDetailMatch || isJournalDetailMatch || isHomeMatch) {
        link.classList.add('active');
      } else if (!href.startsWith('#') && linkFile) {
        link.classList.remove('active');
      }
    });
  }

  syncPageActiveNav();

navLinks.forEach(link => {
    link.addEventListener('click', () => {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    });
  });

const isIndexPage = currentFile === 'index.html' || currentFile === 'home2.html' || currentFile === '';
  if (!isIndexPage) return;

  const sections = document.querySelectorAll('section[id], [data-spy-section]');
  const hashNavLinks = document.querySelectorAll('.nav-link[href^="#"]');

  if (!sections.length || !hashNavLinks.length) return;

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -55% 0px',
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        hashNavLinks.forEach(link => {
          const href = link.getAttribute('href');
          if (href === `#${id}`) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }, observerOptions);

  sections.forEach(sec => observer.observe(sec));
}

function initMobileDrawer() {
  const hamburgerBtn = document.getElementById('hamburgerBtn');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerCloseBtn = document.getElementById('drawerCloseBtn');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const drawerLinks = document.querySelectorAll('.drawer-link');

  if (!mobileDrawer) return;

  const openDrawer = () => {
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    hamburgerBtn?.setAttribute('aria-expanded', 'true');
  };

  const closeDrawer = () => {
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    hamburgerBtn?.setAttribute('aria-expanded', 'false');
  };

  hamburgerBtn?.addEventListener('click', openDrawer);
  drawerCloseBtn?.addEventListener('click', closeDrawer);
  drawerBackdrop?.addEventListener('click', closeDrawer);

  drawerLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && mobileDrawer.classList.contains('open')) {
      closeDrawer();
    }
  });
}

function initBeforeAfterSlider() {
  const slider = document.getElementById('comparisonSlider');
  const beforeWrapper = document.getElementById('beforeWrapper');
  const sliderHandle = document.getElementById('sliderHandle');

  if (!slider || !beforeWrapper || !sliderHandle) return;

  let isDragging = false;

  const updateSliderPosition = (clientX) => {
    const rect = slider.getBoundingClientRect();
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';

    let percentage;
    if (isRtl) {
      let offsetX = rect.right - clientX;
      percentage = (offsetX / rect.width) * 100;
    } else {
      let offsetX = clientX - rect.left;
      percentage = (offsetX / rect.width) * 100;
    }

    percentage = Math.max(0, Math.min(100, percentage));

    if (isRtl) {
      beforeWrapper.style.clipPath = `inset(0 0 0 ${percentage}%)`;
      sliderHandle.style.left = 'auto';
      sliderHandle.style.right = `${percentage}%`;
    } else {
      beforeWrapper.style.clipPath = `inset(0 calc(100% - ${percentage}%) 0 0)`;
      sliderHandle.style.right = 'auto';
      sliderHandle.style.left = `${percentage}%`;
    }
  };

  const onPointerDown = (e) => {
    isDragging = true;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    if (clientX !== undefined) updateSliderPosition(clientX);
  };

  const onPointerMove = (e) => {
    if (!isDragging) return;
    const clientX = e.clientX || (e.touches && e.touches[0].clientX);
    if (clientX !== undefined) updateSliderPosition(clientX);
  };

  const onPointerUp = () => {
    isDragging = false;
  };

  slider.addEventListener('mousedown', onPointerDown);
  window.addEventListener('mousemove', onPointerMove);
  window.addEventListener('mouseup', onPointerUp);

  slider.addEventListener('touchstart', onPointerDown, { passive: true });
  window.addEventListener('touchmove', onPointerMove, { passive: true });
  window.addEventListener('touchend', onPointerUp);

window.addEventListener('arvora_dir_change', () => {
    const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
    if (isRtl) {
      beforeWrapper.style.clipPath = 'inset(0 0 0 50%)';
      sliderHandle.style.left = 'auto';
      sliderHandle.style.right = '50%';
    } else {
      beforeWrapper.style.clipPath = 'inset(0 50% 0 0)';
      sliderHandle.style.right = 'auto';
      sliderHandle.style.left = '50%';
    }
  });
}

function initProjectTabs() {
  const tabs = document.querySelectorAll('.tab-btn');
  const beforeImg = document.getElementById('beforeImage');
  const afterImg = document.getElementById('afterImage');
  const beforeWrapper = document.getElementById('beforeWrapper');
  const sliderHandle = document.getElementById('sliderHandle');
  const sliderCard = document.getElementById('comparisonSlider');
  const captionText = document.getElementById('baCaptionText');

const projectData = {
    trimming: {
      before: 'assets/trimming_before.jpg',
      after: 'assets/trimming_after.jpg',
      caption: 'Crown Trimming & Roof Clearance: Removed low sagging limbs over stone patio & house roof, creating an open sunlit canopy.'
    },
    removal: {
      before: 'assets/removal_before.jpg',
      after: 'assets/removal_after.jpg',
      caption: 'Hazard Tree Removal: Safely extracted 60ft leaning decaying tree with zero-impact rigging and seamless lawn restoration.'
    },
    pruning: {
      before: 'assets/pruning_before.jpg',
      after: 'assets/pruning_after.jpg',
      caption: 'Architectural Specimen Pruning: Structural crown thinning and canopy aeration on heritage ornamental maple.'
    }
  };

Object.keys(projectData).forEach(key => {
    const bImg = new Image();
    bImg.src = projectData[key].before;
    const aImg = new Image();
    aImg.src = projectData[key].after;
  });

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.getAttribute('data-category');
      const data = projectData[category];

      if (data) {
        if (sliderCard) {
          sliderCard.style.transition = 'opacity 0.2s ease';
          sliderCard.style.opacity = '0.7';
        }

        setTimeout(() => {
          if (beforeImg) beforeImg.src = data.before;
          if (afterImg) afterImg.src = data.after;
          if (captionText) captionText.textContent = data.caption;

          if (beforeWrapper && sliderHandle) {
            const isRtl = document.documentElement.getAttribute('dir') === 'rtl';
            if (isRtl) {
              beforeWrapper.style.clipPath = 'inset(0 0 0 50%)';
              sliderHandle.style.left = 'auto';
              sliderHandle.style.right = '50%';
            } else {
              beforeWrapper.style.clipPath = 'inset(0 50% 0 0)';
              sliderHandle.style.right = 'auto';
              sliderHandle.style.left = '50%';
            }
          }

          if (sliderCard) {
            sliderCard.style.opacity = '1';
          }
        }, 150);
      }
    });
  });
}

function initQuoteModal() {
  const quoteModal = document.getElementById('quoteModal');
  const modalCloseBtn = document.getElementById('modalCloseBtn');
  const quoteForm = document.getElementById('quoteForm');
  const successState = document.getElementById('quoteSuccessState');
  const successCloseBtn = document.getElementById('successCloseBtn');
  const serviceSelect = document.getElementById('serviceSelect');
  const openButtons = document.querySelectorAll('.open-quote-modal');

  if (!quoteModal) return;

  const openModal = (serviceName = null) => {
    quoteModal.classList.add('open');
    quoteModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

    if (serviceName && serviceSelect) {
      for (let i = 0; i < serviceSelect.options.length; i++) {
        if (serviceSelect.options[i].value.toLowerCase().includes(serviceName.toLowerCase())) {
          serviceSelect.selectedIndex = i;
          break;
        }
      }
    }

    if (quoteForm && successState) {
      quoteForm.style.display = 'block';
      successState.style.display = 'none';
    }
  };

  const closeModal = () => {
    quoteModal.classList.remove('open');
    quoteModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const service = btn.getAttribute('data-service');
      openModal(service);
    });
  });

  modalCloseBtn?.addEventListener('click', closeModal);
  successCloseBtn?.addEventListener('click', closeModal);

  quoteModal.addEventListener('click', (e) => {
    if (e.target === quoteModal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && quoteModal.classList.contains('open')) {
      closeModal();
    }
  });

  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('submitQuoteBtn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Processing...</span>';
      }

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Submit Request</span><span class="btn-arrow">→</span>';
        }
        quoteForm.reset();
        quoteForm.style.display = 'none';
        if (successState) successState.style.display = 'block';
      }, 700);
    });
  }
}

function initLoginModal() {
  const loginModal = document.getElementById('loginModal');
  const loginCloseBtn = document.getElementById('loginCloseBtn');
  const loginForm = document.getElementById('loginForm');
  const loginSuccessState = document.getElementById('loginSuccessState');
  const loginSuccessCloseBtn = document.getElementById('loginSuccessCloseBtn');
  const openButtons = document.querySelectorAll('.open-login-modal');
  const loginTabs = document.querySelectorAll('.login-tab-btn');
  const emailInput = document.getElementById('loginEmail');
  const loginModalTitle = document.getElementById('loginModalTitle');
  const mobileDrawer = document.getElementById('mobileDrawer');

  if (!loginModal) return;

  const openModal = () => {
    loginModal.classList.add('open');
    loginModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';

if (mobileDrawer && mobileDrawer.classList.contains('open')) {
      mobileDrawer.classList.remove('open');
      mobileDrawer.setAttribute('aria-hidden', 'true');
    }

    if (loginForm && loginSuccessState) {
      loginForm.style.display = 'block';
      loginSuccessState.style.display = 'none';
    }
  };

  const closeModal = () => {
    loginModal.classList.remove('open');
    loginModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  openButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openModal();
    });
  });

  loginCloseBtn?.addEventListener('click', closeModal);
  loginSuccessCloseBtn?.addEventListener('click', closeModal);

  loginModal.addEventListener('click', (e) => {
    if (e.target === loginModal) closeModal();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && loginModal.classList.contains('open')) {
      closeModal();
    }
  });

loginTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      loginTabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const portal = tab.getAttribute('data-portal');
      if (portal === 'arborist') {
        if (emailInput) {
          emailInput.placeholder = 'arborist@arvora.com';
          emailInput.value = 'arborist@arvora.com';
        }
        if (loginModalTitle) loginModalTitle.textContent = 'Arborist Field Portal';
      } else {
        if (emailInput) {
          emailInput.placeholder = 'harrison.cole@highlandmanor.com';
          emailInput.value = 'harrison.cole@highlandmanor.com';
        }
        if (loginModalTitle) loginModalTitle.textContent = 'Client & Arborist Sign In';
      }
    });
  });

if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const submitBtn = document.getElementById('submitLoginBtn');
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Authenticating...</span>';
      }

      try {
        localStorage.setItem('arvora_user', 'Harrison Cole');
        localStorage.setItem('arvora_email', 'harrison.cole@highlandmanor.com');
      } catch (err) {}

      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = '<span>Sign In to Portal</span><span class="btn-arrow">→</span>';
        }
        loginForm.style.display = 'none';
        if (loginSuccessState) {
          loginSuccessState.style.display = 'block';
          const successBtn = document.getElementById('loginSuccessCloseBtn');
          if (successBtn) {
            successBtn.textContent = 'Enter Client Dashboard →';
            successBtn.onclick = () => { window.location.href = 'dashboard.html'; };
          }
        }
      }, 650);
    });
  }
}

function initStoryModal() {
  const storyModal = document.getElementById('storyModal');
  const storyBtn = document.getElementById('aboutStoryBtn');
  const storyCloseBtn = document.getElementById('storyCloseBtn');
  const storyActionBtn = document.getElementById('storyModalCloseAction');

  if (!storyModal || !storyBtn) return;

  const openStory = () => {
    storyModal.classList.add('open');
    storyModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
  };

  const closeStory = () => {
    storyModal.classList.remove('open');
    storyModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  };

  storyBtn.addEventListener('click', openStory);
  storyCloseBtn?.addEventListener('click', closeStory);
  storyActionBtn?.addEventListener('click', closeStory);

  storyModal.addEventListener('click', (e) => {
    if (e.target === storyModal) closeStory();
  });
}

function initStatCounters() {
  const statValues = document.querySelectorAll('.stat-value[data-target]');
  if (!statValues.length) return;

  let animated = false;

  const animateCounters = () => {
    statValues.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const suffix = counter.textContent.replace(/[0-9]/g, '');
      let current = 0;
      const step = Math.max(1, Math.ceil(target / 45));

      const timer = setInterval(() => {
        current += step;
        if (current >= target) {
          counter.textContent = `${target.toLocaleString()}${suffix}`;
          clearInterval(timer);
        } else {
          counter.textContent = `${current.toLocaleString()}${suffix}`;
        }
      }, 30);
    });
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting && !animated) {
        animated = true;
        animateCounters();
      }
    });
  }, { threshold: 0.5 });

  const statsRow = document.querySelector('.stats-row');
  if (statsRow) observer.observe(statsRow);
}

function initHeroParallax() {
  const heroSection = document.querySelector('.hero-section');
  const floatStat = document.getElementById('heroFloatStat');
  const floatBadge = document.getElementById('heroFloatBadge');

  if (!heroSection || !floatStat || !floatBadge) return;
  if (window.innerWidth < 1024) return;

  heroSection.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;

    const deltaX = (clientX - centerX) / 45;
    const deltaY = (clientY - centerY) / 45;

    floatStat.style.transform = `translate(${deltaX * 0.8}px, ${deltaY * 0.8}px)`;
    floatBadge.style.transform = `translate(${-deltaX * 0.6}px, ${-deltaY * 0.6}px)`;
  });

  heroSection.addEventListener('mouseleave', () => {
    floatStat.style.transform = '';
    floatBadge.style.transform = '';
  });
}

function initHeroTriadShowcase() {
  const showcase = document.getElementById('heroTriadShowcase');
  if (!showcase) return;

  const cards = showcase.querySelectorAll('.triad-card');
  const pills = showcase.querySelectorAll('.triad-nav-pill');
  if (!cards.length) return;

  let activeIndex = 0;
  let autoTimer = null;
  let isUserInteracted = false;

  const setActiveCard = (index) => {
    activeIndex = parseInt(index, 10);
    showcase.setAttribute('data-active', activeIndex.toString());

    cards.forEach(card => {
      const cardIdx = parseInt(card.getAttribute('data-index'), 10);
      if (cardIdx === activeIndex) {
        card.classList.add('active');
      } else {
        card.classList.remove('active');
      }
    });

    pills.forEach(pill => {
      const targetIdx = parseInt(pill.getAttribute('data-target'), 10);
      if (targetIdx === activeIndex) {
        pill.classList.add('active');
        pill.setAttribute('aria-selected', 'true');
      } else {
        pill.classList.remove('active');
        pill.setAttribute('aria-selected', 'false');
      }
    });
  };

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const idx = card.getAttribute('data-index');
      if (idx !== null) {
        isUserInteracted = true;
        clearInterval(autoTimer);
        setActiveCard(idx);
      }
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const idx = card.getAttribute('data-index');
        if (idx !== null) {
          isUserInteracted = true;
          clearInterval(autoTimer);
          setActiveCard(idx);
        }
      }
    });
  });

  pills.forEach(pill => {
    pill.addEventListener('click', () => {
      const target = pill.getAttribute('data-target');
      if (target !== null) {
        isUserInteracted = true;
        clearInterval(autoTimer);
        setActiveCard(target);
      }
    });
  });

  autoTimer = setInterval(() => {
    if (isUserInteracted) return;
    const nextIdx = (activeIndex + 1) % cards.length;
    setActiveCard(nextIdx);
  }, 6500);

  showcase.addEventListener('mouseenter', () => {
    clearInterval(autoTimer);
  });
}

function initCinematicTrimmerAnimation() {
  const canvas = document.getElementById('ctaCinematicCanvas');
  if (!canvas) return;

  const ctx = canvas.getContext('2d');
  const stagePillText = document.getElementById('cinematicStageText');
  const playBtn = document.getElementById('cinematicPlayBtn');
  const restartBtn = document.getElementById('cinematicRestartBtn');
  const timelineWrap = document.getElementById('cinematicTimeline');
  const timelineBar = document.getElementById('cinematicTimelineBar');
  const loader = document.getElementById('cinematicLoader');
  const markerEls = document.querySelectorAll('.timeline-markers .marker');

  const iconPause = playBtn?.querySelector('.icon-pause');
  const iconPlay = playBtn?.querySelector('.icon-play');

  const FRAME_PATHS = [
    'assets/trimmer/frame_1.jpg',
    'assets/trimmer/frame_2.jpg',
    'assets/trimmer/frame_3.jpg',
    'assets/trimmer/frame_4.jpg',
    'assets/trimmer/frame_5.jpg',
    'assets/trimmer/frame_6.jpg',
    'assets/trimmer/frame_7.jpg',
    'assets/trimmer/frame_8.jpg',
    'assets/trimmer/frame_9.jpg',
    'assets/trimmer/frame_10.jpg'
  ];

  const STAGES = [
    {
      title: "1. Approach & Positioning",
      start: 0.0, end: 1.8,
      cam: { zoom: 1.12, panX: 0.015, panY: -0.01 },
      shearCut: null
    },
    {
      title: "2. Cutting Long Branches",
      start: 1.8, end: 3.6,
      cam: { zoom: 1.10, panX: -0.02, panY: -0.02 },
      shearCut: { x: 0.40, y: 0.26 }
    },
    {
      title: "3. Horizontal Perimeter Trim",
      start: 3.6, end: 5.4,
      cam: { zoom: 1.08, panX: 0.015, panY: -0.01 },
      shearCut: { x: 0.60, y: 0.22 }
    },
    {
      title: "4. Canopy High-Reach Cuts",
      start: 5.4, end: 7.2,
      cam: { zoom: 1.12, panX: 0.025, panY: -0.035 },
      shearCut: { x: 0.46, y: 0.20 }
    },
    {
      title: "5. Sculpting Upper Dome",
      start: 7.2, end: 9.0,
      cam: { zoom: 1.06, panX: -0.015, panY: 0.0 },
      shearCut: { x: 0.20, y: 0.48 }
    },
    {
      title: "6. Refining Foliage & Clippings",
      start: 9.0, end: 10.8,
      cam: { zoom: 1.04, panX: 0.01, panY: 0.01 },
      shearCut: { x: 0.48, y: 0.54 }
    },
    {
      title: "7. Lower Spherical Detailing",
      start: 10.8, end: 12.6,
      cam: { zoom: 1.02, panX: 0.0, panY: 0.01 },
      shearCut: { x: 0.50, y: 0.74 }
    },
    {
      title: "8. Form Inspection",
      start: 12.6, end: 14.4,
      cam: { zoom: 1.00, panX: 0.0, panY: 0.0 },
      shearCut: null
    },
    {
      title: "9. Artisan Quality Review",
      start: 14.4, end: 16.0,
      cam: { zoom: 0.98, panX: 0.0, panY: 0.0 },
      shearCut: null
    },
    {
      title: "10. Masterpiece: Spherical Shrub",
      start: 16.0, end: 18.5,
      cam: { zoom: 0.96, panX: 0.0, panY: 0.0 },
      shearCut: null
    }
  ];

  const TOTAL_DURATION = 18.5;
  const TRANSITION_WINDOW = 0.58;

let currentTime = 0;
  let isPlaying = true;
  let isIntersecting = false;
  let lastTimestamp = 0;
  let animationFrameId = null;
  let isDraggingScrubber = false;

const images = [];
  let loadedCount = 0;

  FRAME_PATHS.forEach((path, i) => {
    const img = new Image();
    img.src = path;
    img.onload = () => {
      loadedCount++;
      if (loadedCount === FRAME_PATHS.length) {
        if (loader) loader.classList.add('loaded');
        renderFrame(currentTime);
      }
    };
    img.onerror = () => {
      console.warn(`Could not load trimmer frame: ${path}`);
      loadedCount++;
      if (loadedCount === FRAME_PATHS.length && loader) {
        loader.classList.add('loaded');
      }
    };
    images[i] = img;
  });

const particles = [];
  const sparkles = [];
  const MAX_PARTICLES = 65;

  const LEAF_COLORS = ['#388E3C', '#4CAF50', '#81C784', '#2E7D32', '#66BB6A', '#A5D6A7', '#C8E6C9'];
  const TWIG_COLORS = ['#5D4037', '#6D4C41', '#4E342E', '#3E2723'];

const ambientMotes = [];
  for (let i = 0; i < 24; i++) {
    ambientMotes.push({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 0.8 + Math.random() * 1.8,
      speedX: 0.15 + Math.random() * 0.35,
      speedY: -0.1 - Math.random() * 0.25,
      opacity: 0.2 + Math.random() * 0.45,
      wobble: Math.random() * Math.PI * 2
    });
  }

  function spawnClipping(shearX, shearY) {
    if (particles.length >= MAX_PARTICLES) return;
    const isTwig = Math.random() < 0.2;
    particles.push({
      x: shearX + (Math.random() - 0.5) * 35,
      y: shearY + (Math.random() - 0.5) * 25,
      vx: (Math.random() - 0.5) * 2.8 + (Math.random() > 0.5 ? 1.2 : -1.2),
      vy: -1.2 - Math.random() * 2.4,
      gravity: 0.16 + Math.random() * 0.08,
      angle: Math.random() * Math.PI * 2,
      vAngle: (Math.random() - 0.5) * 0.18,
      flip: Math.random() * Math.PI * 2,
      vFlip: 0.08 + Math.random() * 0.12,
      size: isTwig ? (6 + Math.random() * 8) : (5 + Math.random() * 6),
      aspect: isTwig ? 0.22 : (0.45 + Math.random() * 0.3),
      color: isTwig
        ? TWIG_COLORS[Math.floor(Math.random() * TWIG_COLORS.length)]
        : LEAF_COLORS[Math.floor(Math.random() * LEAF_COLORS.length)],
      isTwig: isTwig,
      wobblePhase: Math.random() * Math.PI * 2,
      wobbleSpeed: 4 + Math.random() * 3,
      life: 0,
      maxLife: 90 + Math.random() * 60,
      opacity: 1
    });
  }

  function spawnGlint(x, y) {
    sparkles.push({
      x: x + (Math.random() - 0.5) * 20,
      y: y + (Math.random() - 0.5) * 20,
      scale: 0.2,
      maxScale: 1.0 + Math.random() * 0.4,
      rotation: Math.random() * Math.PI,
      life: 0,
      maxLife: 22
    });
  }

function drawCoverImage(ctx, img, canvasW, canvasH, zoom, panX, panY) {
    if (!img || !img.complete || img.naturalWidth === 0) return;

    const imgW = img.naturalWidth;
    const imgH = img.naturalHeight;
    const imgRatio = imgW / imgH;
    const canvasRatio = canvasW / canvasH;

    let baseW, baseH;
    if (imgRatio > canvasRatio) {
      baseH = canvasH;
      baseW = canvasH * imgRatio;
    } else {
      baseW = canvasW;
      baseH = canvasW / imgRatio;
    }

    const drawW = baseW * zoom;
    const drawH = baseH * zoom;

    const offsetX = (canvasW - drawW) / 2 + panX * canvasW;
    const offsetY = (canvasH - drawH) / 2 + panY * canvasH;

    ctx.drawImage(img, offsetX, offsetY, drawW, drawH);
  }

  function getStageAtTime(t) {
    for (let i = 0; i < STAGES.length; i++) {
      if (t >= STAGES[i].start && t < STAGES[i].end) return i;
    }
    return STAGES.length - 1;
  }

function renderFrame(t) {
    if (loadedCount < 1) return;

    const currentIdx = getStageAtTime(t);
    const nextIdx = (currentIdx + 1) % STAGES.length;
    const curStage = STAGES[currentIdx];
    const nextStage = STAGES[nextIdx];

let alpha = 0;
    const transitionStart = curStage.end - TRANSITION_WINDOW;
    if (t >= transitionStart && t <= curStage.end) {
      const progress = (t - transitionStart) / TRANSITION_WINDOW;

      alpha = progress * progress * (3 - 2 * progress);
    }

const driftX = Math.sin(t * 0.85) * 0.004;
    const driftY = Math.cos(t * 1.05) * 0.003;

    const curCam = curStage.cam;
    const nextCam = nextStage.cam;

    const curZoom = curCam.zoom;
    const nextZoom = nextCam.zoom;
    const curPanX = curCam.panX + driftX;
    const curPanY = curCam.panY + driftY;
    const nextPanX = nextCam.panX + driftX;
    const nextPanY = nextCam.panY + driftY;

ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawCoverImage(ctx, images[currentIdx], canvas.width, canvas.height, curZoom, curPanX, curPanY);

if (alpha > 0.001) {
      ctx.save();
      ctx.globalAlpha = alpha;
      drawCoverImage(ctx, images[nextIdx], canvas.width, canvas.height, nextZoom, nextPanX, nextPanY);
      ctx.restore();
    }

if (curStage.shearCut) {
      const sx = curStage.shearCut.x * canvas.width;
      const sy = curStage.shearCut.y * canvas.height;

      const snipCycle = (t * 2.8) % 1;
      if (snipCycle < 0.12 && isPlaying) {
        spawnClipping(sx, sy);
        if (Math.random() < 0.45) spawnClipping(sx, sy);
        if (Math.random() < 0.18) spawnGlint(sx, sy);
      }
    }

for (let i = particles.length - 1; i >= 0; i--) {
      const p = particles[i];
      if (isPlaying) {
        p.life++;
        p.vy += p.gravity;
        p.x += p.vx + Math.sin(p.wobblePhase + p.life * 0.12) * 0.8;
        p.y += p.vy;
        p.angle += p.vAngle;
        p.flip += p.vFlip;

if (p.vy > 3.5) p.vy = 3.5;

if (p.y > canvas.height * 0.9) {
          p.opacity -= 0.025;
        }
        if (p.life >= p.maxLife) {
          p.opacity -= 0.04;
        }
      }

      if (p.opacity <= 0) {
        particles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate(p.angle);

      const flipScale = Math.cos(p.flip);
      ctx.scale(flipScale, 1);
      ctx.globalAlpha = Math.max(0, p.opacity * 0.95);

      if (p.isTwig) {
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.size / 2, -1.2, p.size, 2.4);
      } else {

        ctx.fillStyle = p.color;
        ctx.beginPath();
        const halfLen = p.size;
        const halfWid = p.size * p.aspect;
        ctx.moveTo(-halfLen, 0);
        ctx.quadraticCurveTo(0, -halfWid, halfLen, 0);
        ctx.quadraticCurveTo(0, halfWid, -halfLen, 0);
        ctx.closePath();
        ctx.fill();

ctx.strokeStyle = 'rgba(255, 255, 255, 0.28)';
        ctx.lineWidth = 0.8;
        ctx.beginPath();
        ctx.moveTo(-halfLen * 0.7, 0);
        ctx.lineTo(halfLen * 0.7, 0);
        ctx.stroke();
      }
      ctx.restore();
    }

for (let i = sparkles.length - 1; i >= 0; i--) {
      const s = sparkles[i];
      if (isPlaying) {
        s.life++;
        const half = s.maxLife / 2;
        if (s.life < half) {
          s.scale = (s.life / half) * s.maxScale;
        } else {
          s.scale = (1 - (s.life - half) / half) * s.maxScale;
        }
      }

      if (s.life >= s.maxLife) {
        sparkles.splice(i, 1);
        continue;
      }

      ctx.save();
      ctx.translate(s.x, s.y);
      ctx.rotate(s.rotation);
      ctx.scale(s.scale, s.scale);
      ctx.strokeStyle = '#FFFFFF';
      ctx.lineWidth = 2;
      ctx.beginPath();

      ctx.moveTo(-12, 0); ctx.lineTo(12, 0);
      ctx.moveTo(0, -12); ctx.lineTo(0, 12);
      ctx.stroke();
      ctx.fillStyle = '#FFF59D';
      ctx.beginPath();
      ctx.arc(0, 0, 3, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

ctx.save();
    for (let i = 0; i < ambientMotes.length; i++) {
      const m = ambientMotes[i];
      if (isPlaying) {
        m.x += m.speedX;
        m.y += m.speedY;
        m.wobble += 0.02;
        if (m.x > canvas.width) m.x = 0;
        if (m.y < 0) m.y = canvas.height;
      }
      ctx.fillStyle = 'rgba(255, 248, 220, ' + (m.opacity * 0.75) + ')';
      ctx.beginPath();
      ctx.arc(m.x + Math.sin(m.wobble) * 3, m.y, m.radius, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

if (stagePillText && stagePillText.textContent !== curStage.title) {
      stagePillText.textContent = curStage.title;
    }

    const progressPct = (t / TOTAL_DURATION) * 100;
    if (timelineBar) {
      timelineBar.style.width = `${progressPct}%`;
    }

    markerEls.forEach((marker, idx) => {
      if (idx === currentIdx) {
        marker.style.background = 'var(--gold-accent)';
        marker.style.transform = 'translateX(-50%) scale(1.6)';
      } else {
        marker.style.background = 'rgba(255, 255, 255, 0.4)';
        marker.style.transform = 'translateX(-50%) scale(1)';
      }
    });
  }

function loop(timestamp) {
    if (!lastTimestamp) lastTimestamp = timestamp;
    const delta = (timestamp - lastTimestamp) / 1000;
    lastTimestamp = timestamp;

    if (isPlaying && isIntersecting && !isDraggingScrubber) {
      currentTime += Math.min(delta, 0.1);
      if (currentTime >= TOTAL_DURATION) {
        currentTime = 0;
      }
    }

    renderFrame(currentTime);
    animationFrameId = requestAnimationFrame(loop);
  }

function setPlayingState(play) {
    isPlaying = play;
    if (iconPause && iconPlay) {
      if (isPlaying) {
        iconPause.style.display = 'block';
        iconPlay.style.display = 'none';
        playBtn?.setAttribute('aria-label', 'Pause animation');
      } else {
        iconPause.style.display = 'none';
        iconPlay.style.display = 'block';
        playBtn?.setAttribute('aria-label', 'Play animation');
      }
    }
  }

  playBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    setPlayingState(!isPlaying);
  });

  restartBtn?.addEventListener('click', (e) => {
    e.stopPropagation();
    currentTime = 0;
    setPlayingState(true);
    renderFrame(currentTime);
  });

function seekFromEvent(e) {
    const rect = timelineWrap.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const ratio = x / rect.width;
    currentTime = ratio * TOTAL_DURATION;
    renderFrame(currentTime);
  }

  timelineWrap?.addEventListener('mousedown', (e) => {
    isDraggingScrubber = true;
    seekFromEvent(e);
  });

  window.addEventListener('mousemove', (e) => {
    if (isDraggingScrubber) {
      seekFromEvent(e);
    }
  });

  window.addEventListener('mouseup', () => {
    if (isDraggingScrubber) {
      isDraggingScrubber = false;
    }
  });

timelineWrap?.addEventListener('touchstart', (e) => {
    if (e.touches.length === 1) {
      isDraggingScrubber = true;
      const touch = e.touches[0];
      const rect = timelineWrap.getBoundingClientRect();
      const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
      currentTime = (x / rect.width) * TOTAL_DURATION;
      renderFrame(currentTime);
    }
  }, { passive: true });

  window.addEventListener('touchmove', (e) => {
    if (isDraggingScrubber && e.touches.length === 1) {
      const touch = e.touches[0];
      const rect = timelineWrap.getBoundingClientRect();
      const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
      currentTime = (x / rect.width) * TOTAL_DURATION;
      renderFrame(currentTime);
    }
  }, { passive: true });

  window.addEventListener('touchend', () => {
    isDraggingScrubber = false;
  });

markerEls.forEach((marker) => {
    marker.style.pointerEvents = 'auto';
    marker.style.cursor = 'pointer';
    marker.addEventListener('click', (e) => {
      e.stopPropagation();
      const step = parseInt(marker.getAttribute('data-step'), 10);
      if (!isNaN(step) && STAGES[step]) {
        currentTime = STAGES[step].start;
        renderFrame(currentTime);
      }
    });
  });

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      isIntersecting = entry.isIntersecting;
      if (isIntersecting && !animationFrameId) {
        lastTimestamp = performance.now();
        animationFrameId = requestAnimationFrame(loop);
      }
    });
  }, { threshold: 0.1 });

  const checkInitialVisibility = () => {
    const rect = canvas.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      isIntersecting = true;
    }
  };
  checkInitialVisibility();

  observer.observe(canvas);

lastTimestamp = performance.now();
  animationFrameId = requestAnimationFrame(loop);
}

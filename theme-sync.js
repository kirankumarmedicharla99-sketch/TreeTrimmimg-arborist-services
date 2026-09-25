(function (window, document) {
  'use strict';

  var THEME_KEY = 'arvora_theme';
  var DIR_KEY = 'arvora_dir';
  var DEFAULT_THEME = 'dark';
  var DEFAULT_DIR = 'ltr';

var themeChannel = null;
  try {
    if (typeof window.BroadcastChannel !== 'undefined') {
      themeChannel = new BroadcastChannel('arvora_theme_channel');
    }
  } catch (e) {
    themeChannel = null;
  }

function getCookie(name) {
    try {
      var match = document.cookie.match(new RegExp('(?:^|;\\s*)' + name + '=([^;]+)'));
      return match ? decodeURIComponent(match[1]) : null;
    } catch (e) {
      return null;
    }
  }

  function setCookie(name, val) {
    try {
      document.cookie = name + '=' + encodeURIComponent(val) + '; path=/; max-age=31536000; SameSite=Lax';
    } catch (e) {

    }
  }

function getActiveTheme() {
    var theme = null;
    try {
      theme = localStorage.getItem(THEME_KEY);
    } catch (e) {}

    if (!theme) {
      theme = getCookie(THEME_KEY);
    }

    if (!theme) {
      theme = document.documentElement.getAttribute('data-theme');
    }

    return theme === 'light' ? 'light' : DEFAULT_THEME;
  }

function getActiveDir() {
    var dir = null;
    try {
      dir = localStorage.getItem(DIR_KEY);
    } catch (e) {}

    if (!dir) {
      dir = getCookie(DIR_KEY);
    }

    if (!dir) {
      dir = document.documentElement.getAttribute('dir');
    }

    return dir === 'rtl' ? 'rtl' : DEFAULT_DIR;
  }

function updateThemeButtons(theme) {
    var buttons = document.querySelectorAll('#themeToggleBtn, #drawerThemeBtn, .theme-toggle-btn, [data-action="toggle-theme"]');
    var isDark = theme === 'dark';
    var nextTheme = isDark ? 'light' : 'dark';

    buttons.forEach(function (btn) {
      btn.setAttribute('aria-label', 'Switch to ' + nextTheme + ' theme');
      btn.setAttribute('title', 'Switch to ' + nextTheme + ' theme');
      btn.setAttribute('data-current-theme', theme);
    });
  }

function updateDirButtons(dir) {
    var isRtl = dir === 'rtl';

    var rtlBtns = document.querySelectorAll('#rtlToggleBtn, .rtl-toggle-btn');
    rtlBtns.forEach(function (btn) {
      if (isRtl) {
        btn.classList.add('active-rtl');
      } else {
        btn.classList.remove('active-rtl');
      }
    });

    var rtlLabels = document.querySelectorAll('#rtlBtnText, .rtl-label');
    rtlLabels.forEach(function (label) {
      label.textContent = isRtl ? 'LTR' : 'RTL';
    });

    var drawerRtlLabels = document.querySelectorAll('#drawerRtlText');
    drawerRtlLabels.forEach(function (label) {
      label.textContent = isRtl ? 'RTL (Click for LTR)' : 'LTR (Click for RTL)';
    });
  }

function applyTheme(theme, shouldPersist) {
    if (theme !== 'light' && theme !== 'dark') {
      theme = DEFAULT_THEME;
    }

document.documentElement.setAttribute('data-theme', theme);

if (shouldPersist !== false) {
      try {
        localStorage.setItem(THEME_KEY, theme);
      } catch (e) {}
      setCookie(THEME_KEY, theme);

if (themeChannel) {
        try {
          themeChannel.postMessage({ type: 'THEME_SYNC', theme: theme });
        } catch (e) {}
      }
    }

    updateThemeButtons(theme);

window.dispatchEvent(new CustomEvent('arvora_theme_change', { detail: { theme: theme } }));
  }

function applyDir(dir, shouldPersist) {
    if (dir !== 'rtl' && dir !== 'ltr') {
      dir = DEFAULT_DIR;
    }

    document.documentElement.setAttribute('dir', dir);

    if (shouldPersist !== false) {
      try {
        localStorage.setItem(DIR_KEY, dir);
      } catch (e) {}
      setCookie(DIR_KEY, dir);

      if (themeChannel) {
        try {
          themeChannel.postMessage({ type: 'DIR_SYNC', dir: dir });
        } catch (e) {}
      }
    }

    updateDirButtons(dir);

    window.dispatchEvent(new CustomEvent('arvora_dir_change', { detail: { dir: dir } }));
  }

function toggleTheme() {
    var current = getActiveTheme();
    var newTheme = current === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme, true);
    return newTheme;
  }

function toggleDir() {
    var current = getActiveDir();
    var newDir = current === 'rtl' ? 'ltr' : 'rtl';
    applyDir(newDir, true);
    return newDir;
  }

var initialTheme = getActiveTheme();
  var initialDir = getActiveDir();
  document.documentElement.setAttribute('data-theme', initialTheme);
  document.documentElement.setAttribute('dir', initialDir);

window.addEventListener('storage', function (e) {
    if (e.key === THEME_KEY && e.newValue) {
      applyTheme(e.newValue, false);
    } else if (e.key === DIR_KEY && e.newValue) {
      applyDir(e.newValue, false);
    }
  });

if (themeChannel) {
    themeChannel.onmessage = function (e) {
      if (e && e.data) {
        if (e.data.type === 'THEME_SYNC' && e.data.theme) {
          applyTheme(e.data.theme, false);
        } else if (e.data.type === 'DIR_SYNC' && e.data.dir) {
          applyDir(e.data.dir, false);
        }
      }
    };
  }

function onDomReady() {
    var curTheme = getActiveTheme();
    var curDir = getActiveDir();
    applyTheme(curTheme, false);
    applyDir(curDir, false);

    var header = document.querySelector('.atelier-header, #mainHeader');
    if (header) {
      document.body.classList.add('has-fixed-header');
    }

document.addEventListener('click', function (e) {
      var target = e.target;
      if (!target) return;

      var themeBtn = target.closest('#themeToggleBtn, #drawerThemeBtn, .theme-toggle-btn, [data-action="toggle-theme"]');
      if (themeBtn) {
        e.preventDefault();
        e.stopPropagation();
        toggleTheme();
        return;
      }

      var rtlBtn = target.closest('#rtlToggleBtn, #drawerRtlBtn, .rtl-toggle-btn, [data-action="toggle-rtl"]');
      if (rtlBtn) {
        e.preventDefault();
        e.stopPropagation();
        toggleDir();
        return;
      }

var loginBtn = target.closest('#headerLoginBtn, .open-login-modal, [data-action="login"]');
      if (loginBtn && !loginBtn.closest('#loginModal') && !window.location.pathname.endsWith('login.html')) {
        e.preventDefault();
        e.stopPropagation();
        window.location.href = 'login.html';
        return;
      }

      var anchor = target.closest('a[href^="#"]');
      if (anchor) {
        var href = anchor.getAttribute('href');
        if (href === '#' || href === '#!') {
          e.preventDefault();
          return;
        }
        if (href && !href.startsWith('#quoteModal') && !href.startsWith('#loginModal') && !href.startsWith('#storyModal')) {
          var targetEl = document.querySelector(href);
          if (targetEl) {
            e.preventDefault();
            var headerEl = document.getElementById('mainHeader') || document.querySelector('.atelier-header');
            var headerH = headerEl ? headerEl.offsetHeight : 72;
            var elemPos = targetEl.getBoundingClientRect().top + window.pageYOffset;
            window.scrollTo({
              top: Math.max(0, elemPos - headerH - 8),
              behavior: 'smooth'
            });
            if (window.history && window.history.pushState) {
              window.history.pushState(null, null, href);
            }
          }
        }
      }
    }, true);

    syncActiveNavigation();
  }

  function syncActiveNavigation() {
    var rawPath = window.location.pathname.split('/').pop().toLowerCase();
    if (!rawPath || rawPath === '' || rawPath === '/') {
      rawPath = 'index.html';
    }
    rawPath = rawPath.split('?')[0].split('#')[0];
    try {
      rawPath = decodeURIComponent(rawPath);
    } catch (e) {}

    var isHome1 = rawPath === 'index.html' || rawPath === '';
    var isHome2 = rawPath === 'home2.html';
    var isHome = isHome1 || isHome2;
    var isAbout = rawPath === 'about.html';
    var isServices = rawPath === 'service.html' || rawPath.indexOf('service detail') !== -1 || rawPath.indexOf('service%20detail') !== -1;
    var isPricing = rawPath === 'pricing.html';
    var isJournals = rawPath === 'journal.html' || rawPath.indexOf('journal detail') !== -1 || rawPath.indexOf('journal%20detail') !== -1;
    var isContact = rawPath === 'contact.html';
    var isDashboard = rawPath === 'dashboard.html';

    // Desktop Nav Items
    var navLinks = document.querySelectorAll('.nav-menu .nav-link, .atelier-header .nav-link, #mainHeader .nav-link');
    navLinks.forEach(function (link) {
      var href = (link.getAttribute('href') || '').toLowerCase().trim();
      var parentItem = link.parentElement;
      var isDropdownTrigger = parentItem && parentItem.classList.contains('has-dropdown');

      if (isDropdownTrigger) {
        if (isHome) {
          link.classList.add('active');
        } else {
          link.classList.remove('active');
        }
        return;
      }

      if (isAbout && href.indexOf('about.html') !== -1) {
        link.classList.add('active');
      } else if (isServices && (href.indexOf('service.html') !== -1 || href.indexOf('service detail') !== -1 || href.indexOf('service%20detail') !== -1)) {
        link.classList.add('active');
      } else if (isPricing && href.indexOf('pricing.html') !== -1) {
        link.classList.add('active');
      } else if (isJournals && (href.indexOf('journal.html') !== -1 || href.indexOf('journal detail') !== -1 || href.indexOf('journal%20detail') !== -1)) {
        link.classList.add('active');
      } else if (isContact && href.indexOf('contact.html') !== -1) {
        link.classList.add('active');
      } else if (isDashboard && href.indexOf('dashboard.html') !== -1) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    // Home dropdown options
    var dropLinks = document.querySelectorAll('.dropdown-menu .dropdown-link');
    dropLinks.forEach(function (dLink) {
      var href = (dLink.getAttribute('href') || '').toLowerCase().trim();
      if (isHome1 && href.indexOf('index.html') !== -1) {
        dLink.classList.add('active');
      } else if (isHome2 && href.indexOf('home2.html') !== -1) {
        dLink.classList.add('active');
      } else {
        dLink.classList.remove('active');
      }
    });

    // Drawer switcher pills
    var switchPills = document.querySelectorAll('.drawer-switch-pill');
    switchPills.forEach(function (pill) {
      var href = (pill.getAttribute('href') || '').toLowerCase().trim();
      if (isHome1 && href.indexOf('index.html') !== -1) {
        pill.classList.add('active');
      } else if (isHome2 && href.indexOf('home2.html') !== -1) {
        pill.classList.add('active');
      } else if (isAbout && href.indexOf('about.html') !== -1) {
        pill.classList.add('active');
      } else if (isServices && href.indexOf('service.html') !== -1) {
        pill.classList.add('active');
      } else if (isPricing && href.indexOf('pricing.html') !== -1) {
        pill.classList.add('active');
      } else if (isJournals && href.indexOf('journal.html') !== -1) {
        pill.classList.add('active');
      } else if (isContact && href.indexOf('contact.html') !== -1) {
        pill.classList.add('active');
      } else {
        pill.classList.remove('active');
      }
    });

    // Drawer navigation links
    var drawerLinks = document.querySelectorAll('.drawer-nav-list a, .drawer-link, .drawer-nav-link');
    drawerLinks.forEach(function (link) {
      var href = (link.getAttribute('href') || '').toLowerCase().trim();
      var text = (link.textContent || '').toLowerCase().trim();

      if (isHome1 && (href === 'index.html' || href === '#hero' || href.indexOf('index.html') !== -1 || text === 'home' || text.indexOf('home 1') !== -1)) {
        link.classList.add('active');
      } else if (isHome2 && (href === 'home2.html' || href.indexOf('home2.html') !== -1 || text.indexOf('home 2') !== -1)) {
        link.classList.add('active');
      } else if (isAbout && href.indexOf('about.html') !== -1) {
        link.classList.add('active');
      } else if (isServices && (href.indexOf('service.html') !== -1 || href.indexOf('service detail') !== -1 || href.indexOf('service%20detail') !== -1)) {
        link.classList.add('active');
      } else if (isPricing && href.indexOf('pricing.html') !== -1) {
        link.classList.add('active');
      } else if (isJournals && (href.indexOf('journal.html') !== -1 || href.indexOf('journal detail') !== -1 || href.indexOf('journal%20detail') !== -1)) {
        link.classList.add('active');
      } else if (isContact && href.indexOf('contact.html') !== -1) {
        link.classList.add('active');
      } else if (isDashboard && href.indexOf('dashboard.html') !== -1) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', onDomReady);
  } else {
    onDomReady();
  }

window.ArvoraTheme = {
    getTheme: getActiveTheme,
    setTheme: function (theme) { applyTheme(theme, true); },
    toggleTheme: toggleTheme,
    getDir: getActiveDir,
    setDir: function (dir) { applyDir(dir, true); },
    toggleDir: toggleDir
  };

})(window, document);

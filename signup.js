(function () {
  'use strict';

var toastEl = document.getElementById('authToast');
  var toastMsgEl = document.getElementById('authToastMessage');
  var toastTimer = null;

  function showToast(message, duration) {
    if (!toastEl || !toastMsgEl) return;
    duration = duration || 3500;

    toastMsgEl.textContent = message;
    toastEl.classList.add('show');

    if (toastTimer) {
      clearTimeout(toastTimer);
    }

    toastTimer = setTimeout(function () {
      toastEl.classList.remove('show');
    }, duration);
  }

var passwordInput = document.getElementById('signupPassword');
  var passwordToggleBtn = document.getElementById('passwordToggleBtn');

  if (passwordToggleBtn && passwordInput) {
    var eyeOpen = passwordToggleBtn.querySelector('.eye-open');
    var eyeClosed = passwordToggleBtn.querySelector('.eye-closed');

    passwordToggleBtn.addEventListener('click', function () {
      var isPassword = passwordInput.type === 'password';
      passwordInput.type = isPassword ? 'text' : 'password';

      if (eyeOpen && eyeClosed) {
        eyeOpen.style.display = isPassword ? 'none' : 'block';
        eyeClosed.style.display = isPassword ? 'block' : 'none';
      }

      passwordToggleBtn.setAttribute('aria-label', isPassword ? 'Hide password' : 'Show password');
    });
  }

var meterFill = document.getElementById('meterFill');
  var meterText = document.getElementById('meterText');

  if (passwordInput && meterFill && meterText) {
    passwordInput.addEventListener('input', function () {
      var val = passwordInput.value;
      if (!val) {
        meterFill.className = 'meter-fill';
        meterFill.style.width = '0%';
        meterText.className = 'meter-text';
        meterText.textContent = 'Security strength';
        return;
      }

var score = 0;
      if (val.length >= 8) score++;
      if (val.length >= 12) score++;
      if (/[A-Z]/.test(val) && /[a-z]/.test(val)) score++;
      if (/[0-9]/.test(val)) score++;
      if (/[^A-Za-z0-9]/.test(val)) score++;

      if (score <= 2) {
        meterFill.className = 'meter-fill weak';
        meterText.className = 'meter-text weak';
        meterText.textContent = 'Weak password';
      } else if (score === 3 || score === 4) {
        meterFill.className = 'meter-fill medium';
        meterText.className = 'meter-text medium';
        meterText.textContent = 'Moderate security';
      } else {
        meterFill.className = 'meter-fill strong';
        meterText.className = 'meter-text strong';
        meterText.textContent = 'Strong security';
      }
    });
  }

var signupForm = document.getElementById('signupForm');
  var submitBtn = document.getElementById('submitSignupBtn');
  var nameInput = document.getElementById('signupName');
  var emailInput = document.getElementById('signupEmail');
  var termsCheckbox = document.getElementById('termsAgreement');

  if (signupForm && submitBtn) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var name = (nameInput ? nameInput.value : '').trim();
      var email = (emailInput ? emailInput.value : '').trim();
      var password = (passwordInput ? passwordInput.value : '').trim();
      var termsAccepted = termsCheckbox ? termsCheckbox.checked : false;

      if (!name) {
        showToast('Please enter your full name.');
        if (nameInput) nameInput.focus();
        return;
      }

      if (!email) {
        showToast('Please enter your estate email address.');
        if (emailInput) emailInput.focus();
        return;
      }

      if (password.length < 8) {
        showToast('Password must be at least 8 characters long.');
        if (passwordInput) passwordInput.focus();
        return;
      }

      if (!termsAccepted) {
        showToast('Please accept the Terms of Care & Privacy Policy.');
        return;
      }

submitBtn.disabled = true;
      submitBtn.innerHTML = '<span>Creating Account...</span>';

      setTimeout(function () {

        try {
          localStorage.setItem('arvora_user', name);
          localStorage.setItem('arvora_email', email);
        } catch (err) {}

        showToast('Account created successfully! Welcome to ARVORA.');

setTimeout(function () {
          window.location.href = 'dashboard.html';
        }, 900);
      }, 750);
    });
  }

var googleBtn = document.getElementById('googleSignupBtn');
  var appleBtn = document.getElementById('appleSignupBtn');

  if (googleBtn) {
    googleBtn.addEventListener('click', function () {
      showToast('Connecting with Google Workspace...');
      try {
        localStorage.setItem('arvora_user', 'Estate Client');
      } catch (e) {}
      setTimeout(function () {
        window.location.href = 'dashboard.html';
      }, 1000);
    });
  }

  if (appleBtn) {
    appleBtn.addEventListener('click', function () {
      showToast('Registering via Apple ID...');
      try {
        localStorage.setItem('arvora_user', 'Estate Client');
      } catch (e) {}
      setTimeout(function () {
        window.location.href = 'dashboard.html';
      }, 1000);
    });
  }

var termLinks = document.querySelectorAll('.terms-link');
  termLinks.forEach(function (link) {
    link.addEventListener('click', function (e) {
      e.preventDefault();
      showToast('ARVORA Standard Arborist Terms & Canopy Privacy Guarantee.');
    });
  });

})();

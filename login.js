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

var passwordInput = document.getElementById('loginPassword');
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

var loginForm = document.getElementById('loginForm');
  var submitBtn = document.getElementById('submitLoginBtn');
  var emailInput = document.getElementById('loginEmail');

  if (loginForm && submitBtn) {
    loginForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var email = (emailInput ? emailInput.value : '').trim();
      var password = (passwordInput ? passwordInput.value : '').trim();

      if (!email || !password) {
        showToast('Please enter both email and password.');
        return;
      }

submitBtn.disabled = true;
      var originalHtml = submitBtn.innerHTML;
      submitBtn.innerHTML = '<span>Authenticating...</span>';

      setTimeout(function () {

        try {
          localStorage.setItem('arvora_user', 'Yash');
          localStorage.setItem('arvora_email', email);
        } catch (err) {}

        showToast('Authentication successful! Entering your atelier...');

setTimeout(function () {
          window.location.href = 'dashboard.html';
        }, 800);
      }, 700);
    });
  }

var googleBtn = document.getElementById('googleAuthBtn');
  var appleBtn = document.getElementById('appleAuthBtn');

  if (googleBtn) {
    googleBtn.addEventListener('click', function () {
      showToast('Authenticating with Google Workspace...');
      try {
        localStorage.setItem('arvora_user', 'Yash');
      } catch (e) {}
      setTimeout(function () {
        window.location.href = 'dashboard.html';
      }, 1000);
    });
  }

  if (appleBtn) {
    appleBtn.addEventListener('click', function () {
      showToast('Authenticating with Apple ID...');
      try {
        localStorage.setItem('arvora_user', 'Yash');
      } catch (e) {}
      setTimeout(function () {
        window.location.href = 'dashboard.html';
      }, 1000);
    });
  }

var forgotLink = document.getElementById('forgotPassLink');
  if (forgotLink) {
    forgotLink.addEventListener('click', function () {
      var email = emailInput ? emailInput.value.trim() : '';
      if (email) {
        showToast('Password reset link sent to ' + email);
      } else {
        showToast('Please enter your estate email address above first.');
        if (emailInput) emailInput.focus();
      }
    });
  }

})();

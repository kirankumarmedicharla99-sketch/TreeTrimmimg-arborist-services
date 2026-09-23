document.addEventListener('DOMContentLoaded', () => {
  initAboutStatsCounters();
  initTimelineInteractivity();
  initTeamConsultation();
  initAboutSmoothScroll();
});

function initAboutStatsCounters() {
  const statElements = document.querySelectorAll('.about-stat-num');
  const statsContainer = document.querySelector('.about-hero-stats');
  if (!statElements.length) return;

  const statsData = [];

  statElements.forEach((el) => {
    const text = el.textContent.trim();
    const targetAttr = el.getAttribute('data-target');
    const suffixAttr = el.getAttribute('data-suffix');
    const decimalsAttr = el.getAttribute('data-decimals');

const target = targetAttr !== null ? parseFloat(targetAttr) : (parseFloat(text.replace(/[^0-9.]/g, '')) || 0);
    const suffix = suffixAttr !== null ? suffixAttr : text.replace(/[0-9.]/g, '');
    const decimals = decimalsAttr !== null ? parseInt(decimalsAttr, 10) : (text.includes('.') ? 1 : 0);

el.textContent = (0).toFixed(decimals) + suffix;

    statsData.push({ el, target, suffix, decimals });
  });

  let hasAnimated = false;

  function runCounterAnimation() {
    if (hasAnimated) return;
    hasAnimated = true;

    const duration = 1800;
    const startTime = performance.now();

    function frame(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);

      const ease = 1 - Math.pow(1 - progress, 3);

      statsData.forEach(({ el, target, suffix, decimals }) => {
        if (target === 0) {
          el.textContent = '0' + suffix;
          return;
        }

        const currentVal = target * ease;

        if (progress >= 1) {
          el.textContent = (decimals > 0 ? target.toFixed(decimals) : Math.round(target)) + suffix;
        } else {
          el.textContent = (decimals > 0 ? currentVal.toFixed(decimals) : Math.floor(currentVal)) + suffix;
        }
      });

      if (progress < 1) {
        requestAnimationFrame(frame);
      } else {

        statsData.forEach(({ el, target, suffix, decimals }) => {
          el.textContent = (decimals > 0 ? target.toFixed(decimals) : Math.round(target)) + suffix;
        });
      }
    }

    requestAnimationFrame(frame);
  }

if ('IntersectionObserver' in window && statsContainer) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !hasAnimated) {
            runCounterAnimation();
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(statsContainer);
  } else {

    setTimeout(runCounterAnimation, 250);
  }
}

function initTimelineInteractivity() {
  const milestoneItems = document.querySelectorAll('.timeline-milestone-item');
  if (!milestoneItems || milestoneItems.length === 0) return;

  milestoneItems.forEach((item, index) => {

    item.addEventListener('click', () => {
      milestoneItems.forEach((m) => m.classList.remove('active-milestone'));
      item.classList.add('active-milestone');
    });

item.setAttribute('tabindex', '0');
    item.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        milestoneItems.forEach((m) => m.classList.remove('active-milestone'));
        item.classList.add('active-milestone');
      }
    });
  });

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
          }
        });
      },
      { threshold: 0.25 }
    );

    milestoneItems.forEach((item) => observer.observe(item));
  }
}

function initTeamConsultation() {
  const teamBtns = document.querySelectorAll('.team-inquire-btn');
  const quoteModal = document.getElementById('quoteModal');
  const serviceSelect = document.getElementById('serviceSelect');
  const notesField = document.getElementById('userNotes');

  if (!teamBtns.length || !quoteModal) return;

  teamBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const memberName = btn.getAttribute('data-team-name') || 'Arborist';
      const memberRole = btn.getAttribute('data-team-role') || 'Consultation';
      const preferredService = btn.getAttribute('data-preferred-service') || 'Tree Health Diagnostics';

if (serviceSelect) {

        let optionFound = false;
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].value.toLowerCase().includes(preferredService.toLowerCase()) ||
              preferredService.toLowerCase().includes(serviceSelect.options[i].value.toLowerCase())) {
            serviceSelect.selectedIndex = i;
            optionFound = true;
            break;
          }
        }
        if (!optionFound && serviceSelect.options.length > 0) {
          serviceSelect.value = 'Tree Health Diagnostics';
        }
      }

      if (notesField) {
        notesField.value = `Requesting specialized consultation with ${memberName} (${memberRole}).`;
      }

quoteModal.classList.add('active');
      quoteModal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';

const firstInput = quoteModal.querySelector('input');
      if (firstInput) {
        setTimeout(() => firstInput.focus(), 100);
      }
    });
  });
}

function initAboutSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#' || targetId === '#!' || targetId.startsWith('#quoteModal') || targetId.startsWith('#storyModal') || targetId.startsWith('#loginModal')) {
        return;
      }

      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = targetEl.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

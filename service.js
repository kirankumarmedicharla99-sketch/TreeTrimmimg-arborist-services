document.addEventListener('DOMContentLoaded', () => {
  initServiceFaqAccordion();
  initGalleryFiltering();
  initQuickEstimateButtons();
  initServiceSmoothScroll();
});

function initServiceFaqAccordion() {
  const faqTriggers = document.querySelectorAll('.faq-trigger');
  if (!faqTriggers.length) return;

  faqTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const card = trigger.closest('.faq-card');
      if (!card) return;

      const isCurrentlyActive = card.classList.contains('active');

document.querySelectorAll('.faq-card.active').forEach((activeCard) => {
        if (activeCard !== card) {
          activeCard.classList.remove('active');
          const otherTrigger = activeCard.querySelector('.faq-trigger');
          if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
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

trigger.addEventListener('keydown', (e) => {
      if (e.key === ' ' || e.key === 'Enter') {
        e.preventDefault();
        trigger.click();
      }
    });
  });
}

function initGalleryFiltering() {
  const filterBtns = document.querySelectorAll('.gallery-filter-btn');
  const galleryCards = document.querySelectorAll('.gallery-item-card');
  if (!filterBtns.length || !galleryCards.length) return;

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const category = btn.getAttribute('data-filter') || 'all';

filterBtns.forEach((b) => b.classList.remove('active'));
      btn.classList.add('active');

galleryCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category') || '';
        if (category === 'all' || cardCategory === category) {
          card.style.display = 'block';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'scale(1)';
          }, 20);
        } else {
          card.style.opacity = '0';
          card.style.transform = 'scale(0.96)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

function initQuickEstimateButtons() {
  const estimateBtns = document.querySelectorAll('.service-estimate-btn');
  const quoteModal = document.getElementById('quoteModal');
  const serviceSelect = document.getElementById('serviceSelect');
  const notesField = document.getElementById('userNotes');

  if (!estimateBtns.length || !quoteModal) return;

  estimateBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const serviceName = btn.getAttribute('data-service') || '';

if (serviceSelect && serviceName) {
        let matched = false;
        for (let i = 0; i < serviceSelect.options.length; i++) {
          if (serviceSelect.options[i].value.toLowerCase().includes(serviceName.toLowerCase()) ||
              serviceName.toLowerCase().includes(serviceSelect.options[i].value.toLowerCase())) {
            serviceSelect.selectedIndex = i;
            matched = true;
            break;
          }
        }
        if (!matched && serviceSelect.options.length > 0) {
          serviceSelect.value = serviceName;
        }
      }

      if (notesField && serviceName) {
        notesField.value = `Interested in scheduling a consultation for ${serviceName}.`;
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

function initServiceSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#' || targetId.startsWith('#quoteModal') || targetId.startsWith('#loginModal')) {
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

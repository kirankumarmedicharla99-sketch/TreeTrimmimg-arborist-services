document.addEventListener('DOMContentLoaded', () => {
  initBillingSwitcher();
  initPricingFaqs();
  initPricingCommissionButtons();
  initPricingSmoothScroll();
});

function initBillingSwitcher() {
  const btnPerVisit = document.getElementById('btnPerVisit');
  const btnAnnual = document.getElementById('btnAnnual');
  const priceElements = document.querySelectorAll('.price-val');
  const periodElements = document.querySelectorAll('.price-period');

  if (!btnPerVisit || !btnAnnual) return;

  const PRICING_TIERS = {
    visit: [
      { price: '450', period: 'per visit' },
      { price: '1,250', period: 'per visit' },
      { price: '2,850', period: 'per visit' }
    ],
    annual: [
      { price: '1,800', period: '/year (save $300)' },
      { price: '4,800', period: '/year (save $800)' },
      { price: '10,500', period: '/year (save $1,900)' }
    ]
  };

  function updatePrices(mode) {
    const data = PRICING_TIERS[mode];
    if (!data) return;

    priceElements.forEach((el, index) => {
      if (data[index]) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(-4px)';

        setTimeout(() => {
          el.textContent = data[index].price;
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 150);
      }
    });

    periodElements.forEach((el, index) => {
      if (data[index]) {
        el.textContent = data[index].period;
      }
    });

const commissionBtns = document.querySelectorAll('.pricing-commission-btn');
    commissionBtns.forEach((btn) => {
      btn.setAttribute('data-period', mode === 'annual' ? 'Annual Custodianship' : 'Single Visit');
    });
  }

  btnPerVisit.addEventListener('click', () => {
    btnPerVisit.classList.add('active');
    btnAnnual.classList.remove('active');
    btnPerVisit.setAttribute('aria-pressed', 'true');
    btnAnnual.setAttribute('aria-pressed', 'false');
    updatePrices('visit');
  });

  btnAnnual.addEventListener('click', () => {
    btnAnnual.classList.add('active');
    btnPerVisit.classList.remove('active');
    btnAnnual.setAttribute('aria-pressed', 'true');
    btnPerVisit.setAttribute('aria-pressed', 'false');
    updatePrices('annual');
  });
}

function initPricingFaqs() {
  const faqTriggers = document.querySelectorAll('.pricing-faq-trigger');
  if (!faqTriggers.length) return;

  faqTriggers.forEach((trigger) => {
    trigger.addEventListener('click', () => {
      const card = trigger.closest('.pricing-faq-card');
      if (!card) return;

      const isCurrentlyActive = card.classList.contains('active');

document.querySelectorAll('.pricing-faq-card.active').forEach((activeCard) => {
        if (activeCard !== card) {
          activeCard.classList.remove('active');
          const otherTrigger = activeCard.querySelector('.pricing-faq-trigger');
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

function initPricingCommissionButtons() {
  const commissionBtns = document.querySelectorAll('.pricing-commission-btn, #pricingHeroCommissionBtn');
  const quoteModal = document.getElementById('quoteModal');
  const serviceSelect = document.getElementById('serviceSelect');
  const notesField = document.getElementById('userNotes');

  if (!quoteModal) return;

  commissionBtns.forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const packageName = btn.getAttribute('data-tier') || 'Estate Masterwork';
      const period = btn.getAttribute('data-period') || 'Custom Program';

if (serviceSelect) {
        serviceSelect.selectedIndex = 1;
      }

if (notesField) {
        notesField.value = `Interested in ${packageName} (${period}). Please schedule an on-site estate assessment.`;
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

function initPricingSmoothScroll() {
  const anchorLinks = document.querySelectorAll('a[href^="#"]');
  anchorLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      if (!targetId || targetId === '#') return;

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

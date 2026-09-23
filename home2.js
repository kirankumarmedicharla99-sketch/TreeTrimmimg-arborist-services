document.addEventListener('DOMContentLoaded', () => {
  initVaultFilter();
});

function initVaultFilter() {
  const filterBtns = document.querySelectorAll('.vault-filter-btn');
  const cards = document.querySelectorAll('.vault-card');

  if (!filterBtns.length || !cards.length) return;

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {

      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter') || 'all';

      cards.forEach(card => {
        const category = card.getAttribute('data-category') || '';
        if (filter === 'all' || category.includes(filter)) {
          card.style.display = 'flex';
          card.style.transition = 'opacity 0.35s ease, transform 0.35s ease';
          setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
          card.style.opacity = '0';
          card.style.transform = 'translateY(15px)';
          setTimeout(() => {
            card.style.display = 'none';
          }, 250);
        }
      });
    });
  });
}

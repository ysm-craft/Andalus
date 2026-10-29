/**
 * مطعم الأندلس – Menu Page Scripts (menu.html)
 */

document.addEventListener('DOMContentLoaded', () => {
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const mobileMenuDrawer = document.getElementById('mobileMenuDrawer');

  if (mobileMenuBtn && mobileMenuDrawer) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuDrawer.classList.toggle('hidden');
    });

    mobileMenuDrawer.querySelectorAll('a, button').forEach((item) => {
      item.addEventListener('click', () => {
        mobileMenuDrawer.classList.add('hidden');
      });
    });
  }
});


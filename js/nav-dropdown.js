/**
 * Navbar dropdown ("Markets") navigation
 * Replaces the old left sidebar navigation.
 */

function setupNavDropdown() {
  const toggles = document.querySelectorAll('[data-nav-dropdown-toggle]');
  const menus = document.querySelectorAll('[data-nav-dropdown-menu]');

  function closeAll() {
    menus.forEach((m) => m.classList.remove('open'));
    toggles.forEach((t) => t.setAttribute('aria-expanded', 'false'));
  }

  toggles.forEach((toggle) => {
    toggle.addEventListener('click', (e) => {
      e.preventDefault();
      const menuId = toggle.getAttribute('aria-controls');
      const menu = menuId ? document.getElementById(menuId) : null;
      const isOpen = menu?.classList.contains('open');

      closeAll();

      if (menu && !isOpen) {
        menu.classList.add('open');
        toggle.setAttribute('aria-expanded', 'true');
      }
    });
  });

  document.addEventListener('click', (e) => {
    const clickedInside = e.target.closest('[data-nav-dropdown]');
    if (!clickedInside) closeAll();
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAll();
  });
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', setupNavDropdown);
} else {
  setupNavDropdown();
}


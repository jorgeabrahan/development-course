const btnMenu = document.getElementById('btnMenu');
const iconMenu = document.getElementById('iconMenu');
const menu = document.getElementById('menu');

const switchIconMenu = () => {
  if (iconMenu.textContent.trim() === 'menu') {
    iconMenu.textContent = 'close';
    return;
  }
  iconMenu.textContent = 'menu';
};

const getMenuStatus = () => {
  const current = iconMenu.textContent.trim();
  if (current === 'menu') {
    return false;
  }
  return true;
};

const toggleBodyOverflow = (isMenuOpen) => {
  if (isMenuOpen) {
    document.body.style.overflow = 'hidden';
    return;
  }
  document.body.style.overflow = '';
};

btnMenu.addEventListener('click', () => {
  menu.classList.toggle('menu__nav--translate');
  switchIconMenu();
  toggleBodyOverflow(getMenuStatus());
});
function main() {
  const menuBtnOpen = document.querySelector('.header__menu-open');
  const menuBtnClose = document.querySelector('.header__menu-close');
  const menuMobile = document.querySelector('.header__menu-mobile');

  menuBtnOpen.addEventListener('click', () => {
    menuMobile.style.display = 'inherit';
  });

  menuBtnClose.addEventListener('click', () => {
    menuMobile.style.display = '';
  });
}

main();

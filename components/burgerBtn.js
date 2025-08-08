function main() {
  const menuBtnOpen = document.querySelector('.header__menu-open');
  const menuBtnClose = document.querySelector('.header__menu-close');
  const menuMobile = document.querySelector('.header__menu-mobile');

  if (menuBtnOpen && menuBtnClose && menuMobile) {
    menuBtnOpen.addEventListener('click', () => {
      menuMobile.classList.add('is-open');
      document.body.classList.add('no-scroll');
    });

    menuBtnClose.addEventListener('click', () => {
      menuMobile.classList.remove('is-open');
      document.body.classList.remove('no-scroll');
    });
  }
}

main();

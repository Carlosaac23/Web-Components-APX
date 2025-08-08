function main() {
  const headerContainer = document.querySelector('.header__container');

  if (!headerContainer) {
    console.error('Header container not found');
    return;
  }

  headerContainer.innerHTML = `
   <header class="header">
      <a href="./index.html">
        <img src="images/logo.svg" alt="Logo" class="header__logo" />
      </a>

      <img src="images/menu-open.svg" alt="Menu" class="header__menu-open" />

      <div class="header__menu-mobile">
        <div class="header__menu-toggle">
          <img src="images/menu-close.svg" alt="Menu" class="header__menu-close" />
        </div>
        <ul class="header__menu-links">
          <li class="header__menu-link">
            <a href="./index.html">Home</a>
          </li>
          <li class="header__menu-link">
            <a href="./projects.html">Proyectos</a>
          </li>
          <li class="header__menu-link">
            <a href="./contact.html">Contacto</a>
          </li>
        </ul>
      </div>

      <div class="header__menu-desktop">
        <ul class="header__desktop-links">
          <li class="header__desktop-link">
            <a href="./index.html">Home</a>
          </li>
          <li class="header__desktop-link">
            <a href="./projects.html">Proyectos</a>
          </li>
          <li class="header__desktop-link">
            <a href="./contact.html">Contacto</a>
          </li>
        </ul>
      </div>
    </header>`;
}

main();

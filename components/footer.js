function main() {
  const container = document.querySelector('.footer__container');

  container.innerHTML = `
  <footer class="footer">
      <img src="images/logo.svg" alt="Logo" class="footer__logo" />

      <ul class="footer__links">
        <li class="footer__links-link">
          <a href="./index.html">
            <img src="images/home.svg" alt="" class="footer__link-icon" />
            Home
          </a>
        </li>
        <li class="footer__links-link">
          <a href="./services.html">
            <img src="images/user.svg" alt="" class="footer__link-icon" />
            Servicios
          </a>
        </li>
        <li class="footer__links-link">
          <a href="./contact.html">
            <img src="images/contact.svg" alt="" class="footer__link-icon" />
            Contacto
          </a>
        </li>
      </ul>

      <ul class="footer__social">
        <li class="footer__social-link">
          <a href="https://www.linkedin.com/in/carlos-acosta-7aa448263/" target="_blank">
            <img src="images/linkedin.svg" alt="" class="footer__social-icon" />
          </a>
        </li>
        <li class="footer__social-link">
          <a href="https://github.com/Carlosaac23" target="_blank">
            <img src="images/github.svg" alt="" class="footer__social-icon" />
          </a>
        </li>
        <li class="footer__social-link">
          <a href="https://x.com/Carlosaac23" target="_blank">
            <img src="images/twitter.svg" alt="" class="footer__social-icon" />
          </a>
        </li>
      </ul>

      <p class="footer__text">&#169; 2025 - Derechos Reservados</p>
    </footer>`;
}

main();

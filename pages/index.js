function main() {
  const indexContainer = document.querySelector('.index__container');

  if (!indexContainer) {
    console.error('Index container not found');
    return;
  }

  indexContainer.innerHTML = `
    <section class="welcome">
      <h1 class="welcome__title">Hola Soy <span class="welcome__title-name">Carlos</span></h1>
      <img src="images/welcome.png" alt="" class="welcome__img" />
    </section>

    <div class="separator"></div>
    <div class="separator__desktop"></div>

    <section class="about-me">
      <div class="about-me__left">
        <h2 class="about-me__title">Soy <span class="about-me__title-name">Carlos</span></h2>
        <p class="about-me__description">
          Soy Carlos, estudiante de ingeniería de software apasionado por el desarrollo backend. Disfruto resolver problemas con JavaScript, TypeScript y bases de datos como PostgreSQL. Me motiva aprender inteligencia artificial y ciberseguridad, buscando crecer como profesional. Trabajo con constancia, creatividad y responsabilidad para aportar soluciones que marquen la diferencia.
        </p>
      </div>
      <div class="about-me__right">
        <img src="images/me.png" alt="Image of me" class="about-me__img" />
      </div>
    </section>

    <div class="separator"></div>
    <div class="separator__desktop"></div>

    <div class="services">
      <h2 class="services__title">Mis <span class="services__title-code">Servicios</span></h2>
      <div class="services__cards-container">
        <div class="services__card">
          <img src="images/webpage.png" alt="A project image" class="services__card-img" />
          <h3 class="services__card-title">Desarrollo de páginas web</h3>
          <p class="services__card-text">
            Lorem ipsum dolor sit amet jeje adipisicing elit. Necessitatibus velit iure a, dicta quibusdam error deleniti libero ut eligendi aliquid aspernatur
            officia.
          </p>
        </div>
        <div class="services__card">
          <img src="images/animations.png" alt="A project image" class="services__card-img" />
          <h3 class="services__card-title">Animaciones para web webs</h3>
          <p class="services__card-text">
            Lorem ipsum dolor sit amet jeje adipisicing elit. Necessitatibus velit iure a, dicta quibusdam error deleniti libero ut eligendi aliquid aspernatur
            officia.
          </p>
        </div>
        <div class="services__card">
          <img src="images/apps.png" alt="A project image" class="services__card-img" />
          <h3 class="services__card-title">Desarrollo de apps</h3>
          <p class="services__card-text">
            Lorem ipsum dolor sit amet jeje adipisicing elit. Necessitatibus velit iure a, dicta quibusdam error deleniti libero ut eligendi aliquid aspernatur
            officia.
          </p>
        </div>
      </div>
    </div>`;
}

main();

function main() {
  const formContainer = document.querySelector('.form__container');

  if (!formContainer) {
    console.error('Header container not found');
    return;
  }

  formContainer.innerHTML = `
  <section class="contact">
      <h2 class="contact__title">Escríbeme</h2>
      <form id="contactForm" class="contact__form">
        <div class="contact__form-top">
          <div class="form-group">
            <h4>Nombre</h4>
            <input type="text" name="name" id="name" required class="contact__form-input" placeholder="Tu nombre" />
          </div>

          <div class="form-group">
            <h4>Email</h4>
            <input type="email" name="email" id="email" required class="contact__form-input" placeholder="tu@email.com" />
          </div>
        </div>

        <div class="contact__form-bottom">
          <h4>Mensaje</h4>
          <textarea name="message" id="message" required rows="8" class="contact__form-textarea" placeholder="Tu mensaje"></textarea>
        </div>

        <button class="contact__form-btn">
          Enviar
          <img src="images/send-white.svg" alt="" class="contact__form-btn-icon" />
        </button>
      </form>
    </section>`;
}

main();

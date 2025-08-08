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
            <input type="text" name="name" id="name" class="contact__form-input" placeholder="Tu nombre" />
          </div>

          <div class="form-group">
            <h4>Email</h4>
            <input type="email" name="email" id="email" class="contact__form-input" placeholder="tu@email.com" />
          </div>
        </div>

        <div class="contact__form-bottom">
          <h4>Mensaje</h4>
          <textarea name="message" id="message" rows="8" class="contact__form-textarea" placeholder="Tu mensaje"></textarea>
        </div>

        <div id="alertMessage"></div>

        <button class="contact__form-btn">
          Enviar
          <img src="images/send-white.svg" alt="" class="contact__form-btn-icon" />
        </button>
      </form>
    </section>`;

  const form = document.getElementById('contactForm');

  form.addEventListener('submit', async e => {
    e.preventDefault();

    const API_APX = 'https://apx.school/api/utils/email-to-student';
    const nameData = document.getElementById('name').value;
    const emailData = document.getElementById('email').value;
    const messageData = document.getElementById('message').value;

    const alertMessageContainer = document.getElementById('alertMessage');
    const alertMessage = document.createElement('p');

    try {
      const res = await fetch(API_APX, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify({
          to: emailData,
          message: messageData,
        }),
      });

      if (nameData === '' || emailData === '' || messageData === '') {
        alertMessage.classList.add('alert-message--warning');
        alertMessage.textContent = '¡Por favor, completa todos los campos!';
        alertMessageContainer.appendChild(alertMessage);
        setTimeout(() => {
          alertMessage.remove();
        }, 2500);
        return;
      }

      if (!res.ok) {
        alertMessage.classList.add('alert-message--error');
        alertMessage.textContent = 'Error al enviar el correo';
        alertMessageContainer.appendChild(alertMessage);
        setTimeout(() => {
          alertMessage.remove();
        }, 2500);
        return;
      }

      alertMessage.classList.add('alert-message--success');
      alertMessage.textContent = '¡Correo enviado correctamente!';
      alertMessageContainer.appendChild(alertMessage);
      setTimeout(() => {
        alertMessage.remove();
      }, 2500);
      form.reset();
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      alert('Error de conexión ❌');
    }
  });
}

main();

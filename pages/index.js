async function getServices() {
  const SPACE_ID = '6d07ippi0mdt';
  const ENVIRONMENT_ID = 'master';
  const CONTENT_TYPE_ID = 'productos'; // 'productos' is the ID of Servicios
  const ACCESS_TOKEN = 'BmlxfqdmBXnbx4-v7pdK5z41vqOyhZAfu9EVJmcAWsI';

  const res = await fetch(
    `https://preview.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries?access_token=${ACCESS_TOKEN}&content_type=${CONTENT_TYPE_ID}`
  );

  const data = await res.json();

  return data.items.map(item => {
    const imageId = item.fields.foto.sys.id;
    const asset = data.includes.Asset.find(asset => asset.sys.id === imageId);
    const imageUrl = asset ? `https:${asset.fields.file.url}` : '';

    return {
      image: imageUrl,
      title: item.fields.nombre || 'Sin título',
      description: item.fields.descripcion || 'Sin descripción',
    };
  });
}

function addServiceCard(service) {
  const { image, title, description } = service;
  const servicesContainer = document.querySelector('.services__cards-container');
  const serviceCard = document.createElement('div');
  serviceCard.classList.add('services__card');

  serviceCard.innerHTML = `
    <img src=${image} alt="A project image" class="services__card-img" />
    <h3 class="services__card-title">${title}</h3>
    <p class="services__card-text">${description}</p>
  `;

  servicesContainer.appendChild(serviceCard);
}

async function main() {
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
      <div class="services__cards-container"></div>
    </div>`;

  try {
    const services = await getServices();
    for (const service of services) {
      addServiceCard(service);
    }
  } catch (error) {
    console.error('Error cargando los servicios:', error);
  }
}

main();

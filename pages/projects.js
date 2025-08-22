async function getProjects() {
  const SPACE_ID = '6d07ippi0mdt';
  const ENVIRONMENT_ID = 'master';
  const CONTENT_TYPE_ID = 'work'; // 'work' is the ID of Proyectos
  const ACCESS_TOKEN = 'BmlxfqdmBXnbx4-v7pdK5z41vqOyhZAfu9EVJmcAWsI';

  const res = await fetch(
    `https://preview.contentful.com/spaces/${SPACE_ID}/environments/${ENVIRONMENT_ID}/entries?access_token=${ACCESS_TOKEN}&content_type=${CONTENT_TYPE_ID}`
  );

  const data = await res.json();

  return data.items.map(item => {
    const imageId = item.fields.imagen.sys.id;
    const asset = data.includes.Asset.find(asset => asset.sys.id === imageId);
    const imageUrl = asset ? `https:${asset.fields.file.url}` : '';

    return {
      image: imageUrl,
      title: item.fields.titulo || 'Sin título',
      description: item.fields.descripcion || 'Sin descripción',
      url: item.fields.url || '#',
    };
  });
}

function addProjectCard(project) {
  const { image, title, description, url } = project;
  console.log(image);
  const projectsContainer = document.querySelector('.projects');
  const projectCard = document.createElement('div');
  projectCard.classList.add('projects__card');

  projectCard.innerHTML = `
    <img src=${image} alt="A project image" class="projects__card-img" />
    <h2 class="projects__card-title">${title}</h2>
    <p class="projects__card-description">${description}</p>
    <a href=${url} target="_blank" class="projects__card-link">Ver proyecto
    <img src="images/link.svg" alt="Link icon" class="projects__card-link-icon" />
    </a>
  `;

  projectsContainer.appendChild(projectCard);
}

async function main() {
  const projectsContainer = document.querySelector('.projects__container');

  if (!projectsContainer) {
    return console.error('Header container not found');
  }

  projectsContainer.innerHTML = `
   <main class="projects__welcome">
      <h1 class="projects__title">Mis <span class="projects__title-name">Trabajos</span></h1>
      <img src="images/work.svg" alt="Suitcase icon" class="projects__img" />
    </main>
    
   <div class="projects"></div>`;

  try {
    const projects = await getProjects();
    for (const project of projects) {
      addProjectCard(project);
    }
  } catch (error) {
    console.error('Error cargando los proyectos:', error);
  }
}

main();

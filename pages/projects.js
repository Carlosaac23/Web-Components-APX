function main() {
  const projectsContainer = document.querySelector('.projects__container');

  if (!projectsContainer) {
    console.error('Header container not found');
    return;
  }

  projectsContainer.innerHTML = `
   <main class="projects__welcome">
      <h1 class="projects__title">Mis <span class="projects__title-name">Trabajos</span></h1>
      <img src="images/work.svg" alt="Suitcase icon" class="projects__img" />
    </main>
    
   <div class="projects">
      <div class="projects__card">
        <img src="images/project1.png" alt="" class="projects__card-img" />
        <h2 class="projects__card-title">Proyecto 1</h2>
        <p class="projects__card-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum facere, asperiores obcaecati nemo, accusantium iusto vitae non autem accusamus quo.
        </p>
        <a href="#" class="projects__card-link">Ver más</a>
      </div>
      <div class="projects__card">
        <img src="images/project1.png" alt="" class="projects__card-img" />
        <h2 class="projects__card-title">Proyecto 2</h2>
        <p class="projects__card-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum facere, asperiores obcaecati nemo, accusantium iusto vitae non autem accusamus quo.
        </p>
        <a href="#" class="projects__card-link">Ver más</a>
      </div>
      <div class="projects__card">
        <img src="images/project1.png" alt="" class="projects__card-img" />
        <h2 class="projects__card-title">Proyecto 3</h2>
        <p class="projects__card-description">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum facere, asperiores obcaecati nemo, accusantium iusto vitae non autem accusamus quo.
        </p>
        <a href="#" class="projects__card-link">Ver más</a>
      </div>
    </div>`;
}

main();

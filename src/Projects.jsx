import React from 'react';
import CardProjects from './CardProjects';

function Projects() {
  return (
    <div className='relative overflow-hidden bg-white py-16 md:py-24 lg:py-32 min-h-screen flex justify-center'>
        {/* Fondo difuso de color verde */}
        <div className="absolute top-0 right-0 -mt-24 -mr-24 w-80 h-60 rounded-full bg-[#73BBA3]/65 blur-3xl pointer-events-none"></div>

        {/* Contenedor para las tarjetas, centrado y con distancias ajustadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-12 max-w-4xl w-full mx-auto">
          <CardProjects 
            title="Mi Increíble Proyecto"
            description="Descripción detallada del proyecto"
            technologies={['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind']}
            imageUrl="/ruta/imagen-proyecto.jpg"
            githubLink="https://github.com/tuusuario/proyecto"
            liveLink="https://miproyecto.com"
          />
          <CardProjects 
            title="Mi Increíble Proyecto"
            description="Descripción detallada del proyecto"
            technologies={['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind']}
            imageUrl="/ruta/imagen-proyecto.jpg"
            githubLink="https://github.com/tuusuario/proyecto"
            liveLink="https://miproyecto.com"
          />
          <CardProjects 
            title="Mi Increíble Proyecto"
            description="Descripción detallada del proyecto"
            technologies={['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind']}
            imageUrl="/ruta/imagen-proyecto.jpg"
            githubLink="https://github.com/tuusuario/proyecto"
            liveLink="https://miproyecto.com"
          />
          <CardProjects 
            title="Mi Increíble Proyecto"
            description="Descripción detallada del proyecto"
            technologies={['React', 'HTML', 'CSS', 'JavaScript', 'Tailwind']}
            imageUrl="/ruta/imagen-proyecto.jpg"
            githubLink="https://github.com/tuusuario/proyecto"
            liveLink="https://miproyecto.com"
          />
        </div>
    </div>
  );
}

export default Projects;
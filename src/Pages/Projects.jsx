import React from 'react';
import CardProjects from "../cards/CardProjects"
import comingSoon from "../assets/images/comingSoon.jpg"

function Projects() {
  return (
    <section className="relative overflow-hidden bg-theme_light_fond dark:bg-black py-16 md:py-24 lg:py-32 min-h-screen flex flex-col items-center">
      {/* Fondo difuso de color verde */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-80 h-60 rounded-full bg-[#73BBA3]/65 blur-3xl pointer-events-none"></div>

      {/* Contenedor para las tarjetas, centrado y con distancias ajustadas */}
      <div className="w-full max-w-5xl px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 place-items-center">
          <CardProjects
            title="Mi Increíble Proyecto"
            description="Descripción detallada del proyecto"
            technologies={["React", "HTML", "CSS", "JavaScript"]}
            imageUrl={comingSoon}
            githubLink="https://github.com/tuusuario/proyecto"
            liveLink="https://miproyecto.com"
          />
          <CardProjects
            title="Mi Increíble Proyecto"
            description="Descripción detallada del proyecto"
            technologies={["Node.js", "HTML", "CSS", "JavaScript", "Tailwind"]}
            imageUrl={comingSoon}
            githubLink="https://github.com/tuusuario/proyecto"
            liveLink="https://miproyecto.com"
          />
          <CardProjects
            title="Mi Increíble Proyecto"
            description="Descripción detallada del proyecto"
            technologies={["React", "HTML", "CSS", "JavaScript", "Tailwind"]}
            imageUrl={comingSoon}
            githubLink="https://github.com/tuusuario/proyecto"
            liveLink="https://miproyecto.com"
          />
          <CardProjects
            title="Mi Increíble Proyecto"
            description="Descripción detallada del proyecto"
            technologies={["React", "HTML", "CSS", "JavaScript", "Tailwind"]}
            imageUrl={comingSoon}
            githubLink="https://github.com/tuusuario/proyecto"
            liveLink="https://miproyecto.com"
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
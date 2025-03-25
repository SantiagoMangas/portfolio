import React from 'react';
import CardProjects from './CardProjects';

function Projects() {
  return (
    <div>
      <CardProjects 
        title="Mi Primer Proyecto" 
        description="Una descripción detallada del proyecto"
        technologies={['React', 'Tailwind', 'MongoDB', 'Express']}
        imageUrl="./src/assets/images/comingSoon.jpg"
      />
    </div>
  );
}   

export default Projects;
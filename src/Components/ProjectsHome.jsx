import CardProjects from "../cards/CardProjects";
import VerProjects from "../buttons/VerProjects";
import { projects } from "../data/projects";

function Projects() {
  return (
    <section className="relative overflow-hidden bg-theme_light_fond dark:bg-black py-16 md:py-24 lg:py-32 min-h-screen flex flex-col items-center">
     
      <div className="absolute top-36 right-0 -mr-12 w-80 h-48 rounded-full bg-[#73BBA3]/65 blur-3xl pointer-events-none"></div>
      <div className="absolute top-64 2xl:top-22 left-0 -ml-24 w-80 h-80 rounded-full bg-[#F0A04B]/60 dark:bg-[#F0A04B]/50 blur-3xl pointer-events-none"></div>

      <div className="w-full max-w-5xl px-4 mx-auto mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 dark:text-white mb-4">Mis Proyectos</h2>
        <div className="w-24 h-1 bg-[#F0A04B] dark:bg-theme_light_green mx-auto"></div>
      </div>

      <div className="w-full max-w-5xl px-4 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-12 place-items-center">
          {projects.slice(0, 4).map((project, index) => (
            <div
              key={project.id}
              className={index > 1 ? "hidden md:block" : ""}
            >
              <CardProjects
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                imageUrl={project.imageUrl}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            </div>
          ))}

          <div className="md:hidden col-span-1 mt-4 mb-8 flex justify-center w-full">
            <VerProjects />
          </div>
        </div>
      </div>

      <div className="hidden md:block mt-12">
        <VerProjects />
      </div>
    </section>
  );
}

export default Projects;
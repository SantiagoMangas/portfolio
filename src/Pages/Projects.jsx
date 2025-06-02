import ProjectGrid from "../Components/ProjectsGrid"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <main className="relative overflow-hidden bg-theme_light_fond dark:bg-black w-full px-4 py-12">
      <div className="bg-[#F0A04B]/60 dark:bg-[#F0A04B]/50 absolute top-36 right-0 -mr-12 w-80 h-48 rounded-full  blur-3xl pointer-events-none"></div>
      <div className="bg-[#73BBA3]/65 absolute top-64 2xl:top-22 left-0 -ml-24 w-80 h-80 rounded-full   blur-3xl pointer-events-none"></div>
      <h1 className="text-theme_light_brown dark:text-white text-4xl font-bold mb-2 text-center">Mis Proyectos</h1>
      <p className="text-theme_light_brown dark:text-white text-muted-foreground mb-8 text-center">Una colección de mis trabajos más recientes</p>

      <ProjectGrid projects={projects} />
    </main>
  )
}

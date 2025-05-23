import ProjectGrid from "../Components/ProjectsGrid"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <main className="bg-theme_light_fond dark:bg-black w-full px-4 py-12">
      <h1 className="text-theme_light_brown dark:text-white text-4xl font-bold mb-2 text-center">Mis Proyectos</h1>
      <p className="text-theme_light_brown dark:text-white text-muted-foreground mb-8 text-center">Una colección de mis trabajos más recientes</p>

      <ProjectGrid projects={projects} />
    </main>
  )
}

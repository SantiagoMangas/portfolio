import ProjectGrid from "../Components/ProjectsGrid"
import { projects } from "../data/projects"

export default function Projects() {
  return (
    <main className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-2">Mis Proyectos</h1>
      <p className="text-muted-foreground mb-8">Una colección de mis trabajos más recientes</p>

      <ProjectGrid projects={projects} />
    </main>
  )
}

import { useState } from "react"
import CardProjects from "../cards/CardProjects"
import { motion } from "framer-motion"
import { PlusCircle } from "lucide-react"
import { renderTechnologyBadges } from "../utils/technologyBadges"

export default function ProjectGrid({ projects }) {
  const [selectedTag, setSelectedTag] = useState(null)
  const [expandedProjectId, setExpandedProjectId] = useState(null)

  // Extraer todas las etiquetas únicas de los proyectos
  const allTags = Array.from(new Set(projects.flatMap((project) => project.technologies)))

  // Filtrar proyectos según la etiqueta seleccionada
  const filteredProjects = selectedTag
    ? projects.filter((project) => project.technologies.includes(selectedTag))
    : projects

  // Función para mostrar etiquetas con límite en pantallas pequeñas
  const renderTechnologies = (technologies, projectId) => {
    const isExpanded = expandedProjectId === projectId
    const maxVisible = 3 // Número máximo de etiquetas visibles en pantallas pequeñas

    if (technologies.length <= maxVisible || isExpanded) {
      return technologies.map((tech) => (
        <div key={tech} className="mb-1">
          {renderTechnologyBadges(tech)}
        </div>
      ))
    } else {
      return (
        <>
          {technologies.slice(0, maxVisible).map((tech) => (
            <div key={tech} className="mb-1">
              {renderTechnologyBadges(tech)}
            </div>
          ))}
          <button
            onClick={() => setExpandedProjectId(projectId)}
            className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors"
            title="Ver todas las tecnologías"
          >
            <PlusCircle className="w-3 h-3" />+{technologies.length - maxVisible}
          </button>
        </>
      )
    }
  }

  return (
    <div className="space-y-8">
      {/* Filtros de categorías con scroll horizontal en móvil */}
      <div className="overflow-x-auto pb-2 -mx-4 px-4 md:overflow-visible md:pb-0 md:mx-0 md:px-0">
        <div className="flex gap-2 mb-6 w-max md:w-auto md:flex-wrap">
          <button
            onClick={() => setSelectedTag(null)}
            className={`rounded-full whitespace-nowrap px-4 py-2 text-sm font-medium ${
              selectedTag === null
                ? "bg-blue-600 text-white hover:bg-blue-700"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
            } transition-colors`}
          >
            Todos
          </button>
          {allTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`rounded-full whitespace-nowrap px-4 py-2 text-sm font-medium ${
                selectedTag === tag
                  ? "bg-blue-600 text-white hover:bg-blue-700"
                  : "bg-gray-100 text-gray-800 hover:bg-gray-200 dark:bg-gray-800 dark:text-gray-200 dark:hover:bg-gray-700"
              } transition-colors`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      {/* Grid de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="w-full flex justify-center"
          >
            <CardProjectsWrapper
              project={project}
              renderTechnologies={() => renderTechnologies(project.technologies, project.id)}
              isExpanded={expandedProjectId === project.id}
              onClose={() => setExpandedProjectId(null)}
            />
          </motion.div>
        ))}
      </div>

      {/* Mensaje cuando no hay proyectos */}
      {filteredProjects.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 dark:text-gray-400">
            No se encontraron proyectos con la tecnología seleccionada.
          </p>
        </div>
      )}
    </div>
  )
}

// Componente wrapper para CardProjects que maneja la visualización de tecnologías
function CardProjectsWrapper({ project, renderTechnologies, isExpanded, onClose }) {
  // Este componente permite personalizar cómo se muestran las tecnologías
  // sin modificar el componente CardProjects original

  return (
    <div className="relative">
      <CardProjects
        title={project.title}
        description={project.description}
        technologies={project.technologies}
        imageUrl={project.imageUrl}
        githubLink={project.githubLink}
        liveLink={project.liveLink}
        renderTechnologiesContent={renderTechnologies}
      />

      {isExpanded && (
        <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center" onClick={onClose}>
          <div
            className="bg-white dark:bg-gray-800 p-4 rounded-lg max-w-xs w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="font-semibold mb-3">Tecnologías</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <div key={tech}>{renderTechnologyBadges(tech)}</div>
              ))}
            </div>
            <button
              className="w-full mt-4 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium bg-white text-gray-700 hover:bg-gray-50 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600 transition-colors"
              onClick={onClose}
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

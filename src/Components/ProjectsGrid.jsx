import { useState } from "react"
import CardProjects from "../cards/CardProjects"
import { motion } from "framer-motion"
import { PlusCircle, X } from "lucide-react"
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

  // Función mejorada para mostrar etiquetas con límite
  const renderTechnologies = (technologies, projectId) => {
    const isExpanded = expandedProjectId === projectId
    const maxVisible = 3

    if (technologies.length <= maxVisible) {
      return (
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <div key={tech} className="transform scale-90 origin-left">
              {renderTechnologyBadges(tech)}
            </div>
          ))}
        </div>
      )
    }

    if (isExpanded) {
      return (
        <div className="flex flex-wrap gap-1.5">
          {technologies.map((tech) => (
            <div key={tech} className="transform scale-90 origin-left">
              {renderTechnologyBadges(tech)}
            </div>
          ))}
          <button
            onClick={() => setExpandedProjectId(null)}
            className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-red-100 dark:bg-red-900/30 text-red-700 dark:text-red-300 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors"
            title="Mostrar menos"
          >
            <X className="w-3 h-3" />
          </button>
        </div>
      )
    }

    return (
      <div className="flex flex-wrap gap-1.5 items-center">
        {technologies.slice(0, maxVisible).map((tech) => (
          <div key={tech} className="transform scale-90 origin-left">
            {renderTechnologyBadges(tech)}
          </div>
        ))}
        <button
          onClick={() => setExpandedProjectId(projectId)}
          className="flex items-center gap-1 text-xs font-medium px-2 py-1 rounded-full bg-theme_light_fond dark:bg-theme_dark_green text-theme_light_brown dark:text-theme_light_green hover:bg-theme_light_yellow dark:hover:bg-gray-700 transition-colors border border-theme_light_orange/30 dark:border-theme_light_green/30"
          title="Ver todas las tecnologías"
        >
          <PlusCircle className="w-3 h-3" />
          <span>+{technologies.length - maxVisible}</span>
        </button>
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="relative">
        <div className="flex justify-center">
          <div className="inline-flex bg-theme_light_yellow dark:bg-theme_dark_green rounded-2xl p-1 overflow-x-auto max-w-full border border-theme_light_orange/20 dark:border-theme_light_green/20">
            <div className="flex gap-1 min-w-max">
              <button
                onClick={() => setSelectedTag(null)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                  selectedTag === null
                    ? "bg-theme_light_orange dark:bg-theme_light_green text-white shadow-md"
                    : "text-theme_light_brown dark:text-theme_light_green hover:text-theme_light_orange dark:hover:text-white hover:bg-theme_light_yellow/50 dark:hover:bg-theme_teal/20"
                }`}
              >
                Todos
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 whitespace-nowrap ${
                    selectedTag === tag
                      ? "bg-theme_light_orange dark:bg-theme_light_green text-white shadow-md"
                      : "text-theme_light_brown dark:text-theme_light_green hover:text-theme_light_orange dark:hover:text-white hover:bg-theme_light_yellow/50 dark:hover:bg-theme_teal/20"
                  }`}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-4 sm:px-0">
        {filteredProjects.map((project) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            <CardProjects
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              imageUrl={project.imageUrl}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              renderTechnologiesContent={() => renderTechnologies(project.technologies, project.id)}
            />
          </motion.div>
        ))}
      </div>

      {/* Estado vacío con colores del tema */}
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center py-16"
        >
          <div className="bg-theme_light_fond dark:bg-theme_dark_green rounded-2xl p-8 max-w-md mx-auto border border-theme_light_orange/20 dark:border-theme_light_green/20">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-lg font-semibold text-theme_light_brown dark:text-white mb-2">No hay proyectos</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              No se encontraron proyectos con la tecnología "{selectedTag}".
            </p>
            <button
              onClick={() => setSelectedTag(null)}
              className="px-6 py-2 bg-gradient-to-r from-theme_light_orange to-theme_light_brown dark:from-theme_light_green dark:to-theme_teal text-white rounded-xl hover:from-theme_light_brown hover:to-theme_light_orange dark:hover:from-theme_teal dark:hover:to-theme_mid_green transition-all duration-200 font-medium"
            >
              Ver todos
            </button>
          </div>
        </motion.div>
      )}
    </div>
  )
}
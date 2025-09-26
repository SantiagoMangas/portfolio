import { renderTechnologyBadges } from "../utils/technologyBadges"
import { FaGithub } from "react-icons/fa"
import { FiExternalLink } from "react-icons/fi"

const CardProjects = ({
  title,
  description,
  technologies,
  imageUrl,
  githubLink,
  liveLink,
  renderTechnologiesContent,
}) => {
  return (
    <div className="group relative w-full max-w-sm mx-auto bg-white dark:bg-theme_dark_green rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-theme_light_orange/30 dark:border-theme_light_green/30 hover:border-theme_light_orange dark:hover:border-theme_light_green hover:-translate-y-2">
      {/* Imagen sin badges flotantes */}
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl || "/placeholder.svg?height=200&width=400"}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>

      {/* Contenido */}
      <div className="p-5">
        {/* Título y descripción */}
        <div className="mb-4">
          <h3 className="text-lg font-bold text-theme_light_brown dark:text-white mb-2 line-clamp-1 group-hover:text-theme_light_orange dark:group-hover:text-theme_light_green transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed">{description}</p>
        </div>

        {/* Tecnologías - Layout horizontal compacto */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-1.5">
            {renderTechnologiesContent
              ? renderTechnologiesContent()
              : technologies.map((tech) => (
                  <div key={tech} className="transform scale-90 origin-left">
                    {renderTechnologyBadges(tech)}
                  </div>
                ))}
          </div>
        </div>

        <div className="flex gap-3">
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-theme_light_fond dark:bg-gray-800 text-theme_light_brown dark:text-gray-300 rounded-xl hover:bg-theme_light_yellow dark:hover:bg-gray-700 transition-all duration-200 hover:scale-105 group/btn border border-theme_light_orange/20 dark:border-theme_light_green/20"
          >
            <FaGithub className="text-lg group-hover/btn:rotate-12 transition-transform" />
            <span className="text-sm font-medium">Code</span>
          </a>
        )}

        {liveLink && (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-orange-500 to-orange-600 dark:from-green-500 dark:to-green-600 text-white rounded-xl hover:from-orange-600 hover:to-orange-700 dark:hover:from-green-600 dark:hover:to-green-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl group/btn"
          >
            <span className="text-sm font-medium">Live</span>
            <FiExternalLink className="text-sm group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
          </a>
        )}
      </div>
      </div>

      {/* Efecto de brillo en hover */}
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-theme_light_yellow/10 dark:via-theme_light_green/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none transform -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
    </div>
  )
}

export default CardProjects
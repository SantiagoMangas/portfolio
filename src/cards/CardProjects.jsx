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
    <div className="relative flex w-80 flex-col rounded-xl border-2 border-[#F0A04B] dark:border-theme_light_green bg-white dark:bg-gray-900 shadow-lg shadow-yellow-500 dark:shadow-gray-800 transition-all hover:shadow-yellow-600 dark:hover:shadow-gray-600">
      <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gradient-to-r from-blue-500 to-blue-600 ">
        <img src={imageUrl || "/placeholder.svg"} alt={title} className="w-full h-full object-cover rounded-xl " />
      </div>
      <div className="p-6 pb-3 pt-3">
        <h5 className="mb-2 block text-xl font-semibold text-blue-gray-900 dark:text-white">{title}</h5>
        <p className="text-base text-gray-600 dark:text-gray-300">{description}</p>
      </div>
      <div className="p-6 pb-3 pt-0 flex flex-wrap gap-2">
        {/* Renderizar tecnologías de forma personalizada o por defecto */}
        {renderTechnologiesContent
          ? renderTechnologiesContent()
          : technologies.map((tech) => <div key={tech}>{renderTechnologyBadges(tech)}</div>)}
      </div>
      <div className="p-6 pt-0 flex justify-between">
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-gray-800 dark:text-gray-200 bg-[#F97316]/80 dark:bg-theme_light_green/20 rounded-xl shadow-md transition-all hover:bg-theme_light_green hover:scale-105 dark:hover:bg-theme_light_green dark:hover:text-black"
        >
          <FaGithub className="text-xl" />
        </a>
        <a
          href={liveLink}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-[#73BBA3] dark:text-theme_light_green border-2 border-[#73BBA3] dark:border-theme_light_green rounded-xl shadow-md transition-all duration-50 hover:bg-[#73BBA3] hover:text-white hover:scale-105 dark:hover:bg-theme_light_green dark:hover:text-black"
        >
          Preview
          <FiExternalLink />
        </a>
      </div>
    </div>
  )
}

export default CardProjects
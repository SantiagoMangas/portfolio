import { useState } from "react"
import { motion } from "framer-motion"
import { renderTechnologyBadges, technologiesByCategory } from "../utils/technologyBadges"

function TechnologySlider() {
  const [activeTab, setActiveTab] = useState("frontend")

  const tabs = [
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
    { id: "tools", label: "Herramientas" },
  ]

  return (
    <div className="py-8 px-4 max-w-4xl mx-auto">
      <motion.h2
        className="text-2xl md:text-3xl font-bold text-theme_light_brown dark:text-white mb-8 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        Mis Tecnologías
      </motion.h2>

      {/* Tabs */}
      <div className="flex justify-center mb-8">
        <div className="inline-flex p-1 bg-gray-100 dark:bg-gray-800 rounded-lg">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                activeTab === tab.id
                  ? "bg-theme_light_green text-black dark:bg-theme_teal dark:text-white shadow-sm"
                  : "text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tech badges */}
      <motion.div
        className="flex flex-wrap justify-center gap-3"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {technologiesByCategory[activeTab].map((tech, index) => (
          <motion.div
            key={tech}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, delay: index * 0.05 }}
          >
            {renderTechnologyBadges(tech)}
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default TechnologySlider

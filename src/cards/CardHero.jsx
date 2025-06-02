import { motion } from "framer-motion"
import { Code, Layers, Zap } from "lucide-react"

export default function HeroCard() {
  return (
    <motion.div
      className="sm:w-1/3 md:w-1/2 lg:w-1/2 flex justify-center"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.7, delay: 0.4 }}
    >
      <div className="relative w-full max-w-sm">
        {/* Tarjeta principal con imagen */}
        <motion.div
          className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-3 transition-all duration-100 hover:-translate-y-1 hover:shadow-2xl"
          whileHover={{ y: -5 }}
        >
          <div className="relative overflow-hidden rounded-xl aspect-square">
            <img
              src="images/logoHero.jpeg"
              alt="Santiago Mangas"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
          </div>
          <div className="text-center p-3">
            <h3 className="font-semibold text-black dark:text-white">Programador</h3>
            <p className="text-sm text-black/70 dark:text-theme_light_yellow">Sumando experiencia!</p>
          </div>
        </motion.div>

        {/* Badges flotantes */}
        <motion.div
          className="absolute -right-4 top-1/4 flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-theme_teal/70 shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          whileHover={{ scale: 1.1, rotate: 10 }}
        >
          <Code className="h-5 w-5 sm:h-6 sm:w-6 text-black dark:text-white" />
        </motion.div>

        <motion.div
          className="absolute -left-4 bottom-1/3 flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#F0A04B]/70 shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          whileHover={{ scale: 1.1, rotate: -10 }}
        >
          <Layers className="h-5 w-5 sm:h-6 sm:w-6 text-black dark:text-white" />
        </motion.div>

        <motion.div
          className="absolute -bottom-2 right-1/4 flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-theme_light_yellow/70 dark:bg-[#F0A04B]/70 shadow-lg"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.5 }}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-black dark:text-white" />
        </motion.div>
      </div>
    </motion.div>
  )
}

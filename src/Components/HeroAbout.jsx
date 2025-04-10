import { motion } from "framer-motion"
import CardTimeLine from "../cards/CardTimeLine"
import TechnologySlider from "./TechnologySlider"
import ServicesSection from "./ServicesSection"
import Division from "./Division"

function HeroAbout() {
  return (
    <section className="bg-theme_light_fond dark:bg-black px-6 md:px-10 lg:px-20 py-20">
      {/* Header Section with Profile */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-12 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#88D66C]/20 dark:border-[#73BBA3]/20 shadow-lg">
            <img src="./src/assets/images/logoHero.jpeg" alt="Profile" className="object-cover w-full h-full" />
          </div>
        </div>

        <div className="w-full text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-theme_light_brown dark:text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Sobre mí
          </motion.h1>

          <motion.div
            className="text-lg md:text-xl text-black/80 dark:text-white/90 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <p className="mb-1">
              Profesional comprometido con sólidos conocimientos en desarrollo web, tanto front-end como back-end.
            </p>
            <p>
              Tengo la capacidad de trabajar en equipo y estoy siempre dispuesto a aprender y adaptarme a nuevas
              tecnologías. Mi enfoque es lograr resultados eficientes y aportar valor en cada proyecto en el que
              participo.
            </p>
          </motion.div>
        </div>
      </div>

      <Division />

      {/* Trayectoria Section */}
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-theme_light_brown dark:text-white mb-12 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mi Trayectoria
        </motion.h2>
        <CardTimeLine />
      </div>
    </section>
  )
}

export default HeroAbout

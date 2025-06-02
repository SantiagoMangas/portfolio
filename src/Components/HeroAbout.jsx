import { motion } from "framer-motion"
import CardTimeLine from "../cards/CardTimeLine"
import TechnologySlider from "./TechnologySlider"
import ServicesSection from "./ServicesSection"
import Division from "./Division"

function HeroAbout() {
  return (
    <section className="bg-theme_light_fond dark:bg-black px-6 md:px-10 lg:px-20 py-20">
      <div className="bg-[#F0A04B]/60 dark:bg-[#F0A04B]/50 absolute top-36 right-0 -mr-12 w-80 h-48 rounded-full  blur-3xl pointer-events-none z-0"></div>
      {/* Header Section with Profile */}
      <div className="flex flex-col md:flex-row items-center gap-12 mb-12 max-w-6xl mx-auto">
        <div className="w-full md:w-1/2 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-[#88D66C]/20 dark:border-[#73BBA3]/20 shadow-lg">
            <img src="images/logoHero.jpeg" alt="Profile" className="object-cover w-full h-full" />
          </div>
        </div>

        <div className="w-full text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-theme_light_brown dark:text-white mb-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            Sobre mí
          </motion.h1>

          <motion.div
            className="text-lg md:text-xl text-black/80 dark:text-white/90 leading-relaxed max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            <p className="mb-1 text-balance">
              Profesional comprometido con sólidos conocimientos en desarrollo web, tanto front-end como back-end.
            </p>
            <p className="text-balance">
              Tengo la capacidad de trabajar en equipo y siempre dispuesto a aprender y adaptarme. Mi enfoque es lograr resultados eficientes y aportar valor en cada proyecto en el que participo.
            </p>
          </motion.div>
        </div>
      </div>

      <Division />

      {/* Trayectoria Section */}
      <div className="max-w-6xl mx-auto">
      <div className="bg-[#73BBA3]/65 absolute bottom-0 2xl:top-22 left-0 -ml-24 w-80 h-80 rounded-full   blur-3xl pointer-events-none -z-0"></div>
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

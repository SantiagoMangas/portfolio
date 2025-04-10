"use client"
import { motion } from "framer-motion"
import CardTimeLine from "../cards/CardTimeLine"
import TechnologySlider from "../cards/TechnologySlider"
import ServicesSection from "../cards/ServicesSection"

function HeroAbout() {
  return (
    <section className="bg-theme_light_fond dark:bg-black px-6 md:px-10 lg:px-20 py-20">
      {/* Header Section with Profile */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-16">
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-primary/20">
            <img src="./src/assets/images/logoHero.jpeg" alt="Profile" className="object-cover w-full h-full" />
          </div>
        </div>
        <div className="w-full md:w-2/3 text-center md:text-left">
          <motion.h1
            className="text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-theme_light_brown dark:text-white mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Sobre mí
          </motion.h1>
          <p className="text-xl text-muted-foreground mb-6">Desarrollador FullStack</p>
          <motion.p
            className="text-base md:text-lg text-black/70 dark:text-white/80 lg:mx-0 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Profesional comprometido con sólidos conocimientos en desarrollo web, tanto front-end como back-end. Tengo
            la capacidad de trabajar en equipo y estoy siempre dispuesto a aprender y adaptarme a nuevas tecnologías. Mi
            enfoque es lograr resultados eficientes y aportar valor en cada proyecto en el que participo.
          </motion.p>
        </div>
      </div>

      {/* Línea del tiempo (timeline) */}
      <div className="text-left max-w-4xl mx-auto mb-20">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-theme_light_brown dark:text-white mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Mi Trayectoria
        </motion.h2>
        <CardTimeLine />
      </div>

      {/* Technology Slider */}
      <div className="mb-20">
        <TechnologySlider />
      </div>

      {/* Services Section */}
      <ServicesSection />
    </section>
  )
}

export default HeroAbout

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import SocialButton from "../buttons/SocialButton"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import ContactButton from "../buttons/ContactButton.jsx"
import HeroCard from "../cards/CardHero"
import VerProjects from "../buttons/VerProjects.jsx"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-theme_light_fond dark:bg-black py-16 md:py-24 lg:py-32">
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-80 h-80 rounded-full bg-[#F0A04B]/60 dark:bg-[#F0A04B]/50 blur-3xl pointer-events-none"></div>
      <div className="absolute md:top-64 2xl:top-22 left-0 -mb-24 -ml-24 w-80 h-80 rounded-full bg-theme_teal/70 dark:bg-theme_teal/70  blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-16 relative z-10">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
          {/* Columna de contenido */}
          <motion.div
            className="w-full lg:w-1/2 text-center lg:text-left mt-8 lg:mt-0"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block -rotate-2 rounded-full bg-theme_light_orange/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-theme_light_brown dark:text-black shadow-sm"
            >
              ¡Bienvenido a mi Portafolio!
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-theme_light_brown dark:text-white mt-4 mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <span className="relative inline-block">
                Santiago
                <motion.span
                  className="absolute -right-2 -top-2 h-8 w-8 rounded-full bg-[#F2F6D0]/40 blur-md"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                />
              </span>{" "}
              <span className="relative inline-block">
                Mangas
                <motion.div
                  className="absolute -bottom-2 left-0 h-3 w-full bg-theme_teal/30 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                />
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-theme_teal  dark:text-theme_light_green mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Desarrollador FullStack
            </motion.h2>

            <motion.p
              className="text-xl text-theme_light_orange dark:text-theme_light_yellow mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Creando experiencias digitales excepcionales
            </motion.p>

            <motion.p
              className="text-lg text-black/70 dark:text-white/80 max-w-xl mx-auto lg:mx-0 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              Desarrollador de Bahía Blanca, Argentina. Especializado en crear aplicaciones web modernas, intuitivas y
              de alto rendimiento.
            </motion.p>

            {/* Botones de acción */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <ContactButton />
              <VerProjects />
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
            <SocialButton href="https://github.com/SantiagoMangas" icon={<FaGithub size={20} />} color="black"/>
            <SocialButton href="https://www.linkedin.com/in/santiago-mangas/" icon={<FaLinkedin size={20} />} color="#0077b5" />
            </motion.div>
          </motion.div>

          <HeroCard />
        </div>
      </div>
    </section>
  )
}
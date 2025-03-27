import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Layers, Zap, ArrowRight } from "lucide-react"
import GitHub from "./GitHub"
import Linkedin from "./Linkedin"
import ContactButton from "./ContactButton"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24 lg:py-32">
      {/* Elementos decorativos de fondo */}
      <div className="absolute top-0 right-0 -mt-24 -mr-24 w-80 h-80 rounded-full bg-[#73BBA3]/20 blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -mb-24 -ml-24 w-80 h-80 rounded-full bg-[#F0A04B]/20 blur-3xl pointer-events-none"></div>

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
              className="inline-block -rotate-2 rounded-full bg-[#EF9651]/80 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-[#443627] shadow-sm"
            >
              ¡Bienvenido a mi Portafolio!
            </motion.div>

            <motion.h1
              className="text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-black mt-4 mb-4"
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
                  className="absolute -bottom-2 left-0 h-3 w-full bg-[#73BBA3]/30 rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                />
              </span>
            </motion.h1>

            <motion.h2
              className="text-2xl md:text-3xl font-semibold text-[#73BBA3] mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Desarrollador FullStack
            </motion.h2>

            <motion.p
              className="text-xl text-[#EF9651] mb-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Creando experiencias digitales excepcionales
            </motion.p>

            <motion.p
              className="text-lg text-black/70 max-w-xl mx-auto lg:mx-0 mb-8"
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

              <motion.a
                href="/projects"
                className="group flex items-center gap-2 px-6 py-3 rounded-full border-2 border-[#73BBA3] text-[#73BBA3] font-medium hover:bg-[#73BBA3]/10 transition-all duration-300"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Ver proyectos
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </motion.a>
            </motion.div>

            {/* Social links */}
            <motion.div
              className="flex flex-wrap justify-center lg:justify-start gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <GitHub />
              <Linkedin />
            </motion.div>
          </motion.div>

          {/* Columna de imagen y tecnologías */}
          <motion.div
            className="w-full sm:w-1/3 md:w-1/3 lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: isVisible ? 1 : 0, scale: isVisible ? 1 : 0.9 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="relative w-full max-w-sm">
              {/* Tarjeta principal con imagen */}
              <motion.div
                className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 p-3 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl"
                whileHover={{ y: -5 }}
              >
                <div className="relative overflow-hidden rounded-xl aspect-square">
                  <img
                    src="./src/assets/images/logoHero.jpeg"
                    alt="Santiago Mangas"
                    className="w-full h-full object-cover"
                  />

                  {/* Overlay con gradiente */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                </div>

                <div className="text-center p-3">
                  <h3 className="font-semibold text-black">Programador</h3>
                  <p className="text-sm text-black/70">Sumando experiencia!</p>
                </div>
              </motion.div>

              {/* Badges flotantes alrededor - visibles en todos los tamaños pero posicionados diferente */}
              <motion.div
                className="absolute -right-4 top-1/4 flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#73BBA3]/70 shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 10 }}
              >
                <Code className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute -left-4 bottom-1/3 flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#F0A04B]/70 shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: -10 }}
              >
                <Layers className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-2 right-1/4 flex items-center justify-center h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-[#9333EA]/70 shadow-lg"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
              >
                <Zap className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
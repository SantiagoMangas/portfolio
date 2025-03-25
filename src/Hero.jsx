import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Code, Layers, Zap } from "lucide-react"
import GitHub from "./GitHub"
import Linkedin from "./Linkedin"
import ContactButton from "./ContactButton"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-background to-background/80 py-20 md:py-32">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div className="absolute left-1/3 top-1/4 h-32 w-32 rounded-full bg-primary/30 blur-3xl"></div>
        <div className="absolute right-1/4 top-1/2 h-40 w-40 rounded-full bg-secondary/20 blur-3xl"></div>
        <div className="absolute bottom-1/4 left-1/2 h-24 w-24 rounded-full bg-primary/20 blur-3xl"></div>
      </div>

      <div className="container px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-start md:gap-4 lg:gap-6">
          {/* Image column */}
          <motion.div
            className="relative md:w-1/3 lg:w-1/4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : -50 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative mx-auto max-w-[200px]">
              <div className="absolute -inset-1 rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-secondary/20 blur-sm"></div>
              <div className="relative overflow-hidden rounded-xl border border-border/40 bg-card p-1 shadow-xl">
                <img
                  src="./src/assets/images/logoHero.jpeg"
                  alt="Santiago Mangas"
                  className="aspect-square w-full rounded-lg object-cover"
                />
              </div>

              {/* Tech stack indicators */}
              <div className="absolute -right-4 top-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#EFDCAB]/45 backdrop-blur-md shadow-lg">
                <Code className="h-5 w-5 text-[#443627]" />
              </div>
              <div className="absolute -left-4 bottom-20 flex h-12 w-12 items-center justify-center rounded-full bg-[#EFDCAB]/45 backdrop-blur-md shadow-lg">
                <Layers className="h-5 w-5 text-[#443627]" />
              </div>
              <div className="absolute -bottom-2 right-12 flex h-12 w-12 items-center justify-center rounded-full bg-[#EFDCAB]/45 backdrop-blur-md shadow-lg">
                <Zap className="h-5 w-5 text-[#443627]" />
              </div>
            </div>
          </motion.div>

          {/* Content column - More playful layout */}
          <motion.div
            className="flex-1 mt-8 md:mt-0 text-left"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 50 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <motion.div
              initial={{ y: -10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-block -rotate-2 rounded-full bg-[#EFDCAB]/30 backdrop-blur-sm px-4 py-1.5 text-sm font-medium text-[#443627] shadow-sm"
            >
              ¡Buenas! Soy
            </motion.div>

            <motion.h1
              className="mt-3 text-4xl font-bold tracking-tight text-primary sm:text-5xl md:text-6xl"
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <span className="relative inline-block">
                Santiago
                <motion.span
                  className="absolute -right-2 -top-2 h-8 w-8 rounded-full bg-[#EFDCAB]/40 blur-md"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                />
              </span>
              <br />
              <motion.span
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="inline-block ml-6 md:ml-10"
              >
                Mangas
              </motion.span>
            </motion.h1>

            <motion.h2
              className="mt-3 text-2xl font-semibold text-primary md:text-3xl rotate-1 inline-block"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ rotate: 0, scale: 1.02 }}
            >
              Programador FullStack
            </motion.h2>

            <motion.p
              className="mt-2 text-xl text-muted-foreground"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              ¡Desarrollando experiencias digitales!
            </motion.p>

            <motion.p
              className="mt-4 max-w-md text-muted-foreground md:mx-0"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              Desarrollador de Bahía Blanca, Argentina. Especializado en páginas y aplicaciones web únicas.
            </motion.p>

            {/* Social links */}
            <motion.div
              className="mt-6 flex flex-wrap items-start gap-4"
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.9 }}
            >
              <GitHub />
              <Linkedin />
              <div className="mt-2 md:mt-0">
                <ContactButton />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
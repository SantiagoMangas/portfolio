import { FiMail } from "react-icons/fi"
import { FaInstagram, FaLinkedin, FaWhatsapp } from "react-icons/fa"
import { motion } from "framer-motion"

function ContactRedes() {
  const contactMethods = [
    {
      title: "Email",
      description: "Contactame vía email para tus consultas o propuestas.",
      icon: <FiMail className="h-6 w-6" />,
      link: "mailto:santimangas16@gmail.com",
      linkText: "santimangas16@gmail.com",
      gradient: "from-orange-500 to-yellow-500",
    },
    {
      title: "Instagram",
      description: "Enviame un mensaje en Instagram. No tardo en responder!",
      icon: <FaInstagram className="h-6 w-6" />,
      link: "https://www.instagram.com/santimangas16",
      linkText: "@santimangas16",
      gradient: "from-pink-500 to-rose-500",
    },
    {
      title: "LinkedIn",
      description: "Conectemonos en LinkedIn para mayor oportunidades.",
      icon: <FaLinkedin className="h-6 w-6" />,
      link: "https://www.linkedin.com/in/santiago-mangas",
      linkText: "linkedin.com/in/santiago-mangas",
      gradient: "from-blue-600 to-blue-800",
    },
    {
      title: "WhatsApp",
      description: "Envíame un mensaje directo a través de WhatsApp.",
      icon: <FaWhatsapp className="h-6 w-6" />,
      link: "https://wa.me/542923428367",
      linkText: "+54 2923 428367",
      gradient: "from-green-500 to-green-600",
    }
  ]

  return (
    <section className="relative overflow-hidden w-full bg-theme_light_fond dark:bg-black">
      <div className="bg-[#F0A04B] dark:bg-[#F0A04B]/50 absolute top-36 right-0 -mr-12 w-80 h-48 rounded-full  blur-3xl pointer-events-none z-0"></div>
      <div className="bg-[#73BBA3]/65 absolute top-64 2xl:top-22 left-0 -ml-24 w-80 h-80 rounded-full   blur-3xl pointer-events-none z-0"></div>

      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 max-w-screen-2xl mx-auto relative z-10">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-theme_light_brown dark:text-white mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contacto
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mx-auto">
          {contactMethods.map((method, index) => (
            <motion.div
              key={index}
              className="flex justify-center w-full h-full"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="w-full group">
                <div className="relative bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-200/50 dark:border-gray-700/50 hover:border-gray-300/70 dark:hover:border-gray-600/70 hover:-translate-y-2">
                  {/* Gradiente decorativo */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${method.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`}
                  ></div>

                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${method.gradient} text-white mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {method.icon}
                  </div>

                  <h3 className="text-xl font-semibold text-theme_light_brown dark:text-white mb-3 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                    {method.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">{method.description}</p>

                  <a
                    href={method.link}
                    target={method.link.startsWith("mailto:") ? "_self" : "_blank"}
                    rel={method.link.startsWith("mailto:") ? "" : "noopener noreferrer"}
                    className={`inline-flex items-center text-sm font-medium bg-gradient-to-r ${method.gradient} bg-clip-text text-transparent hover:underline transition-all duration-300 group-hover:scale-105`}
                  >
                    {method.linkText}
                    <svg className="w-4 h-4 ml-1 opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>

                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ContactRedes
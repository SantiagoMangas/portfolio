"use client"
import { motion } from "framer-motion"

function CardTimeLine() {
  // Datos de educación
  const education = [
    {
      title: "Técnico Universitario en Programación",
      date: "2023 - 2024",
      description: "Tecnicatura de 2 años de la Universidad Tecnológica Nacional - Bahía Blanca.",
      link: "/certificados/titulo-tecnico.pdf",
      linkText: "Descargar",
      badge: "Actual",
    },
    {
      title: "Escuela Primaria y Secundaria – Instituto Almafuerte (Puan)",
      date: "2011 – 2022",
      description: "Graduado de Bachiller en Economía y Administración",
      link: "https://www.facebook.com/p/Instituto-Almafuerte-Nivel-Secundario-100063693335140/?locale=es_LA",
      linkText: "Ver institución",
      badge: null,
    },
  ]

  // Datos de certificados
  const certificates = [
    {
      title: "Diplomatura en Desarrollo Web Full Stack",
      date: "2024 (12/06 - 30/12)",
      description: "Diplomatura en Programación Web Full Stack Developer | UTN BS. AS.",
      link: "public/Certificados/Certificados.pdf",
      linkText: "Ver certificado",
      badge: null,
    },
    {
      title: "Certificado de Inglés",
      date: "2023",
      description: "Nivel B2 - Upper Intermediate",
      link: "/certificados/certificado-ingles.pdf",
      linkText: "Ver certificado",
      badge: null,
    },
  ]

  // Función para renderizar un elemento de la línea de tiempo
  const renderTimelineItem = (item, index, isLast) => (
    <motion.li
      className={`${!isLast ? "mb-12" : ""} ms-6`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <span className="absolute flex items-center justify-center w-8 h-8 bg-[#F6FB7A] rounded-full -start-4 ring-8 ring-white dark:ring-gray-900 dark:bg-[#88D66C] shadow-md">
        <svg
          className="w-3.5 h-3.5 text-[#88D66C] dark:text-white"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
        </svg>
      </span>
      <h3 className="flex items-center flex-wrap mb-2 text-xl font-semibold text-gray-900 dark:text-white">
        {item.title}
        {item.badge && (
          <span className="bg-[#B4E380] text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-[#73BBA3] dark:text-white ms-3 mt-1 md:mt-0">
            {item.badge}
          </span>
        )}
      </h3>
      <time className="block mb-3 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">{item.date}</time>
      <p className="mb-4 text-base font-normal text-gray-600 dark:text-gray-300">{item.description}</p>
      {item.link &&
        (item.linkText === "Descargar" ? (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-[#073b24] bg-white border border-gray-200 rounded-lg hover:bg-[#F6FB7A] hover:text-black focus:z-10 focus:ring-4 focus:outline-none focus:ring-[#B4E380] dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 dark:hover:text-white dark:hover:bg-[#73BBA3] dark:focus:ring-[#88D66C] transition-all duration-300 shadow-sm"
          >
            <svg
              className="w-3.5 h-3.5 me-2.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414Z" />
              <path d="M18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z" />
            </svg>
            {item.linkText}
          </a>
        ) : (
          <a
            href={item.link}
            target="_blank"
            rel="noreferrer noopener"
            className="text-base font-normal text-gray-600 dark:text-gray-300 underline underline-offset-2 hover:text-[#073b24] dark:hover:text-[#B4E380] transition-colors"
          >
            {item.linkText}
          </a>
        ))}
    </motion.li>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      {/* Columna de Educación */}
      <div>
        <motion.h3
          className="text-xl font-bold mb-6 text-theme_light_brown dark:text-white text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Educación
        </motion.h3>
        <ol className="relative border-s-2 border-[#88D66C] dark:border-[#73BBA3] pl-2">
          {education.map((item, index) => renderTimelineItem(item, index, index === education.length - 1))}
        </ol>
      </div>

      {/* Columna de Certificados */}
      <div>
        <motion.h3
          className="text-xl font-bold mb-6 text-theme_light_brown dark:text-white text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Certificados
        </motion.h3>
        <ol className="relative border-s-2 border-[#88D66C] dark:border-[#73BBA3] pl-2">
          {certificates.map((item, index) => renderTimelineItem(item, index, index === certificates.length - 1))}
        </ol>
      </div>
    </div>
  )
}

export default CardTimeLine
"use client"
import { motion } from "framer-motion"

function CardTimeLine() {
  // Datos de educación
  const education = [
    {
      title: "Técnico Universitario en Programación",
      date: "2023 - 2024",
      description: "Tecnicatura de 2 años Full Stack | UTN Bahía Blanca.",
      link: "/certificados/titulo-tecnico.pdf",
      linkText: "Ver certificado",
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
      date: "2022",
      description: "Nivel B2 - Upper Intermediate Programa de Certificación de Competencias en Lengua Extranjera | UTN Bahía Blanca.",
      link: "/certificados/certificado-ingles.pdf",
      linkText: "Ver certificado",
      badge: null,
    },
  ]

  // Función para renderizar un elemento de la línea de tiempo
  const renderTimelineItem = (item, index, isLast) => (
    <li
      className={`${!isLast ? "mb-12" : ""} ms-6`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <span className="absolute flex items-center justify-center w-8 h-8 bg-theme_light_yellow rounded-full -start-4 ring-8 ring-white dark:ring-gray-900 dark:bg-theme_teal text-theme_mid_green shadow-md">
        <svg
          className="w-3.5 h-3.5 text-theme_dark_green dark:text-white"
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
          <span className="bg-theme_light_green text-theme_dark_green text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-theme_mid_green lg:ms-3 mt-1 md:mt-0 md:ms-0">
            {item.badge}
          </span>
        )}
      </h3>
      <time className="block mb-3 text-sm font-normal leading-none text-gray-500 dark:text-gray-400">{item.date}</time>
      <p className="mb-4 text-base font-normal text-gray-600 dark:text-gray-300">{item.description}</p>

      {item.link && (
        <a
          href={item.link}
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center px-5 py-2.5 text-sm font-medium text-theme_dark_green bg-white border border-gray-200 rounded-lg hover:bg-theme_light_yellow hover:text-black focus:z-10 focus:ring-4 focus:outline-none focus:ring-theme_light_green dark:bg-theme_light_brown dark:text-gray-300 dark:border-gray-600 dark:hover:text-theme_light_orange dark:hover:bg-themeborder-theme_teal dark:focus:ring-theme_light_orange transition-all duration-300 shadow-sm"
        >
          {item.linkText.includes("Ver certificado") ? (
            <svg
              className="w-3.5 h-3.5 me-2.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
          ) : (
            <svg
              className="w-3.5 h-3.5 me-2.5"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
            </svg>
          )}
          {item.linkText}
        </a>
      )}
    </li>
  )

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
      <div>
        <motion.h3
          className="text-2xl font-bold mb-6 text-theme_light_brown dark:text-white text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Educación
        </motion.h3>
        <ol className="relative border-s-2 border-theme_light_green dark:border-theme_teal pl-2">
          {education.map((item, index) => renderTimelineItem(item, index, index === education.length - 1))}
        </ol>
      </div>

      <div>
        <motion.h3
          className="text-2xl font-bold mb-6 text-theme_light_brown dark:text-white text-center md:text-left"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Certificados
        </motion.h3>
        <ol className="relative border-s-2 border-theme_light_green dark:border-theme_teal pl-2">
          {certificates.map((item, index) => renderTimelineItem(item, index, index === certificates.length - 1))}
        </ol>
      </div>
    </div>
  )
}

export default CardTimeLine
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaServer,
  FaDocker,
  FaNpm,
  FaGitAlt,
  FaCode,
} from "react-icons/fa"
import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  SiPostman,
} from "react-icons/si"
import { VscCode } from "react-icons/vsc"

// Exportamos todos los iconos para que puedan ser importados desde otros componentes
export const TechIcons = {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGithub,
  FaDatabase,
  FaServer,
  FaDocker,
  FaNpm,
  FaGitAlt,
  FaCode,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  VscCode,
  SiPostman,
}

// Función para renderizar los badges de tecnologías
export const renderTechnologyBadges = (tech) => {
  switch (tech) {
    case "HTML":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#E86229] shadow-sm">
          <FaHtml5 className="mr-1.5 text-sm" />
          HTML
        </span>
      )
    case "CSS":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#3A97D0] shadow-sm">
          <FaCss3Alt className="mr-1.5 text-sm" />
          CSS
        </span>
      )
    case "JavaScript":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-yellow-500 shadow-sm">
          <FaJs className="mr-1.5 text-sm" />
          JS
        </span>
      )
    case "React":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#4E7AB5] shadow-sm">
          <FaReact className="mr-1.5 text-sm" />
          React
        </span>
      )
    case "Tailwind":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#003159] dark:bg-[#0D4A6C] shadow-sm">
          <SiTailwindcss className="mr-1.5 text-sm" />
          Tailwind
        </span>
      )
    case "Node.js":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#5A8E4E] shadow-sm">
          <FaNodeJs className="mr-1.5 text-sm" />
          Node.js
        </span>
      )
    case "TypeScript":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#3178C6] shadow-sm">
          <SiTypescript className="mr-1.5 text-sm" />
          TS
        </span>
      )
    case "Next.js":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-black shadow-sm">
          <SiNextdotjs className="mr-1.5 text-sm" />
          Next.js
        </span>
      )
    case "Express":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#000000] shadow-sm">
          <SiExpress className="mr-1.5 text-sm" />
          Express
        </span>
      )
    case "MongoDB":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#47A248] shadow-sm">
          <SiMongodb className="mr-1.5 text-sm" />
          MongoDB
        </span>
      )
    case "MySQL":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#4479A1] shadow-sm">
          <SiMysql className="mr-1.5 text-sm" />
          MySQL
        </span>
      )
    case "REST API":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#FF5733] shadow-sm">
          <FaServer className="mr-1.5 text-sm" />
          REST API
        </span>
      )
    case "GraphQL":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#E535AB] shadow-sm">
          <FaDatabase className="mr-1.5 text-sm" />
          GraphQL
        </span>
      )
    case "Git":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#F05032] shadow-sm">
          <FaGitAlt className="mr-1.5 text-sm" />
          Git
        </span>
      )
    case "GitHub":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#181717] shadow-sm">
          <FaGithub className="mr-1.5 text-sm" />
          GitHub
        </span>
      )
    case "VS Code":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#007ACC] shadow-sm">
          <VscCode className="mr-1.5 text-sm" />
          VS Code
        </span>
      )
    case "NPM":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#CB3837] shadow-sm">
          <FaNpm className="mr-1.5 text-sm" />
          NPM
        </span>
      )
    case "Postman":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#FF6C37] shadow-sm">
          <SiPostman className="mr-1.5 text-sm" />
          Postman
        </span>
      )
    case "Vite":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#646CFF] shadow-sm">
          <SiVite className="mr-1.5 text-sm" />
          Vite
        </span>
      )
    default:
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-gray-500 shadow-sm">
          {tech}
        </span>
      )
  }
}

// Lista de tecnologías por categoría
export const technologiesByCategory = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "TypeScript", "Next.js", "Vite"],
  backend: ["Node.js", "Express", "MongoDB", "MySQL", "REST API", "GraphQL"],
  tools: ["Git", "GitHub", "VS Code", "NPM", "Postman"],
}
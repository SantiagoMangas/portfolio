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
    FaFigma,
    FaGitAlt,
    FaCode,
  } from "react-icons/fa"
  import {
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiPostgresql,
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
    FaFigma,
    FaGitAlt,
    FaCode,
    SiTailwindcss,
    SiExpress,
    SiMongodb,
    SiPostgresql,
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
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#E86229]">
            <FaHtml5 className="mr-1" />
            HTML
          </span>
        )
      case "CSS":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#3A97D0]">
            <FaCss3Alt className="mr-1" />
            CSS
          </span>
        )
      case "JavaScript":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-yellow-500">
            <FaJs className="mr-1" />
            JavaScript
          </span>
        )
      case "React":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#4E7AB5]">
            <FaReact className="mr-1" />
            React
          </span>
        )
      case "Tailwind":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#003159] dark:bg-[#0D4A6C]">
            <SiTailwindcss className="mr-1" />
            Tailwind
          </span>
        )
      case "Node.js":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#5A8E4E]">
            <FaNodeJs className="mr-1" />
            Node.js
          </span>
        )
      case "TypeScript":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#3178C6]">
            <SiTypescript className="mr-1" />
            TypeScript
          </span>
        )
      case "Next.js":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-black">
            <SiNextdotjs className="mr-1" />
            Next.js
          </span>
        )
      case "Express":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#000000]">
            <SiExpress className="mr-1" />
            Express
          </span>
        )
      case "MongoDB":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#47A248]">
            <SiMongodb className="mr-1" />
            MongoDB
          </span>
        )
      case "PostgreSQL":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#336791]">
            <SiPostgresql className="mr-1" />
            PostgreSQL
          </span>
        )
      case "MySQL":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#4479A1]">
            <SiMysql className="mr-1" />
            MySQL
          </span>
        )
      case "REST API":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#FF5733]">
            <FaServer className="mr-1" />
            REST API
          </span>
        )
      case "GraphQL":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#E535AB]">
            <FaDatabase className="mr-1" />
            GraphQL
          </span>
        )
      case "Firebase":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#FFCA28]">
            <FaDatabase className="mr-1" />
            Firebase
          </span>
        )
      case "Git":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#F05032]">
            <FaGitAlt className="mr-1" />
            Git
          </span>
        )
      case "GitHub":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#181717]">
            <FaGithub className="mr-1" />
            GitHub
          </span>
        )
      case "VS Code":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#007ACC]">
            <VscCode className="mr-1" />
            VS Code
          </span>
        )
      case "Figma":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#F24E1E]">
            <FaFigma className="mr-1" />
            Figma
          </span>
        )
      case "Docker":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#2496ED]">
            <FaDocker className="mr-1" />
            Docker
          </span>
        )
      case "NPM":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#CB3837]">
            <FaNpm className="mr-1" />
            NPM
          </span>
        )
      case "Postman":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#FF6C37]">
            <SiPostman className="mr-1" />
            Postman
          </span>
        )
      case "Vite":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#646CFF]">
            <SiVite className="mr-1" />
            Vite
          </span>
        )
      case "Webpack":
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-[#8DD6F9]">
            <FaJs className="mr-1" />
            Webpack
          </span>
        )
      default:
        return (
          <span className="flex items-center px-3 py-1 text-xs font-medium rounded-full text-white bg-gray-500">
            {tech}
          </span>
        )
    }
  }
  
  // Lista de tecnologías por categoría
  export const technologiesByCategory = {
    frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "TypeScript", "Next.js", "Vite"],
    backend: ["Node.js", "Express", "MongoDB", "PostgreSQL", "MySQL", "REST API", "GraphQL", "Firebase"],
    tools: ["Git", "GitHub", "VS Code", "Figma", "Docker", "NPM", "Postman", "Webpack"],
  }
  
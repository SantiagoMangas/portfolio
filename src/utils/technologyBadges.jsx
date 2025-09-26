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
  FaJava,
  FaPython,
  FaRobot,   
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
  SiSpringboot,
  SiJunit5,
  SiFlutter,
  SiDart,
  SiOpencv,   
} from "react-icons/si"
import { VscCode } from "react-icons/vsc"

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
  FaJava,
  FaPython,   
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiTypescript,
  SiNextdotjs,
  SiVite,
  VscCode,
  SiPostman,
  SiSpringboot,
  SiJunit5,
  SiFlutter,
  SiDart,
  SiOpencv, 
  FaRobot,   
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
    case "Java":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#007396] shadow-sm">
          <FaJava className="mr-1.5 text-sm" />
          Java
        </span>
      )
    case "Spring Boot":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#6DB33F] shadow-sm">
          <SiSpringboot className="mr-1.5 text-sm" />
          Spring Boot
        </span>
      )
    case "JUnit":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#25A162] shadow-sm">
          <SiJunit5 className="mr-1.5 text-sm" />
          JUnit
        </span>
      )
    case "Maven":
    return (
      <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#C71A36] shadow-sm">
        <FaCode className="mr-1.5 text-sm" /> {/* Ícono alternativo */}
        Maven
      </span>
    )

    case "Flutter":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#02569B] shadow-sm">
          <SiFlutter className="mr-1.5 text-sm" />
          Flutter
        </span>
      )
    case "Dart":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#0175C2] shadow-sm">
          <SiDart className="mr-1.5 text-sm" />
          Dart
        </span>
      )

    case "Python":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#3776AB] shadow-sm">
          <FaPython className="mr-1.5 text-sm" />
          Python
        </span>
      )
    case "OpenCV":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#5C3EE8] shadow-sm">
          <SiOpencv className="mr-1.5 text-sm" />
          OpenCV
        </span>
      )
    case "YOLOv8":
      return (
        <span className="flex items-center px-2.5 py-1 text-xs font-medium rounded-lg text-white bg-[#8B3FF0] shadow-sm">
          <FaRobot className="mr-1.5 text-sm" />
          YOLOv8
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

export const technologiesByCategory = {
  frontend: ["HTML", "CSS", "JavaScript", "React", "Tailwind", "TypeScript", "Next.js", "Vite", "Flutter", "Dart"],
  backend: ["Java", "Spring Boot", "JUnit", "Maven", "Node.js", "Express", "MongoDB", "MySQL", "REST API"],
  vision: ["Python", "OpenCV", "YOLOv8"],  
  tools: ["Git", "GitHub", "VS Code", "NPM", "Postman"],
}
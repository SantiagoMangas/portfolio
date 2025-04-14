import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiMail } from "react-icons/hi"
import SocialButton from "../buttons/SocialButton"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-theme_light_green dark:bg-theme_dark_green text-black dark:text-white py-10">

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold dark:text-white">Santiago Mangas</h2>
            <p className="text-sm mt-1 text-black/70 dark:text-white/70">Desarrollador FullStack</p>
          </div>

        {/* Enlaces rápidos */}
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { text: "Inicio", path: "/" },
            { text: "Proyectos", path: "/projects" },
            { text: "Sobre mí", path: "/about" },
            { text: "Contacto", path: "/contact" }
          ].map(({ text, path }, index) => (
            <Link key={index} to={path} className="relative group">
              <span className="text-sm font-medium dark:text-white">{text}</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-theme_light_yellow dark:bg-theme_light_orange group-hover:w-full transition-all duration-300"></span>
            </Link>
          ))}
        </div>

          <div className="flex gap-4">
            <SocialButton href="https://github.com/SantiagoMangas" icon={<FaGithub size={20} />} />
            <SocialButton href="https://www.linkedin.com/in/santiago-mangas/" icon={<FaLinkedin size={20} />} />
            <SocialButton href="mailto:santimangas16@gmail.com" icon={<HiMail size={20} />} />
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-500 text-center text-xs text-black/70 dark:text-white/70">
          <p>© {currentYear} Santiago Mangas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
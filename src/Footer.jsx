import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiMail } from "react-icons/hi"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer relative overflow-hidden bg-white dark:bg-[#1E1E1E] text-black dark:text-white">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="absolute left-1/4 bottom-1/4 h-24 w-24 rounded-full bg-[#73BBA3] dark:bg-[#88D66C] blur-2xl"></div>
        <div className="absolute right-1/4 bottom-1/2 h-32 w-32 rounded-full bg-[#F0A04B] dark:bg-[#FF6B6B] blur-2xl"></div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Brand */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold dark:text-white">Santiago Mangas</h2>
            <p className="text-sm mt-1 text-black/70 dark:text-white/70">Desarrollador FullStack</p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-wrap justify-center gap-6">
            <Link to="/" className="relative group">
              <span className="text-sm font-medium dark:text-white">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FADA7A] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/projects" className="relative group">
              <span className="text-sm font-medium dark:text-white">Proyectos</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FADA7A] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="relative group">
              <span className="text-sm font-medium dark:text-white">Sobre mí</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FADA7A] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="relative group">
              <span className="text-sm font-medium dark:text-white">Contacto</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FADA7A] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a
              href="https://github.com/SantiagoMangas"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-black flex items-center justify-center text-white hover:bg-gray-800 transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/santiago-mangas/"
              target="_blank"
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-[#0077b5] flex items-center justify-center text-white hover:bg-[#005885] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="mailto:santimangas16@email.com"
              className="h-10 w-10 rounded-full bg-[#F97316] flex items-center justify-center text-white hover:bg-[#e56b10] transition-colors duration-300"
              aria-label="Email"
            >
              <HiMail size={20} />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-black/70 dark:text-white/70">
          <p>© {currentYear} Santiago Mangas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
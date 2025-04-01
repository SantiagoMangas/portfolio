import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin } from "react-icons/fa"
import { HiMail } from "react-icons/hi"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-[#fdffc9] dark:bg-[#121212] text-black dark:text-white py-10">
      {/* Elementos decorativos */}
      <div className="absolute inset-0 -z-10 opacity-30 pointer-events-none">
        <div className="absolute left-1/4 bottom-1/4 h-24 w-24 rounded-full bg-[#73BBA3] dark:bg-[#88D66C] blur-3xl"></div>
        <div className="absolute right-1/4 top-1/3 h-32 w-32 rounded-full bg-[#F0A04B] dark:bg-[#FF6B6B] blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo y descripción */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold dark:text-white">Santiago Mangas</h2>
            <p className="text-sm mt-1 text-black/70 dark:text-white/70">Desarrollador FullStack</p>
          </div>

          {/* Enlaces rápidos */}
          <div className="flex flex-wrap justify-center gap-6">
            {["Home", "Proyectos", "Sobre mí", "Contacto"].map((text, index) => (
              <Link key={index} to={`/${text.toLowerCase().replace(" ", "")}`} className="relative group">
                <span className="text-sm font-medium dark:text-white">{text}</span>
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FADA7A] group-hover:w-full transition-all duration-300"></span>
              </Link>
            ))}
          </div>

          {/* Redes sociales */}
          <div className="flex gap-4">
            <SocialButton href="https://github.com/SantiagoMangas" icon={<FaGithub size={20} />} color="black" />
            <SocialButton href="https://www.linkedin.com/in/santiago-mangas/" icon={<FaLinkedin size={20} />} color="#0077b5" />
            <SocialButton href="mailto:santimangas16@email.com" icon={<HiMail size={20} />} color="#F97316" />
          </div>
        </div>

        {/* Derechos de autor */}
        <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-800 text-center text-xs text-black/70 dark:text-white/70">
          <p>© {currentYear} Santiago Mangas. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

const SocialButton = ({ href, icon, color }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`group h-10 w-10 rounded-full flex items-center justify-center text-white transition-all duration-300`}
    style={{ backgroundColor: color }}
  >
    {icon}
    <span className="absolute opacity-0 group-hover:opacity-100 group-hover:-translate-y-10 text-xs text-white bg-black/80 px-2 py-1 rounded transition-all duration-500">
      {href.includes("linkedin") ? "LinkedIn" : href.includes("github") ? "GitHub" : "Email"}
    </span>
  </a>
)

export default Footer
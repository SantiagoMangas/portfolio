import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import Switch from "../buttons/Switch"
import { Home, Phone, Info, Briefcase } from "lucide-react"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const location = useLocation() // Get current location/path

  const handleNav = () => {
    setNav(!nav)
  }

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (nav) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [nav])

  const navItems = [
    { id: 1, text: "Inicio", path: "/", icon: <Home size={20} /> },
    { id: 2, text: "Contacto", path: "/contact", icon: <Phone size={20} /> },
    { id: 3, text: "Proyectos", path: "/projects", icon: <Briefcase size={20} /> },
    { id: 4, text: "Sobre mi", path: "/about", icon: <Info size={20} /> },
  ]

  // Check if a nav item is active
  const isActive = (path) => {
    // For home page, check exact match
    if (path === "/") {
      return location.pathname === "/"
    }
    // For other pages, check if the current path starts with the nav item path
    return location.pathname.startsWith(path)
  }

  return (
    <div className="navbar bg-theme_light_green dark:bg-theme_dark_green flex justify-between items-center h-20 px-4 text-black dark:text-white shadow-sm dark:shadow-[#1E1E1E]/20 z-50 relative transition-colors duration-300">
      <h1 className="w-full text-3xl font-bold transition-colors duration-300">Mangas</h1>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center">
        <ul className="flex items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className={`flex items-center justify-center whitespace-nowrap 
              ${
                isActive(item.path)
                  ? "bg-theme_teal dark:bg-[#395D4D]"
                  : "hover:bg-theme_teal dark:hover:bg-[#395D4D]"
              }
              rounded-xl m-2 cursor-pointer transition-colors duration-300`}
            >
              <Link to={item.path} className="block w-full h-full p-4 dark:text-white transition-colors duration-300">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <div className="ml-2">
          <Switch />
        </div>
      </div>

      {/* Mobile Menu Toggle */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={handleNav}
          className="relative w-10 h-10 flex justify-center items-center rounded-full hover:bg-theme_teal dark:hover:bg-[#395D4D] transition-colors duration-300"
          aria-label={nav ? "Cerrar menú" : "Abrir menú"}
        >
          <div className="block w-5 absolute">
            <span
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                nav ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                nav ? "opacity-0" : "opacity-100"
              }`}
            ></span>
            <span
              className={`block absolute h-0.5 w-5 bg-current transform transition duration-300 ease-in-out ${
                nav ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {nav && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden transition-opacity duration-300"
          onClick={handleNav}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`
          mobile-menu
          fixed lg:hidden left-0 top-0 w-[70%] h-full z-50
          border-r border-r-gray-300 dark:border-r-[#395D4D]
          bg-theme_light_green dark:bg-theme_dark_green
          text-black dark:text-white
          shadow-2xl
          transition-all duration-300 ease-in-out
          ${nav ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Mobile Logo */}
        <div className="bg-white dark:bg-[#121212] flex justify-between items-center p-4 border-b border-gray-200 dark:border-[#395D4D] transition-colors duration-300">
          <h1 className="text-2xl font-bold dark:text-white transition-colors duration-300">Mangas.</h1>
          <button
            onClick={handleNav}
            className="p-2 rounded-full hover:bg-theme_teal dark:hover:bg-[#395D4D] transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 dark:text-white transition-colors duration-300"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Items */}
        <div className="bg-theme_light_green dark:bg-theme_dark_green p-4 flex-grow transition-colors duration-300">
          <ul className="space-y-2">
            {navItems.map((item) => (
              <li
                key={item.id}
                className={`p-2 rounded-lg ${
                  isActive(item.path)
                    ? "bg-theme_teal dark:bg-[#395D4D] font-bold"
                    : "hover:bg-theme_teal dark:hover:bg-[#395D4D]"
                } transition-colors duration-300 cursor-pointer`}
              >
                <Link to={item.path} onClick={handleNav} className="flex w-full h-full p-2 space-x-2">
                  {item.icon}
                  <span>{item.text}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Theme Switch */}
        <div className="flex justify-center p-4 border-t border-gray-200 dark:border-[#395D4D] transition-colors duration-300">
          <Switch />
        </div>
      </div>
    </div>
  )
}

export default Navbar
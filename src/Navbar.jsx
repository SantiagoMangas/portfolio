import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import Switch from "./Switch"

const Navbar = () => {
  const [nav, setNav] = useState(false)

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
    { id: 1, text: "Home", path: "/" },
    { id: 2, text: "Contacto", path: "/contact" },
    { id: 3, text: "Proyectos", path: "/projects" },
    { id: 4, text: "Sobre mi", path: "/about" },
  ]

  return (
    <div className="navbar bg-white dark:bg-[#1E1E1E] flex justify-between items-center h-20 px-4 text-black dark:text-white shadow-sm z-50 relative">
      <h1 className="w-full text-3xl font-bold">Mangas</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        <ul className="flex items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-center whitespace-nowrap 
              hover:bg-gray-100 dark:hover:bg-neutral-800
              rounded-xl m-2 cursor-pointer duration-300"
            >
              <Link to={item.path} className="block w-full h-full p-4 dark:text-white">
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <Switch />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <button
          onClick={handleNav}
          className="relative w-10 h-10 flex justify-center items-center rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-300"
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
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 md:hidden transition-opacity duration-300"
          onClick={handleNav}
        />
      )}

      {/* Mobile Menu */}
      <div
        className={`
          mobile-menu
          fixed md:hidden left-0 top-0 w-[70%] h-full z-50
          border-r border-r-gray-300 dark:border-r-neutral-700
          bg-white dark:bg-[#1E1E1E]
          text-black dark:text-white
          shadow-2xl
          transition-transform duration-300 ease-in-out
          ${nav ? "translate-x-0" : "-translate-x-full"}
        `}
      >
        {/* Mobile Logo */}
        <div className="flex justify-between items-center p-4 border-b border-gray-200 dark:border-neutral-700">
          <h1 className="text-2xl font-bold dark:text-white">Mangas.</h1>
          <button
            onClick={handleNav}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors duration-300"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 dark:text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Items */}
        <div className="p-4 flex-grow">
          <ul className="space-y-2">
            {navItems.map((item, index) => (
              <li
                key={item.id}
                style={{
                  opacity: nav ? 1 : 0,
                  transform: nav ? "translateX(0)" : "translateX(-20px)",
                  transition: `opacity 0.3s ease, transform 0.3s ease ${index * 0.1}s`,
                }}
                className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800
                duration-300 cursor-pointer"
              >
                <Link to={item.path} onClick={handleNav} className="flex w-full h-full p-2 dark:text-white">
                  {item.text}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Theme Switch */}
        <div
          style={{
            opacity: nav ? 1 : 0,
            transform: nav ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.3s ease, transform 0.3s ease 0.4s",
          }}
          className="flex justify-center p-4 border-t border-gray-200 dark:border-neutral-700"
        >
          <Switch />
        </div>
      </div>
    </div>
  )
}

export default Navbar

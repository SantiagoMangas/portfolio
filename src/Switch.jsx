import { useState, useEffect } from "react"

const Switch = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  // Inicializar el tema cuando el componente se monta
  useEffect(() => {
    // Verificar si el documento tiene la clase 'dark'
    const isDark = document.documentElement.classList.contains("dark")
    setIsDarkMode(isDark)
  }, [])

  const handleToggle = () => {
    const newDarkMode = !isDarkMode
    setIsDarkMode(newDarkMode)

    // Actualizar la clase en el HTML y guardar en localStorage
    if (newDarkMode) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input className="sr-only peer" type="checkbox" checked={isDarkMode} onChange={handleToggle} />
      <div className="w-18 h-7 rounded-full bg-gradient-to-r from-[#F0A04B] to-[#F97316] peer-checked:from-[#73BBA3] peer-checked:to-[#88D66C] transition-all duration-500 after:content-['☀️'] after:absolute after:top-1 after:left-1 after:bg-white after:rounded-full after:h-5.5 after:w-6 after:flex after:items-center after:justify-center after:transition-all after:duration-500 peer-checked:after:translate-x-10 peer-checked:after:content-['🌙'] after:shadow-md after:text-lg hover:shadow-lg hover:scale-105 transition-all duration-300" />
    </label>
  )
}

export default Switch
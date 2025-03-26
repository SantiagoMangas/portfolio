import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import "./index.css"
import App from "./App.jsx"

// Función para inicializar el tema
function initializeTheme() {
  // Verificar si hay un tema guardado en localStorage
  const savedTheme = localStorage.getItem("theme")

  // Si hay un tema guardado, usarlo
  if (savedTheme === "dark") {
    document.documentElement.classList.add("dark")
  } else if (savedTheme === "light") {
    document.documentElement.classList.remove("dark")
  } else {
    // Si no hay tema guardado, verificar preferencia del sistema
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches
    if (prefersDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }
}

// Inicializar el tema antes de renderizar la aplicación
initializeTheme()

// Agregar un listener para cambios en el tema del sistema
window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
  const newTheme = e.matches ? "dark" : "light"
  if (!localStorage.getItem("theme")) {
    // Solo cambiar si el usuario no ha establecido una preferencia
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }
})

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { createContext, useContext, useEffect, useState } from "react"

const ThemeContext = createContext({ theme: "system", setTheme: () => null })

export function ThemeProvider({ children, defaultTheme = "system", storageKey = "theme", ...props }) {
  const [theme, setTheme] = useState(defaultTheme)

  useEffect(() => {
    const root = window.document.documentElement
    const initialColorValue = localStorage.getItem(storageKey)

    if (initialColorValue) {
      setTheme(initialColorValue)
      if (initialColorValue === "dark") {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }
    } else if (defaultTheme === "system") {
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light"
      setTheme(systemTheme)
      if (systemTheme === "dark") {
        root.classList.add("dark")
      }
    } else {
      if (defaultTheme === "dark") {
        root.classList.add("dark")
      }
    }
  }, [defaultTheme, storageKey])

  const value = {
    theme,
    setTheme: (newTheme) => {
      const root = window.document.documentElement

      localStorage.setItem(storageKey, newTheme)

      if (newTheme === "dark") {
        root.classList.add("dark")
      } else {
        root.classList.remove("dark")
      }

      setTheme(newTheme)
    },
  }

  return (
    <ThemeContext.Provider {...props} value={value}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  if (context === undefined) throw new Error("useTheme must be used within a ThemeProvider")

  return context
}
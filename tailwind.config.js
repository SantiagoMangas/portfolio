/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        theme_light_fond: "#fdffc9",
        theme_light_yellow: "#F6FB7A", // Amarillo suave
        theme_light_green: "#B4E380",  // Verde claro
        theme_mid_green: "#88D66C",    // Verde medio
        theme_teal: "#73BBA3",          // Verde azulado
        theme_dark_green: "#222E2A",    // Verde oscuro
        theme_light_orange: '#EF9651',  // Naranja suave
        theme_light_brown: '#443627', // Marrón claro
      },
    },
  },
  plugins: [],
}
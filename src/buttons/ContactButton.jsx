import { motion } from "framer-motion"
import { Link } from "react-router-dom"

const ContactButton = () => {
  return (
    <Link to="/contact">
    <motion.button
      className="cursor-pointer group relative bg-[#F97316] hover:bg-[#73BBA3] text-black font-semibold text-sm px-6 py-3 rounded-full transition-all duration-200 ease-in-out shadow hover:shadow-lg w-40 h-12 overflow-hidden"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.98 }}
    >
      <div className="relative flex items-center justify-center gap-2">
        <span className="relative inline-block overflow-hidden">
          <span className="block transition-transform duration-300 group-hover:-translate-y-full">
            Contactame!
          </span>
          <span className="absolute inset-0 transition-transform duration-300 translate-y-full group-hover:translate-y-0">
            Formulario
          </span>
        </span>

        <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-45" viewBox="0 0 24 24">
          <circle fill="currentColor" r={11} cy={12} cx={12} />
          <path strokeLinejoin="round" strokeLinecap="round" strokeWidth={2} stroke="white" d="M7.5 16.5L16.5 7.5M16.5 7.5H10.5M16.5 7.5V13.5" />
        </svg>
      </div>
    </motion.button>
    </Link>
  )
}

export default ContactButton
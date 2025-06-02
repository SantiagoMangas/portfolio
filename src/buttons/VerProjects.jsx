import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react';

function VerProjects() {
  return (
    <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.98 }}>
      <Link 
        href="/projects"
        className="group flex items-center gap-2 px-6 py-3 rounded-full border-2 border-theme_teal text-theme_teal dark:border-theme_light_green dark:text-theme_light_green font-medium hover:bg-theme_teal/10 transition-all duration-300"
      >
        Ver proyectos
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
      </Link>
    </motion.div>
  )
}

export default VerProjects
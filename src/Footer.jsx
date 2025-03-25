import React from 'react';
import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiMail } from 'react-icons/hi';
import { motion } from 'framer-motion';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="relative overflow-hidden bg-[#FCE7C8] dark:bg-[#F0A04B] text-[#F0A04B] dark:text-[#FCE7C8] transition-colors duration-300">
      {/* Decorative elements */}
      <div className="absolute inset-0 -z-10 opacity-20 pointer-events-none">
        <div className="absolute left-1/4 bottom-1/4 h-24 w-24 rounded-full bg-[#B1C29E] blur-2xl"></div>
        <div className="absolute right-1/4 bottom-1/2 h-32 w-32 rounded-full bg-[#FADA7A] blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          {/* Logo/Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h2 className="text-2xl font-bold">Santiago Mangas</h2>
            <p className="text-sm mt-1 text-[#F0A04B]/80 dark:text-[#FCE7C8]/80">Desarrollador FullStack</p>
          </motion.div>
          
          {/* Quick Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6"
          >
            <Link to="/" className="relative group">
              <span className="text-sm font-medium">Home</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FADA7A] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/projects" className="relative group">
              <span className="text-sm font-medium">Proyectos</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FADA7A] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/about" className="relative group">
              <span className="text-sm font-medium">Sobre mí</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FADA7A] group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link to="/contact" className="relative group">
              <span className="text-sm font-medium">Contacto</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#FADA7A] group-hover:w-full transition-all duration-300"></span>
            </Link>
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <a 
              href="https://github.com/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-[#B1C29E] flex items-center justify-center text-[#FCE7C8] hover:bg-[#FADA7A] hover:text-[#F0A04B] transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithub size={20} />
            </a>
            <a 
              href="https://linkedin.com/in/yourusername" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-[#B1C29E] flex items-center justify-center text-[#FCE7C8] hover:bg-[#FADA7A] hover:text-[#F0A04B] transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
            <a 
              href="mailto:your@email.com" 
              className="h-10 w-10 rounded-full bg-[#B1C29E] flex items-center justify-center text-[#FCE7C8] hover:bg-[#FADA7A] hover:text-[#F0A04B] transition-colors duration-300"
              aria-label="Email"
            >
              <HiMail size={20} />
            </a>
          </motion.div>
        </div>
        
        {/* Copyright */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-8 pt-4 border-t border-[#B1C29E]/30 text-center text-xs text-[#F0A04B]/70 dark:text-[#FCE7C8]/70"
        >
          <p>© {currentYear} Santiago Mangas. Todos los derechos reservados.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
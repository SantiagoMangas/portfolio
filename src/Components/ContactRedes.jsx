import React from "react";
import { FiMail } from "react-icons/fi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";
import CardServices from "../cards/CardServices";
import { motion } from "framer-motion";

function ContactRedes() {
  const contactMethods = [
    {
      title: "Email",
      description: "Contactame vía email para tus consultas o propuestas.",
      icon: <FiMail className="h-6 w-6 text-theme_light_brown dark:text-theme_dark_green" />,
      link: "mailto:santimangas16@gmail.com",
      linkText: "santimangas16@gmail.com"
    },
    {
      title: "Instagram",
      description: "Enviame un mensaje en Instagram. No tardo en responder!",
      icon: <FaInstagram className="h-6 w-6 text-theme_light_brown dark:text-theme_dark_green" />,
      link: "https://www.instagram.com/santimangas16",
      linkText: "@santimangas16"
    },
    {
      title: "LinkedIn",
      description: "Conectemonos en LinkedIn para mayor oportunidades.",
      icon: <FaLinkedin className="h-6 w-6 text-theme_light_brown dark:text-theme_dark_green" />,
      link: "https://www.linkedin.com/in/santiago-mangas",
      linkText: "linkedin.com/in/santiago-mangas"
    }
  ];

  return (
    <section className="w-full bg-theme_light_fond dark:bg-black">
      <div className="py-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 max-w-screen-2xl mx-auto">
        <motion.h2
          className="text-2xl md:text-3xl font-bold text-theme_light_brown dark:text-white mb-8 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Contacto
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          {contactMethods.map((method, index) => (
            <div key={index} className="w-full flex">
              <CardServices
                title={method.title}
                description={
                  <div className="flex flex-col">
                    <p className="mb-2">{method.description}</p>
                    <a 
                      href={method.link}
                      target={method.link.startsWith('mailto:') ? '_self' : '_blank'} 
                      rel={method.link.startsWith('mailto:') ? '' : 'noopener noreferrer'}
                      className="text-theme_light_brown dark:text-theme_teal font-medium hover:underline inline-block"
                    >
                      {method.linkText}
                    </a>
                  </div>
                }
                icon={method.icon}
                delay={index * 0.1}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ContactRedes;
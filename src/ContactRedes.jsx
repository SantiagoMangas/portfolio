import React from "react";
import { FiMail } from "react-icons/fi";
import { FaInstagram, FaLinkedin } from "react-icons/fa";

function ContactRedes() {
    return (
        <section className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-6 p-6 lg:px-16 w-full bg-theme_light_fond dark:bg-black">
            
            {/* Email */}
            <div className="flex flex-col items-center md:items-start bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full md:w-auto max-w-sm">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-theme_light_orange dark:bg-theme_teal mb-3">
                    <FiMail className="text-3xl text-white" />
                </div>
                <h2 className="text-xl font-bold text-theme_light_brown dark:text-theme_light_fond">Email</h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm text-center md:text-left">
                    Contactame vía email para tus consultas o propuestas.
                </p>
                <a 
                    href="mailto:santimangas16@gmail.com" 
                    className="mt-2 text-theme_light_brown dark:text-theme_mid_green font-medium hover:underline"
                >
                    santimangas16@gmail.com
                </a>
            </div>

            {/* Instagram */}
            <div className="flex flex-col items-center md:items-start bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full md:w-auto max-w-sm">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-theme_light_orange dark:bg-theme_teal mb-3">
                    <FaInstagram className="text-3xl text-white" />
                </div>
                <h2 className="text-xl font-bold text-theme_light_brown dark:text-theme_light_fond">Instagram</h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm text-center md:text-left">
                    Enviame un mensaje en Instagram. No tardo en responder!
                </p>
                <a 
                    href="https://www.instagram.com/santimangas16" target="_blank" rel="noopener noreferrer"
                    className="mt-2 text-theme_light_brown dark:text-theme_mid_green font-medium hover:underline"
                >
                    @santimangas16
                </a>
            </div>

            {/* LinkedIn */}
            <div className="flex flex-col items-center md:items-start bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg w-full md:w-auto max-w-sm">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-theme_light_orange dark:bg-theme_teal mb-3">
                    <FaLinkedin className="text-3xl text-white" />
                </div>
                <h2 className="text-xl font-bold text-theme_light_brown dark:text-theme_light_fond">LinkedIn</h2>
                <p className="text-gray-700 dark:text-gray-300 text-sm text-center md:text-left">
                    Conectemonos en LinkedIn para mayor oportunidades.
                </p>
                <a 
                    href="https://www.linkedin.com/in/santiago-mangas" target="_blank" rel="noopener noreferrer"
                    className="mt-2 text-theme_light_brown dark:text-theme_mid_green font-medium hover:underline"
                >
                    linkedin.com/in/santiago-mangas
                </a>
            </div>

        </section>
    );
}

export default ContactRedes;

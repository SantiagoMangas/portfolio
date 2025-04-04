import React from "react";
import Swal from "sweetalert2";
import { motion } from "framer-motion";
import { RiMailSendLine } from "react-icons/ri";
import ContactRedes from "./ContactRedes";  

const Form = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "d5f12f6d-5f49-4497-838a-b0ffed94a7a4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      event.target.reset();
      Swal.fire({
        title: "¡Muchas gracias!",
        text: "Tu mensaje ha sido enviado con éxito!",
        icon: "success",
        confirmButtonColor: "#73BBA3",
      });
    } else {
      Swal.fire({
        title: "Oops...",
        text: "Hubo un problema al enviar el mensaje. Inténtalo nuevamente.",
        icon: "error",
        confirmButtonColor: "#E25822",
      });
    }
  };

  return (
    <section className="flex flex-col justify-center items-center p-10 py-16 bg-theme_light_fond dark:bg-black">
       
    <div className="absolute top-0 right-0 -mt-24 w-80 h-80 rounded-full bg-theme_teal/70 dark:bg-theme_teal/70 blur-3xl pointer-events-none"></div>

    <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative bg-theme_light_brown/10 dark:bg-gray-900 px-6 py-4 rounded-lg shadow-lg dark:shadow-theme_teal/40 text-center max-w-2xl mb-8"
        >
        <p className="text-lg md:text-xl font-semibold text-theme_light_brown dark:text-gray-200">
            ✨ ¡Me encantaría saber de vos!  
            Si tenés una idea, una pregunta o simplemente querés charlar,  
            escribime por acá o en mis redes. 📩  
        </p>
        </motion.div>

    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full bg-white dark:bg-gray-900 p-8 rounded-lg shadow-md dark:shadow-theme_teal/40">
        {/* Formulario */}
        <form onSubmit={onSubmit} className="w-full max-w-lg text-gray-800 dark:text-white">
        <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-semibold text-center mb-6 text-theme_light_brown dark:text-white"
            >
            ¡Hablemos!
        </motion.h2>
        
        {/* Input Nombre */}
        <div className="relative mb-4">
            <input type="text" id="name" name="name" required placeholder=" " 
            className="block px-3 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-theme_light_brown peer " />
            <label htmlFor="name" 
            className="absolute text-sm text-gray-500 dark:text-gray-400 left-3 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-1 peer-focus:text-theme_light_brown dark:peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
            Nombre Completo
            </label>
        </div>

        {/* Input Email */}
        <div className="relative mb-4">
            <input type="email" id="email" name="email" required placeholder=" " 
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-theme_light_brown peer" />
            <label htmlFor="email" 
            className="absolute text-sm text-gray-500 dark:text-gray-400 left-3 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:text-theme_light_brown dark:peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
            Correo Electrónico
            </label>
        </div>

        {/* Textarea Mensaje */}
        <div className="relative mb-4">
            <textarea id="message" name="message" required placeholder=" " 
            className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-gray-900 bg-transparent rounded-lg border border-gray-300 dark:text-white dark:border-gray-600 dark:focus:border-gray-500 focus:outline-none focus:ring-0 focus:border-theme_light_brown peer h-32 resize-none" />
            <label htmlFor="message" 
            className="absolute text-sm text-gray-500 dark:text-gray-400 left-3 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white dark:bg-gray-900 px-2 peer-focus:text-gray-500 dark:peer-focus:text-gray-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4">
            Mensaje
            </label>
        </div>

        {/* Botón Enviar */}
        <motion.button
            type="submit"
            className="group flex items-center justify-center gap-2 w-full h-14 px-6 py-3 rounded-full border-2 border-theme_light_brown text-theme_light_brown dark:border-theme_teal dark:text-theme_teal font-medium transition-all duration-200 hover:bg-theme_light_brown/10 dark:hover:bg-theme_teal/20"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.97 }}
            >
            Enviar mensaje
            <RiMailSendLine className="h-5 w-5 transition-transform duration-200" />
        </motion.button>
        </form>

        {/* Mapa */}
        <div className="flex justify-center items-center">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199222.78702965836!2d-62.42117904732346!3d-38.721113871790955!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95edbcabdc1302bd%3A0x76d1d88d241e7a11!2sBah%C3%ADa%20Blanca%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1729116244554!5m2!1ses-419!2sar" 
            width="100%" height="100%" className="rounded-lg shadow-md"></iframe>
        </div>
    </div>
    </section>
  );
};

export default Form;

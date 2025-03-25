import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  const navItems = [
    { id: 1, text: 'Home', path: '/' },
    { id: 2, text: 'Contacto', path: '/contact' },
    { id: 3, text: 'Proyectos', path: '/projects' },
    { id: 4, text: 'Sobre mi', path: '/about' },
  ];

  return (
    <div className='bg-amber-300 flex justify-between items-center h-20 px-4 text-black'>
        <h1 className="w-full text-3xl font-bold">Mangas</h1>

        <ul className="hidden md:flex">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-center whitespace-nowrap hover:bg-amber-400 rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
            >
              <Link
                to={item.path}
                onClick={handleNav}
                className="block w-full h-full p-4"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Icono*/}
        <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>

        {/*Menu Celular*/}    

        <ul
        className={
          nav
            ? 'fixed md:hidden left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-amber-300 ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 left-[-100%]'
        }
        >
        
        {/* Celular Logo */}
        <h1 className='w-full text-3xl font-bold text-black m-4'>Mangas.</h1>

        {/* Celular Navigation Items */}
        {navItems.map(item => (
        <li
            key={item.id}
            className='p-1 border-b rounded-xl hover:bg-amber-400 duration-300 hover:text-black cursor-pointer border-gray-600'
        >
            <Link 
              to={item.path}
              onClick={handleNav}
              className='flex w-full h-full p-4'
            >
              {item.text}
            </Link>
        </li>
        ))}
        </ul>
    </div>
    );
};

export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import Switch from './Switch';

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
    <div className='bg-[#F2F6D0] dark:bg-[#D98324] flex justify-between items-center h-20 px-4 text-black dark:text-white transition-colors duration-300'>
      <h1 className="w-full text-3xl font-bold">Mangas</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        <ul className="flex items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-center whitespace-nowrap 
              hover:bg-[#EFDCAB] dark:hover:bg-[#443627]
              rounded-xl m-2 cursor-pointer duration-300 
              hover:text-black dark:hover:text-white"
            >
              <Link
                to={item.path}
                className="block w-full h-full p-4"
              >
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
        <Switch />
      </div>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center">
        <div onClick={handleNav} className='mr-4'>
          {nav ? (
            <AiOutlineClose 
              size={20} 
              className="dark:text-white" 
            />
          ) : (
            <AiOutlineMenu 
              size={20} 
              className="dark:text-white" 
            />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed md:hidden left-0 top-0 w-[60%] h-full 
          border-r border-r-gray-900 dark:border-r-neutral-700
          bg-[#F2F6D0] dark:bg-[#D98324]
          ease-in-out duration-500 
          flex flex-col
          ${nav ? 'translate-x-0' : '-translate-x-full'}
          text-black dark:text-white
          transition-colors
        `}
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-black dark:text-white m-4'>Mangas.</h1>

        {/* Mobile Navigation Items */}
        <ul className='flex-grow'>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-1 border-b border-gray-300 dark:border-neutral-700 
              rounded-xl hover:bg-[#EFDCAB] dark:hover:bg-[#443627]
              duration-300 hover:text-black dark:hover:text-white 
              cursor-pointer'
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

        {/* Mobile Theme Switch */}
        <div className='flex justify-center p-4'>
          <Switch />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
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
    <div className='bg-[#FCF596] flex justify-between items-center h-20 px-4 text-black'>
      <h1 className="w-full text-3xl font-bold">Mangas</h1>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center">
        <ul className="flex items-center">
          {navItems.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-center whitespace-nowrap hover:bg-[#DEAA79] rounded-xl m-2 cursor-pointer duration-300 hover:text-black"
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
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`
          fixed md:hidden left-0 top-0 w-[60%] h-full 
          border-r border-r-gray-900 bg-[#FCF596]
          ease-in-out duration-500 
          flex flex-col
          ${nav ? 'translate-x-0' : '-translate-x-full'}
        `}
      >
        {/* Mobile Logo */}
        <h1 className='w-full text-3xl font-bold text-black m-4'>Mangas.</h1>

        {/* Mobile Navigation Items */}
        <ul className='flex-grow'>
          {navItems.map(item => (
            <li
              key={item.id}
              className='p-1 border-b rounded-xl hover:bg-[#DEAA79] duration-300 hover:text-black cursor-pointer border-gray-600'
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
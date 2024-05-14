import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { navLinks } from "../constant";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div className='flex justify-between items-center h-24 max-w-[1240px] m-auto px-4 text-white'>
      <h1 className='w-full text-3xl font-bold text-[#c1e8ff]'>REACT.</h1>
      <ul className='flex max-md:hidden'>
        {navLinks.map((link) => (
          <li className='p-4'>{link.label}</li>
        ))}
      </ul>
      <div className='md:hidden'>
        <button onClick={handleMenu}>
          {isOpen ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
      </div>
      {/* mobile navLinks display */}
      <div
        className={
          isOpen
            ? `fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#021024] ease-in-out duration-500`
            : `fixed left-[-100%] ease-in-out duration-500`
        }>
        <h1 className='w-full text-3xl font-bold text-[#c1e8ff] m-4'>REACT.</h1>

        <ul className='uppercase p-4'>
          {navLinks.map((link) => (
            <li className='p-4 last:border-b-0 border-b border-b-gray-600'>
              {link.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

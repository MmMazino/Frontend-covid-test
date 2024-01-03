import React, { useState } from 'react'
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
        <div
          className="bg-white dark:bg-gray-900 px-5 md:px-10 lg:px-20 container mx-auto rounded-md"
        >
          <nav className="py-4 mb-12 flex justify-between sticky top-0 z-50 bg-white dark:text-white dark:bg-gray-900">
            <h1 className="text-xl font-burtons">Dashboard Covid-19</h1>
                        <div className="flex gap-5">
              <div onClick={handleNav} className="block md:hidden">
                {nav ? (
                  <AiOutlineClose size={20} className="cursor-pointer" />
                ) : (
                  <AiOutlineMenu size={20} className="cursor-pointer" />
                )}
              </div>
            </div>
            <ul className="hidden md:flex gap-5 items-center">
              <li>
                <a href="#Home" className="hover:text-teal-600">
                  Home
                </a>
              </li>
            </ul>
            <ul
              className={ nav
                  ? "fixed left-0 top-0 w-[60%] h-full bg-gray-900 ease-in-out duration-500 text-white dark:bg-white dark:text-gray-800"
                  : "ease-in-out duration-500 fixed left-[-100%]"
              }
            >
              <h1 className="p-4 text-xl font-burtons">Portfolio</h1>
              <li className="p-4 border-b border-gray-600">
                <a href="#Home" onClick={handleNav}>
                  Home
                </a>
              </li>
              <li className="p-4 border-b border-gray-600">
                <a href="#My-Skill" onClick={handleNav}>
                  My-Skill
                </a>
              </li>
              <li className="p-4 border-b border-gray-600">
                <a href="#Education" onClick={handleNav}>
                  Education
                </a>
              </li>
              <li className="p-4 border-b border-gray-600">
                <a href="#EXPERIENCE" onClick={handleNav}>
                  EXPERIENCE
                </a>
              </li>
              <li className="p-4 border-b border-gray-600">
                <a href="#My-Work" onClick={handleNav}>
                  My-Work
                </a>
              </li>
              <li className="p-4 border-b border-gray-600">
                <a href="#Contact" onClick={handleNav}>
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          </div>
  )
}
import Link from 'next/link'
import React from 'react'
import DarkModeSwitch from './DarkModeSwitch'

const Nav = () => {
  const handleMi = () =>{
    const navbuttons = document.body.querySelector("#navbuttons")
    navbuttons.classList.toggle("hidden")
  }
  

  return (
    <nav className="w-full md:w-fit  flex gap-2 flex-col items-center justify-center md:flex-row">
      <button
        onClick={handleMi}
        className='md:hidden w-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors'
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 dark:stroke-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </button>
      <div
        id='navbuttons' 
        className='hidden md:flex gap-2 flex-col md:flex-row w-full'
      >

      
      <Link
        href="/#sobremi"
        className="text-xl font-bold hover:bg-gray-200 p-2 cursor-pointer flex gap-2 items-center justify-center w-full transition-colors dark:hover:bg-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6 stroke-black dark:stroke-white "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
          />
        </svg>
        <span id='navsobremi' className='dark:text-white' >Sobre mi</span>
      </Link>
      <Link
        id='navproyectos'
        href="/#proyectos"
        className="text-xl font-bold hover:bg-gray-200 p-2 cursor-pointer flex gap-2 items-center justify-center w-full transition-colors dark:hover:bg-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6 stroke-black dark:stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75a4.5 4.5 0 01-4.884 4.484c-1.076-.091-2.264.071-2.95.904l-7.152 8.684a2.548 2.548 0 11-3.586-3.586l8.684-7.152c.833-.686.995-1.874.904-2.95a4.5 4.5 0 016.336-4.486l-3.276 3.276a3.004 3.004 0 002.25 2.25l3.276-3.276c.256.565.398 1.192.398 1.852z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.867 19.125h.008v.008h-.008v-.008z"
          />
        </svg>
        <span className='dark:text-white' >Proyectos</span>
      </Link>
      <Link
        id='navcontacto'
        href="/#contacto"
        className="text-xl font-bold hover:bg-gray-200 p-2 cursor-pointer flex gap-2 items-center justify-center w-full transition-colors dark:hover:bg-gray-500"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="white"
          className="w-6 h-6 stroke-black dark:stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
          />
        </svg>
        <span className='dark:text-white' >Contacto</span>
      </Link>
      </div>
      <DarkModeSwitch />
    </nav>
  );
}

export default Nav
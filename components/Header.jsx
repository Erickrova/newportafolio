import Link from 'next/link'
import { useEffect, useState } from 'react';
import Nav from './Nav'


const Header = () => {

  return (
    <header className='w-full flex flex-col items-center md:flex-row md:justify-between px-4 bg-white dark:bg-neutral-800 shadow-md fixed z-20 transition-colors'>
        <Link href="/" className='text-2xl font-bold m-0 hover:text-gray-700 dark:text-white dark:hover:text-gray-200 transition-colors'>Portafolio | &lt;Erick Romaña/&gt;</Link>
        <Nav />
    </header>
  )
}

export default Header
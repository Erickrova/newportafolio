import Link from "next/link"
import Nav from "./Nav"

const Header = () => {
  return (
    <header className="w-full flex flex-col items-center md:flex-row md:justify-between px-4 py-2 bg-white shadow-md fixed z-20 transition-colors dark:bg-transparent dark:backdrop-blur-xl">
      <Link
        href="/"
        className=" font-eczar text-2xl font-bold m-0 hover:text-gray-700 dark:text-white dark:hover:text-gray-200 transition-colors"
      >
        Portafolio | &lt;Erick/&gt;
      </Link>
      <Nav />
    </header>
  )
}

export default Header

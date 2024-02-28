import Link from "next/link"
import Nav from "./Nav"
import { useTranslation } from "react-i18next"

const Header = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <header className="w-full flex flex-col items-center md:flex-row md:justify-evenly px-4 py-2 bg-white fixed z-20 transition-colors dark:bg-custom2 animate-zoom-in-0">
      <Link
        href="/"
        className=" font-eczar text-2xl font-bold m-0 hover:text-gray-700 dark:text-white dark:hover:text-gray-200 transition-colors"
      >
        {t("header.portfolio")} | &lt;Erick/&gt;
      </Link>
      <Nav />
    </header>
  )
}

export default Header

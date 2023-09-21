import Link from "next/link"
import React from "react"
import DarkModeSwitch from "./DarkModeSwitch"
import { useTranslation } from "react-i18next"
import useApp from "../hooks/useApp"
import { animateScroll as scroll } from "react-scroll"
import { scroller } from "react-scroll"

const Nav = () => {
  const [t, i18n] = useTranslation("global")
  const { localStorageLan, setLocalStorageLan } = useApp()

  const scrollType = {
    duration: 50,
    delay: 0,
    smooth: true, // linear “easeInQuint” “easeOutCubic”
    offset: -10,
  }

  const handleCambiarIdioma = (lan) => {
    const localLan = localStorage.getItem("lan")
    if (localLan) {
      if (localLan != lan) {
        setLocalStorageLan(lan)
        localStorage.setItem("lan", lan)
      }
    }
  }
  const handleMenu = () => {
    const navbuttons = document.body.querySelector("#navbuttons")
    navbuttons.classList.toggle("hidden")
  }
  const handleScroll = (section) => {
    scroller.scrollTo(section, scrollType)
  }

  return (
    <nav className="w-full md:w-fit  flex gap-2 flex-col items-center justify-center md:flex-row">
      <button
        onClick={handleMenu}
        className="md:hidden w-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 dark:stroke-white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>
      <div
        id="navbuttons"
        className="hidden md:flex gap-2 flex-col md:flex-row w-full"
      >
        <Link
          href={"/"}
          onClick={() => scroll.scrollToTop(scrollType)}
          className="text-xl hover:rounded-md font-bold hover:bg-gray-200 p-2 cursor-pointer flex gap-2 items-center justify-center w-full transition-colors dark:hover:bg-gray-500"
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
          <span id="navsobremi" className=" whitespace-pre dark:text-white">
            {t("header.about-me")}
          </span>
        </Link>
        <Link
          href={"/"}
          onClick={() => handleScroll("proyectossection")}
          className="text-xl hover:rounded-md  font-bold hover:bg-gray-200 p-2 cursor-pointer flex gap-2 items-center justify-center w-full transition-colors dark:hover:bg-gray-500"
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
          <span id="navproyectos" className="dark:text-white">
            {t("header.projects")}
          </span>
        </Link>
        <Link
          href={"/"}
          onClick={() => handleScroll("contactosection")}
          className="text-xl hover:rounded-md  font-bold hover:bg-gray-200 p-2 cursor-pointer flex gap-2 items-center justify-center w-full transition-colors dark:hover:bg-gray-500"
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
          <span id="navcontacto" className="dark:text-white">
            {t("header.contact")}
          </span>
        </Link>
        <button
          title={t("about-me.english-language")}
          className={`${
            localStorageLan == "en"
              ? "text-red-500"
              : "text-black dark:text-white"
          } w-full py-1 `}
          type="button"
          onClick={() => handleCambiarIdioma("en")}
        >
          EN
        </button>
        <button
          title={t("about-me.spanish-language")}
          className={`${
            localStorageLan == "es"
              ? "text-red-500"
              : "text-black dark:text-white"
          } w-full py-1`}
          type="button"
          onClick={() => handleCambiarIdioma("es")}
        >
          ES
        </button>
      </div>

      <DarkModeSwitch />
    </nav>
  )
}

export default Nav

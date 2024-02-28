import React from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import Nav from "./Nav"
import { Facebook, Instagram, Mail, Phone } from "./Icons"

const Footer = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <footer className="h-[400px] w-full bg-gray-200 dark:bg-custom1">
      <div className="curved bg-white dark:bg-custom2"></div>
      <div className="w-2/3 mx-auto mt-10 text-3xl flex flex-col md:flex-row justify-between items-center ">
        <Link
          href="/"
          className=" font-eczar text-2xl font-bold m-0 hover:text-gray-700 dark:text-white dark:hover:text-gray-200 transition-colors mb-4 md:mb-0"
        >
          {t("header.portfolio")} | &lt;Erick/&gt;
        </Link>
        {/* <Nav /> */}
        <div className="text-black dark:text-white text-xl flex flex-col">
          <Link
            href="https://www.instagram.com/erick_kilmar"
            target="_blanked"
            className="flex gap-2 justify-start items-center hover:text-gray-700 dark:hover:text-gray-300 hover:fill-gray-300"
          >
            <Instagram />
            <span>@Erick_Kilmar</span>
          </Link>
          <Link
            href="https://www.facebook.com/yordyrv1"
            target="_blanked"
            className="flex gap-2 justify-start items-center hover:text-gray-700 dark:hover:text-gray-300 hover:fill-gray-300"
          >
            <Facebook />
            <span>@Erick Romaña</span>
          </Link>
          <Link
            href="tel:573117046326"
            target="_blanked"
            className="flex gap-2 justify-start items-center hover:text-gray-700 dark:hover:text-gray-300 hover:fill-gray-300"
          >
            {" "}
            <Phone /> <span>+57 311 704 6326</span>
          </Link>
          <Link
            href="mail-to:rovaloyes01@gmail.com"
            target="_blanked"
            className="flex gap-2 justify-start items-center hover:text-gray-700 dark:hover:text-gray-300 hover:fill-gray-300"
          >
            <Mail />
            <span>rovaloyes01@gmail.com</span>
          </Link>
        </div>
      </div>
      <div className="w-2/3 mx-auto flex items-center justify-center mt-10 md:mt-20">
        <h2 className="text-black dark:text-white ">{t("copyright")}</h2>
      </div>
    </footer>
  )
}

export default Footer

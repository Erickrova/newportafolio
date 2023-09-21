import React from "react"
import Link from "next/link"
import { useTranslation } from "react-i18next"
import useApp from "../hooks/useApp"

const CvButton = () => {
  const [t] = useTranslation("global")
  const { localStorageLan } = useApp()
  return (
    <Link
      href={`${localStorageLan == "es" ? "/ErickRomañaHojadeVida.pdf" : ""}`}
      className="border-2 border-gray-300 bg-none hover:bg-red-600  p-2 rounded-md  flex items-center justify-center transition-colors w-full hover:text-white"
      download
      target="_blanck"
    >
      <span className="text-xl font-bold  dark:text-white">
        {t("about-me.download-cv-button")}
      </span>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-download stroke-black dark:stroke-white"
        width="32"
        height="32"
        viewBox="0 0 24 24"
        strokeWidth="1.5"
        stroke="#ffffff"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />
        <polyline points="7 11 12 16 17 11" />
        <line x1="12" y1="4" x2="12" y2="16" />
      </svg>
    </Link>
  )
}

export default CvButton

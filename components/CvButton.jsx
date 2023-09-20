import React from "react"
import Link from "next/link"

const CvButton = () => {
  return (
    <Link
      href="hojadevida"
      className="bg-red-500 hover:bg-red-600 text-xl font-bold p-2 rounded-md text-white flex items-center justify-center transition-colors"
      target={"_blank"}
    >
      CV
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-download"
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

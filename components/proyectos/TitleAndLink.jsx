import React from "react"
import Link from "next/link"

const TitleAndLink = ({ title, url }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between">
      <h2 className="text-3xl font-bold dark:text-white transition-colors">
        {title}
      </h2>
      <Link
        href={`${url}`}
        className="font-bold text-xl text-red-500 hover:text-red-600 transition-colors underline"
        target="_blank"
      >
        Ir al Proyecto
      </Link>
    </div>
  )
}

export default TitleAndLink

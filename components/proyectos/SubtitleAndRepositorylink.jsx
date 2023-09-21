import React from "react"
import Link from "next/link"

const SubtitleAndRepositorylink = ({ subtitle, repoUrl }) => {
  return (
    <div>
      <p className="text-xl dark:text-white transition-colors">{subtitle}</p>
      <Link
        href={`${repoUrl}`}
        className="font-bold text-xl text-red-500 hover:text-red-600 transition-colors underline"
        target="_blank"
      >
        Ver repositorio de github
      </Link>
    </div>
  )
}

export default SubtitleAndRepositorylink

import React from "react"
import Link from "next/link"

const CvLink = () => {
  const hovereye = () => {
    const closeeye = document.getElementById("closeeye")
    const openeye = document.getElementById("openeye")
    closeeye.classList.remove("md:scale-100")
    openeye.classList.remove("md:scale-0")
    closeeye.classList.add("md:scale-0")
    openeye.classList.add("md:scale-100")
  }
  const leaveeye = () => {
    const closeeye = document.getElementById("closeeye")
    const openeye = document.getElementById("openeye")
    closeeye.classList.remove("md:scale-0")
    openeye.classList.remove("md:scale-100")
    closeeye.classList.add("md:scale-100")
    openeye.classList.add("md:scale-0")
  }
  return (
    <Link
      href="/hojadevida"
      className="border-2 border-gray-300 text-xl font-bold p-2 rounded-md text-white flex items-center justify-center transition-colors"
      target="_blanck"
      onMouseOver={hovereye}
      onMouseLeave={leaveeye}
      title="Ver CV"
    >
      <svg
        id="closeeye"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-eye-closed transition-all scale-0 md:scale-100 stroke-black dark:stroke-white"
        width={24}
        height={24}
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M21 9c-2.4 2.667 -5.4 4 -9 4c-3.6 0 -6.6 -1.333 -9 -4"></path>
        <path d="M3 15l2.5 -3.8"></path>
        <path d="M21 14.976l-2.492 -3.776"></path>
        <path d="M9 17l.5 -4"></path>
        <path d="M15 17l-.5 -4"></path>
      </svg>
      <svg
        id="openeye"
        xmlns="http://www.w3.org/2000/svg"
        className="icon icon-tabler icon-tabler-eye transition-all scale-100 md:scale-0 z-10 absolute stroke-black dark:stroke-white "
        width={24}
        height={24}
        viewBox="0 0 24 24"
        strokeWidth="2"
        stroke="currentColor"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
        <path d="M10 12a2 2 0 1 0 4 0a2 2 0 0 0 -4 0"></path>
        <path d="M21 12c-2.4 4 -5.4 6 -9 6c-3.6 0 -6.6 -2 -9 -6c2.4 -4 5.4 -6 9 -6c3.6 0 6.6 2 9 6"></path>
      </svg>
    </Link>
  )
}

export default CvLink

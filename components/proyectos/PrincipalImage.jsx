import React from "react"
import Link from "next/link"
import Image from "next/image"

const PrincipalImage = ({ url, imageUrl, alt }) => {
  return (
    <div className="md:w-3/4 mx-auto flex items-center justify-center bg-gray-400">
      <Link href={`${url}`} target="_blank">
        <Image
          src={`${imageUrl}`}
          className="md:hover:brightness-50"
          quality={100}
          priority
          height={400}
          width={800}
          alt={`${alt}`}
        />
      </Link>
    </div>
  )
}

export default PrincipalImage

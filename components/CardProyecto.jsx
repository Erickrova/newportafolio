import Image from "next/image"
import Link from "next/link"

const CardProyecto = ({ proyecto }) => {
  const onhover = () => {
    const target = document.body.querySelector(`#target${proyecto.path}`)
    target.classList.add("bottom-0")
    target.classList.remove("-bottom-full")
  }
  const onLeave = () => {
    const target = document.body.querySelector(`#target${proyecto.path}`)
    target.classList.remove("bottom-0")
    target.classList.add("-bottom-full")
  }

  return (
    <Link
      onMouseOver={onhover}
      onMouseLeave={onLeave}
      href={`/proyectos/${proyecto.path}`}
      className={`relative hover:scale-105 hover:z-10 transition-all overflow-hidden bg-white hover:bg-gray-200`}
    >
      <Image
        src={`${proyecto.img}`}
        quality={100}
        priority
        height={400}
        width={800}
        alt={`${proyecto.nombre}`}
      />
      <p className="p-2">{proyecto.nombre}</p>
      <div
        id={`target${proyecto.path}`}
        className="absolute p-2 -bottom-full transition-all z-10 w-full h-full flex flex-col items-center justify-center bg-gradient-to-b from-transparent to-black"
      >
        <p className="text-center text-xl font-bold text-white">
          {proyecto.nombre}
        </p>
        <p className="text-center font-bold text-white">
          {proyecto.descripcion}
        </p>
        <p className="text-center text-white">
          Haz click para ver mas información
        </p>
      </div>
    </Link>
  )
}

export default CardProyecto

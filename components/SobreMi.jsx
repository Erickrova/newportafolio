import Image from "next/image"
import Link from "next/link"
import React from "react"
import CvButton from "./CvButton"

const SobreMi = () => {
  return (
    <section id="sobremi" className="md:w-2/3 mx-auto py-4 pt-12 ">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 mb-4">
        <div className="col-start-1 row-start-1 md:col-start-2 w-full h-full flex items-center justify-center">
          <Image
            className="rounded-full dark:rounded-none transition-all"
            src={"/img/me.jpg"}
            width={300}
            height={300}
            alt="Erick Romaña photo"
          />
        </div>
        <div className=" row-start-2 md:row-start-1 col-start-1 flex flex-col items-center justify-center">
          <div className=" px-4">
            <h1 className="text-5xl font-roboto mt-10 md:mt-0 font-bold text-center dark:text-white transition-colors animate-bounce">
              Erick Romaña
            </h1>
            <div>
              <p className=" font-roboto text-xl text-center dark:text-gray-400 transition-colors mb-4">
                Desarrollador Frontend
              </p>
              <CvButton />
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-20 flex justify-center items-center">
        <p className=" px-10 md:px-0 text-4xl font-eczar text-center dark:text-white transition-colors">
          Persona apasionada por la Tecnología y el desarrollo de soluciones
          web, con ganas de aprender, que sabe escuchar, aprender de los demás y
          esta en constante búsqueda del conocimiento.
        </p>
      </div>
      <div className="pt-2">
        <h3 className="text-center text-xl font-bold  pb-4 dark:text-white transition-colors">
          Experiencia Laboral
        </h3>
        <p className=" md:text-center dark:text-white transition-colors">
          - maquetado y animaciones de sitio web para cliente como freelancer:
          desarrolle y diseñé el frontend de la pagina web de un cliente
          permitiendole tener modo claro y oscuro, así como unas mejores
          animaciones y experiencia de usuario
        </p>
      </div>
      <div className="pt-2">
        <h3 className="text-center text-xl font-bold  pb-4 dark:text-white transition-colors">
          Datos Academicos
        </h3>
        <p className=" md:text-center dark:text-white transition-colors">
          - <span className="font-bold">Universidad Marco Fidel Suarez: </span>
          Ingeniería de Sistemas | 3er semestre
        </p>
        <p className=" md:text-center dark:text-white transition-colors">
          - <span className="font-bold">Udemy:</span>
          <br />
          <Link
            href="certificado-udemy"
            className="p-2 rounded-md hover:text-gray-700 dark:text-white dark:hover:text-gray-200 flex items-center justify-center transition-colors"
            target={"_blank"}
          >
            -React - La Guía Completa: Hooks Context Redux MERN +15 Apps
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-download bg-red-500 hover:bg-red-600 p-1 rounded-full"
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
        </p>
      </div>
      <div className="pt-2">
        <h3 className="my-0 text-center text-xl font-bold pb-2 dark:text-white transition-colors">
          Idiomas
        </h3>
        <div>
          <p className=" md:text-center dark:text-white transition-colors">
            - <span className="font-bold">Español |</span> Nativo
          </p>
          <p className=" md:text-center dark:text-white transition-colors">
            - <span className="font-bold">Ingles |</span> Basico
          </p>
        </div>
      </div>
      <div className="pt-2">
        <h3 className="text-center text-xl font-bold pb-2 dark:text-white transition-colors">
          Habilidades
        </h3>
        <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center justify-center p-6 ">
          {/* agregar animacion de vibracion al dar click sobre un logo */}
          <div className="flex items-center justify-center flex-col">
            <p className="font-medium text-center dark:text-white transition-colors">
              React.js
            </p>
            <Image
              className=" cursor-pointer  hover:animate-waving-hand "
              src="/img/react.png"
              width={100}
              height={100}
              alt="logo react"
              title="react"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="font-medium text-center dark:text-white transition-colors">
              Vite
            </p>
            <Image
              className=" cursor-pointer hover:animate-waving-hand"
              src="/img/vite.png"
              width={100}
              height={100}
              alt="logo vite"
              title="vite"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="font-medium text-center dark:text-white transition-colors">
              Next.js
            </p>
            <Image
              className=" cursor-pointer hover:animate-waving-hand"
              src="/img/next.png"
              width={100}
              height={100}
              alt="logo next"
              title="next"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="font-medium text-center dark:text-white transition-colors">
              Html
            </p>
            <Image
              className=" cursor-pointer hover:animate-waving-hand"
              src="/img/html.png"
              width={100}
              height={100}
              alt="logo html"
              title="html"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="font-medium text-center dark:text-white transition-colors">
              Css
            </p>
            <Image
              className=" cursor-pointer hover:animate-waving-hand"
              src="/img/css.png"
              width={100}
              height={100}
              alt="logo css"
              title="css"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="font-medium text-center dark:text-white transition-colors">
              Sass
            </p>
            <Image
              className=" cursor-pointer hover:animate-waving-hand"
              src="/img/sass.png"
              width={100}
              height={100}
              alt="logo sass"
              title="sass"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="font-medium text-center dark:text-white transition-colors">
              JavaScript
            </p>
            <Image
              className=" cursor-pointer hover:animate-waving-hand"
              src="/img/javascript.png"
              width={100}
              height={100}
              alt="logo javascript"
              title="javaScript"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="font-medium text-center dark:text-white transition-colors">
              MySQL
            </p>
            <Image
              className=" cursor-pointer hover:animate-waving-hand"
              src="/img/mysql.png"
              width={100}
              height={100}
              alt="logo mysql"
              title="mysql"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="font-medium text-center dark:text-white transition-colors">
              MongoDB
            </p>
            <Image
              className=" cursor-pointer hover:animate-waving-hand"
              src="/img/mongodb.svg"
              width={100}
              height={100}
              alt="logo mongodb"
              title="mongoDB"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="font-medium text-center dark:text-white transition-colors">
              Node.js
            </p>
            <Image
              className=" cursor-pointer hover:animate-waving-hand"
              src="/img/node.png"
              width={100}
              height={100}
              alt="logo nodejs"
              title="nodeJS"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="font-medium text-center dark:text-white transition-colors">
              Express.js
            </p>
            <Image
              className=" cursor-pointer hover:animate-waving-hand"
              src="/img/express.png"
              width={100}
              height={100}
              alt="logo express"
              title="expressJS"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="font-medium text-center dark:text-white transition-colors">
              Socket.io
            </p>
            <Image
              className=" cursor-pointer hover:animate-waving-hand"
              src="/img/socketio.png"
              width={100}
              height={100}
              alt="logo socketio"
              title="socket.io"
            />
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="font-medium text-center dark:text-white transition-colors">
              Tailwindcss
            </p>
            <Image
              className=" cursor-pointer hover:animate-waving-hand"
              src="/img/tailwind.svg"
              width={100}
              height={100}
              alt="logo socketio"
              title="tailwindcss"
            />
          </div>
          {/* <Image className=" cursor-pointer " src="/img/docker.png" width={200} height={200} layout="responsive" alt="logo docket" title="docket"  />
              <Image className=" cursor-pointer " src="/img/jest.png" width={200} height={200} layout="responsive" alt="logo jesto" title="jest"  /> */}
        </div>
      </div>
    </section>
  )
}

export default SobreMi

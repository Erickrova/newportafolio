import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SobreMi = () => {
  return (
    <section id='sobremi' className='md:w-2/3 mx-auto py-4 pt-12 px-2 '>
        <div className='flex gap-2 items-center justify-center'>
            <h1 className='text-xl font-bold text-center dark:text-white transition-colors'>Erick Romaña |</h1>
            <Link href="hojadevida" className="text-red-500 hover:text-red-600 inline-block text-xl underline font-bold" >
                Hoja De Vida
            </Link>
        </div>
        <div>
            <p className=" md:text-center dark:text-white transition-colors">
                Desarrollador web Frontend con conocimientos basicos de backend.
            </p>
            <p className=" tmd:ext-center dark:text-white transition-colors">
                Soy una persona apasionada por la Tecnología y
                el desarrollo de soluciones web,
                con ganas de
                aprender, que sabe escuchar,
                aprender de los demás y me
                apasiona la búsqueda del
                conocimiento.
            </p>
        </div>
        <div className='pt-2'>
          <h3 className="text-center text-xl font-bold  pb-4 dark:text-white transition-colors">
            Experiencia Laboral
          </h3>
          <p className=" md:text-center dark:text-white transition-colors">
             - maquetado y animaciones de sitio web para cliente como freelancer: desarrolle y diseñé el frontend de la pagina web de un cliente permitiendole tener modo claro y oscuro, así como unas mejores animaciones y experiencia de usuario
          </p>
        </div>
      <div className='pt-2'>
          <h3 className="text-center text-xl font-bold  pb-4 dark:text-white transition-colors">
            Datos Academicos
          </h3>
          <p className=" md:text-center dark:text-white transition-colors">
            - <span className="font-bold">Universidad Marco Fidel Suarez: </span>Ingeniería de Sistemas | 3er semestre
          </p>
          <p className=" md:text-center dark:text-white transition-colors">
            - <span className="font-bold">Udemy:</span><br/>
            <span className="pl-4">* Curso de desarrollo web full stack | en proceso</span><br/>
            <span className="pl-4">* Curso de REACT STACK MERN (Vite,Next,Gastby) | en proceso</span>
          </p>
      </div>
      <div className='pt-2'>
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
      <div className='pt-2'>
        <h3 className="text-center text-xl font-bold pb-2 dark:text-white transition-colors">
            Habilidades
        </h3>
        <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-10 items-center justify-center p-6 ">
              {/* agregar animacion de vibracion al dar click sobre un logo */}
              <div className='flex items-center justify-center flex-col'>
                <p className='font-medium text-center dark:text-white transition-colors'>React.js</p>
                <Image className=" cursor-pointer  hover:animate-waving-hand " src="/img/react.png" width={100} height={100}  alt="logo react" title="react" />
              </div>
              <div className='flex items-center justify-center flex-col'>
                <p className='font-medium text-center dark:text-white transition-colors'>Vite</p>
                <Image className=" cursor-pointer hover:animate-waving-hand" src="/img/vite.png" width={100} height={100}  alt="logo vite" title="vite" />
              </div>
              <div className='flex items-center justify-center flex-col'>
                <p className='font-medium text-center dark:text-white transition-colors'>Next.js</p>
                <Image className=" cursor-pointer hover:animate-waving-hand" src="/img/next.png" width={100} height={100}  alt="logo next" title="next" />
              </div>
              <div className='flex items-center justify-center flex-col'>
                <p className='font-medium text-center dark:text-white transition-colors'>Html</p>
                <Image className=" cursor-pointer hover:animate-waving-hand" src="/img/html.png" width={100} height={100}  alt="logo html" title="html" />
              </div>
              <div className='flex items-center justify-center flex-col'>
                <p className='font-medium text-center dark:text-white transition-colors'>Css</p>
                <Image className=" cursor-pointer hover:animate-waving-hand" src="/img/css.png" width={100} height={100}  alt="logo css" title="css" />
              </div>
              <div className='flex items-center justify-center flex-col'>
                <p className='font-medium text-center dark:text-white transition-colors'>Sass</p>
                <Image className=" cursor-pointer hover:animate-waving-hand" src="/img/sass.png" width={100} height={100}  alt="logo sass" 
                title="sass" />
              </div>
              <div className='flex items-center justify-center flex-col'>
                <p className='font-medium text-center dark:text-white transition-colors'>JavaScript</p>
                <Image className=" cursor-pointer hover:animate-waving-hand" src="/img/javascript.png" width={100} height={100}  alt="logo javascript" title="javaScript" />
              </div>
              <div className='flex items-center justify-center flex-col'>
                <p className='font-medium text-center dark:text-white transition-colors'>MySQL</p>
                <Image className=" cursor-pointer hover:animate-waving-hand" src="/img/mysql.png" width={100} height={100}  alt="logo mysql" title="mysql" />
              </div>
              <div className='flex items-center justify-center flex-col'>
                <p className='font-medium text-center dark:text-white transition-colors'>MongoDB</p>
                <Image className=" cursor-pointer hover:animate-waving-hand" src="/img/mongodb.svg" width={100} height={100}  alt="logo mongodb" title="mongoDB" />
              </div>
              <div className='flex items-center justify-center flex-col'>
                <p className='font-medium text-center dark:text-white transition-colors'>Node.js</p>
                <Image className=" cursor-pointer hover:animate-waving-hand" src="/img/node.png" width={100} height={100}  alt="logo nodejs" title="nodeJS" />
              </div>
              <div className='flex items-center justify-center flex-col'>
                <p className='font-medium text-center dark:text-white transition-colors'>Express.js</p>
                <Image className=" cursor-pointer hover:animate-waving-hand" src="/img/express.png" width={100} height={100}  alt="logo express" title="expressJS" />
              </div>
              <div className='flex items-center justify-center flex-col'>
                <p className='font-medium text-center dark:text-white transition-colors'>Socket.io</p>
                <Image className=" cursor-pointer hover:animate-waving-hand" src="/img/socketio.png" width={100} height={100}  alt="logo socketio" title="socket.io"  />
              </div>
              <div className='flex items-center justify-center flex-col'>
                <p className='font-medium text-center dark:text-white transition-colors'>Tailwindcss</p>
                <Image className=" cursor-pointer hover:animate-waving-hand" src="/img/tailwind.svg" width={100} height={100}  alt="logo socketio" title="tailwindcss"  />
              </div>
              {/* <Image className=" cursor-pointer " src="/img/docker.png" width={200} height={200} layout="responsive" alt="logo docket" title="docket"  />
              <Image className=" cursor-pointer " src="/img/jest.png" width={200} height={200} layout="responsive" alt="logo jesto" title="jest"  /> */}
         
          </div>
      </div>
    </section>
  )
}

export default SobreMi
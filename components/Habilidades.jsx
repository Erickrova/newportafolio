import React from "react"
import Image from "next/image"
import { useTranslation } from "react-i18next"

const Habilidades = () => {
  const [t] = useTranslation("global")
  return (
    <div className="pt-16">
      <h3 className="text-center text-3xl font-bold font-roboto pb-2 dark:text-white transition-colors">
        {t("skills.skills")}
      </h3>
      <div className="mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4   items-center justify-center p-6 ">
        {/* agregar animacion de vibracion al dar click sobre un logo */}
        <div className="flex items-center justify-center flex-col">
          <p className="font-medium text-center dark:text-white transition-colors mb-2">
            React.js
          </p>
          <Image
            className=" w-auto h-auto cursor-pointer  hover:animate-waving-hand "
            src="/img/react.png"
            width={50}
            height={50}
            alt="logo react"
            title="react"
          />
        </div>
        {/* <div className="flex items-center justify-center flex-col">
          <p className="font-medium text-center dark:text-white transition-colors">
            Vite
          </p>
          <Image
            className=" w-auto h-auto cursor-pointer hover:animate-waving-hand"
            src="/img/vite.png"
            width={50}
            height={50}
            alt="logo vite"
            title="vite"
          />
        </div> */}
        <div className="flex items-center justify-center flex-col">
          <p className="font-medium text-center dark:text-white transition-colors mb-2">
            Next.js
          </p>
          <Image
            className=" w-auto h-auto cursor-pointer hover:animate-waving-hand"
            src="/img/next.png"
            width={50}
            height={50}
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
            width={70}
            height={70}
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
            width={70}
            height={70}
            alt="logo css"
            title="css"
          />
        </div>
        {/* <div className="flex items-center justify-center flex-col">
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
          </div> */}
        <div className="flex items-center justify-center flex-col">
          <p className="font-medium text-center dark:text-white transition-colors">
            JavaScript
          </p>
          <Image
            className=" w-auto h-auto cursor-pointer hover:animate-waving-hand"
            src="/img/javascript.png"
            width={50}
            height={50}
            alt="logo javascript"
            title="javaScript"
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="font-medium text-center dark:text-white transition-colors mb-2">
            TypeScript
          </p>
          <Image
            className=" w-auto h-auto cursor-pointer hover:animate-waving-hand"
            src="/img/typescript.png"
            width={50}
            height={50}
            alt="logo typescript"
            title="typeScript"
          />
        </div>
        {/* <div className="flex items-center justify-center flex-col">
          <p className="font-medium text-center dark:text-white transition-colors">
            MySQL
          </p>
          <Image
            className=" w-auto h-auto cursor-pointer hover:animate-waving-hand"
            src="/img/mysql.png"
            width={50}
            height={50}
            alt="logo mysql"
            title="mysql"
          />
        </div>
        */}
        <div className="flex items-center justify-center flex-col">
          <p className="font-medium text-center dark:text-white transition-colors">
            MongoDB
          </p>
          <Image
            className=" w-[60px] h-[60px] cursor-pointer hover:animate-waving-hand"
            src="/img/mongodb.svg"
            width={50}
            height={50}
            alt="logo mongodb"
            title="mongoDB"
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="font-medium text-center dark:text-white transition-colors mb-2">
            Node.js
          </p>
          <Image
            className=" w-auto h-auto cursor-pointer hover:animate-waving-hand"
            src="/img/node.png"
            width={50}
            height={50}
            alt="logo nodejs"
            title="nodeJS"
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="font-medium text-center dark:text-white transition-colors mb-2">
            Express.js
          </p>
          <Image
            className=" w-auto h-auto cursor-pointer hover:animate-waving-hand"
            src="/img/express.png"
            width={50}
            height={50}
            alt="logo express"
            title="expressJS"
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="font-medium text-center dark:text-white transition-colors">
            Tailwindcss
          </p>
          <Image
            className=" w-[70px] h-[70px] cursor-pointer hover:animate-waving-hand"
            src="/img/tailwind.svg"
            width={50}
            height={50}
            alt="logo tailwindcss"
            title="tailwindcss"
          />
        </div>
        {/* <div className="flex items-center justify-center flex-col">
          <p className="font-medium text-center dark:text-white transition-colors">
            Socket.io
          </p>
          <Image
            className=" w-auto h-auto cursor-pointer hover:animate-waving-hand"
            src="/img/socketio.png"
            width={50}
            height={50}
            alt="logo socketio"
            title="socket.io"
          />
        </div>
        
        <div className="flex items-center justify-center flex-col">
          <p className="font-medium text-center dark:text-white transition-colors">
            Jest
          </p>
          <Image
            className=" w-auto h-auto cursor-pointer hover:animate-waving-hand"
            src="/img/jest.png"
            width={50}
            height={50}
            alt="logo jest"
            title="jest"
          />
        </div>
        <div className="flex items-center justify-center flex-col">
          <p className="font-medium text-center dark:text-white transition-colors">
            Testing Library
          </p>
          <Image
            className=" w-auto h-auto cursor-pointer hover:animate-waving-hand"
            src="/img/testinglibrary.png"
            width={50}
            height={50}
            alt="logo testing library"
            title="testing library"
          />
        </div> */}

        {/* <Image className=" cursor-pointer " src="/img/docker.png" width={200} height={200} layout="responsive" alt="logo docket" title="docket"  />
         */}
      </div>
    </div>
  )
}

export default Habilidades

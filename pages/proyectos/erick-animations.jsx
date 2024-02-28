import Image from "next/image"
import Link from "next/link"
import React from "react"
import Layout from "../../components/Layout"
import PrincipalImage from "../../components/proyectos/PrincipalImage"
import MainContent from "../../components/proyectos/MainContent"
import TitleAndLink from "../../components/proyectos/TitleAndLink"

const ErickAnimations = () => {
  return (
    <Layout>
      <div className="md:w-full">
        <PrincipalImage
          url={"https://erickanimations.netlify.app"}
          imageUrl={"/proyectos/erickanimations.png"}
          alt={"cotizador criptomonedas erick image"}
        />
        <MainContent>
          <div className="md:w-2/3 mx-auto p-2">
            <TitleAndLink
              title={"Erick Animations"}
              url={"https://erickanimations.netlify.app"}
            />

            <div className="text-black dark:text-white transition-colors">
              <p className="text-xl">
                Web para buscaar la letras de una canción
              </p>
              <section>
                <h3 className="text-2xl font-medium">Tecnologías</h3>
                <p className="text-xl">
                  Esta web está construida con las siguentes tecnologías:
                </p>
                <p className="text-xl font-medium">Frontend</p>
                <ol className="pl-7">
                  <li className="list-disc">React</li>
                  <li className="list-disc">Vite.js</li>
                  <li className="list-disc">Html</li>
                  <li className="list-disc">JavaScript</li>
                  <li className="list-disc">Css</li>
                </ol>
                {/* <p className="text-xl font-medium">API Externa</p>
                <ol className="pl-7">
                  <li className="list-disc">
                    <Link
                      className="text-red-500 hover:text-red-600 transition-colors"
                      href={"https://min-api.cryptocompare.com"}
                    >
                      https://min-api.cryptocompare.com
                    </Link>{" "}
                  </li>
                </ol> */}
              </section>
              {/* <section>
                <h3 className="text-2xl font-medium">Características</h3>
                <ol className="pl-7">
                  <li className="list-disc">
                    Transformación de cripto a diferentes monedas
                  </li>
                </ol>
              </section> */}
            </div>
          </div>
        </MainContent>
      </div>
    </Layout>
  )
}

export default ErickAnimations

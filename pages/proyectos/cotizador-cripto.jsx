import Image from "next/image"
import Link from "next/link"
import React from "react"
import Layout from "../../components/Layout"
import PrincipalImage from "../../components/proyectos/PrincipalImage"
import MainContent from "../../components/proyectos/MainContent"
import TitleAndLink from "../../components/proyectos/TitleAndLink"

const Cotizadorcripto = () => {
  return (
    <Layout>
      <div className="md:w-full">
        <PrincipalImage
          url={"https://cotizadorcriptoserick.netlify.app"}
          imageUrl={"/proyectos/cripto.png"}
          alt={"cotizador criptomonedas erick image"}
        />
        <MainContent>
          <div className="md:w-2/3 mx-auto p-2">
            <TitleAndLink
              title={"Cotizador de Criptomonedas"}
              url={"https://cotizadorcriptoserick.netlify.app"}
            />

            <div className="text-black dark:text-white transition-colors">
              <p className="text-xl">
                Web para saber el valor actual de una criptomoneda
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
                  <li className="list-disc">Style Components</li>
                  <li className="list-disc">Html</li>
                  <li className="list-disc">JavaScript</li>
                  <li className="list-disc">Css</li>
                </ol>
                <p className="text-xl font-medium">API Externa</p>
                <ol className="pl-7">
                  <li className="list-disc">
                    <Link
                      className="text-red-500 hover:text-red-600 transition-colors"
                      href={"https://min-api.cryptocompare.com"}
                    >
                      https://min-api.cryptocompare.com
                    </Link>{" "}
                  </li>
                </ol>
              </section>
              <section>
                <h3 className="text-2xl font-medium">Características</h3>
                <ol className="pl-7">
                  <li className="list-disc">
                    Transformación de cripto a diferentes monedas
                  </li>
                </ol>
              </section>
            </div>
          </div>
        </MainContent>
      </div>
    </Layout>
  )
}

export default Cotizadorcripto

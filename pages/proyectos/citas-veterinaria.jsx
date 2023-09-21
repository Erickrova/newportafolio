import Image from "next/image"
import Link from "next/link"
import React from "react"
import Layout from "../../components/Layout"
import PrincipalImage from "../../components/proyectos/PrincipalImage"
import MainContent from "../../components/proyectos/MainContent"
import TitleAndLink from "../../components/proyectos/TitleAndLink"

const Citasveterinaria = () => {
  return (
    <Layout>
      <div className="md:w-full ">
        <PrincipalImage
          url={"https://citasreactt.netlify.app"}
          imageUrl={"/proyectos/citasveterinaria.png"}
          alt={"citas veterinaria react image"}
        />
        <MainContent>
          <div className="md:w-2/3 mx-auto p-2">
            <TitleAndLink
              title={"Citas React"}
              url={"https://citasreactt.netlify.app"}
            />
            <div className="text-black dark:text-white transition-colors">
              <p className="text-xl">
                Web para seguimiento de citas de una veterinaria
              </p>
              <section>
                <h3 className="text-2xl font-medium">Tecnologías</h3>
                <p className="text-xl">
                  Esta web está construida con las siguentes tecnologías:
                </p>
                <p className="text-xl font-medium">Frontend</p>
                <ol className="pl-7">
                  <li className="list-disc">React</li>
                  <li className="list-disc">Vite</li>
                  <li className="list-disc">Html</li>
                  <li className="list-disc">JavaScript</li>
                  <li className="list-disc">Css</li>
                </ol>
              </section>
              <section>
                <h3 className="text-2xl font-medium">Características</h3>
                <ol className="pl-7">
                  <li className="list-disc">Agendación de citas</li>
                  <li className="list-disc">Edición de citas</li>
                </ol>
              </section>
            </div>
          </div>
        </MainContent>
      </div>
    </Layout>
  )
}

export default Citasveterinaria

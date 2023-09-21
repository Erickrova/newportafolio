import Image from "next/image"
import Link from "next/link"
import React from "react"
import Layout from "../../components/Layout"
import PrincipalImage from "../../components/proyectos/PrincipalImage"
import MainContent from "../../components/proyectos/MainContent"
import TitleAndLink from "../../components/proyectos/TitleAndLink"

const Rockandedm = () => {
  return (
    <Layout>
      <div className="md:w-full">
        <PrincipalImage
          url={"https://festivalerick.netlify.app"}
          imageUrl={"/proyectos/rockandedm.png"}
          alt={"rock and edm festival image"}
        />
        <MainContent>
          <div className="md:w-2/3 mx-auto p-2">
            <TitleAndLink
              title={"Festival Erick ROCK & EDM"}
              url={"https://festivalerick.netlify.app"}
            />
            <div className="text-black dark:text-white transition-colors">
              <p className="text-xl">Promocional para Festival de ROCK & EDM</p>
              <section>
                <h3 className="text-2xl font-medium">Tecnologías</h3>
                <p className="text-xl">
                  Esta web está construida con las siguentes tecnologías:
                </p>
                <p className="text-xl font-medium">Frontend</p>
                <ol className="pl-7">
                  <li className="list-disc">Gulp</li>
                  <li className="list-disc">Sass</li>
                  <li className="list-disc">Html</li>
                  <li className="list-disc">JavaScript</li>
                  <li className="list-disc">Css</li>
                </ol>
              </section>
            </div>
          </div>
        </MainContent>
      </div>
    </Layout>
  )
}

export default Rockandedm

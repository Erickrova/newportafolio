import React from "react"
import Layout from "../../components/Layout"
import PrincipalImage from "../../components/proyectos/PrincipalImage"
import MainContent from "../../components/proyectos/MainContent"
import TitleAndLink from "../../components/proyectos/TitleAndLink"

const LetrasErick = () => {
  return (
    <Layout>
      <div className="md:w-full">
        <PrincipalImage
          url={"https://adamkandahlaw.com"}
          imageUrl={"/proyectos/adam.jpg"}
          alt={"Sitio web para firma de abogados"}
        />
        <MainContent>
          <div className="md:w-2/3 mx-auto p-2">
            <TitleAndLink
              title={"Adam Kandah Law"}
              url={"https://adamkandahlaw.com"}
            />

            <div className="text-black dark:text-white transition-colors">
              <p className="text-xl">Sitio web para firma de abogados</p>
              <section>
                <h3 className="text-2xl font-medium">Tecnologías</h3>
                <p className="text-xl">
                  Esta web está construida con las siguentes tecnologías:
                </p>
                <p className="text-xl font-medium">Frontend</p>
                <ol className="pl-7">
                  <li className="list-disc">WordPress</li>
                  <li className="list-disc">Elementor</li>
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

export default LetrasErick

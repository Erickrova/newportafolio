import Image from "next/image"
import Link from "next/link"
import React from "react"
import Layout from "../../components/Layout"
import PrincipalImage from "../../components/proyectos/PrincipalImage"
import MainContent from "../../components/proyectos/MainContent"
import TitleAndLink from "../../components/proyectos/TitleAndLink"
import SubtitleAndRepositorylink from "../../components/proyectos/SubtitleAndRepositorylink"

const SchoolAdm = () => {
  return (
    <Layout>
      <div className="md:w-full">
        <PrincipalImage
          url={"https://schooladm.netlify.app"}
          imageUrl={"/proyectos/schooladm.png"}
          alt={"schooladm image"}
        />
        <MainContent>
          <div className="md:w-2/3 mx-auto p-2">
            <TitleAndLink
              title={"SchoolAdm"}
              url={"https://schooladm.netlify.app"}
            />
            <div className="text-black dark:text-white transition-colors">
              <SubtitleAndRepositorylink
                subtitle={
                  "Administrador escolar y universitario donde podrás crear y subir tareas y eventos"
                }
                repoUrl={"https://github.com/Erickrova/schooladm_frontend"}
              />
              <section>
                <h3 className="text-2xl font-medium">Tecnologías</h3>
                <p className="text-xl">
                  Esta web está construida con las siguentes tecnologías:
                </p>
                <p className="text-xl font-medium">Frontend</p>
                <ol className="pl-7">
                  <li className="list-disc">React</li>
                  <li className="list-disc">Tailwindcss</li>
                  <li className="list-disc">Next.js</li>
                  <li className="list-disc">Html</li>
                  <li className="list-disc">TypeScript</li>
                  <li className="list-disc">Css</li>
                  <li className="list-disc">Jest</li>
                  <li className="list-disc">React Testing Library</li>
                </ol>
                <p className="text-xl font-medium">Backend</p>
                <ol className="pl-7">
                  <li className="list-disc">Node.js</li>
                  <li className="list-disc">Express.js</li>
                </ol>
                <p className="text-xl font-medium">Data Base</p>
                <ol className="pl-7">
                  <li className="list-disc">MongoDB</li>
                </ol>
              </section>
              <section>
                <h3 className="text-2xl font-medium">Características</h3>
                <ol className="pl-7">
                  <li className="list-disc">Panel de Administración:</li>
                  <li className="list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2">
                    <Image
                      className="h-72 w-auto"
                      src={`/other/school1.png`}
                      quality={100}
                      priority
                      height={400}
                      width={800}
                      alt={`phears image`}
                    />
                  </li>
                  <li className="list-disc">Eventos</li>
                  <li className="list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2">
                    <Image
                      className="h-72 w-auto"
                      src={`/other/school2.png`}
                      quality={100}
                      priority
                      height={400}
                      width={800}
                      alt={`phears image`}
                    />
                  </li>
                  <li className="list-disc">Tareas</li>
                  <li className="list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2">
                    <Image
                      className="h-72 w-auto"
                      src={`/other/school3.png`}
                      quality={100}
                      priority
                      height={400}
                      width={800}
                      alt={`phears image`}
                    />
                  </li>
                  <li className="list-disc">Perfil</li>
                  <li className="list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2">
                    <Image
                      className="h-72 w-auto"
                      src={`/other/school4.png`}
                      quality={100}
                      priority
                      height={400}
                      width={800}
                      alt={`phears image`}
                    />
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

export default SchoolAdm

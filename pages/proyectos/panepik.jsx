import Image from "next/image"
import Link from "next/link"
import React from "react"
import Layout from "../../components/Layout"
import PrincipalImage from "../../components/proyectos/PrincipalImage"
import MainContent from "../../components/proyectos/MainContent"
import TitleAndLink from "../../components/proyectos/TitleAndLink"
import SubtitleAndRepositorylink from "../../components/proyectos/SubtitleAndRepositorylink"

const Panepik = () => {
  return (
    <Layout>
      <div className="md:w-full">
        <PrincipalImage
          url={"https://pane-pik.netlify.app"}
          imageUrl={"/proyectos/panepik.png"}
          alt={"panepik image"}
        />
        <MainContent>
          <div className="md:w-2/3 mx-auto p-2">
            <TitleAndLink
              title={"PanePik"}
              url={"https://pane-pik.netlify.app"}
            />
            <div className="text-black dark:text-white transition-colors">
              <SubtitleAndRepositorylink
                subtitle={"Red social para compartir con tus amigos"}
                repoUrl={"https://github.com/Erickrova/panepik_frontend"}
              />
              <p className="text-xl p-2 bg-red-500 text-white">
                El backend de este proyecto fue mudado de heroku a vercel y la
                funcionalidad en tiempo real de socket.io está desabilitada
              </p>
              <section>
                <h3 className="text-2xl font-medium">Tecnologías</h3>
                <p className="text-xl">
                  Esta web está construida con las siguentes tecnologías:
                </p>
                <p className="text-xl font-medium">Frontend</p>
                <ol className="pl-7">
                  <li className="list-disc">React</li>
                  <li className="list-disc">Tailwindcss</li>
                  <li className="list-disc">Vite</li>
                  <li className="list-disc">Html</li>
                  <li className="list-disc">JavaScript</li>
                  <li className="list-disc">Css</li>
                </ol>
                <p className="text-xl font-medium">Backend</p>
                <ol className="pl-7">
                  <li className="list-disc">Node.js</li>
                  <li className="list-disc">Express.js</li>
                  <li className="list-disc">Socket.io</li>
                </ol>
                <p className="text-xl font-medium">Data Base</p>
                <ol className="pl-7">
                  <li className="list-disc">MongoDB</li>
                </ol>
              </section>
              <section>
                <h3 className="text-2xl font-medium">Características</h3>
                <ol className="pl-7">
                  <li className="list-disc">Creación de publicaciones:</li>
                  <li className="list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2">
                    <Image
                      className="h-72 w-auto"
                      src={`/other/panepik.png`}
                      quality={100}
                      priority
                      height={400}
                      width={800}
                      alt={`phears image`}
                    />
                    <Image
                      className="h-72 w-auto"
                      src={`/other/panepik2.png`}
                      quality={100}
                      priority
                      height={400}
                      width={800}
                      alt={`phears image`}
                    />
                    <Image
                      className="h-72 w-auto"
                      src={`/other/panepik3.png`}
                      quality={100}
                      priority
                      height={400}
                      width={800}
                      alt={`phears image`}
                    />
                  </li>
                  <li className="list-disc">Chat</li>
                  <li className="list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2">
                    <Image
                      className="h-72 w-auto"
                      src={`/other/panepik4.png`}
                      quality={100}
                      priority
                      height={400}
                      width={800}
                      alt={`phears image`}
                    />
                    <Image
                      className="h-72 w-auto"
                      src={`/other/panepik5.png`}
                      quality={100}
                      priority
                      height={400}
                      width={800}
                      alt={`phears image`}
                    />
                  </li>
                  <li className="list-disc">Sistema de amigos</li>
                  <li className="list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2">
                    <Image
                      className="h-72 w-auto"
                      src={`/other/panepik6.png`}
                      quality={100}
                      priority
                      height={400}
                      width={800}
                      alt={`phears image`}
                    />
                  </li>
                  <li className="list-disc">Busqueda de amigos</li>
                  <li className="list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2">
                    <Image
                      className="h-72 w-auto"
                      src={`/other/panepik7.png`}
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

export default Panepik

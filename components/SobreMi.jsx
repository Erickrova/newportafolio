import Image from "next/image"
import Link from "next/link"
import React from "react"
import CvButton from "./CvButton"
import CvLink from "./CvLink"
import Habilidades from "./Habilidades"
import { useTranslation } from "react-i18next"

const SobreMi = () => {
  const [t] = useTranslation("global")
  return (
    <section
      id="sobremi"
      data-aos="zoom-in-up"
      className="md:w-2/3 mx-auto py-4 pt-12 "
    >
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 mb-4">
        <div className=" col-start-1 row-start-1 md:col-start-2 w-full h-full flex items-center justify-center">
          <Image
            className="rounded-full dark:rounded-none"
            src={"/img/me.jpg"}
            width={300}
            height={300}
            alt="Erick Romaña photo"
            loading="lazy"
          />
        </div>
        <div className=" row-start-2 md:row-start-1 col-start-1 flex flex-col items-center justify-center">
          <div className=" px-4">
            <h1 className="text-5xl font-roboto mt-10 md:mt-0 font-bold text-center dark:text-white transition-colors animate-bounce">
              Erick Romaña
            </h1>
            <div>
              <p className=" font-roboto text-xl text-center text-gray-700 dark:text-gray-400 transition-colors mb-4">
                {t("about-me.profession")}
              </p>
              <div className="flex gap-1">
                <CvButton />
                <CvLink />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" pt-20 flex justify-center items-center">
        <p className=" px-10 md:px-0 text-4xl font-eczar text-center dark:text-white transition-colors">
          {t("about-me.description")}
        </p>
      </div>
      {/* <div className="pt-2">
        <h3 className="text-center text-xl font-bold  pb-4 dark:text-white transition-colors">
          Experiencia Laboral
        </h3>
        <p className=" md:text-center dark:text-white transition-colors">
          - maquetado y animaciones de sitio web para cliente como freelancer:
          desarrolle y diseñé el frontend de la pagina web de un cliente
          permitiendole tener modo claro y oscuro, así como unas mejores
          animaciones y experiencia de usuario
        </p>
      </div> */}
      <h3 className="text-center text-3xl font-bold  font-roboto mt-10 md:mt-28 pb-4 dark:text-white transition-colors">
        {t("about-me.title-academy-data")}
      </h3>
      <div className="flex flex-col md:flex-row justify-evenly items-center px-2">
        <div className="pt-2">
          <p className=" dark:text-white transition-colors">
            - <span className="font-bold">{t("about-me.university")}: </span>
            {t("about-me.career")} | {t("about-me.career-semester")}
          </p>
          <p className=" dark:text-white transition-colors">
            - <span className="font-bold">Udemy:</span>
            <Link
              href="certificado-udemy"
              className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-sky-400 dark:hover:text-sky-700 flex items-center justify-center transition-colors flex-col"
              target={"_blank"}
            >
              <span>
                REACT La Guía Completa: Hooks Context Redux MERN +15 Apps
              </span>
              <span className="relative w-fit h-fit">
                <Image
                  className="w-auto h-auto"
                  src={"/marco.png"}
                  height={300}
                  width={400}
                  alt="marco"
                  priority
                />
                <Image
                  className="absolute z-10 top-[11.4%] left-[7.45%] h-[77.5%] w-[84.7%]"
                  src={"/certificadoudemyreact.png"}
                  height={200}
                  width={339}
                  alt="certificado udemy"
                  priority
                />
              </span>
            </Link>
          </p>
        </div>
        <div className="pt-2 flex flex-col  mt-0 mb-auto">
          <h3 className="my-0 text-center text-xl font-bold pb-2 dark:text-white transition-colors">
            {t("about-me.languages")}
          </h3>
          <div>
            <p className=" dark:text-white transition-colors">
              -{" "}
              <span className="font-bold">
                {t("about-me.spanish-language")} |
              </span>{" "}
              {t("about-me.native")}
            </p>
            <p className=" dark:text-white transition-colors">
              -{" "}
              <span className="font-bold">
                {t("about-me.english-language")} |
              </span>{" "}
              A2
            </p>
          </div>
        </div>
      </div>
      <Habilidades />
    </section>
  )
}

export default SobreMi

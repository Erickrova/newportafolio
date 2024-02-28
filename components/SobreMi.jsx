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
    <section id="sobremi" className="w-5/6 md:w-2/3 mx-auto py-4 pt-12">
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 mb-4 gap-2">
        <div className=" col-start-1 rounded-md overflow-hidden row-start-1 md:col-start-2 w-full h-full flex items-center justify-center animate-zoom-in-3">
          <Image
            className=" w-full h-[400px] object-cover object-top position-custom hover:scale-110 transition-transform cursor-pointer"
            src={"/img/me2.jpg"}
            width={300}
            height={300}
            alt="Erick Romaña photo"
            loading="lazy"
          />
        </div>
        <div className="col-start-1 flex flex-col gap-2 items-center justify-center">
          <div className=" flex h-2/5 justify-center items-center border-2 border-gray-200 dark:border-none bg-griscustom dark:bg-custom1 w-full px-4 py-5 rounded-md animate-zoom-in-5">
            <div className="flex gap-1 w-full md:w-4/5">
              <CvButton />
              <CvLink />
            </div>
          </div>
          <div className=" flex h-3/5 justify-center items-center from-azulrey to-azulrey2 bg-gradient-to-b w-full px-4 py-5 rounded-md animate-zoom-in-6">
            <h1 className="text-7xl font-roboto my-10 md:my-0 font-bold text-center text-white transition-colors w-full md:w-4/5 dark:text-white">
              Erick Romaña
            </h1>
          </div>
        </div>
      </div>

      {/** 3 columns container under main photo */}
      <div className="md:flex-row flex-col flex gap-2 h-auto md:min-h-[400px] md:max-h-[500px]">
        {/** BLOCK #1 */}
        <div className="md:w-1/3 w-full flex flex-col gap-2 ">
          <div className="w-full h-fit md:h-1/2 py-4 rounded-md border-2 border-gray-200 dark:border-none bg-griscustom dark:bg-custom1 flex items-center justify-center animate-zoom-in-3">
            <div className="w-full h-fit md:px-4 relative flex justify-center items-center">
              <Image
                className=" w-4/5 h-[200px] md:w-full md:h-full"
                src={"/marco.svg"}
                width={10}
                height={10}
                alt="marco"
                loading="lazy"
              />
              <p className=" absolute font-roboto text-center text-black dark:text-white text-xl transition-colors z-10">
                {t("about-me.profession")}
              </p>
            </div>
          </div>
          <div className="w-full md:h-1/2 py-4 rounded-md border-2 border-gray-200 dark:border-none bg-griscustom dark:bg-custom1 flex justify-center items-center animate-zoom-in-5">
            <p className="text-black dark:text-white text-center w-4/5">
              &quot;
              <span className=" text-azulrey dark:text-blue-400">
                {t("about-me.slogan")}
              </span>
              &quot;
            </p>
          </div>
        </div>
        {/** BLOCK #2 */}
        <div className="md:w-1/3 w-full flex flex-col gap-2">
          <div className="w-full h-2/3 py-4 rounded-md border-2 border-gray-200 dark:border-none bg-griscustom dark:bg-custom1 flex justify-center items-center animate-zoom-in-6">
            <p className=" w-4/5 md:px-0 font-eczar text-center dark:text-white transition-colors">
              {t("about-me.description")}
            </p>
          </div>
          <div className="w-full h-1/3 py-4 rounded-md from-azulrey to-azulrey2 bg-gradient-to-b flex justify-center items-center animate-zoom-in-3">
            <p className="text-white dark:text-white font-bold w-4/5 text-center text-4xl">
              Colombia
            </p>
          </div>
        </div>
        {/** BLOCK #3 */}
        <div className="md:w-1/3 w-full flex flex-col gap-2 animate-zoom-in-5">
          <div className="w-full h-1/3 rounded-md from-azulrey to-azulrey2 bg-gradient-to-b flex justify-center items-center">
            <div className="w-4/5 py-4 md:py-0 flex flex-col justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-mail stroke-white dark:stroke-white"
                width={64}
                height={64}
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                <path d="M3 7l9 6l9 -6"></path>
              </svg>
              <span className="text-xl font-black text-white dark:text-white transition-colors ">
                rovaloyes01@gmail.com
              </span>
            </div>
          </div>
          <div className="w-full h-2/3 gap-2 rounded-md border-2 border-gray-200 dark:border-none bg-griscustom dark:bg-custom1 flex flex-col justify-center items-center">
            <Link
              href="https://wa.link/09md2w"
              className="flex items-center rounded-md p-1 transition-all hover:scale-105 hover:bg-gray-50 dark:bg-transparent w-4/5"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-whatsapp"
                width="80"
                height="80"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#00b341"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
              </svg>
              <span className="text-xl font-black text-gray-700 dark:text-white transition-colors ">
                {t("contact.whatsapp-contact")}
              </span>
            </Link>
            <Link
              href="https://www.linkedin.com/in/erick-rv/"
              className=" flex items-center rounded-md p-1 w-4/5 transition-all hover:scale-105 hover:bg-gray-50 dark:bg-transparent"
              target="_blank"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="icon icon-tabler icon-tabler-brand-linkedin"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#00abfb"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <rect x="4" y="4" width="16" height="16" rx="2" />
                <line x1="8" y1="11" x2="8" y2="16" />
                <line x1="8" y1="8" x2="8" y2="8.01" />
                <line x1="12" y1="16" x2="12" y2="11" />
                <path d="M16 16v-3a2 2 0 0 0 -4 0" />
              </svg>
              <span className="text-xl font-black text-gray-700 dark:text-white transition-colors ">
                {t("contact.linkedin-contact")}
              </span>
            </Link>
            <Link
              href="https://github.com/Erickrova"
              className="flex items-center  rounded-md p-1 w-4/5 transition-all hover:scale-105 hover:bg-gray-50 dark:bg-transparent"
              target="_blank"
              title={t("contact.github-contact-title-atribute")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className=" stroke-slate-700 icon icon-tabler icon-tabler-brand-github dark:stroke-white transition-colors"
                width="64"
                height="64"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#7f5345"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
              </svg>
              <span className="text-xl font-black text-gray-700 dark:text-white transition-colors ">
                {t("contact.github-contact")}
              </span>
            </Link>
          </div>
        </div>
      </div>
      {/** Academic Data */}
      <div className="w-full rounded-md mx-auto border-2 border-gray-200 dark:border-none bg-griscustom dark:bg-custom1 my-2">
        <h3 className="text-center text-3xl font-bold  font-roboto py-4 dark:text-white transition-colors">
          {t("about-me.title-academy-data")}
        </h3>
      </div>
      <div className="flex flex-col md:flex-row gap-2">
        <div className=" flex justify-center items-center  from-azulrey to-azulrey2 bg-gradient-to-b  rounded-md w-full md:w-1/2">
          <Link
            href="certificado-udemy"
            className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-sky-400 dark:hover:text-sky-700 flex items-center juh-[77.5%] w-[84.7%]stify-center transition-colors flex-col"
            target={"_blank"}
          >
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
        </div>
        <div className="flex flex-col items-center justify-center rounded-md border-2 border-gray-200 dark:border-none bg-griscustom dark:bg-custom1 py-4 w-full md:w-1/2">
          <h3 className="my-0 text-center text-2xl font-bold pb-2 dark:text-white transition-colors">
            {t("about-me.languages")}
          </h3>
          <div>
            <p className=" dark:text-white text-center transition-colors">
              -{" "}
              <span className="font-bold">
                {t("about-me.spanish-language")} |
              </span>{" "}
              {t("about-me.native")}
            </p>
            <p className=" dark:text-white text-center transition-colors">
              -{" "}
              <span className="font-bold">
                {t("about-me.english-language")} |
              </span>{" "}
              B1
            </p>
            <h3 className="my-0 text-center text-2xl font-bold py-2 dark:text-white transition-colors">
              {t("about-me.courses-and-university")}
            </h3>
            <p className=" dark:text-white text-center transition-colors">
              - <span className="font-bold">{t("about-me.university")}: </span>
              {t("about-me.career")} | {t("about-me.career-semester")}
            </p>
            <p className=" dark:text-white text-center transition-colors">
              - <span className="font-bold">Udemy:</span>
              <Link
                href="certificado-udemy"
                className="p-2 rounded-md text-gray-500 hover:text-gray-700 dark:text-sky-400 dark:hover:text-sky-700 flex items-center justify-center transition-colors flex-col"
                target={"_blank"}
              >
                <span>
                  REACT La Guía Completa: Hooks Context Redux MERN +15 Apps
                </span>
              </Link>
            </p>
          </div>
        </div>
      </div>
      <Habilidades />
    </section>
  )
}

export default SobreMi

import Link from "next/link"
import React, { useEffect, useState } from "react"
import CardProyecto from "./CardProyecto"
import proyectos from "../data/proyectos"
import { useTranslation } from "react-i18next"
import { Element } from "react-scroll"

const Proyectos = () => {
  const [t] = useTranslation("global")
  const [topProyectos, setTopProyectos] = useState([])
  useEffect(() => {
    if (proyectos) {
      let py = []
      for (let i = 0; i < 6; i++) {
        py.push(proyectos[i])
      }
      setTopProyectos(py)
    }
  }, [])
  return (
    <Element name="proyectossection">
      <section
        id="proyectos"
        data-aos="fade-up"
        className=" from-azulrey to-azulrey2 bg-gradient-to-b relative p-2 pb-10 "
      >
        <div className="skewed bg-white transition-colors dark:bg-custom2 h-[100px] w-full"></div>
        {/* background animation */}
        <ul className="background absolute inset-0 w-full h-full -z-10">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
        <h2 className="text-6xl font-bold text-center text-white mt-24 mb-10">
          {t("projects.title-projects")}
        </h2>
        <div className=" w-1/2 border-4 mx-auto mb-10 border-white border-dashed "></div>
        <div className=" w-2/3 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {topProyectos?.length
            ? topProyectos.map((proyecto) => (
                <CardProyecto key={proyecto.id} proyecto={proyecto} />
              ))
            : null}
        </div>
        <Link
          href="/proyectos"
          className="text-center text-white text-xl hover:text-amber-600 block underline pt-2 pb-10"
        >
          {t("projects.see-more-projects")}
        </Link>
        <div className="skewed2 bg-white transition-colors dark:bg-custom2 h-[100px] w-full"></div>
      </section>
    </Element>
  )
}

export default Proyectos

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
        className="bg-slate-500 p-2 pb-10 "
      >
        <h2 className="text-3xl font-bold text-center text-white pb-2">
          {t("projects.title-projects")}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {topProyectos?.length
            ? topProyectos.map((proyecto) => (
                <CardProyecto key={proyecto.id} proyecto={proyecto} />
              ))
            : null}
        </div>
        <Link
          href="/proyectos"
          className="text-center text-white text-xl hover:text-amber-400 block underline pt-2"
        >
          {t("projects.see-more-projects")}
        </Link>
      </section>
    </Element>
  )
}

export default Proyectos

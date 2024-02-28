import CardProyecto from "../../components/CardProyecto"
import Layout from "../../components/Layout"
import proyectos from "../../data/proyectos"
import { useTranslation } from "react-i18next"

const Proyectos = () => {
  const [t, i18n] = useTranslation("global")
  return (
    <Layout>
      <section
        id="proyectos"
        className=" p-2 pb-10 relative overflow-hidden from-azulrey to-azulrey2 bg-gradient-to-b"
      >
        <ul className="background absolute inset-0 w-full h-full">
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
        <h2 className="text-5xl font-bold text-center text-white dark:text-white my-10">
          {t("projects.title-projects")}
        </h2>
        <div className="w-2/3 mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {proyectos?.length
            ? proyectos.map((proyecto) => (
                <CardProyecto key={proyecto.id} proyecto={proyecto} />
              ))
            : null}
        </div>
      </section>
    </Layout>
  )
}

export default Proyectos

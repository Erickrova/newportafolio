import { useEffect } from "react"
import Contacto from "../components/Contacto"
import Layout from "../components/Layout"
import Proyectos from "../components/Proyectos"
import SobreMi from "../components/SobreMi"
import AOS from "aos"

export default function Home() {
  function verifyObserver(entries) {
    entries?.map((entry) => {
      if (entry.isIntersecting) {
        const sobreminavlink = document.getElementById(
          `nav${entry?.target?.id}`
        )
        sobreminavlink?.classList.remove("dark:text-white")
        sobreminavlink?.classList.add("text-red-500")
      } else {
        const sobreminavlink = document.getElementById(
          `nav${entry?.target?.id}`
        )
        sobreminavlink?.classList.remove("text-red-500")
        sobreminavlink?.classList.add("dark:text-white")
      }
    })
  }
  useEffect(() => {
    AOS.init()
  }, [])
  useEffect(() => {
    let observer = new IntersectionObserver(verifyObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 0.3,
    })
    let observer2 = new IntersectionObserver(verifyObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 0.6,
    })
    let observer3 = new IntersectionObserver(verifyObserver, {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    })
    const sobremi = document.getElementById("sobremi")
    const proyectos = document.getElementById("proyectos")
    const contacto = document.getElementById("contacto")
    observer.observe(sobremi)
    observer2.observe(proyectos)
    observer3.observe(contacto)
  }, [])
  return (
    <Layout>
      <SobreMi />
      <Proyectos />
      <Contacto />
    </Layout>
  )
}

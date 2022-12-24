import Contacto from "../components/Contacto";
import Layout from "../components/Layout";
import Proyectos from "../components/Proyectos";
import SobreMi from "../components/SobreMi";

export default function Home() {
  return (
    <Layout>
      <SobreMi />
      <Proyectos />
      <Contacto />
    </Layout>
  )
}

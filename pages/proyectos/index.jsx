import CardProyecto from '../../components/CardProyecto'
import Layout from '../../components/Layout'
import proyectos from '../../data/proyectos'

const Proyectos = () => {
  return (
    <Layout>
        <section id='proyectos' className='bg-slate-500 p-2 pb-10'>
        <h2 className='text-3xl font-bold text-center text-white pb-2'>Proyectos</h2>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2'>
            {proyectos?.length ? proyectos.map(proyecto =>(
            <CardProyecto key={proyecto.id} proyecto={proyecto} />
            )):null}
        </div>
        </section>
    </Layout>
  )
}

export default Proyectos
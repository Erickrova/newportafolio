import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'

const Controladorgastos = () => {
    return (
        <Layout>
            <div className='md:w-full bg-gray-400 dark:text-white transition-colors'>
                <div className='md:w-2/3 mx-auto flex items-center justify-center'>
                    <Link href={"https://controladorgastos.netlify.app"} target="_blank" >
                        <Image
                        src={`/proyectos/planificadorgastos.png`}
                        className="hover:brightness-50"
                        quality={100}
                        priority
                        height={400}
                        width={800}
                        alt={`phears image`}
                        />
                    </Link>
                </div>
                <div className='w-full border-t-2 border-gray-500 bg-white dark:bg-neutral-800 transition-colors py-4'>
                    <div className='md:w-2/3 mx-auto p-2'>
                        <div className='flex flex-col md:flex-row justify-between'>
                            <h2 className='text-3xl font-bold'>Control de Gastos</h2>
                            <Link href={"https://controladorgastos.netlify.app"} className="font-bold text-xl text-red-500 hover:text-red-600 underline transition-colors" target="_blank" >Ir al Proyecto</Link>
                        </div>
                        <div>
                            <p className='text-xl'>Web para Administracion de gastos</p>
                            <section>
                                <h3 className='text-2xl font-medium'>Tecnologías</h3>
                                <p className='text-xl'>Esta web está construida con las siguentes tecnologías:</p>
                                <p className='text-xl font-medium'>Frontend</p>
                                <ol className='pl-7'>
                                    <li className='list-disc'>React</li>
                                    <li className='list-disc'>Vite</li>
                                    <li className='list-disc'>Html</li>
                                    <li className='list-disc'>JavaScript</li>
                                    <li className='list-disc'>Css</li>
                                </ol>
                            </section>
                            <section>
                                <h3 className='text-2xl font-medium'>Características</h3>
                                <ol className='pl-7'>
                                    <li className='list-disc'>Creación de Gastos:</li>
                                    <li className='list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2'>
                                        <Image
                                        className='h-72 w-auto'
                                        src={`/other/gastos.png`}
                                        quality={100}
                                        priority
                                        height={400}
                                        width={800}
                                        alt={`phears image`}
                                        />
                                    </li>
                                    <li className='list-disc'>Grafico circular de gastos</li>
                                    <li className='list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2'>
                                        <Image
                                        className='h-72 w-auto'
                                        src={`/other/gastos2.png`}
                                        quality={100}
                                        priority
                                        height={400}
                                        width={800}
                                        alt={`phears image`}
                                        />
                                    </li>
                                    <li className='list-disc'>Arrastrar para eliminar o editar el gasto</li>
                                    <li className='list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2'>
                                        <Image
                                        className='h-72 w-auto'
                                        src={`/other/gastos3.png`}
                                        quality={100}
                                        priority
                                        height={400}
                                        width={800}
                                        alt={`phears image`}
                                        />
                                        <Image
                                        className='h-72 w-auto'
                                        src={`/other/gastos4.png`}
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
                </div>
    
            </div>
        </Layout>
      )
}

export default Controladorgastos
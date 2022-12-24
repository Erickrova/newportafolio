import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'

const Cotizadorcripto = () => {
    return (
        <Layout>
            <div className='md:w-full bg-gray-400 dark:text-white transition-colors'>
                <div className='md:w-2/3 mx-auto flex items-center justify-center'>
                    <Link href={"https://cotizadorcriptoserick.netlify.app"} target="_blank" >
                        <Image
                        src={`/proyectos/cripto.png`}
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
                            <h2 className='text-3xl font-bold'>Cotizador de Criptomonedas</h2>
                            <Link href={"https://cotizadorcriptoserick.netlify.app"} className="font-bold text-xl text-red-500 hover:text-red-600 underline transition-colors" target="_blank" >Ir al Proyecto</Link>
                        </div>
                        <div>
                            <p className='text-xl'>Web para saber el valor actual de una criptomoneda</p>
                            <section>
                                <h3 className='text-2xl font-medium'>Tecnologías</h3>
                                <p className='text-xl'>Esta web está construida con las siguentes tecnologías:</p>
                                <p className='text-xl font-medium'>Frontend</p>
                                <ol className='pl-7'>
                                    <li className='list-disc'>React</li>
                                    <li className='list-disc'>Vite.js</li>
                                    <li className='list-disc'>Style Components</li>
                                    <li className='list-disc'>Html</li>
                                    <li className='list-disc'>JavaScript</li>
                                    <li className='list-disc'>Css</li>
                                </ol>
                                <p className='text-xl font-medium'>API Externa</p>
                                <ol className='pl-7'>
                                    <li className='list-disc'><Link className='text-red-500 hover:text-red-600 transition-colors' href={"https://min-api.cryptocompare.com"}>https://min-api.cryptocompare.com</Link> </li>
                                </ol>
                            </section>
                            <section>
                                <h3 className='text-2xl font-medium'>Características</h3>
                                <ol className='pl-7'>
                                    <li className='list-disc'>Transformación de cripto a diferentes monedas</li>
                                </ol>
                            </section>
                        </div>
    
                    </div>
                </div>
    
            </div>
        </Layout>
      )
}

export default Cotizadorcripto
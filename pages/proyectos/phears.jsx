import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'

const Phears = () => {
  return (
    <Layout>
        <div className='md:w-full bg-gray-400 dark:text-white transition-colors'>
            <div className='md:w-2/3 mx-auto flex items-center justify-center'>
                <Link href={"https://phears.netlify.app"} target="_blank" >
                    <Image
                    src={`/proyectos/phears.png`}
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
                        <h2 className='text-3xl font-bold'>Phears</h2>
                        <Link href={"https://phears.netlify.app"} className="font-bold text-xl text-red-500 hover:text-red-600 underline transition-colors" target="_blank" >Ir al Proyecto</Link>
                    </div>
                    <div>
                        <p className='text-xl'>Tienda de ropa para hombres y mujeres</p>

                        <Link href={"https://github.com/Erickrova/phears_frontend"} className="font-bold text-xl text-red-500 hover:text-red-600 transition-colors underline" target="_blank" >Ver repositorio de github</Link>
                        <section>
                            <h3 className='text-2xl font-medium'>Tecnologías</h3>
                            <p className='text-xl'>Esta web está construida con las siguentes tecnologías:</p>
                            <p className='text-xl font-medium'>Frontend</p>
                            <ol className='pl-7'>
                                <li className='list-disc'>React</li>
                                <li className='list-disc'>Tailwindcss</li>
                                <li className='list-disc'>Next.js</li>
                                <li className='list-disc'>Html</li>
                                <li className='list-disc'>JavaScript</li>
                                <li className='list-disc'>Css</li>
                            </ol>
                            <p className='text-xl font-medium'>Backend</p>
                            <ol className='pl-7'>
                                <li className='list-disc'>Node.js</li>
                                <li className='list-disc'>Express.js</li>
                            </ol>
                            <p className='text-xl font-medium'>Data Base</p>
                            <ol className='pl-7'>
                                <li className='list-disc'>MongoDB</li>
                                <li className='list-disc'>Imagenes alojadas en cloudinary</li>
                            </ol>
                        </section>
                        <section>
                            <h3 className='text-2xl font-medium'>Características</h3>
                            <ol className='pl-7'>
                                <li className='list-disc'>Carrito de Compras:</li>
                                <li className='list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2'>
                                    <Image
                                    className='h-72 w-auto'
                                    src={`/other/carrito.png`}
                                    quality={100}
                                    priority
                                    height={400}
                                    width={800}
                                    alt={`phears image`}
                                    />
                                    <Image
                                    className='h-72 w-auto'
                                    src={`/other/carrito2.png`}
                                    quality={100}
                                    priority
                                    height={400}
                                    width={800}
                                    alt={`phears image`}
                                    />
                                </li>
                                <li className='list-disc'>Sistema de Favoritos</li>
                                <li className='list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2'>
                                    <Image
                                    className='h-72 w-auto'
                                    src={`/other/favoritos.png`}
                                    quality={100}
                                    priority
                                    height={400}
                                    width={800}
                                    alt={`phears image`}
                                    />
                                </li>
                                <li className='list-disc'>Sistema de Rangos para acceder a panel de administración</li>
                                <li className='list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2'>
                                    <Image
                                    className='h-72 w-auto'
                                    src={`/other/admin.png`}
                                    quality={100}
                                    priority
                                    height={400}
                                    width={800}
                                    alt={`phears image`}
                                    />
                                    <Image
                                    className='h-72 w-auto'
                                    src={`/other/admin2.png`}
                                    quality={100}
                                    priority
                                    height={400}
                                    width={800}
                                    alt={`phears image`}
                                    />
                                    <Image
                                    className='h-72 w-auto'
                                    src={`/other/admin3.png`}
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

export default Phears
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'

const Animesearch = () => {
    return (
        <Layout>
            <div className='md:w-full bg-gray-400'>
                <div className='md:w-2/3 mx-auto flex items-center justify-center'>
                    <Link href={"https://animebuscador.netlify.app"} target="_blank" >
                        <Image
                        src={`/proyectos/animesearch.png`}
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
                            <h2 className='text-3xl font-bold dark:text-white transition-colors'>Anime Search</h2>
                            <Link href={"https://animebuscador.netlify.app"} className="font-bold text-xl text-red-500 hover:text-red-600 transition-colors underline" target="_blank" >Ir al Proyecto</Link>
                        </div>
                        <div>
                            <p className='text-xl dark:text-white transition-colors'>Buscador de animes</p>
                            <Link href={"https://github.com/Erickrova/anime_search"} className="font-bold text-xl text-red-500 hover:text-red-600 transition-colors underline" target="_blank" >Ver repositorio de github</Link>
                            <section>
                                <h3 className='text-2xl font-medium dark:text-white transition-colors'>Tecnologías</h3>
                                <p className='text-xl dark:text-white transition-colors'>Esta web está construida con las siguentes tecnologías:</p>
                                <p className='text-xl font-medium dark:text-white transition-colors'>Frontend</p>
                                <ol className='pl-7'>
                                    <li className='list-disc dark:text-white transition-colors'>React</li>
                                    <li className='list-disc dark:text-white transition-colors'>Tailwindcss</li>
                                    <li className='list-disc dark:text-white transition-colors'>Next.js</li>
                                    <li className='list-disc dark:text-white transition-colors'>Html</li>
                                    <li className='list-disc dark:text-white transition-colors'>JavaScript</li>
                                    <li className='list-disc dark:text-white transition-colors'>Css</li>
                                </ol>
                                <p className='text-xl font-medium dark:text-white transition-colors'>API Externa</p>
                                <ol className='pl-7'>
                                    <li className='list-disc dark:text-white transition-colors'><Link className='text-red-500 hover:text-red-600 transition-colors' href={"https://jikan.moe"}>https://jikan.moe</Link> </li>
                                </ol>
                            </section>
                            <section className='dark:text-white transition-colors'>
                                <h3 className='text-2xl font-medium'>Características</h3>
                                <ol className='pl-7'>
                                    <li className='list-disc'>Buscador de animes:</li>
                                    <li className='list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2'>
                                        <Image
                                        className='h-72 w-auto'
                                        src={`/other/animesearch.png`}
                                        quality={100}
                                        priority
                                        height={400}
                                        width={800}
                                        alt={`phears image`}
                                        />
                                    </li>
                                    <li className='list-disc'>Carrousel</li>
                                    <li className='list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2'>
                                        <Image
                                        className='h-72 w-auto'
                                        src={`/other/animesearch2.png`}
                                        quality={100}
                                        priority
                                        height={400}
                                        width={800}
                                        alt={`phears image`}
                                        />
                                        <Image
                                        className='h-72 w-auto'
                                        src={`/other/animesearch3.png`}
                                        quality={100}
                                        priority
                                        height={400}
                                        width={800}
                                        alt={`phears image`}
                                        />
                                    </li>
                                    <li className='list-disc'>Paginación</li>
                                    <li className='list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2'>
                                        <Image
                                        className='h-72 w-auto'
                                        src={`/other/animesearch4.png`}
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

export default Animesearch
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Layout from '../../components/Layout'

const Panepik = () => {
    return (
        <Layout>
            <div className='md:w-full bg-gray-400 dark:text-white transition-colors'>
                <div className='md:w-2/3 mx-auto flex items-center justify-center'>
                    <Link href={"https://pane-pik.netlify.app"} target="_blank" >
                        <Image
                        src={`/proyectos/panepik.png`}
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
                            <h2 className='text-3xl font-bold'>PanePik</h2>
                            <Link href={"https://pane-pik.netlify.app"} className="font-bold text-xl text-red-500 hover:text-red-600 transition-colors underline" target="_blank" >Ir al Proyecto</Link>
                        </div>
                        <div>
                            <p className='text-xl'>Red social para compartir con tus amigos</p>
                            <p className='text-xl p-2 bg-red-500 text-white'>El backend de este proyecto fue mudado de heroku a vercel y la funcionalidad en tiempo real de socket.io está desabilitada</p>
                            <Link href={"https://github.com/Erickrova/panepik_frontend"} className="font-bold text-xl text-red-500 hover:text-red-600 transition-colors underline" target="_blank" >Ver repositorio de github</Link>
                            <section>
                                <h3 className='text-2xl font-medium'>Tecnologías</h3>
                                <p className='text-xl'>Esta web está construida con las siguentes tecnologías:</p>
                                <p className='text-xl font-medium'>Frontend</p>
                                <ol className='pl-7'>
                                    <li className='list-disc'>React</li>
                                    <li className='list-disc'>Tailwindcss</li>
                                    <li className='list-disc'>Vite</li>
                                    <li className='list-disc'>Html</li>
                                    <li className='list-disc'>JavaScript</li>
                                    <li className='list-disc'>Css</li>
                                </ol>
                                <p className='text-xl font-medium'>Backend</p>
                                <ol className='pl-7'>
                                    <li className='list-disc'>Node.js</li>
                                    <li className='list-disc'>Express.js</li>
                                    <li className='list-disc'>Socket.io</li>
                                </ol>
                                <p className='text-xl font-medium'>Data Base</p>
                                <ol className='pl-7'>
                                    <li className='list-disc'>MongoDB</li>
                                </ol>
                            </section>
                            <section>
                                <h3 className='text-2xl font-medium'>Características</h3>
                                <ol className='pl-7'>
                                    <li className='list-disc'>Creación de publicaciones:</li>
                                    <li className='list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2'>
                                        <Image
                                        className='h-72 w-auto'
                                        src={`/other/panepik.png`}
                                        quality={100}
                                        priority
                                        height={400}
                                        width={800}
                                        alt={`phears image`}
                                        />
                                        <Image
                                        className='h-72 w-auto'
                                        src={`/other/panepik2.png`}
                                        quality={100}
                                        priority
                                        height={400}
                                        width={800}
                                        alt={`phears image`}
                                        />
                                        <Image
                                        className='h-72 w-auto'
                                        src={`/other/panepik3.png`}
                                        quality={100}
                                        priority
                                        height={400}
                                        width={800}
                                        alt={`phears image`}
                                        />
                                    </li>
                                    <li className='list-disc'>Chat</li>
                                    <li className='list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2'>
                                        <Image
                                        className='h-72 w-auto'
                                        src={`/other/panepik4.png`}
                                        quality={100}
                                        priority
                                        height={400}
                                        width={800}
                                        alt={`phears image`}
                                        />
                                        <Image
                                        className='h-72 w-auto'
                                        src={`/other/panepik5.png`}
                                        quality={100}
                                        priority
                                        height={400}
                                        width={800}
                                        alt={`phears image`}
                                        />
                                    </li>
                                    <li className='list-disc'>Sistema de amigos</li>
                                    <li className='list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2'>
                                        <Image
                                        className='h-72 w-auto'
                                        src={`/other/panepik6.png`}
                                        quality={100}
                                        priority
                                        height={400}
                                        width={800}
                                        alt={`phears image`}
                                        />
                                    </li>
                                    <li className='list-disc'>Busqueda de amigos</li>
                                    <li className='list-disc bg-gray-100 flex flex-col items-center justify-center p-2 gap-2'>
                                        <Image
                                        className='h-72 w-auto'
                                        src={`/other/panepik7.png`}
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

export default Panepik
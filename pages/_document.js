import { Html, Head, Main, NextScript } from 'next/document'
 
export default function Document() {
  return (
    <Html lang="en">
      <Head>
          <meta name="keywords" content="desarrollador web,colombia, html, css, javascript, diseño responsivo, frameworks,desarrollo de aplicaciones web,programador, frontend, frontend developer, web dev, erick romagna,erick"></meta>
          <link rel="icon" href="/Erick.ico" />
          <meta name="author" content="Erick Romaña"/>
          <meta name="copyright" content="Erick Romaña"></meta>
          <meta name="description" content="Persona apasionada por la Tecnología y el desarrollo de soluciones
          web, con ganas de aprender, que sabe escuchar, aprender de los demás y
          esta en constante búsqueda del conocimiento."></meta>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Eczar:wght@400;700;800&display=swap" rel="stylesheet"/>
          <link rel="preconnect" href="https://fonts.googleapis.com"/>
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>
          <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap" rel="stylesheet"/>
          <link href="https://unpkg.com/aos@2.3.1/dist/aos.css" rel="stylesheet"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
      <script src="https://unpkg.com/aos@2.3.1/dist/aos.js" defer></script>
    </Html>
  )
}
import Head from "next/head"
import Header from "./Header"
import { useEffect } from "react"
import { animateScroll as scroll } from "react-scroll"
import Footer from "./Footer"

const Layout = ({ children }) => {
  useEffect(() => {
    if (scroll) {
      const typeScrooll = {
        duration: 75,
      }
      scroll.scrollToTop(typeScrooll)
    }
  }, [])
  return (
    <div className="overflow-x-hidden scroll-smooth relative bg-white dark:bg-custom2 transition-colors">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Erick Romaña - Desarrollador Web Frontend</title>
      </Head>

      <Header />
      <main className="md:pt-14 pt-24">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

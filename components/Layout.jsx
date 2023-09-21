import Head from "next/head"
import Header from "./Header"

const Layout = ({ children }) => {
  return (
    <div className="overflow-x-hidden scroll-smooth relative bg-white dark:from-black dark:to-neutral-800 dark:bg-gradient-to-b transition-colors">
      <Head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Erick Romaña - Desarrollador Web Frontend</title>
      </Head>

      <Header />
      <main className="md:pt-14 pt-24">{children}</main>
    </div>
  )
}

export default Layout

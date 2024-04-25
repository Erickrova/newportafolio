import React from "react"
import Layout from "../components/Layout"

const Hojadevida = () => {
  return (
    <Layout>
      <div className="pt-4">
        <iframe
          className="w-full h-screen overflow-y-hidden"
          src="ErickRomañaHojadeVida.pdf"
        ></iframe>
      </div>
    </Layout>
  )
}

export default Hojadevida

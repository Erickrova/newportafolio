import React from "react"
import Layout from "../components/Layout"

const CV = () => {
  return (
    <Layout>
      <div className="pt-4">
        <iframe
          className="w-full h-screen"
          src="EnglishErickRomañaHojadeVida.pdf"
        ></iframe>
      </div>
    </Layout>
  )
}

export default CV

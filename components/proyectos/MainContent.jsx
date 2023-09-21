import React from "react"

const MainContent = ({ children }) => {
  return (
    <div className="w-full border-t-2 border-gray-500 transition-colors py-4">
      {children}
    </div>
  )
}

export default MainContent

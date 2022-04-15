import * as React from "react"
import Footer from "./footer"
import Navbar from "./navbar"

const Layout = ({ pageName, children }) => {
  return (
    <div>
      <Navbar title={pageName} />
      <main className="max-w-screen-xl m-auto py-10 px-4">{children}</main>
      <Footer />
    </div>
  )
}

export default Layout

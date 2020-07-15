import React from "react"
import Header from "./Header"
import Footer from "./Footer"
import "../styles/index.scss"
import layoutStyles from "./layout.module.scss"
import { Helmet } from "react-helmet"

const Layout = props => {
  return (
    <div className={layoutStyles.container}>
      <Helmet title="Brothers Chemist" defer={false} />
      <Header />
      <main>{props.children}</main>

      <Footer />
    </div>
  )
}

export default Layout

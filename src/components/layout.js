import React from "react"
import PropTypes from "prop-types"

import Header from './header/header'
import Footer from "./footer/footer"

import "./layout.css"

const Layout = ({ children }) => {
  return (
    <div className="page-content">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  )
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout

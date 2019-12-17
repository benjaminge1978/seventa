import React from "react"
import PropTypes from "prop-types"

import Header from './header/header'
import Footer from "./footer/footer"

import './_main.scss'
import "./layout.css"

const Layout = (props) => {
    const className = 'page-content' + ( 'undefined' !== typeof props.className ? ` ${props.className}` : '');
        return (
        <div className={className}>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
      )
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Layout

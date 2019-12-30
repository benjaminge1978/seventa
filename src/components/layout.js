import React from "react";
import Helmet from "react-helmet";
import PropTypes from "prop-types";
import Header from "./header/header";
import Footer from "./footer/footer";

import "./_main.scss";
import "./layout.css"

const Layout = ({ className, children }) => {
    const LayoutClassName = 'page-content' + ( 'undefined' !== typeof className ? ` ${className}` : '');

    return (
        <div className={LayoutClassName}>
            <Helmet>
                <link rel="stylesheet" href="//use.typekit.net/xad6ytx.css" />
            </Helmet>
            <Header />
            <main>{children}</main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

export default Layout

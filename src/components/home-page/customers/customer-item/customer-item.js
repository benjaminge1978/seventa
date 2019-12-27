import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const CustomerItem = ({ title, logoData, logo }) => {
    return (
        <div className="customer-item">
            <Img
                fixed={logo}
                // fluid={logoData}
                alt={title}
                objectFit="contain"
                objectPosition="0% 0%"
            />
        </div>
    )
};

CustomerItem.propTypes = {
    // logo: PropTypes.string.isRequired,
    title: PropTypes.string
};

export default CustomerItem
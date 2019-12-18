import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => {
    const imageQuery = useStaticQuery(graphql`
        query Image1 {
            file(relativePath: {eq: "about-page-promo.jpg"}) {
                childImageSharp {
                    fixed(width: 800, height: 800) {
                        src
                    }
                }
            }
        }
    `);

    if ( imageQuery.errors ) {
        return null;
    }

    return (
        <img src={imageQuery.file.childImageSharp.fixed.src} alt="alt text 1" />
    );
};
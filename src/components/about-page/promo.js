import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => {
    const promoImageQuery = useStaticQuery(graphql`
        query PromoImage {
            file(relativePath: {eq: "seventa-about-us-header-image.jpg"}) {
                childImageSharp {
                    fixed(width: 1730, height: 860) {
                        base64
                        src
                        srcSet
                        width
                        height
                    }
                }
            }
        }
    `);

    if ( promoImageQuery.errors ) {
        return null;
    }

    return (
        <img src={promoImageQuery.file.childImageSharp.fixed.src} alt="Promo" />
    );
};
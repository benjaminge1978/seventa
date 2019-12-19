import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default () => {
    const imageQuery = useStaticQuery(graphql`
        query Image1 {
            file(relativePath: {eq: "seventa-about-painting.jpg"}) {
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
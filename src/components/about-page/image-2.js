import React from "react";
import { useStaticQuery, graphql } from "gatsby";

export default () => {
    const imageQuery = useStaticQuery(graphql`
        query Image2 {
            file(relativePath: {eq: "simon-seventa-paint-fight.jpeg"}) {
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
        <img src={imageQuery.file.childImageSharp.fixed.src} alt="alt text 2" />
    );
};
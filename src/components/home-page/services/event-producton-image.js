import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export default () => {
    const image = useStaticQuery(graphql`
        {
            file(relativePath: {eq: "services/event-production.jpg"}) {
                childImageSharp {
                    fluid(quality: 85) {
                        srcSet
                        srcSetWebp
                        srcWebp
                        src
                        base64
                    }

                }
                name
            }
        }
    `);

    return <Img fluid={image.file.childImageSharp.fluid} alt={image.file.name} />
}
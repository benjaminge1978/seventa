import React from "react";
import {gsap, TimelineMax} from "gsap";
import { useStaticQuery, graphql } from "gatsby";
import SplitText from "gsap/SplitText";
import Img from "gatsby-image";
import Arrow from "../../../images/arrow-down.svg"
// import AnimatedLogo from "../animated-logo/animated-logo";

import "./banner.scss"

export default () => {
    const bannerImage = useStaticQuery(graphql`
        query BannerImage {
            file(relativePath: {eq: "seventa-header-image.jpg"}) {
                childImageSharp {
                    fluid(quality: 80) {
                        aspectRatio
                        base64
                        originalImg
                        originalName
                        presentationHeight
                        presentationWidth
                        sizes
                        src
                        srcSet
                        srcSetWebp
                        srcWebp
                        tracedSVG
                    }
                }
                name
            }
        }
    `);

    return (
      <div className="banner-section">
        <div className="banner-section__left">
          <Arrow/>
        </div>
        <div className="banner-section__inner">
          <h2 className="banner-text">
            <span>We love experiences.</span>
            <span>We create them.</span>
          </h2>
          {
            bannerImage.errors
              ? null
              : <Img
                  fluid={bannerImage.file.childImageSharp.fluid}
                  alt={bannerImage.file.childImageSharp.name}
                />
          }
          {/*<AnimatedLogo/>*/}
        </div>
      </div>
    );
}

gsap.registerPlugin(TimelineMax, SplitText);
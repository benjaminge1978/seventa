import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Arrow from '../../../images/arrow-down.svg'

import './banner.scss'

export default () => {
    const bannerImg = useStaticQuery(graphql`
        query {
            file(relativePath: {eq: "banner.png"}) {
                childImageSharp {
                    fixed(quality: 100) {
                        src
                    }
                }
            }
        }
    `);

    return (
        <div className="banner-section">
            <div className="banner-section__left">
                <Arrow />
            </div>
            <div className="banner-section__inner" style={{
                backgroundImage: `url('${bannerImg.file.childImageSharp.fixed.src}')`,
            }}>
                <h2 className="banner-text">
                    <span>We love experiences.</span> 
                    <span>We create them.</span>
                </h2>
            </div>
        </div>
    )
}
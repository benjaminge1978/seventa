import React from "react";
// import { useStaticQuery, graphql } from "gatsby";
import Video from "./video/video";
import Arrow from "../../../images/arrow-down.svg"

import "./banner.scss"

export default () => {
    return (
        <>
            <div className="banner-section">
                <div className="banner-section__left">
                    <Arrow />
                </div>
                <div className="banner-section__inner">
                    <h2 className="banner-text">
                        <span>We love experiences.</span>
                        <span>We create them.</span>
                    </h2>
                    <div className="baner-section-video-position">
                        <Video
                            videoSrc="https://www.youtube.com/embed/nQrfbk5WHvY"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
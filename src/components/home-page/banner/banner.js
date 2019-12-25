import React, { Fragment, Component } from "react";
import gsap from "gsap";
// import { TimelineLite, Power3, Back } from "gsap/all";
import Video from "./video/video";
import Arrow from "../../../images/arrow-down.svg"
import AnimatedLogo from "./animated-logo/animated-logo";

import "./banner.scss"

export default class extends Component {
    constructor(props) {
        super(props);

        this.state = {
            logoShowed: false,
        };
    }

    render() {
        const { logoShowed } = this.state;

        return (
            <Fragment>
                <div className="banner-section">
                    <div className="banner-section__left">
                        <Arrow />
                    </div>
                    <div className="banner-section__inner">
                        {
                            logoShowed
                                ?   <Fragment>
                                        <h2 className="banner-text">
                                            <span>We love experiences.</span>
                                            <span>We create them.</span>
                                        </h2>
                                        <div className="baner-section-video-position" style={{height: '100%'}}>
                                            <Video />
                                        </div>
                                    </Fragment>
                                :   <AnimatedLogo animComplete={() => { this.setState({logoShowed: true}) }} />
                        }
                    </div>
                </div>
            </Fragment>
        )
    }
}

// gsap.registerPlugin();
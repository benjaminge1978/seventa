import React from "react";
import {gsap, TimelineMax} from "gsap";
import SplitText from "gsap/SplitText";

import Arrow from "../../../images/arrow-down.svg"
import AnimatedLogo from "./animated-logo/animated-logo";

import "./banner.scss"

export default () => (
    <div className="banner-section">
        <div className="banner-section__left">
            <Arrow />
        </div>
        <div className="banner-section__inner">
            <h2 className="banner-text">
                <span>We love experiences.</span>
                <span>We create them.</span>
            </h2>
           
            <AnimatedLogo />
        </div>
    </div>
);

gsap.registerPlugin(TimelineMax, SplitText);
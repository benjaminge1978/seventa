import React from "react";
import {gsap, Power3, TimelineMax} from "gsap";
import SplitText from "gsap/SplitText";
import Video from "./video/video";
import Arrow from "../../../images/arrow-down.svg"
import AnimatedLogo from "./animated-logo/animated-logo";

import "./banner.scss"

export default class extends React.Component {
    constructor(props) {
        super(props);

        this.splitTextRef = React.createRef();
        this.splitText = null;
        this.timeline = new TimelineMax();
    }

    componentDidMount() {
        this.splitText = new SplitText('.banner-text', {type: "words, lines, chars"});
    }

    animateVideoText() {
        // this.timeline.staggerFrom(this.splitText.words, 1, {
        //         opacity: 0,
        //         y: 100,
        //         ease: Power3.easeOut
        //     },
        //     0.09,
        //     "-=0.9"
        // );
    }

    render() {
        return (
            <div className="banner-section">
                <div className="banner-section__left">
                    <Arrow />
                </div>
                <div className="banner-section__inner">
                    <h2 className="banner-text" ref={this.splitTextRef}>
                        <span>We love experiences.</span>
                        <span>We create them.</span>
                    </h2>
                    <Video />
                    <AnimatedLogo animCompleted={() => {this.animateVideoText()}}/>
                </div>
            </div>
        );
    }
}

gsap.registerPlugin(TimelineMax, SplitText);
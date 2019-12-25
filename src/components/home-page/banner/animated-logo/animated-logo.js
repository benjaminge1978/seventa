import React, {Fragment} from "react";
import gsap from "gsap";
import { TimelineMax, Power3 } from "gsap/all";
import SeventaS from "../images/seventa-s";
import SeventaE from "../images/seventa-e";
import SeventaV from "../images/seventa-v";
import SeventaE2 from "../images/seventa-e2";
import SeventaN from "../images/seventa-n";
import SeventaT from "../images/seventa-t";
import SeventaA from "../images/seventa-a";
import SeventaEvents from "../images/seventa-events";

import "./animated-logo.scss";

export default class extends React.Component {
    constructor(props) {
        super(props);

        this._animatedLogoItems = [];
        this.masBlockRef = React.createRef();
        this._timelineMax = new TimelineMax({
            paused: true,
            onComplete: props.animComplete,
        });
    }

    componentDidMount() {
        this._timelineMax.staggerFrom(
                this._animatedLogoItems,
                1.3,
                {
                    delay: 0.5,
                    y: "20px",
                    autoAlpha: 0,
                    ease:Power3.easeOut
                },
                0.07
            );

        this._timelineMax.staggerTo(
                this._animatedLogoItems,
                0.5,
                {
                    y: "-40px",
                    autoAlpha: 0,
                    ease: Power3.easeOut
                },
                0.03,
                "-=0.2"
            ).play();
    }

    render() {
        return (
            <Fragment>
                <div className="athene-intro-logo-wrapper">
                    <div className="athene-intro-logo">
                        <SeventaS setRef={img => this._animatedLogoItems.push(img)}/>
                        <SeventaE setRef={img => this._animatedLogoItems.push(img)}/>
                        <SeventaV setRef={img => this._animatedLogoItems.push(img)}/>
                        <SeventaE2 setRef={img => this._animatedLogoItems.push(img)}/>
                        <SeventaN setRef={img => this._animatedLogoItems.push(img)}/>
                        <SeventaT setRef={img => this._animatedLogoItems.push(img)}/>
                        <SeventaA setRef={img => this._animatedLogoItems.push(img)}/>
                        <SeventaEvents setRef={img => this._animatedLogoItems.push(img)}/>
                    </div>
                </div>
                <div className="mask-block" ref={this.masBlockRef}/>
            </Fragment>
        );
    }
}

gsap.registerPlugin(TimelineMax);
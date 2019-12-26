import React from "react";
import { Link } from "gatsby";
import { gsap, TimelineMax, TweenMax } from "gsap/all";
import SplitText from "gsap/SplitText";
import ScrollMagic from "scrollmagic";
import PropsTypes from "prop-types";
import Arrow from "../../images/case-study-arrow.svg";
import "scrollmagic/scrollmagic/uncompressed/plugins/animation.gsap";
import "scrollmagic/scrollmagic/uncompressed/plugins/debug.addIndicators";

import "./case.scss";

export default class Case extends React.Component {
    constructor(props) {
        super(props);

        this.controller = new ScrollMagic.Controller();
        this.imgRef = React.createRef();
        this.triggerElement = React.createRef();
    }

    componentDidMount() {
        new ScrollMagic.Scene({
            triggerElement: this.triggerElement.current,
            duration: 500,
            offset: 0,
        })
            .setTween(this.imgRef.current, {
                scale: 0.5,
            })
            .addTo(this.controller);
    }

    render() {
        const { index, thumbDesc, title, src, category, slug } = this.props;
        const itemClasses = index % 2 === 0 ? 'left' : 'right';
        const caseSlug = `/${slug}`;

        return (
            <div className={`cases-item cases-item--${itemClasses} cases-item--${index + 1}`} ref={this.triggerElement}>
                        <Link to={caseSlug} className="cases-item__thumb">
                            <img className="cases-item__img" src={src} alt={title} ref={this.imgRef}/>
                            {
                                thumbDesc
                                    ? <span className="cases-item__description">{thumbDesc}</span>
                                    : null
                            }
                        </Link>
                        <div className="cases-item__heading">
                            <span className="case-heading-arrow"><Arrow /></span>
                            <div className="case-heading-text">
                                <p>{category}</p>
                                <h3><Link className="animated-link" to={caseSlug}>{title}</Link></h3>
                            </div>
                        </div>
            </div>
        )
    }

}

Case.propTypes = {
    src: PropsTypes.string.isRequired,
    category: PropsTypes.string.isRequired,
    thumbDesc: PropsTypes.string,
    index: PropsTypes.number.isRequired,
    slug: PropsTypes.string.isRequired,
};

Case.defaultProps = {
    thumbDesc: ''
};

gsap.registerPlugin(TimelineMax, TweenMax, SplitText);
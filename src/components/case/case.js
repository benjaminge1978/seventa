import React from "react";
import { Link } from "gatsby";
import PropsTypes from "prop-types";
import { Controller, Scene } from "react-scrollmagic";
import { Tween } from "react-gsap";
import Arrow from "../../images/case-study-arrow.svg";

import "./case.scss";

const Case = ({ index, thumbDesc, title, src, category, slug }) => {
    const itemClasses = index % 2 === 0 ? 'left' : 'right';
    const caseSlug = `/${slug}`;

    return (
        <div className={`cases-item cases-item--${itemClasses} cases-item--${index + 1}`}>
            <Controller>
                <Scene duration={2000}>
                    <Tween
                        wrapper={<div style={{overflow: 'hidden'}} />}
                        from={{
                            transform: "scale3d(1, 1, 1)"
                        }}
                        to={{
                            transform: "scale3d(1.3, 1.3, 1)"
                        }}
                    >
                        <Link to={caseSlug} className="cases-item__thumb">
                            <img className="cases-item__img" src={src} alt={title}/>
                            {
                                thumbDesc
                                    ? <span className="cases-item__description">{thumbDesc}</span>
                                    : null
                            }
                        </Link>
                    </Tween>
                </Scene>
                <Scene>
                    <div className="cases-item__heading">
                        <span className="case-heading-arrow"><Arrow /></span>
                        <div className="case-heading-text">
                            <p>{category}</p>
                            <h3><Link to={caseSlug}>{title}</Link></h3>
                        </div>
                    </div>
                </Scene>
            </Controller>
        </div>
    )
};

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

export default Case
import React from "react";
import PropsTypes from "prop-types";
import { Controller, Scene } from "react-scrollmagic";
import { Tween, Controls } from "react-gsap";
import Arrow from "../../images/case-study-arrow.svg";

import "./case.scss";

const Case = props => {
    const itemClasses = props.index % 2 === 0 ? 'left' : 'right';

    return (
        <div className={`cases-item cases-item--${itemClasses} cases-item--${props.index + 1}`}>
            {/*<Controller>*/}
            {/*    <Scene duration={2000}>*/}
            {/*        <Tween*/}
            {/*            from={{*/}
            {/*                transform: "rotate3d(1, 0.49, -0.12, 45deg)"*/}
            {/*            }}*/}
            {/*            to={{*/}
            {/*                transform: "rotate3d(1, 0.36, .04, -45deg)"*/}
            {/*            }}*/}
            {/*        >*/}
            {/*            <div className="cases-item__thumb">*/}
            {/*                <img className="cases-item__img" src={props.src} alt={props.title}/>*/}
            {/*                {*/}
            {/*                    props.thumbDesc*/}
            {/*                        ? <span className="cases-item__description">{props.thumbDesc}</span>*/}
            {/*                        : null*/}
            {/*                }*/}
            {/*            </div>*/}
            {/*        </Tween>*/}
            {/*    </Scene>*/}
            {/*            <div className="cases-item__heading">*/}
            {/*                <span className="case-heading-arrow"><Arrow /></span>*/}
            {/*                <div className="case-heading-text">*/}
            {/*                    <p>{props.category}</p>*/}
            {/*                    <h3>{props.title}</h3>*/}
            {/*                </div>*/}
            {/*            </div>*/}
            {/*</Controller>*/}
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
                        <div className="cases-item__thumb">
                            <img className="cases-item__img" src={props.src} alt={props.title}/>
                            {
                                props.thumbDesc
                                    ? <span className="cases-item__description">{props.thumbDesc}</span>
                                    : null
                            }
                        </div>
                    </Tween>
                </Scene>
                <div className="cases-item__heading">
                    <span className="case-heading-arrow"><Arrow /></span>
                    <div className="case-heading-text">
                        <p>{props.category}</p>
                        <h3>{props.title}</h3>
                    </div>
                </div>
            </Controller>
        </div>
    )
};

Case.propTypes = {
    src: PropsTypes.string.isRequired,
    category: PropsTypes.string.isRequired,
    thumbDesc: PropsTypes.string,
    index: PropsTypes.number.isRequired,
};

Case.defaultProps = {
    thumbDesc: ''
};

export default Case
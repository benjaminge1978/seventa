import React from "react";
import PropsTypes from "prop-types";

import "./container-labelled.scss"

const ContainerLabelled = props => {
    const className = 'container-labelled' + (props.className ? ` ${props.className}` : '');

    return (
        <div className={className}>
            <div className="container-labelled__label">
                {props.label}
            </div>
            <div className="container-labelled__inner">
                {props.children}
            </div>
        </div>
    );
};

ContainerLabelled.propsTypes = {
    label: PropsTypes.string
};

ContainerLabelled.defaultProps = {
    label: null
};

export default ContainerLabelled;
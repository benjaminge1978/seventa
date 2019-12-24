import React from "react";
import PropsTyps from "prop-types";
import Arrow from "../../images/arrow-right.svg";

const CaseStudiesItem = props => {
    return (
        <div className="case-studies-list-item">
            <div className="case-studies-list-item__thumb">
                <img src={props.thumbSrc} alt={props.title}/>
            </div>
            <h2 className="case-studies-list-item__title">{props.title}</h2>
            <div className="case-studies-list-item__excerpt" dangerouslySetInnerHTML={{__html: props.excerpt}} />
            <Arrow />
        </div>
    );
};

CaseStudiesItem.porpsTypes = {
    title: PropsTyps.string.isRequired,
    thumbSrc: PropsTyps.string.isRequired,
    excerpt: PropsTyps.string.isRequired,
};

export default CaseStudiesItem;
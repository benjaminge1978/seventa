import React from "react";
import PropsTyps from "prop-types";
import Arrow from "../../images/arrow-right.svg";

const PortfolioItem = props => {
    return (
        <div className="portfolio-list-item">
            <div className="portfolio-list-item__thumb">
                <img src={props.thumbSrc} alt={props.title}/>
            </div>
            <h2 className="portfolio-list-item__title">{props.title}</h2>
            <div className="portfolio-list-item__excerpt" dangerouslySetInnerHTML={{__html: props.excerpt}} />
            <Arrow />
        </div>
    );
};

PortfolioItem.porpsTypes = {
    title: PropsTyps.string.isRequired,
    thumbSrc: PropsTyps.string.isRequired,
    excerpt: PropsTyps.string.isRequired,
};

export default PortfolioItem;
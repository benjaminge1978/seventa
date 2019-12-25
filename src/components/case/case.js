import React from "react";
import { Link } from "gatsby";

import PropsTypes from "prop-types";
import Arrow from "../../images/case-study-arrow.svg";

import "./case.scss";

export default class Case extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { index, thumbDesc, title, src, category, slug } = this.props;
        const itemClasses = index % 2 === 0 ? 'left' : 'right';
        const caseSlug = `/${slug}`;

        return (
            <div className={`cases-item cases-item--${itemClasses} cases-item--${index + 1}`}>
                        <Link to={caseSlug} className="cases-item__thumb">
                            <img className="cases-item__img" src={src} alt={title} ref={this._imgRef}/>
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
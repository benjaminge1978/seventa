import React from "react"
import PropsTypes from "prop-types"
import { Link } from "gatsby";
import Arrow from "../../../images/case-study-arrow.svg";

import './case-item.scss'

const CaseItem = ({ slug, imgSrc, imgTitle, categories, caseTitle }) => (
    <div className="case-category__item">
        <Link to={`/${slug}`}>
            <img src={imgSrc} alt={imgTitle ? imgTitle : caseTitle} />
        </Link>
        <div className="case-category-item-desc">
            <Arrow />
            <div className="case-category-item-heading">
                {
                    categories
                        ? <p>
                            {
                                categories
                                    .map(category => category.name.toLowerCase())
                                    .join(" & ")
                            }
                        </p>
                        : null
                }
                <h2><Link className="animated-link" to={`/${slug}`}>{caseTitle}</Link></h2>
            </div>
        </div>
    </div>
);

CaseItem.propTypes = {
    slug: PropsTypes.string.isRequired,
    imgSrc: PropsTypes.string.isRequired,
    caseTitle: PropsTypes.string.isRequired,
    categories: PropsTypes.array.isRequired,
    imgTitle: PropsTypes.string,
};

export default CaseItem
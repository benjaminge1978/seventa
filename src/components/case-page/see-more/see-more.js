import React from "react"
import PropTypes from "prop-types"

import Arrow from "../../../images/arrow-left.svg";
import CaseItem from "../../case-category/case-item/case-item";

import "./see-more.scss"

const SeeMore = ({cases, catName}) => {
    return (
        <div className="section section-labelled section--see-more">
            <div className="section-labelled__label">{null}</div>
            <div className="section-labelled__inner">
                <div className="related-cases">
                    <div className="related-cases__heading">
                        <h3>See more {catName}</h3>
                        <p><Arrow />Back to {catName.toLowerCase()} case studies</p>
                    </div>
                    <div className="related-cases__list">
                        {
                            cases.map((node, index) => (
                                <CaseItem
                                    key={index}
                                    imgSrc={node.thumbnail.fixed.src}
                                    caseTitle={node.title}
                                    categories={node.caseCategories}
                                    slug={node.slug}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

SeeMore.propTypes = {
    cases: PropTypes.arrayOf(PropTypes.shape({
        thumbnail: PropTypes.shape({
            fixed: PropTypes.shape({
                src: PropTypes.string.isRequired,
            }).isRequired,
        }).isRequired,
        title: PropTypes.string.isRequired,
        caseCategories: PropTypes.array.isRequired,
        slug: PropTypes.string.isRequired,
    })).isRequired,
    catName: PropTypes.string.isRequired,
};

export default SeeMore;
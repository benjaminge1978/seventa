import React from "react";
import PropsTypes from "prop-types";
import { Link } from "gatsby";

import "./pagination.scss";

const Pagination = ({maxPages, current}) => {
    if ( 1 === maxPages ) {
        return null;
    }

    return (
        <div className="pagination">
            <ul className="pagination__list">
                {
                    [...Array(maxPages).keys()].map(index => (
                        <li>
                            <Link
                                key={index}
                                to={0 === index ? `/blog` : `/blog/${index + 1}`}
                                className={'pagination__link' + (index + 1 === current ? ' pagination__link--current' : '')}
                            >
                                {index + 1}
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    );
};

Pagination.propsTypes = {
    maxPages: PropsTypes.number.isRequired,
    current: PropsTypes.number.isRequired,
};

export default Pagination;
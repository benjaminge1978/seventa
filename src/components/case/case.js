import React from 'react'
import PropsTypes from 'prop-types'

import Arrow from '../../images/case-study-arrow.svg'
import './case.scss'

const Case = props => {
    const itemClasses = props.index % 2 === 0 ? 'left' : 'right';

    return (
        <div className={`cases-item cases-item--${itemClasses} cases-item--${props.index + 1}`}>
            <div className="cases-item__thumb">
                <img className="cases-item__img" src={props.src} alt={props.title}/>
                {
                    props.thumbDesc
                        ? <span className="cases-item__description">{props.thumbDesc}</span>
                        : null
                }
            </div>
            <div className="cases-item__heading">
                <span className="case-heading-arrow"><Arrow /></span>
                <div className="case-heading-text">
                    <p>{props.category}</p>
                    <h3>{props.title}</h3>
                </div>
            </div>
        </div>
    )
};

Case.propTypes = {
    src: PropsTypes.string.isRequired,
    alt: PropsTypes.string.isRequired,
    category: PropsTypes.string.isRequired,
    thumbDesc: PropsTypes.string,
    index: PropsTypes.number.isRequired,
};

Case.defaultProps = {
    thumbDesc: ''
};

export default Case
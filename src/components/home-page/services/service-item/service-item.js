import React from 'react'

import PropsTypes from 'prop-types'

const ServiceItem = props => {
    return (
        <div className="services-cards__item">
            <img src={props.imgSrc} srcSet={props.srcSet} alt={props.title} />
            <h3>{props.title}</h3>
            <p>{props.description}</p>
        </div>
    )
}

ServiceItem.propsTypes = {
    imgSrc: PropsTypes.string.isRequired,
    imgSrcSet: PropsTypes.string.isRequired,
    title: PropsTypes.string.isRequired,
    description: PropsTypes.string.isRequired,
}

export default ServiceItem
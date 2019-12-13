import React from 'react'
import PropTypes from 'prop-types'

// import './customer-item.scss'

const CustomerItem = props => {
    return (
        <div className="customer-item">
            <figure>
                <img src={props.logo} alt={props.title ? props.title : props.logo.split('/').pop().replace(/\W*/g, ' ')} />
            </figure>
        </div>
    )
}

CustomerItem.propTypes = {
    logo: PropTypes.string.isRequired,
    title: PropTypes.string
}

export default CustomerItem
import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const LinkItem = props => {
    return (
        true === props.external
        ? <a href={props.href}>{props.children}</a>
        : <Link to={'/' + props.href}>{props.children}</Link>
    )
};

LinkItem.defaultProps = {
    external: false,
    href: '#',
    text: '',
};

LinkItem.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    external: PropTypes.bool,
};

export default LinkItem;
import React from 'react'
import PropsTypes from 'prop-types'

import LinkItem from './menu-link/menu-link'

const Menu = props => {
    const links = props.links;

    return (
        links.length
        ? <ul id={props.id}>
            {
                links.map((link, index) => (
                    <li key={index}>
                        <LinkItem 
                            href={link.href} 
                            external={'undefined' !== typeof props.external && true === props.external}>
                                {link.text}
                        </LinkItem>
                    </li>
                ))
            }
         </ul>
        : null
    )
};

Menu.defaultProps = {
    links: [],
    id: '',
    linkClass: 'menu-link'
};

Menu.propTypes = {
    props: PropsTypes.shape({
        links: PropsTypes.array.isRequired,
        id: PropsTypes.string,
        linkClass: PropsTypes.string,
    })
};

export default Menu
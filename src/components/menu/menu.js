import React from 'react'
import PropsTypes from 'prop-types'

import LinkItem from './menu-link/menu-link'

function subMenuOutput(menuItems, menuLevel) {
    menuLevel = 1 || menuLevel + 1;

    return (
        <ul className={`submenu submenu-level-${menuLevel}`}>
            {
                menuItems.map((subLink, index) => (
                    <li key={index} className="menu-item">
                        <LinkItem
                            href={subLink.href}
                            external={'undefined' !== typeof subLink.external && true === subLink.external}>
                            {subLink.text}
                        </LinkItem>
                    </li>
                ))
            }
        </ul>
    );
}

const Menu = ({ links, id }) => {
    const menuLevel = 1;

    return (
        links.length
        ?   <ul id={id}>
                {
                    links.map((link, index) => {
                        const hasSubmenu = link.submenu && link.submenu.length;

                        return (
                            <li key={index} className={'menu-item' + (hasSubmenu ? ' has-submenu' : '')}>
                                <LinkItem
                                    href={link.href}
                                    external={'undefined' !== typeof link.external && true === link.external}>
                                    {link.text}
                                </LinkItem>
                                {
                                    hasSubmenu
                                        ?   subMenuOutput(link.submenu, menuLevel)
                                        : null
                                }
                            </li>
                        )
                    })
                }
             </ul>
        : null
    )
};

Menu.defaultProps = {
    links: [],
    id: '',
    linkClass: 'menu-link',
    submenu: null,
};

Menu.propTypes = {
    props: PropsTypes.shape({
        links: PropsTypes.array.isRequired,
        id: PropsTypes.string,
        linkClass: PropsTypes.string,
        submenu: PropsTypes.arrayOf(PropsTypes.shape({
            links: PropsTypes.array.isRequired,
            linkClass: PropsTypes.string,
        })),
    })
};

export default Menu
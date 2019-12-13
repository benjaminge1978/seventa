import React from 'react'

import Menu from '../../menu/menu'

import './header-menu.scss'

class HeaderMenu extends React.Component {
    render() {
        return (
            <Menu id="header-menu" links={[
                {href: 'event-production', text: 'Event Production'},
                {href: 'conferences', text: 'Conferences'},
                {href: 'brand-ativation', text: 'Brand Activation'},
                {href: 'event-management', text: 'Event Management'},
                {href: 'venue-sourcing', text: 'Venue Sourcing'},
                {href: 'portfoilo', text: 'Portfoilo'},
                {href: 'about', text: 'About'},
                {href: 'blog', text: 'Blog'},
                {href: 'contact', text: 'Contact'},
            ]}/>
        )
    }
}

export default HeaderMenu
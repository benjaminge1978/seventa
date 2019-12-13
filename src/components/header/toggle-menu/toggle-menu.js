import React from 'react'
import Menu from "../../menu/menu";


export default class ToggleMenu extends React.Component {

    test() {
        console.log('test');
    }

    render() {
        const menuCSSClass = "header-menu-wrapper";

        return (
            <div className={menuCSSClass}>
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
            </div>
        )
    }
}
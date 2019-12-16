import React from 'react'

import Menu from '../../menu/menu'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

import './header-menu.scss'

class HeaderMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpenMobile: false,
        };
        this.myRef = React.createRef();
    }

    toggleMenu() {
        this.myRef.current.classList.toggle('active');
        this.setState({isOpenMobile: !this.state.isOpenMobile});
    }

    render() {
        return (
            <div className="header-navigation">
                <div className="header-menu-wrapper" ref={this.myRef}>
                    <Menu id="header-menu" links={[
                        {href: 'event-production', text: 'Event Production'},
                        {href: 'conferences', text: 'Conferences'},
                        {href: 'brand-activation', text: 'Brand Activation'},
                        {href: 'event-management', text: 'Event Management'},
                        {href: 'venue-sourcing', text: 'Venue Sourcing'},
                        {href: 'portfoilo', text: 'Portfoilo'},
                        {href: 'about', text: 'About'},
                        {href: 'blog', text: 'Blog'},
                        {href: 'contact', text: 'Contact'},
                    ]}/>
                </div>
                <button type="button" className="header-menu-toogle" onClick={this.toggleMenu.bind(this)}>
                    {
                        this.state.isOpenMobile
                            ? <FontAwesomeIcon icon={faTimes} />
                            : <FontAwesomeIcon icon={faBars} />
                    }
                </button>
            </div>
        )
    }
}

export default HeaderMenu
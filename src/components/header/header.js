import React from 'react'

import SiteBrand from '../site-brand/site-brand'
import HeaderMenu from './header-menu/header-menu'

import './header.scss'

export default () => {
    return (
        <header className="site-header">
            <div className="site-header-brand">
                <SiteBrand />
            </div>
            <div className="header-menu-wrapper">
                <HeaderMenu />
            </div>
        </header>
    )
}
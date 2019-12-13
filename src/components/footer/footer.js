import React from 'react'

import SocialMenu from './social-menu/social-menu'
import Greybox from './greybox/greybox'
import Menu from '../menu/menu'

import '../footer/footer.scss'

export default () => (
    <footer className="site-footer">
        <Greybox />
        <div className="footer-summary">
            <div className="footer-menu-wrapper">
            <Menu id="footer-menu" links={[
                {href: 'cookie-policy', text: 'Privacy Policy & T&C\'s'},
                {href: 'csr', text: 'CSR'},
                {href: 'privacy-policy', text: 'Cookie Policy'},
                {href: 'https://google.com', text: 'Site by MilkIsNice', external: true},
            ]}/>
            </div>
            <div className="social-links">
                <span className="social-links__text">Follow us ——</span>
                <SocialMenu />
            </div>
        </div>
    </footer>
)
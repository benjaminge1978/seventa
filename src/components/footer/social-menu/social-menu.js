import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import './social-menu.scss'

library.add(fab)

export default () => {
    const socialLinks = [
        {link: 'https://facebook.com', icon: 'facebook-f'},
        {link: 'https://instagram.com', icon: 'instagram'},
        {link: 'https://linkedin.com', icon: 'linkedin-in'},
        {link: 'https://twitter.com', icon: 'twitter'},
    ]

    return (
        <ul className="social-links__menu">
        {
            socialLinks.map((item, index) => {
            return (
                    <li key={index}>
                        <a href={'//' + item.link} className="social-link">
                            <FontAwesomeIcon icon={['fab', item.icon]}/>
                        </a>
                    </li>
                )
            })
        }
        </ul>
    )
}
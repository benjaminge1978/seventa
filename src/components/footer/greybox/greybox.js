import React from "react";
import SiteBrand from "../../site-brand/site-brand";
import OfficeLocation from "./offices/offices";

import './greybox.scss'

export default () => {
    return (
        <>
            <h3>Let's have a chat</h3>
            <p className="lets-chat-desc">Do you have a project or collaboration you would to talk about? Are you curious blah blahimplement extensive materials. Proactively brand prospective internal or "organic" sources. Continually parallel task functional ideas and quickly reinvent superior metrics.</p>
            <div className="greybox-contact">
                <p className="contact-info">
                    <a href="mailto:info@seventa.co.uk">info@seventa.co.uk</a>
                </p>
                <p className="contact-info">
                    <a href="tel:00441202237433">01202 237 433</a>
                </p>
            </div>
            <div className="brand-mobile">
                <SiteBrand />
            </div>
            <div className="footer-greybox__offices">
                <OfficeLocation />
            </div>
        </>
    )
}
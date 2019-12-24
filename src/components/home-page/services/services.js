import React from 'react'
import { useStaticQuery, graphql, Link } from 'gatsby'

import Arrow from '../../../../src/images/arrow-right.svg'

import './services.scss'

export default () => {
    const images = useStaticQuery(graphql`
        query {
            allFile(filter: {relativeDirectory: {eq: "services"}}, sort: {order: ASC, fields: name}) {
                nodes {
                    publicURL
                }
            }
        }
    `);

    return (
        <div className="services-section">
            <div className="services-heading">
                <h2>Services</h2>
                <p className="experience">
                    <span className="experience__years">7 years of<br /> experience</span>
                    <span className="experience__dash">————</span>
                    <span className="experience__text">
                        <span>At Seventa we take pride in knowing our customers.</span>
                        <span>Competenly leverage existing real-time information.</span>
                        <span>Dramatically orchestrate web-enabled nosql.</span>
                        <span>Monotonectally utilize bricks-andclicks architectures.</span>
                        <span>Estrate web-enabled nosql. Monotocectallu utilize</span>
                        <span>bricks-and-clicks archtectures.</span>
                    </span>
                </p>
            </div>
            <div className="services-cards">
                <div className="services-cards__item">
                    <Link to="/brand-activation"><img src={images.allFile.nodes[0].publicURL} alt="Brand activation" /></Link>
                    <h3><Link to="/brand-activation">Brand activation</Link></h3>
                    <p>At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.</p>
                    <Link to="/brand-activation"><Arrow /></Link>
                </div>
                <div className="services-cards__item">
                    <Link to="/brand-activation"><img src={images.allFile.nodes[1].publicURL} alt="Conferences" /></Link>
                    <h3><Link to="/conferences">Conferences</Link></h3>
                    <p>At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.</p>
                    <Link to="/brand-activation"><Arrow /></Link>
                </div>
                <div className="services-cards__item">
                    <Link to="/brand-activation"><img src={images.allFile.nodes[2].publicURL} alt="Event production" /></Link>
                    <h3><Link to="/event-production">Event production</Link></h3>
                    <p>At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.</p>
                    <Link to="/brand-activation"><Arrow /></Link>
                </div>
                <div className="services-cards__item">
                    <Link to="/brand-activation"><img src={images.allFile.nodes[3].publicURL} alt="Event management" /></Link>
                    <h3><Link to="/event-management">Event management</Link></h3>
                    <p>At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.</p>
                    <Link to="/brand-activation"><Arrow /></Link>
                </div>
                <div className="services-cards__item">
                    <Link to="/brand-activation"><img src={images.allFile.nodes[4].publicURL} alt="Venue sourcing" /></Link>
                    <h3><Link to="/venue-sourcing">Venue sourcing</Link></h3>
                    <p>At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.</p>
                    <Link to="/brand-activation"><Arrow /></Link>
                </div>
            </div>
        </div>
    )
}
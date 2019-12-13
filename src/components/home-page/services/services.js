import React from 'react'

import { useStaticQuery, graphql } from 'gatsby'

//import ServiceItem from './service-item/service-item'
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
    `)

    // const services = [
    //     {
    //         title: 'Brand activation',
    //         description: 'At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.',
    //     },
    //     {
    //         title: 'Conferences',
    //         description: 'At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.',
    //     },
    //     {
    //         title: 'Event production',
    //         description: 'At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.',
    //     },
    //     {
    //         title: 'Event management',
    //         description: 'At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.',
    //     },
    //     {
    //         title: 'Venue sourcing',
    //         description: 'At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.',
    //     },
    // ]

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
                {/* {
                    services.map((item, index) => (
                        images.allFile.nodes[1]
                        ? <ServiceItem 
                                imgSrc={images.allFile.nodes[index].childImageSharp.fluid.src}
                                imgSrcSet={images.allFile.nodes[index].childImageSharp.fluid.srcSet}
                                title={services.title}
                                description={services.description}
                                key={index}
                            />
                        : null
                    ))
                } */}
                <div className="services-cards__item">
                    <img src={images.allFile.nodes[0].publicURL} alt="Brand activation" />
                    <h3>Brand activation</h3>
                    <p>At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.</p>
                    <Arrow />
                </div>
                <div className="services-cards__item">
                    <img src={images.allFile.nodes[1].publicURL} alt="Conferences" />
                    <h3>Conferences</h3>
                    <p>At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.</p>
                    <Arrow />
                </div>
                <div className="services-cards__item">
                    <img src={images.allFile.nodes[2].publicURL} alt="Event production" />
                    <h3>Event production</h3>
                    <p>At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.</p>
                    <Arrow />
                </div>
                <div className="services-cards__item">
                    <img src={images.allFile.nodes[3].publicURL} alt="Event management" />
                    <h3>Event management</h3>
                    <p>At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.</p>
                    <Arrow />
                </div>
                <div className="services-cards__item">
                    <img src={images.allFile.nodes[4].publicURL} alt="Venue sourcing" />
                    <h3>Venue sourcing</h3>
                    <p>At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.</p>
                    <Arrow />
                </div>
            </div>
        </div>
    )
}
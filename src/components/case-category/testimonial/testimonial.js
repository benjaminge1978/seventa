import React from "react"

import './testimonial.scss'

export default () => (
    <div className="testimonial">
        <div className="testimonial__left">
            <span className="testimonial-label">Testimonial ——</span>
        </div>
        <div className="testimonial__inner">
            <p className="testimonial__heading">What do our clients say</p>
            <div className="testimonial__content">
                <p className="testimonial__text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci, commodi cumque dicta dolores excepturi illum, inventore iure laudantium molestias necessitatibus odit officia pariatur rerum tenetur!</p>
                <p className="testimonial__author">Lorem ipsum dolor.</p>
            </div>
        </div>
    </div>
)
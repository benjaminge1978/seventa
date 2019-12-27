import React from "react";
import { Link } from "gatsby";
import Arrow from "../../../../src/images/arrow-right.svg";
import BrandActivationImage from "./brand-activation-image";
import ConferencesImage from "./conferences-image";
import EventProductionImage from "./event-producton-image";
import EventManagementImage from "./event-management-image";
import VenueSourcingImage from "./venue-sourcing-image";
import "./services.scss";

export default () => (
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
                <Link to="/brand-activation">
                    <BrandActivationImage />
                </Link>
                <h3><Link to="/brand-activation">Brand activation</Link></h3>
                <p>At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.</p>
                <Link to="/brand-activation"><Arrow /></Link>
            </div>
            <div className="services-cards__item">
                <Link to="/conferences">
                    <ConferencesImage />
                </Link>
                <h3><Link to="/conferences">Conferences</Link></h3>
                <p>At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.</p>
                <Link to="/conferences"><Arrow /></Link>
            </div>
            <div className="services-cards__item">
                <Link to="/event-production">
                    <EventProductionImage />
                </Link>
                <h3><Link to="/event-production">Event production</Link></h3>
                <p>At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.</p>
                <Link to="/event-production"><Arrow /></Link>
            </div>
            <div className="services-cards__item">
                <Link to="/event-management">
                    <EventManagementImage />
                </Link>
                <h3><Link to="/event-management">Event management</Link></h3>
                <p>At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.</p>
                <Link to="/event-management"><Arrow /></Link>
            </div>
            <div className="services-cards__item">
                <Link to="/venue-sourcing">
                    <VenueSourcingImage />
                </Link>
                <h3><Link to="/venue-sourcing">Venue sourcing</Link></h3>
                <p>At Seventa we take pride in knowing our customers. Competently leverage existing real-time information.</p>
                <Link to="/venue-sourcing"><Arrow /></Link>
            </div>
        </div>
    </div>
)
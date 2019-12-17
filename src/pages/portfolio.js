import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeading from "../components/page-heading/page-heading";

import "./scss/portfolio.scss";

export default () => {
    return (
        <Layout className="portfolio-page">
            <SEO title="Portfolio"/>
            <PageHeading
                pageName="Portfolio"
                pageTitle="Here is the title about the portfolio"
                description="At Seventa we take pride in knowing our customers. Completely leverage existing real-time information. Dramatically orchestrate web-enabled mosql."
            >
                <ul className="portfolio-heading-links">
                    <li><Link to="/brand-activation">Brand activation</Link></li>
                    <li><Link to="/conferences">Conferences</Link></li>
                    <li><Link to="/event-production">Event production</Link></li>
                    <li><Link to="/event-management">Event management</Link></li>
                    <li><Link to="/venue-sourcing">Venue sourcing</Link></li>
                </ul>
            </PageHeading>
        </Layout>
    );
}
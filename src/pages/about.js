import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeading from "../components/page-heading/page-heading";

import "./scss/about.scss";

export default () => {
    return (
        <Layout className="about-page-layout">
            <SEO title="About"/>
            <PageHeading
                pageName="About us"
                pageTitle="We are the team that does something"
                description="At Seventa we take pride in knowing our customers. Completely leverage existing real-time information. Dramatically orchestrate web-enabled mosql."
            />
        </Layout>
    );
}
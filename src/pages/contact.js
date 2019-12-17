import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeading from "../components/page-heading/page-heading";

export default () => {
    return (
        <Layout>
            <SEO title="Contact"/>
            <PageHeading
                pageName="Contact us"
                pageTitle="Contact us"
                description="At Seventa we take pride in knowing our customers. Completely leverage existing real-time information. Dramatically orchestrate web-enabled mosql."
                className="contact-page-heading"
            />
        </Layout>
    );
}
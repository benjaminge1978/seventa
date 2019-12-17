import React from "react";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeading from "../components/page-heading/page-heading";

import "./scss/blog.scss";

export default () => {
    return (
        <Layout className="blog-page">
            <SEO title="Blog"/>
            <PageHeading
                pageName="Blog"
                pageTitle="The Seventa blog"
                description="At Seventa we take pride in knowing our customers. Completely leverage existing real-time information. Dramatically orchestrate web-enabled mosql."
                className="blog-page-heading"
            />
        </Layout>
    );
}
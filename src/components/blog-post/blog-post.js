import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../seo";

import "./blog-post.scss";

export default ({data}) => {
    const { title, excerpt, content } = data.contentfulPost;
    return (
        <Layout className="blog-post-single">
            <SEO title={title} />
        </Layout>
    );
};

export const query = graphql`
    query BlogPostQuery($id: String) {
        contentfulPost(id: {eq: $id}) {
            title
            excerpt
            content {
                childContentfulRichText {
                    html
                }
            }
        }
    }
`;
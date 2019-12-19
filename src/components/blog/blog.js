import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../seo";
import PageHeading from "../page-heading/page-heading";
import Pagination from "./pagination/pagination";
import BlogPostPreview from "./blog-post-preview/blog-post-preview";
import ContainerLabelled from "../container-labelled/container-labelled";
import Arrow from "../../images/arrow-down.svg";

import "./blog.scss";

export default ({data, pageContext}) => {
    const posts = data.allContentfulPost.nodes;

    return (
        <Layout className="blog-page">
            <SEO title="Blog"/>
            <PageHeading
                pageName="Blog"
                pageTitle="The Seventa blog"
                description="At Seventa we take pride in knowing our customers. Completely leverage existing real-time information. Dramatically orchestrate web-enabled mosql."
                className="blog-page-heading"
            />
            {
                posts
                ?   <>
                        <ContainerLabelled label={<Arrow />} className="blog-posts-section" innerClassName="blog-page__posts">
                            {
                                posts.map((post, index) => (
                                    <BlogPostPreview
                                        key={index}
                                        title={post.title}
                                        slug={post.slug}
                                        thumbSrc={post.thumbnail.fixed.src}
                                        excerpt={post.excerpt}
                                        date={post.createdAt}
                                    />
                                ))
                            }
                        </ContainerLabelled>
                        <Pagination
                            current={pageContext.currPage}
                            maxPages={pageContext.pagesCount}
                        />
                    </>

                :   <div className="blog-page__no-posts">
                        <h2>Posts not found!</h2>
                    </div>
            }
        </Layout>
    );
}

export const query = graphql`
    query BlogPageQuery($skip: Int, $limit: Int = 1) {
        allContentfulPost(skip: $skip, limit: $limit) {
            nodes {
                title
                slug
                createdAt(formatString: "DD.MM.YYYY")
                thumbnail {
                    fixed(width: 740, height: 580) {
                        src
                    }
                }
                excerpt
            }
        }
    }
`;
import React from "react";
import { graphql } from "gatsby";
import Layout from "../layout";
import SEO from "../seo";
import PageHeading from "../page-heading/page-heading";
import ContainerLabelled from "../container-labelled/container-labelled";
import ArrowLeft from "../../images/arrow-left.svg";
import { BLOCKS } from '@contentful/rich-text-types';
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";
import FamiliarPostsLinks from "./familiar-posts-links";

import "./blog-post.scss";

export default ({data, pageContext}) => {
    const { prevPost, nextPost } = pageContext;
    const { title, excerpt, content, createdAt, thumbnail, author } = data.contentfulPost;

    return (
        <Layout className="blog-post-single">
            <SEO title={title} />
            <PageHeading
                className="blog-post-single__heading"
                pageName={`${createdAt} by ${author.name}`}
                pageTitle={title}
            >
                <p>{excerpt}</p>
            </PageHeading>
            <ContainerLabelled
                label={<ArrowLeft />}
                className="blog-post-single__thumbnail"
                innerClassName="blog-post-img-wrapper"
            >
                <img src={thumbnail.fixed.src} alt={title} />
            </ContainerLabelled>
            <div className="blog-post-single__content" dangerouslySetInnerHTML={{
                __html: documentToHtmlString(content.json, {
                    renderNode: {
                        [BLOCKS.EMBEDDED_ASSET]: (node, text) => `<p><img src=${node.data.target.fields.file['en-US'].url} alt=${node.data.target.fields.file['en-US'].url} /></p>`,
                    },
                }),
            }} />
            {
                prevPost || nextPost
                ?   <FamiliarPostsLinks
                        prevPost={prevPost}
                        nextPost={nextPost}
                    />
                : null
            }
        </Layout>
    );
};

export const query = graphql`
    query BlogPostQuery($id: String) {
        contentfulPost(id: {eq: $id}) {
            title
            excerpt
            content {
                json
            }
            createdAt(formatString: "DD.MM.YYYY")
            thumbnail {
                fixed(width: 1500, height: 700) {
                    src
                }
            }
            author {
                name
            }
        }
    }
`;
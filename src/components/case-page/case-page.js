import React from "react";
import { graphql } from "gatsby";

import Layout from "../layout";
import SEO from "../seo";
import SeeMore from "./see-more/see-more";
import PageHeading from "../page-heading/page-heading";
import ContainerLabelled from "../container-labelled/container-labelled";
import Arrow from "../../images/arrow-left.svg";

import "./case-page.scss";

const CasePage = ({data}) => {
    const caseItem = data.contentfulCases,
        category = caseItem.caseCategories ? caseItem.caseCategories[0] : null,
        seeMoreNodes = data.allContentfulCases.nodes;

    return (
        <Layout>
            <SEO title={caseItem.title} />
            <div className="case-item">
                <PageHeading
                    pageName={category.name}
                    pageTitle={caseItem.title}
                >
                    {
                        caseItem.services
                        ?   <div className="services-list">
                                <p className="service-title">Service</p>
                                <ul>{caseItem.services.services.split('\n').map((service, index) => service ? <li key={index}>{service}</li> : null)}</ul>
                            </div>
                        : null
                    }
                </PageHeading>
                <ContainerLabelled label={<Arrow />} className="case-item__thumbnail" >
                    <img src={caseItem.thumbnail.fixed.src} alt={caseItem.title} />
                </ContainerLabelled>
                {
                    seeMoreNodes
                    ?   <ContainerLabelled className="section--see-more">
                            <SeeMore
                                cases={seeMoreNodes}
                                catName={category.name}
                            />
                        </ContainerLabelled>
                    : null
                }
            </div>
        </Layout>
    );
};

export const query = graphql`
    query CaseQuery($id: String, $categoryID: String) {
        contentfulCases(id: {eq: $id}) {
            title
            thumbnail {
                fixed(width: 1600, height: 850) {
                    src
                }
                fluid(maxWidth: 1600, maxHeight: 860) {
                    srcSet
                    src
                }
            }
            caseCategories {
                categoryTitle
                slug
                name
            }
            thumb_excerpt
            content {
                childContentfulRichText {
                    html
                }
            }
            services {
                services
            }
        }
        allContentfulCases(filter: {caseCategories: {elemMatch: {id: {eq: $categoryID}}}, id: {ne: $id}}, limit: 3) {
            nodes {
                slug
                title
                thumbnail {
                    fixed(width: 600, height: 600) {
                        src
                    }
                }
                caseCategories {
                    name
                    slug
                }
            }
        }
    }
`;

export default CasePage;
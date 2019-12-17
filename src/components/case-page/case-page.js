import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout"
import SEO from "../seo"
import SeeMore from "./see-more/see-more"
import Arrow from "../../images/arrow-left.svg"

import "./case-page.scss"

const CasePage = ({data}) => {
    const caseItem = data.contentfulCases,
        category = caseItem.caseCategories ? caseItem.caseCategories[0] : null,
        seeMoreNodes = data.allContentfulCases.nodes,
        services = caseItem.services.services;

    console.log(caseItem.thumbnail);

    return (
        <Layout>
            <SEO title={caseItem.title} />
            <div className="case-item">
                <div className="case-item__heading">
                    <p className="category-name">{category.name}</p>
                    <h1>{caseItem.title}</h1>
                    <div className="services-list">
                        <p className="service-title">Service</p>
                        {
                            services
                                ? <ul>{services.split('\n').map((service, index) => service ? <li key={index}>{service}</li> : null)}</ul>
                                : null
                        }
                    </div>
                </div>
                <div className="section-labelled case-item__thumbnail">
                    <div className="section-labelled">
                        <div className="section-labelled__label">
                            <Arrow />
                        </div>
                        <div className="section-labelled__inner">
                            <img src={caseItem.thumbnail.fixed.src} alt={caseItem.title} />
                        </div>
                    </div>
                </div>
                {
                    seeMoreNodes
                    ? <SeeMore
                            cases={seeMoreNodes}
                            catName={category.name}
                        />
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

export default CasePage
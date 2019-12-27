import React from "react";
import { graphql } from "gatsby";

import Layout from "../layout";
import SEO from "../seo";
import SeeMore from "./see-more/see-more";
import PageHeading from "../page-heading/page-heading";
import ContainerLabelled from "../container-labelled/container-labelled";
import SectionHeading from "../section-heading/section-heading";
import LongDashText from "../long-dash-text/long-dash-text";
import Arrow from "../../images/arrow-left.svg";

import "./case-page.scss";

const CasePage = ({data}) => {
    const caseItem = data.contentfulCases,
        category = caseItem.caseCategories ? caseItem.caseCategories[0] : null,
        seeMoreNodes = data.allContentfulCases.nodes,
        { bigImage, thumbnail, services, title, imagesRow, section1Subtitle, section1Title, section1Content, section2Subtitle, section2Title, section2Content, section3Subtitle, section3Title, section3Content, section3Image } = caseItem;

    console.log(seeMoreNodes);

    return (
        <Layout className="case-page-layout">
            <SEO title={caseItem.title} />
            <div className="case-item">
                <PageHeading
                    pageName={category.name}
                    pageTitle={title}
                    className="case-item__heading"
                >
                    {
                        services && services.hasOwnProperty('services')
                        ?   <div className="services-list">
                                <p className="service-title">Service</p>
                                <ul>{services.services.split("\n").map((service, index) => service ? <li key={index}>{service}</li> : null)}</ul>
                            </div>
                        : null
                    }
                </PageHeading>
                {
                    'undefined' !== typeof thumbnail.fixed.src
                    ?   <ContainerLabelled label={<Arrow />} className="case-page-thumbnail">
                            <img src={thumbnail.fixed.src} alt={title} />
                        </ContainerLabelled>
                    : null
                }

                {
                    section1Subtitle && section1Title && section1Content
                    ?   <div className="case-page-text-1">
                            <SectionHeading
                                sectionName={section1Subtitle}
                                sectionTitle={section1Title}
                            >
                                <LongDashText>
                                    <div dangerouslySetInnerHTML={{__html: section2Content.childContentfulRichText.html}} />
                                </LongDashText>
                            </SectionHeading>
                        </div>
                    : null
                }

                {
                    imagesRow && imagesRow.length
                    ?   <div className="case-page-images-row">
                            {
                                imagesRow.map((image, index) => (
                                    <div key={index} className="case-page-images-row__item">
                                        <img src={image.fixed.src} alt="dfdf"/>
                                    </div>
                                ))
                            }
                        </div>
                    : null
                }

                {
                    section2Subtitle && section2Title && section2Content
                        ?   <div className="case-page-text-2">
                                <SectionHeading
                                    sectionName={section2Subtitle}
                                    sectionTitle={section2Title}
                                >
                                    <LongDashText>
                                        <div dangerouslySetInnerHTML={{__html: section2Content.childContentfulRichText.html}} />
                                    </LongDashText>
                                </SectionHeading>
                            </div>
                        : null
                }

                {
                    bigImage
                    ?   <ContainerLabelled className="case-page-big-image">
                            <div className="case-page-big-image__wrapper">
                                <img src={bigImage.fixed.src} alt="asdasd"/>
                            </div>
                        </ContainerLabelled>
                    : null
                }

                {
                    section3Subtitle && section3Title && section3Content && section3Image
                    ?   <div className="case-page-text-3">
                            <div className="case-page-text-3__image">
                                <img src={section3Image.fixed.src} alt="asdasda"/>
                            </div>
                            <div className="case-page-text-3__content">
                                <SectionHeading
                                    sectionName={section3Subtitle}
                                    sectionTitle={section3Title}
                                >
                                    <LongDashText>
                                        <div dangerouslySetInnerHTML={{__html: section3Content.childContentfulRichText.html}} />
                                    </LongDashText>
                                </SectionHeading>
                            </div>
                        </div>
                    : null
                }

                {
                    seeMoreNodes && seeMoreNodes.length
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
            imagesRow {
                fixed(width: 570, height: 570) {
                    src
                }
            }
            section1Title
            section2Subtitle
            section2Title
            section3Subtitle
            section3Title
            section3Content {
                childContentfulRichText {
                    html
                }
            }
            section2Content {
                childContentfulRichText {
                    html
                }
            }
            section3Image {
                fixed(width: 680, height: 730) {
                    src
                }
            }
            bigImage {
                fixed(width: 1300) {
                    src
                }
            }
            section1Content {
                childContentfulRichText {
                    html
                }
            }
            section1Subtitle
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
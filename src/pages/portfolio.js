import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import PageHeading from "../components/page-heading/page-heading";
import ContainerLabelled from "../components/container-labelled/container-labelled";
import Arrow from "../images/arrow-down.svg";
import PortfolioItem from "../components/portfolio/portfolio-item";

import "./scss/portfolio.scss";

export default () => {
    const caseCategories = useStaticQuery(graphql`
        query CaseCategoriesQuery {
            allContentfulCaseCategory {
                nodes {
                    name
                    slug
                    image {
                        fixed(width: 700, height: 540) {
                            src
                        }
                        title
                    }
                    description {
                        childContentfulRichText {
                            html
                        }
                    }
                }
            }
        }
    `);

    if ( caseCategories.errors ) {
        return null;
    }

    const categories = caseCategories.allContentfulCaseCategory.nodes;

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
            {
                categories
                ?   <ContainerLabelled label={<Arrow />} className="portfolio-section" >
                        <div className="portfolio-list">
                            {
                                categories.map((category, index) => (
                                    <Link className="portfolio-category" to={`/${category.slug}`} key={index}>
                                        <PortfolioItem
                                            title={category.name}
                                            thumbSrc={category.image.fixed.src}
                                            excerpt={category.description.childContentfulRichText.html}
                                        />
                                    </Link>
                                ))
                            }
                        </div>
                    </ContainerLabelled>
                : null
            }
        </Layout>
    );
}
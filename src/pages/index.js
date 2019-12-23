import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import SEO from "../components/seo";
import ContainerLabelled from "../components/container-labelled/container-labelled";
import Banner from "../components/home-page/banner/banner";
import Promo from "../components/home-page/promo/promo";
import Cases from '../components/home-page/cases/cases';
import Customers from "../components/home-page/customers/customers";
import Services from '../components/home-page/services/services';

const IndexPage = ({ data }) => {
    return (
        <Layout>
            <SEO title="Home" />
            <Banner />
            <Promo />
            <ContainerLabelled className="cases-section" label={<span className="section-label">Cases ——</span>}>
                <Cases data={data}/>
            </ContainerLabelled>
            <Services />
            <ContainerLabelled className="customers-section" label={<span className="section-label">Customers ——</span>}>
                <Customers />
            </ContainerLabelled>
        </Layout>
    );
};

export default IndexPage;

export const query = graphql`
    query IndexPageQuery {
        allContentfulCaseCategory(sort: {fields: name, order: ASC}) {
            edges {
                node {
                    slug
                    id
                    name
                    cases {
                        thumbnail {
                            fixed {
                                src
                            }
                        }
                        id
                        title
                        thumb_excerpt
                        slug
                    }
                }
            }
        }
    }
`;

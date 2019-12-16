import React from "react"
import { useStaticQuery, graphql } from 'gatsby'
import Layout from "../layout"
import SEO from "../seo"

export default () => {
    const caseQuery = useStaticQuery(graphql`
        query caseQuery($id: String) {
            contentfulCases(id: {eq: $id}) {
                slug
                title
            }
        }
    `);

    const currentCase = caseQuery.contentfulCases;

    return (
        <Layout>
            <SEO title={currentCase.title}/>
        </Layout>
    );
}
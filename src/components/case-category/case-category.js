import React from "react"
import { graphql } from "gatsby"

import Layout from "../layout"
import SEO from "../seo";
import CaseItem from "./case-item/case-item"
import Testimonial from "./testimonial/testimonial"
import Arrow from "../../images/arrow-down.svg"

import './case-category.scss'

export default ({data}) => {
    const category = data.contentfulCaseCategory;
    const testimonial = category.testimonials ? category.testimonials[0] : null;
    console.log(testimonial);

    return (
        <Layout>
            <SEO title={category.name}/>
            <div className="case-category__heading">
                <p className="category-name">{category.name}</p>
                <h1 className="category-title">{category.categoryTitle}</h1>
                <p className="category-description" dangerouslySetInnerHTML={{__html: category.childContentfulCaseCategoryDescriptionRichTextNode.childContentfulRichText.html}} />
            </div>
            {
                category.cases
                    ? <div className="case-category__content">
                            <div className="case-category__left">
                                <Arrow />
                            </div>
                            <div className="case-category__inner">
                                <div className="category-page-cases">
                                    {
                                        category.cases.map((caseItem, index) => (
                                            <CaseItem
                                                key={index}
                                                slug={caseItem.slug}
                                                imgSrc={caseItem.thumbnail.fixed.src}
                                                caseTitle={caseItem.title}
                                                categories={caseItem.caseCategories}
                                            />)
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    : null
            }
            {
                testimonial
                    ? <div className="testimonial-section">
                        <Testimonial
                            author={testimonial.author}
                            text={testimonial.childContentfulTestimonialsTextRichTextNode.childContentfulRichText.html}
                        />
                    </div>
                    : null
            }
        </Layout>
    );
}

export const query = graphql`
    query CaseCategoryQuery($id: String) {
        contentfulCaseCategory(id: {eq: $id}, testimonials: {elemMatch: {bindToCategory: {id: {eq: $id}}}}) {
            cases {
                id
                title
                slug
                thumbnail {
                    fixed(width: 600, height: 600) {
                        src
                    }
                }
                caseCategories {
                    slug
                    name
                }
            }
            id
            name
            slug
            categoryTitle
            childContentfulCaseCategoryDescriptionRichTextNode {
                childContentfulRichText {
                    html
                }
            }
            testimonials {
                author
                childContentfulTestimonialsTextRichTextNode {
                    childContentfulRichText {
                        html
                    }
                }
            }
        }
    }
`;
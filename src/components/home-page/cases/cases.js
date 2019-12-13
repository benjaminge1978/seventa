import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import Case from '../../case/case'

import './cases.scss'

export default () => {
    const casesData = useStaticQuery(graphql`
        {
          allContentfulCaseCategory(sort: {fields: name}) {
            nodes {
              name
              id
              cases {
                title
                id
                thumb_excerpt
                thumbnail {
                  fixed {
                    src
                  }
                }
              }
            }
          }
        }
    `);

    return (
        <div className="cases-section">
            <div className="cases-section__left">
                <span className="section-label">Cases ——</span>
            </div>
            <div className="cases-section__inner">
                <div className="cases-list">
                    {
                        casesData.allContentfulCaseCategory.nodes.map((category, index) => {
                            if ( ! category.cases.length ) {
                                return ''
                            }

                            const firstCase = category.cases[0]

                            return (
                                <Case
                                    key={index}
                                    index={index}
                                    category={category.name}
                                    src={firstCase.thumbnail.fixed.src}
                                    title={firstCase.title}
                                    thumbDesc={firstCase.thumb_excerpt}
                                />
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}
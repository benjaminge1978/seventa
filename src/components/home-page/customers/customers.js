import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'

import CustomerItem from './customer-item/customer-item'

import './customers.scss'

export default () => {
    const customers = useStaticQuery(graphql`
        query {
            allContentfulCustomers {
                nodes {
                    logo {
                        title
                        fixed {
                            src
                        }
                    }
                }
            }
        }
    `)

    if (!customers.allContentfulCustomers.nodes.length) {
        return null
    }

    return (
        <div className="cuctomers-section">
            <div className="cuctomers-section__left">
                <span className="section-label">Customers ——</span>
            </div>
            <div className="cuctomers-section__inner">
                <h3>Some of our Customers</h3>
                <div className="customers-row">
                    {
                        customers.allContentfulCustomers.nodes.map((customer, index) => (
                            <CustomerItem 
                                logo={customer.logo.fixed.src}
                                title={customer.logo.title}  
                                key={index} 
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
import React from "react";
import { useStaticQuery, graphql } from "gatsby";

import CustomerItem from "./customer-item/customer-item";

import "./customers.scss";

export default () => {
    const customers = useStaticQuery(graphql`
        query {
            allContentfulCustomers {
                nodes {
                    logo {
                        title
                        fluid(quality: 80, maxHeight: 80) {
                            base64
                            sizes
                            src
                            srcSet
                            srcSetWebp
                            srcWebp
                            tracedSVG
                        }
                    }
                }
            }
        }
    `);

    if (!customers.allContentfulCustomers.nodes.length) {
        return null
    }

    return (
        <>
            <h3>Some of our Customers</h3>
            <div className="customers-row">
                {
                    customers.allContentfulCustomers.nodes.map((customer, index) => (
                        <CustomerItem
                            logo={customer.logo}
                            key={index}
                        />
                    ))
                }
            </div>
        </>
    );
}
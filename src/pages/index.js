import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Banner from "../components/home-page/banner/banner"
import Promo from "../components/home-page/promo/promo"
import Cases from '../components/home-page/cases/cases'
import Customers from "../components/home-page/customers/customers"
import Services from '../components/home-page/services/services'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Banner />
    <Promo />
     <Cases />
    <Services />
    <Customers />
  </Layout>
);

export default IndexPage

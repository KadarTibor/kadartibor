import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Index = ({location}) => {
  const siteTitle = 'Kadar Tibor';

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Home" />
    </Layout>
  )
}

export default Index
import React from "react"

// can't shadow with this method... https://www.gatsbyjs.org/blog/2019-04-29-component-shadowing/
import Layout from '../components/Layout'

export default props => (
  <Layout>
    <h1>Hello, from the Jenny theme!</h1>
  </Layout>
)
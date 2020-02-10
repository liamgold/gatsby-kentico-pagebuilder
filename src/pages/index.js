import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1>Dancing Goat - pages with some example content on:</h1>
    <ul>
      <li>
        <Link to="/Home/">Go to Dancing Goat Home</Link>
      </li>
      <li>
        <Link to="/Landing-pages/Coffee-samples/">Go to Coffee samples</Link>
      </li>
      <li>
        <Link to="/Contacts/">Go to Contacts</Link>
      </li>
    </ul>
    <hr />
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </Layout>
)

export default IndexPage

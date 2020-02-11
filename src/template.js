import React from "react"
import { Link } from "gatsby"
import Layout from "./components/layout"
import EditableArea from "./components/kentico/EditableArea"

const WithContext = ({ pageContext }) => {
  const pageBuilderContext = Object.entries(pageContext)[0]

  if (!pageBuilderContext) {
    return (
      <Layout>
        <p>No page builder content found!</p>
        <Link to="/">Go back to the homepage</Link>
      </Layout>
    )
  }

  const editableAreas = pageBuilderContext[1]

  return (
    <Layout>
      {editableAreas &&
        editableAreas.map(area => (
          <EditableArea key={area.identifier} area={area} />
        ))}
      <Link to="/">Go back to the homepage</Link>
    </Layout>
  )
}

export default WithContext

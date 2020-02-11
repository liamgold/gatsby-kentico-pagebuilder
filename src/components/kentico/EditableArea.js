import React, { Fragment } from "react"
import Section from "./Section"

const EditableArea = ({ area }) => (
  <Fragment>
    {area.sections &&
      area.sections.map(section => (
        <Section key={section.identifier} section={section} />
      ))}
  </Fragment>
)

export default EditableArea

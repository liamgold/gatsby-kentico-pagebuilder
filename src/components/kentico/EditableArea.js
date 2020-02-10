import React from "react"
import Section from "./Section"

const EditableArea = ({ area }) => (
  <div>
    <h1>editableArea - {area.identifier}</h1>
    {area.sections &&
      area.sections.map(section => (
        <Section key={section.identifier} section={section} />
      ))}
  </div>
)

export default EditableArea

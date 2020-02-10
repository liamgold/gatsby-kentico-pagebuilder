import React from "react"
import Widget from "./Widget"

const Zone = ({ zone }) => (
  <div>
    <h3>zone - {zone.identifier}</h3>
    {zone.widgets &&
      zone.widgets.map(widget => (
        <Widget key={widget.identifier} widget={widget} />
      ))}
  </div>
)

export default Zone

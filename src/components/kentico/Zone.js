import React from "react"
import Widget from "./Widget"

const Zone = ({ zone }) => (
  <div>
    {zone.widgets &&
      zone.widgets.map(widget => (
        <Widget key={widget.identifier} widget={widget} />
      ))}
  </div>
)

export default Zone

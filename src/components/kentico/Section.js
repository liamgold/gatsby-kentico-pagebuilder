import React from "react"
import Zone from "./Zone"

const Section = ({ section }) => (
  <div>
    <h2>sections - {section.type}</h2>
    {section.zones &&
      section.zones.map(zone => <Zone key={zone.identifier} zone={zone} />)}
  </div>
)

export default Section

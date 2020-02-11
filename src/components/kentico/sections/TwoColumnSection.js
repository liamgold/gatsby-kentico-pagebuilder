import React from "react"
import Zone from "../Zone"

const TwoColumnSection = ({ zones }) => (
  <div style={{ display: "flex", color: "blue" }}>
    {zones && <Zone key={zones[0].identifier} zone={zones[0]} />}
    {zones && <Zone key={zones[1].identifier} zone={zones[1]} />}
  </div>
)

export default TwoColumnSection

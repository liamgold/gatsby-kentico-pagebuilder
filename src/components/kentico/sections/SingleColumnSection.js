import React from "react"
import Zone from "../Zone"

const SingleColumnSection = ({ zones }) => (
  <div style={{ color: "red" }}>
    {zones && <Zone key={zones[0].identifier} zone={zones[0]} />}
  </div>
)

export default SingleColumnSection

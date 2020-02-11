import React from "react"
import SingleColumnSection from "./sections/SingleColumnSection"
import TwoColumnSection from "./sections/TwoColumnSection"

const Section = ({ section }) => {
  switch (section.type) {
    case "DancingGoat.SingleColumnSection":
      return (
        <SingleColumnSection key={section.identifier} zones={section.zones} />
      )
    case "DancingGoat.TwoColumnSection":
      return <TwoColumnSection key={section.identifier} zones={section.zones} />
    default:
      return null
  }
}

export default Section

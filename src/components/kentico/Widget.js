import React from "react"
import RichText from "./widgets/RichText"

const Widget = ({ widget }) => {
  switch (widget.type) {
    case "DancingGoat.General.TextWidget":
      return (
        <RichText
          key={widget.variants[0].identifier}
          {...widget.variants[0].properties}
        />
      )
  }

  return (
    <div>
      <h4>widget - {widget.type}</h4>
    </div>
  )
}

export default Widget

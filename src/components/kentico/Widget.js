import React from "react"
import Articles from "./widgets/Articles"
import Banner from "./widgets/Banner"
import RichText from "./widgets/RichText"

const Widget = ({ widget }) => {
  switch (widget.type) {
    case "DancingGoat.HomePage.ArticlesWidget":
      return (
        <Articles
          key={widget.variants[0].identifier}
          {...widget.variants[0].properties}
        />
      )
    case "DancingGoat.HomePage.BannerWidget":
      return (
        <Banner
          key={widget.variants[0].identifier}
          {...widget.variants[0].properties}
        />
      )
    case "DancingGoat.General.TextWidget":
      return (
        <RichText
          key={widget.variants[0].identifier}
          {...widget.variants[0].properties}
        />
      )
    default:
      return (
        <div>
          WARNING: widget has not been created in Gatsby - {widget.type}
        </div>
      )
  }
}

export default Widget

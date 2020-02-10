import React from "react"

const RichText = ({ text }) => (
  <div
    dangerouslySetInnerHTML={{
      __html: text,
    }}
  ></div>
)

export default RichText

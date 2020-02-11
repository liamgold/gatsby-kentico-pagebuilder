import React from "react"

const BannerWidget = ({ image, linkTitle, text }) => (
  <section
    className="banner-section"
    style={{
      backgroundImage: `url('https://via.placeholder.com/1000x100/?text=${image[0].fileGuid}')`,
    }}
  >
    <h2 className="banner-heading">{linkTitle}</h2>
    <div className="banner-text">
      <p
        dangerouslySetInnerHTML={{
          __html: text,
        }}
      ></p>
    </div>
  </section>
)

export default BannerWidget

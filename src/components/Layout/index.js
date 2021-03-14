import React from "react"
import "./Layout.scss"

const Layout = ({ id, title, urlBg, colorBg, children }) => {
  return (
    <section
      style={{ background: `${urlBg ? `url(${urlBg})` : colorBg}` }}
      className="root-layout"
      id={id}
    >
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>{title ? title : "This is title"}</h3>
            <span className="separator"></span>
          </div>
          <div className="desc full">{children}</div>
        </article>
      </div>
    </section>
  )
}

export default Layout

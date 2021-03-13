import React from "react"
import "./Layout.scss"

const Layout = ({ title, descr, urlBg, colorBg }) => {
  return (
    <section
      className="root"
      style={{ background: `${urlBg ? `url(${urlBg})` : colorBg}` }}
    >
      <div className="wrapper">
        <article>
          <div className="title">
            <h3>{title ? title : "This is title"}</h3>
            <span className="separator"></span>
          </div>
          <div className="desc full">
            <p>{descr ? descr : "This is Description!"}</p>
          </div>
        </article>
      </div>
    </section>
  )
}

export default Layout

import React from "react"
import s from "./style.module.scss"
import cn from "classnames"

const Layout = ({ id, title, urlBg, colorBg, colorTitle, children }) => {
  return (
    <section
      className={s.root}
      id={id}
      style={{ background: `${urlBg ? `url(${urlBg})` : colorBg}` }}
    >
      <div className={s.wrapper}>
        <article>
          <div className={s.title} style={{ color: `${colorTitle}` }}>
            <h3>{title ? title : "This is title"}</h3>
            <span className={s.separator}></span>
          </div>
          <div className={cn(s.desc, s.full)}>{children}</div>
        </article>
      </div>
    </section>
  )
}

export default Layout

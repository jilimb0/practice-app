import React from "react"
import "./Header.scss"

const Header = ({ title, descr }) => {
  return (
    <header className="root-header">
      <div className="forest"></div>
      <div className="container">
        <h1>{title ? title : "This is title"}</h1>
        <p>{descr ? descr : "This is Description!"}</p>
      </div>
    </header>
  )
}

export default Header

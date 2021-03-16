import React from "react"
import "./Header.scss"

const Header = ({ title, descr, onClickButton }) => {
  const handeClick = () => {
    onClickButton && onClickButton("game")
  }
  return (
    <header className="root">
      <div className="forest"></div>
      <div className="container">
        <h1>{title ? title : "This is title"}</h1>
        <p>{descr ? descr : "This is Description!"}</p>
        <button onClick={handeClick}>Start Game</button>
      </div>
    </header>
  )
}

export default Header

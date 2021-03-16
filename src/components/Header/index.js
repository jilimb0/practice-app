import React from "react"
import s from "./style.module.scss"

const Header = ({ id, title, descr, onClickButton }) => {
  const handeClick = () => {
    onClickButton && onClickButton("game")
  }
  return (
    <header className={s.root} id={id}>
      <div className={s.forest}></div>
      <div className={s.container}>
        <h1>{title ? title : "This is title"}</h1>
        <p>{descr ? descr : "This is Description!"}</p>
        <button onClick={handeClick}>Start Game</button>
      </div>
    </header>
  )
}

export default Header

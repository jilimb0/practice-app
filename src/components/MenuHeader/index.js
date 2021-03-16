import { useState } from "react"

import burger from "./hamburger.svg"
import s from "./style.module.scss"
import Menu from "../Menu"
import NavBar from "../NavBar"

const MenuHeader = ({ onClickButton }) => {
  const [isNavBar, setNavbar] = useState(false)

  const handleClick = () => {
    setNavbar(!isNavBar)
  }

  const onClickMenu = (page) => {
    onClickButton && onClickButton(page)
  }

  return (
    <>
      <Menu onClickMenuPage={onClickMenu} />
      <img src={burger} className={s.hamburger} onClick={handleClick}></img>
      {isNavBar && <NavBar onClickNavBar={handleClick} />}
    </>
  )
}

export default MenuHeader

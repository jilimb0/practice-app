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
      <Menu
        onClickMenuPage={onClickMenu}
        handleMenu={handleClick}
        isNavBar={isNavBar}
      />
      <NavBar isNavBar={isNavBar} handleMenu={handleClick} />
    </>
  )
}

export default MenuHeader

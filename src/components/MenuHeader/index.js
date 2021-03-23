import { useState } from "react"

// import s from "./style.module.scss"
import Menu from "../Menu"
import NavBar from "../NavBar"

const MenuHeader = ({ bgActive }) => {
  const [isOpen, setOpen] = useState(null)

  const handleClickHamburger = () => {
    setOpen((prevState) => !prevState)
  }

  return (
    <>
      <Menu isOpen={isOpen} onClickHamburger={handleClickHamburger} />
      <NavBar
        isOpen={isOpen}
        bgActive={bgActive}
        onClickHamburger={handleClickHamburger}
      />
    </>
  )
}

export default MenuHeader

import { useHistory } from "react-router-dom"

import s from "./style.module.scss"
import cn from "classnames"

const NavBar = ({ isOpen, bgActive, onClickHamburger }) => {
  const history = useHistory()

  const handleClickButton = () => {
    history.push("/")
  }
  return (
    <nav className={cn(s.root, { [s.bgActive]: bgActive })}>
      <div className={s.navWrapper}>
        <p className={s.brand} onClick={handleClickButton}>
          LOGO
        </p>
        <div
          className={cn(s.menuButton, { [s.active]: isOpen })}
          onClick={onClickHamburger}
        >
          <span />
        </div>
      </div>
    </nav>
  )
}

export default NavBar

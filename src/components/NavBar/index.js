import s from "./style.module.scss"
import cn from "classnames"

const NavBar = ({ isNavBar, handleMenu }) => {
  return (
    <nav className={s.root}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <a
          className={cn(s.menuButton, { [s.active]: isNavBar })}
          href="#menu"
          onClick={handleMenu}
        >
          <span />
        </a>
      </div>
    </nav>
  )
}

export default NavBar

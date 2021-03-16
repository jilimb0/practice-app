import s from "./style.module.scss"

const NavBar = () => {
  return (
    <nav className={s.root}>
      <div className={s.navWrapper}>
        <p className={s.brand}>LOGO</p>
        <a className={`${s.menuButton}, ${s.active}`}>
          <span />
        </a>
      </div>
    </nav>
  )
}

export default NavBar

import { Link } from "react-router-dom"
import s from "./style.module.scss"
import cn from "classnames"

const MENU = [
  { title: "HOME", to: "/" },
  { title: "GAME", to: "/game" },
  { title: "ABOUT", to: "/about" },
  { title: "CONTACT", to: "/contacts" },
]

const Menu = ({ onClickHamburger, isOpen }) => {
  return (
    <div
      className={cn(s.menuContainer, {
        [s.active]: isOpen === true,
        [s.deactive]: isOpen === false,
      })}
    >
      <div className={s.overlay} />
      <div>
        <ul>
          {MENU.map(({ to, title }, index) => {
            return (
              <li key={index}>
                <Link to={to} onClick={onClickHamburger}>
                  {title}
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Menu

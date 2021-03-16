import s from "./style.module.scss"
import cn from "classnames"

const Menu = ({ onClickMenuPage, isNavBar, handleMenu }) => {
  const gamePage = () => {
    onClickMenuPage && onClickMenuPage("game")
  }
  const homePage = () => {
    onClickMenuPage && onClickMenuPage("app")
  }
  return (
    <div className={cn(s.menuContainer, { [s.active]: isNavBar })}>
      <div className={s.overlay} />
      <div className={s.menuItems}>
        <ul>
          <li>
            <a href="#welcome" onClick={homePage && handleMenu}>
              HOME
            </a>
          </li>
          <li>
            <a href="#game" onClick={gamePage}>
              GAME
            </a>
          </li>
          <li>
            <a href="#cards" onClick={handleMenu}>
              CARDS
            </a>
          </li>
          <li>
            <a href="#about" onClick={handleMenu}>
              ABOUT
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu

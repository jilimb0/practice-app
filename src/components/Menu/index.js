import s from "./style.module.scss"

const Menu = ({ onClickMenuPage }) => {
  const gamePage = () => {
    onClickMenuPage && onClickMenuPage("game")
  }
  const homePage = () => {
    onClickMenuPage && onClickMenuPage("app")
  }
  return (
    <div class={(s.menuContainer, s.active)}>
      <div class={s.overlay} />
      <div class={s.menuItems}>
        <ul>
          <li>
            <a href="#welcome" onClick={homePage}>
              HOME
            </a>
          </li>
          <li>
            <a href="#game" onClick={gamePage}>
              GAME
            </a>
          </li>
          <li>
            <a href="#about">ABOUT</a>
          </li>
          <li>
            <a href="#contact">CONTACT</a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Menu

import { useHistory } from "react-router-dom"
import s from "./style.module.scss"

const Header = ({ id, title, descr, onClickButton }) => {
  const history = useHistory()

  const handeClick = () => {
    history.push("/game")
  }

  return (
    <header className={s.root} id={id}>
      <div className={s.forest}></div>
      <div className={s.silhouette}></div>
      <div className={s.moon}></div>
      <div className={s.container}>
        <h1>{title ? title : "This is title"}</h1>
        <p>{descr ? descr : "This is Description!"}</p>
        <button onClick={handeClick}>Start Game</button>
      </div>
    </header>
  )
}

export default Header

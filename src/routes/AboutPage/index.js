import { useHistory } from "react-router-dom"

import s from "./style.module.scss"

const AboutPage = ({ onChangePage }) => {
  const history = useHistory()

  const handleClickButton = () => {
    history.push("/")
  }
  return (
    <>
      <div className={s.container}>
        <h1>This is About Page</h1>
        <button onClick={handleClickButton}>Home Page</button>
      </div>
    </>
  )
}

export default AboutPage

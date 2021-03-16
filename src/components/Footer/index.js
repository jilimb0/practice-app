import React from "react"
import s from "./style.module.scss"

const Footer = ({ title, descr }) => {
  return (
    <footer id="contact">
      <div className={s.wrapper}>
        <h3>THANKS FOR VISITING</h3>
        <p>© 2021 #ReactMarathon.</p>
      </div>
    </footer>
  )
}

export default Footer

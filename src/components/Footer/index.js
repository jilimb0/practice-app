import React from "react"
import "./Footer.scss"

const Footer = ({ title, descr }) => {
  return (
    <footer>
      <div className="wrapper">
        <h3>THANKS FOR VISITING</h3>
        <p>© 2021 #ReactMarathon.</p>
      </div>
    </footer>
  )
}

export default Footer

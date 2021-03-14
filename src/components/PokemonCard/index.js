import React, { useState } from "react"
import "./PokemonCard.scss"
import cardBack from "./img/card-back-side.jpg"

const PokemonCard = ({ name, img, id, type, values }) => {
  const [isActive, setActive] = useState(false)

  const handleClick = () => {
    isActive === false ? setActive(true) : setActive(false)
  }
  return (
    <div className="root-card" onClick={handleClick}>
      <div className={isActive ? "pokemonCard active" : "pokemonCard"}>
        <div className="cardFront">
          <div className="wrap front">
            <div className={`pokemon ${type}`}>
              <div className="values">
                <div className="count top">{values.top}</div>
                <div className="count right">{values.right}</div>
                <div className="count bottom">{values.bottom}</div>
                <div className="count left">{values.left}</div>
              </div>
              <div className="imgContainer">
                <img src={img} alt={name} />
              </div>
              <div className="info">
                <span className="number">#{id}</span>
                <h3 className="name">{name}</h3>
                <small className="type">
                  Type: <span>{type}</span>
                </small>
              </div>
            </div>
          </div>
        </div>

        <div className="cardBack">
          <div className="wrap back">
            <img src={cardBack} alt="Сard Backed" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default PokemonCard

import { useState } from "react"
import PokemonCard from "../../../../../../components/PokemonCard"
import cn from "classnames"

import s from "./style.module.scss"

const PlayerBoard = ({ player, cards, onClickCard, minimize }) => {
  const [isSelected, setSelected] = useState(null)

  return (
    <>
      {cards.map((item) => (
        <div
          key={item.id}
          className={cn(s.cardBoard, { [s.selected]: isSelected === item.id })}
          onClick={() => {
            setSelected(item.id)
            onClickCard && onClickCard({ player, ...item })
            console.log(player)
          }}
        >
          <PokemonCard
            key={item.id}
            name={item.name}
            img={item.img}
            id={item.id}
            type={item.type}
            values={item.values}
            isActive
            minimize={minimize}
          />
        </div>
      ))}
    </>
  )
}

export default PlayerBoard

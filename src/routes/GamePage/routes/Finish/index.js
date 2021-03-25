import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"

import PokemonCard from "../../../../components/PokemonCard"
import { PokemonContext } from "../../../../context/pokemonContext"

import PlayerFinish from "./PlayerFinish"
import s from "./style.module.scss"

const FinishPage = () => {
  const _ApiBase = "https://reactmarathon-api.netlify.app/api/"
  const { pokemons } = useContext(PokemonContext)
  const [player1, setPlayer1] = useState(() => {
    return Object.values(pokemons).map((item) => ({
      ...item,
      possession: "blue",
    }))
  })
  const [player2, setPlayer2] = useState([])
  const [chooseCard, setChooseCard] = useState(null)

  const history = useHistory()
  const handlePushToStart = () => {
    history.push("/game")
  }

  useEffect(async () => {
    const player2Response = await fetch(`${_ApiBase}create-player`)
    const player2Request = await player2Response.json()

    setPlayer2(() => {
      return player2Request.data.map((item) => ({
        ...item,
        possession: "red",
      }))
    })
  }, [])

  return (
    <div className={s.root}>
      <div className={s.playerOne}>
        <PlayerFinish
          player={1}
          cards={player1}
          onClickCard={(card) => setChooseCard(card)}
        />
      </div>

      <button onClick={handlePushToStart}>End Game</button>

      <div className={s.playerTwo}>
        <PlayerFinish
          player={2}
          cards={player2}
          onClickCard={(card) => setChooseCard(card)}
        />
      </div>
    </div>
  )
}

export default FinishPage

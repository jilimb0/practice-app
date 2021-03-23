import { useState, useEffect, useContext } from "react"

import PokemonCard from "../../../../components/PokemonCard"

import s from "./style.module.scss"
import { FireBaseContext } from "../../../../context/firebaseContext"
import { PokemonContext } from "../../../../context/pokemonContext"
import { useHistory } from "react-router-dom"

const StartPage = () => {
  const firebase = useContext(FireBaseContext)
  const pokemonsContext = useContext(PokemonContext)
  const history = useHistory()
  const [pokemons, setPokemons] = useState({})

  useEffect(() => {
    firebase.getPokemonSocket((pokemons) => {
      setPokemons(pokemons)
    })

    return () => firebase.offPokemonSocket()
  }, [])

  const handleActiveSelected = (key) => {
    const pokemon = { ...pokemons[key] }
    pokemonsContext.onSelectedPokemons(key, pokemon)
    setPokemons((prevState) => ({
      ...prevState,
      [key]: { ...prevState[key], selected: !prevState[key].selected },
    }))
  }

  const handleStartGameClick = () => {
    history.push("/game/board")
  }

  return (
    <>
      <div className={s.buttonWrap}>
        <button
          onClick={handleStartGameClick}
          disabled={Object.keys(pokemonsContext.pokemons).length < 5}
        >
          Start Game
        </button>
      </div>
      <div className={s.flex}>
        {Object.entries(pokemons).map(
          ([key, { name, img, id, type, values, selected }]) => (
            <PokemonCard
              className={s.card}
              key={key}
              name={name}
              img={img}
              id={id}
              type={type}
              values={values}
              isActive
              isSelected={selected}
              onClickCard={() => {
                if (
                  Object.keys(pokemonsContext.pokemons).length < 5 ||
                  selected
                ) {
                  handleActiveSelected(key)
                }
              }}
            />
          )
        )}
      </div>
    </>
  )
}

export default StartPage

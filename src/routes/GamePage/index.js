import { useHistory } from "react-router-dom"
import { useState, useEffect } from "react"
import database, { writeUserData, addNewPokemon } from "../../services/firebase"

import Layout from "../../components/Layout"
import PokemonCard from "../../components/PokemonCard"

import s from "./style.module.scss"

const GamePage = () => {
  const history = useHistory()
  const handleClickButton = () => {
    history.push("/")
  }

  const [pokemons, setPokemons] = useState({})

  useEffect(() => {
    database.ref("pokemons").once("value", (snapshot) => {
      setPokemons(snapshot.val())
    })
  }, [])

  const handleChangeActive = (itemId) => {
    setPokemons((prevState) => {
      return Object.entries(prevState).reduce((acc, item) => {
        const pokemon = { ...item[1] }
        // if (pokemon.active === false) {
        if (pokemon.id === itemId) {
          pokemon.active = true

          writeUserData(item[0], pokemon.active)
        }
        // } else {
        //   pokemon.active = false

        //   writeUserData(item[0], pokemon.active)
        // }
        acc[item[0]] = pokemon

        return acc
      }, {})
    })
  }

  let newPokemon = {
    abilities: ["keen-eye", "tangled-feet", "big-pecks"],
    base_experience: 122,
    height: 11,
    weight: 300,
    id: 17,
    img:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/17.png",
    name: "pidgeotto",
    stats: {
      hp: 63,
      attack: 60,
      defense: 55,
      "special-attack": 50,
      "special-defense": 50,
      speed: 71,
    },
    type: "normal",
    values: {
      top: 7,
      right: 5,
      bottom: 1,
      left: 2,
    },
  }

  const AddNewPokemon = () => {
    addNewPokemon(newPokemon)
  }

  return (
    <>
      <div className={s.container}>
        <button onClick={AddNewPokemon}>New Pokemon</button>
        <Layout id="cards" title="Cards" colorTitle="#FEFEFE" colorBg="#202736">
          <div className={s.flex}>
            {Object.entries(pokemons).map(
              ([key, { name, img, id, type, values, active }]) => (
                <PokemonCard
                  key={key}
                  name={name}
                  img={img}
                  id={id}
                  type={type}
                  values={values}
                  isActive={active}
                  onClickCard={handleChangeActive}
                />
              )
            )}
          </div>
        </Layout>
        <button onClick={handleClickButton}>Back Game</button>
      </div>
    </>
  )
}

export default GamePage

import Header from "./components/Header"
import Layout from "./components/Layout"
import Footer from "./components/Footer"
import POKEMONS from "./pokemons.json"
import "./App.css"

import bg1 from "./img/bg1.jpg"
import bg3 from "./img/bg3.jpg"
import PokemonCard from "./components/PokemonCard"

function App() {
  return (
    <>
      <Header />

      <Layout id="rules" title="Rules" urlBg={bg1}>
        <span>
          In the game two players face off against one another, one side playing
          as "blue", the other as "red" on a 3x3 grid.
        </span>
        <span>
          Each player has five cards in a hand and the aim is to capture the
          opponent's cards by turning them into the player's own color of red or
          blue.
        </span>
      </Layout>

      <Layout id="cards" title="Cards" colorTitle="#FEFEFE" colorBg="#202736">
        <div className="flex">
          {POKEMONS.map((item) => (
            <PokemonCard key={item.id} {...item} />
          ))}
        </div>
      </Layout>

      <Layout id="about" title="Full rules" urlBg={bg3}>
        <span>
          To win, a majority of the total ten cards played (including the one
          card that is not placed on the board) must be of the player's card
          color. To do this, the player must capture cards by placing a card
          adjacent to an opponent's card whereupon the 'ranks' of the sides
          where the two cards touch will be compared. If the rank of the
          opponent's card is higher than the player's card, the player's card
          will be captured and turned into the opponent's color. If the player's
          rank is higher, the opponent's card will be captured and changed into
          the player's color instead.
        </span>
      </Layout>

      <Footer />
    </>
  )
}
export default App

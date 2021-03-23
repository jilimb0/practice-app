import firebase from "firebase/app"
import "firebase/database"

const firebaseConfig = {
  apiKey: "AIzaSyClYeRHI_gBhWxSsjdhdAqquE-ODvI0kzk",
  authDomain: "pokemon-game-fbcf2.firebaseapp.com",
  databaseURL: "https://pokemon-game-fbcf2-default-rtdb.firebaseio.com",
  projectId: "pokemon-game-fbcf2",
  storageBucket: "pokemon-game-fbcf2.appspot.com",
  messagingSenderId: "667732462574",
  appId: "1:667732462574:web:68b09a57dfe78cb2851cff",
}

firebase.initializeApp(firebaseConfig)

class Firebase {
  constructor() {
    this.fire = firebase
    this.database = this.fire.database()
  }

  getPokemonSocket = (cb) => {
    this.database.ref("pokemons").on("value", (snapshot) => {
      cb(snapshot.val())
    })
  }

  offPokemonSocket = (cb) => {
    this.database.ref("pokemons").off("value", (snapshot) => {
      cb(snapshot.val())
    })
  }

  getPokemonsOnce = async () => {
    return await this.database
      .ref("pokemons")
      .once("value")
      .then((snapshot) => snapshot.val())
  }

  postPokemon = (key, pokemon) => {
    this.database.ref(`pokemons/${key}`).set(pokemon)
  }

  addNewPokemon(data) {
    const newKey = this.database.ref().child("pokemons").push().key
    this.database.ref("pokemons/" + newKey).set(data)
  }
}

export default Firebase

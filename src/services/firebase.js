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

export function writeUserData(pokemonId, active) {
  firebase
    .database()
    .ref("pokemons/" + pokemonId)
    .update({
      active: active,
    })
}

export function addNewPokemon(data) {
  const newKey = database.ref().child("pokemons").push().key
  database.ref("pokemons/" + newKey).set(data)
}

export const fire = firebase
export const database = firebase.database()

export default database

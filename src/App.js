import logo from "./logo.svg"
import "./App.css"
<<<<<<< Updated upstream

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
=======
import Header from "./components/Header"
import Layout from "./components/Layout"
import Footer from "./components/Footer"
import bg1 from "./img/bg1.jpg"
import bg3 from "./img/bg3.jpg"

function App() {
  return (
    <>
      <Header />
      <Layout urlBg={bg1} />
      <Layout colorBg="red" />
      <Layout urlBg={bg3} />
      <Footer />
    </>
>>>>>>> Stashed changes
  )
}

export default App

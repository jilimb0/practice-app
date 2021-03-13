import "./App.css"
import Header from "./components/Header/Header"
import Layout from "./components/Layout/Layout"
import Footer from "./components/Footer/Footer"
import bg1 from "./img/bg1.jpg"
import bg3 from "./img/bg3.jpg"

function App() {
  return (
    <>
      <Header />
      <Layout urlBg={bg1} />
      <Layout colorBg={"red"} />
      <Layout urlBg={bg3} />
      <Footer />
    </>
  )
}

export default App

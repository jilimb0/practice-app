const GamePage = ({ onChangePage }) => {
  const handeClick = () => {
    onChangePage && onChangePage("app")
  }
  return (
    <>
      <div className="">This is GamePage</div>
      <button onClick={handeClick}>Back Game</button>
    </>
  )
}

export default GamePage

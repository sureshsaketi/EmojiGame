import './index.css'

const Navbar = props => {
  const {topScore, score, isGameEnd} = props

  const gameEndClassName = isGameEnd ? 'game-end' : ''

  return (
    <div className="navbar-container">
      <div className="logo-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png"
          alt="emoji logo"
          className="logo"
        />
        <h1 className="emoji-heading">Emoji Game</h1>
      </div>
      <div className="score-container">
        <p className={`${gameEndClassName}`}>Score: {score}</p>
        <p id="top-score" className={`${gameEndClassName}`}>
          Top Score: {topScore}
        </p>
      </div>
    </div>
  )
}

export default Navbar

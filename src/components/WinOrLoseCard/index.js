import './index.css'

const WinOrLoseCard = props => {
  const {isWon, score, onClickPlayAgain} = props
  const imageUrl = isWon
    ? 'https://assets.ccbp.in/frontend/react-js/won-game-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/lose-game-img.png'

  const text = isWon ? 'You Won' : 'You Lose'
  const scoreText = isWon ? 'Best Score' : 'Score'

  return (
    <div className="win-lose-container">
      <div className="image-container">
        <img src={imageUrl} alt="win or lose" className="win-or-lose-image" />
      </div>
      <div className="scores-container">
        <h1 className="text">{text}</h1>
        <p className="score-text">{scoreText}</p>
        <p className="count">{score}/12</p>
        <div className="button-container">
          <button
            type="button"
            className="play-again-button"
            onClick={onClickPlayAgain}
          >
            Play Again
          </button>
        </div>
      </div>
    </div>
  )
}
export default WinOrLoseCard

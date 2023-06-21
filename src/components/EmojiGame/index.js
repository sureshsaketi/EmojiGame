/* 
Quick Tip 

- Use the below function in the EmojiGame Component to shuffle the emojisList every time when an emoji is clicked.

const shuffledEmojisList = () => {
  const {emojisList} = this.props
  return emojisList.sort(() => Math.random() - 0.5)
}

*/

import {Component} from 'react'

import EmojiCard from '../EmojiCard'
import Navbar from '../NavBar'
import WinOrLoseCard from '../WinOrLoseCard'

import './index.css'

class EmojiGame extends Component {
  state = {clickedEmojis: [], isGameEnd: false, topScore: 0}

  getShuffledEmojisList = () => {
    const {emojisList} = this.props
    return emojisList.sort(() => Math.random() - 0.5)
  }

  finishGameAndSetTopScore = newScore => {
    const {topScore} = this.state
    if (topScore < newScore) {
      this.setState({topScore: newScore})
    }
    this.setIsGameEnd(true)
  }

  setIsGameEnd = value => {
    this.setState({isGameEnd: value})
  }

  reStartGame = () => {
    this.setState({
      clickedEmojis: [],
      isGameEnd: false,
    })
  }

  onClickEmoji = emojiId => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isPresent = clickedEmojis.includes(emojiId)
    if (isPresent) {
      this.finishGameAndSetTopScore(clickedEmojis.length)
    } else {
      if (clickedEmojis.length === emojisList.length - 1) {
        this.finishGameAndSetTopScore(emojisList.length)
      }
      this.setState(prevState => ({
        clickedEmojis: [...prevState.clickedEmojis, emojiId],
      }))
    }
  }

  renderEmojisList = () => {
    const shuffledEmojisList = this.getShuffledEmojisList()
    return (
      <ul className="emojis-container">
        {shuffledEmojisList.map(eachEmoji => (
          <EmojiCard
            key={eachEmoji.id}
            emojisList={eachEmoji}
            updateEmojiImages={this.onClickEmoji}
          />
        ))}
      </ul>
    )
  }

  renderWinOrLose = () => {
    const {emojisList} = this.props
    const {clickedEmojis} = this.state
    const isWon = clickedEmojis.length === emojisList.length
    return (
      <WinOrLoseCard
        isWon={isWon}
        onClickPlayAgain={this.reStartGame}
        score={clickedEmojis.length}
      />
    )
  }

  render() {
    const {topScore, clickedEmojis, isGameEnd} = this.state

    return (
      <>
        <div className="app-container">
          <Navbar
            topScore={topScore}
            score={clickedEmojis.length}
            isGameEnd={isGameEnd}
          />
          <div className="emojis-outer-container">
            {isGameEnd ? this.renderWinOrLose() : this.renderEmojisList()}
          </div>
        </div>
      </>
    )
  }
}

export default EmojiGame

import './index.css'

const EmojiCard = props => {
  const {emojisList, updateEmojiImages} = props
  const {id, emojiName, emojiUrl} = emojisList

  const onClickEmoji = () => {
    updateEmojiImages(id)
  }
  return (
    <li className="emoji-image-container">
      <button type="button" onClick={onClickEmoji}>
        <img src={emojiUrl} alt={emojiName} className="emoji-image" />
      </button>
    </li>
  )
}
export default EmojiCard

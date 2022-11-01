// Write your code here
import './index.css'

import {formatDistanceToNow} from 'date-fns'

const CommentItem = props => {
  const {eachDetails} = props
  const {id, name, comment, date, backgroundColor, isFavorite} = eachDetails
  const posted = formatDistanceToNow(date)
  const initial = name ? name[0].toUpperCase() : ''
  const imgUrl = isFavorite
    ? 'https://assets.ccbp.in/frontend/react-js/comments-app/liked-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/comments-app/like-img.png'
  const imgClassName = isFavorite ? 'button active' : 'button'

  const onClickLike = () => {
    const {toggleIsFavorite} = props
    toggleIsFavorite(id)
  }

  const onDeleteComment = () => {
    const {onDeleteButton} = props
    onDeleteButton(id)
  }

  return (
    <li className="list-items ">
      <div className="comments-container">
        <div className={backgroundColor}>
          <p className="initial">{initial}</p>
        </div>
        <div className="name-time">
          <p className="name">{name}</p>
          <p className="time">{posted} ago</p>
        </div>
      </div>
      <p className="text">{comment}</p>
      <div className="button-container">
        <div>
          <img src={imgUrl} alt="like" />
          <button type="button" onClick={onClickLike} className={imgClassName}>
            like
          </button>
        </div>
        <button
          type="button"
          onClick={onDeleteComment}
          className="button delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/comments-app/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
      <hr />
    </li>
  )
}

export default CommentItem

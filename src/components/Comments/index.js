import {Component} from 'react'

import {v4 as uuidv4} from 'uuid'

import './index.css'

import CommentItem from '../CommentItem/index'

const initialContainerBackgroundClassNames = [
  'amber',
  'blue',
  'orange',
  'emerald',
  'teal',
  'red',
  'light-blue',
]

// Write your code here

class Comments extends Component {
  state = {
    commentList: [],
    inputElement: '',
    textArea: '',
  }

  toggleIsFavorite = id => {
    this.setState(prevState => ({
      commentList: prevState.commentList.map(eachComment => {
        if (eachComment.id === id) {
          return {...eachComment, isFavorite: !eachComment.isFavorite}
        }
        return eachComment
      }),
    }))
  }

  onDeleteButton = commentId => {
    const {commentList} = this.state

    this.setState({
      commentList: commentList.filter(comment => comment.id !== commentId),
    })
  }

  onAddInputAndComment = event => {
    event.preventDefault()
    const {inputElement, textArea} = this.state
    const initialBackgroundClassName = `initial-container ${
      initialContainerBackgroundClassNames[
        Math.ceil(
          Math.random() * initialContainerBackgroundClassNames.length - 1,
        )
      ]
    }`

    const newComment = {
      id: uuidv4(),
      name: inputElement,
      comment: textArea,
      backgroundColor: initialBackgroundClassName,
      date: new Date(),
      isFavorite: false,
    }
    this.setState(prevState => ({
      commentList: [...prevState.commentList, newComment],
      inputElement: '',
      textArea: '',
    }))
  }

  onChangeInput = event => {
    this.setState({inputElement: event.target.value})
  }

  onChangeText = event => {
    this.setState({textArea: event.target.value})
  }

  render() {
    const {inputElement, textArea, commentList} = this.state

    return (
      <div className="bg-container">
        <h1 className="heading">Comments</h1>
        <div className="img-and-input-container">
          <img
            className="image"
            src="https://assets.ccbp.in/frontend/react-js/comments-app/comments-img.png "
            alt="comments"
          />
          <div className="input-container">
            <p className="para">Say something about 4.0 Technology</p>
            <form
              className="input-container"
              onSubmit={this.onAddInputAndComment}
            >
              <input
                className="name-input"
                type="text"
                onChange={this.onChangeInput}
                placeholder="Your Name"
                value={inputElement}
              />
              <textarea
                className="area-text"
                onChange={this.onChangeText}
                placeholder="Your Comment"
                value={textArea}
              />
              <button className="btn" type="submit">
                Add comment
              </button>
            </form>
          </div>
        </div>
        <hr className="line" />
        <p className="comments">
          <span className="num-comments">{commentList.length}</span>Comments
        </p>
        <ul>
          {commentList.map(eachClassName => (
            <CommentItem
              key={eachClassName.id}
              eachDetails={eachClassName}
              toggleIsFavorite={this.toggleIsFavorite}
              onDeleteButton={this.onDeleteButton}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Comments

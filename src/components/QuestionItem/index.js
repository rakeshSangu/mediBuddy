import './index.css'

import {CiCirclePlus, CiCircleMinus} from 'react-icons/ci'

import {Component} from 'react'

class QuestionItem extends Component {
  state = {
    viewAnswer: false,
  }

  changeViewAnswerStatus = () => {
    this.setState(prevState => ({
      viewAnswer: !prevState.viewAnswer,
    }))
  }

  render() {
    const {viewAnswer} = this.state
    const {questionDetails} = this.props
    const {question, answer, points} = questionDetails
    return (
      <>
        <div className="question-btn-container">
          <p className="question-para">{question}</p>
          <button
            type="button"
            onClick={this.changeViewAnswerStatus}
            className="answer-view-button"
          >
            {viewAnswer ? (
              <CiCircleMinus className="answer-view-icon" />
            ) : (
              <CiCirclePlus className="answer-view-icon" />
            )}
          </button>
        </div>
        {viewAnswer && <p className="answer-para">{answer}</p>}
        {viewAnswer && (
          <ul className="answer-points-container">
            {points.map(each => (
              <li className="answer-point-item" key={each.pnt}>
                {each.pnt}
              </li>
            ))}
          </ul>
        )}
        <hr />
      </>
    )
  }
}

export default QuestionItem

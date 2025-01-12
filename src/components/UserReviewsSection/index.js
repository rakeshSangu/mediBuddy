import './index.css'

import {MdOutlineStarPurple500} from 'react-icons/md'
import {FaLocationDot} from 'react-icons/fa6'
import {FaRegUserCircle} from 'react-icons/fa'

const UserReviewsSection = props => {
  const {userReviewsList} = props

  const renderEachReviewItem = each => {
    const {content, days, name} = each
    return (
      <>
        <div className="rating-date-location-container">
          <div className="rating-date-container">
            <div className="stars-container">
              <MdOutlineStarPurple500 className="review-star-icon" />
              <MdOutlineStarPurple500 className="review-star-icon" />
              <MdOutlineStarPurple500 className="review-star-icon" />
              <MdOutlineStarPurple500 className="review-star-icon" />
              <MdOutlineStarPurple500 className="review-star-icon" />
            </div>
            <p className="review-date">{days}</p>
          </div>
          <div className="review-location-container">
            <FaLocationDot className="review-location-icon" />
            <p className="review-location-para">Bangalore</p>
          </div>
        </div>
        <p className="review-content-para">{content}</p>
        <hr />
        <div className="review-user-details-container">
          <FaRegUserCircle className="review-user-icon" />
          <p className="review-user-name">{name}</p>
        </div>
      </>
    )
  }

  return (
    <>
      <p className="user-title">What our User say</p>
      <ul className="reviews-container">
        {userReviewsList.map(each => (
          <li className="review-list-item" key={each.name}>
            {renderEachReviewItem(each)}
          </li>
        ))}
      </ul>
    </>
  )
}

export default UserReviewsSection

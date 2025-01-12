import './index.css'

import {HiClock} from 'react-icons/hi'
import {TiTick} from 'react-icons/ti'
import {FaFlask, FaHome} from 'react-icons/fa'

import {Component} from 'react'

class LabTestItem extends Component {
  render() {
    const {packageDetails} = this.props
    const {priceRange, price, testsSummary, reportsTatText} = packageDetails
    const off = parseInt((priceRange - price) * (100 / priceRange), 10)
    return (
      <>
        <div className="test-left-container">
          <p className="labtest-title">{testsSummary[0]}</p>
          <div className="reports-time-cotainer">
            <HiClock className="lab-test-clock-icon" />
            <p className="lab-test-duration">{reportsTatText}</p>
          </div>
          <div className="home-lab-test-container">
            <div className="test-type-container">
              <FaHome className="home-type-icon" />
              <p className="test-type-para">Home</p>
            </div>
            <div className="test-type-container">
              <FaFlask className="lab-type-icon" />
              <p className="test-type-para">Lab</p>
            </div>
          </div>
        </div>
        <div className="test-right-container">
          <div className="cashless-container">
            <p className="cashless-para">
              <TiTick className="tick-icon" />
              cashless
            </p>
          </div>
          <div className="last-price-offer-container">
            <p className="last-price">Rs.{priceRange}/</p>
            <p className="off-para">{off}% OFF</p>
          </div>
          <p className="price-para">
            Rs.{price}/- <span className="onwards-para"> Onwards</span>
          </p>
          <button type="button" className="book-test-add-button">Add</button>
        </div>
      </>
    )
  }
}

export default LabTestItem

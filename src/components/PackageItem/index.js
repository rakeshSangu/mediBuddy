import './index.css'

import {HiClock} from 'react-icons/hi'
import {RiBodyScanFill} from 'react-icons/ri'
import {FaHome} from 'react-icons/fa'

import {Component} from 'react'

class PackageItem extends Component {
  state = {
    cartCount: 0,
  }

  onIncrement = () => {
    this.setState(prevState => ({
      cartCount: prevState.cartCount + 1,
    }))
  }

  onDecrement = () => {
    const {cartCount} = this.state
    if (cartCount > 0) {
      this.setState(prevState => ({
        cartCount: prevState.cartCount - 1,
      }))
    }
  }

  render() {
    const {cartCount} = this.state
    const {packageDetails} = this.props
    const {packageDisplayName, fastingHoursText, reportsTatText, testCount} =
      packageDetails
    return (
      <>
        <h1 className="package-title">{packageDisplayName}</h1>
        <div className="package-report-time-container">
          <HiClock className="timer-icon" />
          <p className="report-time-para">{reportsTatText}</p>
        </div>
        <div className="package-specifications-container">
          <div className="tests-container">
            <p className="specification-title">{testCount} Tests</p>
            <ul className="tests-name-container">
              <li className="test-name">Cholesterol - Total</li>
              <li className="test-name">Vitamin D... more</li>
            </ul>
          </div>
          <div className="includes-container">
            <p className="includes-para">Includes</p>
            <div className="radiology-container">
              <RiBodyScanFill className="radiology-icon" />
              <p className="radiology-para">Radiology</p>
            </div>
          </div>
          <div className="fasting-container">
            <p className="bottom-para">Fasting</p>
            <p className="hours-para">{fastingHoursText}</p>
          </div>
          <div className="available-at-container">
            <p className="bottom-para">Available at</p>
            <div className="home-icon-container">
              <FaHome />
              <p className="home-para">Home</p>
            </div>
          </div>
        </div>
        <div className="prize-cart-container">
          <p className="prize-para">Rs 0/-</p>
          <div className="add-cart-container">
            <button type="button" onClick={this.onDecrement} className="items-change-btn">
              -
            </button>
            <p className="package-numders-para">{cartCount}</p>
            <button type="button" onClick={this.onIncrement} className="items-change-btn">
              +
            </button>
          </div>
        </div>
      </>
    )
  }
}

export default PackageItem

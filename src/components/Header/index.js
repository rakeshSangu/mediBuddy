import './index.css'

import {IoMdArrowRoundBack} from 'react-icons/io'

import {IoBag, IoLocationSharp} from 'react-icons/io5'
import {FiShoppingCart} from 'react-icons/fi'

const Header = () => {
  return (
    <div className="header-container">
      <button type="button" className="header-back-btn">
        <IoMdArrowRoundBack className="back-icon" />
      </button>
      <div className="location-container">
        <div className="header-location-icon-container">
          <p className="main-location-para">Billekahalli</p>
          <IoLocationSharp className="location-icon" />
        </div>
        <p className="sub-location-para">Sarvabhoumanagar Billekahalli...</p>
      </div>
      <div className="cart-payment-container">
        <button type="button" className="header-btn">
          <IoBag className="header-icon" />
        </button>
        <button type="button" className="header-btn">
          <FiShoppingCart className="header-icon" />
        </button>
      </div>
    </div>
  )
}

export default Header

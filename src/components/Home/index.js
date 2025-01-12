import {Component} from 'react'

import {IoSearch} from 'react-icons/io5'
import {VscWorkspaceTrusted} from 'react-icons/vsc'
import {GiMicroscope} from 'react-icons/gi'
import {FaFlaskVial} from 'react-icons/fa6'
import {MdOutlineAddLocationAlt} from 'react-icons/md'



import './index.css'

import IconsContainer from '../IconsContainer'
import BannerSection from '../BannerSection'
import FeaturedHealthCheckups from '../FeaturedHealthCheckups'
import BookPopularLabTestsSection from '../BookPopularLabTestsSection'
import UserReviewsSection from '../UserReviewsSection'
import LifeStylePackages from '../LifeStylePackages'
import QuestionItem from '../QuestionItem'

const apistatusObj = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  pending: 'PENDING',
}

class Home extends Component {
  state = {
    apistatus: apistatusObj.initial,
    iconsList: [],
  }

  componentDidMount = async () => {
    this.setState({
      apistatus: apistatusObj.pending,
    })
    const response = await fetch(
      'https://677f757b0476123f76a68a42.mockapi.io/api/labs/v1/page_config',
    )

    if (response.ok) {
      const data = await response.json()
      const pageConfig = data[0].page_config

      console.log(pageConfig)
      const iconsList = pageConfig[0].props
      const bannersList = pageConfig[1].props
      const featuredHealthCheckupsDetails = pageConfig[2]
      const lifeStylePackagesList = pageConfig[3].props
      const userReviewsList = pageConfig[5].props
      const frequentlyAskedDetails = pageConfig[6].props

      this.setState({
        iconsList,
        apistatus: apistatusObj.success,
        bannersList,
        featuredHealthCheckupsDetails,
        userReviewsList,
        lifeStylePackagesList,
        frequentlyAskedDetails,
      })
    }
  }

  renderLoadingView = () => {
    return (
      <div className="loader-container">
        <p>Loading....Please wait</p>
      </div>
    )
  }

  renderTrustBYUsersSection = () => {
    return (
      <div className="trusted-users-container">
        <div className="trust-section-heading-container">
          <p className="trust-title-para">
            Trusted by <span className="user-count-para">20,00,000+</span>
            <span className="month-user-para"> Users Every month</span>
          </p>
          <VscWorkspaceTrusted className="trust-icon" />
        </div>
        <div className="trust-section-container">
          <GiMicroscope className="trust-section-icon" />
          <p className="trust-section-description">
            200+ Approved Diagnostic Centres
          </p>
        </div>
        <div className="trust-section-container">
          <FaFlaskVial className="trust-section-icon" />
          <p className="trust-section-description">1200+ Lab Tests Offered</p>
        </div>
        <div className="trust-section-container">
          <MdOutlineAddLocationAlt className="trust-section-icon" />
          <p className="trust-section-description">1200+ Pincodes Covered</p>
        </div>
      </div>
    )
  }

  renderHowDoesItWorksSection = () => {
    return (
      <div className="how-it-works-container">
        <p className="how-it-works-heading">How it Works?</p>
        <div className="how-it-work-item">
          <img
            alt="how-it-work-1"
            src="https://res.cloudinary.com/dct2c9u8o/image/upload/v1736663853/Screenshot_2025-01-12_120641_lxwujs.png"
            className="work-item-image"
          />
          <p className="work-description">
            Search for required Lab tests and select Diagnostic centre of your
            choice. Add prescription, patient details and address to complete
            the booking.
          </p>
        </div>
        <div className="how-it-work-item">
          <img
            alt="how-it-work-2"
            src="https://res.cloudinary.com/dct2c9u8o/image/upload/v1736663853/Screenshot_2025-01-12_120653_kcbhn1.png"
            className="work-item-image"
          />
          <p className="work-description">
            Visit the lab centre as per your booking. For home sample
            collection, certified professional will collect the samples at your
            home.
          </p>
        </div>
        <div className="how-it-work-item">
          <img
            alt="how-it-work-3"
            src="https://res.cloudinary.com/dct2c9u8o/image/upload/v1736663853/Screenshot_2025-01-12_120711_gx2eye.png"
            className="work-item-image"
          />
          <p className="work-description">
            We will email you the reports. You can also access your reports
            within your account on the MediBuddy App.
          </p>
        </div>
      </div>
    )
  }

  renderSafeAndSecureSectionView = () => {
    return (
      <div className="safe-secure-container">
        <p className="safe-secure-heading">100% Safe & Secure Lab Tests</p>
        <div className="safe-secure-items-container">
          <div className="safe-item-container">
            <img
              alt="safe-1"
              src="https://res.cloudinary.com/dct2c9u8o/image/upload/v1736665113/Screenshot_2025-01-12_122023_vktebj.png"
              className="safe-image"
            />
            <p className="safe-description">Gov. Approved Diagnostic Centres</p>
          </div>
          <div className="safe-item-container">
            <img
              src="https://res.cloudinary.com/dct2c9u8o/image/upload/v1736665113/Screenshot_2025-01-12_122036_brm4r8.png"
              className="safe-image"
              alt="safe-2"
            />
            <p className="safe-description">
              Daily Temperature Check of all Technicians
            </p>
          </div>
          <div className="safe-item-container">
            <img
              src="https://res.cloudinary.com/dct2c9u8o/image/upload/v1736665113/Screenshot_2025-01-12_122051_bi1njg.png"
              className="safe-image"
              alt="safe-3"
            />
            <p className="safe-description">
              Mandatory use of Mask & Sanitizers
            </p>
          </div>
          <div className="safe-item-container">
            <img
              src="https://res.cloudinary.com/dct2c9u8o/image/upload/v1736665206/Screenshot_2025-01-12_122951_zpiacu.png"
              className="safe-image"
              alt="safe-4"
            />
            <p className="safe-description">Regular Disinfectation of Labs</p>
          </div>
        </div>
      </div>
    )
  }

  renderFequentlyAskedSectionView = () => {
    const {frequentlyAskedDetails} = this.state
    return (
      <div className="frequent-questions-container">
        <p className="frequent-questions-heading">Frequently Asked Questions</p>
        <ul className="questions-list-container">
          {frequentlyAskedDetails.slice(1, 9).map(each => (
            <li className="question-item" key={each.id}>
              <QuestionItem questionDetails={each} />
            </li>
          ))}
        </ul>
      </div>
    )
  }

  renderSuccessview = () => {
    const {
      iconsList,
      bannersList,
      featuredHealthCheckupsDetails,
      userReviewsList,
      lifeStylePackagesList,
    } = this.state
    return (
      <>
        <IconsContainer iconsList={iconsList} />
        <BannerSection bannersList={bannersList} />
        <FeaturedHealthCheckups
          featuredHealthCheckupsDetails={featuredHealthCheckupsDetails}
        />
        <BookPopularLabTestsSection
          featuredHealthCheckupsDetails={featuredHealthCheckupsDetails}
        />
        {this.renderTrustBYUsersSection()}
        <UserReviewsSection userReviewsList={userReviewsList} />
        <LifeStylePackages lifeStylePackagesList={lifeStylePackagesList} />
        {this.renderHowDoesItWorksSection()}
        {this.renderSafeAndSecureSectionView()}
        {this.renderFequentlyAskedSectionView()}
      </>
    )
  }

  renderHomePageView = () => {
    const {apistatus} = this.state
    switch (apistatus) {
      case apistatusObj.pending:
        return this.renderLoadingView()
      case apistatusObj.success:
        return this.renderSuccessview()
      default:
        return ''
    }
  }

  render() {
    return (
      <>
        <div className="search-container">
          <input
            placeholder="Find lab tests, diagnostics centres"
            className="search-input"
          />
          <button type="button" className="search-button">
            <IoSearch className="search-icon" />
          </button>
        </div>
        {this.renderHomePageView()}
      </>
    )
  }
}

export default Home

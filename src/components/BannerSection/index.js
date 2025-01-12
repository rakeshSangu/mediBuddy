import Slider from 'react-slick'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import './index.css'

const BannerSection = props => {
  const {bannersList} = props
  return (
    <ul className="slider-container">
      <Slider {...{
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }}>
        {bannersList.map(each => (
          <li className="banner-list-item" key={each.bannerUrl}>
            <img alt="banner" className="banner-image" src={each.bannerUrl} />
          </li>
        ))}
      </Slider>
    </ul>
  )
}

export default BannerSection

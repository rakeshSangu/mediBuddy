import './index.css'

const LifeStylePackages = props => {
  const {lifeStylePackagesList} = props
  return (
    <div className="life-style-packages-container">
      <p className="life-style-title">Lifestyle Health Check-up Packages</p>
      <ul className="life-style-packs-list-container">
        {lifeStylePackagesList.map(each => (
          <li key={each.title} className="life-style-pack-item">
            <img
              alt={each.title}
              className="life-style-item-pack-image"
              src="https://res.cloudinary.com/dct2c9u8o/image/upload/v1736663209/Screenshot_2025-01-12_115357_nywa5d.png"
            />
            <p className="life-style-item-para">{each.title}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default LifeStylePackages

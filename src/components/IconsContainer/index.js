import './index.css'

const IconsContainer = props => {
  const {iconsList} = props
  return (
    <ul className="top-icons-container">
      {iconsList.map(each => (
        <li key={each.iconText} className="icon-list-item">
          <a className="icons-anchor" target="_black" href={each.deeplink}>
            <img alt={each.iconText} className="icons-image" src={each.iconUrl} />
            <p className="icon-para">{each.iconText}</p>
          </a>
        </li>
      ))}
    </ul>
  )
}

export default IconsContainer

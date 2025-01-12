import './index.css'

const CatogeriesSection = props => {
  const {categories, activeCategory, onChangeActiveCategory} = props

  const onclickCategory = each => {
    onChangeActiveCategory(each)
  }

  return (
    <ul className="category-list-container">
      {categories[10386].map(each => {
        return (
          <li key={each} className="categories-list-item">
            <button
              type="button"
              onClick={() => onclickCategory(each)}
              className={
                activeCategory === each
                  ? 'category-button active-category-button'
                  : 'category-button'
              }
            >
              {each}
            </button>
          </li>
        )
      })}
    </ul>
  )
}

export default CatogeriesSection

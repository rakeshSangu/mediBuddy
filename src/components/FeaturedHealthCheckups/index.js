import {Component} from 'react'

import './index.css'

import CatogeriesSection from '../CategoriesSection/index'
import PackageItem from '../PackageItem'

class FeaturedHealthCheckups extends Component {
  state = {
    activeCategory: 'Popular',
  }

  onChangeActiveCategory = id => {
    this.setState({
      activeCategory: id,
    })
  }

  renderHealthCheckUpsItems = () => {
    const {activeCategory} = this.state
    const {featuredHealthCheckupsDetails} = this.props
    const {props} = featuredHealthCheckupsDetails
    const {packages} = props[0]

    const filteredFeaturePackages = packages.filter(
      each =>
        each.contractId === 10386 &&
        each.subCategories.includes(activeCategory.toUpperCase()),
    )
    if (filteredFeaturePackages.length > 0) {
      return filteredFeaturePackages.map(each => (
        <li className="package-list-item" key={each.packageId}>
          <PackageItem packageDetails={each} />
        </li>
      ))
    }
    return ''
  }

  render() {
    const {activeCategory} = this.state
    const {featuredHealthCheckupsDetails} = this.props
    const {categories} = featuredHealthCheckupsDetails

    return (
      <div className="featured-checkups-container">
        <div className="featured-heading-viewall-container">
          <h1 className="featured-checkups-heading">
            Featured Health Checkups
          </h1>
          <button type="button" className="featured-section-view-all-button">View All</button>
        </div>
        <CatogeriesSection
          activeCategory={activeCategory}
          categories={categories}
          onChangeActiveCategory={this.onChangeActiveCategory}
        />
        <ul className="health-checkups-container">
          {this.renderHealthCheckUpsItems()}
        </ul>
      </div>
    )
  }
}

export default FeaturedHealthCheckups

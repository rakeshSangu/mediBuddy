import {Component} from 'react'

import './index.css'

import CatogeriesSection from '../CategoriesSection/index'
import LabTestItem from '../LabTestItem'

class BookPopularLabTestsSection extends Component {
  state = {
    activeCategory: 'Popular',
  }

  onChangeActiveCategory = id => {
    this.setState({
      activeCategory: id,
    })
  }

  renderLabTestItems = () => {
    const {activeCategory} = this.state
    const {featuredHealthCheckupsDetails} = this.props
    const {props} = featuredHealthCheckupsDetails
    const {packages} = props[0]

    let filteredFeaturePackages = packages.filter(
      each =>
        each.contractId === 10386 &&
        each.subCategories.includes(activeCategory.toUpperCase()),
    )
    if (filteredFeaturePackages.length > 5) {
      filteredFeaturePackages = filteredFeaturePackages.slice(0, 5)
    }
    if (filteredFeaturePackages.length > 0) {
      return filteredFeaturePackages.map(each => (
        <li className="book-test-list-item" key={each.packageId}>
          <LabTestItem packageDetails={each} />
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
      <div className="book-checkups-container">
        <div className="book-heading-viewall-container">
          <h1 className="book-checkups-heading">Book Your Popular Lab Tests</h1>
          <button type="button" className="book-section-view-all-button">View All</button>
        </div>
        <CatogeriesSection
          activeCategory={activeCategory}
          categories={categories}
          onChangeActiveCategory={this.onChangeActiveCategory}
        />
        <ul className="book-lab-tests-container">
          {this.renderLabTestItems()}
        </ul>
      </div>
    )
  }
}

export default BookPopularLabTestsSection

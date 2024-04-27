import React from 'react'
import { FilterSection } from './FilterSection'
import { Sort } from './Sort'
import { ProductList } from './ProductList'
import '../css-files/Products.scss'
export const Products = () => {
  return (
    <div className="products-main-sec">
      <div className="filter-section">
        <FilterSection/>
      </div>
      <section className='product-view-sort'>
        <div className="sort-filter">
          <Sort/>
        </div>
        <div className="feature-pro">
          <ProductList/>
        </div>
      </section>
    </div>
  )
}

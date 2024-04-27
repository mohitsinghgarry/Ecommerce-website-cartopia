import React from 'react'
import '../css-files/Sort.scss'
import { BsFillGridFill ,BsList} from "react-icons/bs";
import { useFilterContext } from '../context/FilterContext';

export const Sort = () => {
  const{grid_view ,setListView, setGridView ,  filter_products, sorting} = useFilterContext();
  return (
    <div className="main-sorted">
      <div className="buttons-sort">
        <button className= {grid_view ? 'activee sort-btn' : 'sort-btn'} onClick={setGridView}>
        <BsFillGridFill className='icon-grid' />
        </button>
        <button className={!grid_view ? 'activee sort-btn' : 'sort-btn'} onClick={setListView}>
          <BsList  className='icon-grid'/>
        </button>
      </div>
      <div className="product-data">{`${filter_products.length} Products Available`}</div>
      <div className="dropdown">
        <form action="#">
          <label htmlFor="sort">
            <select name="sort" id="sort" onClick={sorting} >
              <option value="lowest">Price(Lowest)</option>
              <option value="highest">Price(Highest)</option>
              <option value="a-z">Name(a-z)</option>
              <option value="z-a">Name(z-a)</option>
            </select>
          </label>
        </form>
      </div>
    </div>
  )
}

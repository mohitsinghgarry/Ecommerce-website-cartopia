import React from 'react'
import '../css-files/FilterSection.scss'
import {useFilterContext} from '../context/FilterContext'
import { useState } from 'react'
import { FaCheck } from "react-icons/fa";
import { VscBlank } from "react-icons/vsc";
import {FormatPrice} from  '../Helpers/FormatPrice.jsx'
export const FilterSection = () => {
  const{filters:{text, category , company,color, maxPrice , minPrice , price},updateFilterValue, all_products ,clearFilter} = useFilterContext();

  const getUniqueData=(data , property)=>{
   let newVal =  data.map((currElement)=>{
        return currElement[property];
    })

    if(property === "colors") return newVal = ['all',...new Set([].concat(...newVal))];
    else{
      newVal = ["all",...new Set(newVal)];
      return(newVal);
    }
  }
  const categoryOnlyData = getUniqueData(all_products , "category");
  const companyOnlyData = getUniqueData(all_products, "company");
  const colorsOnlyData = getUniqueData(all_products, "colors");

  return (
    <div className='filter-section-container'>
      <div className="company_category">
      <div className="filter_search">
        <form onSubmit={(e)=>e.preventDefault()}>
          <input type="text" name='text'value={text} placeholder='Search' onChange={updateFilterValue} />
        </form>
      </div>
      <div className="filter_category">
        <h3>Category</h3>
        <div className='btn-new'>
          {
            categoryOnlyData.map((currElement , index)=>{
              return <button  type='button' name='category' key={index} value={currElement} onClick={updateFilterValue} >{currElement}</button>
            })
          }
        </div>
      </div>
      <div className="filter-company">
        <h3>Company</h3>
        <form action="#">
          <select name="company" id="company" onClick={updateFilterValue}>
             {
                companyOnlyData.map((curr , index)=>{
                  return <option key={index} name='company' value={curr}>{curr}</option>
                })
             }
          </select>
        </form>
      </div>

      </div>
      <div className="colors-filterprice">
      <div className="filter-colors">
        <h3>colors</h3>
        <div className="colors">
          <p>
          {
            colorsOnlyData.map((curr , index)=>{
              return <button type='button' style={{backgroundColor:curr , textTransform:'uppercase' , fontWeight:'400'}} className={color === curr ? 'btn-color active' : 'btn-color'} onClick={updateFilterValue} name='color' key={index} value={curr}>  {
                color===curr && curr!='all' ? <FaCheck  color='white'/>:( curr!='all'? <VscBlank size={1}/>: curr)
                }</button>
            })
          }

          </p>
        </div>
        <div className="filter_price">
          <h3>Price</h3>
          <p style={{fontWeight:'400'}}><FormatPrice price={price} /></p>
          <input type="range"  min={minPrice} max={maxPrice} value={price} name='price' onChange={updateFilterValue} style={{accentColor:'#7a39fa'}} />
        </div>
        <div className="filter-clear">
          <button className="button-89"  onClick={clearFilter}>clear filter</button>
        </div>
  
      </div>
      </div>
    </div>
  )
}

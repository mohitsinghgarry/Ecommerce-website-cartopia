import React, { useContext } from 'react'
import { AppContext} from '../context/AppContext'
import { Product } from './Product'
import '../css-files/FeatureProduct.scss'
export const FeatureProduct = () => {
  const {featureProduct}  = useContext(AppContext);
  return (
    <div className='feature-pro'>
        <div className="intro-item">CHECK NOW!</div>
        <h2>Our Feature Services</h2>
        <div className="items" >
       {
        featureProduct.map((item)=>{
           return <Product key={item.id} {...item}/>    
        })
       }

        </div>
    </div>
  )
}

import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import '../css-files/SingleProduct.scss'
import { MyImage } from './MyImage'
import { Spinner } from './Spinner';
import { FormatPrice } from '../Helpers/FormatPrice'
import { TbReplace } from "react-icons/tb";
import { FaTruckFast } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";
import { AddToCart } from './AddToCart'
import { Star } from './Star'
export const SingleProduct = () => {
  const { singleProductData, singleproductdatafull, loading } = useContext(AppContext);
  const { id } = useParams();
  useEffect(() => {
    singleProductData(id);
  }, []);
  const {
    id: alias,
    name,
    company,
    price,
    description,
    category,
    stock,
    stars,
    reviews,
    image } = singleproductdatafull;
  return (

    <div className='single-product-data'>
      {
        loading ? (<Spinner />) : (
          <div className="single-product-grid">
            <div className="product-image">
              <MyImage image={image} />
            </div>
            <div className="product-data">
              <h2 style={{textTransform:'uppercase'}}>{name}</h2>
              <Star stars= {stars} reviews = {reviews}/>
              <p className="product-data-price">
                MRP: <del>
                  <FormatPrice price={price + 250000} />
                </del>
              </p>
              <p className="product-data-real-price">
                Deal of the Day:  <span ><FormatPrice  price={price}/></span>
              </p>
              <p>{description}</p>
              <div className="product-data-warranty">
                <div className="product-warranty-data">
                  <div className="icon-container">
                  <FaTruckFast className='warranty-icon' /> 
                  </div>
                  <p>Free Delivery</p>
                </div>
                <div className="product-warranty-data">
                <div className="icon-container">
                  <TbReplace className='warranty-icon' />                
                    </div>
                  <p>10 Days Replacement</p>
                </div>
                <div className="product-warranty-data">
                <div className="icon-container">
                  <MdOutlineHealthAndSafety className='warranty-icon' />           
                    </div>
                  <p>2 Years Warranty</p>
                </div>
                <div className="product-warranty-data">
                <div className="icon-container">
                  <FaTruckFast  className='warranty-icon' /> 
                    </div>
                  <p>Fast Delivery</p>
                </div>
              </div>
              <div className="product-data-info">
                <p>Available: <span> {stock > 0 ? 'IN STOCK' : 'OUT OF STOCK'}</span></p>
                <p>ID: <span>{id}</span></p>
                <p>Brand: <span>{company}</span></p>
              </div>
               <div className='horizontal-line'> </div>
              {
                stock>0 && <AddToCart product={singleproductdatafull}/>
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

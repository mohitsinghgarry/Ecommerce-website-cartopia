import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import '../css-files/Product.scss'
import { FormatPrice } from '../Helpers/FormatPrice'
export const Product = (item) => {
  const { id, name, image, price, category, company } = item;
  // console.log(item);
  const navigate = useNavigate();
  function navigatehandler() {
    navigate(`/SingleProduct/${id}`);
  }
  return (
    <div className="item" onClick={navigatehandler} style={{ cursor: 'pointer' }} data-aos="zoom-in" data-aos-duration="5000">
      <figure className="small-container">
        <figcaption className='caption'>
          <div>{category}</div></figcaption>
        <img src={image} alt="img" />
      </figure>
      <div className="detail">
        <div className="company">{name}</div>
        <div className="price"><FormatPrice price={price} /></div>
      </div>
    </div>
  )
}

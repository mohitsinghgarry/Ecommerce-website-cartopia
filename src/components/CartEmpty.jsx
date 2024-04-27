import React from 'react'
import '../css-files/CartEmpty.scss'
import { MdRemoveShoppingCart } from "react-icons/md";
import {useNavigate } from 'react-router-dom'
export const CartEmpty = () => {
    const navigate = useNavigate();
    const clickHandler=()=>{
      navigate('/products');
    }
  return (
    <div className='empty-cart'>
        <div className='cart-text'>No Item in Cart</div>
        <div className="item-cart">
        <MdRemoveShoppingCart size={70} />
        </div>
        <button className='button' onClick={clickHandler}>Cont. Shopping</button>
    </div>
  )
}

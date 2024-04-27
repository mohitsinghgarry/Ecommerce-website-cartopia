import React from 'react'
import { useCartcontext } from '../context/CartContext'
import '../css-files/Cart.scss'
import { CartItem } from './CartItem'
import { CartEmpty } from './CartEmpty'
import {useNavigate } from 'react-router-dom'
import { ButtonFilter } from './ButtonFilter'
import { FormatPrice } from '../Helpers/FormatPrice'
export const Cart = () => {
  const{cart,clearCart,total_amount,shipping_fee} = useCartcontext();
  console.log(shipping_fee);
  const navigate = useNavigate();
  const clickHandler=()=>{
    navigate('/products');
  }
  if(cart.length == []){
    return <CartEmpty/>
  }
  return (
    <div className="container-cart-grid">
      <div className="cart-heading">
        <p>Item</p>
        <p className="cart-hide">Price</p>
        <p>Quantity</p>
        <p className="cart-hide">Subtotal</p>
        <p>remove</p>
      </div>
      <hr />

      {/* cart-item */}

      <div className="cart-item">
        {
          cart.map((curr)=>{
                return <CartItem key={curr.id} {...curr}/>
          })
        }
      </div>
      <hr />
      <div className="goback">
        <button className="button" onClick={clickHandler}>Cont. shopping</button>
         <span onClick={clearCart}><ButtonFilter/></span>
      </div>

      <div className="order-total-amount">
        <div className="order-total-subdata">
          <div>
            <p>SubTotal:</p>
            <p className='price-price'> 
              <FormatPrice price={total_amount}/>
            </p>
          </div>
          <div>
            <p>shipping fee + GST:</p>
            <p className='price-price'>
              <FormatPrice price={shipping_fee}/>
            </p>
          </div>
          <hr />
          <div>
            <p>Order Total:</p>
            <p className='price-price'>
              <FormatPrice price={total_amount+shipping_fee}/>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

import React from 'react'
import { VscBlank } from "react-icons/vsc";
import { FormatPrice } from '../Helpers/FormatPrice'
import { CartAmountToggle } from './CartAmountToggle';
import { FaTrashRestoreAlt } from "react-icons/fa";
import '../css-files/CartItem.scss'
import { useCartcontext } from '../context/CartContext';
export const CartItem = ({ id, name, image, color, price, amount }) => {
    const {updateCartHandler,setDecrease ,setIncrease} = useCartcontext();
    return (
        <div className='cart-heading'>
            <div className="cart-image-name">
                <div>
                    <img src={image} alt={id} />
                </div>
                <div className='info-cart'>
                    <div>{name}</div>
                    <p>
                        color: <button className='new-btn-color' style={{ backgroundColor: color, color: color }}> <VscBlank /></button>
                    </p>
                </div>
            </div>
            {/* price */}
            <div className="cart-hide">
                <p> <FormatPrice price={price} /></p>
            </div>
            {/* Quantity */}
            <div className="quantity">
                <CartAmountToggle amount={amount} setDecrease={()=>setDecrease(id)} setIncrease={()=>setIncrease(id)} />
            </div>
            <div className="cart-hide">
                <p>
                    <FormatPrice price={price * amount} />
                </p>
            </div>
            <div>
                <FaTrashRestoreAlt style={{color:'red', cursor:'pointer'}} size={25} onClick={()=>updateCartHandler(id)} />
            </div>
        </div>
    )
}

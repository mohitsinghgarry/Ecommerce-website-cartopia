import React from 'react'
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import '../css-files/CartAmountToggle.scss'
export const CartAmountToggle = ({amount , setDecrease , setIncrease}) => {
  return (
    <div className='cart-amount'>
        <div className="amount-toggle">
            <button onClick={()=>setDecrease()}><FaMinus /></button>
            <div style={{color:'#7a39fa', fontWeight:'bold'}} className="amount">{amount}</div>
            <button onClick={()=>setIncrease()}><FaPlus /></button>
        </div>
    </div>
  )
}

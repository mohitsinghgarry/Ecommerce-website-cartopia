import React, { useContext, useState } from 'react'
import '../css-files/AddToCart.scss'
import { FaCheck } from "react-icons/fa";
import { VscBlank } from "react-icons/vsc";
import { CartAmountToggle } from './CartAmountToggle';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useCartcontext } from '../context/CartContext';
export const AddToCart = ({product}) => {
    const{addToCart} = useCartcontext();
    const name = 'Add to Cart'
    const{id ,colors , stock} = product;
    const[color , setColor] = useState(colors[0]);
    const[amount , setAmount] = useState(1);
    // const navigate = useNavigate();
    const setDecrease=()=>{
        amount>1 ? setAmount(amount -1 ) : setAmount(1);
    }
    const setIncrease=()=>{
      amount<stock ? setAmount(amount+1) : setAmount(stock);
    }
  return (
    <div className="addtocartcontainer">
    <div className="colors">
        <p>
            colors:
            {
                colors.map((currcolor, index)=>{
                    return <button className={color === currcolor ? 'btn-color active' : 'btn-color'} key={index} style={{backgroundColor:currcolor}} onClick={()=> setColor(currcolor)}>
                        {color===currcolor? <FaCheck  color='white'/> :<VscBlank />}</button>
                })
            }
        </p>
    </div>
            {/* add to cart */}
            <CartAmountToggle amount = {amount} setDecrease = {setDecrease} setIncrease = {setIncrease}/>
            <NavLink to='/Cart'>
             <button className="button-89"onClick={()=>addToCart(id,  color , amount , product)}>{name}</button>
            </NavLink>
    </div>
  )
}

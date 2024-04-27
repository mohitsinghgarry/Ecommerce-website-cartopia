import { createContext, useContext, useEffect, useReducer } from "react";
import {cartReducer} from '../reducer/cartReducer.jsx'

const getLocalCartData=()=>{
    let newcartitem = localStorage.getItem("Cartopia");
    console.log(newcartitem);
    if(newcartitem === null) return [];
    else return JSON.parse(newcartitem);
}
const initialState={
   cart:getLocalCartData(),
   total_amount:"",
   total_item:"",
   shipping_fee:50000

}
export const CartContext = createContext();
 export default function CartContextProvider({children}){
    const [state , dispatch] = useReducer(cartReducer , initialState);
    const addToCart=(id ,color , amount , product)=>{
        dispatch({type:"ADD-TO-CART", payload:{id ,color , amount , product}});
    }
    const setDecrease=(id)=>{
        console.log("hfe")
        dispatch({type:"SET_DECREMENT",payload:id})
    }
    const setIncrease=(id)=>{
        dispatch({type:"SET_INCREMENT",payload:id})
    }
    const updateCartHandler=(id)=>{
        dispatch({type:"REMOVE_ITEM", payload:id});
    }
    const clearCart=()=>{
        dispatch({type:"CLEAR_CART"});
    }
  -
    useEffect(()=>{
        dispatch({type:"CART-ITEM-SHOW"});
         dispatch({type:"CART_TOTAL_PRICE"})
        localStorage.setItem("Cartopia",JSON.stringify(state.cart));
    },[state.cart]);
    return <CartContext.Provider value={{...state , addToCart, updateCartHandler,clearCart,setIncrease, setDecrease}} >{children}</CartContext.Provider>
}
export const useCartcontext =()=>{
    return useContext(CartContext);
}
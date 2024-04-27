import { SiTele5 } from "react-icons/si";

export const cartReducer = (state , action) => {
        if(action.type === "ADD-TO-CART"){
            const {id ,color , amount , product} = action.payload;
            let existingitem = state.cart.find((curr)=>curr.id == id+color);
            if(existingitem){
                let updatedproduct = state.cart.map((curr)=>{
                    if(curr.id == id+color){
                        let newAmount = curr.amount +amount;
                        // console.log(newAmount)
                        if(newAmount >= curr.max) newAmount = curr.max;
                        return {
                            ...curr,
                            amount :newAmount
                        }
                    }
                    else{
                        return curr;
                    }
                })
                return {
                    ...state,
                    cart:updatedproduct,
                }
            }
            else{
                let cartProduct={
                    id:id+color,
                    name: product.name,
                    color,
                    amount,
                    image:  product.image[0].url,
                    price: product.price,
                    max:product.stock
                }
                return {
                    ...state,
                    cart:[...state.cart,cartProduct],
                }
            }

        }
        if( action.type === "REMOVE_ITEM"){
            let updatedcart= state.cart.filter((curr)=> curr.id!=action.payload);
            return {
                ...state, 
                cart: updatedcart
            }
        }
        if(action.type === "CLEAR_CART"){
            return {
                ...state,
                cart:[]
            }
        }
        if(action.type ==="SET_DECREMENT"){
            let updatedproduct = state.cart.map((curr)=>{
                if(curr.id == action.payload){
                    let decrementamount = curr.amount-1;
                    if(decrementamount<1) decrementamount = 1;
                    return {
                        ...curr,
                        amount:decrementamount
                    }
                }
                else return curr;
            })
            return{
                ...state,
                cart:updatedproduct
            }
        }
        if(action.type ==="SET_INCREMENT"){
            let updatedproduct = state.cart.map((curr)=>{
                if(curr.id == action.payload){
                    let decrementamount = curr.amount+1;
                    if(decrementamount>=curr.max) decrementamount = curr.max;
                    return {
                        ...curr,
                        amount:decrementamount
                    }
                }
                else return curr;
            })
            return{
                ...state,
                cart:updatedproduct
            }
        }
        if(action.type === "CART-ITEM-SHOW"){
            let updateditem = state.cart.reduce((initialvalue , curr)=>{
                let {amount} = curr;
                initialvalue = initialvalue +amount;
                return initialvalue;

            },0)
            return {
                ...state,
                total_item : updateditem,
            }
        }
        if(action.type === "CART_TOTAL_PRICE"){
            let total_price = state.cart.reduce((initialdata ,curr )=>{
                    let{price, amount} = curr;
                    initialdata = initialdata + price*amount;
                    return initialdata;
            },0)
            return {
                ...state,
                total_amount : total_price,
            }
        }
        return state;
}

import { createContext, useEffect, useReducer } from "react";
import { useContext } from "react";
import { useProductContext } from "../context/AppContext";
import {filterReducer} from "../reducer/filterReducer.jsx"
export const FilterContext = createContext();
const initialState={
  filter_products :[],
  all_products :[],
  grid_view: true,
  sorting_value:"lowest",
  filters:{text:"",category:"all", company:"all",color:"all", maxPrice:0 , price:0  , minPrice:0,},
 };
export default function FilterContextProvider({children}){

 const {products} = useProductContext();
 const[state , dispatch] = useReducer(filterReducer , initialState);

 const updateFilterValue=(event)=>{
  const name = event.target.name;
  const value = event.target.value;
  console.log(name , value);
  dispatch({type:"UPDATE_FILTER_VALUE" , payload:{name , value}});
}

 
 const setGridView = ()=>{
    return dispatch({type:"SET_GRIDVIEW"});
 }
 const setListView = ()=>{
  return dispatch({type:"SET_LISTVIEW"});
}
const sorting=(event)=>{
  let userData = event.target.value;
  return dispatch({type:"SET_SORT", payload:userData});
}

const clearFilter=()=>{
  return dispatch({type:"CLEAR-FILTER"});
}

//to sort the products
useEffect(()=>{
  dispatch({type:"SORTING_PRODUCTS" ,payload:products});
},[products,state.sorting_value]);


useEffect(()=>{
  dispatch({type:"FILTER_PRODUCTS"});
},[state.filters]);

 useEffect(()=>{
   dispatch({type:"LOAD_FILTER_PRODUCTS", payload:products})
 },[products])

return <FilterContext.Provider value = {{...state , setGridView , setListView, sorting,updateFilterValue,clearFilter}}>
    {children}
   </FilterContext.Provider>
}
export const useFilterContext = ()=>{
    return useContext(FilterContext);
}
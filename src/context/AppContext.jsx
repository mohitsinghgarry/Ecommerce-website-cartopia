import axios from "axios";
import { createContext, useState } from "react";
import { useContext } from "react";
export const AppContext = createContext();
export default function AppContextProvider({children}){
   const[loading , setLoading] = useState(false);
   const[products, setProducts]  = useState([]);
   const[singleproductdatafull , setSingleProductDataFull] = useState([]);
   async function fetchFullData(){
         const api = "https://api.pujakaitem.com/api/products";
         setLoading(true);
         try{
            const res = await axios.get(api);
            const product  = await res.data;
            setProducts(product);
         }
         catch(error){
            console.log("error occured");
         }
         setLoading(false);
      }
    const featureProduct = products.filter((currentelement)=>{
         return currentelement.featured === true;
      })
      async function singleProductData(id){
         const api = `https://api.pujakaitem.com/api/products?id=${id}`;
         setLoading(true);
         try{
            const res = await axios.get(api);
            const singlePro = await res.data;
            setSingleProductDataFull(singlePro);
            //  console.log(singlePro);
         }
         catch(error){
            console.log("error occured");
         }
         setLoading(false);
      }
     const value  = {
      loading, 
      setLoading,
      products, 
      setProducts,
      featureProduct,
      fetchFullData,
      singleProductData,
      singleproductdatafull,
      setSingleProductDataFull
     }
   return <AppContext.Provider value = {value}>
    {children}
   </AppContext.Provider>
}

export const useProductContext = ()=>{
   return useContext(AppContext);
}
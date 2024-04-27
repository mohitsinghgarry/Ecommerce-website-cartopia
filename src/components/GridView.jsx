 import React from 'react'
import { Product } from './Product'
 
 export const GridView = ({products}) => {
   return (

        <div className="items">
            {
                products.map((currpro)=>{
                    return <Product key={currpro.id} {...currpro}/>
                })
            }
        </div>
   )
 }
 
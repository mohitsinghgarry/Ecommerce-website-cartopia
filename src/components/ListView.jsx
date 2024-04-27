import React from 'react'
import '../css-files/ListView.scss'
import {useNavigate } from 'react-router-dom'
import { FormatPrice } from '../Helpers/FormatPrice'
export const ListView = ({products}) => {
    const btname = 'Read More'
    const navigate = useNavigate();

  return (
    <div className='section-list'>
        <div className="container-list">
        {
            products.map((currprop) =>{
                const {name , id , image ,price ,description} = currprop;
                const newdesc = `${description.substring(0, 70)}.... `
                return <div className='card-list' key={id}>
                    <div className='image-list'>
                        <img src={image} alt={name}/>
                    </div>
                    <div className="description-container">
                    <div className="name-list" style={{textTransform:'uppercase'}}>{name}</div>
                    <div className="price-list"><FormatPrice price = {price}/></div>
                    <div className="desc-list">{newdesc}</div>
                    <button onClick={()=> navigate(`/SingleProduct/${id}`)} className='button-89'>{btname}</button>
                    </div>
                </div>
            })
        }
        </div>
    </div>
  )
}

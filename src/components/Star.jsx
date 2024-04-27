import React from 'react'
import { FaStar ,  FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import '../css-files/Star.scss'
export const Star = ({stars , reviews}) => {
    const rating =  Array.from({length:5},(current , index)=>{
         let number = index+0.5;
         return <span key={index}>
            {
                stars>= index+1 ? (<FaStar className='iconss'/>) :stars>=number ? (<FaStarHalfAlt className='iconss'/>) :(<AiOutlineStar className='iconss'/>)
            }
         </span>
     });
  return (
    <div className="star">
        <div className="icon-style">
            {rating}
            <p>({reviews} customer reviews)</p>
        </div>
    </div>
  )
}

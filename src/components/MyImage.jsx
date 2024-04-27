import React, { useState } from 'react'
import '../css-files/MyImage.scss'
export const MyImage = ({image = [{url:''}]}) => {
  const[mainImage , setMainImage] = useState(image[0]);
  // console.log(mainImage);
return(
  <div className="main-grid">
        <div className='image-grid'>
          {
            image.map((curr ,index)=>{
              return(
                <figure key={index}>
                  <img src={curr.url} style={{cursor:'pointer'}} className='box-image-style' alt={curr.filename} key={index} onClick={()=> setMainImage(curr)} />
                </figure>
              )
            })
          }
        </div>

    <div className="main-screen">
      <img src={mainImage.url} alt="images" />
    </div>
  </div>
)
}

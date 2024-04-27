import React from 'react'
import '../css-files/HeroContent.scss'
import { Button } from './Button';
import {useNavigate } from 'react-router-dom'
export const HerooContent = () => {
  const name = 'SHOP NOW';
  const navigate = useNavigate();
  const clickHandler=()=>{
    navigate('/products');
  }
  return (
    <div className="container-home">
    <div className="left-container"data-aos="zoom-in-right" data-aos-duration="1000">
      <p className='intro-data'>Welcome to</p>
      <h1 className='heading' >CARTOPIA</h1>
      <p className='main-content'>Experience refined elegance with our minimalist brand. We embody sophistication in every aspect of your shopping, be it groceries or any other necessity. Elevate your style and shopping experience with timeless minimalism.</p>
       <div onClick={clickHandler}>
       <button className='button'>shop Now</button>
        </div>
    </div>
    <div className="right-container" data-aos="zoom-in-up" data-aos-duration="1000">
      <img src="./homescreen.svg" alt="shopping" />
    </div>
  </div>
  )
}

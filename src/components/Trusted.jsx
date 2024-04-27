import React from 'react'
import '../css-files/Trusted.scss'
export const Trusted = () => {
  return (
    <div className="trusted-container">
      <div className="left-trusted" data-aos="zoom-in-down" data-aos-duration="1000">
        <img src="./cc.svg" alt="logo" />
      </div>
      <div className="right-trusted" data-aos="zoom-in-up" data-aos-duration="1000">
          <div className="mn-content">Trusted By 1000+ Companies</div>
          <div className="brands">
             <img className='img' src="./bmw.png" alt="company1" />
             <img className='img' src="./c4.png" alt="company1" />
             <img className='img' src="./ama.png" alt="company1" />
             <img className='img' src="./c5.png" alt="company1" />
             <img className='img' src="./add.png" alt="company1" />
          </div>
      </div>
    </div>
  )
}

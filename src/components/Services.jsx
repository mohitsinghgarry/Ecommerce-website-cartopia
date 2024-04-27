import React from 'react'
import '../css-files/Services.scss'
import { FaShieldHalved } from "react-icons/fa6";
import { FaShippingFast } from "react-icons/fa";
import { GiTakeMyMoney } from "react-icons/gi";
import { GrSecure } from "react-icons/gr";
export const Services = () => {
  return (
    <>
    <div className="container-services">
      <div className="left-service" data-aos="zoom-in-up" data-aos-duration="1500">
        <div className="icon">
      <FaShippingFast size={38} color='#7a39fa'/>
        </div>
        <div style={{fontWeight:'500', fontSize:'small'}}>Super Fast and Free Delievery</div>
      </div>
      <div className="middle-service" data-aos="zoom-in-up" data-aos-duration="1500">
        <div className="middle-upper">
          <div className="icon">
        <FaShieldHalved  size={30} color='#7a39fa'/>
          </div>
          <div style={{fontWeight:'500', fontSize:'small'}}>Non-Contact Shipping</div>
        </div>
        <div className="middle-lower">
          <div className="icon">
        <GiTakeMyMoney  size={30} color='#7a39fa'/>
          </div>
          <div style={{fontWeight:'500', fontSize:'small'}}>Money-Back guaranteed</div>
        </div>
      </div>
      <div className="right-service" data-aos="zoom-in-up" data-aos-duration="1500">
        <div className="icon">
        <GrSecure  size={30} color='#7a39fa' />
        </div>
        <div style={{fontWeight:'500', fontSize:'small'}}>Safe and Secure Payment System</div>
      </div>
    </div>
    </>
  )
}

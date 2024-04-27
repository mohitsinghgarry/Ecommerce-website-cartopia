import React from 'react'
import { Button } from './Button'
import { useNavigate } from 'react-router-dom'
import '../css-files/Footer.scss'
import { FaLinkedinIn } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { SiDiscord } from "react-icons/si";
export const Footer = () => {
  const name = 'Get Started';
  const navigate = useNavigate();
  const clickHandler=()=>{
    navigate('/ContactUs');
  }

  return (
    <div className="footerr">
      <div className="footer-content">
        <div className="contact-short">
          <div className="footer-text">
              <div className='footer-text-inner'>Ready to get started?</div>
              <div className='footer-text-inner'>Talk to us today</div>
          </div>
          <div className='footer-button'>
            <div className="btn" onClick={clickHandler}>
            <Button name={name}/>
            </div>
          </div>
        </div>
      </div>
      <footer className='main-footer'>
        <div className="brand-name">
          <div className="brand">CARTOPIA</div>
          <p>Experience refined elegance with our minimalist brand.</p>
        </div>
        <div className="subscribe">
          <div className="brand">Subscribe to get important updates</div>
          <form action="" className='formspree'>
            <input className='email-box' type="email" placeholder='YOUR EMAIL' />
            <button className="button-89">Subscribe</button>
          </form>
        </div>
        <div className="social-media">
        <div className="brand">Follow Us</div>
        <div className="social-icons">
          <a href='#' className="social-icon"><FaLinkedinIn size={28} color='#7a39fa'/></a>
          <a href='#' className="social-icon"><BsTwitterX size={28}color='#7a39fa'/></a>
          <a href='#' className="social-icon"><SiDiscord size={28} color='#7a39fa'/></a>
        </div>
        </div>
        <div className="contacting">
          <div className="brand">Call Us</div>
          <div className="number">+91 8318244060</div>
        </div>
      </footer>
      <div className="last">
        <div className="copyright">@{new Date().getFullYear()} CARTOPIA. All Rights Reserved</div>
        <div className="privacy">
        <div>PRIVACY POLICY</div>
        <div>TERMS & CONDITIONS</div>
        </div>
      </div>
    </div>
  )
}

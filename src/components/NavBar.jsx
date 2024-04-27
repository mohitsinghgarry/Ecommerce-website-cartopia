import { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { FaCartPlus } from "react-icons/fa6";
import './NavBar.css';
import { useCartcontext } from '../context/CartContext';

export const NavBar=()=>{
    const[activeLink , setActiveLink] = useState('Home');
    const[scrolled, setScroll] = useState(false);
    const{total_item} = useCartcontext();
    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
      }
    useEffect(()=>{
        const onscroll =()=>{
            if(window.scrollY >50) setScroll(true);
            else setScroll(false);
        }
        window.addEventListener('scroll', onscroll);
        return(()=>{
            window.removeEventListener('scroll', onscroll);
        })
    },[]);
   return(
    <Navbar expand="lg" className={scrolled? "scrolled":""}>
    <Container>
    <Navbar.Brand href="/">
      <img className='logo' src="/logo1.png" alt="logo" />
</Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="ms-auto">
              <NavLink to='./'  className={activeLink === 'Home' ? 'active navbar-link' : 'navbar-link'}  onClick={() => onUpdateActiveLink('Home')}>HOME</NavLink>
              <NavLink to='./About' className={activeLink === 'About' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('About')}>ABOUT</NavLink>
              <NavLink to='./Products' className={activeLink === 'Products' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Products')}>PRODUCTS</NavLink>
              <NavLink to='./ContactUs' className={activeLink === 'ContactUs' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('ContactUs')}>CONTACT US</NavLink>
              <NavLink to='./Cart' className={activeLink === 'Cart' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('Cart')}><FaCartPlus size={28} /> <span className='count-cart'>{total_item}</span> </NavLink>
            </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
   );
}
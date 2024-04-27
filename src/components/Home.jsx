import React, { useContext } from 'react'
import { Services } from './Services';
import { Trusted } from './Trusted';
import { HerooContent } from './HerooContent';
import { FaArrowAltCircleUp } from "react-icons/fa";
import '../css-files/Home.scss'
import { FeatureProduct } from './FeatureProduct';
import { AppContext } from '../context/AppContext';
import { Spinner } from './Spinner';
export const Home = () => {
  const {loading} = useContext(AppContext);
  return (
   <div className='home-content'>
    <HerooContent/>
    {loading ? <Spinner/> : <FeatureProduct/>}
    <Services/>
    <Trusted/>
    </div>

     
  )
}

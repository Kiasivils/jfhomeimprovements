import React from 'react'
import About from './About.js'
import Information from './Information.js'
import  OurWork from './OurWork.js'
import Testimonials from './Testimonials';
import  ContactUs from './ContactUs.js';
import Navbar from '../header/Navbar.js'
import './componentStyles.css';
import { useRef } from 'react';
import Link  from 'react-scroll';
import logo from '../images/logo.png'


const Home = () => {

  const handleClick = () => {
    document.getElementById('ourwork').scrollIntoView({
      behavior: 'smooth', 
      block: 'end'
    })
    console.log(handleClick)
  }

 return (
   <>
   <div className='home-screen' id='/'>
         <div className='home-info'>
           <div className='home-background'>
               <img classname='logo' src={logo}/>
               <h1>Commerical & Residential </h1>
               <button onClick={handleClick}>VIEW OUR WORK</button>
            </div>
         </div>
   </div>
 <Information/>
  <About/>
  <OurWork/>
 <Testimonials/>
 <ContactUs/> 
</>
 )
}


export default Home

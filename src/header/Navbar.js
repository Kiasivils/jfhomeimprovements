import React, {useState} from 'react'
import { FaBars } from "react-icons/fa"
import { ImCross } from "react-icons/im"
import { Link } from 'react-scroll';
import './Navbar.css';





const Navbar = () => {


   const [Mobile, setMobile] = useState(false)


 return (
   <nav className="navbar">
           <a className= 'logo-nav'/>
               <ul className={Mobile ? "nav-links-mobile" : "nav-links"} onClick={()=> setMobile(false)}>
               <Link to='/' spy={true} smooth={true} offset={-100} duration={500}>Home</Link>
               <Link to='information' spy={true} smooth={true} offset={-100} duration={500}>What We Do</Link>
               <Link to='about' spy={true} smooth={true} offset={-100} duration={500}>About Us</Link>

               <Link to='ourwork' spy={true} smooth={true} offset={-100} duration={500}>Our Work</Link>
               <Link to='testimonials' spy={true} smooth={true} offset={-100} duration={500}>Testimonials</Link>
               <Link to='contact' spy={true} smooth={true} offset={-150} duration={500}>Contact Us</Link>
               </ul>
               <button className='mobile-menu-icon' onClick={()=> setMobile(!Mobile)}>
                   {Mobile? <ImCross/> : <FaBars /> }
               </button>
 </nav>
 )
}


export default Navbar
import React from 'react'
import './componentStyles.css';
import placeholder from '../images/images.png'




const About = () => {
  const handleClick = () => {
    document.getElementById('contact').scrollIntoView({
      behavior: 'smooth', 
      block: 'end'
    })
    console.log(handleClick)
  }

 return (
   <>
     <div className='about-us' id='about'>
     <div className="about-usinfo">
       <img src={placeholder} alt='build ' />
       <div className='about-uscontent'>
         <h1>About Us</h1>
         <p>We are a building company based in the beautiful Louisville, Kentucky that has worked on projects in Indiana, and Tennessee. Proud of our roots, we try to be modernized in the way we go about our business. As a business, we would like to contribute to that beauty by creating amazing buildings constructed with great craftsmanship.</p>
         <p>Having a wealth of experience in building and construction management, we can tackle small extensions to large new build projects. We are happy working with both traditional building materials and new construction methods in commercial and residential.  The quality of our workmanship and customer service is without compromise.  In addition to our in-house skills, we have a network of first-rate contractors and professionals. If required, we can provide you with assistance with architects, planning, structural engineers, costings, and project management.</p>
         <p>You’ll find us easy to work with, honest, proactive in our approach and forthcoming with information. Together we’ll create a finished building to be proud of.</p>
       </div>
     </div>
   </div><div className="about-us-contact">
       <h1>Have a JF Home Improvements building project in mind?</h1>
       <button onClick={handleClick}>Get In Touch</button>
     </div></>
 )
}


export default About

import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  faFacebookF , faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope, faLocationDot } from '@fortawesome/free-solid-svg-icons';






const ContactUs = () => {

// function sendEmail() {
//   Email.send({
//     Host : "smtp.elasticemail.com",
//     Username : "username",
//     Password : "password",
//     To : 'them@website.com',
//     From : "you@isp.com",
//     Subject : "This is the subject",
//     Body : "And this is the body"
// }).then(
//   message => alert(message)
// );
// }


    return (
    <div className='flex-box-container' id='contact'>
      <div className='contact-form'>
          <div className='contact-info'>
              <h1>Contact Us</h1>
              <form action="https://formsubmit.co/your@email.com" method="POST">
                  <input type='text' id='name' placeholder= 'Name' ></input>
                  <input type='text' id='email' placeholder= 'Email Address' ></input>
                  <input type='number' id='phonenumber' placeholder='Phone No.'></input>
                  <textarea type='text' id='message' placeholder= 'Message' ></textarea>
                  <button type='submit'>GET IN TOUCH</button>
              </form>
          </div>
          <div className='social'>
              <div className='social-links'>
              <a href='https://www.facebook.com/profile.php?id=61553842855548' target='_blank'><i><FontAwesomeIcon icon={faFacebookF} /></i></a>
              <a href='https://www.instagram.com/jfhomeimprovementsllc/?igshid=YTQwZjQ0NmI0OA%3D%3D' target='_blank'><i><FontAwesomeIcon icon={faInstagram} /></i></a>
              </div>
              <div className='getNtouch'>
                <p>We look forward to working with clients who have an eye for detail and a love of high-quality build. </p>
                <p>We are a Louisville based builder but will consider projects in the surrounding areas and state:</p>
                <ul>
                  <li>Chattanooga, Tennessee</li>
                  <li>Nashville, Tennessee</li>
                  <li>Northern, Indiana</li>
                  <li>Southern, Indiana</li>
                  <li>Evansville, Indiana</li>
                  <li>Western Kentucky</li>
                  <li>Lexington, Kentucky</li>
                </ul>
                <div className='contacts'>
                <p><i><FontAwesomeIcon icon={faPhone} /></i>502-299-5284</p>
                <p><i><FontAwesomeIcon icon={faEnvelope}/></i>Jafigueroaconstruction@gmail.com</p>
                </div>
            </div>
   
   
          </div>
      </div>
      </div>
    )
   }
   
   
   
   
   export default ContactUs
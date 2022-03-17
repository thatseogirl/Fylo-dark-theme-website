import React from 'react'
import logo from "../../images/logo.svg"
import location from "../../images/location.svg";
import phone from "../../images/phone.svg";
import email from "../../images/email.svg";
import {BsFacebook } from "react-icons/bs"
import {AiFillTwitterCircle} from "react-icons/ai"
import {GrInstagram} from "react-icons/gr"

export default function Footer() {
  return (
    <footer>
      <img 
      src={logo}
      alt="Logo"
      className='footer_img'/>
      <section className='footer_flex'>
    <div className='footer_flex_1'>
      <div>
        <img src={location}
        alt="Map-Icon"
        className='map' />
      </div>
      <div>
        <p>Lorem ipsum dolor sit amet, consectetur </p>
        <p>adipiscing elit, sed do eiusmod tempor </p>
        <p>incididunt ut labore et dolore magna aliqua</p>
      </div>
    </div>
    <div className='footer_flex_1_2'>
      <div>
      <p className='contact'> <img src={phone} 
        alt="phone"
        className='phone'/>
       +1-543-123-4567</p>
      </div>
      <div>
      <p>  <img src={email} 
        alt="email"
        className='email'/>
         example@fylo.com </p>
      </div>
    </div>
    <div className='footer_flex_1_2_3'>
      <ul>
        <li> About Us</li>
        <li> Jobs</li>
        <li> Press</li>
        <li> Blog</li>
      </ul>
    </div>
    <div className='footer_flex_1_2_3_4'>
    <ul>
        <li> Contact Us</li>
        <li> Terms</li>
        <li> Privacy</li>
      </ul>
    </div>
    <div>
    <ul className='footer_flex_1_2_3_4_socialmedia'>
      <li><BsFacebook /></li>
      <li><AiFillTwitterCircle /></li>
      <li><GrInstagram /></li>
    </ul>
    </div>
      </section>
    </footer>
  )
}

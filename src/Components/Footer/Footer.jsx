import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="web__footer">
        <div className="social__media">
            <img src={assets.insta} alt="insta" className='social' />
            <img src={assets.x} alt="insta" className='social' />
            <img src={assets.youtube} alt="insta" className='social'/>
            <img src={assets.linkedin} alt="insta" className='social'/>
        </div>
        <div className="logo">
            <Link to='./'><h2>SanFoodDel...</h2></Link>
        </div>
        <div className="banner__links">
            <a href="https://www.vecteezy.com/free-photos/food-delivery" target='_blank'>Food Delivery Stock photos by Vecteezy</a>
            <p>
                Product Images and their data used in the project were non-copyright asstets, downloaded from a Youtube Video Descr.
            </p>
        </div>
        <div className="copy__rights">
            <p>Copy right © 2024 Crafted by <a href="https://sanfolio.netlify.app/" target='_blank'>SANTHOSHKUMAR</a></p>
        </div>
    </div>
  )
}

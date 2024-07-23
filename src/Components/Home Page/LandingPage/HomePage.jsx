import React from 'react'
import './HomePage.css'
import { Collection } from '../Collection/Collection'
import { Products } from '../Products/Products'
import { useNavigate } from 'react-router-dom'

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="home">
        <div className="home__content">
          <h1 className='tagline'>Delicious Food Delivered Fast! <span>🍽️</span></h1>
          <p className='tag__para'>Craving something tasty? With just a few clicks, discover local favorites and exotic cuisines delivered fast to your doorstep. Enjoy a seamless ordering experience and savor every bite without the wait.</p>
          <button onClick={() => { navigate('/shop') }}>SHOP</button>
        </div>
      </div>
      <Collection />
      <Products />
    </>
  )
}

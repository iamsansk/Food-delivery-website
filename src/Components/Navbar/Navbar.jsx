import React, { useContext } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom'
import { StoreContext } from '../Context/StoreContext'

export const Navbar = () => {
   const {cartCount} =  useContext(StoreContext);
    return (
        <>
            <div className="header">
                <div className="logo">
                    <Link to="/"><h2>SanFoodDel...</h2></Link>
                </div>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/deals">Deals</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                    </ul>
                </nav>
                <div className="cart-profile">
                    <Link to='/cart'><img src={assets.cart} alt="cart" />{cartCount>0 && <span className='cart__count'>{cartCount}</span>}</Link>
                    <img src={assets.profile} alt="profie" />
                </div>
            </div>
            <div className="footer-menu">
                <ul>
                    <li><Link to="/"><img src={assets.home} alt="home" /><div className='menu__name'>Home</div></Link></li>
                    <li><Link to="/deals"><img src={assets.shop} alt="shop" /><div className='menu__name'>Deals</div></Link></li>
                    <li><Link to="/contact"><img src={assets.contact} alt="contact" /><div className='menu__name'>Contact</div></Link></li>
                    <li><Link to="/cart" className='mobile__cart'><img src={assets.cart} alt="cart" />{cartCount>0 && <span className='cart__count__mobile'>{cartCount}</span>}<div className='menu__name'>Cart</div></Link></li>
                </ul>
            </div>
        </>
    )
}

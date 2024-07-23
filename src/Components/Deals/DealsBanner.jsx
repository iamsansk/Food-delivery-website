import React from 'react'
import { assets } from '../../assets/assets'

export const DealsBanner = () => { 
    return (
        <div className="deals__banner">
            <div className="deals__content">
                <h1>Delicious Deals - 20% Off!</h1>
                <p>Enjoy a delightful dining experience with our exclusive 20% discount on select products. Indulge in a variety of cuisines, from mouth watering pizzas to delicious desserts, all at a discounted price.</p>
                <h4>Offer Details:</h4>
                <ul>
                    <li><span>Discount :</span> 20% off on selected items</li>
                    <li><span>Validity :</span> Limited time offer</li>
                    <li><span>Eligibility :</span> All customers</li>
                </ul>
                <p>Hurry, these deals won't last long! Order your favorites today and enjoy the perfect blend of taste and savings.</p>
            </div>
            <div className="deals__image">
                <img src={assets.dealsImage} alt="Deals" />
            </div>
        </div>
    )
}

import React, { useContext, useEffect } from 'react'
import { useState } from 'react'
import { assets } from '../../../assets/assets'
import './Products.css'
import { StoreContext } from '../../Context/StoreContext'

export const Product = ({id,name,price,offerPrice,image,description}) => {
  const {cartItems,CartAddItems,RemoveCartItems} = useContext(StoreContext);
  return (
    <div className='product' key={id}>
        <img src={image} alt={name} className="food__images"/>
            <div className="product__content">
                <h4 className='food__name'>{name}</h4>
                <p className='rating'>⭐⭐⭐⭐</p>
                <p className='description'>{description}</p>
                <div className="price_qty">
                    <p className='price'><span className={offerPrice?"strike__through" : ""}>₹{offerPrice ? "₹"+offerPrice: price}</span><span className='price__final'>{offerPrice ? "₹"+price: ""}</span></p>
                      <div>
                        {
                          !cartItems[id]?<img src={assets.addToCart} onClick={()=>CartAddItems(id)} alt="add_btn" className='addToCart__btn'/>:
                          <div className="qty-selector">
                            <img src={assets.remove_icon_red} onClick={()=>RemoveCartItems(id)} alt="add_btn" className='qty__icon'/>
                            {cartItems[id]}
                            <img src={assets.add_icon_green} onClick={()=>CartAddItems(id)} alt="add_btn" className='qty__icon'/>
                          </div>
                        }
                      </div>
                </div>
            </div>
        </div>
  )
}

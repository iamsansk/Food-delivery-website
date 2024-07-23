import React, { useContext, useEffect } from 'react'
import { food_list, assets } from '../../assets/assets'
import { StoreContext } from '../Context/StoreContext'
import { Link, useNavigate } from 'react-router-dom'
import './Cart.css'

export const Cart = () => {
  const { cartItems, RemoveCartItems, CartAddItems, cartTotal } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className="cart__container">
      <h1>Your Cart</h1>
      <div className="cart__header cart__items">
        <p>Product</p>
        <p>Quantity</p>
        <p>Total</p>
      </div>
      <hr />
      {
        food_list.map(item => {
          if (cartItems[item._id]) {
            return (
              <div key={item._id}>
                <div className="cart__items">
                  <div className="image__price">
                    <img src={item.image} alt={item.name} />
                    <div className="price__name">
                      <h4>{item.name}</h4>
                      <p>₹{item.price}</p>
                    </div>
                  </div>
                  <div className="quantity_container">
                    <img src={assets.remove_icon_red} onClick={() => RemoveCartItems(item._id)} alt="add_btn" className='qty__icon' />
                    {cartItems[item._id]}
                    <img src={assets.add_icon_green} onClick={() => CartAddItems(item._id)} alt="add_btn" className='qty__icon' />
                  </div>
                  <div className="product__total">
                    <h4>₹{cartItems[item._id] * item.price}.00</h4>
                  </div>
                </div>
                <hr />
              </div>
            )
          }
        })
      }
      {cartTotal() > 0 ? 
      <>
        <div className="total__price">
          <h1 className='sub__total'>Subtotal : ₹{cartTotal()}.00</h1>
          <p>Shipping is Calculated at Checkout</p>
          <button onClick={()=>navigate("/checkout")} className='checkout__btn'>PROCEED TO CHECKOUT</button>
        </div>
      </>
        :
        <div className="empty__cart">
          <p className='cart__empty__msg'>Your Cart is Empty</p>
          <button onClick={()=>navigate("/")} className='continue__shopping__btn'>Continue Shopping</button>
        </div>
      }

    </div>
  )
}

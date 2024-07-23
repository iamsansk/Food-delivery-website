import React, { useContext, useEffect, useRef, useState } from 'react'
import './ThankYou.css'
import { StoreContext } from '../Context/StoreContext';
import { food_list } from '../../assets/assets'
export const ThankYou = () => {
    const { address } = useContext(StoreContext);
    const orderedItems = JSON.parse(sessionStorage.getItem("order")) || [];
    const [coupancode,setCoupanCode] = useState("");
    const buttonRef = useRef(null);

    //generating coupan code
    const generateCoupancode = function(){
        let coupan = "SFD" + Math.floor(Math.random()*1000);
        setCoupanCode(coupan);
    }
    useEffect(()=>{
        generateCoupancode();
    },[]);

    const copyTextToClipboard = async()=>{
        try{
            await navigator.clipboard.writeText(coupancode);
            buttonRef.current.innerText = "copied!"
            
        }catch(err){
            console.error("Error!!! While Copying CLipboard");
        }
    }
    return (
        <div className="thankyou__container">
            <div className="next__order__offer">
                <div className="border__line">
                    <h3>20% OFF on your next order</h3>
                    <p>You can use below code to get 20% on next order</p>
                    <div className="coupan">
                        <input type="text" value={coupancode || ""} readOnly />
                        <button ref={buttonRef} onClick={copyTextToClipboard}>copy</button>
                    </div>
                </div>
            </div>
            <div className="thankyou__section">
                <h1>THANK YOU!!!</h1>
            </div>
            <div className="order__placed__msg">
                <p>Hi, {address.firstName},<br />Order confirmed! We'll notify you as soon as it's dispatched!</p>
                <button>Check Order Status</button>
            </div>
            <div className='order__id'>
                <h2>Order ID : #4217SD</h2>
            </div>
            <hr />
            <div className="cartItems">
                {food_list.map(item => {
                    if (orderedItems[item._id]) {
                        return (
                            <div key={item._id} className='each__item'>
                                <div className="image_price">
                                    <img src={item.image} alt={item.name} />
                                    <div className="price_name">
                                        <h4>{item.name}</h4>
                                        <p>₹{item.price} x {orderedItems[item._id]}</p>
                                    </div>
                                </div>
                                <div className="product_total">
                                    <h4>₹{orderedItems[item._id] * item.price}.00</h4>
                                </div>
                            </div>
                        )
                    }
                })}
            </div>
            <div className="total__amount">
                <hr />
                <div className="amount__field">
                    <p>SubTotal</p>
                    <p>₹{orderedItems["amount"]}.00</p>
                </div>
                <div className="amount__field">
                    <p>Shipping</p>
                    <p>{orderedItems["shippingCharge"] > 0 ? "₹" + orderedItems["shippingCharge"] + ".00" : "FREE"}</p>
                </div>
                <hr />
                <div className="amount__field">
                    <h3>Total</h3>
                    <h3>₹{orderedItems["shippingCharge"] + orderedItems["amount"]} .00 </h3>
                </div>
                <hr />
            </div>
        </div>
    )
}

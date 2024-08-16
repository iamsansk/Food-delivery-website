import React, { useContext, useEffect, useState } from 'react'
import './Checkout.css'
import { StoreContext } from '../Context/StoreContext'
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const Checkout = () => {
  const navigate = useNavigate();
  const { cartTotal, cartItems, setCartItems } = useContext(StoreContext);
  const { address, setAddress, shipping } = useContext(StoreContext);

  const notifyError = (msg) => {
    toast.error(msg, {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      transition: Bounce,
    });
  };
  const notifyOrderPlaced = () => {
    const id = toast.loading("Order processing...", {
      position: "top-right",
      autoClose: false,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
      transition: Bounce,
    });

    setTimeout(() => {
      toast.update(id, {
        render: "Order placed!",
        type: "success",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
        transition: Bounce,
        icon: "🟢",
      });
      setTimeout(() => {
        navigate('/thankyou');
        setCartItems({});
      }, 2000);
    }, 3000); // Change to the desired timeout duration
  };


  const handleInput = (e) => {
    setAddress(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }
  //function for clearing form
  const clearForm = () => {
    setAddress({
      "firstName": "",
      "lastName": "",
      "email": "",
      "addressField": "",
      "city": "",
      "state": "",
      "country": "",
      "pincode": "",
      "pNumber": "",
    });
  }

  const payNow = () => {
    const hasEmptyString = Object.values(address).some(
    value => !value || value.trim() === ""
    );
    if (hasEmptyString) {
      notifyError("Enter All the Fields!");
      return;
    } 
    else if(Object.keys(cartItems).length === 0){
      notifyError("Add items to the cart before checkout");
      return;
    }
    else {
      localStorage.setItem("address", JSON.stringify(address));
      //adding placed order to session storage
      sessionStorage.setItem("order", JSON.stringify({...cartItems,amount:cartTotal(),shippingCharge:shipping}));
      notifyOrderPlaced();
    }
  }

  return (
    <div className="checkout__container">
      <div className="address__field">
        <div className="checkout__header">
          <h2>Delivery Information</h2>
          <p onClick={clearForm} className='continue__shipping'>clear</p>
        </div>
        <form action="#">
          <div className="input_field">
            <input type="text" placeholder='First Name' value={address.firstName || ""} name='firstName' onChange={(e) => handleInput(e)} required />
            <input type="text" placeholder='Last Name' value={address.lastName || ""} name='lastName' onChange={(e) => handleInput(e)} required />
          </div>
          <div className="input_field full__field">
            <input type="email" placeholder='Email' value={address.email || ""} name='email' onChange={(e) => handleInput(e)} required />
          </div>
          <div className="input_field full__field">
            <input type="text" placeholder='Address' value={address.addressField || ""} name='addressField' onChange={(e) => handleInput(e)} required />
          </div>
          <div className="input_field">
            <input type="text" placeholder='City' value={address.city || ""} name='city' onChange={(e) => handleInput(e)} required />
            <input type="text" placeholder='State' value={address.state || ""} name='state' onChange={(e) => handleInput(e)} required />
          </div>
          <div className="input_field">
            <input type="text" placeholder='Country' value={address.country || ""} name='country' onChange={(e) => handleInput(e)} required />
            <input type="number" placeholder='Pincode' value={address.pincode || ""} name='pincode' onChange={(e) => handleInput(e)} required />
          </div>
          <div className="input_field full__field">
            <input type="number" placeholder='Phone Number' value={address.pNumber || ""} name='pNumber' onChange={(e) => handleInput(e)} required />
          </div>
        </form>
      </div>
      <div className="payment__detail">
        <div className="checkout__header">
          <h2>Cart Totals</h2>
          <p onClick={() => navigate("/")} className='continue__shipping'>Continue Shopping🛒</p>
        </div>
        <hr />
        <div className="amount__field">
          <p>SubTotal</p>
          <p>₹{cartTotal()}.00</p>
        </div>
        <div className="amount__field">
          <p>Shipping</p>
          <p>{shipping > 0 ? "₹" + shipping + ".00" : "FREE"}</p>
        </div>
        <div className="input_field full__field">
          <input type="text" placeholder='Discount Code' />
        </div>
        <br />
        <hr />
        <div className="amount__field">
          <h3>Total</h3>
          <h3>₹{shipping + cartTotal()} .00 </h3>
        </div>
        <div className="full__field">
          <input type="submit" onClick={payNow} value='PAY NOW' required />
        </div>
        <div className="policy">
          <a href="#">Refund Policy</a>
          <a href="#">Contact Information</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
      {/* Same as */}
      <ToastContainer />
    </div>
  )
}

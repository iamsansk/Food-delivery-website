import React from 'react'
import './Contact.css'

export const Contact = () => {
  return (
    <div className="contact-form">
        <form action="#">
            <h1>Contact Form</h1>
            <div className="name__field">
                <input type="text" placeholder='First Name' required/>
                <input type="text" placeholder='Last Name' required/>
            </div>
            <input type="email" placeholder='Email' required/>
            <input type="number" placeholder='Phone Number' required/>
            <textarea placeholder='Write your Message here..' required></textarea>
            <button type='submit'>SUBMIT</button>
        </form>
    </div>
  )
}
